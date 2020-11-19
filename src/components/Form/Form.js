import React, { Component } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import "./Form.scss";

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            form: {
                fName: {
                    value: '',
                    valid: false,
                    hasError: false
                },
                lName: {
                    value: '',
                    valid: false,
                    hasError: false
                },
                email: {
                    value: '',
                    valid: false,
                    hasError: false
                },
                password: {
                    value: '',
                    valid: false,
                    hasError: false
                },
                confPassword: {
                    value: '',
                    valid: false,
                    hasError: false
                },
                checkbox: {
                    checked: false,
                    valid: false,
                    hasError: false
                }
            },
            formIsValid: false,
            showAlert: false
        }
    }

    validationHandler = (value) => {
        let isValid = false;
        isValid = value.trim() !== '';

        return isValid;
    }

    handleInputChange = (event, id) => {
        let updatedForm = {...this.state.form};

        if(id === 'checkbox') {
            updatedForm[id].checked = event.target.checked;
            updatedForm[id].valid = updatedForm[id].checked;
        } else {
            updatedForm[id].value = event.target.value;
            updatedForm[id].valid = this.validationHandler(updatedForm[id].value);
        }
        updatedForm[id].hasError = updatedForm[id].valid ? false : true;

        let formIsValid = true;
        
        for(let input in updatedForm) {
            formIsValid = updatedForm[input].valid && formIsValid;
        }
        this.setState({form: updatedForm, formIsValid: formIsValid});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let updatedForm = {...this.state.form};
        
        for(let input in updatedForm) {
            updatedForm[input].hasError = !updatedForm[input].valid;
        }

        this.setState({form: updatedForm});
        
        if(this.state.formIsValid) {
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
            });
            this.setState(
                {showAlert: true},
                () => { window.setTimeout(()=>{this.setState({showAlert:false})}, 5000)}
            );
        }
    }
    
    render() {
        const {form, showAlert} = this.state;
        const labelText = (<div>By creating an account you agree to the <a href="https://dowork.ai/terms">Terms of Service</a> and <a href="https://dowork.ai/privacy/">Privacy Policy</a></div>);

        return (
            <div>
                {showAlert && <div className="alert">Successfully Submitted!</div>}
                <h1>Create an account</h1>
                <a className="btn btn-default" href="https://accounts.google.com/"><i className="icon"></i>Sign Up with Google</a>
                <div className="alternative">or</div>
                <form action="" noValidate onSubmit={this.handleSubmit}>
                    <InputField 
                        id="fName"
                        type="text" 
                        value={form.fName.value} 
                        label="First Name" 
                        placeholder="First Name" 
                        changed={this.handleInputChange}
                        hasError={form.fName.hasError}
                    />
                    <InputField 
                        id="lName"
                        type="text" 
                        value={form.lName.value}
                        label="Last Name" 
                        placeholder="Last Name" 
                        changed={this.handleInputChange}
                        hasError={form.lName.hasError}
                    />
                    <InputField 
                        id="email"
                        type="text" 
                        value={form.email.value}
                        label="Email" 
                        placeholder="Email" 
                        changed={this.handleInputChange}
                        hasError={form.email.hasError}
                    />
                    <InputField 
                        id="password"
                        type="password" 
                        value={form.password.value}
                        label="Password" 
                        placeholder="Password" 
                        changed={this.handleInputChange}
                        hasError={form.password.hasError}
                    />
                    <InputField 
                        id="confPassword"
                        type="password" 
                        value={form.confPassword.value}
                        label="Confirm Password" 
                        placeholder="Confirm Password" 
                        changed={this.handleInputChange}
                        hasError={form.confPassword.hasError}
                    />
                    <InputField 
                        id="checkbox"
                        type="checkbox"
                        checked={form.checkbox.checked} 
                        label={labelText} 
                        changed={this.handleInputChange}
                        hasError={form.checkbox.hasError}
                    />
                    <Button btnName="primary" btnType="submit" btnText="Sign Up" />
                </form>
                <div className="followUp">Already have an account? <a href="https://dowork.ai/app/#/login?path=%2F">Sign In</a></div>
            </div>
        )
    }
}
