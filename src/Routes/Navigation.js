import React, {Component} from 'react'
import Home from '../MainContainer/MainContainer';
import UserRoute from '../Routes/UserRoute'
import { BrowserRouter as Route, Link } from 'react-router-dom';

export default class Navigation extends Component {
	//This is a stateless component that's basically just a navbar with some links
    render() {
        return (
	          <div className='App'>
	          <nav>
	            <Link to='/'>Home</Link>{' '}
                <button><Link to='/users'>Users Deck</Link>{' '}</button>
	          </nav>
	            <Route exact path='/Home' component={Home}/>
                <Route path='/users' component={UserRoute}/>
	          </div>
    	)
	}
}