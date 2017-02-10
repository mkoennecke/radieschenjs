import React, { Component } from 'react';
import logo from './radilogo.gif';
import './Radieschen.css';

class RadiHeader extends Component {
    constructor(props){
	super(props);
	/*
	  Javascript has weird method context rules. It is determined at invocation
          time! This line below is the correct way to bind a method to the context I want. 
	 */
	this.makeButton = this.makeButton.bind(this)
    }
    makeButton() {
	if(this.props.mode === 'display'){
            return <input className="radi-button" type="button" onClick={this.props.swapState} value="Edit"/>;
	} else {
            return <input className="save-button" type="button" onClick={this.props.swapState} value="Save"/>;
	}
    }
    render(){
	return(
	  <header className="Radieschen-header">
	      <div className="Radieschen-centered">
                 <img src={logo} className="Radieschen-logo" alt="logo" />
                 <h2 className="Radieschen-header-h2">Welcome to Radieschen-JS</h2>
	        <form>
                { this.makeButton() }
		</form>
	       </div>
	  </header>
	)
    }
}

class RadiBody extends Component {
    constructor(props){
	super(props);
	RadiBody.prototype.doBody = function() {
   	  if(this.props.mode === 'display'){
 	      return('I am displaying!');
	  } else {
	    return('I am editing!')
	  }
       }
    }
       render() {
	return (
	   <section className="Radieschen-main">    
		<p className="Radieschen-intro">
		{
		    this.doBody()
		   
		}
             </p>
	   </section>
	)
    }
}

class Radieschen extends Component {
    constructor(props){
	super(props);
	this.state = {mode : 'display'};
	this.swapState = this.swapState.bind(this)
    }
    swapState() {
	console.log('swapState called in mode ' + this.state.mode);
	if(this.state.mode === 'display') {
	    this.setState({mode: 'edit'});
	} else {
	    this.setState({mode: 'display'});
	}
    }
  render() {
      return (
	  <div>
	      <RadiHeader swapState={this.swapState} mode={this.state.mode} />
	      <RadiBody mode={this.state.mode} />
	   </div>
    );
  }
}

export default Radieschen;
