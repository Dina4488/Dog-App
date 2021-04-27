import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage/HomePage';
import DogsPage from './pages/DogsPage/DogsPage';


function App() {
  return (
    <div>
      <Container>
        <HomePage/>
        <DogsPage/>
      </Container>
    </div>
  );
}

export default App;
