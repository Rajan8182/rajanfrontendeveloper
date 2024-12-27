import {put , takeEvery} from 'redux-saga/effects'
import { PRODUCT_ADD , PRODUCT_SET } from './Constant'
import axios from 'axios'

function* getProduct(){
    let data = yield axios.get('https://dummyjson.com/recipes')
    yield put({type:PRODUCT_SET , data})
}

function* productSaga(){
    yield takeEvery(PRODUCT_ADD , getProduct)
}

export default productSaga