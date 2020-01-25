import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';


export default class Services extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             services:[
                 {
                     icon: <FaCocktail/>,
                     title:"free cocktails",
                     info: 'info here aasjkdajkdhsajkdhasjkd a'
                 },
                 {
                    icon: <FaHiking/>,
                    title:"Endless Hiking",
                    info: 'info here aasjkdajkdhsajkdhasjkd a'
                },
                {
                    icon: <FaShuttleVan/>,
                    title:"Free shuttle",
                    info: 'info here aasjkdajkdhsajkdhasjkd a'
                },
                {
                    icon: <FaBeer/>,
                    title:"Strongest Beer",
                    info: 'info here aasjkdajkdhsajkdhasjkd a'
                }
             ]
        }
    }
    
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p> {item.info}</p>
                        </article>
                    )})}
                </div>
            </section>
        )
    }
}
