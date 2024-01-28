import Activities from './components/Activities';
import Footers from './components/Footers';
import Header from './components/Header';
import Hero from './components/Hero';
import Video from './components/Video';

function App() {

  return (
    <>
      <Header />
      <div className='hero-section'>
        <Hero />
      </div>
      {/* <div className='video-wrapper'>
        <Video />
      </div> */}
      <Activities />
      <Footers />
    </>
  )
}

export default App
