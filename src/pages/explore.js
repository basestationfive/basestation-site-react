import React from 'react';
import PostList from '../components/PostList';

const Explore = () => {
	return (
		<div class="pages">
			<h1>Explore the code!</h1>
            <p>
                <PostList/>
            </p>
		</div>
	);
};

export default Explore;
