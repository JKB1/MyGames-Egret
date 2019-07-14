var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function s(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,s)}c((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return r([t,e])}}function r(n){if(i)throw new TypeError("Generator is already executing.");for(;c;)try{if(i=1,o&&(a=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(o,n[1])).done)return a;switch(o=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,o=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(a=c.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){c.label=n[1];break}if(6===n[0]&&c.label<a[1]){c.label=a[1],a=n;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(n);break}a[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(r){n=[6,r],o=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,o,a,s,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},AnimationLayer=function(t){function e(){var e=t.call(this)||this;return e.clickArray=new Array,e.mapTop=50,e.mapLeft=205,e.maxRow=8,e.maxCol=6,e.obj=null,e.lineArray=new Array,e.isEnd=!1,e.backgroundLayer=new BackgroundLayer,e.score=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.init,e),e}return __extends(e,t),e.prototype.init=function(){this.createElement()},e.prototype.createElement=function(){this.isEnd=!1,this.obj=new Array(this.maxRow);for(var t=0;t<this.maxRow;t++){this.obj[t]=new Array(this.maxCol);for(var e=0;e<this.maxCol;e++){var n=this.element(t,e);this.obj[t][e]=n,this.addChildAt(this.obj[t][e],5)}}this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveFunc,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.endFunc,this)},e.prototype.element=function(t,e){this.type=Math.floor(4*Math.random());var n=new ElementData,r=RES.getRes("animal"+this.type+"_png");return n.x=this.calX(e),n.y=this.calY(t),n.id=this.type,n.texture=r,n.anchorOffsetX=n.width/2,n.anchorOffsetY=n.height/2,n.row=t,n.col=e,n.touchEnabled=!0,n},e.prototype.calX=function(t){return 90*t+this.mapTop+45},e.prototype.calY=function(t){return 90*t+this.mapLeft+45},e.prototype.moveFunc=function(t){var e=t.target,n=!1;if(void 0!=e.id&&this.isSame(e)&&this.isSide(e))if(e.texture=RES.getRes("animalD"+e.id+"_png"),e.anchorOffsetX=e.width/2,e.anchorOffsetY=e.height/2,this.isExists(e)&&(n=!0),n)n&&this.isNeedRevoke&&this.revoke();else if(this.clickArray.push(e),this.clickArray.length>=2){var r,i=this.judgeDirection(e),o=this.clickArray[this.clickArray.length-2],a=Math.abs(o.row-e.row),s=Math.abs(o.col-e.col);0==a&&1==s?r=LineData.drawLineToRow(o,i):1==a&&0==s?r=LineData.drawLineToCol(o,i):1==a&&1==s&&(e.row<o.row&&e.col<o.col||e.row>o.row&&e.col>o.col?r=LineData.drawLineToRightBias(o,i):(e.row>o.row&&e.col<o.col||e.row<o.row&&e.col>o.col)&&(r=LineData.drawLineToLeftBias(o,i))),this.lineArray.push(r),this.addChildAt(r,8)}},e.prototype.isSame=function(t){return 0==this.clickArray.length?!0:this.clickArray[0].id==t.id?!0:!1},e.prototype.isSide=function(t){if(0==this.clickArray.length)return!0;var e=this.clickArray[this.clickArray.length-1],n=Math.abs(e.row-t.row),r=Math.abs(e.col-t.col);return 1==n&&0==r||0==n&&1==r||1==n&&1==r?!0:!1},e.prototype.isExists=function(t){for(var e=0;e<this.clickArray.length;e++)if(this.clickArray[e].row==t.row&&this.clickArray[e].col==t.col)return!0;return!1},e.prototype.judgeDirection=function(t){var e=this.clickArray[this.clickArray.length-2],n=Math.abs(e.row-t.row),r=Math.abs(e.col-t.col);return 0==r?t.row>e.row?new DirectionData(0,1):new DirectionData(0,-1):0==n?t.col>e.col?new DirectionData(1,0):new DirectionData(-1,0):1==n&&1==r?t.row>e.row&&t.col>e.col?new DirectionData(1,1):t.row>e.row&&t.col<e.col?new DirectionData(-1,1):t.row<e.row&&t.col>e.col?new DirectionData(1,-1):new DirectionData(-1,-1):void 0},e.prototype.isNeedRevoke=function(t){if(this.clickArray.length<2)return!1;var e=this.clickArray[this.clickArray.length-2];return e.row==t.row&&e.col==t.col?!0:!1},e.prototype.revoke=function(){var t=this.clickArray[this.clickArray.length-1],e=this.lineArray[this.lineArray.length-1];t.texture=RES.getRes("animal"+t.id+"_png"),this.removeChild(e),this.clickArray.pop(),this.lineArray.pop()},e.prototype.endFunc=function(t){this.isEnd||this.clearElement()},e.prototype.clearElement=function(){var t=this.clickArray.length;this.addScore(t);for(var e=0;e<this.clickArray.length;e++)3>t?this.clickArray[e].texture=RES.getRes("animal"+this.clickArray[e].id+"_png"):t>=3&&(this.removeChild(this.clickArray[e]),this.obj[this.clickArray[e].row][this.clickArray[e].col]=null);this.backgroundLayer.scoreLabel.text=this.score.toString();for(var e=0;e<this.lineArray.length;e++)this.removeChild(this.lineArray[e]);this.lineArray=[],this.clickArray=[],this.dropData()},e.prototype.dropData=function(){for(var t=0;t<this.maxCol;t++)this.dropCol(t),this.dropNewCol(t)},e.prototype.dropCol=function(t){for(var e=this.maxRow-1;e>=0;e--){var n=this.obj[e][t],r=!1;if(null!=n){for(var i=n.row;i<this.maxRow-1&&null==this.obj[i+1][t];){r=!0,this.obj[i][t]=null,i++,n.row=i,this.obj[i][t]=n;var o=this.calY(i)}r&&this.dropAnimation(this.obj[i][t],o)}}},e.prototype.dropNewCol=function(t){for(var e=this.maxRow-1;e>=0;e--){var n=this.obj[e][t],r=!1;if(null==n){var i=-1,o=this.element(e,t);for(o.y=this.calY(i),this.addChild(o);i<this.maxRow-1&&null==this.obj[i+1][t];){i>=0&&(this.obj[i][t]=null),r=!0,i++,o.row=i,this.obj[i][t]=o;var a=this.calY(i)}r&&this.dropAnimation(o,a)}}},e.prototype.dropAnimation=function(t,e,n){egret.Tween.get(t).to({y:e},500).call(function(){n&&n()})},e.prototype.addScore=function(t){8>t?Score.score+=20*t:Score.score+=40*t},e}(egret.DisplayObjectContainer);__reflect(AnimationLayer.prototype,"AnimationLayer");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,n){function r(r){e.call(n,r,t)}if(RES.hasRes(t)){var i=RES.getRes(t);i?r(i):RES.getResAsync(t,r,this)}else RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this);var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return[4,this.loadResource()];case 1:return n.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=n.sent(),this.startAnimation(t),[4,platform.login()];case 3:return n.sent(),[4,platform.getUserInfo()];case 4:return e=n.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return n.sent(),this.stage.removeChild(t),[3,5];case 4:return e=n.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,n){var r=new eui.Theme("resource/default.thm.json",t.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){SceneControl.run(new HomeScene)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.startAnimation=function(t){var e=this,n=new egret.HtmlTextParser,r=t.map(function(t){return n.parse(t)}),i=this.textfield,o=-1,a=function(){o++,o>=r.length&&(o=0);var t=r[o];i.textFlow=t;var n=egret.Tween.get(i);n.to({alpha:1},200),n.wait(2e3),n.to({alpha:0},200),n.call(a,e)};a()},e.prototype.onButtonClick=function(t){var e=new eui.Panel;e.title="Title",e.horizontalCenter=0,e.verticalCenter=0,this.addChild(e)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,n,r){function i(t){e.call(r,t)}function o(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,n){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(r,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var s=t.split("/");s.pop();var c=s.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(r,generateJSON.paths[t])},this):RES.getResByUrl(c,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){e.call(r,generateJSON.paths[t])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var DirectionData=function(){function t(t,e){this.directionX=t,this.directionY=e}return t}();__reflect(DirectionData.prototype,"DirectionData");var ElementData=function(t){function e(){return t.call(this)||this}return __extends(e,t),e}(egret.Bitmap);__reflect(ElementData.prototype,"ElementData");var GameData=function(){function t(){this.gameTime=20,this.currentGameTime=0,this.gameOver=!1,this.gameTime=20,this.currentGameTime=0,this.gameOver=!1}return Object.defineProperty(t,"Instance",{get:function(){return this.gameDataInstance||(this.gameDataInstance=new t),this.gameDataInstance},enumerable:!0,configurable:!0}),Object.defineProperty(t,"stageH",{get:function(){return egret.MainContext.instance.stage.stageHeight},enumerable:!0,configurable:!0}),Object.defineProperty(t,"stageW",{get:function(){return egret.MainContext.instance.stage.stageWidth},enumerable:!0,configurable:!0}),t}();__reflect(GameData.prototype,"GameData");var LineData=function(){function t(){}return t.drawLineToRow=function(t,e){var n=new egret.Bitmap(RES.getRes("LinkL"+t.id+"0_png"));return 1==e.directionX?n.x=t.x+t.width/3:-1==e.directionX&&(n.x=t.x+t.width/6-t.width),n.y=t.y,n},t.drawLineToCol=function(t,e){var n=new egret.Bitmap(RES.getRes("LinkL"+t.id+"1_png"));return 1==e.directionY?n.y=t.y+n.height/2:-1==e.directionY&&(n.y=t.y-t.height+t.height/6),n.x=t.x-t.width/7,n},t.drawLineToRightBias=function(t,e){var n=new egret.Bitmap(RES.getRes("LinkL"+t.id+"2_png"));return 1==e.directionX&&1==e.directionY?(n.x=t.x+t.width/7,n.y=t.y+t.height/7):-1==e.directionX&&-1==e.directionY&&(n.x=t.x-t.width,n.y=t.y-t.height),n},t.drawLineToLeftBias=function(t,e){var n=new egret.Bitmap(RES.getRes("LinkL"+t.id+"3_png"));return-1==e.directionX&&1==e.directionY?(n.x=t.x-t.width,n.y=t.y+t.height/7):1==e.directionX&&-1==e.directionY&&(n.x=t.x+t.width/7,n.y=t.y-t.height),n},t}();__reflect(LineData.prototype,"LineData");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var BackgroundLayer=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/BackgroundLayer.exml",e.addEventListener(egret.Event.ADDED_TO_STAGE,e.init,e),e}return __extends(e,t),e.prototype.init=function(){this.scoreLabel.size=30,this.scoreLabel.textColor=16777215,this.scoreLabel.text="0",this.scoreLabel.textAlign="center",this.timeLabel=new egret.TextField,this.timeLabel.size=60,this.timeLabel.stroke=2,this.timeLabel.strokeColor=13200433,this.timeLabel.textAlign="center",this.timeLabel.anchorOffsetX=this.timeLabel.width/2,this.timeLabel.anchorOffsetY=this.timeLabel.height/2,this.timeLabel.x=this.time.x+this.time.width/5,this.timeLabel.y=this.time.y+this.time.height/6,this.timeLabel.text="20",this.addChild(this.timeLabel),this.targetScoreLabel.size=30,this.targetScoreLabel.textColor=16777215,this.targetScoreLabel.text="1000",this.targetScoreLabel.textAlign="center"},e.prototype.update=function(){var t=this,e=Math.round(GameData.Instance.gameTime-GameData.Instance.currentGameTime);this.scoreLabel.text=Score.score.toString(),0>=e?this.timeLabel.text="0"+e:this.timeLabel.text=e>=10?e.toString():"0"+e,this.warn.visible=!1,e>=0&&5>=e&&egret.Tween.get(this.warn).wait(500).call(function(){t.warn.visible=!0})},e.prototype.nextLevel=function(){},e}(eui.Component);__reflect(BackgroundLayer.prototype,"BackgroundLayer",["eui.UIComponent","egret.DisplayObject"]);var FollowWeChat=function(t){function e(){var e=t.call(this)||this;return e.lock=!1,e.skinName="resource/eui_skins/FollowWeChat.exml",e.y=-1008,egret.Tween.get(e).to({y:0},700,egret.Ease.backOut),e.attention.touchEnabled=!0,e.nowAttention.touchEnabled=!0,e.attention.addEventListener(egret.TouchEvent.TOUCH_TAP,e.attenFunc,e),e.nowAttention.addEventListener(egret.TouchEvent.TOUCH_TAP,e.nowAttenFunc,e),e}return __extends(e,t),e.prototype.attenFunc=function(){var t=this;this.lock||(this.lock=!0,egret.Tween.get(this).to({y:-1008},700,egret.Ease.backIn).call(function(){t.parent.removeChild(t)}))},e.prototype.nowAttenFunc=function(){var t=this;this.lock||(this.lock=!0,egret.Tween.get(this).to({y:-1008},700,egret.Ease.backIn).call(function(){t.parent.removeChild(t)}))},e}(eui.Component);__reflect(FollowWeChat.prototype,"FollowWeChat",["eui.UIComponent","egret.DisplayObject"]);var GuildLayer=function(t){function e(e){var n=t.call(this)||this;return n.skinName="resource/eui_skins/GuildLayer.exml",n.callFunc=e,n.addEventListener(egret.TouchEvent.TOUCH_TAP,n.init,n),n}return __extends(e,t),e.prototype.init=function(){this.alpha=0,this.callFunc&&this.callFunc(),this.parent.removeChild(this)},e}(eui.Component);__reflect(GuildLayer.prototype,"GuildLayer",["eui.UIComponent","egret.DisplayObject"]);var Line=function(){function t(){}return t}();__reflect(Line.prototype,"Line");var rulerLayer=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/rulerLayer.exml",e.addEventListener(egret.Event.ADDED_TO_STAGE,e.init,e),e}return __extends(e,t),e.prototype.init=function(){this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtn,this)},e.prototype.closeBtn=function(){this.alpha=0,this.parent.removeChild(this)},e}(eui.Component);__reflect(rulerLayer.prototype,"rulerLayer",["eui.UIComponent","egret.DisplayObject"]);var SceneControl=function(){function t(){}return t.getInstance=function(){return this.stage||(this.stage=new egret.Sprite,egret.MainContext.instance.stage.addChild(this.stage)),this.stage.height=1008,this.stage},t.clearAllScene=function(){"undefined"!=typeof this.stage&&this.stage.removeChildren()},t.run=function(t){this.nowScene=t,this.clearAllScene(),this.getInstance().addChild(t)},t.getNowScene=function(){return this.nowScene},t}();__reflect(SceneControl.prototype,"SceneControl");var Score=function(){function t(){}return t.score=0,t}();__reflect(Score.prototype,"Score");var ControllerScene=function(t){function e(){var e=t.call(this)||this;return e.level=1,e.backgroundLayer=new BackgroundLayer,e.addChild(e.backgroundLayer),e.addChild(new AnimationLayer),e.time=new egret.Timer(1e3,0),e.addChild(new GuildLayer(function(){e.initTime()})),e}return __extends(e,t),e.prototype.initTime=function(){this.time.addEventListener(egret.TimerEvent.TIMER,this.timeFunc,this),this.time.start()},e.prototype.timeFunc=function(){this.backgroundLayer.update(),GameData.Instance.currentGameTime+=1,GameData.Instance.currentGameTime>GameData.Instance.gameTime&&(GameData.Instance.gameOver=!0,GameData.Instance.gameOver&&this.time.stop())},e}(egret.DisplayObjectContainer);__reflect(ControllerScene.prototype,"ControllerScene");var HomeScene=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/eui_skins/HomeScene.exml",e.addEventListener(egret.Event.ADDED_TO_STAGE,e.init,e),e}return __extends(e,t),e.prototype.init=function(){this.addChild(new FollowWeChat),this.playAnimation(),this.playBtn.touchEnabled=!0,this.rulerBtn.touchEnabled=!0,this.rankBtn.touchEnabled=!0,this.playBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.playGame,this),this.rulerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ruleBtn,this),this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rankingBtn,this)},e.prototype.playAnimation=function(){egret.Tween.get(this.blue,{loop:!0}).to({y:910},100).to({y:900},100).to({y:890},100).to({y:880},100).to({y:870},100).to({y:860},100).to({y:850},100).to({y:860},100).to({y:870},100).to({y:880},100).to({y:890},100).to({y:900},100).to({y:910},100).to({y:920},100),egret.Tween.get(this.pink,{loop:!0}).to({y:900},100).to({y:890},100).to({y:880},100).to({y:870},100).to({y:860},100).to({y:870},100).to({y:880},100).to({y:890},100).to({y:900},100).to({y:910},100),egret.Tween.get(this.yellow,{loop:!0}).to({y:908},100).to({y:898},100).to({y:888},100).to({y:878},100).to({y:868},100).to({y:858},100).to({y:868},100).to({y:878},100).to({y:888},100).to({y:898},100).to({y:908},100).to({y:918},100)},e.prototype.playGame=function(){SceneControl.run(new ControllerScene)},e.prototype.ruleBtn=function(){this.addChild(new rulerLayer)},e.prototype.rankingBtn=function(){},e}(eui.Component);__reflect(HomeScene.prototype,"HomeScene",["eui.UIComponent","egret.DisplayObject"]);