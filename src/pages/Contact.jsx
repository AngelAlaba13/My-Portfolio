import React, {useState} from "react";

function Contact(){
    
    const [message, setMessage] = useState("");

    const handleSend = ()=> {
        const subject = encodeURIComponent("Message from Portfolio");
        const body = encodeURIComponent(message);
        const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=aklalaba@nemsu.edu.ph&su=${subject}&body=${body}`;
        window.open(gmailURL, "_blank");
    }

    return(
        <div className="min-h-screen flex justify-center items-center mx-5">
            <p className="text-white text-center font-bold text-[2rem]">Reach Me</p>
            <textarea name="emailContent" id="emailContent" placeholder="Type your email here..." value={message} onChange={e => setMessage(e.target.value)}/>
            <button onClick={handleSend} className="text-white">
                Send Email
            </button>
        </div>
    );

}
export default Contact;