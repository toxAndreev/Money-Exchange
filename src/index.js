
module.exports = function makeExchange(currency) {
//var H = 50, Q = 25, D = 10,N = 5, P = 1;
var coins = [50,25,10,5,1];
var change = [];
var letters = ["H:","Q:","D:","N:","P:"];
var i = 0, res = 1;
if(currency>1000)
change = {error: "You are rich, my friend! We don't have so much coins for exchange"};
else
{
if(currency<=0)

change = {};
 else {
    while(res){
    if(currency<coins[i])
    i++;
    else
    {
       change[i] = letters[i] + currency/coins[i];
       res = currency%coins[i];}


    }
 //change[0]='H:' +change[0];
 //change[1]='Q:' +change[1];
 //change[2]='D:' +change[2];
 //change[3]='N:' +change[3];
 //change[4]='P:' +change[4];
 }

 }

  console.log('----------------------------------------');
 console.log(change);
    return change;
}

