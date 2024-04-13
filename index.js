import {get, save} from './fsMethods.js'
import inquirer from 'inquirer'
import {promptExpense} from './expensesPrompts.js'

const main = async () => {
let waiting=true;
while(waiting){
    const action = await inquirer.prompt([
        {
        type:"list",
        name:"chosen",
        message:"What would you like to do?",
        choices:[
            {value:1,name:"Add expense"},
            {value:2,name:"View expenses"},
            {value:99,name:"Quit"}
        ]},
    ]);
    switch(action.chosen){
        case 1:
            await createExpense();
            break;
        case 2:
            await getExpenses();
            break;  
        case 99:
            waiting=false;
            break;  
        default:
            waiting=false;
            break;    
    }
};
console.log('stop spending :=)')
};

main();

async function createExpense(){
    console.log('================CREATING EXPENSE================')

    const newExpense = await promptExpense();
    
    console.log("New expense: ", newExpense);
    console.log(`Adding ${newExpense.expense_amount} to ${newExpense.name}`);

    const currentExpenses = await get('expenses');
console.log(currentExpenses)
    currentExpenses.push(newExpense);

    await save('expenses',currentExpenses);
}

async function getExpenses(){
    const currentExpenses = await get("expenses");
    console.log(currentExpenses);
}
