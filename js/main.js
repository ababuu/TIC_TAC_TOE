let turn=true;
const cellContainer=document.querySelector('.grid-container');
const resultText=document.querySelector('.result-text');
const result=document.querySelector('.result');
const restartBtn=document.querySelector('.restart-btn');
const cells=document.querySelectorAll('.cell');
const winnerCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const GamePlay=(()=>{
    
    cells.forEach(cell=>{
    cell.addEventListener('click', (e)=>{
        const currentClass= turn ? 'x':'o';
        let cell=e.target;
        marker(cell,currentClass);
        changeTurn();
        hoverMarker();
        if(checkWinner(currentClass)){
            endGame(false);
        }
        else if(isDraw()){
            endGame(true);
        }
        
    }, {once:true});
    });
    

    const marker=(cell,currentClass)=>{
        cell.classList.add(currentClass);
    }

    const changeTurn= ()=>{
        turn= !turn;
    }

    const hoverMarker=()=>{
        cellContainer.classList.remove('x');
        cellContainer.classList.remove('o');
        if(turn){
            cellContainer.classList.add('x');
        }
        else{
            cellContainer.classList.add('o');
        }
    }

    const checkWinner= (currentClass)=>{
        return winnerCombos.some(combination=>{
            return combination.every(index=>{
                return cells[index].classList.contains(currentClass);
            })
        })
    }
    const endGame=(draw)=>{
        if(draw){
            resultText.textContent= `It's a Draw!`;
            result.classList.add('show');

        }
        else{
            resultText.textContent= `${turn ? 'O' : 'X'} Wins!`;
            result.classList.add('show');

        }
    }

    const isDraw=()=>{
        let cellsArray=Array.from(cells);
        return cellsArray.every(cell=>{
            return cell.classList.contains('x') || cell.classList.contains('o');
        })
    }

    
})()
window.onload=()=>{
    turn=true;
    cellContainer.classList.add('x');
}
