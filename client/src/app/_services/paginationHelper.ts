import { HttpClient, HttpParams } from "@angular/common/http";
import { PaginatedResult } from "../_models/pagination";
import { map } from "rxjs";

export function GetPaginatedResult<T>(url: string, params: any,http: HttpClient) {
    const paginatedResult: PaginatedResult<T> = new PaginatedResult<T>();
    return http.get<T>(url, { observe: 'response', params }).pipe(
      map(response => {
        paginatedResult.result = response.body as T;
        const paginationHeader = response.headers.get('Pagination');
        if (paginationHeader !== null) {
          paginatedResult.pagination = JSON.parse(paginationHeader);
        }
        return paginatedResult;
      })
    );
  }

  export function getPaginationHeaders(pageNumber: number, pageSize:number){
      let params = new HttpParams();
      params = params.append('pageNumber',pageNumber.toString())
      params = params.append('pageSize',pageSize.toString())

      return params;
  }