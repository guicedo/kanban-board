import actions from './actions';

const INITIAL_STATE = {
  cards: [],
  lastCardId: 0,
  tags: [],
  lastTagId: 0,
  lists: [{
    title: "📝  To Do",
    backgroundColor: "#5CC4FF",
    id: 1,
  },
  {
    title: "💻  In Progress",
    backgroundColor: "#945AD1",
    id: 2,
  },
  {
    title: "🚀  Done",
    backgroundColor: "#59D090",
    id: 3,
  }],
  lastListId: 0,
};

const reducer = (state = INITIAL_STATE, action = { type: '@@analiseGeral/INIT' }) => {
  switch (action.type) {
    case actions.types.CREATE_CARD:
      return {
        ...state,
        cards: state.cards.push(action.payload.card),
      };
    case actions.types.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload.id),
      };
    case actions.types.CREATE_TAG:
      return {
        ...state,
        tags: state.tags.push(action.payload.tag),
      };
    case actions.types.DELETE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag.id !== action.payload.id),
      };
    case actions.types.CREATE_LIST:
      return {
        ...state,
        lists: state.lists.push(action.payload.list),
      };
    case actions.types.DELETE_LIST:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.payload.id),
      };

    case actions.types.UPDATE_TAG:
      return {
        ...state,
        tags: state.tags.map(
          (tag) => tag.id === action.payload.tag.id ? action.payload.tag
          : tag),
      };
    case actions.types.UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(
          (card) => card.id === action.payload.card.id ? action.payload.card
          : card),
      };
    default:
      return state;
  }
};


export default reducer;
