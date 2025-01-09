import {put , takeEvery} from 'redux-saga/effects'
import { PRODUCT_ADD , PRODUCT_LIST } from './Constant'
import ProductItem from './shopjson.json'

function* getProduct(){
    try {
        const data = ProductItem
        console.log('Fetched Product Data:', data);
        yield put({ type: PRODUCT_LIST, data})
    } catch (error) {
        console.log('Error Fetching Product', error);
    }
}

function* productSaga(){
    yield takeEvery(PRODUCT_ADD , getProduct)
}

export default productSaga

// function* getProduct() {
//     try {
//         const response = yield fetch('./shopjson.json');
//         const data = yield response.json();
//         yield put({ type: PRODUCT_ADD, data });
//     } catch (error) {
//         console.error('Error Fetching Product', error);
//     }
// }
