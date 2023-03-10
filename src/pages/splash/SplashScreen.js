import { useEffect, useState } from "react";

export default function SplashScreen() {

    const [dots, updateDots] = useState('');
    const [image, updateImage] = useState(null);

    useEffect(() => {
        const updateInterval = setTimeout(() => {
            updateDots(dots + '.');
            if (dots.length > 2) {
                updateDots('');
            }
        }, 500)
        return () => {
            clearTimeout(updateInterval);
        }
    }, [dots]);

    useEffect(() => {
        const images = importAll(require.context('../../assets/', false, /\.(png|jpe?g|svg)$/));
        const shownImage = images[Math.floor(Math.random() * (images.length - 1))];
        updateImage(shownImage);
    }, [image])


    function importAll(r) {
        return r.keys().map(r);
    }

    return (
        <div style={{ width: '100dvw', height: '100dvh' }}>
            <div style={{ paddingTop: '15dvh' }}>
                <div style={{ width: '40dvw', height: '40dvw', content: `url(${image})`, borderRadius: '100%', border: 'solid white 2vw', margin: '0 auto' }} />
                <p style={{ position: 'fixed', width: '100%', textAlign: 'center', fontSize: '8dvw' }}>Подсчитываем<br></br>секундочки{dots}</p>
            </div>
        </div >
    )
}