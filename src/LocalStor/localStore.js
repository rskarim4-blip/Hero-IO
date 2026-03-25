import { toast } from "react-toastify";


const getLSapp = () => {
    const appStoredApp = localStorage.getItem("apps");
    if (appStoredApp) {
        return JSON.parse(appStoredApp)
    }
    return []
}

const saveAppLS = (id) => {
    const appStoredApp = getLSapp();
    const isExgist = appStoredApp.includes(id);
    console.log(isExgist)
    if (!isExgist) {
        appStoredApp.push(id)
        localStorage.setItem("apps", JSON.stringify(appStoredApp))
        toast.success("Successfully Installed this app")
    }
    // else {
    //     alert("Already add this app")
    // }
}

const handleRemoveFormLS = (id) => {
    const storedAppLS = getLSapp()
    const remainingApp = storedAppLS.filter(a => a !== parseInt(id))
    localStorage.setItem("apps", JSON.stringify(remainingApp))
    toast.info("Uninstalled this app")
}

export { saveAppLS, getLSapp, handleRemoveFormLS }