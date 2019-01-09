import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {NavLink, Link, BrowserRouter, Route } from 'react-router-dom';
import Home from "../components/home.component";
import About from "../components/about.component";
// import RouterClass from "../routes";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                {/* <BrowserRouter> */}
                    <div>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">reactstrap</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink to='/' activeClassName="active">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/about' activeClassName="active"> About</NavLink>
                                    </NavItem>
                                    {/*<UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                  </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                  </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                  </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                                </Nav>
                            </Collapse>
                        </Navbar>
                        {/* <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} /> */}
                    </div>
                {/* </BrowserRouter> */}
                {/* <RouterClass /> */}
            </div>
        );
    }
}

export default Header;