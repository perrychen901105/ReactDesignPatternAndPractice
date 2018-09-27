import React from 'react'
// import Perf from 'react-addons-perf'


class List extends React.PureComponent {

    render() {
        return (
            <ul>
                {this.props.items.map(item => <li key={item}>{item}</li>)}
            </ul>
        )
    }

/*
    constructor(props) {
        super(props)

        this.state = {
            items: ['foo', 'bar'],
        }

        this.handleClick = this.handleClick.bind(this)
    }

    // componentWillUpdate() {
    //     Perf.start();
    // }

    // componentDidUpdate() {
    //     Perf.stop()``
    //     Perf.printOperations()
    // }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.items !== nextState.items
    }

    handleClick() {
        this.setState({
            items: this.state.items.concat('baz'),
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => <li>{item}</li>)}
                </ul>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
*/

export default List;
