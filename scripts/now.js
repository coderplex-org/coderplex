const nowCli = require.resolve('now/download/dist/now');
const spawn = require('cross-spawn');

export function runNow(args, cb) {
  const now = spawn(nowCli, args);

  let nowRes = '';

  now.stdout.on('data', data => {
    console.log(`> ${data}`);
    nowRes += data;
  });

  now.stderr.on('data', data => {
    console.log('NOW Error:');
    console.log(`> ${data}`);
  });

  now.on('close', code => {
    cb(code, nowRes);
  });
}

export function runNowAlias(baseArgs, { deployedUrl, aliasUrl }, cb) {
  console.log(`\nCreating alias for ${deployedUrl}\n`);
  const nowAliasArgs = [];
  if (aliasUrl) {
    nowAliasArgs.push('set');
    nowAliasArgs.push(deployedUrl);
    nowAliasArgs.push(aliasUrl);
  }
  const nowAlias = spawn(nowCli, ['alias', ...baseArgs, ...nowAliasArgs]);

  nowAlias.stdout.on('data', data => {
    console.log(`> ${data}`);
  });

  nowAlias.stderr.on('data', data => {
    console.log('NOW ALIAS Error:');
    console.log(`> ${data}`);
  });

  nowAlias.on('close', cb);
}
