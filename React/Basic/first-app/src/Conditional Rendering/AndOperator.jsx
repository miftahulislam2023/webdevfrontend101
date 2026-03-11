import React from 'react'

const AndOperator = () => {
    const div1 = <div>First Div</div> && <div>Second Div</div>
    const div2 = 0 && <div>Second Div</div>
    const div3 = '0' && <div>Second Div</div>
    const div4 = '' && <div>Second Div</div>
    const div5 = false && <div>Second Div</div>
    return (
        <>
            {div5}
        </>
    )
}

export default AndOperator