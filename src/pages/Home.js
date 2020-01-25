import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Footer from '../components/Footer';
//import Button from '../components/StyledHero';

function Home() {
    return (
        <div>
            <>
            <Hero>
            <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
            <Link to='/rooms' className="btn-primary">
                our rooms
            </Link>
            </Banner>
            </Hero>
            </>
            <section>
                <Services/>
            </section>
            <section>
                <FeaturedRooms/>
            </section>
            <section>
                <Footer/>
            </section>
            {/* <Button >Hello</Button> */}
        </div>
    )
}

export default Home
