import React from 'react'
import { MyReduxContext } from './Provider';

export default function(mapStateToPropsFunc) {
    return function(WrappedComponent) {
        return (
            <MyReduxContext.Consumer>
                {
                    value => {
                        return <WrappedComponent {...mapStateToPropsFunc(value)} />
                    }
                }
            </MyReduxContext.Consumer>
        )
    }
}