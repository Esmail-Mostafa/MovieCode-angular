export interface BaseResponse {
    status:string,
  
}

export interface messageResponse<T> extends BaseResponse {
    
    message:T[],
}


