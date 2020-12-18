import React from 'react';
import {
  Navbar,
  NavItem,
  NavLink,
  Collapse,
  NavbarBrand,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useSpring, animated } from 'react-spring';

const AnimatedChevron = ({ angle }) => {
  // TODO: fix chevron icon rotation
  const style = useSpring({
    transform: `rotate(${angle}deg)`,
  });
  return (
    <animated.svg
      width='0.6em'
      height='0.6em'
      viewBox='0 0 16 16'
      class='bi bi-chevron-down'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      style={style}>
      <path
        fill-rule='evenodd'
        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
      />
    </animated.svg>
  );
};

class AppNavbar extends React.Component {
  state = {
    isOpen: false,
    rotate: false,
    angle: {
      components: 0,
      accessories: 0,
      periphericals: 0,
    },
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  rotate = (event) => {
    let { rotate, angle } = this.state;
    let element = event.target.name;
    angle = {
      ...angle,
      [element]: rotate ? angle[[element]] + 180 : angle[[element]] - 180,
    };
    this.setState({
      angle,
      rotate: !rotate,
    });

    console.log(angle);
  };

  render() {
    return (
      <Navbar color='light' light expand='sm' id='navbar'>
        <NavbarBrand id='brand' href='/'>
          PCMart
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='mr-auto ml-5' navbar>
            <NavItem>
              <NavLink href='/'>HOME</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className='dropdown'>
              <DropdownToggle
                nav
                onClick={(event) => this.rotate(event)}
                onBlur={(event) => this.rotate(event)}
                name='components'>
                COMPONENTS{' '}
                <AnimatedChevron angle={this.state.angle.components} />
              </DropdownToggle>
              <DropdownMenu nav>
                <DropdownItem>
                  <NavLink href='/components/motherboard'>Motherboard</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/processor'>Processors</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/memory'>Memory</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/graphics'>Graphic Cards</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/psu'>Power Supplies</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href=''>Heat Sinks</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href=''>Secondary Memory</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className='dropdown'>
              <DropdownToggle
                nav
                onClick={(event) => this.rotate(event)}
                onBlur={(event) => this.rotate(event)}
                name='accessories'>
                ACCESSORIES{' '}
                <AnimatedChevron angle={this.state.angle.accessories} />
              </DropdownToggle>
              <DropdownMenu nav>
                <DropdownItem>
                  <NavLink>External HDD/SSD</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>Drive Bays</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>Cooling Fans / Radiators</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>Cables</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar className='dropdown'>
              <DropdownToggle
                nav
                onClick={(event) => this.rotate(event)}
                onBlur={(event) => this.rotate(event)}
                name='periphericals'>
                PERIPHERICALS{' '}
                <AnimatedChevron angle={this.state.angle.periphericals} />
              </DropdownToggle>
              <DropdownMenu nav>
                <DropdownItem>
                  <NavLink>Display Monitors</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>Mouse</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink>Keyboards</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href='/'>GAMING PCS</NavLink>
            </NavItem>
          </Nav>

          <Nav className='ml-auto' nav>
            <NavItem>
              <NavLink href='/'>
                <svg
                  width='1.25em'
                  height='1.25em'
                  viewBox='0 0 16 16'
                  class='bi bi-handbag'
                  fill='#000'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M8 1a2 2 0 0 0-2 2v2h4V3a2 2 0 0 0-2-2zm3 4V3a3 3 0 1 0-6 0v2H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 0 0 1 0V6h4z'
                  />
                </svg>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/'>
                <svg
                  width='1.25em'
                  height='1.25em'
                  viewBox='0 0 16 16'
                  class='bi bi-heart'
                  fill='#000'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'
                  />
                </svg>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/'>
                <svg
                  width='1.25em'
                  height='1.25em'
                  viewBox='0 0 16 16'
                  class='bi bi-person'
                  fill='#000'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z'
                  />
                </svg>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default AppNavbar;
