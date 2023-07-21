//var myArray = [1,9,35,2,10,8,0];
// var myArray = [1,2,2,2,2,4,5,6,7,8,8,8];

// myArray = myArray.sort((a,b) =>{
//   if( (a >= 'a' && a <= 'z') || (b >= 'a' && b <= 'z') ){}
//   else
//     return a - b
// })
// console.log(myArray);
// for(let i = 0; i < myArray.length; i++){
  //   console.log(myArray[i]);
  // }
  
//=============================================================
// let numero  = 1;
// let numero1 = '';
// let numero2 = '';
// let numero3 = '';
// let numero4 = '';
// let numero5 = '';
// myArray = myArray.sort((a,b) =>{
//   return a - b
// });

// for(let i = 0; i < myArray.length; i++){
// 	if(myArray[i] === 1){
// 		numero1 = numero1 + '*';
// 	} else if(myArray[i] === 2){
// 		numero2 = numero2 + '*';
// 	} else if(myArray[i] === 3){
// 		numero3 = numero3 + '*';
// 	} else if(myArray[i] === 4){
// 		numero4 = numero4 + '*';
// 	} else if(myArray[i] === 5){
// 		numero5 = numero5 + '*';
// 	} 
// }

// for(let i = 0; i < 5; i++){
//   switch (i){
//     case 0:
// 	    console.log(`${i +1}:${numero1}`);
//       break;
//     case 1:
//       console.log(`${i +1}:${numero2}`);
//       break;
//     case 2:
//       console.log(`${i +1}:${numero3}`);
//       break;
//     case 3:
//       console.log(`${i +1}:${numero4}`);
//       break;
//     case 4:
//       console.log(`${i +1}:${numero5}`);
//       break;
//   }
// }
//=============================================================
// let Longest = 0;
// let NumberX = 0;
// let auxLongest = 0;
// let auxNumberX = 0;
// myArray.filter((dato, i) =>{
//   if(dato === myArray[i + 1]){
//     auxLongest++;
//     auxNumberX = dato;
//   }else{
//     Longest = auxLongest + 1;
//     NumberX = auxNumberX;
//     auxLongest = 0;
//     auxNumberX = 0;
//   }
// });

// console.log(`Longest: ${Longest}`);
// console.log(`Number: ${NumberX}`);
//=============================================================
// const result = 1001;
// function func(x=11){
//     result = x;
//     console.log(result);
// }
// func(0);
//=============================================================
// const x = 22+7+"b"+5+4;
// const x = "1"+1+1;
// console.log(x);
//=============================================================
setTimeout(function(){
  {
    console.log("Joe");
  }
},800);

setTimeout(function(){
  {
    console.log("Jimmy");
  }
},0);

const getDataFormDataBase = (function(err,data){
  console.log("in");
  setTimeout(function(){
    {
      console.log("emmy");
    }
  },7000);
});

console.log("Immy");