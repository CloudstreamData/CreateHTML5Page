
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var Disconnect = {};	// @button
	var Connect = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var options = new ContactFindOptions(), name, phoneNumber;
		options.filter = "";
		options.multiple = true;
		 
		var fields = ["name", "phoneNumbers"];
		 
		function onSuccess(contacts) {
		var res = "";
		for(var index = 0, len = contacts.length; index < len; index++) { name = contacts[index].name; name = name != null ? name.formatted : ""; phoneNumber = contacts[index].phoneNumbers; phoneNumber = phoneNumber != null && phoneNumber.length > 0 ? phoneNumber[0].value : "";
		 
		res += name + "   : " + phoneNumber + "n";
		}
		$$('textField2').setValue(res);
		 
		navView.goToView(3);
		}
		 
		function onError() {
		alert('onError!');
		}
		 
		navigator.contacts.find(fields, onSuccess, onError, options);
	};// @lock

	Disconnect.click = function Disconnect_click (event)// @startlock
	{// @endlock
		$$("navigationView1").goToNextView();
	};// @lock

	Connect.click = function Connect_click (event)// @startlock
	{// @endlock
		$$("navigationView1").goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("Disconnect", "click", Disconnect.click, "WAF");
	WAF.addListener("Connect", "click", Connect.click, "WAF");
// @endregion
};// @endlock
