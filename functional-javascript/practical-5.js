var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]


function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(submittedUser) {
            return goodUsers.some(function(goodUser) {
                return goodUser.id === submittedUser.id;
            });
        });
    };
}

console.log(checkUsersValid(goodUsers));
  
module.exports = checkUsersValid;