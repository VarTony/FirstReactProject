import React     from 'react' 
import Exemplar  from './Exemplar'
import './styles.css'

const Exemple = ({ListForExemplars}) => {
	const value = ListForExemplars.map(
		component => <Exemplar component = {component} key = {component.id}/>
	)

	return(
		<div className = 'Example' >
			{value}
		</div>
	)
}

export default Exemple;
