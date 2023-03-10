import MainScreen from "./main/MainScreen";
import SplashScreen from "./splash/SplashScreen";

export default function ScreenSwitcher(data) {
    const { screenName, updateScreen } = data;

    return (
        <div>
            {screenName === 'Splash' ?
                <SplashScreen updateScreen={updateScreen} /> :
                screenName === 'Main' ?
                    <MainScreen /> :
                    <div></div>
            }
        </div>

    )
}