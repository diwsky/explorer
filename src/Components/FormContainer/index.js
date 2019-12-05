import React, { Component } from 'react';

/* Import Components */
import CheckBox from './checkbox.js';
import Input from './input.js';
import TextArea from './textarea.js';
import Select from './select.js';
import Button from './button.js';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: '',
      },

      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: [
        'Programming',
        'Development',
        'Design',
        'Testing',
      ],
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
  }

  handleSkillsCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection,
      );
    } else {
      newSelectionArray = [
        ...this.state.newUser.skills,
        newSelection,
      ];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray },
    }));
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => {
        return {
          newUser: {
            ...prevState.newUser,
            [name]: value,
          },
        };
      },
      () => console.log(this.state.newUser),
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: { ...prevState.newUser, age: value },
      }),
      () => console.log(this.state.newUser),
    );
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: { ...prevState.newUser, name: value },
    }));
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      response.json().then(data => {
        console.log('Successful' + data);
      });
    });
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: '',
      },
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            type={'text'}
            title={'Full Name'}
            name={'name'}
            value={this.state.newUser.name}
            placeholder={'Enter your name'}
            handleChange={this.handleFullName}
          />{' '}
          {/* Name of the user */}
          <Select
            title={'Gender'}
            name={'gender'}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={'Select Gender'}
            handleChange={this.handleInput}
          />{' '}
          {/* Age Selection */}
          <CheckBox />{' '}
          {/* List of Skills (eg. Programmer, developer) */}
          <TextArea /> {/* About you */}
          <Button /> {/*Submit */}
          <Button /> {/* Clear the form */}
        </form>
      </div>
    );
  }
}

export default FormContainer;
