const axios = require('axios');
const Context = require('../../data/Context');

axios.defaults.headers.common['Authorization'] = 'pk_4377274_YFO7D7D2NYK9Y5H9M6X7U46A9TRI6GF7';
axios.defaults.headers.common['Content-Type'] = 'application/json';

function moveToComplete(task) {
  let taskId = task.substr(task.lastIndexOf('/') + 1);
  axios({
    method: 'put',
    url: 'https://api.clickup.com/api/v2/task/' + taskId,
    data: {
      name: Context.task.title,
      content: null,
      status: 'complete',
      priority: null,
      time_estimate: null
    }
  });
}

module.exports = {
  moveToComplete: moveToComplete
};
