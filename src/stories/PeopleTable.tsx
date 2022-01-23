import {examplePeopleTable} from "./mockData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const PeopleTable = () => {

    return (
        <div>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col" className="d-flex align-items-between">
                        <div>gender</div>

                        <div className="d-flex flex-column " style={{
                            marginLeft: 'auto'
                        }}>
                            <FontAwesomeIcon
                                onClick={() => {
                                    console.log('gender sort asc')
                                }}
                                color="blue"
                                icon={faChevronUp} />
                            <FontAwesomeIcon
                                onClick={() => {
                                    console.log('gender sort desc')
                                }}
                                icon={faChevronDown}
                            />
                        </div>
                    </th>
                    <th scope="col">homeworld</th>
                    <th scope="col">films</th>
                    <th scope="col">birth_year</th>
                </tr>
                </thead>
                <tbody>
                {
                    examplePeopleTable.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.gender}</td>
                            <td>{person.homeworld}</td>
                            <td>{person.films[0]}</td>
                            <td>{person.birth_year}</td>
                        </tr>
                    ))
                }

                </tbody>
            </table>
        </div>
    )
}
