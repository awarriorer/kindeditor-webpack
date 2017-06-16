	
	// module.exports = KindEditor;

	/*
		引用插件
	*/
	usePulgins_uncle(KindEditor);


	/*
		添加导出，uncle
		2017年6月15日23:24:12
	*/
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		module.exports = KindEditor;
	} else {
		window.KindEditor = KindEditor;
	}


})(window);
