import { connect } from 'react-redux';

import List from './list';

const mapStateToProps = ({ kanbanBoard }) => ({
  cards: kanbanBoard.cards,
});

export default connect(mapStateToProps, null)(List);
