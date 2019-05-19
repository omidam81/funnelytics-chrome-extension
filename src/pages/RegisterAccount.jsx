import React, { Component } from "react";
import logo from '../logo.svg';
import { connect } from 'react-redux';
//import { userActions } from '../actions';


class RegisterAccount extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
            user: {
              email: '',
              password: '',
            },
            submitted: false
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { user } = this.state;
  
        //user.name = user.email;
        const { dispatch } = this.props;
        if (user.email && user.password) {
            //dispatch(userActions.register(user));
        }
      }

      

  render() {
      //if (this.props.isAuthenticated) return <Redirect to="/projects" />;
      return (
        <div className="splash-screen">
            <div className="splash-screen-main">

                <div className="splash-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-field">
                        <label>Email Address</label>
                        <input type="email" name="email" placeholder="example@example.com" onChange={this.handleChange}/>
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="***********" onChange={this.handleChange} />
                    </div>

                    <div className="form-field">
                        <input type="submit" value="Register" />
                    </div>
                    <a className="link-left" to="">Don’t have an account?</a>
                    <a className="link-right" to="">Forgot password?</a>
                </form>
            </div>
       </div>
      );
    }
  }

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterAccount);
export { connectedRegisterPage as RegisterAccount };