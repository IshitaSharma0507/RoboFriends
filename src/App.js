import React ,{Component}from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
 

class App extends Component {
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:""
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => this.setState({robots:users})); 
    }

    onSearchChange = (event)=>{
        this.setState({searchfield : event.target.value})
    
    }

    render(){
        const filterRobots =this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        })
        return !this.state.robots.length ?
             <h1>Loading....</h1>:
                 (
           <div className='tc'>
           <h1 className='f1'>RoboFriends</h1>
           <SearchBox searchChange={this.onSearchChange}/>  {/*this. coz it is an object */}
            <Scroll >
            <CardList robots={filterRobots} />
            </Scroll>
            </div>
             );
        
                 }
}
export default App;