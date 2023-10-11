import { createContext } from 'react';
import { BaseClientOidc } from './types';

export const FormDataContext = createContext<{
  setFormData: (baseClientOidc: BaseClientOidc) => void;
}>({
  setFormData: () => null,
});
