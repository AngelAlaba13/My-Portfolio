import { img } from "framer-motion/client";
import CountUp from "../3rdparty-styles/Counting";
import "../styles/Proofs.css";
import React, {useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";


function Proofs() {

    // for the counters
    const counterRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [countKey, setCountkey] = useState(0);

    // for the image
    const reviews = [
        "/reviews/Review1.png",
        "/reviews/Review1.png",
        "/reviews/Review1.png",
        "/reviews/Review1.png",
        "/reviews/Review1.png",
        "/reviews/Review1.png",    
    ]

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
            <div className=" relative flex flex-col min-h-screen gap-32">
                
                <div className=" min-w-full flex flex-col justify-center items-center px-5">
                    <p className=" text-white font-semibold text-[2rem]">Cathered up to</p>
                    <div ref={counterRef}>
                        <CountUp
                            key={inView ? countKey : "static"}
                            from={inView ? 0 : 42}
                            to={42}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-white font-bold text-[2.5rem]"
                        />
                    </div>
                        <p className=" text-white font-semibold text-center text-[2rem]"><span className=" text-violet-500 font-extrabold">Programming</span> Projects</p>
                </div>


                <div className="flex flex-col justify-center items-center text-center">
                    <p className="text-white font-semibold text-[1.5rem]">Helped more than</p>
                    <div ref={counterRef}>
                        <CountUp
                            key={inView ? countKey : "static"}
                            from={inView ? 0 : 200}
                            to={200}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text text-white font-bold text-[2rem] px-4"
                        />
                    </div>
                    <p className="text-white font-semibold text-[1.5rem]">students as an <span className="text-violet-500 font-bold">Academic Server</span></p>
                </div>

                <div>
                    <p className="text-white text-center font-semibold text-[1.5rem] py-4">Testemonies</p>
                    <div className="overflow-hidden w-full border-2 border-violet-400/90 py-5">
                        <div className="flex animate-marquee gap-2">
                            {[...reviews, ...reviews].map((src, index) => (
                                <img
                                key={index}
                                src={src}
                                alt={`carousel-${index}`}
                                className=" h-44 w-auto object-contain select-none pointer-events-none"
                                draggable={false}
                                />
                            ))}
                        </div>

                        <Link to="/reviews">
                            <p className="text-white text-center text-[1rem] underline">See more</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Proofs;