import React,{useState} from 'react'
import Header from './Header'
import Body from './Body'
let Li=({text,idx,index,handleclick})=>{
  console.log(idx,index)
return <li 
onClick={()=>handleclick()}
style={{ color: idx === index ? "green" : "red" }}>{text}</li>;

}

const App = () => {
let [index,setindex]=useState('')
let items=["hello","polo","Jolo"]
  return (
    <div>
      <ul>
        {items.map((e, idx) => (
          <Li
          key={idx}
            text={e}
index={index}
idx={idx}
            handleclick={()=>setindex(idx)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App