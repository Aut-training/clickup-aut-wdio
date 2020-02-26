const axios = require('axios');
const Context = require('../data/Context');

axios.defaults.headers.common['Authorization'] = 'pk_3019064_BLEAN6XFS8D2A6HN1AOM6U3YM55U28ZF';
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
