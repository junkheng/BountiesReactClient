import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Login from './components/users/Login'
import SignUp from './components/users/SignUp'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import About from './components/pages/About'
import axios from 'axios'

import './App.css';

class App extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/todo')
        // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.setState({ todos: res.data }))
        axios.post('http://localhost:8080/user/login', {
            email: 'test@test.com',
            password: 'password'
        }).then(res => this.setState({ token: res.data.token}))
        console.log(this)
    }

    // Toggle completion
    toggleComplete = (updated_at) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.updated_at === updated_at ) {
                todo.completed = !todo.completed // toggling
            }
            return todo
        })})
    }

    // Delete todo
    delTodo = (updated_at) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.updated_at !== updated_at)]})
    }

    // Add Todo
    addTodo = (task) => {
        const token = localStorage.token
        axios.defaults.headers.common['Authorization'] = token
        axios.post('http://localhost:8080/todo', {
            task,
            completed: false,
            deleted: false,
            date: Date.now(),
            updated_at: Date.now()
        }).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
    }

    // signUp = (email, password) => {
    //     axios.post('http://localhost:8080/user/signup', {
    //         email,
    //         password,
    //     }).then(res => this.setState({ token: this.state.token }))
    // }
    
    render() {
        localStorage.setItem('token', this.state.token)
        console.log(localStorage.token)
       return (
           <Router>
                <div className="App">
                    <div className="container">
                    <Header />
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos 
                                todos={this.state.todos} 
                                toggleComplete={this.toggleComplete}
                                delTodo={this.delTodo}
                            />
                        </React.Fragment>
                    )} />
                    <Route path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
