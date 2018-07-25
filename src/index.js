import React            from 'react'
import {render}         from 'react-dom'
import Exemplars        from './Components/ExemplarListComponent'
import ListForExemplars from './Components/listForExemplars'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
	return (
		<div className="col-md-12 card">
			<Exemplars ListForExemplars = {ListForExemplars} />
		</div>
	)
}

render(<App/>, document.getElementById("root"))