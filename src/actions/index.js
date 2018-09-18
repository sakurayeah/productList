import * as homeAction from './homeAction';
import * as productAction from './productAction';
import * as loginAction from './loginAction'

export default {
  ...homeAction,
  ...productAction,
  ...loginAction,
}