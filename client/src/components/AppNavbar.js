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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';
import { clear } from '../actions/cartActions';
import { getItems, clear as clearWishList } from '../actions/wishlistActions';

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
      className='bi bi-chevron-down'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      style={style}>
      <path
        fillRule='evenodd'
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

  static propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool.isRequired,
    itemsInCart: PropTypes.any.isRequired,
    wishlist: PropTypes.object,
    getItems: PropTypes.func.isRequired,
    clearWishList: PropTypes.func.isRequired,
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

    // console.log(angle);
  };

  logout = (event) => {
    this.props.logout();
    this.props.clear();
    this.props.clearWishList();
    // this.props.history.push('/');
  };

  componentDidUpdate(prevProps) {
    const { isAuthenticated, user } = this.props;
    if (isAuthenticated && prevProps.isAuthenticated !== isAuthenticated) {
      // console.log(user.email);
      this.props.getItems(user.email);
    }
  }

  render() {
    const svgStyle = {
      fontSize: '1.25rem',
      color: '#000',
    };

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
                  <NavLink href='/components/graphic_card'>
                    Graphic Cards
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/power_supply'>
                    Power Supplies
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/heat_sink'>Heat Sinks</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/secondary_storage'>
                    Secondary Memory
                  </NavLink>
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
                  <NavLink href='/components/drive_bay'>Drive Bays</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/cooling_fan'>
                    Cooling Fans / Radiators
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/cables'>Cables</NavLink>
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
                  <NavLink href='monitors'>Display Monitors</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/mouse'>Mouse</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/components/keyboard'>Keyboards</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href='/components/gaming_pcs'>GAMING PCS</NavLink>
            </NavItem>
          </Nav>

          <Nav className='ml-auto' nav>
            {this.props.isAuthenticated ? (
              <UncontrolledDropdown nav inNavbar className='dropdown mr-3'>
                <DropdownToggle nav>
                  <div style={{ color: 'black', fontSize: '1.15rem' }}>
                    Welcome {this.props.user.username}
                  </div>
                </DropdownToggle>
                <DropdownMenu nav>
                  <DropdownItem onClick={(event) => this.logout(event)}>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <NavItem>
                <NavLink href='/login' className='custom-btn mr-3'>
                  Login
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              <NavLink href='/cart'>
                <i
                  className={`bi bi-handbag${
                    this.props.itemsInCart > 0 ? '-fill' : ''
                  }`}
                  style={{
                    ...svgStyle,
                    color:
                      this.props.itemsInCart > 0 ? 'goldenrod' : svgStyle.color,
                  }}
                />
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/wishlist'>
                <i className='bi bi-bookmark-heart' style={svgStyle} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  itemsInCart: state.cart.totalItems,
  wishlist: state.wishlist,
});

export default connect(mapStateToProps, {
  logout,
  clear,
  getItems,
  clearWishList,
})(AppNavbar);
