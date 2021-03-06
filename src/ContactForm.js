import React, { Component } from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", slug: "" };
      }
  
      /* Here’s the juicy bit for posting the form submission */
  
      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          name:"contact",
          datanetlify: "true",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });
  
      render() {
        const { name, email, message, slug } = this.state;
        return (
          <form data-netlify="true" onSubmit={this.handleSubmit}>
            <p>
              <label>
                Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Your Name"/>
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Your Email"/>
              </label>
            </p>
            <p>
              <label>
                Product Name: <input type="text" name="slug" value={slug} onChange={this.handleChange} placeholder="Your Looking Product Name"/>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={message} onChange={this.handleChange} placeholder="Your Message"/>
              </label>
            </p>
            <p>
              <div data-netlify-recaptcha="true"></div>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        );
      }
    }

export default ContactForm;
