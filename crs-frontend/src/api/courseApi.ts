// path: crs-frontend/src/api/courseApi.ts  
// purpose: ham goi HTTP den GET /api/courses qua axios  
  
import axios from 'axios';  
import type { Course } from '../types/course';  
import type { PageResponse } from '../types/course';  
  
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';  
  
export function getCourses(  
  keyword: string,  
  page: number,  
  size: number  
) {
  return axios.get<PageResponse<Course>>(`${BASE_URL}/api/courses`, {
    params: { keyword, page, size },  
  });  
}  
