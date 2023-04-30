import React, { useState } from 'react';
import {DatePicker} from '@mui/lab';
import { TextField } from '@mui/material';
import 'bulma/css/bulma.css';
import { BsArrowRightCircle } from "react-icons/bs"
import "react-datepicker/dist/react-datepicker.css";
import ja from 'date-fns/locale/ja';

export const InputToDo = (props) => {
  
    // stateを作成
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState(null);

    //入力値をtextに反映
    const handleChange = e => setText(e.target.value);

    // 入力された締切日付をdeadlineに反映
    const handleDeadlineChange = (date) => {
      setDeadline(date);
    };

    // Enter押下時、ToDoに追加
    const handleEnter = e => {
      if (e.key === 'Enter') {
        // 入力値が空白文字の場合終了
        if (!text.match(/\S/g) ) return;
        // ToDoAppクラスの「handleAdd」関数を実行
        props.onAdd(text,deadline);
        setText('');
      }
    };
  
    return (
      <div className="panel-block">
        <input
          className="input"
          type="text"
          placeholder="Enter to add"
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEnter(e);
            }
          }
        }
        />
        <DatePicker
          value={deadline}
          onChange={handleDeadlineChange}
          format="yyyy/MM/dd"
          label="締切日を選択"
          renderInput={(params) => <TextField {...params} />}
        />
        <BsArrowRightCircle />
      </div>
    );
  }

export default InputToDo;