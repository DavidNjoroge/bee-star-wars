import React, {useEffect, useRef, useState} from "react";

interface FilmAutocompleteProps {
    delayDebounceTime?: number
    searchList: any[]
    onSearchChange: (text: string) => void
    onSelectedItem: (film: any) => void
}

export const FilmAutocomplete = ({delayDebounceTime = 300, onSearchChange, searchList, onSelectedItem}: FilmAutocompleteProps) => {

    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        onSearchChange(searchTerm)
    }, delayDebounceTime)

    return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])

    const selectFilm = (film: any) => {
        onSelectedItem(film)
    }

    return (
        <div
        style={{
            maxWidth: '280px'
        }}>
          <input
                type="text"
                className="form-control"
                id="sedfsdsdfg"
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-describedby="emailHelp"

            />
            {/*<div className="input-group mb-3">*/}
            {/*    <input type="text" className="form-control" placeholder="Recipient's username"*/}
            {/*           aria-label="Recipient's username" aria-describedby="basic-addon2"/>*/}
            {/*        <div className="input-group-append">*/}
            {/*            <span className="input-group-text" id="basic-addon2">@example.com</span>*/}
            {/*        </div>*/}
            {/*</div>*/}

            {
                searchList.length > 0 ? (

                    <ul className="list-group"
                        style={{position: 'absolute'}}>
                        {
                            searchList.map((searchFilm: any) => (

                                <li className="list-group-item">
                                    <button onClick={()=> selectFilm(searchFilm)}>
                                        {searchFilm.title}
                                    </button>
                                </li>
                            ))
                        }

                    </ul>
                ) : null

            }
            {/*<ul className="list-group"*/}
            {/*style={{position: 'absolute'}}>*/}
            {/*    {*/}
            {/*        searchedFilms.map((searchFilm: any) => (*/}
            {/*            <li className="list-group-item">{searchFilm.title}</li>*/}
            {/*        ))*/}
            {/*    }*/}

            {/*    <li className="list-group-item">A second item</li>*/}
            {/*    <li className="list-group-item">A third item</li>*/}
            {/*    <li className="list-group-item">A fourth item</li>*/}
            {/*    <li className="list-group-item">And a fifth one</li>*/}
            {/*</ul>*/}
        </div>
    )

}