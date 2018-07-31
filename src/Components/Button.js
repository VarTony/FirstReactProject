import React, {Component} from 'react'

class Button extends Component {
	state = {
		isClick: true
	}

	changeText = () => {
		this.setState({
			isClick: !this.state.isClick
		})
	}

	render() {
		return(
			<button type = 'button' id='btn' onClick={this.changeText}>
				{this.state.isClick ? 'Add to card': 'Delete from card'}
			</button>
		)
	}
}

export default Button
