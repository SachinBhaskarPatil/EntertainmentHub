
import './App.css';

import {Container} from '@mui/material';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import {BrowserRouter,Route, Routes} from "react-router-dom"; 
import Movies from './pages/Movies/Movies';
import Trending from './pages/Trending/Trending';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          
          <Routes>
          <Route path="/" Component={Trending} exact />
            <Route path="/movies" Component={Movies} />
            <Route path="/series" Component={Series} />
            <Route path="/search" Component={Search} />
          </Routes>
          
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
