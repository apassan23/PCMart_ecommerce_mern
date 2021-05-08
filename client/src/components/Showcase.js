import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Showcase extends React.Component {
  state = {
    items: [
      {
        src: './images/8k-fb-600-p@2x(1).jpg',
        category: 'GPUs',
        headline: "RTX. It's On.",
        desc:
          'Experience today’s biggest blockbusters like never before with the visual fidelity of real-time ray tracing and the ultimate performance of AI-powered DLSS. RTX. It’s On.',
        link: '/components/graphic_card',
      },
      {
        src: './images/asus(1).jpg',
        category: 'Motherboards',
        headline: 'ASUS Z490 Series',
        desc:
          'The ASUS Z490 series features innovative designs that unleash the power of the latest 10th Gen Intel® Core™ processors. With intelligent overclocking, revolutionary cooling, robust power solution, optimized memory and next-gen connectivity, these boards come equipped to help you get the most out of your next Intel Z490 build. Yet, each model has its own distinctive traits, designed with specific segments in mind.',
        link: '/components/motherboard',
      },
      {
        src: './images/vengeance_rgb.jpg',
        category: 'Memory Modules',
        headline: 'Corsair Vengeance RGB',
        desc:
          'CORSAIR VENGEANCE RGB Series DDR4 overclocked memory lights up your PC with mesmerizing dynamic multi-zone RGB lighting, while delivering the best in DDR4 performance.',
        link: '/components/memory',
      },
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div className='mt-5 container-fluid'>
        {items.map((item, index) => (
          <Row>
            <Col
              md='6'
              className='d-flex align-items-center'
              style={{
                order: index % 2 !== 0 ? 2 : 1,
                justifyContent: index % 2 !== 0 ? 'flex-start' : 'flex-end',
              }}>
              <div
                style={{
                  width: '70%',
                  paddingRight: index % 2 !== 0 ? 0 : '10%',
                  paddingLeft: index % 2 !== 0 ? '10%' : 0,
                }}>
                <h4 className='text-muted lead'>{item.category}</h4>
                <h2 className='text-uppercase'>{item.headline}</h2>
                <p className='text-wrap mt-4 mb-5'>{item.desc}</p>
                <Link to={item.link} className='custom-btn'>
                  Shop Now
                </Link>
              </div>
            </Col>
            <Col
              md='6'
              className='p-0'
              style={{ order: index % 2 !== 0 ? 1 : 2 }}>
              <img
                src={item.src}
                alt=''
                style={{ height: '100%', width: '100%' }}
              />
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}

export default Showcase;
