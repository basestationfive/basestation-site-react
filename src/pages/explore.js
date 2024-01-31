import React from 'react';
import PostList from '../components/PostList';
import ActionButton from '../components/ActionButton';

const Explore = () => {
	return (
		<div class="pages">
			<h1>Explore...</h1>
			<div class="explore-project" >
				<h2>Project 1 - Axios</h2>
					<p>
						This project is to make a call from the React code Axios to get a list of posts from https://jsonplaceholder.typicode.com/posts
					</p>
				<PostList/>
			</div>
			<div class="explore-project" >				
				<h2>Project 2 - Call AWS Lambda</h2>
					<p>
						This project is to call and AWS Lambda to get all items in a DynamoDB table.
					</p>
					<ActionButton/>
			</div>
            
			<div class="explore-project" >
			<h2>Project 3 - Call AWS Lambda</h2>
					<p>
						Coming Soon...
					</p>
				

			</div>
		
		</div>
	);
};

export default Explore;
