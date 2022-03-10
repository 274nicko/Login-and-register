import React from 'react'
import axios from 'axios'
import	'./Form.css'

export const Form = () => {
  const change1 = () =>{
    const container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  }
  const change2 = ()=>{
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }

  const eventR = (e) =>{
    e.preventDefault()
    let rname = document.getElementById('rname').value
    let ruser = document.getElementById('ruser').value
    let rpassword = document.getElementById('rpassword').value
    
    axios.post('https://backend-edw.herokuapp.com/usuario', {
      'username' : ruser,
      'password': rpassword, 
      'name': rname
          })
          .then(function (response) {
            console.log(response);
            alert(response.data.Message)
          })
          .catch(function (error) {
            console.log(error);
          });
  }

  const eventL = (e) =>{
      e.preventDefault()
      let uname = document.getElementById('usname').value
      let upassword = document.getElementById('uspassword').value

      axios.post('https://backend-edw.herokuapp.com/login', {
          'username': uname ,
          'password': upassword 
              })
              .then(function (response) {
                console.log(response);
                alert("Se logeo con exito!!")
              })
              .catch(function (error) {
                console.log(error);
              });
  } 

  return (
<div className="container" id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" id='rname'/>
			<input type="text" placeholder="Username" id='ruser'/>
			<input type="password" placeholder="Password" id='rpassword'/>
			<button onClick = { eventR }>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<span>or use your account</span>
			<input type="text" placeholder="Username" id='usname'/>
			<input type="password" placeholder="Password" id='uspassword'/>
			<a href="#">Forgot your password?</a>
			<button onClick={ eventL } >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" onClick={change1}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" onClick={change2}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
  )
}
