(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"walk_animation_atlas_1", frames: [[492,0,479,266],[973,0,30,19],[947,268,69,110],[492,268,317,322],[811,268,134,129],[811,399,134,129],[0,0,490,573],[973,21,30,19],[947,380,69,110]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["walk_animation_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.torso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#967A57").ss(1.5).p("Agmq1QGkgPBEErQA0DjiYGjQgiAuAdAvQARAbA9A0QA7AyANAbQAWAsgrAqQjgCLkRgSQkSgSjJimQBOhQAehSQAghXgQhrQgqiigIg9QgJhFASguQALgaA3hSQBChjA2hoQAAiEAggeQASgQAogIQAXgEBOgHg");
	this.shape.setTransform(49.8922,69.4478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E9C698").s().p("AgZK1QkSgSjJimQBOhQAehSQAghXgQhrQgqiigIg9QgJhFASguQALgaA3hSQBChjA2hoQAAiEAggeQASgQAogIQAXgEBOgHQGkgPBEErQA0DjiYGjQgiAuAdAvQARAbA9A0QA7AyANAbQAWAsgrAqQjFB7jtAAQggAAgfgCg");
	this.shape_1.setTransform(50.0695,69.4478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.torso, new cjs.Rectangle(-1.1,-1,104.5,140.9), null);


(lib.leg_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#967A57").p("AjUCJQALhGAtg4QAkgsA4ghQByhDCoAB");
	this.shape.setTransform(42.7772,131.9886);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#967A57").p("Aklq5QAXAIAKB7QALCGAeAfQgRAug6B4QgwBuAJA4QgKBwAGA7QAFA0AeBxQgtBCgDB7QgEB6AqAYQAmBWCGAkQB8AiCGgYQCNgZA7hKQBEhUhJh2Qgdg+hUgkQgKgEiNgsQhUgbgZgjQghgxAthaQA9iDBLj2QBnlQALghQg9hQiqgDQiVgChzAwg");
	this.shape_1.setTransform(35.1511,74.3926);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9C698").s().p("AiMLUQiGgkgmhWQgqgYAEh6QADh7AthCQgehxgFg0QgGg7AKhwQgJg4AwhuQA6h4ARguQgegfgLiGQgKh7gXgIQBzgwCVACQCqADA9BQQgLAhhnFQQhLD2g9CDQgtBaAhAxQAZAjBUAbQCNAsAKAEQBUAkAdA+QBJB2hEBUQg7BKiNAZQg4AKg2AAQhLAAhJgUg");
	this.shape_2.setTransform(35.1511,74.3926);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leg_right, new cjs.Rectangle(-1,-1,72.3,150.8), null);


(lib.leg_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#967A57").p("AjFCgQAEhHAmg9QAfgwA0gnQBrhPCngQ");
	this.shape.setTransform(50.4745,130.3142);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#967A57").p("AmFqXQAYAGAXB5QAZCEAhAcQgMAvgtB+QgjByAPA3QACBwANA6QAKAzAqBtQgmBGAKB7QAKB6ArAUQAvBRCKAWQB+AUCDgmQCKgoAzhQQA7hbhWhuQgjg6hXgbQgMgDiQgdQhWgRgdghQgmgsAjhfQAviJAwj9QBBlYAIgjQhFhIipAPQiWAOhsA8g");
	this.shape_1.setTransform(38.9725,74.0446);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9C698").s().p("AhSLeQiKgWgvhRQgrgUgKh6QgKh7AmhGQgqhtgKgzQgNg6gChwQgPg3AjhyQAth+AMgvQghgcgZiEQgXh5gYgGQBsg8CWgOQCpgPBFBIQgIAjhBFYQgwD9gvCJQgjBfAmAsQAdAhBWARQCQAdAMADQBXAbAjA6QBWBug7BbQgzBQiKAoQhWAZhTAAQgsAAgsgHg");
	this.shape_2.setTransform(38.7795,74.0446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leg_left, new cjs.Rectangle(-1.4,-1,80,150.1), null);


(lib.hips = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#967A57").ss(1.5,2,1).p("AnqmMQgnBHgdB1QgbBwgJB5QgKB9ANBfQANBnAlAqQB2AXAdAEQBhAOBFgCQDBgHAYiOQAMBCArAdQAkAYBDAGQBuAJAXACQBTAFBBgBQBZgBApg+QAlg5AFh6QgBhPgbieQgjjIgTh4Qg2gTh6gNQh2gNiVgDQiZgDiRAHQicAIhvATg");
	this.shape.setTransform(59.9449,42.8877);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E0").s().p("AmKGhQgdgEh2gXQglgqgNhnQgNhfAKh9QAJh5AbhwQAdh1AnhHQBvgTCcgIQCRgHCZADQCVADB2ANQB6ANA2ATQATB4AjDIQAbCeABBPQgFB6glA5QgpA+hZABQhBABhTgFIiFgLQhDgGgkgYQgrgdgMhCQgYCOjBAHIgVAAQg/AAhSgMg");
	this.shape_1.setTransform(59.9449,42.8877);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hips, new cjs.Rectangle(-1,-1,122,87.8), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9A97F").p("AAAhWIAACt");
	this.shape.setTransform(0.5,8.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(-0.5,-1,2,19.4), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C9A97F").p("AAAhWIAACt");
	this.shape.setTransform(0.5,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(-0.5,-1,2,19.4), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9A97F").s().p("AAzBiQgFgTgig4Ig7hhQhDhzBNAoQAjAXA7DDQAVBGABARQAAABAAABQAAABAAAAQAAABAAAAQgBAAAAAAQgEAAgXg+g");
	this.shape.setTransform(36.8608,38.8535);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(29,22.9,15.799999999999997,32), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C9A97F").s().p("AhOCcQABgQAVhFQA7i/AjgbQBNgrhDB2Ig7BiQgiA5gFAQQgXA9gEAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape.setTransform(36.4892,38.2402);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(28.6,22.3,15.799999999999997,31.900000000000002), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyAIQAIgXARgQQANgMARgHQALgDAVgEIASgCQAGAAACACQAGAIgRAaQgRAXgXAVQghAegqAJg");
	this.shape.setTransform(6.4283,6.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,12.9,12.1), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzAIQAJgXARgQQANgMARgHQALgDAVgEIARgCQAGAAACACQAGAIgRAaQgQAXgXAVQggAegrAJg");
	this.shape.setTransform(6.4033,6.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,12.8,12.1), null);


(lib.arm_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#967A57").ss(1.5).p("AAnCRQgGgtgihiQghhbgEg2");
	this.shape.setTransform(14.225,185.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#967A57").ss(1.5).p("ACPvwQhgBThWChQhSCYg7C8Qg6C8gTCvQgUC3AcB/QhvBlAeDTQAKBEAdBtQAjCCAHAfQADAjARAcQAQAZAaARQBQAMAYgUQAUgPgJgzQgPhHgHgvQgNhWANhMQAJBKAlAVQAeAQBOgIQgKg3gDioQgCiQgahKQgngagWglQgig3AKhRQAIg9Aoh2QBEjMBdjPQAjgxBKhmQA8hZASg8QAvikjqhDg");
	this.shape_1.setTransform(33.7809,100.8633);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9C698").s().p("Ai7PsQgagRgQgZQgRgcgDgjQgHgfgjiCQgdhtgKhEQgejTBvhlQgch/AUi3QATivA6i8QA7i8BSiYQBWihBghTQDqBDgvCkQgSA8g8BZIhtCXQhdDPhEDMQgoB2gIA9QgKBRAiA3QAWAlAnAaQAaBKACCQQADCoAKA3QhOAIgegQQglgVgJhKQgNBMANBWQAHAvAPBHQAJAzgUAPQgPANgmAAQgWAAgdgFg");
	this.shape_2.setTransform(33.7809,100.8633);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_right, new cjs.Rectangle(-1.1,-1,69.69999999999999,204.9), null);


(lib.arm_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#967A57").ss(1.5).p("AgmCRQAGgtAihiQAhhbAEg2");
	this.shape.setTransform(53.325,185.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#967A57").ss(1.5).p("AiOvvQBgBTBWChQBSCXA7C9QA6C7ATCvQAUC4gcB/QBvBlgeDSQgJBEgeBtQgjCEgHAeQgCAigSAdQgQAZgaAQQhQAMgYgTQgUgQAJgzQAPhHAHgvQANhVgNhMQgJBKglAUQgeAQhOgIQAKg3ADioQACiQAahJQAngaAWglQAig4gKhRQgIg9goh2QhFjNhcjOQhKhkgjgzQg8hZgSg8QgvijDqhDg");
	this.shape_1.setTransform(33.7691,100.8418);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9C698").s().p("ABUPlQgUgQAJgzQAPhHAHgvQANhVgNhMQgJBKglAUQgeAQhOgIQAKg3ADioQACiQAahJQAngaAWglQAig4gKhRQgIg9goh2QhFjNhcjOQhKhkgjgzQg8hZgSg8QgvijDqhDQBgBTBWChQBSCXA7C9QA6C7ATCvQAUC4gcB/QBvBlgeDSQgJBEgeBtQgjCEgHAeQgCAigSAdQgQAZgaAQQgeAEgWAAQglAAgPgLg");
	this.shape_2.setTransform(33.7691,100.8418);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_left, new cjs.Rectangle(-1,-1,69.6,206.8), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(24,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(7.35,128.4,0.5,0.5);

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.setTransform(23.95,145.35,1,1,0,0,0,36.9,38.9);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0)",2,8,30);

	this.instance_3 = new lib.CachedBmp_7();
	this.instance_3.setTransform(0,122.5,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(68.55,97.7,0.5,0.5);

	this.instance_5 = new lib.Path_0();
	this.instance_5.setTransform(210.2,184.6,1,1,0,0,0,6.4,6);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.CachedBmp_14();
	this.instance_6.setTransform(161.45,136.95,0.5,0.5);

	this.instance_7 = new lib.Path();
	this.instance_7.setTransform(118.95,184.6,1,1,0,0,0,6.4,6);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.CachedBmp_13();
	this.instance_8.setTransform(70.15,136.95,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_3();
	this.instance_9.setTransform(22.85,-2.55,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_2();
	this.instance_10.setTransform(265,129.05,0.5,0.5);

	this.instance_11 = new lib.Path_1();
	this.instance_11.setTransform(263.55,145.65,1,1,0,0,0,36.5,38.2);
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,0)",2,8,30);

	this.instance_12 = new lib.CachedBmp_1();
	this.instance_12.setTransform(258.05,116.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-14,-2.5,323.7,286.5), null);


// stage content:
(lib.walk_animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// head
	this.instance = new lib.head();
	this.instance.setTransform(479.95,140.8,1,1,0,0,0,146.2,140.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:144.7,regY:140.7,x:478.45,y:140.7},0).wait(29));

	// arm_right
	this.instance_1 = new lib.arm_right();
	this.instance_1.setTransform(418.6,364.4,1,1,0,0,0,33.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:33.8,regY:100.9,rotation:2.4028,x:416.35,y:362.85},0).wait(1).to({rotation:4.8057,x:413.9,y:362.05},0).wait(1).to({rotation:7.2085,x:411.4,y:361.15},0).wait(1).to({rotation:9.6113,x:408.85,y:360.25},0).wait(1).to({rotation:12.0141,x:406.35,y:359.4},0).wait(1).to({rotation:14.417,x:403.85,y:358.45},0).wait(1).to({rotation:16.8198,x:401.3,y:357.65},0).wait(1).to({rotation:19.2226,x:398.8,y:356.75},0).wait(1).to({rotation:15.3147,x:403.7,y:357.6},0).wait(1).to({rotation:11.4068,x:408.6,y:358.5},0).wait(1).to({rotation:7.4989,x:413.45,y:359.35},0).wait(1).to({rotation:3.591,x:418.35,y:360.2},0).wait(1).to({rotation:-0.3169,x:423.2,y:361.05},0).wait(1).to({rotation:-4.2248,x:428.1,y:361.9},0).wait(1).to({rotation:-8.1327,x:432.95,y:362.85},0).wait(1).to({rotation:-12.0406,x:437.85,y:363.75},0).wait(1).to({rotation:-15.9485,x:442.7,y:364.55},0).wait(1).to({rotation:-19.8564,x:447.6,y:365.45},0).wait(1).to({rotation:-23.7643,x:452.45,y:366.4},0).wait(1).to({rotation:-21.1454,x:449.15,y:366.15},0).wait(1).to({rotation:-18.5265,x:445.9,y:365.9},0).wait(1).to({rotation:-15.9076,x:442.65,y:365.7},0).wait(1).to({rotation:-13.2887,x:439.4,y:365.5},0).wait(1).to({rotation:-10.6698,x:436.1,y:365.25},0).wait(1).to({rotation:-8.0509,x:432.85,y:365},0).wait(1).to({rotation:-5.432,x:429.55,y:364.8},0).wait(1).to({rotation:-2.8131,x:426.3,y:364.6},0).wait(1).to({rotation:-0.1943,x:423.05,y:364.35},0).wait(1).to({rotation:2.4246,x:419.75,y:364.15},0).wait(1));

	// torso
	this.instance_2 = new lib.torso();
	this.instance_2.setTransform(474.95,338.7,1,1,0,0,0,51.1,69.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:49.9,regY:69.4,x:473.75,y:338.8},0).wait(29));

	// hips
	this.instance_3 = new lib.hips();
	this.instance_3.setTransform(473.05,429.45,1,1,0,0,0,60,42.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:59.9,x:472.95},0).wait(29));

	// leg_right
	this.instance_4 = new lib.leg_right();
	this.instance_4.setTransform(446.05,534.1,1,1,0,0,0,35.1,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:35.2,rotation:2.4306,x:443.6,y:532.85},0).wait(1).to({rotation:4.8611,x:441.05,y:531.6},0).wait(1).to({rotation:7.2917,x:438.5,y:530.3},0).wait(1).to({rotation:9.7222,x:436,y:529.1},0).wait(1).to({rotation:12.1528,x:433.45,y:527.85},0).wait(1).to({rotation:14.5833,x:430.9,y:526.55},0).wait(1).to({rotation:17.0139,x:428.4,y:525.35},0).wait(1).to({rotation:19.4444,x:425.9,y:524.05},0).wait(1).to({rotation:15.8579,x:430,y:524.25},0).wait(1).to({rotation:12.2715,x:434.2,y:524.45},0).wait(1).to({rotation:8.685,x:438.35,y:524.6},0).wait(1).to({rotation:5.0985,x:442.5,y:524.8},0).wait(1).to({rotation:1.512,x:446.65,y:525},0).wait(1).to({rotation:-2.0744,x:450.85,y:525.2},0).wait(1).to({rotation:-5.6609,x:455,y:525.4},0).wait(1).to({rotation:-9.2474,x:459.1,y:525.55},0).wait(1).to({rotation:-12.8339,x:463.25,y:525.75},0).wait(1).to({rotation:-16.4203,x:467.4,y:525.85},0).wait(1).to({rotation:-20.0068,x:471.6,y:526.05},0).wait(1).to({rotation:-23.2471,x:473.3,y:521.05},0).wait(1).to({rotation:-26.4874,x:475.1,y:516.05},0).wait(1).to({rotation:-22.9894,x:471,y:517.8},0).wait(1).to({rotation:-19.4914,x:467,y:519.5},0).wait(1).to({rotation:-15.9935,x:462.95,y:521.2},0).wait(1).to({rotation:-12.4955,x:458.9,y:522.95},0).wait(1).to({rotation:-8.9975,x:454.9,y:524.7},0).wait(1).to({rotation:-5.4995,x:450.9,y:526.4},0).wait(1).to({rotation:-2.0016,x:446.85,y:528.1},0).wait(1).to({rotation:1.4964,x:442.8,y:529.8},0).wait(1));

	// leg_left
	this.instance_5 = new lib.leg_left();
	this.instance_5.setTransform(514.45,530.5,1,1,0,0,0,38.3,74.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:39,regY:74,rotation:-2.4917,x:517.7,y:528.55},0).wait(1).to({rotation:-4.9834,x:520.4,y:526.8},0).wait(1).to({rotation:-7.4751,x:523,y:525.15},0).wait(1).to({rotation:-9.9667,x:525.55,y:523.4},0).wait(1).to({rotation:-12.4584,x:528.2,y:521.7},0).wait(1).to({rotation:-14.9501,x:530.85,y:520},0).wait(1).to({rotation:-17.4418,x:533.45,y:518.25},0).wait(1).to({rotation:-19.9335,x:536.05,y:516.5},0).wait(1).to({rotation:-13.9674,x:530.1,y:515.6},0).wait(1).to({rotation:-8.0012,x:524.15,y:514.65},0).wait(1).to({rotation:-2.0351,x:518.3,y:513.7},0).wait(1).to({rotation:3.931,x:512.3,y:512.7},0).wait(1).to({rotation:9.8972,x:506.35,y:511.8},0).wait(1).to({rotation:15.8633,x:500.35,y:510.85},0).wait(1).to({rotation:21.8295,x:494.45,y:509.9},0).wait(1).to({rotation:27.7956,x:488.45,y:509},0).wait(1).to({rotation:33.7617,x:482.45,y:508},0).wait(1).to({rotation:39.7279,x:476.45,y:507.1},0).wait(1).to({rotation:45.694,x:470.5,y:506.1},0).wait(1).to({rotation:39.4692,x:474.7,y:513.35},0).wait(1).to({rotation:33.2444,x:478.95,y:520.6},0).wait(1).to({rotation:29.0551,x:483.35,y:521.75},0).wait(1).to({rotation:24.8658,x:487.75,y:522.9},0).wait(1).to({rotation:20.6764,x:492.1,y:524.05},0).wait(1).to({rotation:16.4871,x:496.5,y:525.15},0).wait(1).to({rotation:12.2978,x:500.9,y:526.3},0).wait(1).to({rotation:8.1085,x:505.25,y:527.45},0).wait(1).to({rotation:3.9192,x:509.65,y:528.65},0).wait(1).to({rotation:-0.2701,x:514.05,y:529.75},0).wait(1));

	// arm_left
	this.instance_6 = new lib.arm_left();
	this.instance_6.setTransform(534,367.9,1,1,0,0,0,33.8,102.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:100.8,rotation:-2.5937,x:537.85,y:364.95},0).wait(1).to({rotation:-5.1874,x:541.8,y:363.75},0).wait(1).to({rotation:-7.7811,x:545.75,y:362.5},0).wait(1).to({rotation:-10.3748,x:549.7,y:361.35},0).wait(1).to({rotation:-12.9686,x:553.6,y:360.15},0).wait(1).to({rotation:-15.5623,x:557.55,y:358.95},0).wait(1).to({rotation:-18.156,x:561.45,y:357.75},0).wait(1).to({rotation:-20.7497,x:565.35,y:356.6},0).wait(1).to({rotation:-17.7917,x:561.15,y:357.8},0).wait(1).to({rotation:-14.8337,x:556.9,y:359.05},0).wait(1).to({rotation:-11.8758,x:552.7,y:360.25},0).wait(1).to({rotation:-8.9178,x:548.5,y:361.5},0).wait(1).to({rotation:-5.9598,x:544.2,y:362.75},0).wait(1).to({rotation:-3.0018,x:540,y:364},0).wait(1).to({rotation:-0.0438,x:535.75,y:365.2},0).wait(1).to({rotation:2.9142,x:531.55,y:366.45},0).wait(1).to({rotation:5.8721,x:527.25,y:367.7},0).wait(1).to({rotation:8.8301,x:523.05,y:369},0).wait(1).to({rotation:11.7881,x:518.8,y:370.25},0).wait(1).to({rotation:13.1199,x:516.75,y:370.4},0).wait(1).to({rotation:14.4517,x:514.8,y:370.65},0).wait(1).to({rotation:15.7836,x:512.8,y:370.8},0).wait(1).to({rotation:17.1154,x:510.75,y:371},0).wait(1).to({rotation:18.4472,x:508.7,y:371.15},0).wait(1).to({rotation:19.779,x:506.7,y:371.35},0).wait(1).to({rotation:21.1109,x:504.7,y:371.5},0).wait(1).to({rotation:22.4427,x:502.65,y:371.7},0).wait(1).to({rotation:23.7745,x:500.65,y:371.9},0).wait(1).to({rotation:-0.4861,x:533.35,y:365.1},0).wait(1));

	// _Path__2
	this.instance_7 = new lib.Path_2();
	this.instance_7.setTransform(493.1,252.35,1,1,0,0,0,0.5,8.7);
	this.instance_7.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// _Path__3
	this.instance_8 = new lib.Path_3();
	this.instance_8.setTransform(515.55,252.3,1,1,0,0,0,0.5,8.7);
	this.instance_8.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({alpha:0.6},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(799.8,317.5,-156.39999999999998,291.5);
// library properties:
lib.properties = {
	id: '18935D44B005C04DB6CD4443ED247C79',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/walk_animation_atlas_1.png", id:"walk_animation_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['18935D44B005C04DB6CD4443ED247C79'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;