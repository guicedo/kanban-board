import { connect } from 'react-redux';
import operations from '../redux/operations';

import List from './list';

const mapStateToProps = ({ kanbanBoard }) => ({
  cards: kanbanBoard.cards,
});

const mapDispatchToProps = (dispatch) => ({
  createCard: (card) => dispatch(operations.createCard(card)),
  updateList: (card) => dispatch(operations.updateList(card)),
  deleteList: (id) => dispatch(operations.deleteList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
