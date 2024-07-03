import { useState } from "react";
import "./App.css";
import AutoCounter from "./components/AutoCounter";
import PostPage from "./components/PostPage";
// import LoginClassForm from "./components/LoginClassForm";
// import Cart from "./components/Cart";
// import Counter from "./components/Counter";
// import LoginForm from "./components/LoginForm";
// import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const [showCounter , setShowCounter] = useState(true);
  return (
    <>
    {showCounter && <AutoCounter/>}
    <button onClick={() => {
      setShowCounter(show => !show);

    }}>Toogle Show Counter</button>
    <AutoCounter/>
    <PostPage/>
    {/* <WelcomeMessage user={{
      name : 'Adnan',
      type : 'moderator'
    }} isLoggedIn={true}/> */}
      {/* <LoginForm />
      <div className="mt-20">
        <LoginClassForm />
      </div> */}
      {/* <Counter/>
      <Cart /> */}
    </>
  );
}

export default App;
