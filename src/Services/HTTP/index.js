// @flow
// Reference: https://gist.github.com/bryanrsmith/e8189b6b704fbd5ef21b
export default class HTTP {
  constructor(baseURL: string, headers: {} = {}): void {
    Object.assign((this:any), {baseURL, headers});
  }

  get(url: string, headers: {} = (this:any).headers): Promise<fetch> {
    const petitionHeaders: HeadersInit = new Headers(headers);
    const petitionInit: RequestOptions = {};
    Object.assign(petitionInit, {
      headers: petitionHeaders,
      method: 'GET'
    });

    return this.constructor.fetch(url, petitionInit, (this:any).baseURL);
  }

  static fetch(
    url: string,
    init: RequestOptions = {},
    baseURL: string
  ): Promise<fetch> {
    return fetch(baseURL + url, init);
  }
}
