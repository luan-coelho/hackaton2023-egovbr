export interface QrCode {
  id: number;
  description: string;
  value: string;
  durationInMinutes: 2;
}

export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}

export interface ResponseData<T> {
  data: T[];
  pagination: Pagination;
}

export interface ApiErrorResponse {
  type: string;
  title: string;
  status: number;
  detail: string;
  instance: string;
}