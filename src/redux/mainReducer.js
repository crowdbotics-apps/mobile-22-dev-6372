import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth6346Reducer from '../features/EmailAuth6346/redux/reducers';
import CalendarView6345Reducer from '../features/CalendarView6345/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth6346: EmailAuth6346Reducer,
CalendarView6345: CalendarView6345Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});