import React from 'react'
import { Link } from "react-router-dom";
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const Registration = () => {
    return (
        <EntryPage>
            <PageHeader to="/">PLACE ANYTHING HERE</PageHeader>
            <EntryCard>
                <h2>Enter your monthly fixed income</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="monthly-income">Monthly Income</label>
                        <Input type="text" placeholder="Enter net income" id="monthly-income" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="housing">Housing</label>
                        <Input type="text" placeholder="Enter monthly housing cost" id="housing" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="utilities">Utilities</label>
                        <Input type="text" placeholder="Enter monthly utilities cost" id="utilities" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="insurance">Insurance</label>
                        <Input type="text" placeholder="Enter monthly insurance cost" id="insurance" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="recurring-bills">Recurring Bills</label>
                        <Input type="text" placeholder="Enter other monthly recurring payments" id="recurring-bills" />
                    </InputGroup>
                    <Button type="submit" full>Sign up</Button>
                </form>
            </EntryCard>
        </EntryPage>
    )
}

export default Registration