import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../../views/login';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};