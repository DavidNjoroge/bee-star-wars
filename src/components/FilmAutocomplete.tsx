import React from "react";
import {Menu, MenuItem, SubMenu} from "@szhsin/react-menu";


export const FilmAutocomplete = () => {
    return (
        <div
        style={{

        }}>
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

export const FilmAutocompleteMenu = () => {
    return (
        <div
        style={{
            maxWidth: '280px'
        }}>
               <Menu menuButton={
                   // <MenuButton>Open menu</MenuButton>
                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               }>
                  <MenuItem>New File</MenuItem>
                  <MenuItem>Save</MenuItem>
                  <SubMenu label="Edit">
                    <MenuItem>Cut</MenuItem>
                    <MenuItem>Copy</MenuItem>
                    <MenuItem>Paste</MenuItem>
                  </SubMenu>
                  <MenuItem>Print...</MenuItem>
                </Menu>
        </div>
    )

}