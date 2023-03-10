import { useEffect, useRef, useState } from 'react'
import heart from '../../assets/footer/heart.png'

export default function LoveFooter() {
    const heart1 = useRef();
    const heart2 = useRef();
    const heart3 = useRef();
    const heart4 = useRef();
    const heart5 = useRef();
    const heart6 = useRef();

    const [heartIndex, updateHeartIndex] = useState(0);
    const [heartBottom, updateHeartBottom] = useState(-16);

    const hearts = [heart1, heart2, heart3, heart4, heart5, heart6];
    const [heartOpacity, updateHeartOpacity] = useState(1);

    useEffect(() => {
        const heartMovement = setTimeout(() => {
            updateHeartBottom(heartBottom + 0.1);
            updateHeartOpacity(heartOpacity - 0.1 / 46);
            hearts[heartIndex].current.style.bottom = heartBottom + 'dvw';
            hearts[heartIndex].current.style.opacity = heartOpacity;
            if (heartBottom > 30) {
                updateHeartIndex(Math.floor(Math.random() * (hearts.length)));
                updateHeartBottom(-16);
                updateHeartOpacity(1);
            }
        }, 1000 / 270);

        return () => {
            clearTimeout(heartMovement);
        }
    }, [heartBottom, heartOpacity]);

    return (
        <div style={{ position: 'fixed', bottom: '0', display: 'flex' }}>
            <div ref={heart1} style={{ position: 'fixed', bottom: '-16dvw', left: '1dvw', width: '16dvw', height: '16dvw', content: `url(${heart})` }} />
            <div ref={heart2} sstyle={{ position: 'fixed', bottom: '-16dvw', left: '16.3dvw', width: '16dvw', height: '16dvw', content: `url(${heart})` }} />
            <div ref={heart3} style={{ position: 'fixed', bottom: '-16dvw', left: '32.6dvw', width: '16dvw', height: '16dvw', content: `url(${heart})` }} />
            <div ref={heart4} style={{ position: 'fixed', bottom: '-16dvw', left: '48.9dvw', width: '16dvw', height: '16dvw', content: `url(${heart})` }} />
            <div ref={heart5} style={{ position: 'fixed', bottom: '-16dvw', left: '65.2dvw', width: '16dvw', height: '16dvw', content: `url(${heart})` }} />
            <div ref={heart6} style={{ position: 'fixed', bottom: '-16dvw', left: '81.5dvw', width: '16dvw', height: '16dvw', content: `url(${heart})` }} />
        </div>
    )
}