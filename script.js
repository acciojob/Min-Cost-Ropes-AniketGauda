function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b)=>{
        return a-b;
    })

    let sm=0;
    while(arr.length!=1){
        let d = arr[0]+arr[1]
        sm+=d;
        arr.shift();
        arr.shift();
        arr.unshift(d);
        arr.sort((a,b)=>{
            return a-b;
        })
    }
    return sm;
  
}

module.exports=mincost;
