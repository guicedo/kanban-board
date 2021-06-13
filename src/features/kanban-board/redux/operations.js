import actions from './actions';

const createCard = (card) => (dispatch) => {
  dispatch(actions.createCard(card));
};

const deleteCard = (id) => (dispatch) => {
  dispatch(actions.deleteCard(id));
};

const updateCard = (card) => (dispatch) => {
  dispatch(actions.updateCard(card));
};

const createList = (list) => (dispatch) => {
  dispatch(actions.createList(list));
};

const deleteList = (id) => (dispatch) => {
  dispatch(actions.deleteList(id));
};

const createTag = (tag) => (dispatch) => {
  dispatch(actions.createTag(tag));
};

const updateList = (list) => (dispatch) => {
  dispatch(actions.updateList(list));
};

const deleteTag = (id) => (dispatch) => {
  dispatch(actions.deleteTag(id));
};

const operations = {
  createCard, 
  createList, 
  updateCard, 
  createTag, 
  updateList, 
  deleteCard,
  deleteList,
  deleteTag,
};

export default operations;
