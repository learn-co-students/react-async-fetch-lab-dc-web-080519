// create your App component here
import React from 'react'
const URL = 'http://api.open-notify.org/astros.json'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      astronauts: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(r => r.json())
    .then(astroObj => {
      this.setState({
        astronauts: astroObj
      });
    })
  }

  render () {
    return(
      <div>
        {this.state.astronauts}
      </div>
    )
  }
}

export default App;