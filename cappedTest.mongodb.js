use('testDB');

// 몽고 디비 JS 기반이라서, 문법 스타일이 JS 형식 //
// 컬렉션 이름 , { 속성1 : 값1, 속성2 : 값2}
db.createCollection(
    "cappedC", {capped : true, size : 10000}
);

use('testDB');
db.cappedC.insertOne(
    {x : 1}
);

use('testDB');
db.cappedC.findAll();