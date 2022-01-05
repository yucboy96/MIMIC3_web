import { getAllLabEvents } from './service';

export default {
  namespace: 'mygroup',
  initial: {
    loading: false,
    labEvents: {},
  },

  reducers: {
    setData(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },

  // async action
  asyncs: {
    async getData(dispatch, getState) {
      try {
        dispatch('setData', { loading: true });
        const data = await getAllLabEvents(222);
        dispatch('setData', { loading: false, labEvents: data });
      } catch (e) {
        console.log(e);
      }
    },
  },
  /**
   * 初始化请求
   * @param {Function} dispatch dispatch方法
   * @param {Function} getState 获取当前页面store
   * @param {Object} payload dispatch参数
   */
  async setup(dispatch, getState, payload) { // eslint-disable-line
    dispatch('getData');
  },
};
