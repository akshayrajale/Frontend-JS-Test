var array = [0,1,2,3,4,5,6,7,7,8,9,10];
function getUniqueArray(array){
        var uniqueArray = [];        
        
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }   
    
    var newArr = getUniqueArray(array);
    console.log(newArr);