import React     from 'react' 
import Exemplar  from './exemplar'
import './styles.css'

const helperRenderList = ({ListForExemplars}) => {
	const value = ListForExemplars.map(
		component => <div key = {component.id}><Exemplar component = {component}/> </div>
	)

	return(
		<div className = "example">
			{value}
		</div>
	)
}

export default helperRenderList
