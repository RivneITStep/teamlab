import React from 'react'
import './navbar.scss'
import {Link} from "react-router-dom";

const AdminItem = () =>{
    return(
        <li className="item">
            <Link to="/admin-page" className="link-nav">
                Admin
            </Link>
        </li>
    )
};

export default AdminItem;