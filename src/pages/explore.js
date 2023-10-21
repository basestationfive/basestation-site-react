import React from 'react';
import PostList from '../components/PostList';

const Explore = () => {
	return (
		<div class="pages">
			<h1>Explore...</h1>
			<div class="explore-project" >
				<h2>Project 1 - Axios</h2>
					<p>
						This is a call using axios to get a list of posts...
					</p>
				<PostList/>
			</div>
			<div class="explore-project" >				
				<h2>Project 2 - TBD</h2>
					<p>
						this is cool
					</p>
			</div>
            
		
		</div>
	);
};

export default Explore;
