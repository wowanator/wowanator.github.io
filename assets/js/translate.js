(function($){
$.fn.translate = function(opt){
	var sett = $.extend({default_lang: "en", langs: "#langs", source: "text"}, opt), attributes = {}, el = this;
	function init(lang){
		$(sett.langs+" option[value='"+lang+"']").attr("selected","selected");
		set_lang(sett.source[lang]);
	}
	function set_lang(t){
	if(el[0].nodeName.toLowerCase() == 'span') {
		$(el).text(function(){
			var nod = this.attributes[0].nodeName;
			if (nod.indexOf("data-trans-") === 0){
				var key = nod.split("-");
				if(t.hasOwnProperty(key[2])){
				return t[key[2]];
				}
			}
		});
		}
	else if (el[0].nodeName.toLowerCase() == 'a')
	{
		$(el).attr("href", (function(){
			var nod = this.attributes[0].nodeName;
			if (nod.indexOf("data-trans-") === 0){
				var key = nod.split("-");
				if(t.hasOwnProperty(key[2])){
				return t[key[2]];
				}
			}
		}))
	}
	}
	if($(sett.langs)[0].nodeName.toLowerCase() == 'select') {
	$(sett.langs).on("change", function(){
		var lang = $(this).val();
		if(sett.source.hasOwnProperty(lang)){
		set_lang(sett.source[lang]);
		}
	});
	} else {
	$(sett.langs).children().on("click", function(){
		var lang = $(this).attr("id");
		return false;
	});
	}
	return init(sett.default_lang);
};
})(jQuery);
