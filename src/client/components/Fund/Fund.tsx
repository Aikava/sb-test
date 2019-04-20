import React from 'react';
import Plate from 'client/components/Plate/Plate';
import { connect } from 'react-redux';
import { fetchFund } from 'client/actions';

import 'client/components/Fund/fund.css';
import { Link } from 'react-router-dom';

interface IFundProps {
  fund: any;
  funds: { [key: number]: any};
  onLoad: (fundId: number) => null;
  match: any;
}

const mapStateToProps = ((state: any) => ({
  funds: state.funds
}));
const mapDispatchToProps = (dispatch: any) => ({
  onLoad: (fundId: number) => dispatch(fetchFund(fundId))
});

class Fund extends React.Component<IFundProps> {
  componentDidMount() {
    const { fundId } = this.props.match.params;
    this.props.onLoad(fundId);
  }

  renderFund(fund: any) {
    const { name, imageUrl, description, id } = fund;

    return (
      <React.Fragment>
      <header className={'fund__header'}>
        <img className={'fund__header-image'} src={imageUrl} />
        <div className={'fund__title'}>{name}</div>
      </header>
        <article className={'fund__article'}>{description}</article>
        <Link className='fund__goto-donation' to={`/donation/${id}`}>Внести</Link>
      </React.Fragment>
    );
  }

  render() {
    const { fundId } = this.props.match.params;
    const fund = this.props.funds[fundId];

    return (
      <Plate>
        {fund && this.renderFund(fund)}
      </Plate>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fund)
