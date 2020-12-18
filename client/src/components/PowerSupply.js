import React from 'react';
import Products from '../components/Products';

class PowerSupply extends React.Component {
  state = {
    data: [
      {
        img: '../images/psu/np-c650m-uk-image-main-600x600.jpg',
        title: 'NZXT C650 650 Watt 80 Plus Gold SMPS',
        brand: 'NZXT',
        cost: 9750,
        id: 1,
      },
      {
        img: '../images/psu/mpe-6501-acabw-bin-image-main-600x600.jpg',
        title: 'Cooler Master MWE 650 V2 80 Plus Bronze SMPS',
        brand: 'Cooler Master',
        cost: 4650,
        id: 2,
      },
      {
        img: '../images/psu/hcg-750-image-main-600x600.jpg',
        title: 'Antec HCG750 80 Plus Bronze SMPS',
        brand: 'Antec',
        cost: 6950,
        id: 3,
      },
    ],
    filterOptions: {
      brand: ['NZXT', 'Cooler Master', 'Antec'],
      wattage: ['650 Watt', '750 Watt'],
    },
  };

  render() {
    return (
      <Products
        data={this.state.data}
        filterOptions={this.state.filterOptions}
        title='Power Supplies'
      />
    );
  }
}

export default PowerSupply;
