import logo from './logo.svg';
import './App.css';
import { Navbar, SearchElements, Card, Footer } from './components'
import './responsive.styles.css'

function App() {

  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <div>
          <h1>Condimentum consectetur </h1>
        </div>
        <div>
          <SearchElements />
        </div>
      </div>

      <div className='content'>
        <div className='wrap'>
          <div className='card-group'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
