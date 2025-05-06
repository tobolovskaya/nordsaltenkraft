import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import StrømApp from './components/StrømApp/StrømApp';
import Stromavtalen from './components/Stromavtalen/Stromavtalen'
import Bredbånd from './components/Bredbånd/Bredbånd'
import Kraftproduksjon from './components/Kraftproduksjon/Kraftproduksjon'
import LeaveAppForm from './components/LeaveAppForm/LeaveAppForm'
import Footer from './components/Footer/Footer'

import MinSide from './pages/MinSide'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<StrømApp />} />
        <Route path="/stromavtalen" element={<Stromavtalen />} />
        <Route path="/bredbånd" element={<Bredbånd />} />
        <Route path="/kraftproduksjon" element={<Kraftproduksjon />} />
        <Route path="/application-form" element={<LeaveAppForm />} />
        <Route path="/minside" element={<MinSide />} /> 
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;