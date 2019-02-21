import Axios from 'axios';

function getMonday() {
  const d = new Date();
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  return new Date(d.setDate(diff));
}
const token = '6295b3dda612307276cccc7c8626b783';
const currentDate = new Date();

const url = 'https://www.toggl.com/api/v8/time_entries';
const params = {
  params: {
    start_date: getMonday().toISOString(),
    end_date: currentDate.toISOString(),
  },
  headers: {
    Authorization: `${'basic' + ' '}${btoa(`${token}:api_token`)}`,
  },
};
console.log(params);

Axios.get(url, params).then((resp) => {
  console.log(resp.data);
});
