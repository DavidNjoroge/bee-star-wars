

import {examplePeopleTable} from "./mockData";
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
                            Name
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
                {
                    examplePeopleTable.map((person) => (
                        <tr>
                            <th scope="row">1</th>
                            <td>{person.name}</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
    )
}


