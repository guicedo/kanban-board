import React from 'react';
import PropTypes from 'prop-types';

import { XCircle } from 'react-feather';
import { AlertCircle, Edit } from 'react-feather';

import './card.scss';


const getContent = (card, isEditing, setIsEditing) => {
  if (isEditing) {
    return (
      <div className="card-item-container">
        <div className="card-item-closed_icons">
          <XCircle style={{ width: 16, cursor: "pointer", color: "#9c9c9cf0" }} onClick={() => { setIsEditing(false); }} />
        </div>
        tags content here
      </div>
    );
  }

  return (
    <div className="card-item-closed_container">
      <div className="card-item-closed_text">
        {card.text}
      </div>
      <div className="card-item-closed_edit">
        <Edit style={{ width: 16, cursor: "pointer", color: "#212529" }} onClick={() => { setIsEditing(true); }} />
      </div>
      <div className="card-item-closed_tags">
        {/*(tags.filter(tag => tag.cardId === card.id) || []).map((tag) => (
          <div className="card-item-closed_tag-container" style={{ backgroundColor: tag.backgroundColor }}>
            {tag.value}
          </div>
        ))*/}
      </div>
    </div>
  );
};

const ModalRobot = ({ card }) => {
  const [isEditing, setIsEditing] = React.useState(0);
  return (
    <div className="card-item_container">
      {getContent(card, isEditing, setIsEditing)}
    </div>
  );
};

ModalRobot.propTypes = {
  card: PropTypes.array,
};

ModalRobot.defaultProps = {
  card: null,
};

export default ModalRobot;
