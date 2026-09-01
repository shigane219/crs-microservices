// path: crs-frontend/src/types/course.ts
// purpose: kieu du lieu mon hoc va form CRUD (Buoi 5 + Buoi 7)

export interface Course {
  id: number;
  tenMonHoc: string;
  soTinChi: number;
  soChoToiDa: number;
  soChoConLai: number;
}

export interface PagedResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

export interface CourseFormValues {
  tenMonHoc: string;
  soTinChi: string; // dung string trong form de de kiem soat input rong, se parseInt khi gui di
  soChoToiDa: string;
}

export const emptyCourseForm: CourseFormValues = {
  tenMonHoc: '',
  soTinChi: '',
  soChoToiDa: '',
};
export interface CourseFormValues {
  tenMonHoc: string;
  soTinChi: string; // Dùng string trong form để dễ kiểm soát input rỗng, sẽ parseInt khi gửi đi
  soChoToiDa: string;
}
