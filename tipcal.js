const bill = document.querySelector("#bill-amt");
const cash = document.querySelector("#cash-amt");
const tip = document.querySelector("#tip-per");
const button = document.querySelector("#check-btn");
const messg = document.querySelector("#message");
const messgtip = document.querySelector("#tipMessage");

// conditions for input
button.addEventListener('click', function totalAmount(){
   if(Number(bill.value)<0 || Number(cash.value)<0 || Number(tip.value)<0){
    messg.innerText="invalid";
   }else{
    billPercent();
    bill.value="";
    cash.value="";
    tip.value="";
    }
})

// working of logic
function billPercent(){
    if(Number(cash.value)>=Number(bill.value)){
        const total = cash.value-bill.value;
        const per = bill.value*(Number(tip.value))/100;
        const totalper = total+per;
        const finalAmt = (Number(bill.value)) + (Number(per));
        messgtip.innerText=`your tip amount is Rs.${per}, your total amount is Rs. ${finalAmt}`;
        messg.innerText=`Return amount is Rs. ${Math.floor(totalper)}`;
        messg.style.display="block";
        
        
    }
}
