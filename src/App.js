// create your App component here
import React from 'react'

export default class App extends React.Component {

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        people: data.people
      }, () => console.log(this.state.people))
    })
  }

  constructor() {
    super()

    this.state = {
      people: []
    }
  }

  render() {
    return (
      <div>People in Space!
      {this.state.people.map(person => {
        return <div key={person.name}>{person.name}</div>
      })}
      </div>
    )
  }

}
