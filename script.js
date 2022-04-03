import { createCombineWinner } from './createCombineWinner.js'
import { createComputerMove } from './computerMove.js'

const main = document.querySelector('.main')

export let gameBox = Array.from(new Array(9)).map(() => '')

export let userSelection = null

export const combineWinner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]

const renderGame = () => {
    const mainGame = document.createElement('div')
    mainGame.classList.add('main__game')
    mainGame.textContent = "Select Cross or Circle: "
    main.appendChild(mainGame)
    
    const game = document.createElement('div')
    game.classList.add('game')
    mainGame.appendChild(game)
    
    const gameSelectedItem = document.createElement('div')
    gameSelectedItem.classList.add('game__selected-item')
    game.appendChild(gameSelectedItem)
    
    const selectedButton = document.createElement('div')
    selectedButton.classList.add('selected')
    gameSelectedItem.appendChild(selectedButton)
    
    const buttonCross = document.createElement('div')
    buttonCross.classList.add('selected__button-cross')
    selectedButton.appendChild(buttonCross)

    const buttonCircle = document.createElement('div')
    buttonCircle.classList.add('selected__button-circle')
    buttonCircle.setAttribute("data-name","circle")
    selectedButton.appendChild(buttonCircle)
    
    const gameGrid = document.createElement('div')
    gameGrid.classList.add('game__grid')
    main.appendChild(gameGrid)
    
    const grid = document.createElement('div')
    grid.classList.add('grid')
    gameGrid.appendChild(grid)
}
renderGame()

const createGameGrid = index => {
    const grid = document.querySelector('.grid')
    const gridBox = document.createElement('div')
    gridBox.setAttribute("data-index", index)
    gridBox.classList.add('grid__box')
    gridBox.style.pointerEvents = 'none'
    grid.appendChild(gridBox)
}

export const createCross = () => {
    const cross = document.createElement('div')
    cross.classList.add('cross')

    return cross
}

export const createCircle = () => {
    const circle = document.createElement('div')
    circle.classList.add('circle')

    return circle
}

gameBox.forEach((item,index) => createGameGrid(index))

export const grids = document.querySelectorAll('.grid__box')

const buttonCross = document.querySelector('.selected__button-cross')
const buttonCircle = document.querySelector('.selected__button-circle')

buttonCross.appendChild(createCross())
buttonCircle.appendChild(createCircle())

const cross = document.querySelector('.cross')
const circle = document.querySelector('.circle')

buttonCross.addEventListener('click', () => {
    buttonCross.style.pointerEvents = 'none'
    buttonCircle.style.pointerEvents = null
    cross.classList.add('selection')
    circle.classList.remove('selection')

    userSelection = 'x'
                                
    grids.forEach(item => item.style.pointerEvents = null)
})

buttonCircle.addEventListener('click', () => {
    buttonCircle.style.pointerEvents = 'none'
    buttonCross.style.pointerEvents = null
    circle.classList.add('selection')
    cross.classList.remove('selection')

    userSelection = 'o'

    grids.forEach(item => item.style.pointerEvents = null)
})

const match = () => {  
    grids.forEach((item,index) => {
        item.addEventListener('click', event => {
            buttonCross.style.pointerEvents = 'none'
            buttonCircle.style.pointerEvents = 'none'

            circle.classList.add('disable')
            cross.classList.add('disable')     
       
            event.target.classList.add('player')
            event.target.appendChild(userSelection === 'x' ? createCross() : createCircle())
            event.target.firstChild.classList.add('selection')

            gameBox[index] = userSelection

            createCombineWinner() 

           grids.forEach(item => item.style.pointerEvents = 'none')  

            setTimeout(() => {
                createComputerMove(index)
            }, 500)
        })
    })
}
match()
