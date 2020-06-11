import React, { Component } from 'react';

export class test extends Component {

    trimMask(event) {
        if (event.target.value.match("/")) {
            const value = event.target.value.split("/").join("")
            console.log(value);
            return value;
        }
        else if (event.target.value.match(".")) {
            const value = event.target.value.split(".").join("")
            return value;
        }
        else if (event.target.value.match("-")) {
            const value = event.target.value.split("-").join("")
            return value;
        }
        else if (event.target.value.match("(")) {
            const value = event.target.value.split("(").join("")
            return value;
        }
        else if (event.target.value.match(")")) {
            const value = event.target.value.split(")").join("")
            return value;
        }
        else {
            return event.target.value
        }
    }
 

    componentWillMount() {
        const value = "tes-te/again.teste-tested(teste)"
        console.log(this.trimMask(value))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default test