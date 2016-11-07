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
let PaperIconButtonComponent = class PaperIconButtonComponent {
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], PaperIconButtonComponent.prototype, "icon", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], PaperIconButtonComponent.prototype, "title", void 0);
PaperIconButtonComponent = __decorate([
    core_1.Component({
        selector: 'picon-button',
        templateUrl: './paper-icon-button.component.html',
        styleUrls: ['./paper-icon-button.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [])
], PaperIconButtonComponent);
exports.PaperIconButtonComponent = PaperIconButtonComponent;

//# sourceMappingURL=paper-icon-button.component.js.map
