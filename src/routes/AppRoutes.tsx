import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import TodoPage from '../pages/TodoPage/TodoPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
};

export default AppRoutes;