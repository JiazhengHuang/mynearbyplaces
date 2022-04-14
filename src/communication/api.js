let apiHost = "http://localhost:4002";

let getPlaces = () => {
    return fetch(apiHost + "/places").then((response) => response.json());
};

let addPlace = (place) => {
    return fetch(apiHost + "/place", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(place),
    });
};

let searchPlace = () => {
    return fetch(
        apiHost + "/search/:placeName?/:street?/:city?/:state?/:postalcode?"
    ).then((response) => response.json());
};

let api = {
    getPlaces: getPlaces,
    addPlace: addPlace,
    searchPlace: searchPlace,
};

export default api;
