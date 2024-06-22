module.exports = {
  apps: [
    // {
    //   name: 'p2p-site',
    //   exec_mode: 'cluster',
    //   instances: 1, // Or a number of instances
    //   script: './node_modules/nuxt/bin/nuxt.js',
    //   watch: true,
    //   args: 'start'
    // }
    {
      name: 'p2p-site',
      exec_mode: 'cluster',
      instances: 1, // Or a number of instances
      script: 'yarn',
      watch: true,
      args: 'start'
    }
  ]
}
