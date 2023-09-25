import Arrow from '/images/icon-arrow.svg';

export const Header = () => {
  return (
    <div className="header w-screen  h-[280px] flex flex-col items-center">
      <h1 className="font-rubik font-medium text-white text-[32px] text-center">IP Address Tracker</h1>
      <div className="relative w-[80%] max-w-[29rem] flex">
        <input
          type="text"
          className="w-full h-full p-4 text-base font-rubik text-dark-gray font-normal border border-transparent rounded-l-[15px] placeholder-base placeholder-opacity-75 focus:outline-none focus:ring focus:ring-indigo-400"
          placeholder="Search for any IP address or domain"
        />
        <button type="submit" className="submit-btn bg-very-dark-gray rounded-r-[15px] p-[16px]">
          <img src={Arrow} alt="Arrow Icon" className="w-6 h-6" />
        </button>
      </div>

    </div>
  )
}
