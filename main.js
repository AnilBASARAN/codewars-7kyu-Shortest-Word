let findShort =(s)=> s.split(' ').map(x=> x.split('').length).sort((a,b)=> a-b )[0]



/*
7kyu Shortest Word


Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

BEST SOLUTİONS



function findShort(s){
  return Math.min(...s.split(' ').map(x => x.length));
}

---------------------------------------------------------------

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


---------------------------------------------------------------


function findShort(s){
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
}

---------------------------------------------------------------
