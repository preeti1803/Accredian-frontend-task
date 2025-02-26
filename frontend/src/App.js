
import './App.css';
import NavLinks from './component/Uselinks';
import "./index.css";
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Header  from './component/Header';
import Hero from './component/Hero';
import Refer from './component/Refer';
import ReferralBenefits from './component/ReferBenefit';
import Customer from './component/Customer';

function App() {
  return (
   
    <div >
      <Navbar />
      <NavLinks />
      <Header />
       <Hero/>
       <Refer />
        <ReferralBenefits />
        <Customer/>
      <Footer />
 
</div>

    
  );
}

export default App;
