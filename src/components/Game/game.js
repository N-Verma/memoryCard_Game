import React,{useEffect, useState} from 'react'
import './game.css'
import {useHistory} from 'react-router-dom'
import {Timer} from '../Timer/timer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faShip,faAddressBook,faCalculator,faCoffee,faBomb,faSkull,faTrain,faDrum,faBriefcase,faTree} from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { eiconarr, escore, ewidth, hiconarr, hscore, hwidth, miconarr, mscore, mwidth } from '../constants/data'

export const Game=(props)=>{

    const [iconarr, setIconarr] = useState([]);
    const [tscore,setTscore] = useState();
    const [curr,setCurr] = useState([])
    let history = useHistory();
    const [score,setScore] = useState(0);
    const rotate=(event)=>{
        var par = document.getElementById(event.currentTarget.id);
        var child = par.children[0];
        setCurr([...curr,par])
        child.style.transform = "rotateY(180deg)";
        setTimeout(()=>{child.style.transform = "rotateY(0deg)";},3000)
    }
    useEffect(()=>{
        switch(parseInt(props.match.params.id)){
            case 1:
                setIconarr(eiconarr)
                setTscore(escore)
                document.querySelector(".board").style.width=ewidth
                break;
            case 2:
                setIconarr(miconarr)
                setTscore(mscore)
                document.querySelector(".board").style.width=mwidth
                break;
            case 3:
                setIconarr(hiconarr)
                setTscore(hscore)
                document.querySelector(".board").style.width=hwidth
                break;
        }
        if(curr.length===2){
            if((curr[0].children[0].children[1].id===curr[1].children[0].children[1].id)&&(curr[0].id!==curr[1].id)){
                var c1 = curr[0].children[0];
                var c2 = curr[1].children[0];
                
                setScore(score+1)
                
                setTimeout(()=>{
                    c1.style.display="none"
                    c2.style.display="none"
                    curr[0].style.zIndex="-1"
                    curr[1].style.zIndex="-1"
                },1000)
                
                setCurr([])
            }else{
                setCurr([])
                var nc1 = curr[0].children[0];
                var nc2 = curr[1].children[0];
                
                setTimeout(()=>{
                    nc1.style.transform="rotateY(0deg)"
                    nc2.style.transform="rotateY(0deg)"
                },1000)
            }
        }
    },[curr])

    
    if(score===tscore){
        confirmAlert({
            message: 'Congrats You Won !!!!!',
            buttons: [
              {
                label: 'Return',
                onClick: () => {
                        history.push("/");
                        localStorage.setItem('win',parseInt(localStorage.getItem('win'))+1);
                        
                    }
              },
              
            ]
          });
    }
    //console.log("here")
    //
    // var bool = true;
    // console.log(bool)
    // if(bool){
    //     shuffle(iconarr);
    //     bool=false
    //     console.log(bool)
    // }
    return(
        <div>
            <Timer sc={score} tsc={tscore} id={props.match.params.id}/>
        <div class="container">
        
        <div class="board">
            {(iconarr).map((icon,index)=>{
                return(
                <div key={index} id={`in${index}`} onClick={rotate} class="card" >
                    <div class="inner">
                        <div class="gfront">
                        </div>
                        <div class="gback" id={icon.iconName}>
                            <FontAwesomeIcon icon={icon} class="icon"/>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}