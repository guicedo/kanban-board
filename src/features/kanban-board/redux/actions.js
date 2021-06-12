const CREATE_CARD = 'kanban-board/CREATE_CARD';
const DELETE_CARD = 'kanban-board/DELETE_CARD';
const UPDATE_CARD = 'kanban-board/UPDATE_CARD';
const CREATE_LIST = 'kanban-board/CREATE_LIST';
const DELETE_LIST = 'kanban-board/DELETE_LIST';
const CREATE_TAG = 'kanban-board/CREATE_TAG';
const DELETE_TAG = 'kanban-board/DELETE_TAG';
const UPDATE_TAG = 'kanban-board/UPDATE_TAG';

const createCard = (card) => ({
  type: CREATE_CARD,
  payload: { card },
});

const deleteCard = (id) => ({
  type: DELETE_CARD,
  payload: { id },
});

const updateCard = (card) => ({
  type: UPDATE_CARD,
  payload: { card },
});

const createList = (list) => ({
  type: CREATE_LIST,
  payload: { list },
});

const deleteList = (id) => ({
  type: DELETE_LIST,
  payload: { id },
});

const createTag = (tag) => ({
  type: CREATE_TAG,
  payload: { tag },
});

const updateTag = (tag) => ({
  type: UPDATE_TAG,
  payload: { tag },
});

const deleteTag = (id) => ({
  type: DELETE_TAG,
  payload: { id },
});

const actions = {
  types: {
    CREATE_CARD,
    DELETE_CARD,
    UPDATE_CARD,
    CREATE_LIST,
    DELETE_LIST,
    CREATE_TAG,
    DELETE_TAG,
    UPDATE_TAG,
  },
  createCard,
  deleteCard,
  updateCard, 
  createList,
  deleteList,
  createTag, 
  updateTag, 
  deleteTag,
};

export default actions;
