"use client";
import NavBar from "../components/NavBar/NavBar";
import './register.css';
import imagine from '@/public/brooke-lark-wMzx2nBdeng-unsplash.jpg';
import Link from 'next/link';
import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessageUsernameInput, setErrorMessageUsernameInput] = useState("");
    const [errorMessageEmailInput, setErrorMessageEmailInput] = useState("");
    const [errorMessagePasswordInput, setErrorMessagePasswordInput] = useState("");
    const [errorMessageConfirmPasswordInput, setErrorMessageConfirmPasswordInput] = useState("");
    const [usernameOutlineColor, setUsernameOutlineColor] = useState("");
    const [emailOutlineColor, setEmailOutlineColor] = useState("");
    const [passwordOutlineColor, setPasswordOutlineColor] = useState("");
    const [confirmPasswordOutlineColor, setConfirmPasswordOutlineColor] = useState("");
    const valid = require("validator");
    const router = useRouter();

    async function register() {
        if (usernameOutlineColor === "green" && emailOutlineColor === "green" && passwordOutlineColor === "green" && confirmPasswordOutlineColor === "green") {
            try {
                const requestOptions: RequestInit = {
                    method: "POST",
                    body: JSON.stringify({ username: username, password: password, email: email }),
                    headers: { "Content-Type": "application/json" }
                };
                await fetch(`https://gourmetstories.onrender.com/users/`, requestOptions);
                router.push("/");
            } catch (error) {
                console.log("Error while creating account: ", error)
            }
        }
    }

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        if (e.target.value.trim() == "" || e.target.value == "") {
            setErrorMessageUsernameInput("An username is required");
            setUsernameOutlineColor("#ef7464");
        }
        else {
            if (e.target.value.length < 3) {
                setUsernameOutlineColor("#ef7464");
            }
            else {
                setErrorMessageUsernameInput("");
                setUsernameOutlineColor("green")
            }
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (e.target.value.trim() == "" || e.target.value == "") {
            setErrorMessageEmailInput("An email is required");
            setEmailOutlineColor("#ef7464");
        }
        else {
            if (valid.isEmail(e.target.value)) {
                setErrorMessageEmailInput("");
                setEmailOutlineColor("green");

            }
            else {
                setEmailOutlineColor("#ef7464");
            }
        }
    }

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (e.target.value.trim() == "" || e.target.value == "") {
            setErrorMessagePasswordInput("A password is required");
            setPasswordOutlineColor("#ef7464");
        }
        else {
            if (e.target.value.length < 8) {
                setPasswordOutlineColor("#ef7464");
                setErrorMessagePasswordInput("Password should be at least 8 characters long.");
            }
            else {
                setErrorMessagePasswordInput("");
                setPasswordOutlineColor("green");
            }
            if (e.target.value != confirmPassword && confirmPassword != "") {
                setConfirmPasswordOutlineColor("#ef7464");
                setErrorMessageConfirmPasswordInput("Passwords do not match.");
            }
        }
    }

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.trim() == "" || e.target.value == "") {
            setErrorMessageConfirmPasswordInput("You should reenter the password.");
            setConfirmPasswordOutlineColor("#ef7464");
        }
        else {
            if (e.target.value != password) {
                setConfirmPasswordOutlineColor("#ef7464");
                setErrorMessageConfirmPasswordInput("Passwords do not match.");
            }
            else {
                setErrorMessageConfirmPasswordInput("");
                setConfirmPasswordOutlineColor("green");
            }
        }
    }
    return (
        <>
            <NavBar></NavBar>
            <main id="register-wrapper">
                <section style={{ backgroundImage: `url(${imagine.src})` }}>
                </section>
                <section id="form-section">
                    <h1>Sign up</h1>
                    <p>Already have an account? <Link href="/login" id="login-link">Log in</Link></p>
                    <form id="register-form">
                        <label htmlFor="username-input" className="label-register">USERNAME</label>
                        <input className="input-register" id="username-input" value={username} onChange={handleUsernameChange} style={{ outlineColor: usernameOutlineColor }} />
                        <p id="error-message-username-input">{errorMessageUsernameInput}</p>
                        <label htmlFor="email-input" className="label-register">EMAIL</label>
                        <input className="input-register" id="email-input" value={email} onChange={handleEmailChange} style={{ outlineColor: emailOutlineColor }} />
                        <p id="error-message-email-input">{errorMessageEmailInput}</p>
                        <label htmlFor="password-input" className="label-register">PASSWORD</label>
                        <input className="input-register" id="password-input" value={password} onChange={handlePasswordChange} type="password" style={{ outlineColor: passwordOutlineColor }} />
                        <p id="error-message-password-input">{errorMessagePasswordInput}</p>
                        <label htmlFor="confirm-password-input" className="label-register">CONFIRM PASSWORD</label>
                        <input className="input-register" id="confirm-password-input" value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" style={{ outlineColor: confirmPasswordOutlineColor }} />
                        <p id="error-message-confirm-password-input">{errorMessageConfirmPasswordInput}</p>
                        <section id="terms-of-use-section">
                            <input type="checkbox" />
                            <label>By signing up you accept the terms of use and the data privacy policy.</label>
                        </section>
                        <button onClick={register} type="button">Submit</button>
                    </form>
                </section>
            </main>
        </>
    );
}