import React from 'react';
import Header from './components/Header/Header';
import StrømApp from './components/StrømApp/StrømApp';
import Strømavtalen from './components/Strømavtalen/Strømavtalen'
import Bredbånd from './components/Bredbånd/Bredbånd'
import Kraftproduksjon from './components/Kraftproduksjon/Kraftproduksjon'
import LeaveAppForm from './components/LeaveAppForm/LeaveAppForm'
import Footer from './components/Footer/Footer'
import './components/MobileMenu/MobileMenu'


function App() {
  return (
    <div>
      <Header />
      <StrømApp />
      <Strømavtalen />
      <Bredbånd />
      <Kraftproduksjon />
      <LeaveAppForm />
      <Footer />
      
    </div>
  );
}

export default App;