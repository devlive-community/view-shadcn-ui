const execSync = require('child_process').execSync;

// 执行 npm view 获取版本列表
const output = execSync('npm view view-shadcn-ui versions --json').toString();
const versions = JSON.parse(output);

// 过滤 alpha 版本
const alphaVersions = versions.filter(v => v.includes('alpha'));

// 逐个删除
alphaVersions.forEach(version => {
 try {
   execSync(`npm unpublish view-shadcn-ui@${version}`);
   console.log(`Unpublished ${version}`);
 } catch (error) {
   console.error(`Failed to unpublish ${version}:`, error.message);
 }
});
