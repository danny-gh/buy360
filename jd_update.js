/**
 * 强制更新
 * cron=0 0-23/12 * * *
 */

const exec = require('child_process').exec;

exec("cd /ql/repo/danny-gh_buy360; git fetch --all; git reset --hard origin/main; git pull", (error, stdout, stderr) => {
  console.log(1, error)
  console.log(2, stdout.trim())
  console.log(3, stderr)
})

if (__dirname.indexOf('/ql/') > -1) {
  exec('ql repo https://github.com/danny-gh/buy360.git "jd_|jx_|getJDCookie" "activity|backUp|jd_delCoupon" "^jd[^_]|USER|utils"', (error, stdout, stderr) => {
    console.log(1, error)
    console.log(2, stdout.trim())
    console.log(3, stderr)
  })
}
