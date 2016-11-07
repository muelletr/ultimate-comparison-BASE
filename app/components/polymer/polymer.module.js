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
const platform_browser_1 = require('@angular/platform-browser');
const paper_card_component_1 = require('./paper-card/paper-card.component');
const iron_icon_component_1 = require('./iron-icon/iron-icon.component');
const tooltip_component_1 = require('./tooltip/tooltip.component');
const paper_icon_button_component_1 = require('./paper-icon-button/paper-icon-button.component');
const paper_button_component_1 = require('./paper-button/paper-button.component');
const paper_dialog_component_1 = require('./paper-dialog/paper-dialog.component');
const paper_item_component_1 = require('./paper-item/paper-item.component');
const paper_checkbox_component_1 = require('./paper-checkbox/paper-checkbox.component');
let PolymerModule = class PolymerModule {
};
PolymerModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        exports: [
            paper_card_component_1.PaperCardComponent,
            iron_icon_component_1.IronIconComponent,
            tooltip_component_1.TooltipComponent,
            paper_icon_button_component_1.PaperIconButtonComponent,
            paper_button_component_1.PaperButtonComponent,
            paper_dialog_component_1.PaperDialogComponent,
            paper_item_component_1.PaperItemComponent,
            paper_checkbox_component_1.PaperCheckboxComponent
        ],
        declarations: [
            paper_card_component_1.PaperCardComponent,
            iron_icon_component_1.IronIconComponent,
            tooltip_component_1.TooltipComponent,
            paper_icon_button_component_1.PaperIconButtonComponent,
            paper_button_component_1.PaperButtonComponent,
            paper_dialog_component_1.PaperDialogComponent,
            paper_item_component_1.PaperItemComponent,
            paper_checkbox_component_1.PaperCheckboxComponent
        ]
    }), 
    __metadata('design:paramtypes', [])
], PolymerModule);
exports.PolymerModule = PolymerModule;

//# sourceMappingURL=polymer.module.js.map
