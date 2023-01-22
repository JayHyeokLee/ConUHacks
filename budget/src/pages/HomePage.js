import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard';
import InputGroup from '../components/InputGroup';
import Input from '../components/Input';
import Button from '../components/Button';

const HomePage = () => {
    return (
        <EntryPage>
            <Navbar />
            <PageHeader to="/">ENTER CARD INFORMATION HERE</PageHeader>
            <EntryCard>
                <h2>Pie Chart</h2>
            </EntryCard>           
        </EntryPage>
    );
}

export default HomePage