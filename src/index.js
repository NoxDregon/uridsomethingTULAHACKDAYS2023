import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Top from './components/top';
import Documents from './components/documents';
import AboutUs from './components/aboutUs';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header />
    <Top/>
    <Documents/>
    <AboutUs/>
  </div>
);


