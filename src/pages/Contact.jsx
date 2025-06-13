import React, {useState} from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";



function Contact(){
    
    const [message, setMessage] = useState("");

    const handleSend = ()=> {
        const subject = encodeURIComponent("Message from Portfolio");
        const body = encodeURIComponent(message);
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=aklalaba@nemsu.edu.ph&su=${subject}&body=${body}`;
        window.open(gmailURL, "_blank");
    }

    return(
        <div className="min-h-screen flex flex-col justify-center items-center mx-5">
            <div className="min-w-full mb-16">
                <div className="flex flex-col">
                    <p className="text-white text-center font-bold text-[2rem] pb-20">Reach Me</p>
                    <p className="text-white text-[1.2rem] font-semibold pb-5">Let me know you are here</p>
                    <textarea className=" h-48 rounded-lg p-4" name="emailContent" id="emailContent" placeholder="Type your email here..." value={message} onChange={e => setMessage(e.target.value)}/>
                </div>
                <div className="flex justify-end my-2">
                    <button onClick={handleSend} className=" text-white bg-violet-700 border-2 border-white rounded-md px-3 py-1 hover:bg-violet-800">
                            Send Email
                    </button>
                </div>
            </div>


            <div className="flex flex-row flex-wrap justify-between items-start gap-12 p-7 rounded-2xl">
                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="text-white flex flex-row justify-start items-center gap-2">
                        <FaFacebook size="30"/>
                        <p className="text-[1rem]">Facebook</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="text-white flex flex-row justify-start items-center gap-2">
                        <FaGithub color="white" size="30"/>
                        <p className="text-[1rem]">Github</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="text-white flex flex-row justify-start items-center gap-2">
                        <MdEmail size="30"/>
                        <p className="text-[1rem]">Gmail</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="text-white flex flex-row justify-start items-center gap-2">
                        <FaDiscord size="30"/>
                        <p className="text-[1rem]">Discord</p>
                    </div>
                </a>

                <a href="" target="_blank" rel="noopener noreferrer">
                    <div className="text-white flex flex-row justify-start items-center gap-2">
                        <FaTiktok size="30"/>
                        <p className="text-[1rem]">Tiktok</p>
                    </div>
                </a>
            </div>


        </div>
    );

}
export default Contact;