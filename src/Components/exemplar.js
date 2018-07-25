import React, {Component} from 'react'; 
												// import {render} from 'react-dom';
												// import Components from "./ExemplarListComponent";
												// import List  from "./listForExemplars";


class Exemplar extends Component {  	 		//Created new class "Exemplar"

	state = {									//Declare new state

		isOpen : true	
	}

	render () {     							//Declare method render for component

		const {component} = this.props;
		const description = this.state.isOpen && <p>{component.description}</p>  
		const cost        =  <p>{component.cost}</p>
		const id          =  <p>{component.id}</p>

		return(	
			
			<div className = "bodyExemplar">
			
					{id}
					<img src = {component.img} onClick = {this.handleClick}/>
					{description}
					{cost}
			
			</div>)

	}

	handleClick = () => {

		this.setState({

				isOpen: !this.state.isOpen 		//this is handler for constant "p";

		})

	}

}


export default Exemplar;