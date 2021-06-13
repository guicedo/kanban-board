import actions from './actions';

const INITIAL_STATE = {
  cards: [],
  lastCardId: 0,
  tags: [{
    id: 0,
    value: "Pessoal",
    backgroundColor: "#945AD1",
    cardsId: [],
  },{
    id: 1,
    value: "Profissional",
    backgroundColor: "#59D090",
    cardsId: [],
  },{
    id: 2,
    value: "URGENTE",
    backgroundColor: "#ff1a1a",
    cardsId: [],
  }],
  lastTagId: 2,
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
  lastListId: 3,
};

const reducer = (state = INITIAL_STATE, action = { type: '@@analiseGeral/INIT' }) => {
  switch (action.type) {
    case actions.types.CREATE_CARD:
      return {
        ...state,
        cards: state.cards.push({
          ...action.payload.card,
          id: state.lastCardId++
        }),
        lastCardId: state.lastCardId ++,
      };
    case actions.types.DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload.id),
      };
    case actions.types.CREATE_TAG:
      return {
        ...state,
        tags: state.tags.push({
          ...action.payload.tag,
          id: state.lastTagId++
        }),
        lastTagId: state.lastTagId ++,
      };
    case actions.types.DELETE_TAG:
      return {
        ...state,
        tags: state.tags.filter(tag => tag.id !== action.payload.id),
      };
    case actions.types.CREATE_LIST:
      return {
        ...state,
          lists: state.lists.push({
          ...action.payload.list,
          id: state.lastListId++
        }),
        lastListId: state.lastListId ++,
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
          (tag) => tag.id === action.payload.tag.id ? action.payload.tag : tag),
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
