import React, { Component } from "react";


class LoginForm extends Component {

    constructor(props) {
        this.state = {
            username: null,
            password: null
        }
    }

    render() {


        return (
            <form>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" onChange={e => this.setState({username: e.target.value})} />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" onChange={e => this.setState({password: e.target.value})} />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

                </form>
        );
    }
}

export default LoginForm;