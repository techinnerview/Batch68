import React from 'react';
import '../Styles/header.css';
import Modal from 'react-modal';
import { GoogleLogin } from 'react-google-login';
import ls from 'local-storage';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor:'brown'
    }
  };
  const secondStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor:'white'
    }
  };
  const thirdStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor:'white',
      height:'325px'
    }
  };
class Header extends React.Component
{
    constructor()
    {
        super();
        this.state = {
           loginModalIsOpen:false,
           userName:undefined,
           isLogged:false,
           image:undefined,
           email:undefined,
           password:undefined,
           createModalIsOpen:false,
           loginData:[]
        }
    }
    componentDidMount() {
        const user = localStorage.getItem('username');
        const img = localStorage.getItem('image');
        const credit = localStorage.getItem('creditUser');


        if(user && img ){
            this.setState({userName:user,isLogged:true});
        }
        if(credit)
          this.setState({userName: credit,isLogged:true,email:localStorage.getItem('creditEmail')});
       
      }
    
    handleLogin = () =>
    {
        this.setState({loginModalIsOpen:true})
    }
 
    handleLogs = (state, value) => {
        this.setState({ [state]: value });
      };

    handlechange = (event, state) => {
        this.setState({ [state]: event.target.value });
      };
    handleCreate = () =>
    {
        this.setState({createModalIsOpen:true,loginModalIsOpen:false})
    }
   
    handleConfirm = (state, value) => {
        const {
          firstName,
          lastName,
          email,
          password,
          mobileNumber,
          confirmpassword,
        } = this.state;
    
        if (
          password === confirmpassword &&
          firstName !== undefined &&
          lastName !== undefined &&
          email !== undefined &&
          password !== undefined &&
          mobileNumber !== undefined &&
          confirmpassword !== undefined
        ) {
          const inputObj = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            mobileNumber: mobileNumber,
            confirmpassword: confirmpassword,
          };
          console.log(this.state[state]);
    
          if (this.state.createModalIsOpen && value == false) {
            axios({
              method: 'POST',
              url: "http://localhost:2020/api/createUser",
              headers: { "Content-type": "application/json" },
              data: inputObj,
            })
              .then((response) => {
                console.log(response);
                this.setState({ signUpData: response.data.user });
              })
              .catch();
          }
    
          this.setState({
            userName: firstName,
            isLoggedIn: true,
            createModalIsOpen: false,
          });
          localStorage.setItem("username", firstName);
        } else {
          alert("password do not match");
        }
      };

      handleLogin=()=>{
        this.setState({ loginModalIsOpen: true });
      }
    
 
      handleloginvalid = () => {
        const { email, firstName, loginData, password,userName } = this.state;
        let createData;
        const obj = {
          email:email
      };
        axios({
          method: 'POST',
          url: `http://localhost:2020/api/login`,
          headers: { "Content-type": "application/json" },
          data : obj
        })
          .then((response) => {
            console.log(response);
            createData = response.data.users;
            console.log(createData);
            this.setState({ loginData: createData[0] });
            console.log("loginData",loginData);
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(email, password);
        if (loginData.length !== 0) {
          localStorage.setItem('creditUser',loginData.firstName);
          localStorage.setItem('creditEmail',loginData.email);
          if (loginData.email === email && loginData.password === password) {
            this.setState({
              userName: loginData.email,
              isLoggedIn: true,
              loginWithCredit: false,
            });
            alert('Login Successfull');
            } else {
            alert("Please verify type details");
          }
        }
        //localStorage.setItem('username', firstName);
      };


    handleClose = () =>
    {
        this.setState({loginModalIsOpen:false})
    }
    responseGoogle = (response) => {
        console.log(response);
        this.setState({userName : response.profileObj.name,image:response.profileObj.imageUrl, isLogged:true,loginModalIsOpen:false,email:response.profileObj.email})
        localStorage.setItem('username', response.profileObj.name);
        console.log(localStorage);
        localStorage.setItem('image',response.profileObj.imageUrl);
        localStorage.setItem('email',response.profileObj.email);
    }
    responseFacebook = (response) =>
    {
        this.setState({userName : response.name,isLogged:true,loginModalIsOpen:false})
        //localStorage.setItem('username',response.name);
    }

    handleLogout = () =>
    {
        this.setState({isLogged:false,userName:undefined})
        localStorage.clear();
    }
    handleHome = () => {
      this.props.history.push("/")
    };
    render()
    {
        const { loginModalIsOpen,isLogged,userName,image,email, createModalIsOpen,loginWithCredit,} = this.state;
        return(
            <div class="app_header">
                            <button class="headerE" onClick={this.handleHome}>e!</button>
                            {isLogged ?  <div>
                                {/* <img src ={image} /> */}
                                <input type="button" value={userName} id="userName" />
                                <input type="button" value="Logout" id="logout" onClick={this.handleLogout}/>
                            </div> : <div>
                            {/* <img src ="./Images/Pic1.png" /> */}
                                <input type="button" value="Login" id="login" onClick={this.handleLogin}/>
                                <input type="button" value="Create an account" id="create"  onClick={this.handleCreate}/>
                            </div>}
                            
                            <Modal
                                    isOpen={ loginModalIsOpen}
                                style={secondStyles}
                                > 
                                    <div>
                                        <div style={{height:'400px',width:'400px'}}>
                                        <div><span class="glyphicon glyphicon-remove" onClick={this.handleClose} style={{float:'right',margin:'2px'}}></span></div>
                                            <div>
                                              <span style={{fontSize:'15px',fontSize: '20px',textAlign: 'center',top: '10%',position: 'absolute',left: '22%'}}>Login using Social Accounts </span>
                                                <GoogleLogin
                                                    clientId="556708604486-80hsgn3l386mruhi23tvhp4rnls8pc6b.apps.googleusercontent.com"
                                                    buttonText="Continue with Google"
                                                    className="GoogleLogin"
                                                    onSuccess={this.responseGoogle}
                                                    onFailure={this.responseGoogle}
                                                    cookiePolicy={'single_host_origin'}
                                                />
                                                <FacebookLogin
                                                    appId="1786250474911552"
                                                    fields="name,email,picture"
                                                    textButton="Continue with Facebook"
                                                     callback={this.responseFacebook}
                                                    icon="fa-facebook"
                                                     />
                                                  <div style={{color:'grey',fontStyle:'normal',fontWeight:'bold',textAlign: 'center',marginTop:'-35px'}}>-----------------------OR------------------------</div>
                                                <div id="login-account">
                                                     <button
                                                        class="signUp-login"
                                                        onClick={() => {
                                                        this.handleLogs("loginModalIsOpen", false);
                                                        this.handleLogs("loginWithCredit", true);
                                                        }}
                                                    >
                                                        Login With credientials
                                                    </button>
                                                    <div>
                                                      <span style={{fontSize: '15px',fontWeight: '600',position: 'absolute',top: '80%',left: '17%'}}>Don't have account ?
                                                      <input type="button" value="Create an account" class="below_button"  onClick={this.handleCreate}/></span>
                                                      </div>
                                                    </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                            </Modal>

                            <Modal isOpen={ createModalIsOpen} style={secondStyles}>
          <div
            className="glyphicon glyphicon-remove"
            style={{ float: "right", margin: "-8px", cursor: "pointer" }}
            onClick={() => {
              this.handleLogs("createModalIsOpen", false);
            }}
          ></div>
          <div
          //  onClick={() => this.handleLogs("SignUpModalIsOpen", true)}
          >
            <div>
              <h1 style={{fontSize:'30px'}}>Sign Up</h1>
              <p>
                <b style={{marginLeft:'15px'}}>Please fill in this form to create an account.</b>
              </p>
              <hr style={{width:'439px',margin: '5px 25px 0 0px',border: 'solid 1px  #e1dedef5'}}/>
              <label class="lblSign">First Name</label>

              <div>
                <input class="inputsFirst"
                  type="type"
                  placeholder="First Name"
                  onChange={(event) => {
                    this.handlechange(event, "firstName");
                  }}
                />
              </div>
                <label class="lblSign">Last Name</label>
              <div>
                <input class="inputsSecond"
                  type="type"
                  placeholder="last Name"
                  onChange={(event) => {
                    this.handlechange(event, "lastName");
                  }}
                />
              </div>
              <label class="lblSign">Mobile Number</label>

              <div>
                <input class="inputsThird"
                  type="type"
                  placeholder="Mobile Number"
                  onChange={(event) => {
                    this.handlechange(event, "mobileNumber");
                  }}
                />
              </div>
              <label class="lblSign">Email</label>
              <div>
                <input class="inputsFourth"
                  type="type"
                  placeholder="Email"
                  onChange={(event) => {
                    this.handlechange(event, "email");
                  }}
                />
              </div>
              <label class="lblSign">Password</label>
              <div>
                <input class="inputsFifth"
                  type="password"
                  placeholder="password"
                  onChange={(event) => {
                    this.handlechange(event, "password");
                  }}
                />
              </div>
              <label class="lblSign">Confirm Password</label>

              <div>
                <input class="inputsSix"
                  type="type"
                  placeholder="password"
                  onChange={(event) => {
                    this.handlechange(event, "confirmpassword");
                  }}
                />
              </div>
              <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.handleConfirm(' createModalIsOpen', false);
                  }}
                >
                  PROCEED
                </button>
              </div>
            </div>
          </div>
        </Modal>

        <Modal isOpen={loginWithCredit} style={thirdStyles}>
          <div
            className="glyphicon glyphicon-remove"
            style={{ float: "right", margin: "10px", cursor: "pointer" }}
            onClick={() => {
              this.handleLogs("loginWithCredit", false);
            }}
          ></div>
          <div>
            <div>
              <div>
                <h1>Sign In</h1>
               

                <div>
                  <label for="email">
                    <b>Email</b>
                  </label>
                </div>

                <div>
                  <input
                    type="type" style={{margin: '0px 10px 5px 5px'}}
                    placeholder="Enter Email"
                    onChange={(event) => {
                      this.handlechange(event, "email");
                    }}
                  />
                </div>

                <div>
                  <label for="psw">
                    <b>Password</b>
                  </label>
                </div>

                <div>
                  <input
                    type="password" style={{margin: '0px 10px 5px 5px'}}
                    placeholder="Enter Password"
                    onChange={(event) => {
                      this.handlechange(event, "password");
                    }}
                  />
                </div>

                <div>
                  <button id="signUp-login" class="loginButton" onClick={this.handleloginvalid}>
                    Login
                  </button>
                  <div style={{fontWeight:'bold',marginTop:'16px'}}>--------------------------OR------------------------</div>
                  <div>
                            <span style={{fontSize: '15px',fontWeight: '600',position: 'absolute',top: '86%',left: '7%'}}>Don't have account ?
                            <input type="button" value="Create an account" class="below_button"  onClick={this.handleCreate}/></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>

            </div>
        )
    }
}

export default withRouter(Header);