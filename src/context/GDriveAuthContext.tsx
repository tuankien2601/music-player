import {
    createContext,
    useContext,
    useState,
    ReactNode,
} from 'react';

import { getGoogleAccessToken } from '../libs/storage';

interface GAuthData {
    token: string|null,
    setToken: (token: string|null) => void
}

const AuthContext = createContext<GAuthData>({
    token: null,
    setToken: (token: string| null) => {}
});

export const GAuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string|null>(getGoogleAccessToken());

    const value = {
        token: token,
        setToken: setToken
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useGAuth = () => useContext(AuthContext);
