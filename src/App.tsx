import { useState } from 'react';
import "./App.css";
import { ISegments, ISpinWheelProps, SpinWheel } from '.';
import logo from "./assets/images/logo.jpg"
import image from "./assets/images/image.png"



function App() {
  const [spinResult, setSpinResult] = useState<string>("");

  const segments: ISegments[] = [
    { segmentText: "50% off on Sound Bar", segColor: "#EE1830" },
    { segmentText: "Iron Box/Neck Band FREE on Smart Phone", segColor: "#EF5D22" },
    { segmentText: "2 Burner FREE on Chimney/Refrigerator", segColor: "#FFF100" },
    { segmentText: "Idly Cooker/Pressure Cooker FREE on Stove", segColor: "#7BC242" },
    { segmentText: "20% OFF on Washing Machine", segColor: "#44CAF0" },
    { segmentText: "2000/- OFF on TV/Laptop", segColor: "#3A4A9F" },
    { segmentText: "1lt Instant Geyser @1/-", segColor: "#73499B" },
    { segmentText: "Free Watch worth 8000/- @1/-", segColor: "#BC4599" },
  ];

  const handleSpinFinish = (value: string) => {
    console.log(spinResult)
    setSpinResult(value);
  };

  const spinWheelProps: ISpinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: 'black',
    contrastColor: 'black',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 260,
    upDuration: 200,
    downDuration: 800,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: true,
    isSpinSound: true,
  };

  return (
      <div className='landingpage'>
        <div className='navbar'>
          {/* <a className='navlogo'>LOGO</a> */}
          <img src={logo} className='logo'/>
        </div>
        <div className='box'>
          <div className='infobox'>
            <p className='infobox-boldtext'>
              MEGA SPIN <br></br> WHEEL DEAL
            </p>
            <p className='infobox-slimtext'>
              Unlock Special Offers By Spinning the Wheel
            </p>
            <div className='imagess'>
            <img src={image} className='image'/>
          </div>
          </div>
         
          <div className='spinWheelBox'>
            <SpinWheel {...spinWheelProps} />
          </div>
        </div>

        <div className='address'>
          <p className='infobox-boldtext'>4-343/1, Sarvodaya Nagar Colony, Meerpet, Balapur, Hyderabad-500097. <br></br> <span className='infobox-slimtext'>Sravan Kumar.Ch :9347819251-9347550075</span></p>
        </div>
      </div>
  );
}

export default App;
