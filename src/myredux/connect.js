import React from 'react'
import { MyReduxContext } from './Provider';

export default function(mapStateToProps, mapDispatchToProps) {
    return function(WrappedComponent) {
        return function(props) {
            return (
                <MyReduxContext.Consumer>
                    {
                        ({ state, dispatch }) => {
                            return <WrappedComponent {...mapStateToProps(state, props)} {...mapDispatchToProps(dispatch, props)} />
                        }
                    }
                </MyReduxContext.Consumer>
            )
        }
    }
}