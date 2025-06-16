import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit/react";

export const getErrorMessage = (isError: boolean, error: any) => {
  if (isError) {
    if ('status' in error) {
      const { status, data } = error as FetchBaseQueryError;
      if (status === 500) {
        return 'Error interno del servidor. Por favor, intenta más tarde.';
      }
      if (data && typeof data === 'object' && 'message' in data) {
        return (data as { message: string }).message || 'Error desconocido.';
      }
      return `Error ${status}. Por favor, intenta nuevamente.`;
    }
    
    if ('message' in error) {
      return (error as SerializedError).message ?? 'Ocurrió un error. Por favor, intenta nuevamente.';
    }
    
    return 'Error desconocido. Por favor, intenta nuevamente.';
  }

  return null; 
};
