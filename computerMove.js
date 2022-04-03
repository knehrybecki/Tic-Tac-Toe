import { 
    gameBox,
    userSelection,
    grids,
    createCircle,
    createCross
 } from './script.js'
 
import { createCombineWinner } from './createCombineWinner.js'

export let computerSelection = null

export const createComputerMove = () => {
    const freeSpots = gameBox
        .map((spot, index) => spot ? null : index)
        .filter(spot => spot !== null)

    const random = freeSpots[Math.floor(Math.random()* freeSpots.length)]

    if (userSelection === "o") {
        grids[random].classList.add('computer')       
        grids[random].appendChild(createCross())
        
        gameBox[grids[random].dataset.index] = "X"
        computerSelection = 'X'
    }      
    else {
        grids[random].classList.add('computer')
        grids[random].appendChild(createCircle())

        gameBox[grids[random].dataset.index] = "O"
        computerSelection = "O"
    }  
  
    createCombineWinner() 

    grids.forEach(item => item.style.pointerEvents = null)
}
