const router = require('express').Router();
const WishList = require('../../models/WishList');

router.get('/', (req, res) => {
  const { email } = req.query;
  if (!email) return res.status(400).json({ msg: 'no Email Provided!' });
  WishList.findOne({ email }).then((list) => {
    if (!list)
      return res
        .status(404)
        .json({ msg: 'No List exists with the email provided.' });
    else return res.status(200).json(list);
  });
});

router.post('/', (req, res) => {
  const { email, items } = req.body;
  if (!email)
    return res.status(400).json({ msg: 'No Email Provided!', code: 1 });
  WishList.findOne({ email }).then((list) => {
    if (list)
      return res.status(400).json({ msg: 'List Already Exists!', code: 2 });
    const newList = new WishList({ email, items });
    newList.save().then((list) => res.status(200).json(list));
  });
});

router.post('/update', (req, res) => {
  const { email, items } = req.body;
  if (!email) return res.status(400).json({ msg: 'No Email Provided!' });
  WishList.findOneAndUpdate({ email }, { items }, { new: true })
    .then((list) => res.status(200).json(list))
    .catch((err) => res.status(500).json(err));
});

router.post('/add', (req, res) => {
  const { email, item } = req.body;
  if (!email) return res.status(400).json({ msg: 'No Email Provided!' });
  WishList.findOne({ email }).then((list) => {
    if (list.items.includes(item))
      return res.status(400).json({ msg: 'Item already in the List' });
    let items = list.items;
    items.push(item);
    WishList.findOneAndUpdate({ email }, { items }, { new: true })
      .then((list) => res.status(200).json(list))
      .catch((err) => res.status(500).json(err));
  });
});

router.post('/delete', (req, res) => {
  const { email, item } = req.body;
  if (!email) return res.status(400).json({ msg: 'No Email Provided!' });
  WishList.findOne({ email }).then((list) => {
    let items = list.items.filter((itemID) => itemID !== item);
    WishList.findOneAndUpdate({ email }, { items }, { new: true })
      .then((list) => res.status(200).json(list))
      .catch((err) => res.status(500).json(err));
  });
});

module.exports = router;
