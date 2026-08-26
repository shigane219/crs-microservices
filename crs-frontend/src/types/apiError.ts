// path: crs-frontend/src/types/apiError.ts  
// purpose: dinh nghia kieu loi tra ve tu API  
  
export type ApiErrorResponse = {
  message?: string;
  status?: number;
  error?: string;
  [key: string]: unknown;
};  
