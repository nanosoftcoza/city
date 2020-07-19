// const simpleGitPromise = require('simple-git');
const simpleGitPromise = require('simple-git/promise')();


const gitHubUrl = `git@github.com:nanosoftcoza/city.git`;
// add local git config like username and email
// simpleGitPromise.addRemote('origin', gitHubUrl);
// Add all files for commit
simpleGitPromise.add('.')
    .then(
        (addSuccess) => {
            console.log(addSuccess);
        }, (failedAdd) => {
            console.log('adding files failed');
        });
// Commit files as Initial Commit
simpleGitPromise.commit('Updates from city')
    .then(
        (successCommit) => {
            console.log(successCommit);
        }, (failed) => {
            console.log('failed commmit');
        });
// Finally push to online repository
simpleGitPromise.push('origin', 'master')
    .then((success) => {
        console.log('repo successfully pushed');
    }, (failed) => {
        console.log('repo push failed');
    });