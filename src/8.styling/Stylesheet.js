import React from 'react'
import './styling.css'
import styles from './appStyles.module.css'

function Stylesheet(props) {
    let className = props.primary? 'primary' : ''
    console.log(className)
    return (
        <div>
            <h1 id="h1" className='primary header'>Stylesheet</h1>
            <h1 id="h121" className={className}>Hello This is another H1</h1>
            <h1 className={`${className}  enlarge-font-color`}>This is using backtick</h1>
            <h2 className={styles.success}>I am using modules styles</h2>
        </div>
    )
}

export default Stylesheet
