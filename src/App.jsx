import React from 'react';
import Header from './components/Header/Header';
import StrømApp from './components/StrømApp/StrømApp';
import Strømavtalen from './components/Strømavtalen/Strømavtalen'
import Bredbånd from './components/Bredbånd/Bredbånd'

function App() {
  return (
    <div>
      <Header />
      <StrømApp />
      <Strømavtalen />
      <Bredbånd />
      
    </div>
  );
}

export default App;