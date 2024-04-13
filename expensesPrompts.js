
import DatePrompt from 'inquirer-date-prompt'
import inquirer from 'inquirer'

inquirer.registerPrompt('date', DatePrompt)

export async function promptExpense() {
  return await inquirer.prompt(newExpensePrompt);
}

const newExpensePrompt = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter your name:',
  },
  {
    type: 'input',
    name: 'expense_amount',
    message: 'Enter amount of expense:',
  },
  {
    type: 'date',
    name: 'expense_date',
    locale: 'en-US',
    message: 'Enter date of expense:',
    format: {month:"short", hour:undefined,minute:undefined},
  },
];