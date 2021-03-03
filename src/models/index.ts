import _get from 'lodash/get';
import produce from 'immer';
/**
 * 全局modal
 */
interface IBaseModal {
  user: { id?: string; nickname?: string };
}
const initialState: IBaseModal = {
  user: {},
};

export default {
  namespace: 'base',
  state: initialState,
  reducers: {
    save: produce((draft, action) => {
      draft = {
        ...draft,
        ...action.payload,
      };
      return draft;
    }),
  },
  effects: {},
  subscriptions: {},
};
