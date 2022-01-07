import React from "react";
import { FilmAutocomplete } from "../components/FilmAutocomplete";
import { storiesOf } from '@storybook/react';
import {DropdownAutocomplete} from "../components/DropdownAutocomplete";


storiesOf('Components/Autocomplete', module)
  .add('Default Menu', () => (
    <FilmAutocomplete
        onSearchChange={(text) => console.log(text)}
        onSelectedItem={(selectedFilm) => console.log(selectedFilm)}
        searchList={[{title: 'title 1'}]} />
  ))
  .add('DropdownAutocomplete', () => (
    <DropdownAutocomplete />
  ))

