import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView6345Saga from '../features/CalendarView6345/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView6345Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}