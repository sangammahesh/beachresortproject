import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

export default class ProductEnquiry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      topic: '',
    }
    }
  
    handleSubmit(e){
      e.preventDefault();
      axios({
        method: "POST", 
        url:"http://counterid.com/api/index.php", 
        data:  this.state
      }).then((response)=>{
        if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
        }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
        }
      })
    }
  
    resetForm(){
      
       this.setState({name: '', email: '', message: '', topic: ''})
    }
    
    render() {
    return(
      <div className="App">
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="2" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      </div>
      <div className="form-group">
          <label htmlFor="topic">Product Name</label>
          <input type="text" id="topic" value={this.state.topic} onChange={this.topicHandler.bind(this)} />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    );
    }
  
    onNameChange(event) {
    this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
    this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
    this.setState({message: event.target.value})
    }
  
    topicHandler(event) {
      this.setState({topic: event.target.value})
      }

  }