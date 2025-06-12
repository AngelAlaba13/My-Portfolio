import CountUp from "../3rdparty-styles/Counting";
import React, {useRef, useState, useEffect} from "react";

function Proofs() {

    const counterRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [countKey, setCountkey] = useState(0);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setInView(true);
                    setCountkey(prev => prev + 1);
                } 
                else {
                    setInView(false);
                }
            },
            {threshold: 0.5}
        );
        if(counterRef.current){
            observer.observe(counterRef.current);
        }

        return ()=>{
            if (counterRef.current) observer.unobserve(counterRef.current);
        };
    },
     []);

    return (
        <>
            <div className=" relative flex min-h-screen ">
                
                <div className="bg-red-300 min-h-[calc(100vh-16rem)] w-screen flex flex-col justify-center items-center px-4">
                    <p className=" text-white font-semibold text-[1.5rem]">Cathered up to</p>
                    <div ref={counterRef}>
                        <CountUp
                            key={inView ? countKey : "static"}
                            from={inView ? 0 : 42}
                            to={42}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-white font-bold text-[2rem]"
                        />
                    </div>
                        <p className=" text-white font-semibold text-center text-[1.5rem]"><span className=" text-violet-500 font-extrabold">Programming</span> Projects</p>
                </div>
            </div>
        </>
    );
}

export default Proofs;