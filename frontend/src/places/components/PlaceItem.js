import './PlaceItem.css'
import react from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button'

function PlaceItem(props) {
  return (
    <li className='place-item'>
      <Card className='place-item-content'>
        <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="user-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div>
            <Button inverse>View ON MAP</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
          </Card>
    </li>
  );
}

export default PlaceItem;