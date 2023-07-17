import react from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from  'react-router-dom';

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

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(Place => Place.creator === userId);
  return (
   <PlaceList items={loadedPlaces}/>
  );
}

export default UserPlaces;
