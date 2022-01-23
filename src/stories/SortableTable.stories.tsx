import React from "react";
import { storiesOf } from '@storybook/react';

import {SortableTable} from "./ExampleSortableTable";
import {PeopleTable} from "./PeopleTable";

storiesOf('Components/SortableTable', module)
  .add('Default', () => (
    <SortableTable />
  ))
    .add('People Table', () => (
        <PeopleTable />
    ))

