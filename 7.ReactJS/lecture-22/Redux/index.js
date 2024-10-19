const {createStore} = require('redux')
const {applyMiddleware} = require('redux')

const increment = (data) => {
    return {
        type:'INCREMENT',
        data:'apple'
    }
}
const decrement = (data) => {
    return {
        type:'DECREMENT',
        data:'apple'
    }
}
const reset = (data) => {
    return {
        type:'RESET',
        data:'apple'
    }
}

const counterReducer = (state={value:0} , action) => {
    switch(action.type){
        case 'INCREMENT':return{
            value:state.value + 1
        }
        case 'DECREMENT':return{
            value:state.value - 1
        }
        case 'RESET':return{
            value:0
        }
        default:return state
    }
}

const store = createStore(counterReducer , applyMiddleware())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(reset())

store.dispatch(increment())
store.dispatch(increment())

unsubscribe()