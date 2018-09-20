import React from 'react';

class Focus extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(e) {
        e.preventDefault()
        console.log(this.element);
        this.element.focus();
    }

    render() {
        return(
            <form>
                <input 
                    type="text" 
                    ref={element => (this.element = element)}
                />
                <button onClick={this.handleClick}>Focus</button>
            </form>
        )
    }
}

export default Focus;