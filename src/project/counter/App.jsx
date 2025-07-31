// import React, { useState } from 'react'


// function App() {
//     const [Count, setCount] = useState(0)

//     function inc() {
//         setCount(Count + 1)
//     }

//     function dec() {
//         if (Count > 0) {
//             setCount(Count - 1)
//         }
//     }

//     return (
//         <div className='bg-red-400 min-h-screen flex item-center justify-center flex-col'>

//             <button onClick={inc} className='border border border-solid text-2xl text-white w-xs '>Increment</button>
//             {/* <button onClick={() => setCount(count + 1)} className='border border border-solid text-2xl text-white w-xs self-center'>Increment</button> */}
//             <p className='ps-35'>{Count}</p>
//             <button onClick={dec} className='border border border-solid text-2xl text-white w-xs '>Decrement</button>
//             {/* <button onClick={() => count > 0 ?  setCount(count - 1) : ""} className='border border border-solid text-2xl text-white w-xs self-center'>Decrement</button> */}

//         </div>
//     )
// }

// export default App



import React, { useState } from 'react';
function App() {
  const [votes, setVotes] = useState(0);
  const Increment = () => {
    setVotes(votes + 1);
  };

  const Decrement = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  };

  return (
    <div className="app-container">
      <div className="voting-box">
        <h1>Voting Counter</h1>
        <p className="vote-count">{votes}</p>
        <div className="buttons">
          <button onClick={Decrement} className="btn">-</button>
          <button onClick={Increment} className="btn">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

