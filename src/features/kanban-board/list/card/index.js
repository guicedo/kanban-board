import { connect } from 'react-redux';
import operations from '../../redux/operations';

import Card from './card';

const mapStateToProps = ({ kanbanBoard }) => ({
  tags: kanbanBoard.tags,
  lists: kanbanBoard.lists,
});

const mapDispatchToProps = (dispatch) => ({
  updateCard: (card) => dispatch(operations.updateCard(card)),
  deleteCard: (id) => dispatch(operations.deleteCard(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
