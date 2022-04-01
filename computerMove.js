import {
    gameBox,
    userSelection,
    grids,
    computer,
    createCircle,
    createCross,
    createCombineWinner
} from './script.js'

export {createComputerMove}

const createComputerMove = () => {
    const freeSpots = gameBox
        .map((spot, index) => spot ? null : index)
        .filter(spot => spot !== null)

    const random = freeSpots[Math.floor(Math.random()* freeSpots.length)]

    if (userSelection === "o") {
        grids[random].classList.add('computer')
        
        grids[random].appendChild(createCross())
        
        gameBox[grids[random].dataset.index] = "X"
        computer[computer.length] = grids[random].dataset.index  
    }      
    else {
        grids[random].classList.add('computer')
        grids[random].appendChild(createCircle())

        gameBox[grids[random].dataset.index] = "O"
        computer[computer.length] = grids[random].dataset.index       
    }  
  
    createCombineWinner() 

    grids.forEach(item => item.style.pointerEvents = null)
}
