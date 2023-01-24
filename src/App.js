import logo from './logo.svg';
import './App.css';
import ServicesWeOffer from './components/services/ServicesWeOffer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header>Moksha Conglomerate</header>
        <ServicesWeOffer />
        <footer>developed by @mokshaconglomerate</footer>
      </header>
    </div>
  );
}

export default App;
