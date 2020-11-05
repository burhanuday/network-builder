import * as React from "react";
import { Dispatch, SetStateAction } from "react";

import { NetworkItem } from "../interfaces/NetworkItem";

interface State {
  networkItem: NetworkItem | null;
}

interface CurrentCommunityContextType {
  community: State;
  setCommunity: Dispatch<SetStateAction<State>>;
}

const initialState: State = {
  networkItem: null,
};

const CurrentCommunityContext = React.createContext<CurrentCommunityContextType | null>(
  null
);

const CurrentCommunityProvider = (props: { children: React.ReactNode }) => {
  const [community, setCommunity] = React.useState<State>(initialState);

  return (
    <CurrentCommunityContext.Provider value={{ community, setCommunity }}>
      {props.children}
    </CurrentCommunityContext.Provider>
  );
};

export { CurrentCommunityContext, CurrentCommunityProvider };
