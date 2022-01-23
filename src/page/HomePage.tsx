import React, {useEffect, useState} from "react";
import SwapiApiService from "../api/SwapiApiService";
import {FilmDetailSection} from "./FilmDetailSection";
import {FilmAutocomplete} from "../components/FilmAutocomplete";
import { useSearchParams } from "react-router-dom";
import {FilmResponseInterface} from "../interfaces/Index.interface";
import {removeSwapiUrl} from "./utils";



export const HomePage = () => {
    const [films, setFilms] = useState<any>([])
    const [selectedFilm, setSelectedFilm] = useState<FilmResponseInterface>()
    let [searchParams, setSearchParams] = useSearchParams();

    let selectedFilmId = searchParams.get("selectedFilm");

    useEffect(() => {
        console.log('useEffect.selectedFilmId', selectedFilmId)
        if (selectedFilmId) {
            const parsedUrl = removeSwapiUrl(selectedFilmId)
            if (parsedUrl) {
                getFilmByUrl(parsedUrl)
            }
        }
    }, [selectedFilmId])

    const searchFilm = (searchText: string) => {
        SwapiApiService.searchFilms(searchText).then( (res: any) => {
            console.log('searchFilm', res)
            setFilms(res.results)
        })
    }

    const getFilmByUrl = (filmUrl: string) => {
        SwapiApiService.getFilmByUrl(filmUrl).then( (response: FilmResponseInterface) => {
            console.log('getFilmById', response)
            setSelectedFilm(response)
        })
    }

    const updateSelectedFilm = (selectedFilm: any) => {
        setSearchParams({ selectedFilm: selectedFilm.url });
    }

    return (
        <div>
            <div className="d-flex justify-content-between">
                                {/*<h4> Selected Film: {selectedFilm?.title}</h4>*/}
                <div></div>
                <div style={{
                    position: 'relative',
                    maxWidth: '280px'
                }}>
                    <FilmAutocomplete
                        onSearchChange={(text) => searchFilm(text)}
                        searchList={films}
                        onSelectedItem={(selectedFilm) => updateSelectedFilm(selectedFilm)}
                    />
                </div>

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

                <FilmDetailSection selectedFilm={selectedFilm} />
            </div>

        </div>
    )
}