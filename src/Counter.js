import React from 'react'
import connect from './myredux/connect'

function Counter(props) {
	const { count } = props;

	return (
		<div>
		<p>You clicked {count} times</p>
		<button onClick={()=>{}}>
			Click me
		</button>
		</div>
	);
}

function mapStateToProps(state) {
	return { number: state.count }
}

export default connect(mapStateToProps)(Counter)