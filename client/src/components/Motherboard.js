import React from 'react';
import Products from './Products';
import { Input } from 'reactstrap';

class Motherboard extends React.Component {
  state = {
    data: [
      {
        img: '../images/motherboards/prime-a520m-a-image-main-600x600.jpg',
        title: 'Asus Prime A520M-A Motherboard',
        brand: 'Asus',
        availibility: true,
        cost: 6049,
        id: 1,
      },
      {
        img: '../images/motherboards/ex-a320m-gaming_main-600x600.jpg',
        title: 'Asus EX-A320M-GAMING',
        brand: 'Asus',
        availibility: true,
        cost: 4999,
        id: 2,
      },
      {
        img: '../images/motherboards/prime-b450m-a-ii-image-main-600x600.jpg',
        title: 'Asus Prime B450M-A II Motherboard',
        brand: 'Asus',
        availibility: true,
        cost: 7275,
        id: 3,
      },
      {
        img:
          '../images/motherboards/b450-gaming-plus-max-image-main-600x600.jpg',
        title: 'MSI B450 Gaming Plus Max',
        brand: 'MSI',
        availibility: true,
        cost: 10999,
        id: 4,
      },
      {
        img:
          '../images/motherboards/h310m-pro-vdh-plus-images-main-600x600.jpg',
        title: 'MSI H310M Pro-VDH Plus',
        brand: 'MSI',
        availibility: true,
        cost: 4349,
        id: 5,
      },
      {
        img: '../images/motherboards/b450-steel-legend-image-main-600x600.jpg',
        title: 'ASRock B450 Steel Legend Motherboard',
        brand: 'ASRock',
        availibility: true,
        cost: 9499,
        id: 6,
      },
      {
        img:
          '../images/motherboards/b460-phantom-gaming-4-image-main-600x600.jpg',
        title: 'ASRock B460 Phantom Gaming 4 Motherboard',
        brand: 'ASRock',
        availibility: true,
        cost: 9675,
        id: 7,
      },
    ],
    filterOptions: {
      brand: ['MSI', 'Asus', 'ASRock'],
    },
  };
  render() {
    return (
      <Products
        data={this.state.data}
        title='Motherboard'
        filterOptions={this.state.filterOptions}
      />
    );
  }
}

export default Motherboard;
