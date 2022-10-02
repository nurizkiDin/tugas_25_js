function sorting2(){
    const arr1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : "+arr1.join(','))

    var asc = arr1.sort()
    console.log("Ascending : "+asc.join(','))

    var desc = arr1.reverse()
    console.log("Descending : "+desc.join(','))

    var filter = arr1.filter(angka=>{
        return angka>10
    })
    console.log("Filter > 10 : "+filter.join(','))
}

sorting2()
