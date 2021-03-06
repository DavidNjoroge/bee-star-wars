import React, {useState} from "react";
import {Dropdown, FormControl} from "react-bootstrap";


export const DropdownAutocomplete = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }: any, ref: any) => (
      <div><a
        href=""
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
        &#x25bc;
      </a>

          <input
                type="email"
                className="form-control"
                id="sedfsd"
                // onChange={(e) => setSearchTerm(e.target.value)}
                aria-describedby="emailHelp"
                onMouseEnter={() =>
                    console.log('onMouseEnter')
            }
            />
      </div>

    ));

      const CustomMenu = React.forwardRef(
      ({ children, style, className, 'aria-labelledby': labeledBy }: any, ref: any) => {
        const [value, setValue] = useState('');

        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to filter..."
              onChange={(e: any) => setValue(e.target.value)}
              value={value}
            />
            <ul className="list-unstyled">
              {React.Children.toArray(children).filter(
                (child: any) =>
                  !value || child.props.children.toLowerCase().startsWith(value),
              )}
            </ul>
          </div>
        );
      },
    );




    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  Custom toggle
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Orange
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        </div>
    )
}