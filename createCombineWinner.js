import { 
    combineWinner,
    gameBox,
    userSelection,
    grids
 } from './script.js'

import { computerSelection } from './computerMove.js'

export const createCombineWinner = () => { 
    const lineHorizontal = document.createElement('div')
    lineHorizontal.classList.add('line-horizontal')
    
    const lineVertical = document.createElement('div')
    lineVertical.classList.add('line-vertical')
    
    const crossWise = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    crossWise.style.width = 400
    crossWise.style.height = 400
    crossWise.style.position = 'absolute'
    
    const crossWisee = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    crossWisee.style.width = 400
    crossWisee.style.height = 400
    crossWisee.style.position = 'absolute'
    
    const lineSkew1 = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    lineSkew1.classList.add('cross-wise')
    lineSkew1.setAttribute('x1', 160)
    lineSkew1.setAttribute('y1', 160)
    lineSkew1.setAttribute('x2', 550)
    lineSkew1.setAttribute('y2', 550)
    crossWise.appendChild(lineSkew1)
    
    const lineSkew2 = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    lineSkew2.classList.add('cross-wise')
    lineSkew2.setAttribute('x1', 250)
    lineSkew2.setAttribute('y1', 150)
    lineSkew2.setAttribute('x2', -150)
    lineSkew2.setAttribute('y2', 550)
    crossWisee.appendChild(lineSkew2)

    const [hor1,hor2,hor3,ver1,ver2,ver3,crossWise1,crossWise2] = combineWinner

    const userWinnerCombination = combineWinner.find(
        combination => combination.every(fieldIndex => gameBox[fieldIndex] === userSelection))

    const cpuWinnerCombination = combineWinner.find(
        combination => combination.every(fieldIndex => gameBox[fieldIndex] === computerSelection))

    if (userWinnerCombination) {
        if (userWinnerCombination === hor1 ) { grids.item(0).appendChild(lineHorizontal) }

        if (userWinnerCombination === hor2) { grids.item(3).appendChild(lineHorizontal) }
    
        if (userWinnerCombination === hor3) { grids.item(6).appendChild(lineHorizontal) }
    
        if (userWinnerCombination === ver1) { grids.item(0).appendChild(lineVertical) }
    
        if (userWinnerCombination === ver2) { grids.item(1).appendChild(lineVertical) }
    
        if (userWinnerCombination === ver3) { grids.item(2).appendChild(lineVertical) }
    
        if (userWinnerCombination === crossWise1) { grids.item(0).appendChild(crossWise) }
    
        if (userWinnerCombination === crossWise2) { grids.item(2).appendChild(crossWisee) }

        if (cpuWinnerCombination) return 
        
        setTimeout(() => {
            window.location.reload()
            
            alert('You Win !')
        }, 1000); 
    }
    
    if (cpuWinnerCombination) {
        if (cpuWinnerCombination === hor1 ) { grids.item(0).appendChild(lineHorizontal) }

        if (cpuWinnerCombination === hor2) { grids.item(3).appendChild(lineHorizontal) }
    
        if (cpuWinnerCombination === hor3) { grids.item(6).appendChild(lineHorizontal) }
    
        if (cpuWinnerCombination === ver1) { grids.item(0).appendChild(lineVertical) }
    
        if (cpuWinnerCombination === ver2) { grids.item(1).appendChild(lineVertical) }
    
        if (cpuWinnerCombination === ver3) { grids.item(2).appendChild(lineVertical) }
    
        if (cpuWinnerCombination === crossWise1) { grids.item(0).appendChild(crossWise) }
    
        if (cpuWinnerCombination === crossWise2) { grids.item(2).appendChild(crossWisee) }

        setTimeout(() => {
            window.location.reload()

            alert('Computer Win!')
        }, 1000); 
     }

    if (gameBox.filter(item => item === '').length === 0  && !userWinnerCombination && !cpuWinnerCombination) {
        setTimeout(() => {
            alert("Remis!")

            window.location.reload()
        }, 500) 
    } 
}
