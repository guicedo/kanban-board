import React from 'react';
import PropTypes from 'prop-types';
import Title from '../commonComponents/title';
import List from './list';
import Background from './background.svg';

import './kanbanBoardPage.scss';

const KanbanBoardPage = ({lists}) => (
  <div className="kanban-board-page">
    <Title title="Kanban do projeto"/>
    <div className="kanban-board-page-content">
      {(lists || []).map((list) => (
        <List
          list={list}
        />
      ))}
    </div>
    <img src={Background} className="kanban-board-page-background" alt="BackgroundImg" />
  </div>
);

KanbanBoardPage.propTypes = {
  lists: PropTypes.array,
};

KanbanBoardPage.defaultProps = {
  lists: [],
};

export default KanbanBoardPage;
