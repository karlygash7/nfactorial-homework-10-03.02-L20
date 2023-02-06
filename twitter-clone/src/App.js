import './App.css';
import SideMenu from './components/SideMenuComponent';
import Home from './components/HomeComponent';

function App() {
  return (
    <div className="App d-flex mx-5">
      <SideMenu />
      <div className='verticale-divider'></div>
      <Home />
      <div className='verticale-divider'></div>
    </div>
  );
}

export default App;
