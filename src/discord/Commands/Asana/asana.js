const asana = require('asana');
const { clientID, clientSecret } = require('../../../../config/asana_config.json');

module.export = class Asana {
  constructor(...args) {
    this.client = asana.Client.create().useAccessToken(clientSecret);
    this.taskHandler.bind(this);
    this.getTasks.bind(this);
  }

  this.client.users.me().then( me => {
    console.log(me);
  });

  taskHandler(...args) {
    switch(..args) {
      default:
        return "Invalid command"
    }
  }

  getTasks() {
    client.users.me()
    .then(user => {
      const userId = user.id;
      const workspaceId = user.workspaces[0].id;
      return client.tasks.findAll({
        assignee: userId,
        workspace: workspaceId,
        completed_since: 'now',
        opt_fields: 'id,name,assignee_status,completed'
      });
    })
    .then(response => { return response.data; })
    .filter(task => {
      return task.assignee_status === 'today' ||
        task.assignee_status === 'new';
    })
    .then(list => {
      console.log(util.inspect(list, {
        colors: true,
        depth: null
      }));
    })
    .catch(e => {
      console.log(e);
    });
  }
}
