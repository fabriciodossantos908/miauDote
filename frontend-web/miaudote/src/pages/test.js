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
            <div className="container blue">
            <div className="card-panel green"></div>
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                    © 2014 Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}

export default test