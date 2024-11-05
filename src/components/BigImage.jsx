import {
    motion,
    useScroll,
    useTransform
} from 'framer-motion';
import { useRef } from 'react';
import img from '../assets/images/images/image-13.jpeg';
import imgFront from '../assets/images/images/front-building.webp';

const BigImage = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.25', '0.25 start'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], ['0px', '10vh']);
    const translateZ = useTransform(scrollYProgress, [0, 1], ['0px', '-50px']);
;
    // });

    return (
        <motion.div
            className="big-image-container"
            ref={ref}

        >
            <motion.img
                className="big-image"
                src={img}
                alt="scenery"
                style={{
                    y: translateY,
                    z: translateZ,
                }}
            />
            <motion.img
                className="big-image-front"
                alt="a white modern building"
                src={imgFront}
            />
        </motion.div>
    );
};

export default BigImage;
