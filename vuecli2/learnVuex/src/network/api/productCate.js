import {request} from "../request";

export function api_listWithChildren() {
  return request({
      url: '/productCategory/list/withChildren',
      method: 'get',
    }
  )
}

