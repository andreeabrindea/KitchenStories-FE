"use client";
import NavBar from "../components/NavBar/NavBar";
import './register.css';
import imagine from '@/public/brooke-lark-wMzx2nBdeng-unsplash.jpg';
import Link from 'next/link';
import { useState } from 'react';
export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function submit() {
        if (username.trim() == "") {
            alert("username cannot be empty!");
            return;
        }

        if (email.trim() == "") {
            alert("email cannot be empty!");
            return;
        }

        if (password.trim() == "") {
            alert("password cannot be empty!");
            return;
        }
        if (confirmPassword.trim() == "") {
            alert("you must confirm your password!");
            return;
        }

        if (confirmPassword !== password)
        {
            alert("passwords do not match");
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
                    <form id="register-form" onSubmit={submit}>
                        <label htmlFor="username-input" className="label-register">USERNAME</label>
                        <input required className="input-register" id="username-input" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label htmlFor="email-input" className="label-register">EMAIL</label>
                        <input className="input-register" id="email-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="password-input" className="label-register">PASSWORD</label>
                        <input className="input-register" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                        <label htmlFor="confirm-password-input" className="label-register">CONFIRM PASSWORD</label>
                        <input className="input-register" id="confirm-password-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password"/>
                        <section id="terms-of-use-section">
                            <input type="checkbox" />
                            <label>By signing up you accept the terms of use and the data privacy policy.</label>
                        </section>
                        <button onClick={submit}>Submit</button>
                    </form>
                </section>
            </main>
        </>
    );
}