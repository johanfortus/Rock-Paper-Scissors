//using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

function pick(arr){
    let i = Math.floor(Math.random() * 3)
    return arr[i]
}


function rockPaperScissors(){
   let question = prompt('Rock Paper Scissors?').toLowerCase()
    let array = ['rock', 'paper', 'scissors']
    let computerAnswer = pick(array)
    console.log(`Computer: ${computerAnswer}`)
    console.log(`Player: ${question }`)
    if(computerAnswer === question){
        alert(`The computer picked ${computerAnswer}, the game is a TIE`)
    }   
    else if(computerAnswer === 'scissors' && question === 'paper'){
        alert(`The computer picked ${computerAnswer}, you LOST`)
    }
    else if(computerAnswer === 'scissors' && question === 'rock'){
        alert(`The computer picked ${computerAnswer}, you WON`)
    }
    else if(computerAnswer === 'paper' && question === 'rock'){
        alert(`The computer picked ${computerAnswer}, you LOST`)
    }
    else if(computerAnswer === 'paper' && question === 'scissors' || 'scissor'){
        alert(`The computer picked ${computerAnswer}, you WON`)
    }
    else if(computerAnswer === 'rock' && question === 'scissors' || 'scissor'){
        alert(`The computer picked ${computerAnswer}, you LOST`)
    }
    else if(computerAnswer === 'rock' && question === 'paper'){
        alert(`The computer picked ${computerAnswer}, you WON`)
    }
}

let button = document.querySelector('button')
button.addEventListener('click',function(e){
    e.preventDefault();
    rockPaperScissors()
})