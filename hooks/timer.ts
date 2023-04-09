import React, { useEffect, useState } from 'react'

function useTimerLog() {
    const [timer, setTimer] = useState<number>(10);
    const [valueOfRerenders, setValueOfRerenders] = useState<number>(0);

    const eachSecond = setTimeout(() => {
        counterSeconds();
    }, 1000);

    function counterSeconds() {
        if (timer !== 0) {
            setTimer(timer - 1);
        } else {
            setValueOfRerenders(valueOfRerenders + 1);
            setTimer(10);
        }
    }

    useEffect(() => {
        clearTimeout(eachSecond);
    }, [timer]);
    
  return ({
    timer,
    valueOfRerenders
  }
  )
}

export default useTimerLog