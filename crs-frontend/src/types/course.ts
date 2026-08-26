// path: crs-frontend/src/types/course.ts  
export type Course = {  
  id: number;  
  code: string;  
  name: string;  
  credits: number;  
  description?: string;  
};  
  
export type PageResponse<T> = {  
  content: T[];  
  totalPages: number;  
  totalElements: number;  
  size: number;  
  number: number;  
};  
