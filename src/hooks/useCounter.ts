import { useEffect, useState } from "react";

export function useCounter(target: number, duration: number, active: boolean) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start: number | null = null;
        const tick = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / (duration * 1000), 1);
            setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [active, target, duration]);
    return val;
}
