import {log} from 'console';
import inquirer from 'inquirer';

let currencyconverter={
    "USD":{
        "USD":1,
        "EUR":0.92,
        "PKR":278,
    },
    "EUR":{
        "EUR":1,
        "USD":1.08,
        "PKR":300
    },
    "PKR":{
        "PKR":1,
        "USD":0.0036,
        "EUR":0.0033,

    },

}
//INPUT PROMPT
const answer :{
    from:"USD"|"EUR"|"PKR",
    to:"USD"|"EUR"|"PKR",
    amount:number,

}=await inquirer.prompt(
    [
        {
            name:"from",
            message:"Enter your Currency which you want to convert",
            type:"list",
            choices:["USD","EUR","PKR"]
        },     
           {
            name:"to",
            message:"In which currency you want to convert?",
            type:"list",
            choices:["USD","EUR","PKR"]
        },
        {
            name:"amount",
            message:"enter your amount in number?",
            type:"number",
            choices:["USD","EUR","PKR"]
        }
    ]
)
const {from,to,amount}=answer;

//conversion
if( from && to && amount){
    let result =currencyconverter [from][to] *amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`)
}else{
    console.log("invalid operator select")
}
