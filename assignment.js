// 

// kilometer to meter
 function kilometerToMeter(km) {
     if ( km <= 0) {
        var meter =" Your input is not valid. ";
     }
     else{
        meter = km * 1000;  
     }
     return meter;
 }

// budget calculation 
 function budgetCalculator( clock,phone,laptop) {
    
    if (clock < 0 || phone < 0 || laptop < 0 ) {
       var totalBudget = "Your input is not vaild";
    }
    else{
        var costOfClock = clock * 50;
        var costOfPhone = phone * 100;
        var costOfLaptop = laptop * 500;
        totalBudget = costOfClock + costOfPhone + costOfLaptop;
    }
    return totalBudget ;
    
}

// Hotel Cost
        function hotelCost(days) {
            if ( days <= 10 && days > 0 ) {
                 var cost = days * 100; 
                }
            else if ( days <= 20 && days > 10) {
                firstTenDaysCost = 10  * 100;
                remainingDaysCost = (days - 10) * 80;
                var cost = firstTenDaysCost + remainingDaysCost; 
                }
            else if (days > 20) {
                firstTenDaysCost = 10  * 100;
                secondTenDaysCost = 10 *80;
                remainingDaysCost = (days - 20) * 50;
                var cost = firstTenDaysCost + secondTenDaysCost + remainingDaysCost; 
                }
                else{
                    cost = "Your input is invalid";
                }
            return cost;
            }


// Finding the mega friend name

            function megaFriend(names) {
    var megaWord = names[0];
    for (let i = 0; i < names.length; i++) {
            var currentWord = names[i];
            if (currentWord.length > megaWord.length ) {
            megaWord = currentWord;
        }
     }
    return megaWord;
}