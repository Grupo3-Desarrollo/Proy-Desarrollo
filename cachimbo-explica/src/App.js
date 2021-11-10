import Header from './Header';
import Sidebar from './Sidebar';
import Videos from './Videos';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/search' element={<Header/>} />
          <Route path='/' element={
            <div>
              <Header />
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
