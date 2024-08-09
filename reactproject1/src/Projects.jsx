import 'bootstrap/dist/js/bootstrap.bundle.min';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
import 'swiper/css';
import './Projects.css';
import styles from './subsections.module.css';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Cossaartco from './cossaartco';
import Warm_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\Temperature Converter\\warm.png";
import Cool_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\Temperature Converter\\cool.png";
import Cold_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\Temperature Converter\\cold.png";

import bitcoin_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\bitcoin_converter.png";
import degrees_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\degrees_program.png";
import tic_tac_toe_img from "C:\\Users\\Dylan\\source\\repos\\Web Programming\\reactproject1\\tic_tac_toe_game.png"



const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [playerTurn, setPlayerTurn] = useState(true);
    const [turnInfo, setTurnInfo] = useState("Your turn");
    const [game_done, setGame_done] =useState(false)

    useEffect(() => {
        if (!playerTurn && !game_done) {
            const computerMoveTimeout = setTimeout(makeComputerMove, 1000);
            return () => clearTimeout(computerMoveTimeout);
        }
    }, [playerTurn]);

    const newGame = () => {
        setBoard(Array(9).fill(""));
        setPlayerTurn(true);
        setGame_done(false);
        setTurnInfo("Your turn");
    };

    const handleButtonClick = (index) => {
        if (playerTurn && !board[index]) {
            const newBoard = board.slice();
            newBoard[index] = "X";
            setBoard(newBoard);
            setPlayerTurn(false);
            
            setTurnInfo("Computer's turn");
            
        }
    };

    const makeComputerMove = () => {
        
        const emptyIndices = board.map((val, idx) => (val === "" ? idx : null)).filter(val => val !== null);
        if (emptyIndices.length > 0) {
            const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
            const newBoard = board.slice();
          
            newBoard[randomIndex] = "O";
            setBoard(newBoard);
            setPlayerTurn(true);
            setTurnInfo("Your turn");
        }
        
    };

    const checkForWinner = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a] === "X" ? "You win!" : "Computer wins!";
            }
        }
        if (board.every(val => val)) return "Draw game";
        
        return null;
    };

    useEffect(() => {
        const winner = checkForWinner();
        if (winner) {
            setGame_done(true);
            setTurnInfo(winner);
            
            
      
            
        }
    }, [board]);

    return (
        <div className={styles.reset_style}>
            <h1 id="header">Tic-Tac-Toe</h1>
            <div className={styles.gameBoard}>
                {board.map((val, idx) => (
                    <button key={idx} className={styles.button} onClick={() => handleButtonClick(idx)} disabled={!!val}>
                        {val}
                    </button>
                ))}
            </div>
            <p id="turnInfo">{turnInfo}</p>
            <button id="newGameButton" onClick={newGame}>New game</button>
        </div>
    );
};

const TemperatureConverter = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [imgSource, setImgSource]=useState(Warm_img)

    const handleCelsiusChange = (e) => {
        const value = e.target.value;
        setCelsius(value);

    };

    const handleFahrenheitChange = (e) => {
        const value = e.target.value;
        setFahrenheit(value);
        
    };



    const handleConvertButton = () => {
        
         if (fahrenheit.length > 0 && !isNaN(fahrenheit)) {


            setCelsius(((fahrenheit - 32) * 5) / 9).toFixed(2);
            setErrorMessage('');
        }
        else if (celsius.length > 0 && !isNaN(celsius)) {

            setFahrenheit(((celsius * 9) / 5 + 32).toFixed(2));
            setErrorMessage('');
        }
        else {
            setErrorMessage('Please enter valid numbers.');
        }
        
    
    };
    const handleClearButton = () => {
        setFahrenheit('');
        setCelsius('');
        setErrorMessage('');
    };

    useEffect(() => {
        if (fahrenheit !== '') {

            if (fahrenheit < 32) {
                setImgSource(Cold_img);
            }
            else if (fahrenheit > 32 && fahrenheit < 51) {
                setImgSource(Cool_img);
            }
            else if (fahrenheit > 50) {
                setImgSource(Warm_img);
            }
        }
    }, [fahrenheit]);

    return (
        <div className={styles.reset_style }>
            <h1 id="header">Temperature Converter</h1>
            <p>
                <label htmlFor="cInput">&nbsp;&nbsp;&nbsp;&nbsp;Celsius: &nbsp;</label>
                <input className={styles.input}
                    id="cInput"
                    type="text"
                    value={celsius}
                    onChange={handleCelsiusChange}
                />
            </p>
            <p>
                <label htmlFor="fInput">Fahrenheit: </label>
                <input className={styles.input}
                    id="fInput"
                    type="text"
                    value={fahrenheit}
                    onChange={handleFahrenheitChange}
                />
            </p>
            <input className={styles.convertBtn}
                id="convertButton"
                type="button"
                value="Convert"
                onClick={handleConvertButton}
            />
            <input className={styles.input}
                id="clearButton"
                type="button"
                value="Clear"
                onClick={handleClearButton}
            />
            <p id="errorMessage" className={styles.errorMsg}>{errorMessage}</p>
            <p>
                <img id="weatherImage" src={imgSource} alt="Warm" />
            </p>
        </div>
    );
};


const HBcreator = () => {
    const form = useRef();
   

    const [numBlinks, setNumBlinks] = useState(0);
    const [musicVolume, setMusicVolume] = useState(20);

    const handleNumBlinksChange = (e) => {
        setNumBlinks(e.target.value);
    };

    const handleMusicVolumeChange = (e) => {
        setMusicVolume(e.target.value);
    };
  
    return (
        <>
            <h1 className={styles.reset_style} id="header"> Happy Birthday Creator</h1>
            <form ref={form} className={styles.form}>
                <div>
                    <label htmlFor="birthdayMessage">Message?</label>
                    <input type="text" id="birthdayMessage" name="birthdayMessage" value="Happy birthday!" readOnly className={styles.input}></input>
                </div>

                <div>
                    <label htmlFor="emailAddr">Email address?</label>

               
                    <input type="email" id="emailAddr" name="emailAddr" placeholder="name@domain.com"
                        pattern="[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*" required className={styles.input}></input>
                </div>

                <div>
                    <label htmlFor="dateToSend">Date to send?</label>
                    <input type="date" id="dateToSend" name="dateToSend" className={styles.input}></input>
                </div>

                <div>
                    <label htmlFor="messageColor">Message color?</label>
                    <input type="color" id="messageColor" name="messageColor" className={styles.input}></input>
                </div>
            
                <div>
                    <label htmlFor="numBlinks">Number of blinks?</label>
                    <input
                        type="number"
                        id="numBlinks"
                        name="numBlinks"
                        value={numBlinks}
                        min="0"
                        max="10"
                        onChange={handleNumBlinksChange}
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="musicVolume">Music volume?</label>
                    <input
                        type="range"
                        id="musicVolume"
                        name="musicVolume"
                        value={musicVolume}
                        min="0"
                        max="50"
                        onChange={handleMusicVolumeChange}
                    />
                </div>
            

                <button type="submit" disabled>Send Birthday Message</button>

            </form>
        </>


    )
};



const Main = () => {
    return (
        <>
            <div className="swiper_header">
                <h2 className="swiper-title">Web Development Projects</h2>
                <p id="swipe-right">Scroll right to see all of the projects</p>
                <small>Due to the nature of my web development class, except for the first slide, I did not write all thecode.  Instead,
                    I finished up the JavaScript, HTML, CSS, PHP, or SQL up to make the webpage work correctly. 
                    The &quot;Cossaart Company&quot; required me to recreate the php function of pulling data from a database and displaying it.
                    I used Node.js to pull the data from a recreated MySQL database.
                </small>

            </div>


           

            <swiper-container slides-per-view="2" id="swiper">
                <swiper-slide className="swiperSlide double" id="company_slide">
                    <Cossaartco />
                </swiper-slide>
                <swiper-slide className="swiperSlide" id="ttt_slide"><TicTacToe /></swiper-slide>
                <swiper-slide className="swiperSlide"><TemperatureConverter /></swiper-slide>
                <swiper-slide className="swiperSlide"><HBcreator/></swiper-slide>
                
                
            </swiper-container>
            <hr className='dashed'></hr>
            <div className='swiper_header'>
                <h2 className='swiper-title'>
                    CS50 Python projects 
                </h2>
                <small>
                    This slider contains the projects I created for the CS50p and CS50AI classes. To properly present, I 
                provide an image and a discription of each project.
                </small>
            </div>
            <swiper-container slides-per-view="2" id="swiper">
                <swiper-slide id="spotify_slide" className="reset_style">
                    <div className={styles.reset_style}>
                        <h1 id="header">Spotify Wrapped Project</h1>
                    </div>
                    <iframe width="500" height="300" src="https://www.youtube.com/embed/9_HdD9N5nhg?si=XwHfjdEy88kmHn9S"
                        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    <p id="desc">This project does what I always wanted to do through Spotify: create a playlist of one of my favorite artists. Through this code, that is achievable without the daunting task of adding the songs one by one.
                        My project takes all the songs that you like by the artist of your choosing and puts them into one playlist for you.

                        For further information, this project uses the Spotipy library to access the Spotify API. First, you will have to create a Spotify application.
                        You are able to create one in the &quot;Spotify for Developers&quot; dashboard.
                        Once granted authorization, you would be asked to input the name of the artist you wish to make a playlist of. Then it would ask you another question, its purpose to choose the most efficient way to create the
                        playlist. Then, after a couple minutes, it should create your own personalized playlist of that artist. Every song that you ever added to your playlist or liked by that artist would be in that playlist.</p>
                       
                </swiper-slide>
                <swiper-slide>
                    <h1 id="header" className="reset_style">AI Tic Tac Toe Game</h1>
                    <img src={tic_tac_toe_img} width="500" height="300"></img>
                    <p id="desc">
                        This is a new and improved version of Tic Tac Toe where the program&apos;s bot performs an algorithm to
                        determine the smartest move.  In short, the algorithm determines the shortest amount of turns for it to lose or
                        win, and it chooses the move that has less possible turns.  Basically, the computer has an algorithm to
                        determine the best move, instead of picking randomly on the board.
                    </p>
                </swiper-slide>
                <swiper-slide>
                    <h1 id="header" className="reset_style">Degrees of Separation Program</h1>
                    <img src={degrees_img} width="500" height="300"></img>
                    <p id="desc">
                        According to the <a href="https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon">Six Degrees of Kevin Bacon</a> game, anyone in the Hollywood film industry can be connected to Kevin Bacon
                        within six steps, where each step consists of finding a film that two actors both starred in.  This program allows you
                        to input two actors and returns with the shortest path between them by listing the series of movies that connects them.
                        Each &quot;step&quot; states a movie connecting two actors. Then the next step contains the second actor to another, and
                        so on.
                    </p>
                </swiper-slide>
                    
                <swiper-slide>
                    <h1 id="header" className="reset_style">Bitcoin Program</h1>
                    <img src={bitcoin_img} width="500" height="50"></img>
                    <p id="desc">
                        Bitcoin is a form of digital currency, otherwise known as cryptocurrency. Rather than rely on a central authority like
                        a bank, Bitcoin instead relies on a distributed network, otherwise known as a blockchain, to record transactions.  This
                        program uses a library that converts a dollar-amount value into what it is worth in Bitcoin value.
                    </p>
                </swiper-slide>
            </swiper-container>

        </>
       
    );
};

export default Main;
