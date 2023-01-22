import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const Settings = () => {
    return (
        <EntryPage>
            <PageHeader to="/">ENTER CARD INFORMATION HERE</PageHeader>
            <EntryCard>
                <h2>Credit/Debit</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="full-name">Full Name</label>
                        <Input type="text" placeholder="Johnny Appleseed" id="full-name" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="ccn">Credit Card Number:</label>
                        <Input id="ccn" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />
                    </InputGroup>
                    <InputGroup>
                        <label for="expire-date">Expiry Date (month and year):</label>
                        <Input type="month" id="bdaymonth" name="expire-date" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="cvv">CVV</label>
                        <Input type="text" placeholder="123" id="cvv" />
                    </InputGroup>
                    <Button type="submit" full>Submit</Button>
                </form>
            </EntryCard>
        </EntryPage>
    );
}

export default Settings