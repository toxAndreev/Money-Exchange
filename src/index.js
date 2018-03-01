
module.exports = function makeExchange(currency) {

var coins = [50,25,10,5,1];
var coins_1 = {H:null, Q:null, D:null, N:null, P:null};
var change = {};
var i = 0,k = 0, res = 1;
if(currency>10000)
change = {error: "You are rich, my friend! We don't have so much coins for exchange"};
else
{
if(currency<=0)

change = {};

 else {


        for(var key in coins_1)
        {
        if(currency<coins[i])
        {
        i++;
        continue;
        }
       change[key] = Math.floor(currency/coins[i]);
       currency = currency - Math.floor(currency/coins[i])*coins[i];
        i++;
        if(!currency) break;
         }



 }

 }


    return change;
}
