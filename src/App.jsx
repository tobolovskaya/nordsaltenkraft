import React from 'react';
import Header from './components/Header/Header';
import StrømApp from './components/StrømApp/StrømApp';
import Strømavtalen from './components/Strømavtalen/Strømavtalen'
import Bredbånd from './components/Bredbånd/Bredbånd'
import Kraftproduksjon from './components/Kraftproduksjon/Kraftproduksjon'

function App() {
  return (
    <div>
      <Header />
      <StrømApp />
      <Strømavtalen />
      <Bredbånd />
      <Kraftproduksjon />
      
    </div>
  );
}

export default App;