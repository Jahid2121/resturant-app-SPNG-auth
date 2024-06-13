"use client"
import client from '@/lib/client';
import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

interface ApolloProviderWrapperProps {
  children: ReactNode;
}


const ApolloProviderWrapper: React.FC<ApolloProviderWrapperProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloProviderWrapper;


