export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (cpf: string, password: string) => Promise<void>;
  register: (
    name: string,
    cpf: string,
    password: string,
    email: string
  ) => Promise<void>;
  logout: () => void;
  loadAuthenticatedUser: () => Promise<void>;
};
