export default function applyMiddleware(...middlewares) {
    
    return function(createStore) {
        
        return function(reducer, preloadedState, enhancer) {
            const store = createStore(reducer, preloadedState, enhancer)
            const storeContext = {
                getState: store.getState,
                dispatch: store.dispatch
            }

            const chain = middlewares.map(middleware => middleware(storeContext))

            const dispatch = compose(...chain)(store.dispatch)

            // purpose of applyMiddleware is to make a enhanced dispatch who can go through middlewares
            return {
                ...store,
                dispatch
            }
        }
    }
}

function compose(...funcs) {
    return function(...parameters) {
        let returned = null
        for (let i = 0; i < funcs.length; i ++) {
            let func = funcs[i]
            if (i === 0) {
                returned = func(...parameters)
            } else {
                returned = func(returned)
            }
        }
        return returned
    }
}