const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "account/createCustomer":
      return { ...state, ...action.payload };
    case "account/updateCustomer":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

// store.dispatch({ type: "account/deposit", payload: 100 });

export function createCustomer(fullName, nationalId) {
  return {
    type: "account/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
export function updateName(fullName) {
  return {
    type: "account/updateCustomer",
    payload: { fullName },
  };
}
