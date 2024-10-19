
import { BUY_BMW , BUY_AOUDI } from "./Constant";


export const buy_bmw = () => {
    console.log('Bmw Action Called');
    return{
        type:BUY_BMW
    }
}

export const buy_aoudi = () => {
    console.log('Aoudi Action Called');
    return{
        type:BUY_AOUDI
    }
}
