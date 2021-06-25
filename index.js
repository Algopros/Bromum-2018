function solution(N, Q, B, C) { 
    let buckets = [], moment = -1
    if ((!N || N==0) || !B || !C ) {
        return moment;
    }
    if (N == 1 && B.includes(0)) {
        buckets.concat()
        let occurrences = getOcurrences(B, 0) 
        moment = (occurrences == Q ? occurrences : moment) || moment
        return moment;
    }

    if (N == 1 && !B.includes(0)) {
       return moment;
    }

    if (getOcurrences(C, C[0]) == C.length && Q > N) {
       return Q;
    }

    for (let k = 0; k < B.length; k++) {
        let ball = B[k]
        buckets[ball] = buckets[ball] || []
        buckets[ball].push(C[k])
        if (getOcurrences(buckets[ball], C[k])  == Q) {
            moment = k;
            break
        } 
    }

    return moment

}

function getOcurrences(arr, val) {
    return arr.filter((v) => (v === val)).length
}