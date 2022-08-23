/*************** Function :input Field :  *********************/

function getInputField(inputID){
    const inputField= document.getElementById(inputID); 
    const inputAmount = parseFloat (inputField.value); 
    inputField.value = ''; 

    if(isNaN(inputAmount)){
        alert('Please input a valid number'); 
        return inputField.value = 0; 
    }

    return inputAmount
}


/*************** Function :Text Field :  *********************/

function getTextFieldData(inputTextId){
    const inputTextData = document.getElementById(inputTextId); 
    const textConvertedToNumber = parseFloat(inputTextData.innerText);
    return textConvertedToNumber;   
}


/*************** Function :Display Data Files :  *********************/
function displayData (inputId , value){
    const displayAmount = document.getElementById(inputId); 
    displayAmount.innerText = value;
    return
}

/*************** Function :total Expense *********************/

function totalExpense(){
    const perPlayerBudgetAmount = getInputField('per-player-budget')
    const numberOfPlayerSelected = getTextFieldData('total-selected-player') 
    if(numberOfPlayerSelected > 5){
        const totalPlayerExpense = 5  * perPlayerBudgetAmount; 
        return totalPlayerExpense
    }else{
        return totalPlayerExpense = numberOfPlayerSelected  * perPlayerBudgetAmount; 
    }
}


/**********************
  Total Player Expense
**********************/
document.getElementById('calculate').addEventListener('click', function(){
    const totalPlayerExpense = totalExpense()
    displayData('total-player-expense', totalPlayerExpense); 
})



/********************
     Grand total
*********************/

document.getElementById('calculate-total').addEventListener('click', function(){
    const managerBudgetAmount = getInputField('manager'); 
    const coachBudgetAmount = getInputField('coach'); 

    const totalExpense = getTextFieldData('total-player-expense'); 
    const grandTotalExpense = managerBudgetAmount + coachBudgetAmount+ totalExpense
    
    displayData('total', grandTotalExpense)


})