import React from "react"
export default function() {
  const [data, setData] = React.useState(0)
  function minusFunction() {
    if(data>0){
    setData(data - 1)
    }
  }
  function addFunction() {
    setData(data + 1)
  }
  return (
    <div className='counterContainer'>
      <button onClick={minusFunction} className="minusButton">-</button>
      <div className="valueContainer">
        <h1 className="valueText">{data}</h1>
      </div>
      <button onClick={addFunction} className="addButton">+</button>
    </div>
  )
}