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
  const [showAnimation, setShowAnimation] = useState(false);
  const [width, setWidth] = useState(1000);

  useEffect(() => {
    const targetDiv = document.getElementById('navBar');
    const animationDiv = document.getElementById("animationDiv");

    function handleScroll() {
      if (targetDiv) {
        const targetDivPosition = targetDiv.getBoundingClientRect();
        if (targetDivPosition.top < window.innerHeight/100) {
          setVidoScrolled(true);
        } else {
          setVidoScrolled(false);
        }
      }
      if (animationDiv) {
        const targetDivPosition = targetDiv.getBoundingClientRect();
        if (targetDivPosition.top < window.innerHeight) {
          setShowAnimation(true);
        } else {
          setShowAnimation(false);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  
  const { register } = useForm();
  return (
    <div className="App">
      <TopNavbar
        register={register}
        width={width}
      />
      <div style={{background: "#fff"}}>
        <Features showAnimation={showAnimation} />
        <Cashback
          width={width}
        />
        <CashbackValue
          width={width}
        />
        <ZeroForex
          width={width}
        />
        <LifetimeFree width={width}/>
        <MobileCardComponent width={width} />
        </div>
      <Promises width={width} />
      <BottomNavBar width={width} />
      {videoScrolled && <FixedNavbar register={register} width={width} />}
    </div>
  );
}

export default App;
