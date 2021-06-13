import React from 'react';
import PropTypes from 'prop-types';
import Title from '../commonComponents/title';
import List from './list';
import Background from './background.svg';
import { Plus } from 'react-feather';

import './kanbanBoardPage.scss';

const KanbanBoardPage = ({ lists, createList }) => (
  <div className="kanban-board-page">
    <Title title="Kanban do projeto" />
    <div className="kanban-board-page-content">
      {(lists || []).map((list) => (
        <List
          list={list}
        />
      ))}
      <div className="kanban-board-page-content_add"
        onClick={() => { createList({
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          title: null,
        }) }}
      >
        <Plus style={{ height: 20, width: 20, marginRight: 16 }} /> Adicionar outra lista
      </div>
    </div>
    <img src={Background} className="kanban-board-page-background" alt="BackgroundImg" />
  </div>
);

KanbanBoardPage.propTypes = {
  lists: PropTypes.array,
  createList: PropTypes.func,
};

KanbanBoardPage.defaultProps = {
  lists: [],
  createList: () => { },
};

export default KanbanBoardPage;
