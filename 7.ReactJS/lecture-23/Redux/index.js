const {createStore} = require('redux')
const applyMiddleWare = require('redux')


/* Action */

const buydell = (data) => {
    return{
        type:'BUY_DELL',
        data
    }
}

const buyhp = (data) => {
    return{
        type:'BUY_HP',
        data
    }
}

/* initialState */

const initialState = {
    NumOfDell:20,
    NumOfHp:30
}

/* Redcer */

const productReducer = (state = initialState , action) => {
    switch(action.type){
        case 'BUY_DELL': 
        console.log('DELL Reducer Called');
        return{
            NumOfDell:state.NumOfDell - 1
        }
        case 'BUY_HP':
        console.log('HP Reducer Called');
        return{
            NumOfHp:state.NumOfHp - 1
        }
        default:return state
    }
}


/* Store */

const Store = createStore(productReducer)

console.log(Store.getState());


const unsubscribe = Store.subscribe(() => console.log(Store.getState())
)

Store.dispatch(buyhp())
Store.dispatch(buyhp())
Store.dispatch(buyhp())
Store.dispatch(buydell())
Store.dispatch(buydell())
Store.dispatch(buydell())

unsubscribe()