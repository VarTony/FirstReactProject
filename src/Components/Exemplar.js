import React, {Component} from 'react'
import Button from './Button'
// import {render} from 'react-dom'
// import Components from './ExemplarListComponent'
// import List  from './listForExemplars'

// Created new class 'Exemplar'
class Exemplar extends Component {
	// Declare new state
	state = {
		isOpen : true
	}

	handleClick = () => {
		this.setState({
			// this is handler for constant 'p'
			isOpen: !this.state.isOpen
		})
	}

	// Declare method render for component
	render () {
		const {component} = this.props

		return(
			<div className='bodyExemplar'>
				<p>{component.id}</p>
				<img src={component.img} onClick={this.handleClick} />

				{this.state.isOpen && <p>{component.description}</p>}
				{!this.state.isOpen && <Button/>}
				<p>{component.cost}</p>
			</div>
		)
	}
}

export default Exemplar
