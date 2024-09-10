import React, { useRef, useState } from 'react';

export const Home = () => {
  const [password, setPassowrd] = useState(false);
  const passInp = useRef();
  const showPassword = () => {
    if (password) {
      passInp.current.type = "password";
      setPassowrd(false);
    } else {
      passInp.current.type = "text";
      setPassowrd(true);
    }
  }

  return (
    <>
      <h1 className="text-5xl text-center my-10">Home Page</h1>
      <input
        type="email"
        id="email"
        className="input border border-black"
      />
      <input
        type="password"
        id="pass"
        className="input border border-black ms-2"
        ref={passInp}
      />
      <button className="btn bg-black text-white p-2 ms-3" onClick={showPassword}>
        {password ? "Hide Password" : "Show Password"}
      </button>
    </>
  )
}

export default Home;
