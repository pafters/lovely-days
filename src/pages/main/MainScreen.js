import moment from "moment/moment";
import 'moment-precise-range-plugin';

import { useEffect, useState } from "react";
import LoveFooter from "../footer/LoveFooter";


export default function MainScreen() {

    const starts = moment('2022-10-20 23:08:00');
    const [dateNow, updateDateNow] = useState(moment());

    const [diff, updateDiff] = useState(moment.preciseDiff(starts, dateNow, true));

    useEffect(() => {
        const dateUpdater = setTimeout(() => {
            let now = updateDateNow(moment());
            updateDateNow(now);
            updateDiff(moment.preciseDiff(starts, dateNow, true));
        }, 1000);

        return () => {
            clearTimeout(dateUpdater);
        }
    }, [diff]);


    return (
        <div>

            <div>
                <p style={{ width: '100dvw', textAlign: 'center', fontSize: '9dvw' }}>Времени вместе</p>
                <div>
                    <p style={{ width: '100dvw', textAlign: 'center', fontSize: '5dvw' }}>Лет/Месяцев/Дней</p>
                    <p style={{ width: '100dvw', textAlign: 'center', fontSize: '20dvw', fontWeight: 600, marginTop: '-3dvw' }}>{diff.years}/{diff.months}/{diff.days}</p>
                    <p style={{ width: '100dvw', textAlign: 'center', fontSize: '20dvw', fontWeight: 600, marginTop: '-15dvw' }}>{diff.hours}:{diff.minutes}:{diff.seconds}</p>
                </div>
            </div>
            <div>
                <LoveFooter />
            </div>

        </div >
    )
}