import './NewPlace.css'
import react, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MAXLENGTH } from '../../shared/util/Validators';
import Button from '../../shared/components/FormElements/Button';

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

  const [formState, dispatch] = useReducer(formReducer, {
    Input:{
      title:{
        value:"",
        isValid:false
      },
      description:{
        value:"",
        isValid:false
      }
    },
    isValid:false
  })
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type:'INPUT_CHANGE',
      value:value,
      isValid:isValid,
      inputId:id
    });
  }, []);


  return (
    <>
       <form className='place-form'>
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
        <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
       </form>
    </>
  );
}
 
export default NewPlace;
