import Profile from "./profile"
 import fristimg from"../public/image/fristimg.jpeg"
 import secondimg from"../public/image/secondimg.jpeg"
 import trdimg from"../public/image/trdimg.jpeg"
 import fourimg from"../public/image/fourimg.jpeg"

 function App(){
  return(
    <div className="flex">
      <Profile name="anil" age="21" email="anil@gmail.com"imgAdd={fristimg}/>
       <Profile name="aakash" age="21" email="aakash@gmail.com"imgAdd={secondimg}/>
        <Profile name="naveen" age="24" email="naveen@gmail.com"imgAdd={trdimg}/>
         <Profile name="sagar" age="22" email="sagar@gmail.com"imgAdd={fourimg}/>
    </div>
  )
 }

 export default App

// ** RANDOM API PROFILE 
//  import React from "react";
// import Profile from "./Profile";

// function App() {
//   const users = [
//     {
//       name: "Ravi Sharma",
//       age: 25,
//       email: "ravi.sharma@example.com",
//       image: "https://randomuser.me/api/portraits/men/10.jpg",
//       bgColor: "#e3f2fd"
//     },
//     {
//       name: "Pooja Meena",
//       age: 23,
//       email: "pooja.meena@example.com",
//       image: "https://randomuser.me/api/portraits/women/21.jpg",
//       bgColor: "#fce4ec"
//     },
//     {
//       name: "Arun Verma",
//       age: 28,
//       email: "arun.verma@example.com",
//       image: "https://randomuser.me/api/portraits/men/12.jpg",
//       bgColor: "#fff3e0"
//     },
//     {
//       name: "Neha Joshi",
//       age: 24,
//       email: "neha.joshi@example.com",
//       image: "https://randomuser.me/api/portraits/women/30.jpg",
//       bgColor: "#f3e5f5"
//     },
//     {
//       name: "Sanjay Patel",
//       age: 27,
//       email: "sanjay.patel@example.com",
//       image: "https://randomuser.me/api/portraits/men/40.jpg",
//       bgColor: "#e8f5e9"
//     },
//     {
//       name: "Anjali Sinha",
//       age: 22,
//       email: "anjali.sinha@example.com",
//       image: "https://randomuser.me/api/portraits/women/45.jpg",
//       bgColor: "#ede7f6"
//     },
//     {
//       name: "Rakesh Kumar",
//       age: 30,
//       email: "rakesh.kumar@example.com",
//       image: "https://randomuser.me/api/portraits/men/50.jpg",
//       bgColor: "#fffde7"
//     },
//     {
//       name: "Sneha Gupta",
//       age: 26,
//       email: "sneha.gupta@example.com",
//       image: "https://randomuser.me/api/portraits/women/60.jpg",
//       bgColor: "#e1f5fe"
//     },
//     {
//       name: "Vikram Rathore",
//       age: 29,
//       email: "vikram.rathore@example.com",
//       image: "https://randomuser.me/api/portraits/men/75.jpg",
//       bgColor: "#f9fbe7"
//     },
//     {
//       name: "Kajal Yadav",
//       age: 21,
//       email: "kajal.yadav@example.com",
//       image: "https://randomuser.me/api/portraits/women/85.jpg",
//       bgColor: "#fff8e1"
//     }
//   ];

//   const headingStyle = {
//     fontSize: "25px",
//     textAlign: "center",
//     margin: "10px 0 0 0"
//   };

//   const underlineStyle = {
//     width: "80px",
//     height: "5px",
//     backgroundColor: "#2196f3",
//     margin: "8px auto",
//     borderRadius: "5px"
//   };

//   const gridStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(5, 1fr)",
//     gridTemplateRows: "repeat(2, 1fr)",
//     gap: "10px",
//     padding: "10px",
//     height: "calc(100vh - 80px)",  
//     boxSizing: "border-box"
//   };

//   const appStyle = {
//     margin: 0,
//     overflow: "hidden"
//   };

//   return (
//     <div style={appStyle}>
//       <h1 style={headingStyle}>Team Profiles</h1>
//       <div style={underlineStyle}></div>

//       <div style={gridStyle}>
//         {users.map((user, index) => (
//           <Profile
//             key={index}
//             name={user.name}
//             age={user.age}
//             email={user.email}
//             image={user.image}
//             bgColor={user.bgColor}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
