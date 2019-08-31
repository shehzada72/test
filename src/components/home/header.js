import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link><br/>
            <Link to={'/exercise'}>Exercise</Link><br/>
            <Link to={'/react-lifecycle'}>React LifeCycle</Link>
        </div>
    );
};

export default Header;