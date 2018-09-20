import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(event) {
        console.log(event.type);
        switch (event.type) {
            case 'click':
                console.log('clicked');
                break

            case 'dblclick':
                console.log('double clicked');
                break

            default:
                console.log('unhandled', event.type);
        }
    }

    handleClick(syntheticEvent) {
        console.log(syntheticEvent instanceof MouseEvent);
        console.log(syntheticEvent.nativeEvent instanceof MouseEvent);
    }

    render() {
        return (
            <button onClick={this.handleEvent}
                    onDoubleClick={this.handleEvent}>Click me!</button>
        )
    }

}

export default Button;
