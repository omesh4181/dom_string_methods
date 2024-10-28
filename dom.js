
// String Methods

// length()

let a = "omesh madiwal"
console.log( `length property returns the length of a string:` ,a.length)

// charAt()

let b = "madiwal"
console.log(`charAt() returns the character at a specified index in a string:`,b.charAt(0))


// at()

let d = "hyderabad"
console.log(`at() returns an indexed element from a string:`,d.at(-1))

// toUpperCase()

let e = "ram gopal varama"
console.log("toUpperCase() Converts string to upper case:",e.toUpperCase())

// // toLowerCase()

let f = "ALL THE BEST"
console.log("toLowerCase() Converts string to lower case:",f.toLowerCase())

// concat()

let firstname = "omesh"
let lastname = "madiwal"
let fullname = firstname.concat(" ",lastname)
var myname = lastname.concat(" ",firstname)
console.log("concat() joins two or more strings:",fullname)
console.log(myname)

// trim()

let g = "    omesh madiwal    "
console.log("trim() method removes whitespace from both sides of a string:",g.trim())

// trimStart()

let h = "     KPHBcolony     "
console.log("trimStart() removes whitespace only from the start of a string:",h.trimStart())

// trimEnd()

let i = "    10k coder    "
console.log("trimEnd() removes whitespace only from the end of a string:",i.trimEnd())

// repeat()

let j = "job"
console.log("repeat() method returns a string with a number of copies of a string:",j.repeat(5))

// replace()

let k = "Hyderabad,Chennai,Mumbai,Hyderabad"
console.log("replace() method replaces only the first match with specified value with another value in a string:",k.replace("Hyderabad","Bangalore"))

// replaceAll()

let l = "Hyderabad,Chennai,Hyderabad,Mumbai,Hyderabad,"
console.log("replaceAll() method replaces all the matchs with specified value with another value in a string:",l.replaceAll("Hyderabad","kuronnl"))

// startsWith()

let m = "FrontEnd:Html,CSS,Js"
console.log("startsWith() method returns true if a string begins with a specified value Otherwise it returns false:",m.startsWith("FrontEnd"))
console.log("startsWith() method returns true if a string begins with a specified value Otherwise it returns false:",m.startsWith("Html"))

// endsWith()

let n = "FrontEnd:Html,CSS,Js"
console.log("endsWith() method returns true if a string ends with a specified value Otherwise it returns false:",n.endsWith("FrontEnd"))
console.log("endsWith() method returns true if a string ends with a specified value Otherwise it returns false:",n.endsWith("Js"))

// match()

let o = "its raining in Hyderabad"
console.log("match() method returns an array containing the results of matching a string against a string",o.match("in"))

// // matchAll()

let p =  "I love cats. Cats are very easy to love. Cats are very popular."
console.log(p.matchAll("cats"))
console.log("matchAll() Returns all matches in a string:",p.matchAll("cats"))

// indexOf()

let text = "happy"
console.log("indexOf() method returns the position of the first occurrence of a value in a string,method returns -1 if the value is not found:",text.indexOf("e"))
console.log("indexOf() method returns the position of the first occurrence of a value in a string,method returns -1 if the value is not found:",text.indexOf("p"))


// search()

let r = "We are learning full Stack in 10k Coders"
console.log("search() method returns the index (position) of the first match inn a string:",r.search("in"))
