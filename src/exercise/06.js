// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useRef, useState } from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  }

  function handleChange(event) {
    const isValid = inputRef.current.value === inputRef.current.value.toLowerCase()
    setErrorMessage(isValid ? null : "Username must be lowercase");
    setCount(count + 1)
  }

  const inputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={inputRef} id="username" type="text" onChange={handleChange} />
        <p style={{ color: "green" }}>{count}</p>
        <p role="alert" style={{ color: "red" }}>{errorMessage}</p>
      </div>
      <button type="submit" disabled={Boolean(errorMessage)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
