// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import './index.css'
import Login from './components/pages/login';
import SignUp from './components/pages/signup';
import Dashboard from './components/pages/dashboard';
import GenerateArticle from './components/pages/generate-article';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/generare-article" element={<GenerateArticle />} />
        
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

