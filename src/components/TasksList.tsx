import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import cliboardImg from '../assets/clipboard.svg';

import styles from './TasksList.module.css';

interface Task {
  id: number;
  content: string;
  finished: boolean;
}

interface TasksProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onSelect: (id: number) => void;
}

export function TasksList({ tasks, onDeleteTask, onSelect }: TasksProps) {
  const [finishedTasks, setFinishedTasks] = useState(0);

  function handleSelect(id: number) {
    const taskSelected = tasks.find(task => task.id === id);
    const isFinished = taskSelected?.finished === true;

    if (isFinished) {
      setFinishedTasks(prevState => prevState - 1);
    } else {
      setFinishedTasks(prevState => prevState + 1);
    }

    onSelect(id);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <p>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </p>
        <p>
          <strong>Concluídas</strong>
          <span>
            {tasks.length === 0 ? '0' : `${finishedTasks} de ${tasks.length}`}
          </span>
        </p>
      </header>
      <ul className={tasks.length === 0 ? styles.emptyList : styles.list}>
        {tasks.length === 0 ? (
          <>
            <img src={cliboardImg} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </>
        ) : (
          tasks.map(item => {
            function handleDeleteTask() {
              onDeleteTask(item.id);
            }

            function handleSelectTask() {
              handleSelect(item.id);
            }

            return (
              <li key={item.id}>
                <div onClick={handleSelectTask}>
                  {item.finished ? (
                    <CheckCircle size={18} />
                  ) : (
                    <Circle size={18} />
                  )}
                  <p>{item.content}</p>
                </div>

                <button type="button" onClick={handleDeleteTask}>
                  <Trash size={16} />
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}
