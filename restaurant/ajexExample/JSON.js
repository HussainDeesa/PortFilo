document.addEventListener("DOMContentLoaded",function(event){
    document.querySelector("button").addEventListener("click",function(){
        $ajaxUtils.sendGetRequest("name.json",function(res) {
            var message=" "+res.firstName+" "+res.lastName;
            if (res.likesChinese) {
                    message+="Likes Chinese Food ";
                }
                else {
                    message+=" Doesnt like ";
                }
                    message+=" and has ";
                    message+=res.numberOf;
                    message+=" dispalys for coding. ";
                
            
        document.querySelector("#content").innerHTML="<h2> Hello"+ message +"!!</h2>";
    });
});
});
