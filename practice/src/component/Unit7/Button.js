import React from 'react'
import radium from 'radium'

// const style = {
//     color: 'palevioletred',
//     backgroundColor: 'papayawhip',
// }

// const Button = () => <button style={style}>Click me!</button>

const styles = {
    backgroundColor: '#ff0000',
    width: 320,
    padding: 20,
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    ':hover': {
        color: '#fff',
    },
    ':active': {
        position: 'relative',
        top: 2,
    },
    '@media (max-width: 480px)': {
        width: 160,
    },
}

const Button = () => <button style={styles}>Click me!</button>

// export default Button;
export default radium(Button);
