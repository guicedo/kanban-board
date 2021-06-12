import React from 'react';
import Title from '../commonComponents/title';
import Lists from './lists';
import Background from './background.svg';

import './kanbanBoardPage.scss';

const lists = [{
  title: "📝  To Do",
  backgroundColor: "#5CC4FF",
  tasks: [],
},
{
  title: "💻  In Progress",
  backgroundColor: "#945AD1",
  tasks: [],
},
{
  title: "🚀  Done",
  backgroundColor: "#59D090",
  tasks: [],
}];


const KanbanBoardPage = () => (
  <div className="kanban-board-page">
    <Title title="Kanban do projeto"/>
    <div className="kanban-board-page-content">
      {(lists || []).map((list) => (
        <Lists
          list={list}
        />
      ))}
    </div>
    <img src={Background} className="kanban-board-page-background" alt="BackgroundImg" />
  </div>
);

export default KanbanBoardPage;
