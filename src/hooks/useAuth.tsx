import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api';

interface ProviderAuthProps {
  children: React.ReactNode;
}

const AuthContext = createContext(null);

export function ProviderAuth({ children }: ProviderAuthProps) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      endPoints.auth.login,
      {
        email,
        password,
      },
      options,
    );
    if (data.accessToken) {
      Cookie.set('accessToken', data.accessToken, { expires: 5 });
    }
  };
  return { user, signIn, error, setError };
}
