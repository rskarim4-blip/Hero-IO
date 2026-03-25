import { useEffect, useState } from "react";
import AppContext from "./AppContextSepareted";






const ContextAppComponent = ({ children }) => {
    const [appData, setAppData] = useState([]);
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        fetch("/app.json")
            .then(res => res.json())
            .then(data => {
                setAppData(data)
                setSpinner(false)
            })
    }, [])



    const appInfo = {
        appData,
        spinner
    }


    return (
        <AppContext.Provider value={appInfo}>
            {children}
        </AppContext.Provider>
    );
};

export default ContextAppComponent;