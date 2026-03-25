import { Link } from "react-router";
import TrandingApp from "../TrandingApp/TrandingApp";
import Banner from "./Banner/Banner";
import State from "./State/State";
import { useContext } from "react";
import AppContext from "../../contextApp/AppContextSepareted";
import { Hourglass, Oval } from "react-loader-spinner";

const Home = () => {

    const { appData, spinner } = useContext(AppContext);
   

    // console.log(allApps)
    return (
        <div className="space-y-20 mb-5">
            <div>
                <Banner></Banner>
                <State></State>
                <div>
                    <div className="text-center py-10">
                        <h2 className="text-5xl  font-bold mb-2 mt-10">Trending Apps</h2>
                        <p className="text-gray-500">Discover the most popular apps trending now, curated to boost your productivity and fun.</p>
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
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 py-5 px-10">
                        {
                            appData.sort((p, c) => c.downloads - p.downloads).slice(0, 8).map(app => <TrandingApp key={app.id} app={app}></TrandingApp>)
                        }
                    </div>
                    {
                        !spinner && <div className="flex justify-center">
                            <Link to={'/apps'} target="true" className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"> Show All</Link>
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;