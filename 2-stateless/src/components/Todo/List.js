import React from 'react';
import { array, func } from 'prop-types';

const List = ({ items, markAsCompleted, removeTask }) => (
  <ul>
    {items.map((item, key) => (
      <li
        key={`item-${key}`}
        className={`${item.completed ? 'completed' : 'pending'}`}
      >
        {item.task}

        <div className="actions">
          <span
            className={item.completed ? 'hide' : 'done'}
            onClick={() => markAsCompleted(item.id)}
          >
            <i className="fa fa-check" />
          </span>

          <span
            className="trash"
            onClick={() => removeTask(item.id)}
          >
            <i className="fa fa-trash" />
          </span>
        </div>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: array.isRequired,
  markAsCompleted: func.isRequired,
  removeTask: func.isRequired
};

export default List;
