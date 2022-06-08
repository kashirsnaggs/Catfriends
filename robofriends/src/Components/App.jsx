import React , {Component} from 'react'
import Cardlist from '../Containers/Cardlist'
import SearchBox from '../Containers/SearchBox'
import Scroll from '../Containers/Scroll'
import './App.css'



class App extends Component {
 constructor() {
     super()
     this.state = {
         robots: [],
         searchfield: ''
     }
 }


componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> {
        return response.json();
    })
    .then(users => {
         this.setState({robots: users})
    })
   
}

 onSearchChange= (event) => {
  this.setState({ searchfield: event.target.value})
 }

  render(){
  const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })

if (this.state.robots.length === 0) {
    return <h1>Loading Cats</h1>
} else { 

  return (
      <div className='tc'>
          <h1 className='f1'>CATFRIENDS</h1>
          <SearchBox searchChange={this.onSearchChange}/>
         <Scroll>
             <Cardlist robots={filteredRobots}/>
         </Scroll>
    
   
    </div>
  );
}
}
}

export default App