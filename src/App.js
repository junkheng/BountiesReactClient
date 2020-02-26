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
        axios.get('http://localhost:8080/todo')
        // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(res => this.setState({ todos: res.data }))
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
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VySUQiOiI1ZTQ0YmUyY2JmNmQ2ZTFhMGQyMzIzNjEiLCJpYXQiOjE1ODI2OTk0MTIsImV4cCI6MTU4MjcwMzAxMn0.LyjuVQAtY3d4RzTwM3i6l7lq4q2Seneb_0lh2Rvd04Q'
        axios.defaults.headers.common['Authorization'] = token
        axios.post('http://localhost:8080/todo', {
            task,
            completed: false,
            deleted: false,
            date: Date.now(),
            updated_at: Date.now()
        }).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
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
