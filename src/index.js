import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/';

class WhoAmI extends Component {
    // constructor(props) {
    //     super(props);
    // }

    state = {
        age: 24
    }

    nextYear = () => {
        this.setState(state => ({
            age: ++state.age
        }))
    }

    render() {
        const {name, surname, link} = this.props;
        const {age} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname is {surname}, my age is {age};</h1>
                <a href={link}>My profile</a>
             </>
        );
    }
}   

const All = () => {
    return (
        <>
            <WhoAmI name = "Jhon" surname = "Smith" link = "vk.com"/>
            <WhoAmI name = "Alex" surname = "Smith" link = "vk.com"/>
            <WhoAmI name = "Max" surname = "Smith" link = "vk.com"/>
        </>
    );
}
ReactDOM.render(<All />, document.getElementById('root'));

