import { useState } from 'react';

function Greeting(prop) {

/* creates date in proper format and saves to date const */
const date = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric"
});

/* Uses usestate to configure dynamic greeting */
const [greeting, setGreeting] = useState("Hello");

    return (
        <>

            <h1>{greeting}, {prop.username}</h1> {/* displays greeting from use state and username sent as prop from App.jsx */}
            <h2>Today's date: {date} </h2> {/* displays date generated above */}
            <button onClick={() => setGreeting(greeting === "Hello" ? "Welcome" : "Hello")}>Change Greeting</button>{/* sets button to toggle between 2 greetings using useState */}
        </>
    )
}


export default Greeting;