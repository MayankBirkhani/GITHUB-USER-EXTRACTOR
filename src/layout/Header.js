import React, {useState, useContext} from "react";
import{
    Collapse,
    Navbar,
    NavbarToggler, 
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";

import {Link} from "react-router-dom"

import {UserContext} from "../context/UserContext"

const Header = () => {
    const context = useContext(UserContext) //whatever the value available inside UserContext will be save in context variable.
    
    const [isOpen, setIsOpen] = useState(false) //state for togglebar for viweing components when collapsed
    
    const toggle= () => setIsOpen(!isOpen)  //flipping the state 
    
    return(
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">Github Profile Search Engine</Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {context.user?.email? context.user.email : "" }    
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? 
                        (<NavItem>
                            <NavLink onClick={() => {context.setUser(null)}} className="text-white">
                            Logout
                            </NavLink>
                        </NavItem>)  :
                        (
                            <>
                            <NavItem>
                                <NavLink tag={Link} to="/signup" className="text-white">
                                Signup
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/signin" className="text-white">
                                Signin
                                </NavLink>
                            </NavItem>
                            </>
                        )
                    }
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;