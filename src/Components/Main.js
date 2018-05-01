import React, {Component} from 'react'
import VacationPhotos from './VacationPhotos'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import Single from './Single'



class Main extends Component {

    state = { loading: true}

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }
    constructor(){
        super()
        
    }
    render() {
        console.log(this.props)
       return (

       
       <div>
           <h1>
               <Link to="/"> Zion National Park Trip</Link>
            </h1>

           <Route exact path = "/" render = {() => (
                   <div>
                       <VacationPhotos {...this.props}/>
                   </div> 
           )}/>
                  
                    
           <Route path = "/AddPhoto" render = {({history}) => (
               <AddPhoto {...this.props} onHistory={history}/>
           )}/> 

           <Route path="/single/:id" render = {(params) => (
               <Single loading={this.state.loading} {...this.props} {...params}/>
           )} />

               </div>

       )
   }
}
export default Main

