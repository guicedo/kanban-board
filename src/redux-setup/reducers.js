import { combineReducers } from 'redux';
import kanbanBoardReducer from '../features/kanban-board/redux/reducer';

export default combineReducers({
  kanbanBoard: kanbanBoardReducer,
});
