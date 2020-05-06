import React, { Component } from 'react'

export default class UserPhoto extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserPhoto: "",
            pesonalDataErrors: ""
        }
    }

    render() {
        return (
            <div>
                <button>Próximo</button>
            </div>
        )
    }
}
