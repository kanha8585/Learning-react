// import React,{useRef, useState}from 'react'

// function OtpGenretor() {

//     let inputs = useRef([]);
//     const[otpValue , setOtpValue] = useState('')

//        function handleChange(e,index){
//                         const value = e.target.value;

//                         if(value.length === 1 && index < inputs.current.length -1){
//                             inputs.current[index + 1].focus()
//                         }
//                         updateotp()
//                     }
//                     function handleKeyDown(e,index){
//                         if(e.key === "Backspace" && !e.target.value && index > 0){
//                             inputs.current[index-1].focus()
//                         }
//                     }

//                     function updateotp(){
//                        let otpdata =  inputs.current.map((input) => input.value).join('')
//                         setOtpValue(otpdata)

//                     }

//                     function handleSubmit(){
//                         console.log("Enter Otp is ",otpValue)
//                         inputs.current.map((input) => input.value = "" )
//                     }
//   return (
//     <div>
//         <p>OTP GENENRATOR</p>
//         <div>
//             {
//                 [0,1,2,3,].map((_,index)=>{
//                     return(
//                         <input 
//                         key={index}
//                         type='text'
//                         maxLength="1"
//                         style={{width:"40px",height:"40px",textAlign:"center",fontSize:"20px"}}
//                         onChange={(e) => handleChange (e,index)}
//                         onKeyDown={(e) => handleKeyDown(e,index)}
//                         ref={(el) => (inputs.current[index] = el)}
//                         />
//                     )
//                 })
//             }

//             <button onClick={handleSubmit} style={{marginLeft:"15px"}}>SUBMIT</button>
//         </div>
//     </div>
//   )
// }

// export default OtpGenretor;


// ................................normal otp genreter................................


















import React, { useRef, useState } from 'react'
import BgImage from '../src/image/background.png'

function OtpGenretor() {
    let inputs = useRef([]);
    const [otpValue, setOtpValue] = useState('')

    function handleChange(e, index) {
        const value = e.target.value;
        if (value.length === 1 && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus()
        }
        updateotp()
    }

    function handleKeyDown(e, index) {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputs.current[index - 1].focus()
        }
    }

    function updateotp() {
        let otpdata = inputs.current.map((input) => input.value).join('')
        setOtpValue(otpdata)
    }

   
    function handleSubmit() {
    
    const Empty = inputs.current.some((input) => input.value.trim() === "");

    if (Empty || inputs.current.length !== 4) {
        alert("Please enter 4 digit OTP");
        return;
    }

    const otpdata = inputs.current.map((input) => input.value).join('');
    setOtpValue(otpdata);
    console.log("Entered OTP is ", otpdata);
    alert("OTP SUBMITTED SUCCESSFULLY");

    inputs.current.forEach((input) => input.value = "");
}


    return (
        <>
            
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                margin: 0,
                padding: 0,
                zIndex: 0
            }}>
                <img
                    src={BgImage}
                    alt="background"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1
                    }}
                />
            </div>

           
            <div style={{
                position: 'relative',
                zIndex: 1,
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    padding: '40px',
                    borderRadius: '12px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(5px)'
                }}>
                    <h1 style={{
                        fontSize: '45px',
                        fontWeight: 'bold',
                        color: "white",
                        textShadow: "2px 2px red"
                    }}>OTP GENERATOR</h1>

                    <p style={{
                        fontSize: "22px",
                        fontWeight: "bold",
                        color: "white",
                        textShadow: "1px 1px red",
                        marginTop: "30px"
                    }}>ENTER THE 4 DIGIT OTP</p>

                    <div>
                        {[0, 1, 2, 3].map((_, index) => {
                            return (
                                <input
                                    key={index}
                                    type='text'
                                    maxLength="1"
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        textAlign: "center",
                                        fontSize: "20px",
                                        margin: "20px 10px",
                                        color: "black",
                                        backgroundColor: "white",
                                        border: "1px solid gray",
                                        borderRadius: "6px"
                                    }}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputs.current[index] = el)}
                                />
                            )
                        })}

                        <div>
                            <button
                                onClick={handleSubmit}
                                style={{
                                    marginTop: "20px",
                                    padding: "10px 20px",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    borderRadius: "6px",
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    border: "none",
                                    transition: "background-color 0.3s, color 0.3s"
                                }}
                                onMouseOver={e => {
                                    e.target.style.backgroundColor = "transparent";
                                    e.target.style.color = "#fff";
                                    e.target.style.border = "2px solid #007bff";
                                }}
                                onMouseOut={e => {
                                    e.target.style.backgroundColor = "#007bff";
                                    e.target.style.color = "white";
                                    e.target.style.border = "none";
                                }}
                            >SUBMIT</button>

                            <p style={{ fontSize: "20px", fontWeight: "bold", color: "white", marginTop: "10px" }}>
                                Did not receive the OTP?{" "}
                                <span style={{ color: "red", cursor: "pointer" }}>
                                    RESEND OTP
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtpGenretor;
