import { useCallback, useReducer } from 'react';
import Input from '../components/FormElements/Input';

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
      };
      case 'SET_DATA':
        return{
            inputs:action.inputs,
            isValid:action.formIsValid
        };
    default:
      return state; 
    }
  }
  

export const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        Input: initialInputs,
        isValid:initialFormValidity
      })

      const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
          type:'INPUT_CHANGE',
          value:value,
          isValid:isValid,
          inputId:id
        });
      }, []);

      const setFormData = useCallback((InputData, formValidity) => {
        dispatch({
            type:'SET_DATA',
            inputs:InputData,
            formValid:formValidity
        });
      }, []);

      return [formState, inputHandler, setFormData];
};