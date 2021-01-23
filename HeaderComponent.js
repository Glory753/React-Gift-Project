import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, Label, Col, Row, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Control, LocalForm } from 'react-redux-form';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            giftcardSelection: '',
            amount: '',
            isHandleSubmit: '',
            isNavOpen: false,
            isModalOpen: false
        };
        this.handleSubmit= this.handleSubmit.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleSubmit(values) {
        console.log("Current state is: "+ JSON.stringify(values));
        alert("Current state is: "+ JSON.stringify(values));
        this.toggleModal();
    }

    toggleNav() {
       this.setState({
            isNavOpen: !this.state.isNavOpen
        }); 
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} 
        Remember: ${this.remember.checked}`)
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                <Form>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Gift Cards</h1>
                                <h2>for all and for all occasions</h2>
                            </div>
                        </div>
                    </div>
                    </Form>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logogc.png"
                            height="30" width="30" alt="GiftCard Logo" /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>   
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/joinus">
                                        <i className="fa fa-plus fa-lg" /> Join
                                    </NavLink>   
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" />About
                                    </NavLink>   
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>   
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-hand-o-up fa-lg" /> Place Order
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle= {this.toggleModal}>
                <ModalHeader toggle = {this.toggleModal}> 
                    Order Form
                </ModalHeader>
                    <div className="col">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="giftSelection" md={2}>Gift Card Selection</Label>
                                    <Col md={12}>
                                        <Control.select model = ".giftSelection" name="giftSelection" className="form-control">
                                            <option selected>Select...</option>
                                            <option>Visa $25</option>
                                            <option>Visa $50</option>
                                            <option>Visa $75</option>
                                            <option>Visa $100</option>
                                            <option>Olive Garden</option>
                                            <option>Red Lobster</option>
                                            <option>Cracker Barrel</option>
                                            <option>Applebees</option>
                                            <option>Lowes</option>
                                            <option>Walmart</option>
                                            <option>Home Depot</option>
                                            <option>AutoZone</option>
                                            <option>Victoria's Secret</option>
                                            <option>Macy's</option>
                                            <option>Target</option>
                                            <option>Barnes & Noble</option>
                                        </Control.select>
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="amount" md={4}> 
                                    Amount
                                </Label> 
                                    <Col md={12}>
                                        <Control.select model = ".amount" name="amount" className="form-control">
                                            <option selected>Select...</option>
                                            <option>$25</option>
                                            <option>$50</option>
                                            <option>$75</option>
                                            <option>$100</option>
                                        </Control.select>
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </Modal>

            </React.Fragment>
        );
    } 
}
    
export default Header;