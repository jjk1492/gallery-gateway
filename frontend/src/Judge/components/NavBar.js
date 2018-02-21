import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'

const NavBarContainer = styled.div`
  margin-bottom: 25px;
`

export default class NavBar extends Component {
  static propTypes = {
    user: PropTypes.shape({
      type: PropTypes.string
    }).isRequired,
    logout: PropTypes.func.isRequired,
    switchToAdmin: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  renderSwitchToAdmin = () => {
    return (
      <NavItem>
        <NavLink tag={Link} to='/' onClick={this.props.switchToAdmin}>View as Admin |</NavLink>
      </NavItem>
    )
  }

  render () {
    const isAdmin = this.props.user.type === 'ADMIN'

    return (
      <NavBarContainer>
        <Navbar color='dark' dark expand='md'>
          <Link to='/' className='navbar-brand'>Gallery Gateway</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAdmin ? this.renderSwitchToAdmin() : null}
              <NavItem>
                <Link to='/' className='nav-link' onClick={this.props.logout}>Logout</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </NavBarContainer>
    )
  }
}
