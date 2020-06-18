import React, { Component } from 'react';

export class test extends Component {

    trimMask(input) {
        let regE = /\(([^)]+)\)/
        var strValidated = input
        var strLength = input.length
        let i

        for (i = input; strLength >= i.length; i++) {
            if (i.match("/")) {
                strValidated = i.split("/").join("")
                if (i.match("")) {
                    strValidated = strValidated.split(".").join("")
                    if (strValidated.match("-")) {
                        strValidated = strValidated.split("-").join("")
                        if (strValidated.match(regE)) {
                            strValidated = strValidated.split(regE).join("")
                        }
                    }
                }
            }
            return strValidated
        }
    }

    componentWillMount() {
        const value = "(11)tes-te/again.teste-tested(11)"
        console.log("true trim value " + this.trimMask(value))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default test