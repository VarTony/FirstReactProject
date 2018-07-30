import React            from 'react'
import {render}         from 'react-dom'
import Exemplars        from './Components/Exemple'
import ListForExemplars from './Components/listForExemplars'
import Header           from './Components/Header'
import Card           from './Components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
	return (
		<div>
			<Header/>
			<Exemplars ListForExemplars = {ListForExemplars} >
			</Exemplars>
			<Card/>
		</div>
	)
}

render(<App/>, document.getElementById("root"))