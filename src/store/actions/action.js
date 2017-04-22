export default class Action{
    static SIGN_UP_DATA = "SIGN_UP_DATA";
    static SIGN_IN_DATA = "SIGN_IN_DATA";
    static SIGN_OUT = "SIGN_OUT";
    static REPORT_DATA = "REPORT_DATA";
    static SHOW_CRIME_REPORT = "SHOW_CRIME_REPORT";
    static SHOW_COMPLAINTS_REPORT = "SHOW_COMPLAINTS_REPORT";
    static SHOW_MISSING_REPORT = "SHOW_MISSING_REPORT"

    static signUpData(obj){
        console.log(obj)
        return { 
            type: Action.SIGN_UP_DATA,
            payload: obj
        }
    }

    static signIn(obj){
        console.log(obj)
        return { 
            type: Action.SIGN_IN_DATA,
            payload: obj
        }
    }

     static signOut(){
        return { 
            type: Action.SIGN_OUT
        }
    }

     static reportData(obj){
        return { 
            type: Action.REPORT_DATA,
            payload: obj
        }
    }

    static showCrimeReport(dataList){
        return {
            type: Action.SHOW_CRIME_REPORT,
            payload: dataList
        }
    }

     static showComplaintsReport(dataList){
        return {
            type: Action.SHOW_COMPLAINTS_REPORT,
            payload: dataList
        }
    }

     static showMissingReport(dataList){
        return {
            type: Action.SHOW_MISSING_REPORT,
            payload: dataList
        }
    }
}