import React from "react";
import {Menu, MenuButton, MenuItem, SubMenu} from "@szhsin/react-menu";


export const FilmAutocomplete = () => {
    return (
        <div
        style={{
            maxWidth: '280px'
        }}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <ul className="list-group">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
                </ul>
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