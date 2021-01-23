import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Join from './JoinComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { GIFTCARDS } from '../shared/giftcards';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giftcards: GIFTCARDS,
            selectedGiftcard: null
        };
    }
    onGiftcardSelect(giftcardId) {
        this.setState({selectedGiftcard: giftcardId});
    }  

    render() {

        const HomePage = () => {
            return (
                <Home 
                    giftcard={this.state.giftcards.filter(giftcard => giftcard.featured)[0]}
                   
                />
            );
        }
        return (
            <div>
            <Header/>
            <Route 
                path='/home' component={HomePage} 
                giftcards={this.state.giftcards} />
            <Route exact path='/joinus' component={Join} />
            <Route exact path='/aboutus' component={About} />
            <Route exact path='/contactus' component={Contact} />
            <Redirect to='/home' />
            <Footer/>
            </div>
        );
    };
}

export default Main;