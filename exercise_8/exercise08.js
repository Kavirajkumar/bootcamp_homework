let people=["Greg","Mary","Devon","James"]
for(var i=0; i<people.length;i++){
    console.log(`people[${i}] =${people[i]}`);
}
console.log("people = " + people);
people.shift();
console.log("people = " + people);
people.pop();
console.log("people = " + people);
people.unshift("Matt");
console.log("people = " + people);
people.push("Kavitha");
console.log("people = " + people);
for(var i=0; i<people.length;i++){
    console.log(people[i]);
    if(people[i]=='Mary'){
        break;
    }
}
let newArr=people.slice(2);
console.log("slice= "+ newArr);
var index=people.indexOf("Mary");
console.log("Indexof Mary= "+ index);
index=people.indexOf("Foo");
console.log("Indexof Foo= "+ index);
console.log("people =" + people)
let splice=people.splice(2,1,'Elizabeth','Artie');
console.log("people =" + people);
let withBob=people.map(function(item){
    return item+"bob";
})
console.log("withBob =" + withBob);





