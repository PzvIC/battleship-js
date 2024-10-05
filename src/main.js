createShip(4, 'battleship') //1
createShip(3, 'cruiser') //2
createShip(2, 'destroyers') //3 
createShip(1, 'submarines') //4

const table = document.getElementById('table')
const rulesBtn = document.getElementById('button')
const rulesCtn = document.getElementById('rules_container')

const randomTable = [[1,0,0,0,0,0,0,0,0,0],
                     [1,0,0,1,1,1,0,0,0,0],
                     [1,0,0,0,0,0,0,0,0,0],
                     [1,0,1,1,1,0,0,0,0,0],
                     [0,0,0,0,0,0,0,0,0,0],
                     [0,0,0,0,0,0,0,1,1,1],
                     [0,0,1,1,0,1,0,0,0,0],
                     [0,0,0,0,0,1,0,0,0,0],
                     [0,1,0,0,0,0,0,0,1,0],
                     [0,0,0,1,0,0,1,0,0,0]]

let finishTable = randomTable

createTable(table)

const btnTable = document.querySelectorAll('.btn')

rulesBtn.addEventListener('click', () => {
    rulesCtn.classList.toggle('invisible')
    if(rulesCtn.classList.contains('invisible')){
        rulesBtn.textContent = 'Show Rules'
    }else{
        rulesBtn.textContent = 'Hide Rules'
    }
})  

btnTable.forEach(button => {
    button.addEventListener('click', () => {
        let cords = button.textContent.split(' ')
        cords[0] = +cords[0]-1
        cords[1] = +cords[1]-1

        console.log(button.textContent)

        if(randomTable[cords[1]][cords[0]] === 1){
            finishTable[cords[1]][cords[0]] = 0
            console.log('clicked a ship')
            if(checkAdjacents (cords[1], cords[0])){
                button.textContent = 'Hit'
                button.classList.add('hit')
                button.disabled = true
            }else{
                button.textContent = 'Hit'
                button.classList.add('hit')
                button.disabled = true
            }
        }else{
            console.log('clicked the sea!')
            button.textContent = 'Miss!'
            button.classList.add('sea')
            button.disabled = true
        }
    })
});

function checkAdjacents (y, x){
    if(y - 1 >= 0){
        //check north
        if(randomTable[y-1][x] === 1){
            console.log('north')
            return true
        }
    }
    if(x + 1 <= 9){
        //check east
        if(randomTable[y][x+1] === 1){
            console.log('east')
            return true
        }
    }
    if(y + 1 <= 9){
        //check south
        if(randomTable[y+1][x] === 1){
            console.log('south')
            return true
        }
    }
    if(x - 1 >= 0){
        //check west
        if(randomTable[y][x-1] === 1){
            console.log('west')
            return true
        }
    }
    return false

}

function createShip(num, name){
    const type1 = document.createElement('div')
    const type2 = document.createElement('div')

    type1.id = `column_${num}`
    type2.id = `row_${num}`

    for (let i = 0 ; i < num ; i++){
        const button1 = document.createElement('button')
        const button2 = document.createElement('button')
        type1.appendChild(button1)
        type2.appendChild(button2)
    }

    document.getElementById(name).appendChild(type1)
    document.getElementById(name).appendChild(type2)

}

function createTable(tab){
    for(let x = 0 ; x < 10 ; x++){
        for(let y = 0 ; y < 10 ; y++){
            const button = document.createElement('button')
            button.textContent = `${y+1} ${x+1}`
            button.classList.add('btn')
            tab.append(button)
        }
    }
}





