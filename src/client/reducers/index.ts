import {
  DONATION_SENDED,
  FETCH_FUNDS,
  FUND_FETCHED,
  FUNDS_FETCHED,
  SEND_DONATION
} from 'client/actions';

interface IFund {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  minDonation: number;
  maxDonation: number;
}

interface IStore {
  funds: {
    [key: string]: Partial<IFund>;
  };
  selectedFund: number;
  formResult: boolean;
}

const initialState: IStore = {
  funds: {},
  selectedFund: 0,
  formResult: false
};

export const reducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    case SEND_DONATION:
      return { ...state, progress: true, result: null };
    case DONATION_SENDED:
      return { ...state, result: action.result, progress: false };
    case FETCH_FUNDS:
      return { ...state, progress: true, funds: action.funds || {} };
    case FUNDS_FETCHED:
      return { ...state, funds: action.funds || {} };
    case FUND_FETCHED:
      const { fund } = action;
      return {
        ...state,
        progress: false,
        funds: { ...state.funds, [fund.id]: fund }
      };
    default:
      return initialState;
  }
};

