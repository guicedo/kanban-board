import { connect } from 'react-redux';
import operations from '../redux/operations';

import List from './list';

const mapStateToProps = ({ kanbanBoard }) => ({
  cards: kanbanBoard.cards,
});

const mapDispatchToProps = (dispatch) => ({
  createCard: (card) => dispatch(operations.createCard(card)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
