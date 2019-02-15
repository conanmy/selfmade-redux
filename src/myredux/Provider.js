import React, { useState, useEffect } from 'react'

export const MyReduxContext = React.createContext()  // should I give a defaultValue to the context?

export default function(props) {
    const [ store, setStore ] = useState(props.store.getState())

    useEffect(() => {
        store.subscribe(() => setStore(store.getState()))
    })

    return (
        // should the value be store or store.getState()?
        <MyReduxContext.Provider value={store}>
            {this.props.children}
        </MyReduxContext.Provider>
    )
}