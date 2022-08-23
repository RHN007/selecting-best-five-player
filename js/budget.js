// Function for Input Field ; 

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

// Function for Text Field 

function getTextFieldData(inputTextId){
    const inputTextData = document.getElementById(inputTextId); 
    const textConvertedToNumber = parseFloat(inputTextData.innerText);
    return textConvertedToNumber;   
}


//Function Display Data Files : 
function displayData (inputId , value){
    const displayAmount = document.getElementById(inputId); 
    displayAmount.innerText = value;
    return
}

function totalExpense(){
    const perPlayerBudgetAmount = getInputField('per-player-budget')
    const numberOfPlayerSelected = getTextFieldData('total-selected-player') 
    const totalPlayerExpense = numberOfPlayerSelected  * perPlayerBudgetAmount; 
    return totalPlayerExpense; 
}




// Calculate Button 
document.getElementById('calculate').addEventListener('click', function(){
    const totalPlayerExpense = totalExpense()
    displayData('total-player-expense', totalPlayerExpense); 
})


//total calculate Button : 

document.getElementById('calculate-total').addEventListener('click', function(){
    const managerBudgetAmount = getInputField('manager'); 
    const coachBudgetAmount = getInputField('coach'); 

    const totalExpense = getTextFieldData('total-player-expense'); 
    const grandTotalExpense = managerBudgetAmount + coachBudgetAmount+ totalExpense
    
    displayData('total', grandTotalExpense)


})