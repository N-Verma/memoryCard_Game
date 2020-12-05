const winAction=(sc)=> async (dispatch)=>{
    dispatch({
        type:'win',
        payload:sc+1
    })
}
const lossAction=(sc)=> async (dispatch)=>{
    dispatch({
        type:'loss',
        payload:sc+1
    })
}

export {winAction,lossAction}