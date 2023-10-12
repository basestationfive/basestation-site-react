
import axios from 'axios'

function DemoService (){

    this.address = 'https://jsonplaceholder.typicode.com/posts';
    
    this.getPosts = function() {
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
           console.log(response)
           return(response.data);
        })
        .catch(error => {
           console.log(error)
            return(null);
        })
    }
}
export default DemoService
