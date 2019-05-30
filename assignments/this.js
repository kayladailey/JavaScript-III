/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window - Points to everything (the forest)
* 2. Implicit - The dot principle. The one that you can just reference to the left of the dot 
* 3. Explicit - The one that we use .apply, .call and .bind for 
* 4. New Binding which we use for constructor functions 
*
* write out a code example of each explanation above
*/ 

// Principle 1

// code example for Window Binding

function saysHello(){
    console.log(this)
}

saysHello()
// Principle 2

// code example fvRor Implicit Binding
var me = {
    name: 'Kayla',
    age: 26,
    sayName: function(){
        console.log(this.name);
    }
};
// Principle 3

// code example for New Binding
var Animal = function(color,nametype){
this.color =color;
this.name=name;
this.type=type;
};
// Principle 4

// code example for Explicit Binding

var SayName=function(){
    console.log('My name is + this.name');
};

var Kayla = {
    name:'Kayla',
    age:26,
};
sayName.call(Kayla);