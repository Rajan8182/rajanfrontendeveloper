import React from 'react'
import { contextData } from '../App'

const ComA33 = () => {
    return (
        <div>
            <contextData.Consumer>
                {
                    (data) => {
                        return (
                            <>
                                <h1 class="heading">This is Components ComA33 {data}</h1>
                            </>
                        )
                    }
                }
            </contextData.Consumer>
        </div>
    )
}

export default ComA33

{/* <contextData.Consumer>
{
    (data) => {
        return (
            <>
                <h1 class="heading">This is Components ComA33 {data}</h1>
            </>
        )
    }
}
</contextData.Consumer> */}