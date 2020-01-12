import React from 'react'
import {defaultMenuItems} from "../../../../utils/defaulteConstants";
import './navbar.scss'
import {Link} from "react-router-dom";

const DefaultItemList = () => {
    return defaultMenuItems.map(item => {
        return (
            <li className="item">
                <Link to={item.path} className="link-nav">
                    {item.title}
                </Link>
            </li>
        )
    })
};

export default DefaultItemList;