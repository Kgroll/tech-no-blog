const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget } = require('../models');
const withAuth = require('../utils/auth.js');
const createBudget = require('./public/javascript/createbudget.js');

function createBudget (body, budget) {
    const budget = body;
    budget.push(budget);
    fs.writeFileSync(
      path.join(__dirname, "../data/budget.json"),
      JSON.stringify({ budget }, null, 2)
    );
    return budget;
    }






router.get('/budget', (req, res) => {
    Budget.findAll({
        attributes: [
            'id', 
            'budget_title', 
            'incomeName', 
            'incomeAmount', 
            'expenseName', 
            'expenseAmount',
            'total_budget',
            'current_balance',
            $sql ="INSERT INTO budget (id, budget_title, incomeName, incomeAmount, expenseName, expenseAmount, total_budget, current_balance) VALUES  ('$id', '$budget_title', '$incomeName', '$incomeAmount', '$expenseName', '$expenseAmount', '$total_budget', '$current_balance')"
        ]
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
/*
router.get('/budget/:id', (req, res) => {
    Budget.findOne({
        attributes: [
            'id', 'budget_title', 'incomeName', 'incomeAmount', 'expenseName', 'expenseAmount']
    })
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});*/
// create budget
router.post('/', withAuth, (req, res) => {
    Budget.create({
        budget_title: req.body.budget_title,
        user_id: req.session.user_id,
        incomeName: req.session.incomeName,
        incomeAmount: req.session.incomeAmount,
        expenseName: req.session.expenseName,
        expenseAmount: req.session.expenseAmount,
        total_budget: req.session.total_budget,
        current_balance: req.session.current_balance
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// edit budget
router.put('/:id', withAuth, (req, res) => {
    Budget.update(
        {
            budget_title: req.body.budget_title,
            incomeName: req.session.incomeName,
            incomeAmount: req.session.incomeAmount,
            expenseName: req.session.expenseName,
            expenseAmount: req.session.expenseAmount,
            total_budget: req.session.total_budget,
            current_balance: req.session.current_balance
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// delete budget
router.delete('/:id', withAuth, (req, res) => {
    Budget.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;