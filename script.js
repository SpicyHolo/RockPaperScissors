//Buttons reference
const scissorsButton = document.querySelector('#Scissors');
const paperButton = document.querySelector('#Paper');
const rockButton = document.querySelector('#Rock');

//Images reference
const playerImage = document.querySelector('#Player');
const computerImage = document.querySelector('#Computer');

//Score reference
const scoreText = document.querySelector("#score");

//Variables
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let computerChoice = "";


scissorsButton.addEventListener('click', () => {
    buttonClick(2);
});

paperButton.addEventListener('click', () => {
    buttonClick(1);
});
rockButton.addEventListener('click', () => {
    buttonClick(0);
});
//Changes image of target (id) image to rock/paper/scissors (type)
function updateImage(id, type)
{
    let src = "img/";
    switch(type) 
    {
        case 0:
            src += "rock.png";
            break;
        case 1:
            src += "paper.png";
            break;
        case 2:
            src += "scissors.png";
            break; 
        default:
            src = "";
            break;
    }
    if(id == "player")
    {
        playerImage.src = src;
    }
    else if (id == "computer")
    {
        computerImage.src = src;
    }
}

function updateScore()
{
    scoreText.textContent = playerScore + ":" + computerScore;
}

function computerPlay()
{
    const r = Math.floor(Math.random()*3);
    return r;
}

function playRound(playerChoice, computerChoice)
{
    if(playerChoice == computerChoice)
    {
        return -1;
    }
    switch(playerChoice)
    {
        case 0: //Rock
            if(computerChoice == 1) //Paper beats Rock
            {
                return 0; //Computer Win
            }
            else //Rock beats Scissors
            {
                return 1; //Player Win
            }
            break;
        case 1: //Paper
            if(computerChoice == 2) //Paper beats Scissors
            {
                return 0; //Computer Win
            }
            else //Paper beats Rock
            {
                return 1; //Player Win
            }
            break;
        case 2: //Scissors
            if(computerChoice == 0) //Rock beats scissors
            {
                return 0; //Computer Win
            }
            else //Scissors beat paper
            {
                return 1; //Player Win
            }
            break;
    }
}

function checkEndGame()
{
    if((computerScore + playerScore) >=5)
    {
        return true;
    }
    else
    {
        return false;
    }

}

function buttonClick(id)
{
    console.log("ID = " + id);
    if(!checkEndGame())
    {
        playerChoice = id;
        updateImage("player", playerChoice);

        computerChoice = computerPlay();
        updateImage("computer", computerChoice);

        if(playRound(playerChoice, computerChoice) == 1)
        {
            playerScore++;
            updateScore();
        }
        else if(playRound(playerChoice, computerChoice) == 0)
        {
            computerScore++;
            updateScore();
        }
        if(checkEndGame())
        {
            if(playerScore > computerScore)
            {
                scoreText.textContent = "WIN!";
            }
            else
            {
                scoreText.textContent = "LOSS!";
            }
        }
    }
    else
    {
        return;
    }
}