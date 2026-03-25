import React from 'react'

const register = () => {
  return (
    <div>
      <h2>REGISTRATION PAGE</h2>
      <br></br>
      <p>First Name</p>
      <input type='text'></input>
      <p>Last Name</p>
      <input type='text'></input>
      <p>E-mail:</p>
      <input type='E-mail' placeholder='Enter E-mail'></input>
<p>Password:</p>
<input type='Password' placeholder='Enter Password'></input>
<p>Contact</p>
<input type='Contact'></input>
<br></br>
<label>Gender:</label>
<select name='Gender' id='Gender'>
  <option>Female</option>
  <option>Male</option>
</select>
<br></br>
<a href='Home'>Back To Home</a>

 </div>
  )
}

export default register
