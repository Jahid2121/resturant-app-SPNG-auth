import create from 'zustand';

export const useUserStore = create((set) => ({
  user: {
    id: null,
    username: '',
    email: '',
    provider: '',
    createdAt: '',
    updatedAt: '',
  },
  jwt: '',
  updateUser: (newUser) => set((state) => ({
    user: { ...state.user, ...newUser.user },
    jwt: newUser.jwt,
  })),
}));

