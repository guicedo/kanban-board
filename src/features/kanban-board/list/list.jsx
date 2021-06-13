import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import Card from './card';

import './list.scss';

const List = ({
  list, createCard, cards,
}) => (
  <div className="kanban-board-list-container" style={{ backgroundColor: list.backgroundColor }}>
    <div className="kanban-board-list_title">
      {list.title}
    </div>
    <div className="kanban-board-list_tasks">
      {(cards.filter(card => card.listId === list.id) || []).map((card) => (
        <Card
          card={card}
        />
      ))}
    </div>
    <div className="kanban-board-list_add"
      onClick={() => {
        createCard(
          {
            text: null,
            listId: list.id,
          }
        )
      }}
    >
      <Plus style={{ height: 20, width: 20, marginRight: 20 }} /> Adicionar outro cartão
    </div>
  </div>
);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  createCard: PropTypes.func,
  cards: PropTypes.array,
};

List.defaultProps = {
  children: null,
  className: '',
  createCard: () => { },
  cards: [],
};

export default List;
