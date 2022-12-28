import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/study" element={<TeacherList />} />
        <Route path="/give-classes" element={<TeacherForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;