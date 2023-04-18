// vendors
import { ajax, AjaxError } from "rxjs/ajax";
import { of, map, catchError, firstValueFrom } from "rxjs";

// constants
import { API_ERROR_MESSAGE } from "../constants/apiConstants";

// types
import { IApiErrorResponse } from "../types";

const errorManager = ({ status }: AjaxError) => {
  const error = { status, errorMessage: API_ERROR_MESSAGE[status] };

  return of(error);
};

const GET = <ResponseType>(
  url: string
): Promise<ResponseType | IApiErrorResponse> =>
  firstValueFrom(
    ajax(url).pipe(
      map(({ response }) => response as ResponseType),
      catchError(errorManager)
    )
  );

export const fetcher = {
  get: GET,
};
