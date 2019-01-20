class DummyMetric {
    constructor(value){
        this.consecutiveZeros = this._consecutiveZeros(value);
        this.asciiSum = this._asciiSum(value);
        this.binary = this._binary(this.asciiSum);
    }

    // calculateMetrics(value){ 
    //     let that = this;
    //     let metric = new Promise(function(resolve, reject) {
    //         let sum = that._asciiSum(value);
    //         that.asciiSum = sum;
    //         resolve(sum);
    //       }); 

    //     return metric.then(sum => {
    //         that.binary = that._binary(sum);
    //         return that.binary;
    //     }).then(binary =>{
    //         that.consecutiveZeros = that._consecutiveZeros(binary);
    //         return  {
    //            ascii: that.asciiSum,
    //            zeros: that.consecutiveZeros,
    //            binary: that.binary,
    //         }
    //     });
    // } 

    _asciiSum(value){
        let sum = 0;
        [...value].forEach(c => (sum += c.charCodeAt()));
        return sum;
    }


    _binary(value){
        return value.toString(2);
    }


    _consecutiveZeros(value){
        let count = 0; // intitialize count
        let result = 0; // initialize max
    
        const str = value.toString();
        [...str].forEach((c) => {
          // Reset count when 1 is found
          if (c === '1') count = 0;
          // If 0 is found, increment count
          // and update result if count becomes
          // more.
          else {
            count++; // increase count
            result = Math.max(result, count);
          }
        });
        return result;
    }

    
}

export default DummyMetric;