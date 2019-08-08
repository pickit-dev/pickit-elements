import React from 'react';

import { Button } from "../elements/Button";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number, select, radios } from '@storybook/addon-knobs';

const story = storiesOf('Button', module);

story.addDecorator(withKnobs);

story.add('with text', () => {
  const defaultKnobs = {
    onClick: action("clicked"),
    loading: boolean("Loading", false),
    disabled: boolean("Disabled", false),
    size: radios("Size", { 
      None: "",
      Small: "small",
      Large: "large",
      "Full width": "fullWidth"
    }, "primary")
  }
  const defaultLabel = text("Label", "Button text");
 return <>
    <div style={{ padding: 20 }}>
      <Button {...defaultKnobs}>{defaultLabel}</Button>
      <Button {...defaultKnobs} color="primary" variant="outlined">{defaultLabel}</Button>
    </div>
    <div style={{ padding: 20 }}>
      <Button {...defaultKnobs} variant="contained">{defaultLabel}</Button>
      <Button {...defaultKnobs} color="primary" variant="contained">{defaultLabel}</Button>
    </div>
    <div style={{ padding: 20 }}>
      <Button {...defaultKnobs} variant="link">{defaultLabel}</Button>
      <Button {...defaultKnobs} color="primary" variant="link">{defaultLabel}</Button>
    </div>
    <div style={{ padding: 20 }}>
      <Button {...defaultKnobs} color="primary" variant="contained" 
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.34 28"><path fill="#FFF" fill-rule="evenodd" d="M16.74 6.44A14.73 14.73 0 0 0 10.18.57a14.24 14.24 0 0 1 17 7.81 13.59 13.59 0 0 1-3.26 5.12 13.87 13.87 0 0 1-6.21 3.5c.11-.1 3.29-3.11-.97-10.56zM11.6 21.56a14.73 14.73 0 0 0 6.56 5.87 14.23 14.23 0 0 1-17-7.81 13.69 13.69 0 0 1 3.29-5.12 13.92 13.92 0 0 1 6.18-3.5c-.1.1-3.31 3.11.97 10.56zm-5.08-10.1a14.77 14.77 0 0 0-5.95 6.48A13.85 13.85 0 0 1 0 14 14 14 0 0 1 8.48 1.18a13.77 13.77 0 0 1 5.18 3.22 13.56 13.56 0 0 1 3.57 6.1c-.13-.1-3.17-3.27-10.71.96zm15.3 5.08a14.72 14.72 0 0 0 5.95-6.48 13.85 13.85 0 0 1 .57 3.94 14 14 0 0 1-8.47 12.82 13.81 13.81 0 0 1-5.19-3.22 13.54 13.54 0 0 1-3.56-6.1c.12.1 3.17 3.27 10.7-.96z"/></svg>}
      >{defaultLabel}</Button>
      <Button {...defaultKnobs} variant="link" color="primary"
        icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.34 28"><path fill="#FF0091" fill-rule="evenodd" d="M16.74 6.44A14.73 14.73 0 0 0 10.18.57a14.24 14.24 0 0 1 17 7.81 13.59 13.59 0 0 1-3.26 5.12 13.87 13.87 0 0 1-6.21 3.5c.11-.1 3.29-3.11-.97-10.56zM11.6 21.56a14.73 14.73 0 0 0 6.56 5.87 14.23 14.23 0 0 1-17-7.81 13.69 13.69 0 0 1 3.29-5.12 13.92 13.92 0 0 1 6.18-3.5c-.1.1-3.31 3.11.97 10.56zm-5.08-10.1a14.77 14.77 0 0 0-5.95 6.48A13.85 13.85 0 0 1 0 14 14 14 0 0 1 8.48 1.18a13.77 13.77 0 0 1 5.18 3.22 13.56 13.56 0 0 1 3.57 6.1c-.13-.1-3.17-3.27-10.71.96zm15.3 5.08a14.72 14.72 0 0 0 5.95-6.48 13.85 13.85 0 0 1 .57 3.94 14 14 0 0 1-8.47 12.82 13.81 13.81 0 0 1-5.19-3.22 13.54 13.54 0 0 1-3.56-6.1c.12.1 3.17 3.27 10.7-.96z"/></svg>}
      >{defaultLabel}</Button>
    </div>
    <div style={{ padding: 20 }}>
      <Button {...defaultKnobs} fullWidth={true}>{defaultLabel}</Button>
      <Button {...defaultKnobs} fullWidth={true} color="primary" variant="contained">{defaultLabel}</Button>
    </div>
  </>
});