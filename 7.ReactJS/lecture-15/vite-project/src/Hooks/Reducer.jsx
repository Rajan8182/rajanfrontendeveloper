import React from 'react'

const Reducer = (state , action) => {

  switch(action){
    
    case 'incrementT':return{
        ...state,
        age:state.age + 1
    }

    case 'decrementT':return{
        ...state,
        age:state.age - 1
    }

    case 'incrementF':return{
        ...state,
        fruits:state.fruits + 1
    }

    case 'decrementF':return{
        ...state,
        fruits:state.fruits - 1
    }

    default : return state
  }

}

export default Reducer