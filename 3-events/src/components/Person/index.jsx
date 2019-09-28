/* eslint no-console: 0 */
import React, { Component } from 'react';
import './Person.css';

// onChange, onSubmit, onClick, onKeyDown, onKeyPress, onKeyUp
class Person extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      errors: {
        firstName: false,
        lastName: false
      }
    };
  }

  handleOnChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      phone
    } = this.state;

    this.setState({
      errors: {
        firstName: firstName === '',
        lastName: lastName === '',
        email: email === '',
        phone: phone === ''
      }
    });

    console.log(this.state);
    console.log('ALGO');
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      errors
    } = this.state;

    return (
      <div className="Person">
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <p><strong>First name:</strong></p>
            <div>
              <input
                name="firstName"
                type="text"
                value={firstName}
                onChange={this.handleOnChange}
                className={errors.firstName ? 'error' : ''}
              />

              {errors.firstName && <p className="errorMessage">Required field</p>}
            </div>
          </div>

          <div>
            <p><strong>Last name:</strong></p>
            <p>
              <input
                name="lastName"
                type="text"
                value={lastName}
                onChange={this.handleOnChange}
                className={errors.firstName ? 'error' : ''}
              />

              {errors.firstName && <p className="errorMessage">Required field</p>}
            </p>
          </div>

          <div>
            <p><strong>Email:</strong></p>
            <p><input name="email" type="email" value={email} onChange={this.handleOnChange} /></p>
          </div>

          <div>
            <p><strong>Phone:</strong></p>
            <p><input name="phone" type="tel" value={phone} onChange={this.handleOnChange} /></p>
          </div>

          <p>
            <button type="submit">Save</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Person;
