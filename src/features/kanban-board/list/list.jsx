import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import Card from './card';

import './list.scss';

const cards = [{
  text: "teste 1",
  listId: 1,
  id: 0,
},
{
  text: "teste 2",
  listId: 1,
  id: 1,
},{
  text: "teste 3",
  listId: 2,
  id: 2,
},{
  text: "teste 4",
  listId: 2,
  id: 3,
},{
  text: "teste 5",
  listId: 3,
  id: 4,
},{
  text: "teste 6",
  listId: 3,
  id: 6,
}]
const List = ({
  list, // cards
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
    <div className="kanban-board-list_add">
      <Plus style={{ height: 20, width: 20, marginRight: 20 }} /> Adicionar outro cartão
    </div>
  </div>
);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

List.defaultProps = {
  children: null,
  className: '',
};

export default List;
