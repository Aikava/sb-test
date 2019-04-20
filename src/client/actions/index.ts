export const FETCH_FUNDS =  'FETCH_FUNDS';
export const SEND_DONATION = 'SEND_DONATION';
export const DONATION_SENDED = 'DONATION_SENDED';
export const FUNDS_FETCHED = 'FUNDS_FETCHED';
export const FUND_FETCHED = 'FUND_FETCHED';

export function fetchFunds(from: number = 0, count: number = 10) {
  return async (dispatch: any, getState: any ) => {
    const request =  await fetch('/api/funds');
    const funds = await request.json();
    const { funds: oldFunds } = getState();
    const fundsById = {...oldFunds, ...funds };

    dispatch(fundsFetched(fundsById));
  };
}

export function fetchFund(id: number) {
  console.log(id);
  return async (dispatch: any, getState: any ) => {
    const { funds } = getState();
    let fund = funds[id];

    if (!fund) {
      const request =  await fetch(`/api/funds/${id}`);
      fund = await request.json();
    }

    dispatch(fundFetched(fund));
  };
}

export function sendDonation(fundId: number, sum: number, email: string) {
  return async (dispatch: any) => {
    const request = await fetch(`/api/funds/${fundId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({ email, donationSum: sum})
    });
    const result = await request.json();

    dispatch(donationSended(result.status));
  }
}

export function fundsFetched(funds: any) {
  return { type: FUNDS_FETCHED, funds };
}

export function donationSended(result: boolean) {
  return { type: DONATION_SENDED, result };
}

export function fundFetched(fund: any) {
  return { type: FUND_FETCHED, fund };
}
