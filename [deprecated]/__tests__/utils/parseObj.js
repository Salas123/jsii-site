module.exports.parseObj = (obj) => {
    let paths = [];
    let curr_path = [];

    helperFn(obj, paths, curr_path)

    return paths;
}

function helperFn(obj, paths, curr_path){
    let keys = Array.isArray(obj) ? getArrIndices(obj.length - 1) : Object.keys(obj);


    keys.forEach((key) =>{

            if(typeof key !== 'number')
                curr_path.push(key)

            if(typeof obj[key] === 'string' || typeof obj[key] === 'boolean' || typeof obj[key] === 'number'){
                curr_path.push(obj[key])
                paths.push(curr_path.join('.'))
                curr_path.pop()
            }
            else
                helperFn(obj[key], paths, curr_path)

        if(typeof key !== 'number')
            curr_path.pop()

    })

}


function getArrIndices(val){
    let arr = []
    let temp = val;
    while(temp >= 0){
        arr.push(val - temp)
        temp--
    }
    return arr
}
