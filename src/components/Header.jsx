import { useState } from 'react';
import Arrow from '/images/icon-arrow.svg';
import Swal from 'sweetalert2';


export const Header = ({ updateIpAddress }) => {
  const [ipAddress, setIpAddress] = useState("");
  const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

  const showAlert = () => {
    Swal.fire({
      title: 'Error!',
      text: 'Debes ingresar una dirección IP válida.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setIpAddress(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ipRegex.test(ipAddress)) {
      updateIpAddress(ipAddress);
      setIpAddress('');
    } else {
      showAlert();
    }
  };

  return (
    <div className="header w-screen h-[280px] flex flex-col items-center">
      <h1 className="font-rubik font-medium text-white text-[24px] md:text-[32px] py-[20px] text-center">IP address Tracker</h1>
      <div className="relative w-[90%] md:w-[40%] flex">
        <input
          type="text"
          className="w-full h-full p-4 text-base font-rubik text-dark-gray font-normal border border-transparent rounded-l-[15px] placeholder-base placeholder-opacity-75 focus:outline-none focus:ring focus:ring-indigo-400"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={handleInputChange}
        />
        <button type="button" className="submit-btn bg-black hover:bg-very-dark-gray rounded-r-[15px] p-[20px]" onClick={handleSubmit}>
          <img src={Arrow} alt="Ícono de Flecha" className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
