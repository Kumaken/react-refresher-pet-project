import axios from 'axios';

const LINE_TODAY_URL = 'https://today.line.me/id/portaljson';
const { CancelToken } = axios;

export const fetchLineNews = () => {
	let cancel;
	return {
		request: axios({
			url: `${LINE_TODAY_URL}`,
			method: 'get',
			cancelToken: new CancelToken((c) => {
				cancel = c;
			})
		}).then((response) => {
			return response.data;
		}),
		cancel
	};
};
