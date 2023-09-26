import { useState } from 'react';
import { Header } from './components/Header';
import { Map } from './components/Map';
import { Data } from './components/Data';
import { useFetchGeolocation } from './hooks/useFetchGeolocation';

export const Home = () => {
  const [ipAddress, setIpAddress] = useState('192.212.174.101');
  const { location, isLoading } = useFetchGeolocation(ipAddress);

  const updateIpAddress = (newIpAddress) => {
    setIpAddress(newIpAddress);
  };

  return (
    <div className="h-screen w-screen relative">
      <Header updateIpAddress={updateIpAddress} />
      <Map location={location} />
      <Data location={location} isLoading={isLoading} />
    </div>
  );
};
