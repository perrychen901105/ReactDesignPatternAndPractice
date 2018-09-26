import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'
import cssModules from 'react-css-modules'

const Button = () => <button styleName="button">Click me!</button>

const EnhancedButton = cssModules(Button, styles)

ReactDOM.render(<EnhancedButton />, document.body)


// const Button = () => (
//     <button className={styles.button}>Click me!</button>
// )
// ReactDOM.render(<Button />, document.body)

// import React from 'react'
// import ReactDOM from 'react-dom'
// import cssModules from 'react-css-modules'
// import styles from './index.css'

// const Button = () => <button styleName="button">Click me!</button>

// const EnhancedButton = cssModules(Button, styles)

// ReactDOM.render(<EnhancedButton />, document.body)

