import React from 'react';
import { connect } from 'react-redux';

import Plate from 'client/components/Plate/Plate';
import { fetchFund, sendDonation } from 'client/actions';

import 'client/components/DonationForm/donation-form.css';


interface IDonationFormProps {
  onLoad: (fundId: number) => any;
  sendDonation: (fundId: number, email: string, sum: string) => any;
  funds: Array<any>;
  match: any;
  result: boolean;
}

interface IDonationFormState {
  donationSum: string;
  email: string;
  sumIsValid: boolean;
  emailIsValid: boolean;
}

const mapStateToProps = (state: any) => ({
  funds: state.funds,
  result: state.result,
  progress: state.progress
});

const mapDispatchToProps = (dispatch: any) => ({
  onLoad: (fundId: number) => dispatch(fetchFund(fundId)),
  sendDonation:
    (fundId: number, sum: string, email: string) => dispatch(sendDonation(fundId, parseInt(sum), email))
});

class DonationForm extends React.Component<IDonationFormProps, IDonationFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      donationSum: '',
      email: '',
      emailIsValid: true,
      sumIsValid: true
    };
  }

  componentDidMount() {
    const { fundId } = this.props.match.params;

    this.props.onLoad(fundId);
  }

  sendDonation(fundId: number) {
    if (!this.isValid()) {
      return;
    }

    const { donationSum, email } = this.state;

    this.props.sendDonation(fundId, donationSum, email);
  }

  isValid() {
    const { donationSum, email } = this.state;
    const { minDonation, maxDonation } = this.fund;
    const parsedSum = parseInt(donationSum);
    const parsedMin = parseInt(minDonation);
    const parsedMax = parseInt(maxDonation);
    const sumIsValid = parsedSum && parsedSum >= parsedMin && parsedSum <= parsedMax;
    const emailIsValid = email.length > 0;

    this.setState({
      emailIsValid,
      sumIsValid
    });

    return emailIsValid && sumIsValid;
  }

  renderForm() {
    const { minDonation: min, maxDonation: max, id } = this.fund;
    const { sumIsValid, emailIsValid } = this.state;

    return (
      <div className={'donation-form'}>
        <div className='donation-form__line'>
          <label htmlFor='donation-form__email'>Email:</label>
        <input
          value={this.state.email}
          id={'donation-form__email'}
          className={emailIsValid? '' : 'invalid'}
          onFocus={() => this.setState({ emailIsValid: true })}
          onChange={
            event => this.setState({ email: event.target.value })
          }
        />
        </div>
        <div className='donation-form__line'>
          <label htmlFor='donation-form__sum' >Сумма:</label>
          <input
            value={this.state.donationSum}
            id={'donation-form__sum'}
            className={sumIsValid ? '' : 'invalid'}
            onFocus={() => this.setState({ sumIsValid: true })}
            onChange={
              event => {
                this.setState({ donationSum: event.target.value })
              }
            }
          />
        </div>
        <div className='donation-form__range-wrapper'>
          <span>{min}</span>
          <input
            className={'donation-form__range'}
            type='range'
            min={min}
            max={max}
            value={this.state.donationSum}
            onChange={event => {
              this.setState({ donationSum: event.target.value });
            }}
          />
          <span>{max}</span>
        </div>
        <input
          type='button'
          className='donation-form__submit'
          value='Отправить'
          onClick={ this.sendDonation.bind(this, id) } />
      </div>
    );
  }

  get fund() {
    return this.props.funds[this.fundId];
  }

  get fundId() {
    return this.props.match.params.fundId;
  }

  render() {
    const { result } = this.props;

    if(result) {
      window.location.href = '/';
    }

    return (
      <Plate>
        {this.fund && this.renderForm()}
      </Plate>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonationForm);
