"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[6782],{6782:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var i=a(36663),s=a(13802),r=a(78668),n=a(81977),h=(a(7753),a(7283),a(40266)),d=a(12688),o=a(81885),p=a(75291),c=a(26216),u=a(55068);let y=class extends((0,u.Z)((0,o.y)(c.Z))){update(t){this._strategy.update(t).catch((t=>{(0,r.D_)(t)||s.Z.getLogger(this.declaredClass).error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new d.c,this.container.addChild(this._bitmapContainer),this._strategy=new p.Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,a){return this.layer.fetchImage(t,e,a)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,i._)([(0,n.Cb)()],y.prototype,"_strategy",void 0),(0,i._)([(0,n.Cb)()],y.prototype,"updating",void 0),y=(0,i._)([(0,h.j)("esri.views.2d.layers.BaseDynamicLayerView2D")],y);const _=y}}]);
//# sourceMappingURL=6782.24d67f43.js.map