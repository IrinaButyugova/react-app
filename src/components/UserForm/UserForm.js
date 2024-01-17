import React from "react";

/**
 * User Form.
 * @visibleName The Best Form Ever 🐙
 */
export default class UserForm extends React.Component {
    constructor(props) {
      super(props);
      var name = props.name;
      var nameIsValid = this.validateName(name);
      var age = props.age;
      var ageIsValid = this.validateAge(age);
      this.state = {name: name, age: age, nameValid: nameIsValid, ageValid: ageIsValid};
 
      this.onNameChange = this.onNameChange.bind(this);
      this.onAgeChange = this.onAgeChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    /**
	 * Validates user age. This method is not marked @public and is not visible in the style guide.
	 */
      validateAge(age){
          return age >= 0;
      }

    /**
	 * Validates user name.
     * @public
	 * @version 1.0.5
	 * @param {String} [name=''] New value for name
	 * @returns {boolean} true if name is valid, overwise - false
	 */
      validateName(name){
          return name.length > 2;
      }
      onAgeChange(e) {
          var val = e.target.value;
          var valid = this.validateAge(val);
          this.setState({age: val, ageValid: valid});
      }
      onNameChange(e) {
          var val = e.target.value;
          console.log(val);
          var valid = this.validateName(val);
          this.setState({name: val, nameValid: valid});
      }
 
      handleSubmit(e) {
          e.preventDefault();
          if(this.state.nameValid === true && this.state.ageValid === true){
              alert(`Имя: ${this.state.name} Возраст: ${this.state.age}`);
          }
      }
 
      render() {
          var nameColor = this.state.nameValid === true ? "green" : "red";
          var ageColor = this.state.ageValid === true ? "green" : "red";
          return (
              <form onSubmit={this.handleSubmit}>
                  <p>
                      <label>Имя:</label><br />
                      <input type="text" value={this.state.name} 
                          onChange={this.onNameChange} style={{borderColor:nameColor}} />
                  </p>
                  <p>
                      <label>Возраст:</label><br />
                      <input type="number" value={this.state.age} 
                          onChange={this.onAgeChange}  style={{borderColor:ageColor}} />
                  </p>
                  <input type="submit" value="Отправить" />
              </form>
          );
      }
  }