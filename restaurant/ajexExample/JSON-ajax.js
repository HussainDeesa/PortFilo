(function(global) {
    var ajaxUtils ={};
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        }
        else {
            global.alert("Ajax not Supoorted");
            return (null);
        }
    }
    ajaxUtils.sendGetRequest=function (requestUrl,responseHandler,isJsonResponse) {
        var request =getRequestObject();
        request.onreadystatechange=function () {
            handleResponse(request,responseHandler,isJsonResponse);
        };
        request.open("GET",requestUrl,true);
        request.send(null);
        };
        function handleResponse(request,responseHandler,isJsonResponse) {
            if((request.readyState==4)&&(request.status==200)) {
                responseHandler(request);
            }
            if(isJsonResponse==undefined){
                isJsonResponse=true;
            }
            if(isJsonResponse){
                responseHandler(JSON.parse(request.respnse.Text))
            }
            else{
                responseHandler(request.responseText)
            }
        }
        global.$ajaxUtils=ajaxUtils;
    })(window);

