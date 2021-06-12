import { connect } from 'react-redux';
import KanbanBoardPage from './kanbanBoardPage';

const mapStateToProps = ({ kanbanBoard }) => ({
  lists: kanbanBoard.lists,
});

export default connect(mapStateToProps, null)(KanbanBoardPage);
