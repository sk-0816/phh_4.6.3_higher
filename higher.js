// 高階関数
function myHigheFunction(func){
    console.log('myFunction');

    func();
}
//(普通の)関数
function outsideFunction (){
    console.log('outsideFunction');
}

myHigherFunction(outsideFunction);