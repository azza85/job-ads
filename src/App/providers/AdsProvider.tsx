import React from "react";
const AdsContext = React.createContext();

interface MyAction {
  type: string;
  value: string;
}

const companies = {
  default: {
    label: "Default",
    value: "default"
  },
  secondBite: {
    label: "SecondBite",
    value: "secondBite"
  },
  axilCoffeeRoasters: {
    label: "Axil Coffee Roasters",
    value: "axilCoffeeRoasters"
  },
  myer: {
    label: "Myer",
    value: "myer"
  }
}
const initialState = {
  companies,
  jobs:Object.keys(companies).reduce(
    (obj, item) => ({
      ...obj,
      [item]: {}
    }),
    {}
  ),
  user: null
};

function adsReducer(state: object, action: MyAction) {
  switch (action.type) {
    case "LOG_IN": {
      return {
        ...state,
        user:
          initialState.companies[action.value] !== undefined
            ? initialState.companies[action.value]
            : null
      };
    }

    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function AdsProvider(props) {
  const [state, dispatch] = React.useReducer(adsReducer, initialState);

  const value = React.useMemo(() => [state, dispatch], [state]);

  console.log(state);
  return <AdsContext.Provider value={value} {...props} />;
}

function useAds() {
  const context = React.useContext(AdsContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const login = (value: string) =>
    dispatch({
      type: "LOG_IN",
      value
    });
  return {
    state,
    login
  };
}

export { AdsProvider, useAds };
