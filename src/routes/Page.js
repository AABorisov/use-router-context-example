import React from 'react';
import Routes, {DefaultPage} from './routes'
import {useRouter} from "../contexts/useRouterContext";

const Page = () => {
    const { path } = useRouter()
    const Route = Routes[path] || DefaultPage
    return (
        <div>
            <Route />
        </div>
    );
};

export default Page;