import { useEffect, useState } from "react";
import Features from "./Components/Features";
import Cashback from "./Components/Cashback";
import CashbackValue from "./Components/CashbackValue";
import "bootstrap/dist/css/bootstrap.css";
import ZeroForex from "./Components/ZeroForex";
import LifetimeFree from "./Components/LifetimeFree";
import Promises from "./Components/Promises";
import BottomNavBar from "./Components/BottomNavBar";
import TopNavbar from "./Components/TopNavbar";
import MobileCardComponent from "./Components/MobileCardComponent";
import FixedNavbar from "./Components/FixedNavbar";
import { useForm } from "react-hook-form";

function App() {
  const [videoScrolled, setVidoScrolled] = useState(false);

  useEffect(() => {
    const targetDiv = document.getElementById('navBar');

    function handleScroll() {
      if (targetDiv) {
        const targetDivPosition = targetDiv.getBoundingClientRect();
        if (targetDivPosition.top < window.innerHeight/100) {
          setVidoScrolled(true);
        } else {
          setVidoScrolled(false);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const { register } = useForm();

  return (
    <div className="App">
      <TopNavbar
        register={register}
      />
      <div style={{background: "#fff"}}>
      <Features />
        <Cashback />
        <CashbackValue />
        <ZeroForex />
        <LifetimeFree />
        <MobileCardComponent />
        </div>
        <Promises />
      <BottomNavBar />
      {videoScrolled && <FixedNavbar register={register} />}
    </div>
  );
}

export default App;
