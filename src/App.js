import { Provider } from 'react-redux';
import KanbanBoardPage from './features/kanban-board';
import store from './redux-setup';

import './App.css';    
import './fonts.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <KanbanBoardPage />
      </Provider>
    </div>
  );
}

export default App;
