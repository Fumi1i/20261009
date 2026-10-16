import './App.css';
import PageHeader from './components/PageHeader';
import TaskList from './components/TaskList';
import type { Task } from './types/task';

// 今回はAPIを使わず、固定データを表示する
const tasks: Task[] = [
  { id: 1, title: 'Viteで開発環境を作る', completed: true },
  { id: 2, title: 'Propsでデータを渡す', completed: false },
  { id: 3, title: 'mapで一覧を表示する', completed: false },
];

export default function App() {
  return (
    <main className="app">
      <PageHeader title="学習タスク一覧" />
      <p>全{tasks.length}件のタスクがあります。</p>
      <TaskList tasks={tasks} />
    </main>
  );
}

