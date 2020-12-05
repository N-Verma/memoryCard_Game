import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './timer.css'
import { confirmAlert } from 'react-confirm-alert';
export const Timer=({sc,tsc,id})=>{
  const [counter,setCounter] = useState(30)
  let history = useHistory();
  var timer;
  var res=0;
  React.useEffect(() => {
    if(counter>=0){
      timer = setInterval(() => setCounter(counter - 1), 1000);
      if(sc===tsc){
        clearInterval(timer)
        res=30-counter
        if(parseInt(id)===1 && (res<parseInt(localStorage.getItem('ezt')) || parseInt(localStorage.getItem('ezt'))===0)){
          localStorage.setItem('ezt',res)
        }
        else if(parseInt(id)===2 && (res<parseInt(localStorage.getItem('mdt')) || parseInt(localStorage.getItem('mdt'))===0)){
          localStorage.setItem('mdt',res)
        }
        else if(parseInt(id)===3&&(res<localStorage.getItem('hdt') || localStorage.getItem('hdt')===0)){
          localStorage.setItem('hdt',res)
        }
      }
    }
    return () => {
      clearInterval(timer);}
  }, [counter]);
  if(counter===0 && sc!==tsc){
    confirmAlert({
      message: 'RIP you failed, Try Again :c',
      buttons: [
        {
          label: 'Return',
          onClick: () => {
            history.push("/")
            localStorage.setItem('loss',parseInt(localStorage.getItem('loss'))+1);
            
          }
        },
        
      ]
    });
  }
  return(
    <div class="time"></div>
  )
}