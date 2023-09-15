import "./home.css"

const firstAction = ["can", "shall", "should", "must"];

const action = ["build", "create", "change", "shape"];

function addFirstAction(firstAction){
  return firstAction;
}

console.log(addFirstAction(firstAction));


const firstWord = firstAction[Math.floor(Math.random()*4)];


function addWord(action){
  return action;
}
console.log(addWord(action));

const word = action[Math.floor(Math.random()*4)];



export const HomePage = () => {
  return (
    <main className="home-main">

      <h1>
        What {firstWord} we <br />
        {word} today?
      </h1>

      {/* <h1>
        What <br />
        {firstWord} we <br />
        {word} <br />
        today?
      </h1> */}
    </main>
    )
}


// export const HomePage = () => {
//   return (
//     <>
//         <section class="intro">
                
//             <article class="intro-name">
//                 <h2 class="nameIs">My name is</h2>
//                 <h1 class="myName"><span class="firstLetter">C</span>olin <span class="firstLetter">B</span>eltz</h1>
//                 <h2 class="iAm">and I am:</h2>
//             </article>

//         </section>
//     </>
//   )
// }
