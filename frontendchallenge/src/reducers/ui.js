import { ANT_CALCULATED, ANT_IN_PROGRESS } from "./ants";

export const UI_NOT_RUN_YET = "@@UI NOT_RUN_YET";
export const UI_CALCULATED = "@@UI CALCULATED";
export const UI_IN_PROGRESS = "@@UI IN_PROGRESS";

const initalStore = {
    state: UI_NOT_RUN_YET, 
    buttonDisabled: false,
    antsInProgress: 0,
    antsCompleted: 0,
}

export const reducer = (store = initalStore, { type }) => {
    switch (type) {
        // Same action type in ants
        case ANT_CALCULATED: { 
            /* A common trick in Redux to change respective states on action call*/
            return {...store, antsCompleted: store.antsCompleted+1, antsInProgress: store.antsInProgress-1};
        }
        // Same action type in ants
        case ANT_IN_PROGRESS: {
            return {...store, antsInProgress: store.antsInProgress+1};
        }
        case UI_IN_PROGRESS:
            /* Using the spread operator to operator to copy enumerable properties from one object to another */
            return {...store, antsInProgress:0, antsCompleted:0, state: UI_IN_PROGRESS, buttonDisabled: true} 
        case UI_CALCULATED: 
            return {...store, state: UI_CALCULATED, buttonDisabled: false} 
        default:
            return store;
    }      
}