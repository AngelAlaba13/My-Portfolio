import Particles from './3rdparty-styles/Particles';
import Header from './components/Header';
import Home from './pages/Home';
import Proofs from './pages/Proofs';
import Skills from './pages/Skills';

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
      <Header/>
      <Home/>
      <Proofs/>
      <Skills/>
      
    </>
    )
}

export default App
