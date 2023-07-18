import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import './PlaceForm.css';
import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/Validators';

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

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);
  if(!identifiedPlace) {
    return (
      <div className='center'>
        <h2>Could notfind place</h2>
      </div>
    )
  } 
  return <form className='place-form'>
    <Input 
        id="title"
        element="input" 
        type="text" 
        label="Title"
        validator={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() =>{}}
        value={identifiedPlace.title}
        valid={true}
        />

<Input 
        id="discription"
        element="textarea"
        label="discription"
        validator={[VALIDATOR_MAXLENGTH(5)]}
        errorText="Please enter a valid  discription(5 char)"
        onInput={() =>{}}
        value={identifiedPlace.title}
        valid={true}
        />

<Button type="submit" disabled={true}>UPDATE PLACE</Button>

  </form>
}

export default UpdatePlace;