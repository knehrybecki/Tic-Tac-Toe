import {player,computer,combineWinner,grids} from './script.js'
export {createCombineWinner}

const createCombineWinner = () => {
    const [click1,click2,click3,click4,click5] = player
    const [cpu1,cpu2,cpu3,cpu4,cpu5] = computer

    const a = parseInt(click1)
    const b = parseInt(click2)
    const c = parseInt(click3)
    const d = parseInt(click4)
    const e = parseInt(click5)
    const winPlayer = [a,b,c,d,e]

    const z = parseInt(cpu1)
    const x = parseInt(cpu2)
    const y = parseInt(cpu3)
    const zz = parseInt(cpu4)
    const xx = parseInt(cpu5)
    const winCpu = [z,x,y,zz,xx]

    combineWinner.forEach(item => {   
        const [hor1,hor2,hor3,ver1,ver2,ver3,crossWise1,crossWise2] = combineWinner

        const lineHorizontal = document.createElement('div')
        lineHorizontal.classList.add('line-horizontal')
        
        const lineVertical = document.createElement('div')
        lineVertical.classList.add('line-vertical')

        const crossWise = document.createElementNS("http://www.w3.org/2000/svg",'svg')
        crossWise.style.width = 400
        crossWise.style.height = 400
        crossWise.style.position = "absolute"

        const crossWisee = document.createElementNS("http://www.w3.org/2000/svg",'svg')
        crossWisee.style.width = 400
        crossWisee.style.height = 400
        crossWisee.style.position = "absolute"
        
        const lineSkew1 = document.createElementNS("http://www.w3.org/2000/svg",'line')
        lineSkew1.classList.add('cross-wise')
        lineSkew1.setAttribute('x1',160)
        lineSkew1.setAttribute('y1',160)
        lineSkew1.setAttribute('x2',550)
        lineSkew1.setAttribute('y2',550)
        crossWise.appendChild(lineSkew1)

        const lineSkew2 = document.createElementNS("http://www.w3.org/2000/svg",'line')
        lineSkew2.classList.add('cross-wise')
        lineSkew2.setAttribute('x1',250)
        lineSkew2.setAttribute('y1',150)
        lineSkew2.setAttribute('x2',-150)
        lineSkew2.setAttribute('y2',550)
        crossWisee.appendChild(lineSkew2)

        if (item.every((item => winPlayer.indexOf(item) > -1))) {
            if (item == hor1) {grids[item[0]].appendChild(lineHorizontal)}

            if (item == hor2) {grids[item[0]].appendChild(lineHorizontal)}

            if (item == hor3) {grids[item[0]].appendChild(lineHorizontal)}

            if (item == ver1) {grids[item[0]].appendChild(lineVertical)}

            if (item == ver2) {grids[item[0]].appendChild(lineVertical)}

            if (item == ver3) {grids[item[0]].appendChild(lineVertical)}
            
            if (item == crossWise1) {grids[item[0]].appendChild(crossWise)}

            if (item == crossWise2) {grids[item[0]].appendChild(crossWisee)}
        
            setTimeout(() => {
                alert('You Win !')

                window.location.reload()
            }, 1000);   
        }
        if (item.every( item => winCpu.indexOf(item) > -1)) {
            if (item == hor1) {grids[item[0]].appendChild(lineHorizontal)}

            if (item == hor2) {grids[item[0]].appendChild(lineHorizontal)}

            if (item == hor3) {grids[item[0]].appendChild(lineHorizontal)}

            if (item == ver1) {grids[item[0]].appendChild(lineVertical)}

            if (item == ver2) {grids[item[0]].appendChild(lineVertical)}

            if (item == ver3) {grids[item[0]].appendChild(lineVertical)}
            
            if (item == crossWise1) {grids[item[0]].appendChild(crossWise)}

            if (item == crossWise2) {grids[item[0]].appendChild(crossWisee)}

            setTimeout(() => {
                alert('Win Computer ! :(')
                
                window.location.reload()
            }, 1000);       
        }

    })
}
