import axiosClient from './axiosClient';
import type { Course, PagedResponse, CourseFormValues } from '../types/course';

export const getCourses = (keyword?: string, page = 0, size = 10) => {
  return axiosClient.get<PagedResponse<Course>>('/api/courses', {
    params: { keyword, page, size },
  });
};

// Hàm phụ trợ để chuẩn hóa dữ liệu trước khi gửi lên server
const toPayload = (values: CourseFormValues) => ({
  tenMonHoc: values.tenMonHoc.trim(),
  soTinChi: Number(values.soTinChi),
  soChoToiDa: Number(values.soChoToiDa),
});

// API Thêm mới
export const createCourse = (values: CourseFormValues) => {
  return axiosClient.post<Course>('/api/courses', toPayload(values));
};

// API Cập nhật (Sửa)
export const updateCourse = (id: number, values: CourseFormValues) => {
  return axiosClient.put<Course>(`/api/courses/${id}`, toPayload(values));
};

// API Xóa
export const deleteCourse = (id: number) => {
  return axiosClient.delete(`/api/courses/${id}`);
};
export const getCourseById = (id: number) => {
  return axiosClient.get<Course>(`/api/courses/${id}`);
};