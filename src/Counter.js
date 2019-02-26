import React from 'react'
import useStore from './myredux/useStore'

export default function Counter() {
	const [ state, dispatch ] = useStore()
	const { count } = mapStateToProps(state)
	const { increment, reset } = mapDispatchToProps(dispatch)

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={increment}>
				Click me
			</button>
			<div>
				<button onClick={reset} style={{marginTop: '20px'}}>
					Jump in 5 seconds
				</button>
			</div>
		</div>
	)
}

function mapStateToProps(state) {
	return { count: state.count }
}


function mapDispatchToProps(dispatch) {
	return {
		increment: () => dispatch({type: 'increment'}),
		reset: () => dispatch(function(dispatch, getState) {
			setTimeout(() => dispatch({
				type: 'set',
				payload: getState().count + 100
			}), 5000)
		})
	}
}