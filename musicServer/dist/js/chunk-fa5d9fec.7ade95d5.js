(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa5d9fec"],{"44e1":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-box-wrapper"},[s("search-box",{ref:"searchBox",on:{query:e.onQueryChange}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.query,expression:"!query"}],ref:"shortcutWrapper",staticClass:"shortcut-wrapper"},[s("scroll",{ref:"shortcut",staticClass:"shortcut",attrs:{refreshDelay:e.refreshDelay,data:e.shortcut}},[s("div",[s("div",{staticClass:"hot-key"},[s("h1",{staticClass:"title"},[e._v("热门搜索")]),s("ul",e._l(e.hotKey,(function(t,r){return s("li",{key:r,staticClass:"item",on:{click:function(s){return e.addQuery(t.k)}}},[s("span",[e._v(e._s(t.k))])])})),0)]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.searchHistory.length,expression:"searchHistory.length"}],staticClass:"search-history"},[s("h1",{staticClass:"title"},[s("span",{staticClass:"text"},[e._v("搜索历史")]),s("span",{staticClass:"clear",on:{click:e.showConfirm}},[s("i",{staticClass:"icon-clear"})])]),s("search-list",{attrs:{searches:e.searchHistory},on:{delete:e.deleteSearchHistory,select:e.addQuery}})],1)])])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],ref:"searchResult",staticClass:"search-result"},[s("suggest",{ref:"suggest",attrs:{query:e.query},on:{listScroll:e.blurInput,select:e.saveSearch}})],1),s("confirm",{ref:"confirm",attrs:{text:"是否清空所有搜索历史",confirmBtnText:"清空"},on:{confirm:e.clearSearchHistory}}),s("router-view")],1)},a=[],c=(s("99af"),s("fb6a"),s("5530")),i=s("d2e1"),o=s("d524"),n=s("e9fc"),h=s("1a93"),u=s("931e"),l=s("1925"),f=s("da71"),y=s("510f"),d=s("2f62"),v={mixins:[y["b"],y["c"]],data:function(){return{hotKey:[]}},computed:{shortcut:function(){return this.hotKey.concat(this.searchHistory)}},created:function(){this._getHotKey()},methods:Object(c["a"])({handlePlaylist:function(e){var t=e.length>0?"60px":"";this.$refs.searchResult.style.bottom=t,this.$refs.suggest.refresh(),this.$refs.shortcutWrapper.style.bottom=t,this.$refs.shortcut.refresh()},showConfirm:function(){this.$refs.confirm.show()},_getHotKey:function(){var e=this;Object(l["a"])().then((function(t){t.code===f["a"]&&(e.hotKey=t.data.hotkey.slice(0,10))}))}},Object(d["b"])(["clearSearchHistory"])),watch:{query:function(e){var t=this;e||setTimeout((function(){t.$refs.shortcut.refresh()}),20)}},components:{SearchBox:i["a"],SearchList:o["a"],Scroll:n["a"],Confirm:h["a"],Suggest:u["a"]}},p=v,m=(s("73b1"),s("2877")),w=Object(m["a"])(p,r,a,!1,null,null,null);t["default"]=w.exports},"4e29":function(e,t,s){},"73b1":function(e,t,s){"use strict";s("4e29")}}]);
//# sourceMappingURL=chunk-fa5d9fec.7ade95d5.js.map