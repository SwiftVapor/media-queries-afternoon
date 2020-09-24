import React, { Component } from 'react';
import './Header.css'
export default class Header extends Component{
    constructor(){
        super();
        this.state={
            menu: false
        }
    }
    slide = () => {
        this.setState({menu: !this.state.menu})
    }
    render(){
        return(
            <div>
                <div className= 'navbar'>
                    <h1 className = 'title'>Start Bootstrap</h1>
                    <div className='hamburger-icon' onClick= {this.slide}>Menu &#9776;</div>
                    <div className= 'navbar-menu'>
                        <a href='#'>About</a>
                        <a href='#'>Projects</a>
                        <a href='#'>Contact</a>
                    </div>
                </div>
                <div className= {this.state.menu ? 'menu slide' : 'menu'}>
                        <a href='#'>About</a>
                        <a href='#'>Projects</a>
                        <a href='#'>Contact</a>
                    </div>
            </div>
        )
    }
}