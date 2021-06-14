const CREATE_CARD = 'kanban-board/CREATE_CARD';
const DELETE_CARD = 'kanban-board/DELETE_CARD';
const UPDATE_CARD = 'kanban-board/UPDATE_CARD';
const CREATE_LIST = 'kanban-board/CREATE_LIST';
const DELETE_LIST = 'kanban-board/DELETE_LIST';
const CREATE_TAG = 'kanban-board/CREATE_TAG';
const UPDATE_TAG = 'kanban-board/UPDATE_TAG';
const UPDATE_LIST = 'kanban-board/UPDATE_LIST';

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

const updateList = (list) => ({
  type: UPDATE_LIST,
  payload: { list },
});


const actions = {
  types: {
    CREATE_CARD,
    DELETE_CARD,
    UPDATE_CARD,
    CREATE_LIST,
    DELETE_LIST,
    CREATE_TAG,
    UPDATE_TAG,
    UPDATE_LIST,
  },
  createCard,
  deleteCard,
  updateCard, 
  createList,
  deleteList,
  createTag,
  updateTag, 
  updateList, 
};

export default actions;
