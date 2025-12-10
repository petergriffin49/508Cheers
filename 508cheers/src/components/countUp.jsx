import { useEffect, useState } from "react";

function CountUp({ end, duration = 1200 }) {
    const [value, setValue] = useState(0);
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 6);

    useEffect(() => {
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const rawProgress = Math.min((timestamp - startTime) / duration, 1);

            // apply easing
            const easedProgress = easeOutCubic(rawProgress);

            setValue(Math.floor(easedProgress * end));

            if (rawProgress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [end, duration]);

    return <span>{value}</span>;
}

export default CountUp;