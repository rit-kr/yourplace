import './PlaceItem.css'
import react, { useState } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button'
import Modal from '../../shared/components/UIElements/Modal';


function PlaceItem(props) {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler =() => {
    setShowConfirmModal(true);
    console.log(showConfirmModal);
  }

  const cancelDeleteHandler =() => {
    setShowConfirmModal(false);
  }

  const confirmDeleteHandler =() => {
    console.log("deleted");
    setShowConfirmModal(false);

  }

  return (
    <>
    <Modal 
      show={showMap}
      onCancel={closeMapHandler}
      header={props.address}
      contentClass="place-item__modal-content"
      footerClass="place-item__modal-actions"
      footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
    >
      <div className='map-container'>
        <h2>THE MAP!</h2>
      </div>
    </Modal>

    <Modal
      show={showConfirmModal}
      onCancel={cancelDeleteHandler} 
      header="Are you sure?" footerClass="place-item__modal-actions" 
      footer={
      <>
        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
        <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
      </>
    }>
      <p>Do you want to proceed and delete this place?</p>
    </Modal>
    
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
            <Button inverse onClick={openMapHandler}>View ON MAP</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger onClick={showDeleteWarningHandler}>Delete</Button>
          </div>
          </Card>
    </li>
    </>
  );
}

export default PlaceItem;
