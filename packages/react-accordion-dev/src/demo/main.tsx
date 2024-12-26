import React from 'react';
import ReactDOM from 'react-dom/client';
import { CardFlipDemo } from '../components/CardFlipDemo';
import '../styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">React Accordion Dev Demo</h1>
      <CardFlipDemo />
    </div>
  </React.StrictMode>
); 