import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFillter from "./expense-tracker/components/ExpenseFillter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  const[selectedCategory,setSelectedCategory]=useState('');
  const [expenses,setExpenses]=useState([
    {id:1,description:'aaa',amount:10, category:'Utilities'},
    {id:2,description:'bbb',amount:10, category:'Utilities'},
    {id:3,description:'ccc',amount:10, category:'Utilities'},
    {id:4,description:'ddd',amount:10, category:'Utilities'},
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e)=> e.category === selectedCategory)
    : expenses;

  return (
  <div>
    <div className="mb-5">
      <ExpenseForm onSubmit={expense=>setExpenses([...expenses,{...expense,id:expenses.length+1}])}/>
    </div>
    <div className="mb-3">
      <ExpenseFillter onSelectCategory={category=>setSelectedCategory(category)} />
    </div>
    <ExpenseList 
      expenses={visibleExpenses} 
      onDelete={(id)=> setExpenses(expenses.filter((e)=>e.id !== id))}
    />
  </div>
  );
}

export default App
