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
    ajaxUtils.sendGetRequest=function (requestUrl,responseHandler) {
        var request =getRequestObject();
        request.onreadystatechange=function () {
            handleResponse(request,responseHandler);
        };
        request.open("GET",requestUrl,true);
        request.send(null);
        };
        function handleResponse(request,responseHandler) {
            if((request.readyState==4)&&(request.status==200)) {
                responseHandler(request);
            }
        }
        global.$ajaxUtils=ajaxUtils;
    })(window);

