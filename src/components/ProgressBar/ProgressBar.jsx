import {Line} from 'rc-progress';
import { useMemo } from 'react';

const ProgressBar = ({currentTime, selectedTIme}) => {
    const timePercentage = (useMemo(() => {
        const roundedTimePercantage = Math.round(currentTime / selectedTIme * 100);

        return (
            roundedTimePercantage
        )
    }, [currentTime, selectedTIme]));

    return (
     <>
        <Line percent={timePercentage} strokeWidth={4} strokeColor="#D3D3D3" />
    </>
    )
};

export {ProgressBar};
