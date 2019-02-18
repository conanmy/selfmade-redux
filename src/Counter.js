import React from 'react'
import connect from './myredux/connect'

function Counter(props) {
	const { count, increment } = props;

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={increment}>
				Click me
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return { count: state.count }
}


function mapDispatchToProps(dispatch) {
	return { increment: () => dispatch({type: 'increment'}) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)