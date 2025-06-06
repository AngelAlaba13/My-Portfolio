import Particles from './components/Particles';
import Header from './components/Header';

function App() {

    return (
      <>
      <Header/>
      <div style={{ backgroundColor:'black', width: '100%', height: '100vh', position: 'fixed', overflow: 'hidden', zIndex: -1, }}>
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
    </>
    )
}

export default App
