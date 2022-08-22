function sockMerchant(n, ar) {
    let pairs = 0;
    let search = new Set();
    for(const sock of ar){
        if(search.has(sock)){
            pairs++;
            search.delete(sock);
        }
        else{
            search.add(sock);
        }
    }
    return pairs;
}
