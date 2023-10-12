import React, {Component} from 'react'
import DemoService from 'DemoService'

class PostListv2 extends Component {
 constructor (props){
 super (props)

 this.state = {
    posts: [],
    errorMsg: ''

    }
 }

    componentDidMount() {
        let demo = new DemoService();
        let postsv2 = demo.getPosts();
        this.setState({posts: postsv2} )
    }
    render () {
        const {posts, errorMsg} = this.state
        return (
            <div>
                List of Stuff 
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
               { errorMsg ? <div> {errorMsg} </div> : null }
            </div>
        )
    }
}

export default PostListv2