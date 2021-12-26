import BaseService from "./BaseService";


class SwapiApiService extends BaseService{
    getFilm() {
        return this.get(`/api/films/1/`)
    }

}

export default new SwapiApiService()


