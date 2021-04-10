import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

const App: React.FC = () => (
  <div className="container pt-3 ">
    <UserList />
    <hr />
    <TodoList />
  </div>
);

export default App;
