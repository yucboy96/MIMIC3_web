import MyGroup from '../pages/my-group';
import Error404 from '../pages/404';
export default {
  myGroup: {
    route: '/my-group',
    entry: MyGroup,
  },
  404: {
    route: '/404',
    entry: Error404,
  },
};
