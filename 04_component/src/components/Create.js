import React, { useState } from 'react';

const Create = ({ onCreate}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = seuState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        onCreate(title, body);
        setTitle('');
        setBody('');
    };
    
}