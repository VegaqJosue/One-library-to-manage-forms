$globalResult = "";
jQuery.customAjax = function(sForm, sUrl,iType){ 
    var sType ="";
    (iType === 0) ? sType = 'POST' : sType = 'GET';
    $.ajax
    ({
            url: sUrl,
            type: sType,
            data: $("#"+sForm).serialize(),
            async: false,
            dataType: 'json',
            success: function(data) {
                $globalResult = data;
            }
    });
    
};


