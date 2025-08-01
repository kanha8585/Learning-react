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


import React, { useRef, useState } from 'react'
import BgImage from '../src/image/bg.jpg'



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
        console.log("Entered OTP is ", otpValue)
        inputs.current.map((input) => input.value = "")
    }

    return (
        <div style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: "black" }}>OTP GENERATOR</p>
                <div>
                    {
                        [0, 1, 2, 3].map((_, index) => {
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
                                        margin: "0 5px"
                                    }}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    ref={(el) => (inputs.current[index] = el)}
                                />
                            )
                        })
                    }

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
                                border: "none"
                            }}
                        >SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpGenretor;
