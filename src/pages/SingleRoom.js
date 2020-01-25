import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import Footer from '../components/Footer';
//import ProductEnquiry from '../components/ProductEnquiry';
import ContactForm from '../ContactForm';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg

        }
    }
    static contextType = RoomContext;

    //componentDidMount(){}

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>no such room could be found</h3>
                <Link to='/rooms' className="btn-primary">
                    back to rooms
                </Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        const [mainImg, ...defaultImg] = images;
        //console.log(defaultImg);

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className="btn-primary">back to rooms</Link>
                    </Banner>
                </StyledHero>

                <section className="single-room">
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                            <br></br>
                            {/* <article className="info"> */}
                            <h3>info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: ${size} SQFT</h6>
                            <h6>max capacity: {
                                capacity > 1 ? `${capacity} people` : `${capacity} person`}
                            </h6>
                            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>

                            {/* </article> */}
                        </article>

                        {/* <article className="info">
                                <h3>info</h3>
                    <h6>Price: ${price}</h6>
                    <h6>Size: ${size} SQFT</h6>
                    <h6>max capacity: {
                        capacity>1 ?`${capacity} people`:`${capacity} person`}
                    </h6>
                    <h6>{pets?"pets allowed":"no pets allowed"}</h6>
    <h6>{breakfast && "free breakfast included"}</h6>

                </article> */}

                        {/* <div><ContactForm /></div> */}

                        {/* Netlify Form start */}

                        <div>
                            <form name="contact" action="POST" data-netlify="true">
                                <p>
                                    <label>Your Name: <input type="text" name="name" /></label>
                                </p>
                                <p>
                                    <label>Your Email: <input type="email" name="email" /></label>
                                </p>
                                <p>
                                    <label>Your Role: <select name="role[]" multiple>
                                        <option value="leader">Leader</option>
                                        <option value="follower">Follower</option>
                                    </select></label>
                                </p>
                                <p>
                                    <label>Message: <textarea name="message"></textarea></label>
                                </p>
                                <p>
                                    <label>Product Name: <input type="text" name="productName" value={name} /></label>
                                </p>
                                <p>
                                    <div data-netlify-recaptcha="true"></div>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                        {/* End of Netlify Form start */}


                    </div>
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => (
                            <a href={item} data-lightbox="Hotels" data-title={name}><img key={index} src={item} alt={name} /></a>
                        ))}
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
                <section>
                    <Footer />
                </section>
            </>
        );
    }
}
