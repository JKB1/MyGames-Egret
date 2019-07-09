var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FollowWeChat = (function (_super) {
    __extends(FollowWeChat, _super);
    function FollowWeChat() {
        var _this = _super.call(this) || this;
        _this.lock = true;
        _this.isHide = false;
        _this.skinName = "resource/eui_skins/FollowWeChat.exml";
        _this.addEventListener(eui.UIEvent.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    FollowWeChat.prototype.init = function () {
        this.y = -1008;
        egret.Tween.get(this).to({ y: 0 }, 700, egret.Ease.backOut);
        this.alreadyAttention.addEventListener(egret.TouchEvent.TOUCH_TAP, this.alAttentionFunc, this);
        this.nowAttention.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nowAttentionFunc, this);
        this.notRemind.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tickFunc, this);
        this.tick.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tickFunc, this);
    };
    //由于接口不大懂，现在关注和已经关注功能一样
    FollowWeChat.prototype.alAttentionFunc = function () {
        var _this = this;
        if (!this.lock) {
            return;
        }
        this.lock = false;
        egret.Tween.get(this).to({ y: -1008 }, 700, egret.Ease.backIn).call(function () {
            _this.parent.removeChild(_this);
        });
    };
    FollowWeChat.prototype.nowAttentionFunc = function () {
        var _this = this;
        // if(!this.lock){
        // 	return;
        // }
        // this.lock = false;
        egret.Tween.get(this).to({ y: -1008 }, 700, egret.Ease.backIn).call(function () {
            _this.parent.removeChild(_this);
        });
    };
    FollowWeChat.prototype.tickFunc = function () {
        this.isHide = !this.isHide;
        this.tick.visible = this.isHide;
    };
    return FollowWeChat;
}(eui.Component));
__reflect(FollowWeChat.prototype, "FollowWeChat", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FollowWeChat.js.map