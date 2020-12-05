import React from "react"
import {Link} from 'react-router-dom'
//import {Container, Row,Col} from "react-bootstrap"

import "./landing.css"
export const Landing=()=>{
    return(
        <div class="container">
            <div class="box">
                <div class="row1 title tit ">
                    <div class="flip2-inner">
                        <div class="fr ">
                            Memory Card Game
                        </div>
                        <div class="ba">
                            <div class="btime">
                                <u>Best Time</u>
                                <ul>
                                    <li>Easy - {localStorage.getItem('ezt')}sec </li>
                                    <li>Medium - {localStorage.getItem('mdt')}sec</li>
                                    <li>Hard - {localStorage.getItem('hdt')}sec</li>
                                </ul>
                            </div>
                            <div class="bscore">
                                <u>Score Board</u>
                                <ul>
                                    <li>Win : {localStorage.getItem('win')}</li>
                                    <li>Loss : {localStorage.getItem('loss')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row1">
                    <div class="card1 choose">
                        <p>Choose Difficulty - </p>
                    </div>
                    <div class="card1 flipl">
                        <div class="flipl-inner">
                        <div class="front">

                        </div>
                        <div class="back">
                            <ul class="diff">
                                <li><Link class="link" to={`/game/${1}`}>Easy</Link></li>
                                <li><Link class="link" to={`/game/${2}`}>Medium</Link></li>
                                <li><Link class="link" to={`/game/${3}`}>Hard</Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}