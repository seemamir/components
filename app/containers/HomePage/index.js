import React from 'react';
import Igactivity from '../../components/Igactivity'
import IgHashtag from '../../components/Ighashtag'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>

        <Igactivity/>,
        <IgHashtag/>
      </div>
    );
  }
}
