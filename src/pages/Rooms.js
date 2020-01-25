import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';
import Footer from '../components/Footer';

function Rooms() {
    return (
        <>
        <div>
            <Hero hero="roomsHero">
            <Banner title="our rooms">
            <Link to='/' className="btn-primary">
                return home
            </Link>
            </Banner>
            </Hero>
        </div>
        <RoomContainer/>
        <section>
            <Footer/>
        </section>
        </>
    )
}

export default Rooms
