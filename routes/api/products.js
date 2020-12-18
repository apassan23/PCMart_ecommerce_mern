const router = require('express').Router();
const Product = require('../../models/Product');

router.get('/', (req, res) => {
  Product.find().then((items) => res.status(200).json(items));
});

router.get('/:type', (req, res) => {
  Product.find({ product_type: req.params.type }).then((items) =>
    res.json(items)
  );
});

router.post('/', (req, res) => {
  const newProduct = new Product({
    ...req.body,
  });

  newProduct.save().then((item) => res.status(200).json(item));
});

router.delete('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.json({ success: false }));
});

module.exports = router;
