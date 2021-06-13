import { connect } from 'react-redux';
import operations from '../../../redux/operations';

import Modal from './modal';

const mapDispatchToProps = (dispatch) => ({
  createTag: (tag) => dispatch(operations.createTag(tag)),
  updateTag: (tag) => dispatch(operations.updateTag(tag)),
});

export default connect(null, mapDispatchToProps)(Modal);
