var resJson = {
	code:"0",
	data:null,
	msg:""
}

exports.getResJson = function(data, msg, code){
	if(typeof(data) != "undefined"){
		resJson.data = data;
	}
	if(typeof(msg) != "undefined"){
		resJson.msg = msg;
	}
	if(typeof(code) != "undefined"){
		resJson.code = code;
	}

	return resJson;
}