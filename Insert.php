<?php
include_once 'db.php';
if(isset($_POST['submit']))
{    
    $id = $_POST['id'];
     $budget_title = $_POST['budget_title'];
     $income_title = $_POST['income_title'];
     $incomeAmount = $_POST['incomeAmount'];
     $expense_title = $_POST['expense_title'];
     $expenseAmount = $_POST['expenseAmount'];
     $total_budget = $_POST['total_budget'];
     $current_balance = $_POST['current_balance'];
     

     $sql = "INSERT INTO users (budget_title,income_title,incomeAmount, expense_title, expenseAmount, total_budget, current_balance)
     VALUES ('$budget_title','$income_title'','$incomeAmount', '$expense_title', '$expenseAmount','$total_budget', '$current_balance')";
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>

 

           