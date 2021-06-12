import React from 'react';
import PropTypes from 'prop-types';
import { Plus } from 'react-feather';

import './lists.scss';

const Lists = ({
  list
}) => (
  <div className="kanban-board-list-container" style = {{backgroundColor: list.backgroundColor}}>
    <div className="kanban-board-list_title">
      {list.title}
    </div>
    <div className="kanban-board-list_tasks">
      salve salve
    </div>
    <div className="kanban-board-list_add">
      <Plus style={{height: 20, width: 20, marginRight: 20}}/> Adicionar outro cartão
    </div>
  </div>
);

Lists.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Lists.defaultProps = {
  children: null,
  className: '',
};

export default Lists;
