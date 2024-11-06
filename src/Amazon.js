import React from 'react'

function Amazon() {
  return (
    <div className='form'>
        <form>
            <p class="signin">Sign in</p>
            <label class="label" for="email">Email or mobile phone number</label>
            <input type="text" name = "email"/>
            <input type ="button" class="button" value="Continue"/>
            <p>By continuing, you agree to Amazon's <a href='#'>Conditions of use</a> and Privacy Notice.</p>
        </form>
    </div>
  )
}

export default Amazon