
        var Vm=40,Vbm=50,St=70,Ap=55,Rr=60,Sham=110,mock,quant,ta,total=0,check=1;
    
        var adder=document.querySelector("#getme");
        adder.addEventListener("click",getMe);
        var pay=document.querySelector("#out");
        pay.addEventListener("click",paybill);
        var clear=document.querySelector("#clr");
        clear.addEventListener("click",cleartext);
    
        function getMe(){
            mock=document.querySelector("#sm").value;
            quant=parseInt(document.querySelector("#quantity").value);
            ta=document.querySelector("#writeme");
    
            if(isNaN(quant)){
                alert("Only Numbers Are Allowed");
                check=0;
            }
            else if(quant<0){
                alert("Negative Numbers Are Not Allowed");
                check=0;
            }
            else{
                check=1;
            }
    
            if(check == 1){
                switch(mock){
                    case "VM":
                        var vm=Vm*quant;
                        ta.value += "Virgin Mojito --- " + quant + " Qts = "+ vm +"$\r";
                        total+=vm;
                        quant.value="";
                        break;
                    case "VBM":
                        var vbm=Vbm*quant;
                        ta.value+= "Virgin Bloddy Mary --- " + quant + " Qts = "+ vbm +"$\r";
                        total+=vbm;
                        quant.value="";
                        break;   
                    case "ST":
                        var st=St*quant;
                        ta.value+= "Shirley Temple --- " + quant + " Qts = "+ st +"$\r";
                        total+=st;
                        quant.value="";
                        break;
                    case "AP":
                        var ap=Ap*quant;
                        ta.value+= "Arnold Palmer --- " + quant + " Qts = "+ ap +"$\r";
                        total+=ap;
                        quant.value="";
                        break;
                    case "RR":
                        var rr=Rr*quant;
                        ta.value+= "Roy Rogers --- " + quant + " Qts = "+ rr +"$\r";
                        total+=rr;
                        quant.value="";
                        break;
                    case "SHAM":
                        var sham=Sham*quant;
                        ta.value+= "SHAMPagne --- " + quant + " Qts = "+ sham +"$\r";
                        total+=sham;
                        quant.value="";
                        break;
                }
            }
        }
        function paybill() {
            ta.value += "--------------------------------------------------------------\r";
            ta.value += "Total Amount = " + total + "$ \rTax = 5%\rTax Amount Added = "+(total*(5/100))+"$\rAmount To Be Paid = "+ (total+(5/100)*total)+"$\rThanks For Purchase! :)\r";
            ta.value += "--------------------------------------------------------------\r";
            total = 0;
          }
          function cleartext () {
            ta.value = "";
          }
    