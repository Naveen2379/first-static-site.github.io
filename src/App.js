import './App.css';
import GlobalNavigations from './components/navigations/GlobalNavigations.tsx';
import ServicesWeOffer from './components/services/ServicesWeOffer.tsx';
import FooterInfo from './components/footerInfo/FooterInfo.tsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <GlobalNavigations />
        <ServicesWeOffer />
        <FooterInfo />
      {/* </header> */}
    </div>
  );
}

export default App;
