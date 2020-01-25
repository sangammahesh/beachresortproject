import React, { Component } from 'react';
import Title from './Title';
//import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';


export default class Footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             footerdetais:[
                 {
                     title:"About Us",
                     info: 'Info here....'
                 },
                 {
                    title:"Social Media",
                    info: 'Social Icons'
                },
                {
                    title:"CopyRight",
                    info: 'Info@...'
                },
                {
                    title:"Address",
                    info: 'Address info....'
                }
             ]
        }
    }
    
    render() {
        return (
            <section className="footer">
                <div className="footer-center">
                    {this.state.footerdetais.map((item,index) =>{
                        return (
                        <article key={index} className="footer">
                            <h6>{item.title}</h6>
                            <p> {item.info}</p>
                        </article>
                    )})}
                </div>
            </section>
        )
    }
}
