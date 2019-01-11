import React, { Component } from 'react';
import './style.scss';

class Form extends Component {

  constructor(props){
      super(props);

      this.state = {
        fields: {},
        errors: {},
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

      if(fields["email"].value == fields["email"].value ){
        formIsValid = false;
        errors["email"] = "Пользователь с таким e-mail уже существует";
      }

      if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');

        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Некорректный Email";
        }
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
      return (
        <div>
          <form className="Form" onSubmit= {this.contactSubmit.bind(this)}>
            <div className="col-md-6">
              <fieldset>
                <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                <span className="error">{this.state.errors["email"]}</span>
                <br/>
                <input refs="password" type="text" size="30" placeholder="Придумайте пароль" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
                <span className="errorPassword error">{this.state.errors["password"]}</span>
              </fieldset>
            </div>
            <label className = "add_checkrule">
            <input type = "checkbox"/>Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг.
            </label>
            <div className="col-md-12">
              <fieldset>
                <button className="Form__button" id="submit" value="Submit">Зарегистрироваться</button>
              </fieldset>
            </div>
          </form>
        </div>
      )
    }
}

export default Form;
