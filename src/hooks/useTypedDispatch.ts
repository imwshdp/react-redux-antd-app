import { useDispatch } from "react-redux";
import { AppDispatch } from "store";

const useTypedDispatch: () => AppDispatch = useDispatch
export default useTypedDispatch;