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
var fs_1 = require('fs'); // calls the readFileSync method from the node file system module
var ElementService = (function () {
    function ElementService() {
    }
    // synchronously returns the elements from elements.json
    ElementService.prototype.getElements = function () {
        var elements = fs_1.readFileSync('./app/assets/elements.json', 'utf8');
        //return JSON.parse(elements);
        return [];
    };
    ElementService = __decorate([
        // calls the readFileSync method from the node file system module
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ElementService);
    return ElementService;
}());
exports.ElementService = ElementService;
//# sourceMappingURL=elements.service.js.map