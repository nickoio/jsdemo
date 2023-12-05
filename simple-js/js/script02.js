// JSON object
var john = {
	"first_name"  :  "John",
	"last_name"   :  "Smith",
	"online"      :  true
}

console.log(john.first_name);
console.log(john["online"]);



// JavaScript object
var user = {
first_name: "JohnJJJ",
last_name : "SmithJJJ",
online    : true,
full_name : function() {
return this.first_name + " " + this.last_name;
}
};

console.log(user.last_name);
console.log(user.full_name());

//////////////////////////////////////////////////////////////////////////

var user_profile = {
"username" : "JohnSmith",
"social_media" : [
{
"description" : "twitter",
"link" : "https://twitter.com/johnsmith"
},
{
"description" : "facebook",
"link" : "https://www.facebook.com/JohnSmith"
},
{
"description" : "github",
"link" : "https://github.com/johnsmith"
}
] }


console.log(user_profile.social_media[1].description);
//////////////////////////////////////////////////////////////////////////

var obj = {"first_name" : "John", "last_name" : "Smith", "location" : "London"}
var s = JSON.stringify(obj)

console.log(s);

//////////////////////////////////////////////////////////////////////////