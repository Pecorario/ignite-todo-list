import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import './global.css';

interface Task {
  id: number;
  content: string;
  finished: boolean;
}

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [countId, setCountId] = useState(0);

  function onSubmit() {
    const newTask = {
      id: countId + 1,
      content: task,
      finished: false
    };

    setCountId(prevState => prevState + 1);
    setTasks(prevState => [...prevState, newTask]);
    setTask('');
  }

  return (
    <div className={styles.wrapper}>
      <Header setTask={setTask} task={task} onSubmit={onSubmit} />

      <main>
        <ul className={styles.tasksList}>
          {tasks.length === 0 ? (
            <p>Achamo nada</p>
          ) : (
            tasks?.map(item => {
              return <li key={item.id}>{item.content}</li>;
            })
          )}
        </ul>
      </main>
    </div>
  );
}

export default App;
