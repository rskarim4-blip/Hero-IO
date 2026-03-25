import { Link, useParams } from "react-router";
import useDataLoadHooks from "../../Hooks/useDataLoadHooks";
import { IoStar } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { Bar, CartesianGrid, ComposedChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getLSapp, saveAppLS } from "../../LocalStor/localStore";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../contextApp/AppContextSepareted";
import { Oval } from "react-loader-spinner";

const AppDetails = () => {

    const [installed, setInstalled] = useState(false)

    const { appData, spinner } = useContext(AppContext);
    const { Id } = useParams()
    const app = appData?.find(a => a.id === parseInt(Id));
    const barData = app?.ratings;



    useEffect(() => {
        const storedAppLS = getLSapp();
        const isExgist = storedAppLS.includes(Number(Id))
        setInstalled(isExgist)

    }, [Id])

    if (!app) {
        return <span>Loading...</span>
    }
    const handleInstall = (id) => {
        saveAppLS(id)
        setInstalled(true)
    }




    return (
        <div className="bg-gray-100 p-10">

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

            <div className="w-full  h-auto   md:flex items-center gap-6 ">


                <div className="flex w-96 items-center justify-center shadow rounded bg-white p-5 md:mb-0 mb-5 ">
                    <img src={app?.image} alt={app?.title} className="lg:w-1/2 md:w-2/3 w-3/4 object-cover" />
                </div>

                <div className="flex-1">
                    <div className="mb-7">
                        <h2 className="text-3xl font-bold text-gray-800">{app?.title} </h2>
                        <p className="text-sm text-gray-500">Developed by{" "}<span className="text-blue-600 font-medium">{app?.companyName}</span> </p>
                    </div>

                    <hr className="text-gray-300" />
                    <div className="flex items-center gap-10 mt-4">

                        <div className="flex flex-col items-center">
                            <span className="text-green-600 text-xl"><FaDownload /></span>
                            <p className=" text-gray-500">Downloads</p>
                            <p className="font-bold text-2xl"> {new Intl.NumberFormat("en-us", { notation: "compact" }).format(app?.downloads)}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-orange-500 text-xl">< IoStar /></span>
                            <p className="text-xs text-gray-500">Average Ratings</p>
                            <p className="font-bold text-2xl">{app?.ratingAvg}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-purple-600 text-xl">💬</span>
                            <p className="text-xs text-gray-500">Total Reviews</p>
                            <p className="font-bold text-2xl"> {new Intl.NumberFormat("en-us", { notation: "compact" }).format(app?.reviews)}</p>
                        </div>

                    </div>


                    <Link>
                        <button onClick={() => handleInstall(app?.id)} className={`
                ${installed ? "disabled cursor-no-drop " : ""}
                            mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium`}>
                            {installed ? `Installed` : `Install Now (${app?.size} MB)`}
                        </button>
                    </Link>

                </div>
            </div>
            <hr className="text-gray-300 my-5" />
            <div className="m-8" >
                <p className="text-xl font-semibold">Rating</p>
                <ResponsiveContainer width={"100%"} height={400} style={{ paddingLeft: "5px", width: '100%', aspectRatio: 2.8 }}>
                    <ComposedChart
                        data={barData} // reverse the order
                        layout="vertical"
                        margin={{ top: 10, right: 20, bottom: 20, left: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis type="count" tickFormatter={(v) => new Intl.NumberFormat("en-us", { notation: "compact" }).format(parseInt(v))} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            width={40}
                            tick={{ fontSize: 15 }}
                            reversed


                        />
                        <Tooltip />
                        <Bar dataKey="count" barSize={20} fill="#FF8EA1" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <hr className="text-gray-300 my-5" />
            <div>
                <p className=" font-semibold text-gray-600 "> Description:</p>
                <div className="space-y-7">
                    <p className="text-gray-500">{app?.description}  {app?.descrip_1}</p>
                    <p className="text-gray-500"> {app?.descrip_2} {app?.description} </p>
                    <p className="text-gray-500"> {app?.descrip_3} {app?.description}</p>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default AppDetails;