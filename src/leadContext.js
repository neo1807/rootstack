import React from "react";

const LeadContext = React.createContext({
  user: "",
  leads: [],
  getInitials() {}
});

export const Provider = LeadContext.Provider;
export const Consumer = LeadContext.Consumer;
