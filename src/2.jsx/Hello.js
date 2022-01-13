import React from 'react'

const Hello =() =>{
    // return (
    //     <div>
    //         <h1>Hello Uma</h1>
    //     </div>
    // )

    function Hello(){

    }

    var Hello = function(){

    }

    return React.createElement(
                'div', 
                 {id:'divParent', className: 'container'}, 
           React.createElement(
               'h1',
                {id:'header', className: 'head'}, 
                'Hello Uma')
    )
}

export default Hello




