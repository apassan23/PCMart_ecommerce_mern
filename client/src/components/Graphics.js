import React from 'react';
import Products from './Products';

class Graphics extends React.Component {
  state = {
    data: [
      {
        img: '../images/graphics/rtx3060ti-o8g-image-main-600x600.jpg',
        title: 'Asus DUAL RTX 3060 Ti OC 8GB',
        brand: 'Asus',
        availibility: true,
        cost: 44999,
        id: 1,
      },
      {
        img:
          '../images/graphics/dual-rtx2070-08g-evo-v2-image-main-600x600.jpg',
        title: 'Asus RTX 2070 Dual EVO V2 OC 8GB',
        brand: 'Asus',
        availibility: true,
        cost: 35499,
        id: 2,
      },
      {
        img:
          '../images/graphics/rog-strix-rtx3070-o8g-gaming-image-main-600x600.jpg',
        title: 'Asus ROG Strix RTX 3070 OC 8GB',
        brand: 'Asus',
        availibility: true,
        cost: 75499,
        id: 3,
      },
      {
        img: '../images/graphics/gv-n3080aorus-x-10gd-image-main-600x600.jpg',
        title: 'Gigabyte Aorus RTX 3080 Xtreme 10GB',
        brand: 'Gigabyte',
        availibility: true,
        cost: 113199,
        id: 4,
      },
      {
        img: '../images/graphics/rx-5600-xt-mech-oc-6gb-image-main-600x600.jpg',
        title: 'MSI RX 5600 XT Mech OC 6GB',
        brand: 'MSI',
        availibility: true,
        cost: 28499,
        id: 5,
      },
      {
        img: '../images/graphics/zt-a30900d-10p-image-main-600x600.jpg',
        title: 'Zotac RTX 3090 Trinity 24GB',
        brand: 'Zotac',
        availibility: true,
        cost: 153999,
        id: 6,
      },
    ],
    filterOptions: {
      brand: ['MSI', 'Asus', 'Zotac', 'Gigabyte'],
      'memory types': ['GRDDR5', 'GDDR6', 'GDDR6X'],
      manufacturer: ['Nvidia', 'AMD'],
      vram: ['6GB', '8GB', '10GB', '24GB'],
      fans: ['Dual', 'Triple'],
    },
  };
  render() {
    return (
      <Products
        data={this.state.data}
        title='Graphics Card'
        filterOptions={this.state.filterOptions}
      />
    );
  }
}

export default Graphics;
