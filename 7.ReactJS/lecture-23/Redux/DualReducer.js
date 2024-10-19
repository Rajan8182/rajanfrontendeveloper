const {createStore} = require('redux')
const {applyMiddleware} = require('redux')
const {combineReducers} = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

/* Action */

const buydell = () => {
    return{
        type:'BUY_DELL',
    }
}

const buychocolate = () => {
    return{
        type:'BUY_HP',
    }
}

/* initialState */

const initialState = {
    NumOfDell:20,
    NumOfHp:30
}

/* Redcer */

const DellReducer = (state = initialState , action) => {
    switch(action.type){
        case 'BUY_DELL': 
        console.log('DELL Reducer Called');
        return{
            ...state,
            NumOfDell:state.NumOfDell - 1
        }
        default:return state
    }
}

const HpReducer = (state = initialState , action) => {
    switch(action.type){
        case 'BUY_HP':
        console.log('HP Reducer Called');
        return{
            ...state,
            NumOfHP:state.NumOfHp - 1
        }
        default:return state
    }
}

/* rootReducer */

const rootReducer = combineReducers({
   dell:DellReducer,
    hp:HpReducer
})


/* Store */

const Store = createStore(rootReducer , applyMiddleware(logger))

const unsubscribe = Store.subscribe(() => {})

Store.dispatch(buydell())
Store.dispatch(buyhp())
Store.dispatch(buyhp())
Store.dispatch(buyhp())

unsubscribe()