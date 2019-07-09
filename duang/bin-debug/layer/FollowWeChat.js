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
        _this.lock = false; //防止多次点击
        _this.skinName = "resource/eui_skins/FollowWeChat.exml";
        _this.y = -1008;
        egret.Tween.get(_this).to({ y: 0 }, 700, egret.Ease.backOut);
        _this.attention.touchEnabled = true;
        _this.nowAttention.touchEnabled = true;
        _this.attention.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.attenFunc, _this);
        _this.nowAttention.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.nowAttenFunc, _this);
        return _this;
    }
    FollowWeChat.prototype.attenFunc = function () {
        var _this = this;
        if (this.lock) {
            return;
        }
        else {
            this.lock = true;
            egret.Tween.get(this).to({ y: -1008 }, 700, egret.Ease.backIn).call(function () {
                _this.parent.removeChild(_this);
            });
        }
    };
    FollowWeChat.prototype.nowAttenFunc = function () {
        var _this = this;
        if (this.lock) {
            return;
        }
        else {
            this.lock = true;
            egret.Tween.get(this).to({ y: -1008 }, 700, egret.Ease.backIn).call(function () {
                _this.parent.removeChild(_this);
            });
        }
    };
    return FollowWeChat;
}(eui.Component));
__reflect(FollowWeChat.prototype, "FollowWeChat", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=FollowWeChat.js.map