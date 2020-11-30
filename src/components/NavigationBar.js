import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    NavbarText
} from 'reactstrap';

import { Link } from 'react-router-dom';

export const NavigationBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" >
                <NavbarBrand >
                    <Link to="/">Star Wars Guide</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to='/'>Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to='/Spaceships'>Starships</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    )
}
