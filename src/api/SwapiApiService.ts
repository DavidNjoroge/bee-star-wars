import BaseService from "./BaseService";
import {FilmResponseInterface} from "../interfaces/Film.interface";


class SwapiApiService extends BaseService{
    public constructor() {
        super()
    }

    getFilm() {
        return this.get(`/api/films/1/`)
    }

    searchFilms(searchName: string) {
        return this.get(`/api/films?search=${searchName}`)
    }
}

export default new SwapiApiService()


