import React from 'react'
import categories from '../categories';

interface Props{
    onSelectCategory:(category:string)=> void;
}
const ExpenseFillter = ({onSelectCategory}:Props) => {
  return (
    <select className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
        <option value="">All categories</option>
        {categories.map(c=><option key={c} value={c}>{c}</option>)}
    </select>
  )
}

export default ExpenseFillter
