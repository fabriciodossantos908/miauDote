import React, { Component } from 'react'
import '../../../materialize/css/materialize.min.css'

export class CompanyLogin extends Component {
    render() {
        return (
            <React.Fragment>
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate"/>
                                <label for="email">Email</label>
                        </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="pass" type="password" class="validate"/>
                                    <label for="pass">Password</label>
                        </div>
                            </div>
                            <div class="row">
                                <div class="col s12">
                                    <p>
                                        <input type="checkbox" id="remember"/>
                                            <label for="remember">Remember me</label>
                            </p>
                        </div>
                                </div>
                                <div class="divider"></div>
                                <div class="row">
                                    <div class="col m12">
                                        <p class="right-align">
                                            <button class="btn btn-large waves-effect waves-light" type="button" name="action">Login</button>
                                        </p>
                                    </div>
                                </div>
                </form>
            </React.Fragment>
                        )
                    }
                }
                
                export default CompanyLogin
