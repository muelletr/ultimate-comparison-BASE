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
let PaperCheckboxComponent = class PaperCheckboxComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.checkedChange = new core_1.EventEmitter();
    }
    ngOnChanges() {
        if (this.checked) {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#3f51b5");
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#3f51b5");
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#fff");
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#000");
        }
        this.el.nativeElement.checked = this.checked;
    }
    toogleCheck() { }
    onChange(e) {
        this.checked = !this.checked;
        if (this.checked) {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#3f51b5");
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#3f51b5");
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "background-color", "#fff");
            this.renderer.setElementStyle(this.el.nativeElement.children[0], "border-color", "#000");
        }
        this.el.nativeElement.checked = this.checked;
        this.checkedChange.emit(this.checked);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], PaperCheckboxComponent.prototype, "label", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Boolean)
], PaperCheckboxComponent.prototype, "checked", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', core_1.EventEmitter)
], PaperCheckboxComponent.prototype, "checkedChange", void 0);
__decorate([
    core_1.HostListener('click', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], PaperCheckboxComponent.prototype, "onChange", null);
PaperCheckboxComponent = __decorate([
    core_1.Component({
        selector: 'pcheckbox',
        templateUrl: './paper-checkbox.component.html',
        styleUrls: ['./paper-checkbox.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
], PaperCheckboxComponent);
exports.PaperCheckboxComponent = PaperCheckboxComponent;

//# sourceMappingURL=paper-checkbox.component.js.map
