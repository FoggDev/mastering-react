import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import List from './List';
import './Todo.css';

class Todo extends Component {
  state = {
    task: '',
    items: []
  };

  componentWillMount() {
    // Setting default tasks
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: 'Pagar la renta',
          completed: false
        },
        {
          id: uuidv4(),
          task: 'Comprar despensa',
          completed: false
        },
        {
          id: uuidv4(),
          task: 'Hacer tarea',
          completed: false
        }
      ]
    })
  }

  handleOnChange = ({ target: { value } }) => {
    this.setState({
      task: value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const { task, items } = this.state;

    if (task.trim() !== '') {
      this.setState({
        task: '',
        items: [
          ...items,
          {
            id: uuidv4(),
            task,
            completed: false
          }
        ]
      })
    }
  }

  markAsCompleted = id => {
    const foundTask = this.state.items.find(task => task.id === id);
    const foundTaskIndex = this.state.items.findIndex(task => task.id === id);

    foundTask.completed = true;

    const updatedItems = this.state.items;

    updatedItems[foundTaskIndex] = foundTask;

    this.setState({
      items: updatedItems
    })
  }

  removeTask = id => {
    const filteredTasks = this.state.items.filter(task => task.id !== id);

    this.setState({
      items: filteredTasks
    });
  }

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>

        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.task} onChange={this.handleOnChange} />
        </form>

        <List
          items={this.state.items}
          markAsCompleted={this.markAsCompleted}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Todo;
