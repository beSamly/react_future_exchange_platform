import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginHelper from '../components/common/LoginHelper_m';

interface PropsType {
    path: string;
    exact: boolean;
    component: React.FC;
}

const ClientRoute = ({ path, component, exact }: PropsType) => {
    return (
        <Route exact={exact} path={path}>
            {component({})}
            <LoginHelper />
        </Route>
    );
};

export default ClientRoute;
