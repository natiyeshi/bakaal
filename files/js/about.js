
const lang = document.querySelector("#lang")
lang.addEventListener("change",()=>{
    change(lang.value)
})


let change = value =>{
    document.querySelector("#top").innerHTML = language.top[value]
    document.querySelector("#head").innerHTML = language.head[value]
    document.querySelector("#about-txt").innerHTML = language.about[value]
    location.href = "#about"
} 

const navigator = document.querySelector(".navigator")
let language = {
    head : {
        eng: "bakaal pharmaceutical and wholasale PLC",
        amh:"ባቃል ፋርማሲይ ሃ/የ/የ/ማ"
     },
     top : {
        eng: "Bakaal PLC",
        amh:"ባቃል ሃላፊነቱ የተወሰነ የግል ማህበር"
     },
     about : {
        eng: `
        baakal  is a company that import and exports pharmaceutical equipments
        and other kinds of producs. it is created by abdi who has more than 6 years
        of experiance on the business. this company is has different branchs in
        different places and we really are looking forward to have business with you. `,
        amh:`ባቃል ሃ/የ/ማ የተለያዩ የ ፋርማሲይ እቃዎችችን የሚያስመጣ እና የሚያቀፋፍል ድርጅት ሲሆን የተመሰረተውም አብዲ በተባለ 
        በዚህ ስራ ላይ ከ 6 አመት እና ከዛ በላይ ልምድ ባለው ሰው ነው ፡፡ እናም ይሀ ካምፓኒ የተለያዩ ቦታዎች ቅርንችጫፍ ያለው ሲሆን ከማንኛውም
         ድርጅት ጋር ለመስራት ዝግጁ ነው፡፡`
     }
}
