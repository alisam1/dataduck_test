import React, { Component } from 'react';
import './style.scss';

class Form extends Component {

  constructor(props){
      super(props);

      this.state = {
        fields: {},
        errors: {}
      }
    }

    state = {
      agree: false
    }

    handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Email

      if(!fields["email"]){
        formIsValid = false;
        errors["email"] = "Некорректный Email";
      }

      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["validEmail"] = "Некорректный Email";
        }
      }

      if(fields["email"].value == fields["email"].value){
          formIsValid = false;
          errors["emailValue"] = 'Учётная запись с указанным e-mail уже существует';
        }

      //Password

      if(typeof fields["password"] !== "undefined"){

        if (fields["password"].length < 4) {
          formIsValid = false;
          errors["password"] = "Неверный пароль";
        }
      }

      this.setState({errors: errors});
      return formIsValid;
    }

    //checkbox

    handleCheckboxChange = (e) => {
      this.setState({agree: e.currentTarget.checked})
    }

    contactSubmit(e){
      e.preventDefault();
      if(this.handleValidation()){
        alert("Form submitted");
      }else{
        alert("Form has errors.")
      }

    }

    handleChange(field, e){
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({fields});
    }

    render(){
      const {agree} = this.state;
      const borderColorEmail = this.state.fields["email"]===true?"#1C945D":"#E15433";
      const borderColorPassword = this.state.fields["password"]===true?"#1C945D":"#E15433";
      return (
        <div>
          <form className="Form" onSubmit= {this.contactSubmit.bind(this)}>
            <div className="Form__main">
              <fieldset>
                <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} style={{borderColor:borderColorEmail}}/>
                <span className="errorEmail" style={{display: this.state.errors["validEmail"]?'block':'none'}}>Некорректный Email</span>
                <br/>
                <input refs="password" type="password"  size="30" placeholder="Придумайте пароль" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} style={{borderColor:borderColorPassword}}/>
                <span className="errorPassword" style={{display: this.state.errors["password"]?'block':'none'}}>Неверный пароль</span>
              </fieldset>
            </div>
            <ul className="Form__choise">
              	<li><a href="#">P</a></li>
              	<li><a href="#">S</a></li>
              	<li><a href="#">E</a></li>
              </ul>
            <label className="checkbox">
              <input type="checkbox" onChange={this.handleCheckboxChange} />
              <div className="checkbox__text">Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг.</div>
            </label>
            <div className = "email__error" style={{display: this.state.errors["emailValue"]?'block':'none'}}>Учётная запись с указанным e-mail <span>уже существует</span></div>
              <fieldset>
                <button className="Form__button" id="submit" value="Submit" disabled = {!agree}>Зарегистрироваться</button>
              </fieldset>
          </form>
        </div>
      )
    }
}

export default Form;
