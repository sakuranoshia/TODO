import classNames from 'classnames';
import 'bulma/css/bulma.css';
import { BsFillTrashFill } from "react-icons/bs"

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck } = props;

  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };

  // ゴミ箱アイコン押下時、その行のtodoをリストから削除
  const handleDelete = (todo) => {
    props.onDelete(todo.key);
  };

  return (
    <label className="panel-block">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleChange}
      />
      <span
        className={classNames({
          'has-text-grey-light': todo.done
        })}
      >
        {todo.text}
        {todo.deadline ?? ''}
      </span>
      <BsFillTrashFill onClick={() => {
          handleDelete(todo);
        }}
      />
    </label>
  );
}

export default ToDo;