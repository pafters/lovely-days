import { useEffect, useState } from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import ScreenSwitcher from './pages/ScreenSwitcher';

import './App.css';
import RotateNotice from './pages/rotateNotice/RotateNotice';

function App() {
  const [screenName, updateScreen] = useState('Splash');

  useEffect(() => {
    setTimeout(() => {
      updateScreen('Main');
    }, 3000);
  }, []);

  return (
    <DeviceOrientation lockOrientation={'landscape'}>
      <Orientation orientation='landscape' alwaysRender={false} >
        <RotateNotice />
      </Orientation>
      <Orientation orientation='portrait' alwaysRender={false}>
        <div className="App">
            <ScreenSwitcher screenName={screenName} updateScreen={updateScreen} />
        </div>
      </Orientation>
    </DeviceOrientation>
  );
}

export default App;
