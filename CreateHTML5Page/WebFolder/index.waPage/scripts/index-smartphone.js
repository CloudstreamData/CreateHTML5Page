
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var Disconnect = {};	// @button
	var Connect = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	Disconnect.click = function Disconnect_click (event)// @startlock
	{// @endlock
		$$("navigationView3").goToNextView();
	};// @lock

	Connect.click = function Connect_click (event)// @startlock
	{// @endlock
		$$("navigationView2").goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("Disconnect", "click", Disconnect.click, "WAF");
	WAF.addListener("Connect", "click", Connect.click, "WAF");
// @endregion
};// @endlock
