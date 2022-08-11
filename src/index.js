module.exports = function toReadable (number) {

    
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number <= 9)  return ones[number];  //0..9
    if (number === 0) return 'zero';  //decreases time from 3s to 2s
    if (number <= 19) return teens[number%10]; //11..19
    if (number < 100) {
        if(number % 10 === 0)  return tens[number/10]; //10..90
            else return `${tens[Math.floor(number/10)]} ${ones[number%10]}`  //11..99
    }
        else {  //>100
                if(number % 100 === 0) return `${ones[number/100]} hundred`;  //=100,200...
                    else{
                        if ((Math.floor(number/10))%10 === 0)   return `${ones[Math.floor(number/100)]} hundred ${ones[number%10]}`  //=101...909
                            else {
                                
                                if (number % 10 === 0)   return `${ones[Math.floor(number/100)]} hundred ${tens[(number/10)%10]}`; //=110...990
                                    else if(number-(Math.floor(number/100))*100 <= 19)  return `${ones[Math.floor(number/100)]} hundred ${teens[(number%100)%10]}`; //=111..919 
                                            else return `${ones[Math.floor(number/100)]} hundred ${tens[((number%100)-(number%10))/10]} ${ones[number%10]}`;  //121...999
                                }
                        }            
                            

        }
}
