import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/layout/Header'
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
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.setState({ todos: res.data }))
    }

    // Toggle completion
    toggleComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id ) {
                todo.completed = !todo.completed // toggling
            }
            return todo
        })})
    }

    // Delete todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    // Add Todo
    addTodo = (title) => {
        // axios.post('http://localhost:8080/todo',{
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            // headers: {
            //     'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VySUQiOiI1ZTQ0YmUyY2JmNmQ2ZTFhMGQyMzIzNjEiLCJpYXQiOjE1ODI2Mjk3MTUsImV4cCI6MTU4MjYzMzMxNX0.34Moj5BHzNo-BFPlErbR0EB4vZYgM6jKUkuDnN_tWcQ'
            // },
            title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data]}))
    }
    render() {
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
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
