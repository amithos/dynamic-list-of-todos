import React from 'react';
import './App.scss';
import './styles/general.scss';
import { TodoList } from './components/TodoList';
import { CurrentUser } from './components/CurrentUser';
import { getTodos } from './api';

class App extends React.Component {
  state = {
    todos: [],
    selectedUserId: 0,
  };

  componentDidMount() {
    getTodos()
      .then(todos => todos.filter(todo => todo.title && todo.userId))
      .then(todos => this.setState({
        todos,
      }))
  }

  selectUser = (id) => {
    this.setState({
      selectedUserId: id,
    });
  }

  resetSelectedUser = () => {
    this.setState({
      selectedUserId: 0,
    });
  }

  render() {
    const { todos, selectedUserId } = this.state;
    const { selectUser, resetSelectedUser } = this;

    return (
      <div className="App">
        <div className="App__sidebar">
          {todos.length > 0 && (
            <TodoList
              todos={todos}
              selectUser={selectUser}
              selectedUserId={selectedUserId}
            />
          )}
        </div>

        <div className="App__content">
          <div className="App__content-container">
            {selectedUserId ? (
              <CurrentUser
                userId={selectedUserId}
                resetSelectedUser={resetSelectedUser}
              />
            ) : 'No user selected'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
