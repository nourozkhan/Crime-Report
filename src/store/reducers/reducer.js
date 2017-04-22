import Action from '../actions/action';

const Initial_state = {
  show_crime_report: [],
  show_complaints_report: [],
  show_missing_report: []
}

function MyReducer(state = Initial_state,action){
  switch(action.type){
    case Action.SIGN_UP_DATA:
    return  action.payload

    case Action.SIGN_IN_DATA:
    return action.payload

    case Action.REPORT_DATA:
    return action.payload

    case Action.SHOW_CRIME_REPORT:
    return Object.assign({}, state, { show_crime_report: action.payload });

    case Action.SHOW_COMPLAINTS_REPORT:
    return Object.assign({}, state, { show_complaints_report: action.payload });

    case Action.SHOW_MISSING_REPORT:
    return Object.assign({}, state, { show_missing_report: action.payload });

    default:
    return state
  }
}

export default MyReducer;