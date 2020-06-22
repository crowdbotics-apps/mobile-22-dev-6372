import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6352Reducer from '../features/CalendarView6352/redux/reducers';
import EmailAuth6350Reducer from '../features/EmailAuth6350/redux/reducers';
import CalendarView6349Reducer from '../features/CalendarView6349/redux/reducers';
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
CalendarView6352: CalendarView6352Reducer,
EmailAuth6350: EmailAuth6350Reducer,
CalendarView6349: CalendarView6349Reducer,
EmailAuth6346: EmailAuth6346Reducer,
CalendarView6345: CalendarView6345Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});