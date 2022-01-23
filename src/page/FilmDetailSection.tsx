import {FilmResponseInterface} from "../interfaces/Index.interface";


interface FilmDetailSectionProps {
    selectedFilm?: FilmResponseInterface
}

export const FilmDetailSection = ({selectedFilm}: FilmDetailSectionProps) => {
    return (
        <div style={{
            // backgroundImage: `url(${process.env.PUBLIC_URL +'/starwars_logo_1.jpg'})`,
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
            // color: 'white'
        }}>
            <h2>Title: {selectedFilm?.title}</h2>
            <footer className="blockquote-footer">Release date</footer>
            <p>description</p>
            <p>Director</p>
            <p>Producer</p>

            <table className="table" style={{
                // color: 'white'
            }}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
