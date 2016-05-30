function calculate_median(arr) {
    //请勿改动函数名
    var i;
    var j = 0;
    var arr_a = new Array();
    /*提取偶数位为arr_a数组*/
    for (i = 0; i < arr.length; i++) {
        if (i%2==1) {
        arr_a[j] = arr[i];
        j++;
    }
}
    var arr_b=arr_a.sort(function(a,b){return a-b;}); //排序
    if(arr_b.length%2==0){                            //偶数个
        return (arr_b[parseInt(arr_b.length/2)]+arr_b[parseInt(arr_b.length/2)-1])/2;
    }else{                                             //奇数个
        return arr_b[parseInt(arr_b.length/2)];
    }
}

module.exports = calculate_median;








