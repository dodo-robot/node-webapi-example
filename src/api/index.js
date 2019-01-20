import { version } from '../../package.json';
import { Router } from 'express';
// import persons from './persons';
import metrics from './metrics';

export default ({ config, db }) => {
	let api = Router();

	// mount the persons resource
	// api.use('/persons', persons({ config, db }));

	// mount the metrics resource
	api.use('/metrics', metrics({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
