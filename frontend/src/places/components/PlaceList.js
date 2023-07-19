import Card from '../../shared/components/UIElements/Card';
import './PlaceList.css';
import react from 'react';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';


function PlaceList(props) {
    if (props.items.length === 0) {
        return (
          <div className="place-list center">
            <Card>
            <h2>No Places found.Maybe Create one?</h2>
            <Button to='/places/new'>Share Place</Button>
            </Card>
          </div>
        );
      }
  return (
    <ul className="Place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
}

export default PlaceList;
