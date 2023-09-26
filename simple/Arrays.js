
const users = ['Sai', 'Rakesh', 'Praneeth', 'Vikas','Sairaj']

//console.log(users.indexOf('Rakesh'))
//console.log(users[2].length);

const teams = new Array('SRH','KKR','RR','RCB','GT')
teams.push('MI');
//console.log(teams); //[ 'SRH', 'KKR', 'RR', 'RCB', 'GT', 'MI' ]
//console.log(teams.includes('SRH')) // True

const arr = teams.join();
// console.log(arr);  //SRH,KKR,RR,RCB,GT,MI
//console.log(arr.split(',','2')) //[ 'SRH', 'KKR' ]
console.log(teams.slice(5,10)); //[ 'MI' ]

console.log(teams.splice(2))
console.log(teams);
