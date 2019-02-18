import React, { useState, useEffect } from 'react'

export const MyReduxContext = React.createContext()  // should I give a defaultValue to the context?

export default function(props) {
    const { store } = props
    const [ provider, setProvider ] = useState({state: store.getState(), dispatch: store.dispatch})

    useEffect(() => {
        return store.subscribe(() => setProvider({state: store.getState(), dispatch: store.dispatch}))
    })

    return (
        // should the value be store or store.getState()? store.getState() data and store.dispatch method
        <MyReduxContext.Provider value={provider}>
            { props.children }
        </MyReduxContext.Provider>
    )
}