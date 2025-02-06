import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface ClientContextType {
  clientName: string;
  setClientName: (name: string) => void;
}

// Create the context with a default value
const ClientContext = createContext<ClientContextType | undefined>(undefined);

// Create a custom hook to use the ClientContext
export const useClient = (): ClientContextType => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient must be used within a ClientProvider");
  }
  return context;
};

// Define the provider component
interface ClientProviderProps {
  children: ReactNode;
}

export const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const [clientName, setClientName] = useState<string>("");

  return (
    <ClientContext.Provider value={{ clientName, setClientName }}>
      {children}
    </ClientContext.Provider>
  );
};
