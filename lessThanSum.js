let lessThanSum = (A, K)=>{
    let result = -1;
    let  subarray_start = 0,subarray_end = 0,subarray_sum = 0;
    
    for (let i = 0; i < A.length; i++){
        subarray_sum += i;
        subarray_end += 1;
        while (subarray_sum > K) {
            subarray_sum -= A[subarray_start]
            subarray_start += 1;
            result = Math.max(result, subarray_end - subarray_start)
       }
    }
    return result;
}
console.log(lessThanSum(A = [3, 1, 2, 1], K = 4))

console.log(lessThanSum(A = [1, 2, 3], K = 4))
//kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml