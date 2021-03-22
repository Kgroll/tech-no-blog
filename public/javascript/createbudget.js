
//add income
  function addMoney() {
    var totalBudget = parseInt(document.getElementById("totalBudget").innerHTML);
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var incomeAmount = parseInt(document.getElementById('incomeAmount').value);
    if (incomeAmount == " " || isNaN(incomeAmount)) {
      alert("Please enter a valid number");
    }
    else {
      totalBudget += incomeAmount;
      currentBalance += incomeAmount;
      document.getElementById("totalBudget").innerHTML = totalBudget;
      
      document.getElementById("currentBalance").innerHTML = currentBalance;
      console.log(currentBalance);
    }
    //display added
  
   
    var incomeName = document.getElementById('incomeName').value;
    var incomeAmount = parseInt(document.getElementById('incomeAmount').value);
    
    var para = document.createElement ('p');
    para.innerHTML = `Income Name: ${incomeName} <br> Income Amount: ${incomeAmount}`;
    document.getElementById("addedMoney").appendChild(para);
    console.log(incomeName, incomeAmount);
  };
  
  //add expenses
  function addExpense() {
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var expenseName = document.getElementById('expenseName').value;
    var expenseAmount = parseInt(document.getElementById('expenseAmount').value);
    if (expenseName.length == " ") {
      alert("Please enter an expense name");
    }
    else if (expenseAmount == " " || isNaN(expenseAmount)) {
      alert("Please enter a valid expense amount");
    }
    else if (expenseAmount <= currentBalance) {
     currentBalance -= expenseAmount;
     document.getElementById('currentBalance').innerHTML = currentBalance
     var para = document.createElement ('p')
     para.innerHTML = `Expense Name: ${expenseName} <br> Expense Amount: ${expenseAmount}`;
     document.getElementById("addedExpenses").appendChild(para);
     console.log(expenseName, expenseAmount);
   }  
   else
    alert("Sorry your expense amount is higher thatn your current balance");
  }
  //display added expenses
  function addedExpense() {
    var currentBalance = parseInt(document.getElementById("currentBalance").innerHTML);
    var expenseName = document.getElementById("expenseName").value;
    var expenseAmount = parseInt(document.getElementById('expnseAmount').value);
    if (expenseName.length == " ") {
      alert("Please enter an expense name");
    }
    else if (expenseAmount == " " || isNaN(expenseAmount)){
      alert("Please enter a valid amount");
    }
    else if (expenseAmount <= currentBalance) {
      currentBalance -= expenseAmount;
      document.getElementById("currentBalance").innerHTML = currentBalance
      var para = document.createElement('p')
      para.innerHTML = `Expense name:  ${expenseName} <br> Expense Amount: ${expenseAmount}`;
      document.getElementById("addedExpense").appendChild(para);
      console.log(totalBudget);
    }    
    else {
      alert("Sorry your expense amount is higher than your current balance")
    };
    console.log(currentBalance);
  };