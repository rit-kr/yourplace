import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './PlaceForm.css';
import React, { useEffect, useState } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';

const DUMMY_PLACES = [
  {
    id:'p1',
    title:'Empire state Building',
    description:"One of the most famous sky",
    imageUrl:'https://en.wikipedia.org/wiki/Empire_State_Building#/media/File:Empire_State_Building_(aerial_view).jpg',
    address:'20 W 34th St., New York, NY 10001, United States',
    location:{
      lat:'40.7484405',
      lng:'-73.9878531'
    },
    creator:'u1'
  },
  {
    id:'p2',
    title:'Empire state Building',
    description:"One of the most famous sky",
    imageUrl:'https://en.wikipedia.org/wiki/Empire_State_Building#/media/File:Empire_State_Building_(aerial_view).jpg',
    address:'20 W 34th St., New York, NY 10001, United States',
    location:{
      lat:'40.7484405',
      lng:'-73.9878531'
    },
    creator:'u2'
  }
]

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const [isLoading, setIsLoading] = useState(true);

 const [formState, inputHandler,setFormData] = useForm({
    title:{
      value:'',
      isValid:false
    },
    discription:{
      value:'',
      isValid:false
    }
  }, false);

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
useEffect(() => {
  if(identifiedPlace){
    setFormData(
      {
        title:{
          value:identifiedPlace.title,
          isValid:true
        },
        discription:{
          value:identifiedPlace.description,
          isValid:true
        }
      }, true); 
  }
    setIsLoading(false)
},[setFormData, identifiedPlace]);

  const placeSubmitHandler = event =>{
    event.preventDefault();
    console.log("updateplace form", formState.inputs);
  }

  if(!identifiedPlace) {
    return (
      <div className='center'>
        <Card><h2>Could notfind place</h2></Card>
      </div>
    )
  } 
  if(isLoading) {
    return (
      <div className='center'>
        <h2>Loading...</h2>
      </div>
    )
  } 

  return <form className='place-form' onSubmit={placeSubmitHandler}>
    <Input 
        id="title"
        element="input" 
        type="text" 
        label="Title"
        validator={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
        />

<Input 
        id="discription"
        element="textarea"
        label="discription"
        validator={[VALIDATOR_MAXLENGTH(5)]}
        errorText="Please enter a valid  discription(5 char)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        />

<Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>

  </form>
}

export default UpdatePlace;