import { Trash } from 'phosphor-react';

import circleImg from '../assets/circle.svg';
import checkedImg from '../assets/checked.svg';

import styles from './Task.module.css';

interface TaskProps {
  id: number;
  done: boolean;
  content: string;
  onDeleteTask: (id: number) => void;
  onSelect: (id: number) => void;
}

export function Task({ id, done, content, onDeleteTask, onSelect }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleSelectTask() {
    onSelect(id);
  }

  return (
    <li className={done ? styles.taskDone : styles.task}>
      <div className={styles.clicable} onClick={handleSelectTask}>
        {done ? (
          <img src={checkedImg} className={styles.checked} />
        ) : (
          <img src={circleImg} className={styles.unchecked} />
        )}
        <p className={done ? styles.textRisked : ''}>{content}</p>
      </div>

      <button type="button" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </li>
  );
}
