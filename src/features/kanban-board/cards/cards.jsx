import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';

import './cards.scss';

const Cards = ({
  card
}) => (
  <div className="kanban-board-card-container" style = {{backgroundColor: card.backgroundColor}}>
    <div className="kanban-board-card_title">
      {card.title}
    </div>
    <div className="kanban-board-card_tasks">
      salve salve
    </div>
    <div className="kanban-board-card_add">
      <Plus style={{height: 20, width: 20, marginRight: 20}}/> Adicionar outro cartão
    </div>
  </div>
);

Cards.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Cards.defaultProps = {
  children: null,
  className: '',
};

export default Cards;
