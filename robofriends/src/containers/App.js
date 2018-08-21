import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox.js'
import './App.css'
import Scroll from '../components/Scroll.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
      }
/**/

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (robots.length === 0) {
      return <div className="loading">loading</div>
    } else {
        return (
        <div className="tc">
          <h1 className="title">RoboFriends</h1>
          <SearchBox searchChange={ this.onSearchChange }/>
          <Scroll>
            <CardList robots = { filteredRobots }/>
          </Scroll>
        </div>
      );
    }
  }

}


export default App;