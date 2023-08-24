/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("blog");

db.users.find();

db.users.insertOne(
    {
        name : {first : "Sang", last : "Lee"},
        email : "lsy2@naver.com",
        Tags : ["몽고디비수업", "점심메뉴 ?", "면? 밥?", "비와서 많이 안왔나?"]
    }
)

use("blog");

db.users.updateOne(
    {name : "SangYongLee"} , {$set : {password : "1234"}}
);

use("blog");
db.users.updateOne(
    { email : "lsy2@naver.com"}, {$set : {"name.last" : "LEE 변경함"}}
);

use("blog");
db.users.findOne(
    {"name.first" : "Sang"}
);


use("blog");
db.users.find(
    { _id : '64e6bb8a6091f22476af70fc'}
);