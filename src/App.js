import React from 'react';
import { Header } from './components/Header'
import { StreamerInfo } from './components/StreamerInfo'

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-2">
        <StreamerInfo nick="Przemek" 
        stream_title="lol forever"
        view_count="199"/>
      </div>
    </div>
  );
}

export default App;
