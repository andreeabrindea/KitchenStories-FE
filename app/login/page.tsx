"use client";
import imagine from '@/public/brooke-lark-wMzx2nBdeng-unsplash.jpg';
import Link from 'next/link';
import { useState, ChangeEvent } from "react";
import validator from 'validator';
import "./login.css";
import { useRouter } from 'next/navigation';
import {setCookiesForAuthentication } from '../middleware/authentication';

export default function Login() {
    const [wrongCredentialsError, setWrongCredentialsError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailOutlineColor, setEmailOutlineColor] = useState("");
    const [passwordOutlineColor, setPasswordOutlineColor] = useState("");
    const router = useRouter();

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (e.target.value.trim() == "" || e.target.value == "") {
            setWrongCredentialsError("You must enter your email.");
            setEmailOutlineColor("#ef7464");
        }
        else {
            if (!validator.isEmail(e.target.value)) {
                setEmailOutlineColor("#ef7464");
                setWrongCredentialsError("");
            }
            else {
                if (passwordOutlineColor === "green") {
                    setWrongCredentialsError("");
                }
                setEmailOutlineColor("green");
            }
        }
    }
    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.trim() == "" || e.target.value == "") {
            setWrongCredentialsError("You must enter your password.");
            setPasswordOutlineColor("#ef7464");
        }
        else {
            if (emailOutlineColor === "green") {
                setWrongCredentialsError("");
            }
            setPasswordOutlineColor("green");
        }
    }

    async function login() {
        if (wrongCredentialsError === "" && emailOutlineColor === "green" && passwordOutlineColor === "green") {
            try {
                const requestOptions: RequestInit = {
                    method: "POST",
                    body: JSON.stringify({ password: password, email: email }),
                    headers: { "Content-Type": "application/json" }
                };

                const response = await fetch(`https://gourmetstories.onrender.com/users/login/`, requestOptions);
                if (response.status === 200) {
                    try {
                        const token = await response.text();
                        setCookiesForAuthentication(token);
                        router.push("/");
                    }
                    catch (error) {
                        setWrongCredentialsError("Something went wrong. Please try again. " + error);
                    }
                }
                else {
                    if (response.status === 401)
                        setWrongCredentialsError("Wrong credentials.")
                }
            } catch (error) {
                setWrongCredentialsError("Something went wrong. Please try again. " + error);
            }
        }
    }
    return (
        <>
            <main id="login-wrapper">
                <section style={{ backgroundImage: `url(${imagine.src})` }} />
                <section id="login-form-section">
                    <h1>Log In</h1>
                    <p>Don&#39;t have an account? <Link href="/register" className="link">Sign up</Link></p>
                    <form className="authentication-form">
                        <label>Email</label>
                        <input onChange={handleEmailChange} style={{ outlineColor: emailOutlineColor }} value={email} />
                        <p></p>
                        <label>Password</label>
                        <input type="password" onChange={handlePasswordChange} value={password} style={{ outlineColor: passwordOutlineColor }} />
                        <p className="link">Forgot password?</p>
                        <p id="wrong-credentials-error">{wrongCredentialsError}</p>
                        <button type="button" onClick={login}>Submit</button>
                    </form>
                </section>
            </main>
        </>
    );
}