import React from 'react';
import logo from '../logo.svg';

// StateLess(Dump) Component
// Arrow Function
// props에 객체로 넘어온다.
const Header = ({name, foo}) =>{

  // console.log(props.name);

  // const name = props.name;
  // const foo = props.foo;

  // const {name, foo} = props;

     return(
           <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              
              <div>
                My name is {foo}
              </div>
              
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>

              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>

        )
}

// 다른 곳에서 불러와서 사용할 수 있도록 export 사용.
export default Header;
