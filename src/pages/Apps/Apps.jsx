import { Suspense, useContext, useState } from "react";
import AppDetails from "./AppDetails";
import { FaDownload } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router";
import ErrorApp from '../../assets/App-Error.png'
import AppContext from "../../contextApp/AppContextSepareted";
import { Oval } from "react-loader-spinner";

const Apps = () => {
    const { appData, spinner } = useContext(AppContext);

    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    const filterdApp = appData.filter(app => (app.title + app.companyName).toLowerCase().split('').join('').trim().includes(search.toLowerCase().trim()))



    console.log(filterdApp.length)
    return (
        <div className="px-10 mb-5">
            <div className="text-center py-10 max-w-3xl mx-auto">
                <h2 className="text-5xl  font-bold mb-5 mt-10">All Apps</h2>
                <p className="text-gray-500">All your apps, now in one place. All apps in our section are neatly organized and instantly ready to use. From work to fun, manage and launch your favorites with ease.</p>
            </div>
            <div className="md:flex justify-between items-center px-3 space-y-5 text-center mb-5">
                <p className="text-2xl font-semibold">({filterdApp.length}) Apps Found</p>
                <label className="input">
                    <Search className="text-gray-600" />
                    <input onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search by title or 'chat', 'video', 'streaming' " />
                </label>
            </div>

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

            {
                !filterdApp.length <= 0 ?

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-3">

                        {
                            filterdApp.map(app => <Link key={app?.id} to={`/appDetails/${app.id}`}>
                                <div className=" bg-base-100 shadow-sm rounded flex flex-col h-full
             transform transition-transform duration-700  hover:scale-103  hover:shadow-xl
            ">
                                    <figure className="p-3 text-center  w-1/2 mx-auto flex-1 ">
                                        <img
                                            src={app.image}
                                            alt={app.title}
                                            className="rounded   " />
                                    </figure>
                                    <div className=" px-4 mb-5 flex-1">
                                        <h2 className="text-xl font-bold">{app.title}</h2>
                                        <div className=" flex justify-between items-center mt-3">
                                            <div className="badge badge-soft badge-success rounded"><FaDownload />
                                                {new Intl.NumberFormat("en-us", { notation: "compact" }).format(app?.downloads)}
                                            </div>

                                            <div className="badge badge-soft badge-warning rounded"> < IoStar /> {app.ratingAvg}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>)
                        }
                    </div> :
                    < div className=' p-20'>
                        <div className='flex  justify-center items-center'>
                            <img className='w-1/4' src={ErrorApp} alt="" />
                        </div>
                        <div className='text-center space-y-5'>
                            <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
                            <p className='text-gray-400 font-semibold'>The App you are requesting is not found on our system.  please try another apps</p>
                            <Link onClick={() => navigate(window.location.reload())} className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"> Go Back</Link>
                        </div>

                    </div>
            }
        </div>
    );
};

export default Apps;