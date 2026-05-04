
export type TOKEN_KEY = 'access_token';
export const LS_ACCESS_TOKEN_KEY: TOKEN_KEY = 'access_token' as const;

export const getFromLS = (key: TOKEN_KEY): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Ошибка при получении из LocalStorage', error);
      return null;
    }
  };


export const removeFromLS = (key: TOKEN_KEY): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Ошибка при удалении из LocalStorage', error);
    }
  };


  export const setToLS = (key: TOKEN_KEY, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Ошибка при установке в LocalStorage', error);
    }
  };