import React, { Component } from 'react';
import logo from './radilogo.gif';
import './Radieschen.css';

class RadiHeader extends Component {
    render(){
	return(
	  <header className="Radieschen-header">
	      <div className="Radieschen-centered">
                 <img src={logo} className="Radieschen-logo" alt="logo" />
                 <h2 className="Radieschen-header-h2">Welcome to Radieschen-JS</h2>
	        <form>
         	<input className="radi-button" type="button" onClick={alert('Hello World!')} value="Edit"/>
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
   }
  render() {
      return (
	  <div>
	    <RadiHeader />
	      <RadiBody mode={this.state.mode} />
	   </div>
    );
  }
}

export default Radieschen;
