import React from 'react'

const Todo = () => {
  const func = () => {
    console.log('Hello, World!');
  }
    return (
    <div>
      <h1>TO DO APP</h1>
      <button onClick={func}>Press the button</button>
    </div>
  )
}

export default Todo