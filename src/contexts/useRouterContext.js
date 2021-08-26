import {createContext, useContext, useEffect, useMemo, useState} from "react";

const initPath = 'home'

const RouterContext = createContext({
    path: initPath,
})

export function useRouter() {
    const router = useContext(RouterContext)

    if (!router) {
        console.log('useRouter must be used within a UserProvider');
    }

    return router;
}

export function RouterProvider(props) {
    const [path, setPath] = useState(initPath);
    const [history, setHistory] = useState([])


    function push(loc) {
        if (loc !== path) {
            setHistory((prevHistory) => [...prevHistory, path])
            setPath(loc)
        }
    }
    function back() {
        if (history.length) {
            const prevPath = history[history.length - 1]
            setHistory((prevHistory) => prevHistory.slice(0, -1))
            setPath(prevPath)
        }
    }

    const value = useMemo(() => {
        return {
            path,
            push,
            back
        };
    }, [path]);

    return <RouterContext.Provider value={value} {...props} />;
}