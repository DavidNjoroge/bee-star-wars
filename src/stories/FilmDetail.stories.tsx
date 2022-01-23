import React from "react";
import { storiesOf } from '@storybook/react';
import {FilmDetailSection} from "../page/FilmDetailSection";

import styled, { keyframes } from 'styled-components';
import { slideInLeft } from 'react-animations';
import {exampleFilm} from "./mockData";

const bounceAnimation = keyframes`${slideInLeft}`;

const BouncyDiv: React.FC<any> = styled.div`
  animation: ${(props: any) => props.animationSeconds || 1}s ${bounceAnimation};
`;

storiesOf('Components/FilmDetail', module)
  .add('Default', () => (
    <FilmDetailSection selectedFilm={exampleFilm} />
  ))
  .add('Example Animations', () => (
    <div>
        <div>
            <BouncyDiv className="h3">Title: {'selectedFilm?.title'}</BouncyDiv>
            <BouncyDiv animationSeconds={1.5} className="blockquote-footer">Release date</BouncyDiv>
            <BouncyDiv animationSeconds={2}>description</BouncyDiv>
            <BouncyDiv className="p" animationSeconds={2.5}>Director</BouncyDiv>
            <BouncyDiv className="p" animationSeconds={3}>Producer</BouncyDiv>

        </div>
    </div>
  ))

