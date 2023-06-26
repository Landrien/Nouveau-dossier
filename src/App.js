import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/MyNavbar';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Card from './Components/MyCard';

function App() {
  var [msg, setMsg] = useState('');
  const handleState = async () => {
    const requestOption = {
      method : 'POST'
    }
    const data = await window.fetch('/create', requestOption);
    const text = data.json().
    then((body) => { msg = body.username});
    setMsg(msg)
  }
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">     
            <Card picture="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvZDM3YTIwYTMwOGU0NGE0Y2ZiZTZlYzU0ODBhNWI4MjUvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw=="  
            price="5€" name="Nuggets x4"></Card>
          </div>
          <div class="col-4">
            <Card picture="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvYjcxMWQyYWZlMTc0Y2I5MWY0NTVjZGM4YTY5YmMwMjYvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw=="  
            price="7€" name="Menu Hamburger"></Card>  
          </div>
        </div>
      </div>
      <header className="App-header">    
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleState}>Click here</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}

export default App;
