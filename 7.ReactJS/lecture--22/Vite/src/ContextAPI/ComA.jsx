import React from 'react'
import ComA1 from './ComA1'
import ComA2 from './ComA2'
import ComA3 from './ComA3'

const ComA = () => {
    return (
        <div>
            <h1 className='heading'>This is Componenets A {name}</h1>
            <ComA1 />
            <ComA2 />
            <ComA3/>
        </div>
    )
}

export default ComA