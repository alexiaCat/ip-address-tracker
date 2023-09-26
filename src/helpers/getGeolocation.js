export const getGeolocation = async (ipAddress) => {
    try {
        const apiKey = "b347481af26f4315a2add70cd8af0031";
        const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipAddress}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`La solicitud no tuvo éxito (código ${response.status})`);
        }

        const data = await response.json();

        const {
            ip,
            time_zone: { offset: time_zoneoffset },
            country_name,
            city,
            zipcode,
            isp,
            latitude,
            longitude
        } = data;

        const location = {
            ip,
            time_zoneoffset,
            country_name,
            city,
            zipcode,
            isp,
            latitude,
            longitude
        };

        return location;
    } catch (error) {
        console.error("Error al obtener la geolocalización:", error);
        return null;
    }
};
