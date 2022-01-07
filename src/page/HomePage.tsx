import React, {useState} from "react";
import SwapiApiService from "../api/SwapiApiService";
import {FilmDetailSection} from "./FilmDetailSection";
import {FilmAutocomplete} from "../components/FilmAutocomplete";


export const HomePage = () => {
    const [films, setFilms] = useState<any>([])

    const searchFilm = (searchText: string) => {
        SwapiApiService.searchFilms(searchText).then( (res: any) => {
            console.log('res', res)
            setFilms(res.data.results)
        })
    }

    const updateParam = (searchText: string) => {
        console.log('updateParam', searchText)
    }

    const updateSelectedFilm = (selectedFilm: any) => {
        console.log('selectedFilm', selectedFilm)
    }

    return (
        <div>
            <div className="d-flex">
                <div style={{
                    position: 'relative',
                    maxWidth: '280px'
                }}>
                    {/*<FilmAutocompleteMenu />*/}
                    <FilmAutocomplete
                        onSearchChange={(text) => searchFilm(text)}
                        searchList={films}
                        onSelectedItem={(selectedFilm) => updateSelectedFilm(selectedFilm)}
                    />
                </div>
                {/*<h4> Selected Film: {film?.title}</h4>*/}

            </div>
            <div>
                {/*<div style={{*/}
                {/*    height: '90vh',*/}
                {/*    backgroundImage: `url(${process.env.PUBLIC_URL +'/starwars_logo_1.jpg'})`,*/}
                {/*    backgroundSize: 'contain',*/}
                {/*    backgroundRepeat: 'no-repeat',*/}
                {/*    backgroundPosition: 'center'*/}
                {/*}}>*/}
                {/*</div>*/}
                <FilmDetailSection />
            </div>

        </div>
    )
}