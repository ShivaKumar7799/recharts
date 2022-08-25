import React,{useState} from 'react'

function SplitNumber() {
  const [value, setValue] = useState("")
  let splitNumber = value;
  let splitLength = (splitNumber.toString().length);
  let afterSplitAdd = 0;
  splitNumber = splitNumber.toString().split("");
  for(let i=0; i< splitLength ; i++){
     afterSplitAdd += parseInt(splitNumber[splitNumber.length - 1]);
     splitNumber.pop();
  }
  return (
    <div>
      <div>
        <label htmlFor='inputBox' >Number : </label>
      <input id='inputBox' type='text' placholder="enter any number" onChange={(event) => setValue(event.target.value)}  />
      </div>
      Splitting Numbers and add those number = {afterSplitAdd}
    </div>
  )
}

export default SplitNumber