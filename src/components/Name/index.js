// @flow
import * as React from 'react';

type NameProps = {
  name?: string
};

export default ({name}: NameProps): React.Element<*> => <div>{name}</div>;
