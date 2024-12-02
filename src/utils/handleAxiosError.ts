import axios from 'axios';

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error('Axios Error:', error.message);
    throw error;
  } else {
    console.error('Unknown Error:', error);
    throw new Error('An unknown error has occurred.');
  }
};
