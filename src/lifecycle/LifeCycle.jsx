
import React from 'react';


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    state = {
        a: 0
    };
    componentWillMount = (e) => {
        this.setState({
            a: this.state.a + 55
        })
    };
    changeState = (e) => {
        this.setState({
            a: this.state.a + 10
        });
    };
    render() {
        console.log('render');
        return (

            <div>
                LifeCycle
                <button onClick={this.changeState}>change state</button>
                {this.state.a}
            </div>
        );
    }
}

export default LifeCycle;