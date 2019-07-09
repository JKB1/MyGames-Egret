var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneControl = (function () {
    function SceneControl() {
    }
    /*获取当前对象实例*/
    SceneControl.getInstance = function () {
        if (!this.stage) {
            this.stage = new egret.Sprite();
            egret.MainContext.instance.stage.addChild(this.stage);
        }
        this.stage.height = 1008;
        return this.stage;
    };
    /*
     * 功能：清除当前实例所有的场景
     * */
    SceneControl.clearAllScene = function () {
        if (typeof this.stage == "undefined") {
            return;
        }
        this.stage.removeChildren();
    };
    SceneControl.run = function (scene) {
        this.nowScene = scene;
        this.clearAllScene();
        this.getInstance().addChild(scene);
    };
    //功能：返回当前使用的场景
    SceneControl.getNowScene = function () {
        return this.nowScene;
    };
    return SceneControl;
}());
__reflect(SceneControl.prototype, "SceneControl");
//# sourceMappingURL=SceneControl.js.map