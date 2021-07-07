import React , {useState , StyleSheet} from 'react'
import {db} from "../firebase"
import "../App.css"

const Contact = () => {
    const [name , setName] = useState("rajan");
    const [email , setEmail] = useState("");
    const [message , setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        var nam = name;
        var eam = email;
        var msg = message;
        console.log(nam,eam,msg)

        db.collection("contacts").add({
           
            name:name,
            email:email,
            message:message,
        })
        .then(() =>{
            alert("submitted")
        })
        .catch((error)=>{
            alert(error.message);
        });
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form" >

                <h1 style={{textAlign:"center"}}>CONTACT FORM 💁  </h1>

                <label style={{textAlign:"left",marginTop:30,fontSize:25}}>Name</label>
                <input
                style={{padding:10}}
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></input>

                <label className="eam" style={{textAlign:"left",marginTop:30,fontSize:25}}>Email 📧 </label>
                <input 
                style={{padding:10}}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>

                <label style={{textAlign:"left",marginTop:30,fontSize:25}}>Message</label>
                <textarea 
                style={{padding:10}}
                placeholder="Message"
                value={message}
                onChange={(e)=>  setMessage(e.target.value)}
                ></textarea>

                <button type="submit" style={{marginTop:30,fontSize:25}}> submit

                </button>

            </form>
        </div>
    )
}

export default Contact;



