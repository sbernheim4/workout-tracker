/* This is where you declare routes for client side routing and specify which component corresponds to which route */
/* The components for each route should be created in Routes/LazyLoadRoutes.jsx as this will enable lazy loading */
/* Routes or components (like navbar) which you don't want to be lazy loaded can be imported directly in this
 * file and SHOULD NOT be declared in LazyLoadRoutes.jsx
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Navbar should appear on every page and so should not be lazy loaded
import Navbar from './../Components/Navbar/Navbar.jsx';

// Import lazy loaded route components
import {
	ErrorPage,
	ExerciseSelection,
	SetManager,
	WorkoutPlan
} from './LazyLoadRoutes.jsx';

export default function Routes() {

	return (
		<div>
			<Navbar />

			<Switch className="main">
				<Route exact path='/' component={ExerciseSelection}/>
				<Route path='/select-exercises' component={ExerciseSelection} />
				<Route path='/set-manager' component={SetManager} />
				<Route path='/workout-plan' component={WorkoutPlan} />
				<Route component={ErrorPage}/> {/* This route is run when no matches are found - It's your 404 fallbback */}
			</Switch>

			{/* <Link /> elements are in Navbar.jsx */}
		</div>
	);

}

