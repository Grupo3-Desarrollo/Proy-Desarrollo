import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import SearchVideo from './SearchVideo';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route path='/search/:searchWord' element={
            <div>
              <div className='app__main'>
                <Sidebar />
                <SearchVideo />
              </div>
            </div>
          }/>
          <Route path='/' element={
            <div>
              <div className='app__main'>
                <Sidebar />
                <Videos />
              </div>
            </div>
          }>
          </Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
