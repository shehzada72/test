import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    const [value, setValue] = useState({
        name: 'React hooks'
    });

    const handleChange = e => {
        setValue({name: e.target.value})
    };

    return (
        <div>
            <h1>Value of state: {value.name}</h1>
            <input value={value.name} onChange={handleChange}/>
            <Link to={'/'}>Home</Link><br/>
            <Link to={'/exercise'}>Exercise</Link><br/>
            <Link to={'/react-lifecycle'}>React LifeCycle</Link>
        </div>
    );
};

export default Header;