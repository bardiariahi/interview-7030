import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
    const [inputValue, setInputValue] = useState<string>("");
    const [isAllow, setIsAllow] = useState<boolean>(false);
    const [state, setState] = useState<string>("page1");
    const router = useRouter();

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
        if (Object.keys(e.target.value).length) {
            setIsAllow(true);
        } else {
            setIsAllow(false);
        }
    };

    const handleSubmit = () => {
        setState("page2");
    };

    const handleBackSubmit = () => {
        setState("page1");
    };

    return state === "page1" ? (
        <div>
            <p className="font-bold">please enter your name</p>
            <div className="pt-3">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
            <div className="pt-3">
                <button
                    disabled={!isAllow}
                    onClick={handleSubmit}
                    className="btn btn-outline btn-warning"
                >
                    Play!
                </button>
            </div>
        </div>
    ) : (
        <>
            <p className="font-bold">your enterie name</p>
            <div className="pt-3">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    value={inputValue}
                    onChange={handleInputChange}
                    disabled={true}
                />
            </div>
            <div className="pt-3 flex gap-10">
                <button
                    onClick={() => router.push("/home")}
                    className="btn btn-warning w-32"
                >
                    Play!
                </button>
                <button
                    onClick={handleBackSubmit}
                    className="btn btn-error w-32"
                >
                    Edit
                </button>
            </div>
        </>
    );
}
