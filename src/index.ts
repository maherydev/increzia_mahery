console.log('EXERCICE 1');
function matrice(monTableau){
  monTableau = new Array(3);
  for (var i = 0; i < 4; i++)
  for (var j = 0 ; j<3; j++)
  for (var k = 0 ; k<3; k++)
  {
 monTableau[i,j,k] = new Array(i);
monTableau[i,j,k]=[i-3,j-1,k];

  }
  console.log(monTableau)
}
matrice()

console.log('EXERCICE 2');

var array = [0,3,-5,12,-18,20];

var sum = array.reduce(function(a, b){

    return a + b;

}, 0);
console.log(sum);


console.log('EXERCIE 2.2')
function renverser(){
  var monTableau = [0,3,-5,12,-18,-20];
  monTableau.reverse();
  console.log(monTableau) 
  return monTableau
}
renverser()


console.log('exo 3.1 : D')

console.log('exo 3.2 : A')
console.log('exo 3.3 : A')
console.log('exo 3.2 : carte manquante = 3 de trefle')




