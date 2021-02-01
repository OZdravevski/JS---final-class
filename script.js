console.log('Hello from JS');

// 01
function evenDashNum () {
    let number = prompt(`Enter your numbers here`);
    let string = number.toString()
    let result = [string[0]];
    for(let i = 1; i < string.length; i++)
  {
    if((string[i-1]%2 === 0) && (string[i]%2 === 0))
     {
      result.push('-', string[i]);
     }
    else
     {
      result.push(string[i]);
     }
     
  }
  console.log(result.join(''));
}
evenDashNum();

// 02
let myArr = document.getElementById('array');
let array = [];
for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 7 === 0){
        array.push(i);
    }
    console.log(array);
}
myArr.innerText = `Numbers divisible by 3 and 7 in array from 1 to 100: ${array}`


//03
let balance = document.getElementById('btnBal');
let deposit = document.getElementById('depoBtn');
let withdraw = document.getElementById('withdrBtn');
let exit = document.getElementById('exitBtn');
let para = document.querySelector('.paraOne');
console.log(para);

let currentBalance = 50000;
let username = prompt(`Enter your name`);
balance.addEventListener('click', function(){
    alert(`Hello ${username} your current balance is ${currentBalance} `);
});

deposit.addEventListener('click', function(){
    let depoinput = parseInt(prompt(`Enter amount of deposit:`));
    let result = currentBalance + depoinput;
    alert(result);
});

withdraw.addEventListener('click', function(){
    let withdraw = parseInt(prompt(`Enter amount of cash:`));
    let finalresult = currentBalance - withdraw;
    alert(finalresult);
});

exit.addEventListener('click', function(){
    para.textContent = `Thank you for using our services`;
});
