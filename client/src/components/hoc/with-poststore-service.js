import React from "react";
import {TeamlabstoreServiceConsumer} from "../store-service-context";

const withTeamlabstoreService = () => Wrapped => {
    return props => {
        return (
            <TeamlabstoreServiceConsumer>
                {teamlabstoreService => {

                    return <Wrapped {...props} teamlabstoreService={teamlabstoreService}/>;
                }}
            </TeamlabstoreServiceConsumer>
        );
    };
};

export default withTeamlabstoreService;