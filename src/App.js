import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </>
  );
}

export default App;
