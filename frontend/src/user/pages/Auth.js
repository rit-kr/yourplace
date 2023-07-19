import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators';
import './Auth.css'
import React from 'react';



const Auth = () =>{
    const [formState, inputHandler] = useForm({
        email:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        }
    })

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log((formState.inputs));
    };
    
    return(
        <Card className="authentication" >
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                <Input 
                    element="input"
                    id="email"
                    type="email"
                    label="E-mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email"
                    onInput={inputHandler}
                />
                <Input 
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(8)]}
                    errorText="Please enter a valid password, at least 8 characters"
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>Login</Button>
            </form>
        </Card>
    )
}
export default Auth;