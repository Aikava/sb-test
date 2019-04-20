import * as React from 'react';
import 'client/components/TileGroup/tile-group.css';
import { connect } from 'react-redux';
import { fetchFunds } from 'client/actions';
import Tile from 'client/components/Tile';

interface ITileGroupState {
}

interface ITileGroupProps {
  onLoad: () => null;
  funds: Array<any>;
}

const mapStateToProps = (state: any) => {
  return { funds: state.funds };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoad: () => dispatch(fetchFunds())
  }
};


class TileGroup extends React.Component<ITileGroupProps, ITileGroupState> {
  async componentDidMount() {
    if ( Object.values(this.props.funds).length < 2) {
      this.props.onLoad();
    }
  }

  fundsToTile() {
    return Object.values(this.props.funds).map(fund => <Tile key={fund.id} fund={fund} />)
  }

  render() {
    return (
      <div className='tile-group'>
        {this.fundsToTile()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TileGroup);
