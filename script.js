/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.


minha forma de fazer:
function calculateBalance(){
 const calculateIncomes = sum(family.incomes)
 const calculateExpenses = sum(family.expenses)

 const total = calculateIncomes - calculateExpenses
 if (total > 0){
     console.log('saldo positivo')
 }
 else {
     console.log('saldo negativo')
 }
 }

*/



 let family ={
  incomes:[200.30 , 300.22 , 550.78 , 700 , 1980 , 2000],
  expenses: [198.50 , 300.90 , 150.02 , 232.40 , 70 , 1850 ],
 }

function sum(array){
   let total = 0;

   for(let value of array){
       total += value
    }
    return total
}





function calculateBalance(){
 const calculateIncomes = sum(family.incomes)
 const calculateExpenses = sum(family.expenses)

 const total = calculateIncomes - calculateExpenses
 const itsOk = total >= 0
 
 let balanceText = "Negativo"
 if(itsOk){
 balanceText = "Positivo"
 }
 console.log(`Seu saldo é ${balanceText} : R$${total.toFixed(2)}`)
}


calculateBalance()