import React from 'react'

const Quotes = [
    '“Be yourself; everyone else is already taken.”',
    '“So many books, so little time.”',
    '“A room without books is like a body without a soul.”',
    '“You only live once, but if you do it right, once is enough.”',
    '“Be the change that you wish to see in the world.”',
    '“We accept the love we think we deserve.”',
    '“Without music, life would be a mistake.”',
]

const ListRendering = () => {
    return (
        <div>
            <h1 className='heading'>React List Rendering</h1>
            <ul>
                {
                    Quotes.map((item) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListRendering