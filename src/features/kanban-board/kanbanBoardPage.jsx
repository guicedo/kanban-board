import React from 'react';
import Title from '../commonComponents/title';
import Cards from './cards';

import './kanbanBoardPage.scss';

const cards = [{
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
      {(cards || []).map((card) => (
        <Cards
          card={card}
        />
      ))}
    </div>
  </div>
);

export default KanbanBoardPage;
