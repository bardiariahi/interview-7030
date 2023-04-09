import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import useTimerLog from "../../hooks/timer";

function index() {
    const { timer, valueOfRerenders } = useTimerLog();
    const [theArray, setTheArray] = useState<Array<string>>([]);
    let listData = [] as any

    useEffect(() => {
        setTheArray([]);
            const aa = axios
                .get("https://dog.ceo/api/breed/hound/afghan/images/random/9")
                .then((dataa) => {
                    listData.push(dataa.data.message)
                    setTheArray(dataa.data.message);
                })
    }, []);

    useEffect(() => {
        console.log(theArray, "array");
        console.log(listData,'listData')
    }, [valueOfRerenders]);

    return (
        <>
            <div>
                <p>your timer is : {timer}</p>
                <p>api call: {valueOfRerenders}</p>
            </div>
            <div className="columns-3 px-32">
                {theArray &&
                    theArray.map((img: any, index: number) => (
                        <div key={index}>
                            <Image
                            className="h-44 w-44 border p-2"
                                alt="image"
                                src={img}
                                height={70}
                                width={70}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}

export default index;
