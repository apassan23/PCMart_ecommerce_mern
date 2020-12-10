import React from 'react';
import Products from './Products';

class Memory extends React.Component {
  state = {
    data: [
      {
        img: '../images/memory/3600-(1)-600x600.jpg',
        title: 'Corsair Dominator Platinum 16GB (8GBx2) DDR4 3000MHz',
        cost: 9699,
        brand: 'Corsair',
        availibility: true,
        id: 1,
      },
      {
        img: '../images/memory/cmt16gx4m2c3000c15-images-main-600x600.jpg',
        title: 'Corsair Dominator Platinum RGB 16GB (8GBx2) DDR4 3000MHz',
        cost: 10349,
        brand: 'Corsair',
        availibility: true,
        id: 2,
      },
      {
        img:
          '../images/memory/g-skill-trident-z-rgb-ddr4f4-3000c16d-16gtzr-6645-600x600.jpg',
        title: 'G.Skill Trident Z RGB 16GB (8GBx2) DDR4 3000MHz',
        cost: 8999,
        brand: 'G.Skill',
        availibility: true,
        id: 3,
      },
      {
        img: '../images/memory/f4-2400c17s-4gvr-1-600x600.jpg',
        title: 'G.Skill Ripjaws V 8GB DDR4 3000MHz',
        cost: 2999,
        brand: 'G.Skill',
        availibility: true,
        id: 4,
      },
    ],
    filterOptions: {
      brand: ['Corsair', 'G.Skill'],
      'memory type': ['DDR4'],
      frequency: ['3000MHz'],
      capacity: ['8GB', '16GB'],
    },
  };

  render() {
    return (
      <Products
        data={this.state.data}
        filterOptions={this.state.filterOptions}
        title='Memory Modules'
      />
    );
  }
}

export default Memory;
