function sortPoker(john,uncle){
 let set = [...uncle].filter(x => x == '♠' || x == '♥' || x == '♣' || x == '♦')
   
 let ord = set.filter((x,i) => set.indexOf(x) == i ) //  ["♠", "♥", "♣", "♦"]
     
 let inArr = john.match(/([♠♥♣♦]{1})([\dJQKA]{1,2})/g) // john's hand in array - ["♦6", "♥2", "♠3", "♦5", "♠J", "♣Q", "♠K", "♣7", "♦2", "♣5", "♥5", "♥10", "♠A"]
 
 let jus = inArr.map((x,i) => x) // created so inArr is referencable in a later .map

 
let nums = inArr.map((x,i) => {let sl = x.slice(1);    
   return sl == 'J' ? jus[i][0].concat(11) : 
    sl == 'Q' ? jus[i][0].concat(12) : 
    sl == 'K' ? jus[i][0].concat(13) : 
    sl == 'A' ? jus[i][0].concat(14) : 
     jus[i][0].concat(+sl)}) // royalty to numbers  ["♦6", "♥2", "♠3", "♦5", "♠11", "♣12", "♠13", "♣7", "♦2", "♣5", "♥5", "♥10", "♠14"]                                                                                                                          
                                 
let swi = nums.map((x,i) => [x.slice(1) , x.slice(0,1)]) // returns ["6", "♦"],["2", "♥"],["3", "♠"],["5", "♦"] etc

let all = swi.sort((a,b) => a[0]-b[0]) // numbers sorted but not suits - ["2", "♥"],["2", "♦"],["3", "♠"] etc 

let hearts = ['♥'], spades = ['♠'], clubs = ['♣'], diamonds = ["♦"]
     
let back = all.map(x => x[0] == 11 ? ['J',x[1]] : 
                   x[0] == 12 ? ['Q',x[1]] : 
                   x[0] == 13 ? ['K',x[1]] : 
                   x[0] == 14 ? ['A',x[1]]  
                   : x) //  converts royal numbers back to letters

let puush = back.map((x,i) => x[1] == '♥' ? hearts.push(x) :
                               x[1] == '♠' ? spades.push(x) :
                               x[1] == '♣' ? clubs.push(x) :
                              diamonds.push(x)) // pushes pairs to individual array of each suit



let ut = ord.map((x,i) => x == hearts[0] ? hearts : 
               x == spades[0] ? spades :
               x == clubs[0] ? clubs : diamonds)// ["♣", Array(2), Array(2), Array(2)], ["♦", Array(2), Array(2), Array(2)], etc

let pup = ut.map((x,i) => x.shift()) // just mutates 'ut' and takes off suit indicators


let alm = ut.concat.apply([], ut).map(x => [x[1],x[0]])

return [].concat.apply([], alm).join('')
    
}