import React from 'react';
import Products from './Products';

class Processor extends React.Component {
  state = {
    data: [
      {
        img: '../images/processors/bx8070110400f-image-main-600x600.jpg',
        cost: 12899,
        title: 'Intel Core i5-10400F',
        brand: 'Intel',
        availability: true,
        id: 1,
      },
      {
        img: '../images/processors/bx8070110100f-image-main-600x600.jpg',
        cost: 6999,
        title: 'Intel Core i3-10100F',
        brand: 'Intel',
        availability: true,
        id: 2,
      },
      {
        img: '../images/processors/bx8070110900k-image-main-600x600.jpg',
        cost: 40999,
        title: 'Intel Core i9-10900K',
        brand: 'Intel',
        availability: true,
        id: 3,
      },
      {
        img: '../images/processors/ryzen-3-2200g-2-600x600.jpg',
        cost: 7399,
        title: 'AMD Ryzen 3 2200G',
        brand: 'AMD',
        availability: true,
        id: 4,
      },
      {
        img: '../images/processors/3600-(1)-600x600.jpg',
        cost: 17899,
        title: 'AMD Ryzen 5 3600',
        brand: 'AMD',
        availability: true,
        id: 5,
      },
      {
        img: '../images/processors/ryzen-9-3950x-image-main-600x600.jpg',
        cost: 63999,
        title: 'AMD Ryzen 9 3950X',
        brand: 'AMD',
        availability: true,
        id: 6,
      },
    ],
    filterOptions: {
      brand: ['Intel', 'AMD'],
      frequency: ['2.9GHz', '3.6GHz', '3.7GHz', '4.7GHz'],
      unlocked: ['Yes', 'No'],
      cores: ['4 cores', '6 cores', '10 cores', '16 cores'],
      socket: ['LGA1200', 'AM4'],
    },
  };

  render() {
    return (
      <Products
        data={this.state.data}
        filterOptions={this.state.filterOptions}
        title='Processors'
      />
    );
  }
}

export default Processor;
