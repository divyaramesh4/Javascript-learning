hello(goodbye);
function hello(callback){
    setTimeout(function(){
        console.log("Hello :) ")
        callback();
    }, 3000);
}
function wait(){
    console.log("wait")
}

function goodbye(){
    console.log("Goodbye :(")
}
wait();