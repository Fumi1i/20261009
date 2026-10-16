import type { Task } from '../types/task';

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  // 完了状態から、表示する文言を決める
  const statusText = task.completed ? '完了' : '未完了';

  return (
    <li className="task-item">
      <span>{task.title}</span>
      <span className={task.completed ? 'status done' : 'status'}>
        {statusText}
      </span>
    </li>
  );
}

