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
var FamilyWin = (function (_super) {
    __extends(FamilyWin, _super);
    function FamilyWin() {
        return _super.call(this) || this;
    }
    FamilyWin.prototype.init = function () {
        _super.prototype.init.call(this);
    };
    return FamilyWin;
}(CommunalPageWin));
__reflect(FamilyWin.prototype, "FamilyWin");
//# sourceMappingURL=FamilyWin.js.map