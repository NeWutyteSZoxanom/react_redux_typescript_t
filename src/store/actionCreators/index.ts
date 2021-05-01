import * as UserActionCreators from './user';
import * as TodoActionCreators from './todos';

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
};
