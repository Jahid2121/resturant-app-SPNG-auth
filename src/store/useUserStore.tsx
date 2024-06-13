import create from 'zustand';

// Load the user data and jwt from local storage
const loadUserData = () => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const jwt = localStorage.getItem('jwt');
    console.log(jwt);
    return { user, jwt };
  } catch {
    return { user: null, jwt: null };
  }
};

export const initialState = loadUserData();


export const useUserStore = create((set) => ({
  user: initialState.user || {
    id: null,
    username: '',
    email: '',
    provider: '',
    createdAt: '',
    updatedAt: '',
  },
  jwt: initialState.jwt || '',
  updateUser: (newUser) => {
    set((state) => {
      const updatedState = {
        user: { ...state.user, ...newUser.user },
        jwt: newUser.jwt,
      };

      // Save the updated state to local storage
      localStorage.setItem('user', JSON.stringify(updatedState.user));
      localStorage.setItem('jwt', updatedState.jwt);

      return updatedState;
    });
  },
}));

//   updateUser: (newUser) => set((state) => ({
//   user: { ...state.user, ...newUser.user },
//   jwt: newUser.jwt,
// })),