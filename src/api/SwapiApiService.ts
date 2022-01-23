import BaseService from "./BaseService";


class SwapiApiService extends BaseService{
    public constructor() {
        super()
    }

    getFilm() {
        return this.get(`/api/films/1/`)
    }

    getFilmByUrl(filmUrl: string) {
        return this.get(filmUrl)
    }

    searchFilms(searchName: string) {
        return this.get(`/api/films?search=${searchName}`)
    }
}

export default new SwapiApiService()


