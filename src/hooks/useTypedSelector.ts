import { RootState } from 'store/index';
import { TypedUseSelectorHook, useSelector } from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export default useTypedSelector;