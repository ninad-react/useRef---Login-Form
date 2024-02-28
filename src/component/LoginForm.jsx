import React, { useRef } from 'react'

const LoginForm = () => {

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        console.log('username', username);
        console.log('password', password);

        usernameRef.current.value = "";
        passwordRef.current.value = "";

    }

    return (
        <>
            <h2>Basic Login Form using useRef Hook in React Js</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Username: </label>
                    <input type='text' ref={usernameRef}/>
                </div>

                <div>
                    <label>Password: </label>
                    <input type='password' ref={passwordRef}/>
                </div>

                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </>
    )
}

export default LoginForm