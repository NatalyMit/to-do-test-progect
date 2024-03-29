import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import css from './TaskList.module.css';

import { getStatusFilter, getTasks } from '../../redux/selector';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilter.active:
      return tasks.filtter(task => !task.comleted);

    case statusFilter.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
