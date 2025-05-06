import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import StromApp from './components/StromApp/StromApp';
import Stromavtalen from './components/Stromavtalen/Stromavtalen'
import Bredband from './components/Bredband/Bredband'
import Kraftproduksjon from './components/Kraftproduksjon/Kraftproduksjon'
import LeaveAppForm from './components/LeaveAppForm/LeaveAppForm'
import Footer from './components/Footer/Footer'

import MinSide from './pages/MinSide'
import Sponsing from './pages/Sponsing/Sponsing'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<StromApp />} />
        <Route path="/stromavtalen" element={<Stromavtalen />} />
        <Route path="/bredband" element={<Bredband />} />
        <Route path="/kraftproduksjon" element={<Kraftproduksjon />} />
        <Route path="/application-form" element={<LeaveAppForm />} />
        <Route path="/minside" element={<MinSide />} /> 
        <Route path="/sponsing" element={<Sponsing />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;