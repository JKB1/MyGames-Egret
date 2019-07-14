
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","HomeScene":"resource/eui_skins/HomeScene.exml","rulerLayer":"resource/eui_skins/rulerLayer.exml","BackgroundLayer":"resource/eui_skins/BackgroundLayer.exml","GuildLayer":"resource/eui_skins/GuildLayer.exml","FollowWeChat":"resource/eui_skins/FollowWeChat.exml"};generateEUI.paths['resource/eui_skins/BackgroundLayer.exml'] = window.BackgroundLayerSkin = (function (_super) {
	__extends(BackgroundLayerSkin, _super);
	function BackgroundLayerSkin() {
		_super.call(this);
		this.skinParts = ["time","table","scoreLabel","targetScoreLabel","warn"];
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.time_i(),this._Image3_i(),this.table_i(),this.scoreLabel_i(),this.targetScoreLabel_i(),this.warn_i()];
	}
	var _proto = BackgroundLayerSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "PlayBg_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "2-2_png";
		t.x = 14;
		t.y = 25;
		return t;
	};
	_proto.time_i = function () {
		var t = new eui.Image();
		this.time = t;
		t.source = "2-3_png";
		t.x = 267;
		t.y = 20.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "score_png";
		t.x = 394;
		t.y = 22;
		return t;
	};
	_proto.table_i = function () {
		var t = new eui.Image();
		this.table = t;
		t.horizontalCenter = 0;
		t.source = "2-6_png";
		t.y = 175;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.Label();
		this.scoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.text = "";
		t.width = 111;
		t.x = 486;
		t.y = 49;
		return t;
	};
	_proto.targetScoreLabel_i = function () {
		var t = new eui.Label();
		this.targetScoreLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.text = "";
		t.width = 116;
		t.x = 103;
		t.y = 49;
		return t;
	};
	_proto.warn_i = function () {
		var t = new eui.Image();
		this.warn = t;
		t.height = 1008;
		t.source = "2-7-1_png";
		t.visible = false;
		t.width = 641;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return BackgroundLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FollowWeChat.exml'] = window.FollowWeChatSkin = (function (_super) {
	__extends(FollowWeChatSkin, _super);
	function FollowWeChatSkin() {
		_super.call(this);
		this.skinParts = ["attention","nowAttention"];
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.attention_i(),this.nowAttention_i(),this._Image2_i()];
	}
	var _proto = FollowWeChatSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x444444;
		t.height = 1108;
		t.strokeAlpha = 0.6;
		t.width = 640;
		t.x = 0;
		t.y = -100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "p1_01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.attention_i = function () {
		var t = new eui.Image();
		this.attention = t;
		t.source = "p1_03_png";
		t.x = 100;
		t.y = 566;
		return t;
	};
	_proto.nowAttention_i = function () {
		var t = new eui.Image();
		this.nowAttention = t;
		t.source = "p1_04_png";
		t.x = 365;
		t.y = 566;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "p1_02_png";
		t.y = 395;
		return t;
	};
	return FollowWeChatSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GuildLayer.exml'] = window.GuildLayerSkin = (function (_super) {
	__extends(GuildLayerSkin, _super);
	function GuildLayerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i()];
	}
	var _proto = GuildLayerSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x404040;
		t.height = 1008;
		t.strokeAlpha = 0.6;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1008;
		t.source = "tip_png";
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return GuildLayerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HomeScene.exml'] = window.HomeSceneSkin = (function (_super) {
	__extends(HomeSceneSkin, _super);
	function HomeSceneSkin() {
		_super.call(this);
		this.skinParts = ["playBtn","rulerBtn","rankBtn","blue","pink","yellow"];
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.playBtn_i(),this.rulerBtn_i(),this.rankBtn_i(),this.blue_i(),this.pink_i(),this.yellow_i()];
	}
	var _proto = HomeSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "HomPageBg_png";
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new eui.Image();
		this.playBtn = t;
		t.horizontalCenter = 0;
		t.source = "HomeStartBtn_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rulerBtn_i = function () {
		var t = new eui.Image();
		this.rulerBtn = t;
		t.horizontalCenter = 0.5;
		t.source = "HomeRuleBtn_png";
		t.y = 609;
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new eui.Image();
		this.rankBtn = t;
		t.horizontalCenter = 0.5;
		t.source = "RankingListBtn_png";
		t.y = 710;
		return t;
	};
	_proto.blue_i = function () {
		var t = new eui.Image();
		this.blue = t;
		t.source = "1-2_png";
		t.x = 106;
		t.y = 920;
		return t;
	};
	_proto.pink_i = function () {
		var t = new eui.Image();
		this.pink = t;
		t.horizontalCenter = 0;
		t.source = "1-3_png";
		t.y = 910;
		return t;
	};
	_proto.yellow_i = function () {
		var t = new eui.Image();
		this.yellow = t;
		t.source = "1-4_png";
		t.x = 444;
		t.y = 918;
		return t;
	};
	return HomeSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RulerLayer.exml'] = window.rulerLayerSkin = (function (_super) {
	__extends(rulerLayerSkin, _super);
	function rulerLayerSkin() {
		_super.call(this);
		this.skinParts = ["close"];
		
		this.height = 1008;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.close_i()];
	}
	var _proto = rulerLayerSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.5;
		t.fillColor = 0x777474;
		t.height = 1008;
		t.strokeAlpha = 0.5;
		t.width = 640;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "Close_png";
		t.x = 527;
		t.y = 33;
		return t;
	};
	return rulerLayerSkin;
})(eui.Skin);