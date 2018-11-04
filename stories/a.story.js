import React from 'react';
import ReactResponsiveSelect from '../src/ReactResponsiveSelect';

import { storiesOf } from '@storybook/react';

import { CaretIcon } from './story-components/CaretIcon';
import '../dist/ReactResponsiveSelect.css';

storiesOf('Examples', module).add('Single-select basic', () => (
  <div style={{ display: 'flex' }}>
    <ReactResponsiveSelect
      name="carType1"
      options={[
        { value: 'null', text: 'Any' },
        { value: 'alfa-romeo', text: 'Alfa Romeo' },
        { value: 'bmw', text: 'BMW' },
        { value: 'fiat', text: 'Fiat' },
        { value: 'subaru', text: 'Subaru' },
        { value: 'suzuki', text: 'Suzuki' },
        { value: 'tesla', text: 'Tesla' },
        { value: 'volvo', text: 'Volvo' },
        { value: 'zonda', text: 'Zonda' },
      ]}
      caretIcon={<CaretIcon />}
      prefix="Car1: "
      selectedValue="subaru"
      onSubmit={() => {}}
      onChange={() => {}}
    />
    <ReactResponsiveSelect
      name="carType2"
      options={[
        {
          value: 'null',
          text: 'Any',
          markup: <span>Any</span>,
        },
        {
          value: 'bmw',
          text: 'BMW',
          markup: (
            <span>
              <span className="badge" aria-hidden="true">
                B
              </span>{' '}
              BMW
            </span>
          ),
        },
        {
          value: 'fiat',
          text: 'Fiat',
          markup: (
            <span>
              <span className="badge" aria-hidden="true">
                F
              </span>{' '}
              Fiat
            </span>
          ),
        },
        {
          value: 'subaru',
          text: 'Subaru',
          markup: (
            <span>
              <span className="badge" aria-hidden="true">
                S
              </span>{' '}
              Subaru
            </span>
          ),
        },
        {
          value: 'tesla',
          text: 'Tesla',
          markup: (
            <span>
              <span className="badge" aria-hidden="true">
                T
              </span>{' '}
              Tesla
            </span>
          ),
        },
      ]}
      caretIcon={<CaretIcon />}
      prefix="Car2: "
      selectedValue="tesla"
      onChange={() => {}}
      onSubmit={() => {}}
    />
  </div>
));
