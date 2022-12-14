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
    const token = data.access_token;
    if (token) {
      Cookie.set('accessToken', token, { expires: 5 });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      console.log(user);
      setUser(user);
    }
  };
  return { user, signIn, error, setError };
}
