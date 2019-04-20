import React from 'react';

import 'client/components/plate/plate.css';

export default function (props: any) {
  return (<div className='plate'>{props.children}</div>);
}
