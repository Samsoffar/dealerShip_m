

// Create the main Object dealership

var dealershipt = {
  
  
// Create the main inventory array with three sub arrays    
   inventory:[

       [],[],[]
        ],
        

   addCars: function(category,registration) {
       
       if (category  === 'sedan'){
           this.inventory.push(
                     reg:{
                           cat:'sedan',
                           available:true
                       }
               
                                );
           
           
       }
       
       if (category==='suv'){
        
        this.inventory[1].push(
                       {
                           registry:reg,
                           catgery:'sedan',
                           available:true
                           
                       }
               
                                );   
       }
       
       else if (cat==='sports'){
        
        this.inventory[0].push(
                       {
                           reg:reg,
                           cat:'sedan',
                           available:true
                           
                       }
               
                                );   
           
           
       }
   },
   
  
   checkStat: function(cat,reg){
       
       if (cat==='sedan'){
           var avail =this.inventory
           
           
           
           
       }
       if (cat==='sedan'){
           
       }
        else if (cat==='sedan'){
           
       }
       
   }
   
   
   
   
   
   
   
   
   
    
    
};

