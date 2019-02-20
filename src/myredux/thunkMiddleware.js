export default function thunkMiddleware(storeContext) {
    
    return function(nextDispatch) {
        return function(action) {
            if (typeof action === 'function') {
                const { dispatch, getState } = storeContext
                action(dispatch, getState)
                nextDispatch(action)
            } else {
                nextDispatch(action)
            }
        }
    }
}