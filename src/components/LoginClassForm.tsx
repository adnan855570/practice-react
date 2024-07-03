import React, { Component, SyntheticEvent } from 'react'

export default class LoginClassForm extends Component {
    state = {
        email : '',
        password : ''
    }
    submitForm(ev : SyntheticEvent) {
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        console.log(target, this.state);
    }
  render(): React.ReactNode {
    return (
        <form action="" className='flex flex-col gap-4' onSubmit={this.submitForm.bind(this)}>
            <input onChange={(ev) => {
                this.setState({
                    email : ev.target.value,
                })
            }} type="email" placeholder='Enter your email'/>
            <input onChange={(ev) => {
                this.setState({
                    password : ev.target.value,
                })
            }} type="text" placeholder='Enter your password'/>
            <button>Submit</button>
        </form>
    )
  }
}
