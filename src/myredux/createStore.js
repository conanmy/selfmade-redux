export default function createStore(reducer, preloadedState, enhancer) {
    if (enhancer) {
        return enhancer(createStore)(reducer, preloadedState)
    }

    let state = preloadedState
    let listeners = []

    function subscribe(listener) {
        listeners.push(listener)
        // is it ok to give this return function a name? yes
        return function unsubscribe() {
            listeners.splice(listeners.indexOf(listener), 1)  // is it right to remove listener this way? yes
        }
    }

    function dispatch(action) {
        if (typeof action !== 'object') {
            return;
        }
        state = reducer(state, action)
        listeners.map(listener => listener())
    }

    function getState() {
        return state
    }

    dispatch({})  // why is this necessary?

    return { dispatch, subscribe, getState }
}