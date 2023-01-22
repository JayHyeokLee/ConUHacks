import React from 'react'
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';


const LogIn = () => {
    return (
        <EntryPage>
            <PageHeader to="/">PLACE ANYTHING HERE</PageHeader>
            <EntryCard>
                <h2>Log In</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="idontcare@email.com" id="login-email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <Input type="password" placeholder="Password" id="login-password" />
                    </InputGroup>
                    <Button type="submit" full>
                        <Link to="/">Log In</Link>
                    </Button>
                </form>
                <span>
                    Don't have an account?
                    <Link to="/signup">Sign up</Link>
                </span>
            </EntryCard>
        </EntryPage>
    );
}

export default LogIn