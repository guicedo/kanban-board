import { connect } from 'react-redux';
import KanbanBoardPage from './kanbanBoardPage';
import operations from './redux/operations';

const mapStateToProps = ({ kanbanBoard }) => ({
  lists: kanbanBoard.lists,
});

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(operations.createList(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoardPage);
