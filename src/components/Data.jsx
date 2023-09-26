export const Data = ({ location, isLoading }) => {
    if (isLoading) {
        return <div>Cargando...</div>;
    }
    return (
        <div className="flex flex-col md:flex-row  justify-around items-center py-5 px-4 absolute top-[150px] md:top-[220px] h-auto  md:h-[164px] w-[90%] md:w-[80%] bg-white rounded-[15px] shadow-xl left-1/2 transform -translate-x-1/2 z-10 font-rubik text-[18px] md:text-[24px] font-medium md:font-bold">
            <article className="md:text-left text-center mb-4 md:mb-0">
                <h2 className="text-dark-gray tracking-[2px] text-[10px] md:text-xs md:mb-2">IP ADDRESS</h2>
                <p className="text-very-dark-gray">{location.ip}</p>
            </article>
            <article className="md:border-l border-gray-400 md:pl-6 md:text-left text-center mb-4 md:mb-0">
                <h2 className="text-dark-gray tracking-[2px] text-[10px] md:text-xs md:mb-2">LOCATION</h2>
                <p className="text-very-dark-gray max-w-[250px]">
                    {location.country_name}, {location.city} {location.zipcode}
                </p>
            </article>
            <article className="md:border-l border-gray-400 md:pl-6 md:max-w-[200px] md:text-left text-center mb-4 md:mb-0">
                <h2 className="text-dark-gray tracking-[2px] text-[10px] md:text-xs md:mb-2">TIMEZONE</h2>
                <p className="text-very-dark-gray ">UTC{location.time_zoneoffset}</p>
            </article>
            <article className="md:border-l border-gray-400 md:pl-6 md:text-left text-center ">
                <h2 className="text-dark-gray tracking-[2px] text-[10px] md:text-xs md:mb-2">ISP</h2>
                <p className="text-very-dark-gray max-w-[300px]">{location.isp}</p>
            </article>
        </div>
    );
};
