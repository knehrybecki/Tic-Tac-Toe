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
    
    const crossWise2 = document.createElementNS("http://www.w3.org/2000/svg", 'svg')
    crossWise2.style.width = 400
    crossWise2.style.height = 400
    crossWise2.style.position = 'absolute'
    
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
    crossWise2.appendChild(lineSkew2)

    const userWinnerCombination = combineWinner.find(
        combination => combination.every(fieldIndex => gameBox[fieldIndex] === userSelection))

    const cpuWinnerCombination = combineWinner.find(
        combination => combination.every(fieldIndex => gameBox[fieldIndex] === computerSelection))
    
    if (userWinnerCombination) {
        const [user1,user2] = userWinnerCombination

       if (user1 + 1 === user2) { grids.item(user1).appendChild(lineHorizontal) }

       if (user1 + 3 === user2) { grids.item(user1).appendChild(lineVertical) }

       if (user1 + 4 === user2) { grids.item(user1).appendChild(crossWise) }

       if (user1 + 2 === user2) { grids.item(user1).appendChild(crossWise2) }
       
        if (cpuWinnerCombination) return 
        
        setTimeout(() => {
            window.location.reload()
            
            alert('You Win !')
        }, 1000); 
    }
    
    if (cpuWinnerCombination) {
        const [comp1,comp2] = cpuWinnerCombination
        
        if (comp1 + 1 === comp2) { grids.item(comp1).appendChild(lineHorizontal) }
 
        if (comp1 + 3 === comp2) { grids.item(comp1).appendChild(lineVertical) }
 
        if (comp1 + 4 === comp2) { grids.item(comp1).appendChild(crossWise) }
 
        if (comp1 + 2 === comp2) { grids.item(comp1).appendChild(crossWise2) }

        if (userWinnerCombination) return

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
