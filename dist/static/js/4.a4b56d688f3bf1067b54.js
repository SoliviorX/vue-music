webpackJsonp([4],{NSSj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),i=e.n(s),o=e("kvay"),r=e("NYxO"),a=e("m40h"),c=e("T452"),u=e("PvFA"),d={data:function(){return{songs:[]}},computed:i()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},Object(r.c)(["disc"])),created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;this.disc.dissid?Object(a.c)(this.disc.dissid).then(function(n){n.code===c.a&&Object(u.d)(t._normalizeSongs(n.cdlist[0].songlist)).then(function(n){t.songs=n})}):this.$router.push("/recommend")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){Object(u.c)(t)&&n.push(Object(u.a)(t))}),n}},components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{title:this.title,bgImage:this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var m=e("VU/8")(d,f,!1,function(t){e("vB9x")},"data-v-11164450",null);n.default=m.exports},m40h:function(t,n,e){"use strict";n.b=function(){var t=r()({},c.b,{platform:"h5",uin:0,needNewCode:1});return Object(a.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},n.a=function(){var t=r()({},c.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return d.a.get("/api/getDiscList",{params:t}).then(function(t){return i.a.resolve(t.data)})},n.c=function(t){var n=r()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return d.a.get("/api/getCdInfo",{params:n}).then(function(t){return i.a.resolve(t.data)})};var s=e("//Fk"),i=e.n(s),o=e("woOf"),r=e.n(o),a=e("Gak4"),c=e("T452"),u=e("mtWM"),d=e.n(u)},vB9x:function(t,n){}});
//# sourceMappingURL=4.a4b56d688f3bf1067b54.js.map