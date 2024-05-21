import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import TodoPage from '../pages/TodoPage/TodoPage';
import Table from '../pages/Table/Table';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
};

export default AppRoutes;