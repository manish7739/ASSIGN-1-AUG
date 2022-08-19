const arr1=[1,2,3,4,5,6]
 const cal=(arr)=>{
    return arr1.reduce((total,current)=>{
        return total+current;
    },0)
 }
 console.log(cal())