console.log("Szeretnék megtanulni programozni.")

let yes = "lua"

let no = [10,12]
console.log(no[0]*no[1])

let paros = 12
if (paros%2==0) {console.log("paros vagyok")} else {console.log("paratlan vagyok")}

console.log(" Hazudni Bűn".repeat(10))

for (let i=10;i<501;i = i+ 2) {
console.log(i)
}

function name(name) {
    console.log("hello",name)
}

let add = (a, b) => a + b;

function palindrom(string) {
    var str0 = /[\W_]/g
    var str1 = string.toLowerCase().replace(str0, '')
    var str2 = str1.split('').reverse().join('')
    return str1 === str2
  }
   
  console.log(palindrom("géza kék az ég"),palindrom("kész a szék"),palindrom("a cápa ette apáca"))
