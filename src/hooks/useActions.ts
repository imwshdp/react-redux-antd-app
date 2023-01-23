import { bindActionCreators } from 'redux';
import { allActionCreators } from 'store/reducers/action-creators';

import useTypedDispatch from './useTypedDispatch';

const useActions = () => {
  const dispatch = useTypedDispatch()

  // bind action-creators to typed dispatch
  return bindActionCreators(allActionCreators, dispatch);
}

export default useActions;