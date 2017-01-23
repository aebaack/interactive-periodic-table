"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var elements_service_1 = require('../elements/elements.service');
var PeriodicTableComponent = (function () {
    function PeriodicTableComponent(_elementService) {
        this._elementService = _elementService;
    }
    PeriodicTableComponent.prototype.ngOnInit = function () {
        this.elements = this._elementService.getElements();
    };
    PeriodicTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pt-table',
            templateUrl: 'periodic-table.component.html'
        }), 
        __metadata('design:paramtypes', [elements_service_1.ElementService])
    ], PeriodicTableComponent);
    return PeriodicTableComponent;
}());
exports.PeriodicTableComponent = PeriodicTableComponent;
//# sourceMappingURL=periodic-table.component.js.map