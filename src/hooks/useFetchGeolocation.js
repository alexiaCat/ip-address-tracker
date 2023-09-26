import { useEffect, useState } from "react";
import { getGeolocation } from "../helpers/getGeolocation";

export const useFetchGeolocation = (ipAddress) => {
  const [location, setLocation] = useState({
    ip: '192.212.174.101',
    country_name: 'Brooklyn',
    city: 'NY',
    zipcode: '10001',
    timezone: '-05:00',
    isp: 'SpaceX Starlink',
    latitude: '34.05430',
    longitude: '-118.08212'
  });
  const [isLoading, setIsLoading] = useState(true);

  const loadLocation = async () => {
    const newLocation = await getGeolocation(ipAddress);
    setLocation(newLocation);
    setIsLoading(false);
  }

  useEffect(() => {
    loadLocation();
  }, [ipAddress]);

  return {
    location,
    isLoading: isLoading
  };
}
