import React from 'react';
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { XCircle } from 'react-feather';
import Input from '../../../../commonComponents/input';
import Select from '../../../../commonComponents/select';
import Button from '../../../../commonComponents/button';

import './modal.scss';

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 350,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    boxShadow: theme.shadows[5],
    outline: 'none',
    padding: theme.spacing(2, 4, 3),
    overflow: "auto",
  },
}));

const colors = [
  { text: "Roxo", value: "#945AD1" },
  { text: "Vermelho", value: "#ff1a1a" },
  { text: "Verde", value: "#59D090" },
  { text: "Azul", value: "#5CC4FF" },
  { text: "Rosa", value: "#ff0066" },
  { text: "Laranja", value: "#ff3300" },
];

const ModalRobot = ({ tags, isOpen, onClose, cardId, createTag, updateTag }) => {
  const classes = useStyles();
  const [tag, setTag] = React.useState(null);
  const [color, setColor] = React.useState(null);
  const [modalStyle] = React.useState(getModalStyle);
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={() => { onClose(); }}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="tags-modal_container">
            <div className="tags-modal-title">
              Gerenciar tags
            </div>
            <div className="tags-modal-close">
              <XCircle style={{ width: 16, cursor: "pointer", color: "#9c9c9cf0" }} onClick={() => { onClose(); }} />
            </div>
            <div className="tags-modal-freeTags">
              Tags disponíveis
              {(tags.filter(tag => !tag?.cardsId?.includes(cardId)) || []).map((tag) => (
                <div
                  className="card-item-tag_container"
                  style={{ backgroundColor: tag.backgroundColor, cursor: "pointer" }}
                  onClick={() => updateTag({
                    cardsId: cardId,
                    tagId: tag.id,
                  })}
                >
                  {tag.value}
                </div>
              ))}
            </div>
            <div className="tags-modal-usedTags">
              <div className="tags-modal-usedTags-title">
                Tags ativas
              </div>
              {(tags.filter(tag => tag?.cardsId?.includes(cardId)) || []).map((tag) => (
                <div
                  className="card-item-tag_container"
                  style={{ backgroundColor: tag.backgroundColor, cursor: "pointer" }}
                  onClick={() => updateTag({
                    cardsId: cardId,
                    tagId: tag.id,
                  })}
                >
                  {tag.value}
                </div>
              ))}
            </div>
            <div className="tags-modal-create">
              Criar nova tag
              <Input
                placeholder="Criar uma tag"
                value={tag}
                setValue={setTag}
              />
              <Select
                placeholder="Selecione a cor"
                value={color}
                setValue={setColor}
                options={colors}
              />
              <div className="tags-modal-buttons">
                <div style={{ width: "82px", marginTop: "8px" }}>
                  <Button
                    disabled={tag === null || color === null}
                    onClick={() => {
                      createTag({
                        backgroundColor: color,
                        value: tag,
                        cardsId: [],
                      });
                      setTag(null);
                      setColor(null);
                    }}>Criar tag</Button>
                </div>
                <div style={{ width: "135px", marginTop: "8px", marginLeft: "135px" }}>
                  <Button
                    onClick={() => { onClose(); }}
                  >Salvar alterações</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

ModalRobot.propTypes = {
  onClose: PropTypes.array,
  tags: PropTypes.array,
  isOpen: PropTypes.bool,
  cardId: PropTypes.number,
  createTag: PropTypes.func,
  updateTag: PropTypes.func,
};

ModalRobot.defaultProps = {
  onClose: [],
  tags: null,
  isOpen: null,
  cardId: null,
  createTag: () => { },
  updateTag: () => { }
};

export default ModalRobot;
