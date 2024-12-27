import {put , takeEvery} from 'redux-saga/effects'
import { PRODUCT_ADD , PRODUCT_SET } from './Constant'
import axios from 'axios'
import Wishlist from '../Pages/Wishlist'

function* getProduct(){
    let data = yield fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    yield put({type:PRODUCT_SET , data})
}
function* productSaga(){
    yield takeEvery(PRODUCT_ADD, getProduct)
}

export default productSaga