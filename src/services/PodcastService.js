import httpCommos from "../utils/http-commos";

const getAll = async () => {
    const res = await httpCommos.get("/podcasts");
    return res.data;
}

const get = id => {
    return httpCommos.get(`/podcasts/${id}`);
}

const PodcastDataService = {
    getAll,
    get
};

export default PodcastDataService;