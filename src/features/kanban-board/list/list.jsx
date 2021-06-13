import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';
import Card from './card';
import { Edit } from 'react-feather';
import { XCircle } from 'react-feather';
import Input from '../../commonComponents/input';
import Button from '../../commonComponents/button';
import Select from '../../commonComponents/select';

import './list.scss';

const colors = [
  { text: "Roxo", value: "#945AD1" },
  { text: "Vermelho", value: "#ff1a1a" },
  { text: "Verde", value: "#59D090" },
  { text: "Azul", value: "#5CC4FF" },
  { text: "Rosa", value: "#ff0066" },
  { text: "Laranja", value: "#ff3300" },
];

const List = ({ list, createCard, cards, deleteList, updateList}) => {
  const [isEditing, setIsEditing] = React.useState(null);
  const [text, setText] = React.useState(null);
  const [color, setColor] = React.useState(null);

  if (isEditing || list.title === null) {
    return (
      <div className="kanban-board-list_edit-container" style={{ backgroundColor: color || list.backgroundColor }}>
        <div className="kanban-board-list_edit-title">
          <Input
            placeholder="Nome da lista"
            value={text || list.title}
            setValue={setText}
          />
        </div>
        <div className="kanban-board-list_edit-close">
          <XCircle
            style={{ width: 16, cursor: "pointer", color: "#9c9c9cf0" }}
            onClick={() => { text === null & list.title === null ? deleteList(list.id) : setIsEditing(false) }}
          />
        </div>
        <div className="kanban-board-list_edit-color">
          <Select
            placeholder="Selecione a cor"
            value={color}
            setValue={setColor}
            options={colors}
          />
        </div>
        <div className="kanban-board-list_edit-delete">
          <Button
            red
            onClick={() => {
              deleteList(list.id);
              setIsEditing(false);
            }}>Excluir lista</Button>
        </div>
        <div className="kanban-board-list_edit-save">
          <Button
            disabled={text === null & list.title === null|| (color===null && list.backgroundColor===null) }
            onClick={() => {
              updateList({
                ...list,
                title: text || list.title,
                backgroundColor: color || list.backgroundColor,
              });
              setIsEditing(false);
            }}>Salvar edições</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="kanban-board-list-container" style={{ backgroundColor: list.backgroundColor }}>
      <div className="kanban-board-list_title">
        {list.title}
      </div>
      <div className="kanban-board-list_edit">
        <Edit style={{ width: 16, cursor: "pointer" }} onClick={() => { setIsEditing(true); }} />
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
        <Plus style={{ height: 20, width: 20, marginRight: 16 }} /> Adicionar outro cartão
      </div>
    </div>
  );
};

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  createCard: PropTypes.func,
  cards: PropTypes.array,
  deleteList: PropTypes.func,
  updateList: PropTypes.func,
};

List.defaultProps = {
  children: null,
  className: '',
  createCard: () => { },
  cards: [],
  deleteList: () => { },
  updateList: () => { },
};

export default List;
