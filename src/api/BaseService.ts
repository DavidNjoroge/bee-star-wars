import axios from 'axios';

class BaseService {
  private service: any;
  constructor() {
    let service = axios.create({
      headers: {csrf: 'token'}
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response: any) {
    return response;
  }

  handleError = (error: { response: { status: any; }; }) => {
    // todo fix here
    switch (error.response.status) {
      case 401:
        // this.redirectTo(document, '/')
        break;
      case 404:
        // this.redirectTo(document, '/404')
        break;
      default:
        // this.redirectTo(document, '/500')
        break;
    }
    return Promise.reject(error)
  }

  redirectTo = (document: { location: any; }, path: any) => {
    document.location = path
  }

  get(path: any) {
    return this.service.get(path);
  }

  patch(path: any, payload: any, callback: (arg0: any, arg1: any) => any) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response: any) => callback(response.status, response.data));
  }

  post(path: any, payload: any, callback: (arg0: any, arg1: any) => any) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then((response: { status: any; data: any; }) => callback(response.status, response.data));
  }
}

export default BaseService;