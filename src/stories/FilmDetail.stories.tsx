import React from "react";
import { storiesOf } from '@storybook/react';
import {FilmDetailSection} from "../page/FilmDetailSection";

storiesOf('Components/FilmDetail', module)
  .add('Default', () => (
    <FilmDetailSection />
  ))

