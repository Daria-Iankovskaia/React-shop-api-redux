import SignInButton from "../../buttons/SignInButton"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";

export const Login = () => {
    const [loginFormData, setLoginFormData] = useState({ userName: "", password: "" });

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: loginFormData.userName,
                password: loginFormData.password
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}, Response ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                localStorage.setItem("token", data.token);
                navigate("/checkout");
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error.message);
            });
    };

    return (
        <div className={styles.container}>
            {token ?
                (<h2> Account page</h2>)
                :
                (<div className={styles.signInContainer}>
                    <h1>Please sign in to your account</h1>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <h1>Member login</h1>
                        <input
                            name="userName"
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            value={loginFormData.userName}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={loginFormData.password}
                        />
                        <SignInButton />
                    </form>
                    <h3>Don't have an account? Create one now</h3>
                </div>
                )}
        </div>
    )
};
