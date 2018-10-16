export const ANT_INIT = "@@ANT INIT";
export const ANT_NOT_RUN_YET = "@@ANT NOT_RUN_YET";
export const ANT_CALCULATED = "@@ANT CALCULATED";
export const ANT_IN_PROGRESS = "@@ANT IN_PROGRESS";


export const reducer = (store= {}, {type, payload}) => {
    switch (type) {
      case ANT_INIT: {
          /* Increase look up speed by creating a hash*/
          const newState = payload.reduce( (map,ant) => {
              ant.state = ANT_NOT_RUN_YET;
              map[ant.name] = ant; // Assume Ant.name is unique
             return map; 
          },{})
          return Object.assign({},store,newState);
      }
      case ANT_IN_PROGRESS: {
          const { id, delay } = payload;
          if(!(id in store)) {
              throw Error("ID NOT FOUND")
          }
          return Object.assign({},store,{
              [id] : Object.assign({},store[id], {state: ANT_IN_PROGRESS, delay})
          }); // Find and update ant record in 0(1);
      }
      case ANT_CALCULATED:{
          const { id, likelihoodOfAntWinning} = payload;
            if(!(id in store)) {
              throw Error("ID NOT FOUND")
          }
          return Object.assign({},store,{
              [id] : Object.assign({},store[id], {state: ANT_CALCULATED, likelihoodOfAntWinning})
          }); // Find and update ant record in 0(1);
      }
      default:
        return store;
    }
  }