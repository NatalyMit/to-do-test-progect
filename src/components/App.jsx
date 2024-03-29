import { Layout } from './Layout/Layout';
import { TaskList } from './TaskList/TaskList';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
