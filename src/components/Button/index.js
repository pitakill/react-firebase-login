// @flow
import * as React from 'react';

type ButtonProps = {
  label: string,
  onClick: Function
};

export default ({label, onClick}: ButtonProps): React.Element<*> => (
  <button {...{onClick}}>{label}</button>
);
