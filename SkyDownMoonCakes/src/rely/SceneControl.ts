/**
 *
 * @author 
 *
 */
class SceneControl {
    private static nowScene:egret.DisplayObjectContainer;
    private static stage:egret.Sprite;
    /*获取当前对象实例*/
    public static getInstance() {
        if(!this.stage){
            this.stage = new egret.Sprite();
            egret.MainContext.instance.stage.addChild(this.stage);
        }
        this.stage.height=1008;
        return this.stage;
    }
    
    /*
     * 功能：清除当前实例所有的场景
     * */
    private static clearAllScene(): void {
        if(typeof this.stage == "undefined"){
            return;
        }
        this.stage.removeChildren();
    }
    
    public static run(scene) {
        this.nowScene = scene;
        this.clearAllScene();
        this.getInstance().addChild(scene);
    }
    //功能：返回当前使用的场景
    public static getNowScene(){
        return this.nowScene;
    }
  
}
