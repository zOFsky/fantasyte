var user = {
    username: "Andriy",
    password: "pass"
};
var database = [user,
{
    username: "Sally",
    password: "123"
},
{
    username: "John",
    password: "1234"
}];
var newsfeed = [
    {username: "Bobby", timeline: "Getting tired of this place"}, 
    {username: "SAlly", timeline: "Wake me up when september ends"}, 
    {username: "Johny", timeline: "When you go would you have the guts to say?"}
];
var userNamePrompt = prompt("what'your username?");
var passwordPrompt = prompt("what'your password?");

function signIn(user, pass){
    for (var i=0; i < database.length; i++){
        if (database[i].username === user &&
            database[i].password === pass){
                console.log(newsfeed);
            } else {
                alert("Sorry, wrong credentials!");
            }
    }
    
    // if (user === database[0].username && 
    // pass === database[0].password){
    //     console.log(newsfeed)
    // }
    // else {
    //     alert("Sorry, wrong credentials")
    // }
}
signIn(userNamePrompt, passwordPrompt);