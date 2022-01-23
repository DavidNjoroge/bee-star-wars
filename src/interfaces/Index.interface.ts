

export interface IndexInterface {

}

export interface FilmResponseInterface {
    characters: string[]
    created: string
    director: string
    edited: string
    episode_id: number
    url: string
    opening_crawl: string
    planets: string[]
    producer: string
    release_date: string
    species: string[]
    starships: string[]
    title: string
    vehicles: string[]
}


export interface PeopleInterface {
    birth_year: string
    eye_color: string
    films: string[]
    gender: string
    hair_color: string
    height: string
    homeworld: string
    mass: string
    name: string
    skin_color: string
    created: string
    edited: string
    species: string[]
    starships: string[]
    url: string
    vehicles: string[]
}

// {
//     "birth_year": "19 BBY",
//     "eye_color": "Blue",
//     "films": [
//         "https://swapi.dev/api/films/1/",
//         ...
//     ],
//     "gender": "Male",
//     "hair_color": "Blond",
//     "height": "172",
//     "homeworld": "https://swapi.dev/api/planets/1/",
//     "mass": "77",
//     "name": "Luke Skywalker",
//     "skin_color": "Fair",
//     "created": "2014-12-09T13:50:51.644000Z",
//     "edited": "2014-12-10T13:52:43.172000Z",
//     "species": [
//         "https://swapi.dev/api/species/1/"
//     ],
//     "starships": [
//         "https://swapi.dev/api/starships/12/",
//         ...
//     ],
//     "url": "https://swapi.dev/api/people/1/",
//     "vehicles": [
//         "https://swapi.dev/api/vehicles/14/"
//         ...
//     ]
// }


