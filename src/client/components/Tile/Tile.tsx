import * as React from 'react';
import { Link } from 'react-router-dom';
import 'client/components/Tile/tile.css';

export interface ITileProps {
  fund: any;
}

export default class Tile extends React.Component<ITileProps> {
  render() {
    const { name, description, imageUrl, id } = this.props.fund;

    return (
      <Link className='tile' to={`/fund/${id}`}>
        <img className='tile__image' src={imageUrl} alt='fund alternate image'/>
        <div className='tile__overtext'></div>
        <div className='tile__content-wrapper'>
          <div className='tile__title'>{name}</div>
          <div className='tile__description'>{description}</div>
        </div>
      </Link>
    );
  }
}
