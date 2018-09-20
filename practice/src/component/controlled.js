import React from 'react';
// const Controlled = () => (
//     <form>
//         {/* <input type="text" value="Hello React"/> */}
//         <input type="text" defaultValue="Hello React"/>
//         <button>Submit</button>
//     </form>
// )

class Controlled extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "Dan",
            lastName: "Abramov",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log(`${this.state.firstName} ${this.state.lastName}`);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }
}

export default Controlled