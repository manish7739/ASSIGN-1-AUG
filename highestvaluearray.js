
		// function sLargest(arr) {
		// 	const arrSort = arr.sort((a, b) => a - b);
		// 	return arrSort[arr.length - 1];
		// }
		// var arr = [1, 5,445, 4, 9, 8,45,23,65];
		// console.log(sLargest(arr)); 

     const arr=[2,34,56,43,76,23,643,23,3]
    const large=(arr)=>{
      const sorted=arr.sort((a,b)=>a-b);
      return sorted[arr.length-1];
    }
    console.log(large(arr))
