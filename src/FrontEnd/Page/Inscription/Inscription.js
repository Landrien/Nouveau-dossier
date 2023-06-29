import  React from 'react';
import './Inscription.css';


class Inscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            firstName:'',
            city:'',
            email:'',
            password:'' 
    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        if(event.target.id === 'nom'){
            this.setState({firstName: event.target.value});
        }
        else if (event.target.id === 'prenom') {
            this.setState({name: event.target.value});
        }
        else if (event.target.id === 'ville') {
            this.setState({city: event.target.value});
        }
        else if (event.target.id === 'userName') {
            this.setState({email: event.target.value});
        }
        else if (event.target.id === 'userPassword') {
            this.setState({password: event.target.value});
        }
        console.log('nom: '+this.state.firstName + '\n' + 'prenom: ' +this.state.name + '\n' + 'ville: ' + this.state.city + '\n' +
         'mail: '+ this.state.email +'mot de passe: '+ this.state.password);
      }

      handleSubmit = async (e) => {
        e.preventDefault();  
        let result = await fetch(
        'http://localhost:3000/register', {
            method: "post",
            body: JSON.stringify({ firstName: this.state.firstName, name: this.state.name, email: this.state.email, city: this.state.city,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            this.setState({});
        }
      }
        render() {
            return(<div class="container_i">
                    <div class="formContainer_i">
                        <div class="sliderSection_i">
                        </div>
                    
                        <div class="formSection_i">

                            <h1>Inscription</h1>
                            <div class="inputRow_i">
                                <div class="inputIncon_i">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="100" height="30"><path d="m5.207,5.619l.793.396v1.984c0,3.309,2.691,6,6,6s6-2.691,6-6v-1.984l.793-.396c.74-.37,1.207-1.126,1.207-1.954,0-.976-.648-1.834-1.587-2.101L13.698.224c-.557-.139-1.128-.209-1.698-.209s-1.14.07-1.698.209l-4.715,1.34c-.939.267-1.587,1.125-1.587,2.101,0,.827.467,1.584,1.207,1.954Zm9.793,2.381c0,1.654-1.346,3-3,3s-3-1.346-3-3v-.199c.833.123,1.818.214,3,.214s2.167-.091,3-.214v.199Zm-5.5-4.5c.188-.312.519-.485.858-.485.175,0,.352.046.514.143l1.128.677,1.128-.677c.161-.097.338-.143.514-.143.34,0,.671.173.858.485.284.474.131,1.088-.343,1.372l-1.643.985c-.158.095-.336.143-.514.143s-.356-.047-.514-.143l-1.643-.985c-.474-.284-.627-.898-.343-1.372Zm10.212,20.485c-.071.01-.144.015-.214.015-.734,0-1.376-.54-1.483-1.288-.31-2.171-1.9-3.814-4.081-4.433l-1.434,1.721,1.397,2.794c.277.554-.126,1.206-.746,1.206h-2.302c-.62,0-1.023-.652-.746-1.206l1.397-2.794-1.434-1.721c-2.181.619-3.771,2.262-4.081,4.433-.118.819-.884,1.382-1.697,1.273-.82-.117-1.391-.877-1.273-1.697.613-4.291,4.309-7.288,8.985-7.288s8.372,2.997,8.985,7.288c.117.82-.453,1.58-1.273,1.697Z"/></svg>
                                </div>
                                <input type="option" name="choisir" id="choisir" placeholder="Choisir"/>
                            </div>
                            <div class="inputRow_i">
                                <div class="inputIncon_i">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="100" height="30"><path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z"/><circle cx="12" cy="6" r="6"/></svg>
                                </div>
                                <input type="text" value={this.state.firstName} onChange={this.handleChange} name="nom" id="nom" placeholder="Nom"/>
                            </div>
                            <div class="inputRow_i">
                                <div class="inputIncon_i">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="30"><g id="_01_align_center" data-name="01 align center"><path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"/><path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z"/></g></svg>
                                </div>
                                <input type="text" name="prenom" value={this.state.name} onChange={this.handleChange} id="prenom" placeholder="Prénom"/>
                            </div>
                            <div class="inputRow_i">
                                <div class="inputIncon_i">
                                <svg id="Layer_1" height="512" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m4 13h3v2h-3zm5 2h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm-5-12h3v-2h-3zm5 0h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm15-3v16h-24v-21a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h5a3 3 0 0 1 3 3zm-10-5a1 1 0 0 0 -1-1h-10a1 1 0 0 0 -1 1v19h12zm8 5a1 1 0 0 0 -1-1h-5v15h6zm-4 7h2v-2h-2zm0 4h2v-2h-2zm0-8h2v-2h-2z"/></svg>
                                </div>
                                <input type="text" name="ville" value={this.state.city} onChange={this.handleChange} id="ville" placeholder="Ville"/>
                            </div>
                            <div class="inputRow_i">
                                <div class="inputIncon_i">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="100" height="30"><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/></svg>
                                </div>
                                <input type="email" name="userName" value={this.state.email} onChange={this.handleChange} id="userName" placeholder="Adresse Mail "/>
                            </div>
                            <div class="inputRow_i">
                                <div class="inputIncon_i">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="100" height="30"><path d="M19,8V7A7,7,0,0,0,5,7V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM13,18H11V14h2ZM17,8H7V7A5,5,0,0,1,17,7Z"/></svg>
                                </div>
                                <input type="password" name="userPassword" value={this.state.password} onChange={this.handleChange} id="userPassword" placeholder="Mot de Passe"/>
                            </div>                
                            <div class="btnRow_i">
                                <input type="button" value="S'inscrire" onClick={this.handleSubmit} class="btn_i" id="loginBtn" onclick="window.location.href = 'Projet.html';"/>
                            </div>

                            <h4>Utilisateur existant ?</h4>

                            <div class="btnRow_i">
                                <input type="button" value="Connexion" class="btn_i" id="signupBtn" onclick="window.location.href = 'Projet.html';"/>
                            </div>

                        </div>
                    </div>
                </div>  
            )
    }
}

export default Inscription;