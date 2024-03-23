let f1=fetch("https://restcountries.com/v3.1/all")
let res=f1.then((data)=>data.json())
res.then((data1)=>foo(data1))
function foo(data){
    const array=data.filter((e)=>{if(e.continents=='Asia'){
        console.log(`Asian continents regions are ${e.region}`)
    }})
    const pop=data.filter((pop)=>{(pop.population<200000)
        console.log(`In  this ${pop.name["common"]} country has less than 2 lakh population `)}) 
    data.forEach((element,index,arr) => { 
        console.log(` ${element.capital} is capital and ${element.flag} is flag name for ${element.name["common"]} country`)
    }); 
    const totPop=data.reduce((acc,cur)=>{
        acc=acc+cur.population
        return acc
    },0)
  console.log(`The total population of countries are ${totPop}`)
   data.forEach((curr)=>{
    if(curr.currencies){
      if(curr.currencies.USD){
        console.log(` ${curr.name["common"]} use american dollar`)
      }
    }
   })
   
}

   
   


