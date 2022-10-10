import React, { Component } from "react";
import Todo from "../Todo";
import TodoForm from "../TodoForm";

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      selectedTodo: null,
    };
  }

  render() {
    return (
      <div className="todos-list">
        {this.props.todos.map((item, key) => (
          <Todo
            setSelectedTodo={() => this.setState({ selectedTodo: item })}
            deleteTodo={this.props.deleteTodo}
            markAsCompleted={this.props.markAsCompleted}
            id={item.id}
            name={item.name}
            completed={item.completed}
            key={key}
          />
        ))}
        {this.state.selectedTodo && (
          <TodoForm
            selectedTodo={this.state.selectedTodo}
            modifyTodo={(id, name) => {
              this.props.modifyTodo(id, name);
              this.setState({ selectedTodo: null });
            }}
          />
        )}
      </div>
    );
  }
}

Body.defaultProps = {
  todos: [],
};
