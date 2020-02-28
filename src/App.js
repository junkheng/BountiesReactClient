import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Login from './components/users/Login'
import SignUp from './components/users/SignUp'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import Completed from './components/todos/Completed'
import Deleted from './components/todos/Deleted'
import About from './components/pages/About'
import axios from 'axios'

import './App.css';

class App extends Component {
    state = {
        todos: [],
        token: '',
    }

    componentDidMount() {
        axios.get('http://localhost:8080/todo')
            .then(res => this.setState({ todos: res.data }))
        axios.post('http://localhost:8080/user/login', {
            email: 'test@test.com',
            password: 'password'
        }).then(res => this.setState({ token: res.data.token }))
    }


    // Need a better method to toggle true false below

    // Toggle complete
    toggleComplete = (_id) => {
        axios.defaults.headers.common['Authorization'] = localStorage.token
        // this.state.todos.map(todo => console.log(_id))
        axios.put(`http://localhost:8080/todo/${_id}`, {
            completed: true,
            updated_at: Date.now()
        }).then(res =>
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo._id === _id) {
                        todo.completed = !todo.completed // toggling for future revert
                    }
                    return todo
                })
            }))
    }

    // Toggle incomplete *not a DRY way but works for now*
    toggleIncomplete = (_id) => {
        axios.defaults.headers.common['Authorization'] = localStorage.token
        axios.put(`http://localhost:8080/todo/${_id}`, {
            completed: false,
            updated_at: Date.now()
        }).then(res =>
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo._id === _id) {
                        todo.completed = !todo.completed // toggling for future revert
                    }
                    return todo
                })
            }))
    }

    // Delete todo
    delTodo = (_id) => {
        axios.defaults.headers.common['Authorization'] = localStorage.token
        axios.put(`http://localhost:8080/todo/${_id}`, {
            deleted: true,
            updated_at: Date.now()
        }).then(res =>
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo._id === _id) {
                        todo.deleted = !todo.deleted // toggling for future revert
                    }
                    return todo
                })
            }))
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
        }).then(res => this.setState({ todos: [...this.state.todos, res.data] }))
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
                                <AddTodo addTodo={this.addTodo} />
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
                        <Route exact path="/deleted" render={props => (
                            <React.Fragment>
                                <Deleted
                                    todos={this.state.todos}
                                />
                            </React.Fragment>
                        )} />
                        <Route exact path="/completed" render={props => (
                            <React.Fragment>
                                <Completed
                                    todos={this.state.todos}
                                    toggleIncomplete={this.toggleIncomplete}
                                    delTodo={this.delTodo}
                                />
                            </React.Fragment>
                        )} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
