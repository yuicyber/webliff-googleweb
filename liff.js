window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        initializeApp(data);
	    });
};

function initializeApp(data) {

    document.getElementById('useridfield').textContent = data.context.userId;
    var uid = data.context.userId ;
    //var x = document.createElement("IFRAME");
    var x = document.getElementById("myFrame");
    var url = "https://script.google.com/macros/s/AKfycbw6_3wi4WHujpmNTScXz9hOuXN5Im72x5HTTuF75dfiSxzpqu0/exec" +"?lineid="+uid ;
    x.setAttribute("src", url);
    document.body.appendChild(x);
  

}

