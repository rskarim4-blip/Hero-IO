

import { FaDownload } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";


const TrandingApp = ({ app }) => {

    const { id, title, image, downloads, ratingAvg } = app;
    if (!app) {
        return <span>Loading...</span>
    }

    return (

        <Link to={`/appDetails/${id}`} className="flex flex-col bg-base-100 shadow-sm 
            rounded 
         transform transition-transform duration-700  hover:scale-103  hover:shadow-xl
        ">
            <figure className="p-3 text-center  w-1/2 mx-auto flex-1 ">
                <img
                    src={image}
                    alt={title}
                    className="rounded  " />
            </figure>
            <div className=" px-4 mb-5  ">
                <h2 className="text-xl font-bold">{title}</h2>
                <div className=" flex justify-between items-center mt-3">
                    <div className="badge badge-soft badge-success rounded"><FaDownload />
                        {new Intl.NumberFormat("en-us", { notation: "compact" }).format(downloads)}
                    </div>

                    <div className="badge badge-soft badge-warning rounded"> < IoStar /> {ratingAvg}</div>
                </div>
            </div>
        </Link>

    );
};

export default TrandingApp;