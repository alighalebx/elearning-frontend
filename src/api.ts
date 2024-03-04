// src/api.ts
import axios, { AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3001'; // Update the URL with your backend URL

const instance = axios.create({
  baseURL,
});

// User Management Endpoints
export const createUser = (userData: any): Promise<AxiosResponse<any>> => instance.post('/users/create', userData);
export const updateUser = (userId: string, userData: any): Promise<AxiosResponse<any>> => instance.put(`/users/${userId}`, userData);
export const deleteUser = (userId: string): Promise<AxiosResponse<any>> => instance.delete(`/users/${userId}`);

// Professor Features Endpoints
export const createCourse = (professorId: string, courseData: any): Promise<AxiosResponse<any>> => instance.post(`/courses/create/${professorId}`, courseData);
export const updateCourse = (courseId: string, courseData: any): Promise<AxiosResponse<any>> => instance.put(`/courses/${courseId}`, courseData);
export const deleteCourse = (courseId: string): Promise<AxiosResponse<any>> => instance.delete(`/courses/${courseId}`);
export const viewEnrolledStudents = (courseId: string): Promise<AxiosResponse<any>> => instance.get(`/courses/${courseId}/students`);

// Student Features Endpoints
export const enrollCourse = (courseId: string): Promise<AxiosResponse<any>> => instance.post(`/courses/${courseId}/enroll`);
export const dropCourse = (courseId: string): Promise<AxiosResponse<any>> => instance.delete(`/courses/${courseId}/drop`);

// Course Management Endpoints
export const listAllCourses = (): Promise<AxiosResponse<any>> => instance.get('/courses');
export const viewSpecificCourse = (courseId: string): Promise<AxiosResponse<any>> => instance.get(`/courses/${courseId}`);

// Grades Management Endpoints
export const assignGrade = (gradeData: any): Promise<AxiosResponse<any>> => instance.post('/grades/assign', gradeData);
export const studentViewGrades = (studentId: string, courseId?: string): Promise<AxiosResponse<any>> => {
  const queryParams = courseId ? `?courseId=${courseId}` : '';
  return instance.get(`/student/grades/${studentId}${queryParams}`);
};
export const viewAverageCourseGrades = (courseId: string): Promise<AxiosResponse<any>> => instance.get(`/grades/${courseId}/average`);

export default instance;
