import { STRIPE_TOKEN } from "../payment/types";

function stripeReducer(state = null, action: any) {
  switch (action.type) {
    case STRIPE_TOKEN:
      return action.payload || null;
    default:
      return state;
  }
}

export default stripeReducer;
