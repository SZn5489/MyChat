import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './Route';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
