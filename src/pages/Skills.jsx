import { motion } from "framer-motion";

function Skills(){
    
    const progLanguages = [
        {src: "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white", alt: "Laravel"},
        {src: "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white", alt: "Flutter"},
        {src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB", alt: "React"},
        {src: "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white", alt: "WordPress"},
        {src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white", alt: "TailwindCSS"},
        {src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white", alt: "Bootstrap"},
        {src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white", alt: "CSS"},
        {src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white", alt: "HTML"},
        {src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E", alt: "Javascript"},
        {src: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white", alt: "PHP"},
        {src: "https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white", alt: "Dart"},
        {src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white", alt: "Java"},
        {src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54", alt: "Python"},
        {src: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white", alt: "C"},
        {src: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white", alt: "C++"},

    ]

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
                        <div>
                            <p className="text-white font-semibold text-center py-5">Languages</p>
                            <div className="bg-white flex flex-row flex-wrap px-4 py-4 bg-opacity-40 rounded-xl">
                                {progLanguages.map((img, index) => (
                                    <img key={index} src={img.src} alt={img.alt} className="h-12 w-30 rounded-xl"/>
                                ))}
                            </div>
                            </div>
                     </div>
                </motion.div>
            </div>
        </div>

    
        
        
    )
}

export default Skills;