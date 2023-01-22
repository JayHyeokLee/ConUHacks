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
            <PageHeader>Start Saving Without Sacrificing your Lifestyle</PageHeader>
            <EntryCard>
                <h2>Pie Chart</h2>
            </EntryCard> 
            <EntryCard>
                <h2>Total Savings</h2>
                <textb>2000$</textb>
            </EntryCard>
            <div>
                <textb>HELLO</textb>    
            </div>        
        </EntryPage>
    );
}

export default HomePage