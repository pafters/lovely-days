import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import './App.css';
import MainScreen from './pages/main/MainScreen';
import RotateNotice from './pages/rotateNotice/RotateNotice';

function App() {

  return (
    <DeviceOrientation lockOrientation={'landscape'}>
      <Orientation orientation='landscape' alwaysRender={false} >
        <RotateNotice />
      </Orientation>
      <Orientation orientation='portrait' alwaysRender={false}>
        <div className="App">
          <Router>
            <Routes>
              <Route exact path='/lovely-days-counter/maxnastya' element={<MainScreen date={'2022-09-05 18:00:00'} />} />
              <Route exact path='/lovely-days-counter/slavanastya' element={<MainScreen date={'2022-06-06 17:40:00'} />} />
              <Route exact path='/lovely-days-counter/vovadasha' element={<MainScreen date={'2019-06-02 23:15:00'} />} />
            </Routes>
          </Router>
        </div>
      </Orientation>
    </DeviceOrientation>
  );
}

export default App;
