stringo = 'hello'
into = [6,3,4,1,7,2]

function capitalize(str){
    let cap_l = str[0].toUpperCase();
    str = cap_l + str.slice(1)
    return str
}


function reverse(str){
    let listo = []
    for (let i=0; i<str.length;i++){
        listo.push(str[i])
    }
    let restring = '';

    for (let h=listo.length-1; h>=0;h--){
        let n = listo[h]
        restring = restring.concat(n)
    }
    return restring
}



console.log(reverse(stringo))
console.log(capitalize(stringo))