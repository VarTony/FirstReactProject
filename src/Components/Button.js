import React, {Component} from 'react'



class Button extends Component {


	newState = {

		isClick: true
	
	}
	
	render() {

		return(

			<button type = 'button' id='btn'  onClick={this.changeText}>
				{this.isClick ? 'Add to card': 'Delete from card'}
			</button> 					
		
		) 
	}

	changeText = () => {
		
		this.setState({

			isClick: !this.newState.isClick
		})
	}

}

export default Button


