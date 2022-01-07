import React from "react";
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp, faFilter} from "@fortawesome/free-solid-svg-icons";
import {Menu, MenuItem} from "@szhsin/react-menu";

export const SortableTable = () => {
    return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" className="d-flex align-items-end justify-content-betweenn">
                        <div>
                            First
                        </div>
                        <div className="d-flex flex-column " style={{
                            marginLeft: 'auto'
                        }}>
                            <FontAwesomeIcon color="blue" icon={faChevronUp} />
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>

                        <Menu menuButton={
                            <FontAwesomeIcon icon={faFilter} />
                        } transition>
                            <MenuItem>New File</MenuItem>
                            <MenuItem>Save</MenuItem>
                            <MenuItem>Close Window</MenuItem>
                        </Menu>


                    </th>
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
    )
}

storiesOf('Components/SortableTable', module)
  .add('Default', () => (
    <SortableTable />
  ))

