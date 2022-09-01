import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent } from 'react';
import todoLogo from '../assets/logo.svg';

import styles from './Header.module.css';

interface HeaderProps {
  onSubmit: () => void;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  task: string;
}

export function Header({ onSubmit, setTask, task }: HeaderProps) {
  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    onSubmit();
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="Logo" />

      <form onSubmit={handleAddNewTask} className={styles.addWrapper}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={task}
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </div>
  );
}
