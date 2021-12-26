import React, {useEffect} from "react";
import SwapiApiService from "./api/SwapiApiService";


export const HomePage = () => {

    useEffect(() => {
        SwapiApiService.getFilm().then( (res: any) => {
            console.log('res', res)
        })

    }, [])
    return (
        <div>
            <div className="d-flex">
                <div style={{
                    position: 'relative',
                    maxWidth: '280px'
                }}>
                    <input className="form-control" placeholder="search film" />
                    <div  style={{
                        position: 'absolute'
                    }}>

                        <table className="table"
                        style={{
                            border: '1px solid #ced4da',
                            background: 'white'
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
                </div>
                <h4> Selected Film</h4>

            </div>
            <div>
                <div style={{
                    height: '90vh',
                    backgroundImage: `url(${process.env.PUBLIC_URL +'/starwars_logo_1.jpg'})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}>
                </div>
            </div>

        </div>
    )
}