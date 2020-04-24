import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const [userName, setUserName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();  
        const resp = await axios.get(`https://api.github.com/users/${userName}`);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        props.addUser(resp.data);
        setUserName('');
    }

    const handleChange = (e) => {
        setUserName(e.target.value);
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={userName}
                placeholder="GitHub username"
                onChange={handleChange}
                required
            />
            <button>Add card</button>
        </form>
    );
}
 
export default Form;