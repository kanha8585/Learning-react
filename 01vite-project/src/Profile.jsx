 function Profile(props){
    return(
        <div className="flex border border-1 rounded p-2 flex-col">
            <h2>STUDENT PROFILE</h2>
            <div>
                <img src={props.imgAdd}/>
                <h3>Name:{props.name}</h3>
                <p>Age:{props.age}</p>
                <p>Email{props.email}</p>
            </div>
        </div>
    )
 }


 export default Profile

// ** RANDOM API PROFILE CSS

//   import React from "react";

// function Profile({ name, age, email, image, bgColor }) {
//   const cardStyle = {
//     padding: "10px",
//     border: "2px solid #2196f3",
//     borderRadius: "10px",
//     backgroundColor: bgColor || "#ffffff",
//     boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     fontSize: "13px"
//   };

//   const imgStyle = {
//     width: "60px",
//     height: "60px",
//     borderRadius: "50%",
//     border: "2px solid #2196f3",
//     marginBottom: "5px"
//   };

//   return (
//     <div style={cardStyle}>
//       <img src={image} alt={name} style={imgStyle} />
//       <h4 style={{ margin: "5px 0" }}>{name}</h4>
//       <p>Age: {age}</p>
//       <p>{email}</p>
//     </div>
//   );
// }

// export default Profile;
