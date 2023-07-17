import Card from '../../shared/components/UIElements/Card';
import './PlaceList.css';
import react from 'react';
import PlaceItem from './PlaceItem';


function PlaceList(props) {
    if (props.items.length === 0) {
        return (
          <div className="place-list center">
            <Card>
            <h2>No Places found.Maybe Create one?</h2>
            <button>Share Place</button>
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
