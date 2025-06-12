import { BrowserRouter } from 'react-router-dom';
import Particles from './3rdparty-styles/Particles';
import AppRoutes from './components/Routes';

function App() {

    return (
      <>
      <div style={{ backgroundColor:'black', width: '100%', height: '100vh', position: 'fixed', overflow: 'hidden', zIndex: -1, pointerEvents: "none"}}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
    </div>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>

      
    </>
    )
}

export default App
