/**
 * 强制更新
 * cron=0 0-23/12 * * *
 */

const exec = require('child_process').exec;

if(process.env.PWD==='/ql/scripts'){
  exec("cd /ql/repo/danny-gh_buy360")
}

exec("git fetch --all; git reset --hard origin/main; git pull", (error, stdout, stderr) => {
  console.log(stdout.trim())
})

if(process.env.PWD==='/ql/scripts') {
  if (__dirname.indexOf('/ql/') > -1) {
    exec('ql repo https://github.com/danny-gh/buy360.git "jd_|jx_|getJDCookie|jdCookie" "activity|backup|jd_delCoupon" "^jd[^_]|USER|utils|function|sign|sendNotify|ql|JDJR"', (error, stdout, stderr) => {
      
      console.log(stdout.trim())
    })
  }
}
