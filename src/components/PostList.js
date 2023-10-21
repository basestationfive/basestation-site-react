import React, {Component} from 'react'
import axios from 'axios'


class PostList extends Component {
 constructor (props){
 super (props)

 this.state = {
    posts: [],
    errorMsg: ''

    }
 }

 componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response)
        this.setState({posts: response.data} )
    })
    .catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retriving data'})
    })
 }



    render () {
        const {posts, errorMsg} = this.state
        return (
            <ul class="list-group post-list">
                {
                    posts.length ?
                    posts.map(post => <li class="list-group-item"key={post.id}>{post.title}</li>):
                    null
                }
               { errorMsg ? <li class="list-group-item"> {errorMsg} </li> : null }
            </ul>
        )
    }
}

export default PostList