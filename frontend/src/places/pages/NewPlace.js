import './PlaceForm.css'
import react from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH } from '../../shared/util/Validators';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';

const formReducer = (state, action) => {
  switch(action.type){
  
  case 'INPUT_CHANGE':
    let formIsValid =true;
    for(const inputId in state.inputs){
      if(inputId === action.inputId){
        formIsValid =formIsValid && action.isValid;
      }else {
        formIsValid =formIsValid && state.inputs[inputId].isValid;
      }
    }
    return{
      ...state,
      inputs:{
        ...state.inputs,
        [action.inputId]: {value: action.value, isValid: action.isValid}
      },
      isValid:formIsValid
    }
  default:
    return state; 
  }
}

function NewPlace() {

  const [formState, inputHandler] = useForm({
    title:{
      value:"",
      isValid:false
    },
    description:{
      value:"",
      isValid:false
    },
    address:{
      value:"",
      isValid:false
    }
  },false)


const placeSubmitHandler = event => {
  event.preventDefault();

}

  return (
    <>
       <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input 
        id="title"
        element="input" 
        type="text" 
        label="Title"
        validator={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        />

        <Input 
        id="discription"
        element="textarea"
        label="discription"
        validator={[VALIDATOR_MAXLENGTH(5)]}
        errorText="Please enter a valid  discription(5 char)"
        onInput={inputHandler}
        />

        <Input 
        id="address"
        element="input" 
        label="address"
        validator={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
       </form>
    </>
  );
}
 
export default NewPlace;
