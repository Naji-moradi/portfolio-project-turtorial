import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Particles from 'react-particles-js' 
import Navbar from './component/Navbar';
import Header from './component/Header';
// import { Stroke } from 'tsparticles/Options/Classes/Particles/Stroke';
 
function App() {
  return (
    <>
     <Particles
     className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 35,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape:{
            type :"circle",
            stroke:{
              width: 6,
              color:"#f9ab00"

            }
                    }
        },
      }}
    />
    
    

    
      <Navbar/>
      <Header/>
      
    
    </>
  );
}

export default App;
