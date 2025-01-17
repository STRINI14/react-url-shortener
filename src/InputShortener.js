import React, {useState} from 'react'

const InputShortener = ({setInputValue}) => {
  const [value, setValue] = useState("");

  const handleClick =() => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className='inputContainer'>
      <h1>URL Shortener</h1>
      <div>
        <input type="text" placeholder="Enter a link to shorten it" value={value} onChange={e => setValue(e.target.value)}/>
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortener
