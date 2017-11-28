import { get,post } from '../api/api'
export const HomeHttp = {
  queryHomeList(params) {
    return get('mob/query/list', params)
  },
};
