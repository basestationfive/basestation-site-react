import React from 'react';

const Login = () => {
	return (
		<div class="pages">
				<h1>Explore...</h1>
			<div class="login">
			<h1>Login Here!</h1>
				<form class="row g-3">
					<div class="mb-3">
						<label for="FormControlInput1" class="form-label">Email address:</label>
						<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
					</div>
					<div class="mb-3">
						<label for="FormControlInput2" class="form-label">Password:</label>
						<input type="password" class="form-control" id="exampleFormControlInput1" placeholder="*******"/>
					</div>
					<div class="col-auto">
						<button type="submit" class="btn btn-primary mb-3">Login</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;