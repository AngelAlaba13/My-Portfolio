import { motion } from "framer-motion";

function Skills(){
    return(
        <div className="bg-red-300 min-h-screen relative">
            <div>
                <motion.div
                    initial={{ opacity: 0, y:150 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{once:true, amount: 0.10}}
                    transition={{ type: "spring", stiffness: 100, damping: 50, duration: 0.10 }}
                    >
                     <p className="text-white text-center font-bold text-[2rem]">My Skills</p>
                     <div className=" bg-slate-300 flex flex-row justify-evenly items-center text-[1.5rem]">
                        <div className="text-white font-semibold">Languages</div>
                     </div>
                </motion.div>
            </div>
        </div>

    
        
        
    )
}

export default Skills;