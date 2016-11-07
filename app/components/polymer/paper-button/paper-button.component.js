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
const core_1 = require('@angular/core');
let PaperButtonComponent = class PaperButtonComponent {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], PaperButtonComponent.prototype, "text", void 0);
PaperButtonComponent = __decorate([
    core_1.Component({
        selector: 'pbutton',
        templateUrl: './paper-button.component.html',
        styleUrls: ['./paper-button.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [])
], PaperButtonComponent);
exports.PaperButtonComponent = PaperButtonComponent;

//# sourceMappingURL=paper-button.component.js.map
