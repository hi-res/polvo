// Generated by CoffeeScript 1.6.3
/*
Experimental almost-non-readable port of MicroEvent in Coffeescript with some
naming modifications and a new 'once' method.
 
Original project:
https://github.com/jeromeetienne/microevent.js
*/


(function() {
  var MicroEvent,
    __slice = [].slice;

  module.exports = MicroEvent = (function() {
    function MicroEvent() {}

    MicroEvent.prototype._init = function() {
      return this._listn || (this._listn = {});
    };

    MicroEvent.prototype._create = function(e) {
      return this._init()[e] || (this._init()[e] = []);
    };

    MicroEvent.prototype.on = function(e, f) {
      return (this._create(e)).push(f);
    };

    MicroEvent.prototype.off = function(e, f) {
      var t;
      if ((t = this._init()[e]) != null) {
        return t.splice(t.indexOf(f), 1);
      }
    };

    MicroEvent.prototype.once = function(e, f) {
      var t,
        _this = this;
      return this.on(e, (t = function() {
        return (_this.off(e, t)) && f.apply(_this, arguments);
      }));
    };

    MicroEvent.prototype.emit = function() {
      var a, e, l, t, _i, _len;
      e = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if ((t = this._init()[e]) != null) {
        for (_i = 0, _len = t.length; _i < _len; _i++) {
          l = t[_i];
          l.apply(this, a);
        }
      }
      return 0;
    };

    MicroEvent.mixin = function(target) {
      var p, _results;
      _results = [];
      for (p in this.prototype) {
        console.log(p);
        _results.push(target.prototype[p] = this.prototype[p]);
      }
      return _results;
    };

    return MicroEvent;

  })();

}).call(this);

/*
//@ sourceMappingURL=microevent.map
*/