export const UI_NOT_RUN_YET = "@@UI NOT_RUN_YET";
export const UI_CALCULATED = "@@UI CALCULATED";
export const UI_IN_PROGRESS = "@@UI IN_PROGRESS";

export const reducer = (state = {state: UI_NOT_RUN_YET, buttonDisabled: false}, { type }) => {
    switch (type) {
        case UI_IN_PROGRESS:
            return {state: UI_IN_PROGRESS, buttonDisabled: true} 
        case UI_CALCULATED: 
            return {state: UI_CALCULATED, buttonDisabled: false} 
        default:
            return state;
    }      
}