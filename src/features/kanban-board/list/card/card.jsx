import React from 'react';
import PropTypes from 'prop-types';

import { XCircle } from 'react-feather';
import { Edit } from 'react-feather';
import Input from '../../../commonComponents/input';
import Select from '../../../commonComponents/select';
import Button from '../../../commonComponents/button';
import Modal from './modal';

import './card.scss';

const Card = ({ card, tags, updateCard, lists }) => {
  const [isEditing, setIsEditing] = React.useState(null);
  const [isTagsModalOpen, setIsTagsModalOpen] = React.useState(null);
  const [text, setText] = React.useState(null);
  const [listId, setListId] = React.useState(null);

  if (isEditing) {
    return (
      <>
        <div className="card-item_container">
          <div className="card-item-edit_container">
            <div className="card-item-edit-text">
              <Input
                placeholder="Nome"
                value={text || card.text}
                setValue={setText}
              />
            </div>
            <div className="card-item-edit-close">
              <XCircle style={{ width: 16, cursor: "pointer", color: "#9c9c9cf0" }} onClick={() => { setIsEditing(false); }} />
            </div>
            <div className="card-item-edit-select">
              <Select
                placeholder="Selecione a lista"
                value={listId || card.listId}
                setValue={setListId}
                options={lists?.map(l => ({ text: l.title, value: l.id }))}
              />
            </div>
            <div className="card-item-edit-tags">
              {(tags.filter(tag => tag?.cardsId?.includes(card.id)) || []).map((tag) => (
                <div className="card-item-tag_container" style={{ backgroundColor: tag.backgroundColor }}>
                  {tag.value}
                </div>
              ))}
              <div className="card-item-tag_container card-item-tag_container-editar"
                style={{ backgroundColor: "rgb(74 74 74 / 83%)" }}
                onClick={() => { setIsTagsModalOpen(true) }}
              >
                + Editar tags
              </div>
            </div>
            <div className="card-item-edit-save">
              <Button onClick={() => {
                updateCard({
                  ...card,
                  text: text || card.text,
                  listId: listId || card.listId,
                });
                setIsEditing(false);
              }}>Salvar edições</Button>
            </div>
          </div>
        </div>
        <Modal
          tags={tags}
          onClose={() => { setIsTagsModalOpen(false) }}
          isOpen={isTagsModalOpen}
          cardId={card.id}
        />
      </>
    );
  }
  return (
    <div className="card-item_container">
      <div className="card-item-closed_container">
        <div className="card-item-closed_text">
          {card.text}
        </div>
        <div className="card-item-closed_edit">
          <Edit style={{ width: 16, cursor: "pointer", color: "#212529" }} onClick={() => { setIsEditing(true); }} />
        </div>
        <div className="card-item-closed_tags">
          {(tags.filter(tag => tag?.cardsId?.includes(card.id)) || []).map((tag) => (
            <div className="card-item-tag_container" style={{ backgroundColor: tag.backgroundColor }}>
              {tag.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  tags: PropTypes.array,
  updateCard: PropTypes.func,
};

Card.defaultProps = {
  card: null,
  tags: [],
  updateCard: () => { },
};

export default Card;
