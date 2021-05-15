let apiHost = "https://jiazhenghuang-nearbyplaces-api.herokuapp.com";

let getPlaces = () => {
    return fetch(apiHost + "/places").then((response) => response.json());
};

let addPlace = () => {
    return fetch(apiHost + "/place", {
        method: "post",
        headers: {
            "Content-Type": "application/jaon",
        },
        body: JSON.stringify({}),
    });
};

let api = {
    getPlaces: getPlaces,
    addPlace: addPlace,
};

export default api;
