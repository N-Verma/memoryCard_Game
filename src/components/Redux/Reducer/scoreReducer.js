function winReducer(state={win:0},action){
    switch(action.type){
        case 'win':
            return {win:action.payload}
        default:
            return state;
    }
}
function lossReducer(state={loss:0},action){
    switch(action.type){
        case 'loss':
            return {loss:action.payload}
        default:
            return state;
    }
}
export {winReducer,lossReducer}