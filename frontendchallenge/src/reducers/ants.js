export const INIT = "@@ANTS INIT";
export const NOT_RUN_YET = "@@ANTS NOT_RUN_YET";
export const CALCULATED = "@@ANTS CALCULATED";
export const IN_PROGRESS = "@@ANTS IN_PROGRESS";


export const reducer = (state = {}, {type, payload}) => {
    switch (type) {
      case INIT: {
          const newState = payload.reduce( (map,ant) => {
              ant.state = NOT_RUN_YET;
              map[ant.name] = ant;
             return map; 
          },{})
          return Object.assign({},state,newState);
      }
      case IN_PROGRESS: {
          const { id } = payload;
          if(!(id in state)) {
              throw Error("ID NOT FOUND")
          }
          return Object.assign({},state,{
              [id] : Object.assign({},state[id], {state: IN_PROGRESS})
          });
      }
      case CALCULATED:{
          const { id, likelihoodOfAntWinning} = payload;
            if(!(id in state)) {
              throw Error("ID NOT FOUND")
          }
          return Object.assign({},state,{
              [id] : Object.assign({},state[id], {state: CALCULATED, likelihoodOfAntWinning})
          });
      }
      default:
        return state;
    }
  }