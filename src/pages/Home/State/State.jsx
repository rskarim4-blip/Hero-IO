
const State = () => {
    return (
         <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] lg:p-16 py-10 text-white">
                <h1 className="text-3xl font-bold text-center mb-10">Trusted by Millions, Built for You</h1>

                <div className="flex justify-center items-center">
                    <div className="stats stats-vertical md:stats-horizontal ">
                        <div className="stat space-y-2">
                            <div className="stat-title text-gray-400 text-center ">Total Downloads</div>
                            <div className="stat-value text-7xl">29.6M</div>
                            <div className="stat-desc text-gray-400 text-center">21% more than last month</div>
                        </div>

                        <div className="stat space-y-2">
                            <div className="stat-title text-gray-400 text-center">Total Reviews</div>
                            <div className="stat-value text-7xl">906K</div>
                            <div className="stat-desc text-gray-400 text-center">46% more than last month</div>
                        </div>

                        <div className="stat space-y-2">
                            <div className="stat-title text-gray-400 text-center">Active Apps</div>
                            <div className="stat-value text-7xl">132+</div>
                            <div className="stat-desc text-gray-400 text-center">31 more will Launch</div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default State;