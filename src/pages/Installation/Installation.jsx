
import { FaDownload } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { getLSapp, handleRemoveFormLS } from "../../LocalStor/localStore";
import { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import ErrorApp from '../../assets/App-Error.png'
import { Link, useNavigate } from "react-router";
import AppContext from "../../contextApp/AppContextSepareted";
import { Oval } from "react-loader-spinner";

const Installation = () => {

    const { appData, spinner } = useContext(AppContext);

    const [sortApp, setSortApp] = useState()
    const storeLS = getLSapp()
    const apps = appData.filter(app => storeLS.includes(app.id))
    const [appsR, setAppsR] = useState(apps)

    const navigate = useNavigate()

    const handleUnistall = (id) => {
        const remainingAp = apps.filter(ap => ap.id !== id)
        setAppsR(remainingAp)
        handleRemoveFormLS(id)
    }
    const handleLowToHeigh = () => {
        const filtered = apps.sort((p, c) => p.downloads - c.downloads)
        setSortApp(filtered)
    }
    const handleHeighToLow = () => {
        const filtered = apps.sort((p, c) => c.downloads - p.downloads)
        setSortApp(filtered)
    }


    const appLS = !appsR ? appsR : apps
    const shorted = sortApp ? sortApp : appLS
    console.log(shorted)

    return (
        <div className="p-10 bg-gray-100">
            <div className="text-center py-10 max-w-3xl mx-auto">
                <h2 className="text-5xl  font-bold mb-5 mt-10">My Installed Apps</h2>
                <p className="text-gray-500">View all your installed apps in one place and manage them effortlessly. Also installed apps, ready to open, update, or manage anytime.</p>
            </div>
            <div className="md:flex justify-between items-center  space-y-5 text-center mb-5">
                <p className="text-2xl font-semibold">{appLS.length} Apps Found</p>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1 btn-outline">Sort By Size <IoMdArrowDropdown />
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={handleHeighToLow}>High-Low</a></li>
                        <li><a onClick={handleLowToHeigh}>Low-Heigh</a></li>
                    </ul>
                </div>
            </div>


            <div className="space-y-5">


                <div className="flex justify-center">
                    {
                        spinner && <span className=" my-10  ">
                            <Oval
                                visible={true}
                                height="80"
                                width="80"
                                color="#4fa94d"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        </span>
                    }
                </div>

                {shorted.length !== 0 || shorted.length < 0 ?
                    shorted.map(app => <div key={app?.id} className="bg-white rounded p-5 flex justify-between items-center ">
                        <div className="flex items-center gap-5">
                            <div className="bg-gray-100 p-2 rounded">
                                <img className="w-8 h-8" src={app?.image} alt="" />
                            </div>
                            <div>
                                <h2 className="text-xl">{app.title}</h2>
                                <div className="flex gap-3">
                                    <p className="flex items-center gap-1 text-green-400"><FaDownload /> <span>{new Intl.NumberFormat("en-us", { notation: "compact" }).format(app?.downloads)}</span></p>
                                    <p className="flex items-center gap-1 text-yellow-500">< IoStar /> <span>{app?.ratingAvg}</span></p>
                                    <p className="flex items-center gap-1 text-gray-500">{app?.size} MB</p>
                                </div>

                            </div>
                        </div>

                        <button onClick={() => handleUnistall(app?.id)} className="btn btn-success text-white">Unistall</button>
                    </div>)
                    : < div className=' p-5'>
                        <div className='flex  justify-center items-center'>
                            <img className='w-1/4' src={ErrorApp} alt="" />
                        </div>
                        <div className='text-center space-y-5'>
                            <h1 className='text-3xl font-bold'> No apps installed yet.</h1>
                            <p className='text-gray-400 font-semibold'>Install more apps</p>
                            <Link onClick={() => navigate(-1)} className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"> Go Back</Link>
                        </div>

                    </div>
                }

            </div>
            <ToastContainer />

        </div >
    );
};

export default Installation;