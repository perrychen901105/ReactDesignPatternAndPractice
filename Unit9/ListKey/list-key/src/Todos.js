import React from 'react'
import List from './List'
import Form from './Form'

class Todos extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: ['foo', 'bar'],
            value: '',
        }

        // this.handleChange = this.handleChange.bind(this)
        // this.handleClick = this.handleClick.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(value) {
        const items = this.state.items.slice()
        items.unshift(value)

        this.setState({
            items,
        })
    }

    handleChange({ target }) {
        this.setState({
            value: target.value,
        })
    }

    handleClick() {
        const items = this.state.items.slice()
        items.unshift(this.state.value)

        this.setState({
            items,
        })
    }

    render() {
        return (
            <div>
                <List items={this.state.items} />
                <Form onSubmit={this.handleSubmit} />
                {/* <ul>
                    {this.state.items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <div>
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleClick}>+</button>
                </div> */}
            </div>
        )
    }
}

export default Todos;