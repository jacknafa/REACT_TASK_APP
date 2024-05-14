import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer
}

export default reducer;



// Redux: 상태 관리 라이브러리(선택사항 필수 x)
// State와 Props를 사용하여 상태를 여러 컴퓨넘트와 공유 가능
// 앱이 커지면 관리 힘듦, 소스코드 지저분
// => Redux 사용해서 해결
// Flow(Redux의 흐름)
// Action(객체) Dispatch(함수) (함수안에 객체를 인수로 넣어줘서 전달함)
// => Reducer 함수로 & Redux Store State로 return => React Component Rerendering

// Toolkit에서는
// Reducer를 생성하기 위해 Slice 필요 
// Reducer 이용하여 Store생성 => Store 사용하기 위해 Provider로 react component 감싸줌