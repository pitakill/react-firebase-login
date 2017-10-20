// @flow
import * as React from 'react';

type AuxProps = {
  children: Array<React.Element<*>>
};

export default ({children}: AuxProps): Array<React.Element<*>> => children;
