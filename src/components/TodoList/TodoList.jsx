import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './TodoList.scss';

export class TodoList extends React.Component {
  state = {
    searchField: '',
    selectFilter: 0,
  }

  handlerInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    let { todos } = this.props;
    const { searchField, selectFilter } = this.state;
    const { selectUser, selectedUserId } = this.props;
    const { handlerInput } = this;

    if (searchField) {
      todos = todos.filter(todo => todo.title.includes(searchField));
    }

    switch (selectFilter) {
      case 'active':
        todos = todos.filter(todo => todo.completed === false);
        break;
      case 'completed':
        todos = todos.filter(todo => todo.completed);
        break;
      default:
        break;
    }

    return (
      <div className="TodoList">
        <h2>Todos:</h2>

        <input
          className="TodoList__item"
          name="searchField"
          value={searchField}
          onChange={handlerInput}
        />

        <select
          className="TodoList__item"
          name="selectFilter"
          value={selectFilter}
          onChange={handlerInput}
        >
          <option value="all">all</option>
          <option value="active">active</option>
          <option value="completed">comleted</option>

        </select>

        <div className="TodoList__list-container">
          <ul className="TodoList__list">
            {todos.map(({ id, title, userId, completed }) => (
              <li
                key={id}
                className={classNames({
                  'TodoList__item TodoList__item--checked': completed,
                  'TodoList__item TodoList__item--unchecked': !completed,
                })}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={completed}
                    readOnly
                  />
                  <p>{title}</p>
                </label>

                <button
                  className={classNames('TodoList__user-button', 'button', {
                    'TodoList__user-button--selected':
                      userId === selectedUserId,
                  })}
                  type="button"
                  onClick={() => selectUser(userId)}
                >
                  User&nbsp;
                  {' '}
                  {userId}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const todoType = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool,
});

TodoList.propTypes = {
  todos: PropTypes.arrayOf(todoType).isRequired,
  selectUser: PropTypes.func.isRequired,
  selectedUserId: PropTypes.number.isRequired,
};
