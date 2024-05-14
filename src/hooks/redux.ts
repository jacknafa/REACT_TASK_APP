import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useSelector } from "react-redux";

//타입 스크립트에서 추론을 x => 개발자가 타입을 직접 지정해줌(annotate)

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();

