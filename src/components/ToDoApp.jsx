import React, { useState } from 'react';
import 'bulma/css/bulma.css';

import { InputToDo, Filter, ToDo } from './index';

export const  ToDoApp = () => {

  // ランダムなキーを取得
  const getKey = () => Math.random().toString(32).substring(2);

  // stateを作成
  const [todos, setToDos] = useState([]);
  const [filter, setFilter] = useState('ALL');

  // 入力値をtodos(配列)に設定
  const handleAdd = (text,deadline) => {
    const newTodo = { key: getKey(), text, done: false , deadline};
    setToDos([...todos, newTodo]);
  };

  // 指定のtodoを削除
  const handleDelete = key => {
    const newToDos = todos.filter(todo => todo.key !== key);
    setToDos(newToDos);
  };

  // フィルターの切り替え
  const handleFilterChange = value => setFilter(value);

  // フィルターに応じたToDoを表示
  const displayToDos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !todo.done;
    if (filter === 'DONE') return todo.done;
  });

  // チェックボックス判定
  const handleCheck = checked => {
    // チェックがついたToDoの真偽値(done)を変更
    const newToDos = todos.map(todo => {
      if (todo.key === checked.key) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setToDos(newToDos);
  };

  return (
    <div className="panel is-warning">
      <div className="panel-heading">
        ToDo
      </div>
      <InputToDo onAdd={handleAdd} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayToDos.map(todo => (
        <ToDo
          key={todo.key}
          todo={todo}
          onCheck={handleCheck}
          onDelete={handleDelete}
          />
      ))}
      <div className="panel-block">
        {displayToDos.length} todos
      </div>
    </div>
  );
}

export default ToDoApp;