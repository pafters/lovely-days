import { motion } from "framer-motion";
import rotateNotifcation from '../../assets/rotate/rotate-notification.png';

export default function RotateNotice() {
    return (
        <div style={{
            position: 'relative',
            top: '15dvh',
            left: 0,
            right: 0,
        }} >
            <motion.div
                animate={{ rotate: -270 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    type: 'tween'
                }}
                style={{
                    width: '50dvh',
                    margin: '0 auto',
                    marginBottom: '10dvh',
                    content: `url(${rotateNotifcation})`
                }}
            />
            <p style={{
                width: '100dvw',
                margin: '0 auto',
                fontSize: '6dvh',
                textAlign: 'center',
                marginTop: '10dvh'
            }}>Поверни экран</p>
        </div>
    );
}