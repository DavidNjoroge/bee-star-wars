import { Meta } from "@storybook/react";
import React from "react";
import {FilmAutocomplete, FilmAutocompleteMenu} from "../components/FilmAutocomplete";
import { storiesOf } from '@storybook/react';

// export default {
//     component: FilmAutocomplete,
//     title: 'Components/FilmAutocomplete',
// } as Meta;

// export const DefaultFilmAutocompleteStory: React.FC = () => <FilmAutocomplete/>;
// export const DefaultFilmAutocompleteStory2: React.FC = () => (
//
// );


storiesOf('Components/Autocomplete', module)
  .add('Default', () => (
    <FilmAutocomplete />
  ))
  .add('Default Menu', () => (
    <FilmAutocompleteMenu />
  ))

