import React, {Fragment} from "react";
import "./navbar.scss";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import DefaultItemList from "./default-item-list";
import AdminItem from "./admin-item";
import {userRoles} from "../../../../utils/defaulteConstants";

const NavBar = ({user}) => {
    const role = user ? user.role : null;
    return (
        <Fragment>
            <div className="header-bottom-right col-9">
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler"/>
                    <div className="hamburger">
                        <div></div>
                    </div>
                    <div className="menu">
                        <div>
                            <ul>
                                <DefaultItemList/>
                                {role === userRoles.admin ? <AdminItem/> : null}
                            </ul>
                        </div>
                    </div>
                </div>

                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <DefaultItemList/>
                        {role === userRoles.admin ? <AdminItem/> : null}
                    </ul>
                </nav>
            </div>
        </Fragment>
    );
};

const mapStateToProps = ({auth: {user}}) => ({
    user
});

export default connect(mapStateToProps)(NavBar);
