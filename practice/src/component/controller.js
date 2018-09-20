import React from 'react';
class Uncontrolled extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // value: '',
            firstName: '',
            lastName: '',
        }

        // this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        // this.handleChangeLastName = this.handleChangeLastName.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange({ target }) {
        console.log(target.value)

        this.setState({
            [target.name]: target.value,
        })
    }

    handleChangeFirstName({ target }) {
        this.setState({
            firstName: target.value,
        })
    }

    handleChangeLastName({ target }) {
        this.setState({
            lastName: target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        console.log(`${this.state.firstName} ${this.state.lastName}`);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                {/* <input type="text" onChange={this.handleChangeFirstName}/>
                <input type="text" onChange={this.handleChangeLastName}/> */}
                <input 
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        )
    }

}

export default Uncontrolled;