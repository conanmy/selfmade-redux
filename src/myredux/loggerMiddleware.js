export default function loggerMiddleware(storeContext) {
    
    return function(nextDispatch) {
        return function(action) {
            nextDispatch(action)
            console.log(storeContext.getState())
        }
    }
}