import { useContext } from 'react'
import { MyReduxContext } from './Provider'

export default function useStore() {
    const { state, dispatch } = useContext(MyReduxContext)
    return [ state, dispatch ]
}