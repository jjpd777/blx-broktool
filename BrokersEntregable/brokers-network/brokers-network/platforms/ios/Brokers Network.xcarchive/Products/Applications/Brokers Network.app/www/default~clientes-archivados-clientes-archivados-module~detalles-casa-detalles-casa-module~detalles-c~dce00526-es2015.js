(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~clientes-archivados-clientes-archivados-module~detalles-casa-detalles-casa-module~detalles-c~dce00526"],{

/***/ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js ***!
  \**********************************************************************************/
/*! exports provided: AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return AccordionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return AccordionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
class AccordionConfig {
    constructor() {
        /**
         * Whether the other panels should be closed when a panel is opened
         */
        this.closeOthers = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
    }
}
AccordionConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Displays collapsible content panels for presenting information in a limited amount of space.
 */
class AccordionComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this.groups = [];
        Object.assign(this, config);
    }
    /**
     * @param {?} openGroup
     * @return {?}
     */
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((/**
         * @param {?} group
         * @return {?}
         */
        (group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        }));
    }
    /**
     * @param {?} group
     * @return {?}
     */
    addGroup(group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    removeGroup(group) {
        /** @type {?} */
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'accordion',
                template: `<ng-content></ng-content>`,
                host: {
                    '[attr.aria-multiselectable]': 'closeOthers',
                    role: 'tablist',
                    class: 'panel-group',
                    style: 'display: block'
                }
            }] }
];
/** @nocollapse */
AccordionComponent.ctorParameters = () => [
    { type: AccordionConfig }
];
AccordionComponent.propDecorators = {
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    closeOthers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
class AccordionPanelComponent {
    /**
     * @param {?} accordion
     */
    constructor(accordion) {
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * Emits when the opened state changes
         */
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /**
     * Is accordion group open or closed. This property supports two-way binding
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null).then((/**
             * @return {?}
             */
            () => {
                this.isOpenChange.emit(value);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                /* tslint:disable: no-console */
                console.log(error);
            }));
        }
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.panelClass = this.panelClass || 'panel-default';
        this.accordion.addGroup(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'accordion-group, accordion-panel',
                template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\n  <div\n    class=\"panel-heading card-header\"\n    role=\"tab\"\n    (click)=\"toggleOpen()\"\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\n  >\n    <div class=\"panel-title\">\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\n          {{ heading }}\n        </button>\n        <ng-content select=\"[accordion-heading]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\n    <div class=\"panel-body card-block card-body\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",
                host: {
                    class: 'panel',
                    style: 'display: block'
                },
                styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}"]
            }] }
];
/** @nocollapse */
AccordionPanelComponent.ctorParameters = () => [
    { type: AccordionComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [AccordionComponent,] }] }
];
AccordionPanelComponent.propDecorators = {
    heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.panel-open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccordionModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: AccordionModule, providers: [AccordionConfig] };
    }
}
AccordionModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"]],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-accordion.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js ***!
  \**************************************************************************/
/*! exports provided: AlertComponent, AlertConfig, AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertConfig {
    constructor() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
}
AlertConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    /**
     * @param {?} _config
     * @param {?} changeDetection
     */
    constructor(_config, changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe((/**
         * @param {?} dismissible
         * @return {?}
         */
        (dismissible) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout((/**
             * @return {?}
             */
            () => this.close()), parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    }
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
}
AlertComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'alert,bs-alert',
                template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
AlertComponent.ctorParameters = () => [
    { type: AlertConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AlertComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dismissible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    dismissOnTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    }
}
AlertModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-alert.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js ***!
  \******************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */
const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => ButtonCheckboxDirective)),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
class ButtonCheckboxDirective {
    constructor() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    /**
     * @protected
     * @return {?}
     */
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue
            : true;
    }
    /**
     * @protected
     * @return {?}
     */
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse
            : false;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonCheckboxDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[btnCheckbox]',
                providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
            },] }
];
ButtonCheckboxDirective.propDecorators = {
    btnCheckboxTrue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    btnCheckboxFalse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => ButtonRadioGroupDirective)),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioGroupDirective {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonRadioGroupDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => ButtonRadioDirective)),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioDirective {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} group
     * @param {?} renderer
     */
    constructor(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * Current value of radio component or group
     * @return {?}
     */
    get value() {
        return this.group ? this.group.value : this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this._value = value;
    }
    /**
     * If `true` — radio button is disabled
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._disabled = disabled;
        this.setDisabledState(disabled);
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.btnRadio === this.value;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _onChange(value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    }
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
}
ButtonRadioDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
            },] }
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ButtonRadioGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ButtonRadioDirective.propDecorators = {
    btnRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uncheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-buttons.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
  \********************************************************************************/
/*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return SlideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @template T
 * @param {?} array The source array to search in
 * @param {?} predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 * @return {?}
 */
function findLastIndex(array, predicate) {
    /** @type {?} */
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
/**
 * @template T
 * @param {?} array
 * @param {?} size
 * @return {?}
 */
function chunkByNumber(array, size) {
    /** @type {?} */
    const out = [];
    /** @type {?} */
    const n = Math.ceil((array.length) / size);
    /** @type {?} */
    let i = 0;
    while (i < n) {
        /** @type {?} */
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Direction = {
    UNKNOWN: 0,
    NEXT: 1,
    PREV: 2,
};
Direction[Direction.UNKNOWN] = 'UNKNOWN';
Direction[Direction.NEXT] = 'NEXT';
Direction[Direction.PREV] = 'PREV';
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} ngZone
     */
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` - carousel indicators indicate slides chunks
             works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
             of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * Will be emitted when active slides has been changed in multilist mode
         */
        this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
        this._currentVisibleSlidesIndex = 0;
        this.destroyed = false;
        this.getActive = (/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active);
        this.makeSlidesConsistent = (/**
         * @param {?} slides
         * @return {?}
         */
        (slides) => {
            slides.forEach((/**
             * @param {?} slide
             * @param {?} index
             * @return {?}
             */
            (slide, index) => slide.item.order = index));
        });
        Object.assign(this, config);
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            this.activeSlide = 0;
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        /** @type {?} */
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            /** @type {?} */
            let nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout((/**
             * @return {?}
             */
            () => {
                this._select(nextSlideIndex);
            }), 0);
        }
        else {
            this._slides.remove(remIndex);
            /** @type {?} */
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout((/**
             * @return {?}
             */
            () => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }), 0);
        }
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    /**
     * @return {?}
     */
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    /**
     * @return {?}
     */
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    /**
     * @param {?} direction
     * @param {?=} force
     * @return {?}
     */
    move(direction, force = false) {
        /** @type {?} */
        const firstVisibleIndex = this.getFirstVisibleIndex();
        /** @type {?} */
        const lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force);
        }
        else {
            this.moveMultilist(direction);
        }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * \@internal
     * @param {?} event
     * @return {?}
     */
    keydownPress(event) {
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    }
    /**
     * Play on mouse leave
     * \@internal
     * @return {?}
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * \@internal
     * @return {?}
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * \@internal
     * @return {?}
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * \@internal
     * @return {?}
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param {?} index
     * @return {?}
     */
    isFirst(index) {
        return index === 0;
    }
    /**
     * @return {?}
     */
    indicatorsSlides() {
        return this.slides.filter((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0));
    }
    /**
     * @private
     * @return {?}
     */
    selectInitialSlides() {
        /** @type {?} */
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @private
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        /** @type {?} */
        let nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return undefined;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide)
                    ? this._currentActiveSlide + 1
                    : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex =
                    this._currentActiveSlide > 0
                        ? this._currentActiveSlide - 1
                        : !force && this.noWrap
                            ? this._currentActiveSlide
                            : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * @private
     * @return {?}
     */
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((/**
         * @param {?} slide
         * @param {?} index
         * @return {?}
         */
        (slide, index) => {
            return {
                index,
                item: slide
            };
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            /** @type {?} */
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            /** @type {?} */
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    selectRangeByNestedIndex(index) {
        /** @type {?} */
        const selectedRange = this._chunkedSlides
            .map((/**
         * @param {?} slidesList
         * @param {?} i
         * @return {?}
         */
        (slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        }))
            .find((/**
         * @param {?} slidesList
         * @return {?}
         */
        (slidesList) => {
            return slidesList.list.find((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.index === index)) !== undefined;
        }));
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => {
            slide.item.active = true;
        }));
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    isIndexInRange(index) {
        if (this.singleSlideOffset) {
            /** @type {?} */
            const visibleIndexes = this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    /**
     * @private
     * @return {?}
     */
    hideSlides() {
        this.slides.forEach((/**
         * @param {?} slide
         * @return {?}
         */
        (slide) => slide.active = false));
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListLast() {
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    /**
     * @private
     * @return {?}
     */
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveSliderByOneItem(direction) {
        /** @type {?} */
        let firstVisibleIndex;
        /** @type {?} */
        let lastVisibleIndex;
        /** @type {?} */
        let indexToHide;
        /** @type {?} */
        let indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            this._slides.get(indexToHide).active = false;
            this._slides.get(indexToShow).active = true;
            /** @type {?} */
            const slidesToReorder = this.mapSlidesAndIndexes().filter((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active));
            this.makeSlidesConsistent(slidesToReorder);
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
        else {
            /** @type {?} */
            let displayedIndex;
            firstVisibleIndex = this._slidesWithIndexes[0].index;
            lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
            if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex)
                    ? 0
                    : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                    index: displayedIndex,
                    item: this._slides.get(displayedIndex)
                });
            }
            else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex)
                    ? this._slides.length - 1
                    : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    }, ...this._slidesWithIndexes];
            }
            this.hideSlides();
            this._slidesWithIndexes.forEach((/**
             * @param {?} slide
             * @return {?}
             */
            slide => slide.item.active = true));
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this.slideRangeChange.emit(this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index)));
        }
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    moveMultilist(direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else {
                if (direction === Direction.NEXT) {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                        ? 0
                        : this._currentVisibleSlidesIndex + 1;
                }
                else {
                    this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                        ? this._chunkedSlides.length - 1
                        : this._currentVisibleSlidesIndex - 1;
                }
            }
            this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.item.active = true));
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    /**
     * @private
     * @return {?}
     */
    getVisibleIndexes() {
        if (!this.singleSlideOffset) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
        else {
            return this._slidesWithIndexes.map((/**
             * @param {?} slide
             * @return {?}
             */
            (slide) => slide.index));
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @private
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist) {
            /** @type {?} */
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (currentSlide) {
                currentSlide.active = false;
            }
        }
        /** @type {?} */
        const nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @private
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        /** @type {?} */
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                return setInterval((/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const nInterval = +this.interval;
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    }));
                }), interval);
            }));
        }
    }
    /**
     * @return {?}
     */
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     * @private
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
}
CarouselComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'carousel',
                template: "<div (mouseenter)=\"pause()\" (mouseleave)=\"onMouseLeave()\" (mouseup)=\"onMouseUp()\" class=\"carousel slide\" (keydown)=\"keydownPress($event)\" (focusin)=\"pauseFocusIn()\" (focusout)=\"pauseFocusOut()\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slidez of indicatorsSlides(); let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\"><ng-content></ng-content></div>\n  <a class=\"left carousel-control carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
CarouselComponent.propDecorators = {
    noWrap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    noPause: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pauseOnFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsByChunk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemsPerSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    singleSlideOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeSlideChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    slideRangeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeSlide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startFromIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    interval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} carousel
     */
    constructor(carousel) {
        this.itemWidth = '100%';
        this.order = 0;
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                host: {
                    '[attr.aria-hidden]': '!active'
                }
            }] }
];
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent }
];
SlideComponent.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.order',] }],
    addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-carousel.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js ***!
  \********************************************************************************/
/*! exports provided: CollapseDirective, CollapseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
/** @type {?} */
const expandAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }))
];
/** @type {?} */
const collapseAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*', visibility: 'visible' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(COLLAPSE_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, visibility: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _builder
     */
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when collapsing is started
         */
        this.collapses = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when expansion is started
         */
        this.expands = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */
    set collapse(value) {
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.isExpanded;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        }));
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)((/**
         * @return {?}
         */
        () => {
            this._isAnimationDone = true;
            this.expanded.emit(this);
        }));
    }
    /**
     * @param {?} isAnimated
     * @param {?} action
     * @return {?}
     */
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (/**
             * @param {?} callback
             * @return {?}
             */
            (callback) => callback());
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        /** @type {?} */
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (/**
         * @param {?} callback
         * @return {?}
         */
        (callback) => this._player.onDone(callback));
    }
}
CollapseDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                host: {
                    '[class.collapse]': 'true'
                }
            },] }
];
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AnimationBuilder"] }
];
CollapseDirective.propDecorators = {
    collapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    collapses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    expands: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    isExpanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.in',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-expanded',] }],
    isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.aria-hidden',] }],
    isCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapse',] }],
    isCollapsing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.collapsing',] }],
    display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    collapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CollapseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-collapse.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js ***!
  \********************************************************************************/
/*! exports provided: BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownModule, BsDropdownState, BsDropdownToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return BsDropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default dropdown configuration
 */
class BsDropdownConfig {
    constructor() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
        /**
         * default dropdown auto closing behavior
         */
        this.insideClick = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
    }
}
BsDropdownConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.resolveDropdownMenu = resolve;
        }));
    }
}
BsDropdownState.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
BsDropdownState.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DROPDOWN_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */
const dropdownAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0, overflow: 'hidden' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(DROPDOWN_ANIMATION_TIMING, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', overflow: 'hidden' }))
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownContainerComponent {
    /**
     * @param {?} _state
     * @param {?} cd
     * @param {?} _renderer
     * @param {?} _element
     * @param {?} _builder
     */
    constructor(_state, cd, _renderer, _element, _builder) {
        this._state = _state;
        this.cd = cd;
        this._renderer = _renderer;
        this._element = _element;
        this.isOpen = false;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        this._subscription = _state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.isOpen = value;
            /** @type {?} */
            const dropdown = this._element.nativeElement.querySelector('.dropdown-menu');
            this._renderer.addClass(this._element.nativeElement.querySelector('div'), 'open');
            if (dropdown && !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()) {
                this._renderer.addClass(dropdown, 'show');
                if (dropdown.classList.contains('dropdown-menu-right')) {
                    this._renderer.setStyle(dropdown, 'left', 'auto');
                    this._renderer.setStyle(dropdown, 'right', '0');
                }
                if (this.direction === 'up') {
                    this._renderer.setStyle(dropdown, 'top', 'auto');
                    this._renderer.setStyle(dropdown, 'transform', 'translateY(-101%)');
                }
            }
            if (dropdown && this._state.isAnimated) {
                this._factoryDropDownAnimation.create(dropdown)
                    .play();
            }
            this.cd.markForCheck();
            this.cd.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._state.direction;
    }
    /**
     * \@internal
     * @param {?} el
     * @return {?}
     */
    _contains(el) {
        return this._element.nativeElement.contains(el);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'bs-dropdown-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    style: 'display:block;position: absolute;'
                },
                template: `
    <div [class.dropup]="direction === 'up'"
         [class.dropdown]="direction === 'down'"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _state
     * @param {?} _config
     * @param {?} _builder
     */
    constructor(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._state = _state;
        this._config = _config;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
        this._state.insideClick = this._config.insideClick;
        this._state.isAnimated = this._config.isAnimated;
        this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
    }
    /**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     * @param {?} value
     * @return {?}
     */
    set autoClose(value) {
        this._state.autoClose = value;
    }
    /**
     * @return {?}
     */
    get autoClose() {
        return this._state.autoClose;
    }
    /**
     * Indicates that dropdown will be animated
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._state.isAnimated = value;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._state.isAnimated;
    }
    /**
     * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
     * @param {?} value
     * @return {?}
     */
    set insideClick(value) {
        this._state.insideClick = value;
    }
    /**
     * @return {?}
     */
    get insideClick() {
        return this._state.insideClick;
    }
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this._state.isDisabledChange.emit(value);
        if (value) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this._isDisabled;
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        if (this._showInline) {
            return this._isInlineOpen;
        }
        return this._dropdown.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])();
    }
    /**
     * @private
     * @return {?}
     */
    get _showInline() {
        return !this.container;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            // because of dropdown inline mode
            outsideClick: false,
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state.toggleClick.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this.toggle(value))));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state.isDisabledChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((/**
         * @param {?} value
         * @return {?}
         */
        (value) => value)))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => this.hide())));
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu.then((/**
                 * @param {?} dropdownMenu
                 * @return {?}
                 */
                (dropdownMenu) => {
                    this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
                    this._inlinedMenu = this._dropdown._inlineViewRef;
                    this.addBs4Polyfills();
                    this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode, 'open');
                    this.playAnimation();
                }))
                    // swallow errors
                    .catch();
            }
            this.addBs4Polyfills();
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            this.playAnimation();
            return;
        }
        this._state.dropdownMenu.then((/**
         * @param {?} dropdownMenu
         * @return {?}
         */
        dropdownMenu => {
            // check direction in which dropdown should be opened
            /** @type {?} */
            const _dropup = this.dropup ||
                (typeof this.dropup !== 'undefined' && this.dropup);
            this._state.direction = _dropup ? 'up' : 'down';
            /** @type {?} */
            const _placement = this.placement || (_dropup ? 'top start' : 'bottom start');
            // show dropdown
            this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            this._state.isOpenChange.emit(true);
        }))
            // swallow error
            .catch();
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this.removeShowClass();
            this.removeDropupStyles();
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
     * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
     * @param {?=} value
     * @return {?}
     */
    toggle(value) {
        if (this.isOpen || !value) {
            return this.hide();
        }
        return this.show();
    }
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    _contains(event) {
        return this._elementRef.nativeElement.contains(event.target) ||
            (this._dropdown.instance && this._dropdown.instance._contains(event.target));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions and destroy dropdown
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    }
    /**
     * @private
     * @return {?}
     */
    addBs4Polyfills() {
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_3__["isBs3"])()) {
            this.addShowClass();
            this.checkRightAlignment();
            this.addDropupStyles();
        }
    }
    /**
     * @private
     * @return {?}
     */
    playAnimation() {
        if (this._state.isAnimated && this._inlinedMenu) {
            this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0])
                .play();
        }
    }
    /**
     * @private
     * @return {?}
     */
    addShowClass() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeShowClass() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeClass(this._inlinedMenu.rootNodes[0], 'show');
        }
    }
    /**
     * @private
     * @return {?}
     */
    checkRightAlignment() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            /** @type {?} */
            const isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains('dropdown-menu-right');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'left', isRightAligned ? 'auto' : '0');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'right', isRightAligned ? '0' : 'auto');
        }
    }
    /**
     * @private
     * @return {?}
     */
    addDropupStyles() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            // a little hack to not break support of bootstrap 4 beta
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'top', this.dropup ? 'auto' : '100%');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'transform', this.dropup ? 'translateY(-101%)' : 'translateY(0)');
            this._renderer.setStyle(this._inlinedMenu.rootNodes[0], 'bottom', 'auto');
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeDropupStyles() {
        if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'top');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'transform');
            this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], 'bottom');
        }
    }
}
BsDropdownDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[bsDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState],
                host: {
                    '[class.dropup]': 'dropup',
                    '[class.open]': 'isOpen',
                    '[class.show]': 'isOpen && isBs4'
                }
            },] }
];
/** @nocollapse */
BsDropdownDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] },
    { type: BsDropdownState },
    { type: BsDropdownConfig },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AnimationBuilder"] }
];
BsDropdownDirective.propDecorators = {
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    insideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownMenuDirective {
    // tslint:disable:no-any
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] }
];
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownToggleDirective {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _dropdown
     * @param {?} _element
     * @param {?} _renderer
     * @param {?} _state
     */
    constructor(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.isOpen = value;
            if (value) {
                this._documentClickListener = this._renderer.listen('document', 'click', (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (this._state.autoClose && event.button !== 2 &&
                        !this._element.nativeElement.contains(event.target) &&
                        !(this._state.insideClick && this._dropdown._contains(event))) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                }));
                this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, 'keyup.esc', (/**
                 * @return {?}
                 */
                () => {
                    if (this._state.autoClose) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                }));
            }
            else {
                this._documentClickListener();
                this._escKeyUpListener();
            }
        })));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => (this.isDisabled = value || null))));
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            },] }
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: BsDropdownDirective },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: BsDropdownState }
];
BsDropdownToggleDirective.propDecorators = {
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disabled',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', [],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsDropdownModule {
    // tslint:disable-next-line:no-any
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"],
                ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"],
                BsDropdownState,
                {
                    provide: BsDropdownConfig,
                    useValue: config ? config : { autoClose: true, insideClick: false }
                }
            ]
        };
    }
}
BsDropdownModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-dropdown.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js ***!
  \**********************************************************/
/*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatePickerInnerComponent, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, hrLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, ukLocale, viLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public_api */ "./node_modules/ngx-bootstrap/esm5/public_api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listLocales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["setTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AccordionPanelComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonCheckboxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonRadioDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonRadioGroupDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ButtonsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SlideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["CollapseModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInlineContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInlineDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInputDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDaterangepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsLocaleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerInnerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatePickerInnerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DayPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["YearPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalBackdropComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsModalService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsDropdownToggleDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PagerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PaginationModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ProgressbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["RatingModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["DraggableItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["SortableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["NgTranscludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabHeadingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TabsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TimepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TooltipModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["TypeaheadModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["OnChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["warnOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["listenToTriggersV2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["registerOutsideClick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ComponentLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ContentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["BsComponentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["Positioning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["PositioningService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["positionElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["MiniStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["endOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["startOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "etLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["etLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hrLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["hrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lvLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["lvLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ukLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["ukLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["viLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJuZ3gtYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSw2cEZBQWMsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY19hcGknO1xuIl19

/***/ }),

/***/ "./node_modules/ngx-bootstrap/esm5/public_api.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-bootstrap/esm5/public_api.js ***!
  \*******************************************************/
/*! exports provided: listLocales, setTheme, AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent, AlertComponent, AlertConfig, AlertModule, ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, CarouselComponent, CarouselConfig, CarouselModule, SlideComponent, CollapseDirective, CollapseModule, BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatePickerInnerComponent, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ModalDirective, ModalOptions, ModalBackdropOptions, ModalBackdropComponent, ModalModule, BsModalRef, BsModalService, BsDropdownModule, BsDropdownConfig, BsDropdownState, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, BsDropdownToggleDirective, PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule, RatingComponent, RatingModule, DraggableItemService, SortableComponent, SortableModule, NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsetComponent, TabsetConfig, TabsModule, TimepickerComponent, TimepickerConfig, TimepickerModule, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, TypeaheadOptions, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule, OnChange, document, window, parseTriggers, LinkedList, isBs3, Trigger, warnOnce, Utils, listenToTriggersV2, registerOutsideClick, ComponentLoader, ComponentLoaderFactory, ContentRef, BsComponentRef, Positioning, PositioningService, positionElements, MiniState, MiniStore, defineLocale, getSetGlobalLocale, parseDate, formatDate, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, getLocale, updateLocale, isAfter, isBefore, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, hrLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, ukLocale, viLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["listLocales"]; });

/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["setTheme"]; });

/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm2015/ngx-bootstrap-accordion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionConfig", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionPanelComponent"]; });

/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"]; });

/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonCheckboxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonRadioGroupDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"]; });

/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideComponent", function() { return ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["SlideComponent"]; });

/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm2015/ngx-bootstrap-collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_6__["CollapseModule"]; });

/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerContainerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineContainerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInlineContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInlineDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInputDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerContainerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInputDirective", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDaterangepickerInputDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsLocaleService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DateFormatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatePickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerInnerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatePickerInnerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DayPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["MonthPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["YearPickerComponent"]; });

/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalBackdropComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]; });

/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownModule", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownMenuDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownToggleDirective"]; });

/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PagerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationModule"]; });

/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["BarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarConfig", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressbarModule", function() { return ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressbarModule"]; });

/* harmony import */ var ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/rating */ "./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return ngx_bootstrap_rating__WEBPACK_IMPORTED_MODULE_12__["RatingModule"]; });

/* harmony import */ var ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/sortable */ "./node_modules/ngx-bootstrap/sortable/fesm2015/ngx-bootstrap-sortable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["DraggableItemService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return ngx_bootstrap_sortable__WEBPACK_IMPORTED_MODULE_13__["SortableModule"]; });

/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm2015/ngx-bootstrap-tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["NgTranscludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabHeadingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_14__["TabsModule"]; });

/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_15__["TimepickerModule"]; });

/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"]; });

/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadMatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_17__["TypeaheadModule"]; });

/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverContainerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_18__["PopoverModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "document", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Trigger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["listenToTriggersV2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["registerOutsideClick"]; });

/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ComponentLoaderFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["ContentRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_19__["BsComponentRef"]; });

/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["Positioning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["PositioningService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_20__["positionElements"]; });

/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_21__["MiniStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["parseDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["formatDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isFirstDayOfWeek"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameDay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isSameMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFullYear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getFirstDayOfMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getMonth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDateValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["shiftDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["setFullDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["endOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["startOf"]; });

/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "etLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["etLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hrLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["hrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lvLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["lvLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ukLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["ukLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["viLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_22__["zhCnLocale"]; });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

























//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvIiwic291cmNlcyI6WyJwdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFvQkEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0UsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIseUJBQXlCLEVBQ3pCLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLGNBQWMsRUFDZCxjQUFjLEVBQ2YsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0UsT0FBTyxFQUNMLGtCQUFrQixFQUNsQiw4QkFBOEIsRUFDOUIscUJBQXFCLEVBQ3JCLG9DQUFvQyxFQUNwQywyQkFBMkIsRUFDM0IsMEJBQTBCLEVBQzFCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsbUNBQW1DLEVBQ25DLDBCQUEwQixFQUMxQiwrQkFBK0IsRUFDL0IsZUFBZSxFQUNmLGFBQWEsRUFDYixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDcEIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsY0FBYyxFQUNmLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLDRCQUE0QixFQUM1QixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUMxQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFDTCxjQUFjLEVBQ2QsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFFakIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2xCLE1BQU0sMkJBQTJCLENBQUM7QUFFbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRSxPQUFPLEVBRUwsb0JBQW9CLEVBRXBCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2YsTUFBTSx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsZUFBZSxFQUNmLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixnQkFBZ0IsRUFDakIsTUFBTSwwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQ0wsYUFBYSxFQUNiLHlCQUF5QixFQUN6QixnQkFBZ0IsRUFDaEIsYUFBYSxFQUNkLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUNMLGdCQUFnQixFQUNoQiwyQkFBMkIsRUFDM0Isa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxlQUFlLEVBQ2hCLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUNMLGFBQWEsRUFDYix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDZCxNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFDTCxRQUFRLEVBQ1IsUUFBUSxFQUNSLE1BQU0sRUFDTixhQUFhLEVBQ2IsVUFBVSxFQUNWLEtBQUssRUFDTCxPQUFPLEVBQ1AsUUFBUSxFQUNSLEtBQUssRUFDTCxrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3JCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUNMLGVBQWUsRUFDZixzQkFBc0IsRUFDdEIsVUFBVSxFQUNWLGNBQWMsRUFDZixNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFDTCxXQUFXLEVBRVgsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNqQixNQUFNLDJCQUEyQixDQUFDO0FBRW5DLE9BQU8sRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0seUJBQXlCLENBQUM7QUFFakMsT0FBTyxFQUNMLFlBQVksRUFDWixrQkFBa0IsRUFFbEIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsUUFBUSxFQUNSLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxFQUNQLFFBQVEsRUFDUixPQUFPLEVBQ1AsV0FBVyxFQUNYLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxPQUFPLEVBRVIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQiwyYUFBYyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgeyBBY2NvcmRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2FjY29yZGlvbic7XG5pbXBvcnQgeyBBbGVydE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYWxlcnQnO1xuaW1wb3J0IHsgQnV0dG9uc01vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvYnV0dG9ucyc7XG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2Fyb3VzZWwnO1xuaW1wb3J0IHsgQ29sbGFwc2VNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbGxhcHNlJztcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyJztcbmltcG9ydCB7IERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuaW1wb3J0IHsgQnNEcm9wZG93bk1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9wb3Zlcic7XG5pbXBvcnQgeyBQcm9ncmVzc2Jhck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXInO1xuaW1wb3J0IHsgUmF0aW5nTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9yYXRpbmcnO1xuaW1wb3J0IHsgU29ydGFibGVNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3NvcnRhYmxlJztcbmltcG9ydCB7IFRhYnNNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuaW1wb3J0IHsgVGltZXBpY2tlck1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcbmltcG9ydCB7IFR5cGVhaGVhZE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcblxuZXhwb3J0IHsgbGlzdExvY2FsZXMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xuZXhwb3J0IHsgc2V0VGhlbWUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcblxuZXhwb3J0IHtcbiAgQWNjb3JkaW9uQ29tcG9uZW50LFxuICBBY2NvcmRpb25Db25maWcsXG4gIEFjY29yZGlvbk1vZHVsZSxcbiAgQWNjb3JkaW9uUGFuZWxDb21wb25lbnRcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hY2NvcmRpb24nO1xuXG5leHBvcnQgeyBBbGVydENvbXBvbmVudCwgQWxlcnRDb25maWcsIEFsZXJ0TW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9hbGVydCc7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlLFxuICBCdXR0b25SYWRpb0RpcmVjdGl2ZSxcbiAgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSxcbiAgQnV0dG9uc01vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2J1dHRvbnMnO1xuXG5leHBvcnQge1xuICBDYXJvdXNlbENvbXBvbmVudCxcbiAgQ2Fyb3VzZWxDb25maWcsXG4gIENhcm91c2VsTW9kdWxlLFxuICBTbGlkZUNvbXBvbmVudFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nhcm91c2VsJztcblxuZXhwb3J0IHsgQ29sbGFwc2VEaXJlY3RpdmUsIENvbGxhcHNlTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb2xsYXBzZSc7XG5cbmV4cG9ydCB7XG4gIEJzRGF0ZXBpY2tlckNvbmZpZyxcbiAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxuICBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXG4gIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlLFxuICBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcbiAgQnNEYXRlcGlja2VyTW9kdWxlLFxuICBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcbiAgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQsXG4gIEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlLFxuICBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlLFxuICBCc0xvY2FsZVNlcnZpY2UsXG4gIERhdGVGb3JtYXR0ZXIsXG4gIERhdGVQaWNrZXJDb21wb25lbnQsXG4gIERhdGVwaWNrZXJDb25maWcsXG4gIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCxcbiAgRGF0ZXBpY2tlck1vZHVsZSxcbiAgRGF5UGlja2VyQ29tcG9uZW50LFxuICBNb250aFBpY2tlckNvbXBvbmVudCxcbiAgWWVhclBpY2tlckNvbXBvbmVudFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xuXG5leHBvcnQge1xuICBNb2RhbERpcmVjdGl2ZSxcbiAgTW9kYWxPcHRpb25zLFxuICBNb2RhbEJhY2tkcm9wT3B0aW9ucyxcbiAgTW9kYWxCYWNrZHJvcENvbXBvbmVudCxcbiAgTW9kYWxNb2R1bGUsXG4gIEJzTW9kYWxSZWYsXG4gIEJzTW9kYWxTZXJ2aWNlXG59IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5leHBvcnQge1xuICBCc0Ryb3Bkb3duTW9kdWxlLFxuICBCc0Ryb3Bkb3duQ29uZmlnLFxuICBCc0Ryb3Bkb3duU3RhdGUsXG4gIEJzRHJvcGRvd25Db250YWluZXJDb21wb25lbnQsXG4gIEJzRHJvcGRvd25EaXJlY3RpdmUsXG4gIEJzRHJvcGRvd25NZW51RGlyZWN0aXZlLFxuICBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlXG59IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xuXG5leHBvcnQge1xuICBQYWdlckNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgUGFnaW5hdGlvbkNvbmZpZyxcbiAgUGFnaW5hdGlvbk1vZHVsZSxcbiAgUGFnZUNoYW5nZWRFdmVudFxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3BhZ2luYXRpb24nO1xuXG5leHBvcnQge1xuICBCYXJDb21wb25lbnQsXG4gIFByb2dyZXNzYmFyQ29tcG9uZW50LFxuICBQcm9ncmVzc2JhckNvbmZpZyxcbiAgUHJvZ3Jlc3NiYXJNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhcic7XG5cbmV4cG9ydCB7IFJhdGluZ0NvbXBvbmVudCwgUmF0aW5nTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9yYXRpbmcnO1xuXG5leHBvcnQge1xuICBEcmFnZ2FibGVJdGVtLFxuICBEcmFnZ2FibGVJdGVtU2VydmljZSxcbiAgU29ydGFibGVJdGVtLFxuICBTb3J0YWJsZUNvbXBvbmVudCxcbiAgU29ydGFibGVNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9zb3J0YWJsZSc7XG5cbmV4cG9ydCB7XG4gIE5nVHJhbnNjbHVkZURpcmVjdGl2ZSxcbiAgVGFiRGlyZWN0aXZlLFxuICBUYWJIZWFkaW5nRGlyZWN0aXZlLFxuICBUYWJzZXRDb21wb25lbnQsXG4gIFRhYnNldENvbmZpZyxcbiAgVGFic01vZHVsZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL3RhYnMnO1xuXG5leHBvcnQge1xuICBUaW1lcGlja2VyQ29tcG9uZW50LFxuICBUaW1lcGlja2VyQ29uZmlnLFxuICBUaW1lcGlja2VyTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XG5cbmV4cG9ydCB7XG4gIFRvb2x0aXBDb25maWcsXG4gIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQsXG4gIFRvb2x0aXBEaXJlY3RpdmUsXG4gIFRvb2x0aXBNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC90b29sdGlwJztcblxuZXhwb3J0IHtcbiAgVHlwZWFoZWFkT3B0aW9ucyxcbiAgVHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50LFxuICBUeXBlYWhlYWREaXJlY3RpdmUsXG4gIFR5cGVhaGVhZE1hdGNoLFxuICBUeXBlYWhlYWRNb2R1bGVcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQnO1xuXG5leHBvcnQge1xuICBQb3BvdmVyQ29uZmlnLFxuICBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50LFxuICBQb3BvdmVyRGlyZWN0aXZlLFxuICBQb3BvdmVyTW9kdWxlXG59IGZyb20gJ25neC1ib290c3RyYXAvcG9wb3Zlcic7XG5cbmV4cG9ydCB7XG4gIE9uQ2hhbmdlLFxuICBkb2N1bWVudCxcbiAgd2luZG93LFxuICBwYXJzZVRyaWdnZXJzLFxuICBMaW5rZWRMaXN0LFxuICBpc0JzMyxcbiAgVHJpZ2dlcixcbiAgd2Fybk9uY2UsXG4gIFV0aWxzLFxuICBsaXN0ZW5Ub1RyaWdnZXJzVjIsXG4gIHJlZ2lzdGVyT3V0c2lkZUNsaWNrXG59IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xuXG5leHBvcnQge1xuICBDb21wb25lbnRMb2FkZXIsXG4gIENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gIENvbnRlbnRSZWYsXG4gIEJzQ29tcG9uZW50UmVmXG59IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XG5cbmV4cG9ydCB7XG4gIFBvc2l0aW9uaW5nLFxuICBQb3NpdGlvbmluZ09wdGlvbnMsXG4gIFBvc2l0aW9uaW5nU2VydmljZSxcbiAgcG9zaXRpb25FbGVtZW50c1xufSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcblxuZXhwb3J0IHtcbiAgQWN0aW9uLFxuICBNaW5pU3RhdGUsXG4gIE1pbmlTdG9yZVxufSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XG5cbmV4cG9ydCB7XG4gIGRlZmluZUxvY2FsZSxcbiAgZ2V0U2V0R2xvYmFsTG9jYWxlLFxuICBMb2NhbGVEYXRhLFxuICBwYXJzZURhdGUsXG4gIGZvcm1hdERhdGUsXG4gIGdldERheSxcbiAgaXNGaXJzdERheU9mV2VlayxcbiAgaXNTYW1lWWVhcixcbiAgaXNTYW1lRGF5LFxuICBpc1NhbWVNb250aCxcbiAgZ2V0RnVsbFllYXIsXG4gIGdldEZpcnN0RGF5T2ZNb250aCxcbiAgZ2V0TW9udGgsXG4gIGdldExvY2FsZSxcbiAgdXBkYXRlTG9jYWxlLFxuICBpc0FmdGVyLFxuICBpc0JlZm9yZSxcbiAgaXNBcnJheSxcbiAgaXNEYXRlVmFsaWQsXG4gIGlzRGF0ZSxcbiAgc2hpZnREYXRlLFxuICBzZXRGdWxsRGF0ZSxcbiAgZW5kT2YsXG4gIHN0YXJ0T2YsXG4gIFRpbWVVbml0XG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XG5cbmV4cG9ydCAqIGZyb20gJ25neC1ib290c3RyYXAvbG9jYWxlJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/locale/fesm2015/ngx-bootstrap-locale.js ***!
  \****************************************************************************/
/*! exports provided: arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, hrLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, ukLocale, viLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "etLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["etLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hrLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lvLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["lvLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ukLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ukLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["viLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]; });


//# sourceMappingURL=ngx-bootstrap-locale.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js ***!
  \**************************************************************************/
/*! exports provided: BsModalRef, BsModalService, ModalBackdropComponent, ModalBackdropOptions, ModalContainerComponent, ModalDirective, ModalModule, ModalOptions, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalRef", function() { return BsModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsModalService", function() { return BsModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CLASS_NAME; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalRef {
    constructor() {
        /**
         * Hides the modal
         */
        this.hide = Function;
        /**
         * Sets new class to modal window
         */
        this.setClass = Function;
    }
}
BsModalRef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalBackdropOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.animate = true;
        Object.assign(this, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalOptions {
}
ModalOptions.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @type {?} */
const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
/** @type {?} */
const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
/** @type {?} */
const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
/** @type {?} */
const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalContainerComponent {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isModalHiding = false;
        this.config = Object.assign({}, options);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }), this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.bsModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this.isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService.getModalsCount()) {
            this.bsModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.isShown = false;
            if (document &&
                document.body &&
                this.bsModalService.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            this.bsModalService.hide(this.level);
            this.isModalHiding = false;
        }), this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
}
ModalContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'modal-container',
                template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')" role="document">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                host: {
                    class: 'modal',
                    role: 'dialog',
                    tabindex: '-1',
                    '[attr.aria-modal]': 'true'
                }
            }] }
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ModalContainerComponent.propDecorators = {
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * This component will be added as background layout for modals if enabled
 */
class ModalBackdropComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._isAnimated = value;
        // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShown(value) {
        this._isShown = value;
        if (value) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            if (value) {
                this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'bs-modal-backdrop',
                template: ' ',
                host: { class: CLASS_NAME.BACKDROP }
            }] }
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TRANSITION_DURATION = 300;
/** @type {?} */
const BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
class ModalDirective {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    constructor(_element, _viewContainerRef, _renderer, clf) {
        this._element = _element;
        this._renderer = _renderer;
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user
         * (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when
         * the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being
         * hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    /**
     * allows to set modal configuration via element property
     * @param {?} conf
     * @return {?}
     */
    set config(conf) {
        this._config = this.getConfig(conf);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    }
    // todo: consider preventing default and stopping propagation
    /**
     * @param {?} event
     * @return {?}
     */
    onEsc(event) {
        if (!this._isShown) {
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._config = this._config || this.getConfig();
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this._config.show) {
                this.show();
            }
        }), 0);
    }
    /* Public methods */
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    toggle() {
        return this._isShown ? this.hide() : this.show();
    }
    /**
     * Allows to manually open modal
     * @return {?}
     */
    show() {
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.classList.contains(CLASS_NAME.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
            }
        }
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            this.showElement();
        }));
    }
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    hide(event) {
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerHideModal);
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.removeClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        // this._addClassIn = false;
        if (this._config.animated) {
            this.timerHideModal = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout((/**
             * @return {?}
             */
            () => this.hideModal()), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    }
    /**
     * Private methods \@internal
     * @protected
     * @param {?=} config
     * @return {?}
     */
    getConfig(config) {
        return Object.assign({}, modalConfigDefaults, config);
    }
    /**
     *  Show dialog
     * \@internal
     * @protected
     * @return {?}
     */
    showElement() {
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // don't move modals dom position
            if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setAttribute(this._element.nativeElement, 'aria-modal', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this._config.animated) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].reflow(this._element.nativeElement);
        }
        // this._addClassIn = true;
        this._renderer.addClass(this._element.nativeElement, CLASS_NAME.IN);
        if (!Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])()) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.SHOW);
        }
        /** @type {?} */
        const transitionComplete = (/**
         * @return {?}
         */
        () => {
            if (this._config.focus) {
                this._element.nativeElement.focus();
            }
            this.onShown.emit(this);
        });
        if (this._config.animated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    hideModal() {
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop((/**
         * @return {?}
         */
        () => {
            if (!this.isNested) {
                if (ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"] && ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body) {
                    this._renderer.removeClass(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, CLASS_NAME.OPEN);
                }
                this.resetScrollbar();
            }
            this.resetAdjustments();
            this.focusOtherModal();
            this.onHidden.emit(this);
        }));
    }
    // todo: original show was calling a callback when done, but we can use
    // promise
    /**
     * \@internal
     * @protected
     * @param {?=} callback
     * @return {?}
     */
    showBackdrop(callback) {
        if (this._isShown &&
            this.config.backdrop &&
            (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this._config.animated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this._config.animated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            /** @type {?} */
            const callbackRemove = (/**
             * @return {?}
             */
            () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            });
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    removeBackdrop() {
        this._backdrop.hide();
    }
    /**
     * Events tricks
     * @protected
     * @return {?}
     */
    // no need for it
    // protected setEscapeEvent():void {
    //   if (this._isShown && this._config.keyboard) {
    //     $(this._element).on(Event.KEYDOWN_DISMISS, (event) => {
    //       if (event.which === 27) {
    //         this.hide()
    //       }
    //     })
    //
    //   } else if (!this._isShown) {
    //     $(this._element).off(Event.KEYDOWN_DISMISS)
    //   }
    // }
    // protected setResizeEvent():void {
    // console.log(this.renderer.listenGlobal('', Event.RESIZE));
    // if (this._isShown) {
    //   $(window).on(Event.RESIZE, $.proxy(this._handleUpdate, this))
    // } else {
    //   $(window).off(Event.RESIZE)
    // }
    // }
    focusOtherModal() {
        if (this._element.nativeElement.parentElement == null) {
            return;
        }
        /** @type {?} */
        const otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[bsModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        otherOpenedModals[otherOpenedModals.length - 1].focus();
    }
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    resetAdjustments() {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /** Scroll bar tricks */
    /**
     * \@internal
     * @protected
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.clientWidth < ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"].innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @protected
     * @return {?}
     */
    setScrollbar() {
        if (!ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"]) {
            return;
        }
        this.originalBodyPadding = parseInt(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["window"]
            .getComputedStyle(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body)
            .getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    resetScrollbar() {
        ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @protected
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["document"].body, scrollDiv);
        return scrollbarWidth;
    }
}
ModalDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[bsModal]',
                exportAs: 'bs-modal'
            },] }
];
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
];
ModalDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BsModalService {
    /**
     * @param {?} rendererFactory
     * @param {?} clf
     */
    constructor(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        // tslint:disable-next-line:no-any
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    show(content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    hide(level) {
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._hideModal(level);
            this.removeLoaders(level);
        }), this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        /** @type {?} */
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout((/**
         * @return {?}
         */
        () => this.removeBackdrop()), duration);
    }
    // tslint:disable-next-line:no-any
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        /** @type {?} */
        const modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        const bsModalRef = new BsModalRef();
        /** @type {?} */
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content, isAnimated: this.config.animated, initialState: this.config.initialState, bsModalService: this });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.hide = (/**
         * @return {?}
         */
        () => {
            modalContainerRef.instance.hide();
        });
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.setClass = (/**
         * @param {?} newClass
         * @return {?}
         */
        (newClass) => {
            modalContainerRef.instance.config.class = newClass;
        });
        return bsModalRef;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    _hideModal(level) {
        /** @type {?} */
        const modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */
    removeBackdrop() {
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE */
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    getScrollbarWidth() {
        /** @type {?} */
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @private
     * @return {?}
     */
    _createLoaders() {
        /** @type {?} */
        const loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    }
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    removeLoaders(level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((/**
         * @param {?} loader
         * @param {?} i
         * @return {?}
         */
        (loader, i) => {
            loader.instance.level = i + 1;
        }));
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe((/**
         * @return {?}
         */
        () => {
            to.emit(this.lastDismissReason);
        }));
    }
}
BsModalService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
BsModalService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_2__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
}
ModalModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    ModalBackdropComponent,
                    ModalDirective,
                    ModalContainerComponent
                ],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-modal.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
  \************************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */
class PaginationConfig {
    constructor() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PagerComponent)),
    multi: true
};
class PagerComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        /** @type {?} */
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[`${key}Text`] || ((/** @type {?} */ (this))).config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    /**
     * @protected
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PagerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
PagerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PagerComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => PaginationComponent)),
    multi: true
};
class PaginationComponent {
    /**
     * @param {?} elementRef
     * @param {?} paginationConfig
     * @param {?} changeDetection
     */
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    /**
     * maximum number of items per page. If value less than 1 will display all items on one page
     * @return {?}
     */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * total number of items in all pages
     * @return {?}
     */
    get totalItems() {
        return this._totalItems;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    /**
     * @return {?}
     */
    get totalPages() {
        return this._totalPages;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        /** @type {?} */
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getText(key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[`${key}Text`] || ((/** @type {?} */ (this))).config[`${key}Text`];
    }
    /**
     * @return {?}
     */
    noPrevious() {
        return this.page === 1;
    }
    /**
     * @return {?}
     */
    noNext() {
        return this.page === this.totalPages;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    getPages(currentPage, totalPages) {
        /** @type {?} */
        const pages = [];
        // Default page limits
        /** @type {?} */
        let startPage = 1;
        /** @type {?} */
        let endPage = totalPages;
        /** @type {?} */
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            /** @type {?} */
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    /**
     * @protected
     * @return {?}
     */
    calculateTotalPages() {
        /** @type {?} */
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PaginationComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
PaginationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: PaginationConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
PaginationComponent.propDecorators = {
    align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PaginationModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    }
}
PaginationModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-pagination.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/popover/fesm2015/ngx-bootstrap-popover.js ***!
  \******************************************************************************/
/*! exports provided: PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
class PopoverConfig {
    constructor() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
}
PopoverConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["isBs3"])();
    }
}
PopoverContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'popover-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                },
                template: "<div class=\"popover-arrow arrow\"></div>\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\n<div class=\"popover-content popover-body\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [`
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `]
            }] }
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
PopoverContainerComponent.propDecorators = {
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} _positionService
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
        this._positionService = _positionService;
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', (/**
             * @return {?}
             */
            function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            }));
        }
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._popover.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        if (!this.adaptivePosition) {
            this._positionService.calcPosition();
            this._positionService.deletePositionElement(this._popover._componentRef.location);
        }
        this.isOpen = true;
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
];
/** @nocollapse */
PopoverDirective.ctorParameters = () => [
    { type: PopoverConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }
];
PopoverDirective.propDecorators = {
    adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popoverContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    popoverTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopoverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_1__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"]]
        };
    }
}
PopoverModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-popover.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/rating/fesm2015/ngx-bootstrap-rating.js ***!
  \****************************************************************************/
/*! exports provided: RatingComponent, RatingModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingModule", function() { return RatingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RATING_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RATING_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => RatingComponent)),
    multi: true
};
class RatingComponent {
    /**
     * @param {?} changeDetection
     */
    constructor(changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        const sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    }
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    enter(value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    rate(value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    }
    /**
     * @protected
     * @param {?} max
     * @return {?}
     */
    buildTemplateObjects(max) {
        /** @type {?} */
        const result = [];
        for (let i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    }
}
RatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'rating',
                template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\n      [attr.aria-valuenow]=\"value\">\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\n    <span class=\"bs-rating-star\"\n          (mouseenter)=\"enter(index + 1)\"\n          (click)=\"rate(index + 1)\"\n          [title]=\"r.title\"\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\n          [class.active]=\"index < value\">\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\n      </ng-template>\n    </span>\n  </ng-template>\n</span>\n",
                providers: [RATING_CONTROL_VALUE_ACCESSOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }] }
];
/** @nocollapse */
RatingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
RatingComponent.propDecorators = {
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    titles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onLeave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RatingModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: RatingModule,
            providers: []
        };
    }
}
RatingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [RatingComponent],
                exports: [RatingComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-rating.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/sortable/fesm2015/ngx-bootstrap-sortable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/sortable/fesm2015/ngx-bootstrap-sortable.js ***!
  \********************************************************************************/
/*! exports provided: DraggableItemService, SortableComponent, SortableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableItemService", function() { return DraggableItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return SortableModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DraggableItemService {
    constructor() {
        this.onCapture = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    dragStart(item) {
        this.draggableItem = item;
    }
    /**
     * @return {?}
     */
    getItem() {
        return this.draggableItem;
    }
    /**
     * @param {?} overZoneIndex
     * @param {?} newIndex
     * @return {?}
     */
    captureItem(overZoneIndex, newIndex) {
        if (this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    }
    /**
     * @return {?}
     */
    onCaptureItem() {
        return this.onCapture;
    }
}
DraggableItemService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/* tslint:enable */
class SortableComponent {
    /**
     * @param {?} transfer
     */
    constructor(transfer) {
        /**
         * class name for items wrapper
         */
        this.wrapperClass = '';
        /**
         * style object for items wrapper
         */
        this.wrapperStyle = {};
        /**
         * class name for item
         */
        this.itemClass = '';
        /**
         * style object for item
         */
        this.itemStyle = {};
        /**
         * class name for active item
         */
        this.itemActiveClass = '';
        /**
         * style object for active item
         */
        this.itemActiveStyle = {};
        /**
         * class name for placeholder
         */
        this.placeholderClass = '';
        /**
         * style object for placeholder
         */
        this.placeholderStyle = {};
        /**
         * placeholder item which will be shown if collection is empty
         */
        this.placeholderItem = '';
        /**
         * fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        /* tslint:disable-next-line: no-any */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showPlaceholder = false;
        this.activeItem = -1;
        /* tslint:disable-next-line: no-any */
        this.onTouched = Function.prototype;
        /* tslint:disable-next-line: no-any */
        this.onChanged = Function.prototype;
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this.onDrop(item)));
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._items = value;
        /** @type {?} */
        const out = this.items.map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.initData));
        this.onChanged(out);
        this.onChange.emit(out);
    }
    /**
     * @param {?} event
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    onItemDragstart(event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event,
            item,
            i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    }
    /**
     * @param {?} event
     * @param {?} i
     * @return {?}
     */
    onItemDragover(event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        /** @type {?} */
        const dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        /* tslint:disable-next-line: no-any */
        /** @type {?} */
        let newArray = [];
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = [
                ...this.items.slice(0, i),
                dragItem.item,
                ...this.items.slice(i, dragItem.i),
                ...this.items.slice(dragItem.i + 1)
            ];
        }
        else {
            // this.draggedItem.i < i
            newArray = [
                ...this.items.slice(0, dragItem.i),
                ...this.items.slice(dragItem.i + 1, i + 1),
                dragItem.item,
                ...this.items.slice(i + 1)
            ];
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cancelEvent(event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDrop(item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            (x, i) => i !== item.i));
            this.updatePlaceholderState();
        }
        this.resetActiveItem(undefined);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    resetActiveItem(event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnChange(callback) {
        this.onChanged = callback;
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            /* tslint:disable-next-line: no-any */
            this.items = value.map((/**
             * @param {?} x
             * @param {?} i
             * @return {?}
             */
            (x, i) => ({
                id: i,
                initData: x,
                value: this.fieldName ? x[this.fieldName] : x
            })));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    }
    /**
     * @return {?}
     */
    updatePlaceholderState() {
        this.showPlaceholder = !this._items.length;
    }
    /**
     * @param {?} isActive
     * @return {?}
     */
    getItemStyle(isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    }
    // tslint:disable-next-line
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    initDragstartEvent(event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer.setData('Text', 'placeholder');
    }
}
SortableComponent.globalZoneIndex = 0;
SortableComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'bs-sortable',
                exportAs: 'bs-sortable',
                template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>  
`,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                         * @return {?}
                         */
                        () => SortableComponent)),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
SortableComponent.ctorParameters = () => [
    { type: DraggableItemService }
];
SortableComponent.propDecorators = {
    fieldName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    wrapperClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    wrapperStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemActiveClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemActiveStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholderClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholderStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholderItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortableModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    }
}
SortableModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [SortableComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [SortableComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-sortable.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js ***!
  \************************************************************************************/
/*! exports provided: TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerActions", function() { return TimepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerComponent", function() { return TimepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerConfig", function() { return TimepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerModule", function() { return TimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerStore", function() { return TimepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return TIMEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerActions {
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeHours(event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeMinutes(event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeSeconds(event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTime(value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateControls(value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    }
}
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
TimepickerActions.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const dex = 10;
/** @type {?} */
const hoursPerDay = 24;
/** @type {?} */
const hoursPerDayHalf = 12;
/** @type {?} */
const minutesPerHour = 60;
/** @type {?} */
const secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
function parseHours(value, isPM = false) {
    /** @type {?} */
    const hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseMinutes(value) {
    /** @type {?} */
    const minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseSeconds(value) {
    /** @type {?} */
    const seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    /** @type {?} */
    let hour = value.getHours();
    /** @type {?} */
    let minutes = value.getMinutes();
    /** @type {?} */
    let seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
function setTime(value, opts) {
    /** @type {?} */
    let hour = parseHours(opts.hour);
    /** @type {?} */
    const minute = parseMinutes(opts.minute);
    /** @type {?} */
    const seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
function createDate(value, hours, minutes, seconds) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
}
/**
 * @param {?} value
 * @return {?}
 */
function padNumber(value) {
    /** @type {?} */
    const _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
function isInputLimitValid(diff, max, min) {
    /** @type {?} */
    const newDate = setTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} state
 * @param {?=} event
 * @return {?}
 */
function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
/**
 * @param {?} event
 * @param {?} controls
 * @return {?}
 */
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
/**
 * @param {?} state
 * @return {?}
 */
function getControlsValue(state) {
    const { hourStep, minuteStep, secondsStep, readonlyInput, disabled, mousewheel, arrowkeys, showSpinners, showMeridian, showSeconds, meridians, min, max } = state;
    return {
        hourStep,
        minuteStep,
        secondsStep,
        readonlyInput,
        disabled,
        mousewheel,
        arrowkeys,
        showSpinners,
        showMeridian,
        showSeconds,
        meridians,
        min,
        max
    };
}
/**
 * @param {?} value
 * @param {?} state
 * @return {?}
 */
function timepickerControls(value, state) {
    /** @type {?} */
    const hoursPerDayHalf = 12;
    const { min, max, hourStep, minuteStep, secondsStep, showSeconds } = state;
    /** @type {?} */
    const res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour;
        if (!res.canIncrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        /** @type {?} */
        const _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            /** @type {?} */
            const _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            /** @type {?} */
            const _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default configuration values for timepicker
 */
class TimepickerConfig {
    constructor() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
        /**
         * placeholder for hours field in timepicker
         */
        this.hoursPlaceholder = 'HH';
        /**
         * placeholder for minutes field in timepicker
         */
        this.minutesPlaceholder = 'MM';
        /**
         * placeholder for seconds field in timepicker
         */
        this.secondsPlaceholder = 'SS';
    }
}
TimepickerConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const initialState = {
    value: null,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
// tslint:disable-next-line:cyclomatic-complexity
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function timepickerReducer(state = initialState, action) {
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            /** @type {?} */
            const _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            /** @type {?} */
            const _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            /** @type {?} */
            const _newControlsState = timepickerControls(state.value, action.payload);
            /** @type {?} */
            const _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerStore extends ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniStore"] {
    constructor() {
        /** @type {?} */
        const _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            type: '[mini-ngrx] dispatcher init'
        });
        /** @type {?} */
        const state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_3__["MiniState"](initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
TimepickerStore.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => TimepickerComponent)),
    multi: true
};
class TimepickerComponent {
    /**
     * @param {?} _config
     * @param {?} _cd
     * @param {?} _store
     * @param {?} _timepickerActions
     */
    constructor(_config, _cd, _store, _timepickerActions) {
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // control value accessor methods
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.value))
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            // update UI values if date changed
            this._renderTime(value);
            this.onChange(value);
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        }));
        _store
            .select((/**
         * @param {?} state
         * @return {?}
         */
        state => state.controls))
            .subscribe((/**
         * @param {?} controlsState
         * @return {?}
         */
        (controlsState) => {
            this.isValid.emit(isInputValid(this.hours, this.minutes, this.seconds, this.isPM()));
            Object.assign(this, controlsState);
            _cd.markForCheck();
        }));
    }
    /**
     * @deprecated - please use `isEditable` instead
     * @return {?}
     */
    get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
    }
    /**
     * @return {?}
     */
    get isEditable() {
        return !(this.readonlyInput || this.disabled);
    }
    /**
     * @return {?}
     */
    resetValidation() {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    }
    /**
     * @return {?}
     */
    isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    prevDef($event) {
        $event.preventDefault();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    wheelSign($event) {
        return Math.sign($event.deltaY) * -1;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeHours(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeMinutes(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step, source }));
    }
    /**
     * @param {?} step
     * @param {?=} source
     * @return {?}
     */
    changeSeconds(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step, source }));
    }
    /**
     * @param {?} hours
     * @return {?}
     */
    updateHours(hours) {
        this.resetValidation();
        this.hours = hours;
        /** @type {?} */
        const isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    updateMinutes(minutes) {
        this.resetValidation();
        this.minutes = minutes;
        /** @type {?} */
        const isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    updateSeconds(seconds) {
        this.resetValidation();
        this.seconds = seconds;
        /** @type {?} */
        const isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    /**
     * @return {?}
     */
    isValidLimit() {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    }
    /**
     * @return {?}
     */
    _updateTime() {
        /** @type {?} */
        const _seconds = this.showSeconds ? this.seconds : void 0;
        /** @type {?} */
        const _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    }
    /**
     * @return {?}
     */
    toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    }
    /**
     * Write a new value to the element.
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue(null));
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     * @param {?} fn
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.timepickerSub.unsubscribe();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _renderTime(value) {
        if (!isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        /** @type {?} */
        const _value = parseTime(value);
        /** @type {?} */
        const _hoursPerDayHalf = 12;
        /** @type {?} */
        let _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    }
}
TimepickerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'timepicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                template: "<table>\n  <tbody>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- increment hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\n         (click)=\"changeHours(hourStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- increment minutes button -->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(minuteStep)\"\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- increment seconds button -->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-up\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  <tr>\n    <!-- hours -->\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"hoursPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"hours\"\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\n             (change)=\"updateHours($event.target.value)\"></td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\n    <!-- minutes -->\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"minutesPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"minutes\"\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\n             (change)=\"updateMinutes($event.target.value)\">\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\n    <!-- seconds -->\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\n             class=\"form-control text-center bs-timepicker-field\"\n             [placeholder]=\"secondsPlaceholder\"\n             maxlength=\"2\"\n             [readonly]=\"readonlyInput\"\n             [disabled]=\"disabled\"\n             [value]=\"seconds\"\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\n             (change)=\"updateSeconds($event.target.value)\">\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian -->\n    <td *ngIf=\"showMeridian\">\n      <button type=\"button\" class=\"btn btn-default text-center\"\n              [disabled]=\"!isEditable || !canToggleMeridian\"\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\n              (click)=\"toggleMeridian()\"\n      >{{ meridian }}\n      </button>\n    </td>\n  </tr>\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\n    <!-- decrement hours button-->\n    <td>\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\n         (click)=\"changeHours(-hourStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- decrement minutes button-->\n    <td *ngIf=\"showMinutes\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\n         (click)=\"changeMinutes(-minuteStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- divider -->\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\n    <!-- decrement seconds button-->\n    <td *ngIf=\"showSeconds\">\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\n         (click)=\"changeSeconds(-secondsStep)\">\n        <span class=\"bs-chevron bs-chevron-down\"></span>\n      </a>\n    </td>\n    <!-- space between -->\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\n    <!-- meridian placeholder-->\n    <td *ngIf=\"showMeridian\"></td>\n  </tr>\n  </tbody>\n</table>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [`
    .bs-chevron {
      border-style: solid;
      display: block;
      width: 9px;
      height: 9px;
      position: relative;
      border-width: 3px 0px 0 3px;
    }

    .bs-chevron-up {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 2px;
    }

    .bs-chevron-down {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: -2px;
    }

    .bs-timepicker-field {
      width: 50px;
      padding: .375rem .55rem;
    }
  `]
            }] }
];
/** @nocollapse */
TimepickerComponent.ctorParameters = () => [
    { type: TimepickerConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: TimepickerStore },
    { type: TimepickerActions }
];
TimepickerComponent.propDecorators = {
    hourStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minuteStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    secondsStep: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    readonlyInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mousewheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    arrowkeys: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSpinners: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showMeridian: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showMinutes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    meridians: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    hoursPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minutesPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    secondsPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isValid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TimepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-timepicker.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js ***!
  \******************************************************************************/
/*! exports provided: TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
class TooltipConfig {
    constructor() {
        /**
         * sets disable adaptive position
         */
        this.adaptivePosition = true;
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
        /**
         * delay before showing the tooltip
         */
        this.delay = 0;
    }
}
TooltipConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'bs-tooltip-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
                styles: [`
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `]
            }] }
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let id = 0;
class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _positionService
     */
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /**
         * @deprecated - removed, will be added to configuration
         */
        this.tooltipAnimation = true;
        /**
         * @deprecated
         */
        this.tooltipFadeDuration = 150;
        this.ariaDescribedby = `tooltip-${this.tooltipId}`;
        /**
         * @deprecated
         */
        this.tooltipStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */
    set htmlContent(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */
    set _placement(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */
    set _isOpen(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    /**
     * @return {?}
     */
    get _isOpen() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */
    set _enable(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    /**
     * @return {?}
     */
    get _enable() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */
    set _appendToBody(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    /**
     * @return {?}
     */
    get _appendToBody() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */
    set _popupClass(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipClass deprecated');
    }
    /**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */
    set _tooltipContext(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipContext deprecated');
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set _tooltipPopupDelay(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */
    get _tooltipTrigger() {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _tooltipTrigger(value) {
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["warnOnce"])('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!value) {
                this._tooltip.hide();
            }
        }));
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    show() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        /** @type {?} */
        const showTooltip = (/**
         * @return {?}
         */
        () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: this.ariaDescribedby
            });
        });
        /** @type {?} */
        const cancelDelayedTooltipShowing = (/**
         * @return {?}
         */
        () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        });
        if (this.delay) {
            /** @type {?} */
            const _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(this.delay).subscribe((/**
             * @return {?}
             */
            () => {
                showTooltip();
                cancelDelayedTooltipShowing();
            }));
            if (this.triggers) {
                Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["parseTriggers"])(this.triggers)
                    .forEach((/**
                 * @param {?} trigger
                 * @return {?}
                 */
                (trigger) => {
                    this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, (/**
                     * @return {?}
                     */
                    () => {
                        _timer.unsubscribe();
                        cancelDelayedTooltipShowing();
                    }));
                }));
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._tooltip.hide();
        }), this.tooltipFadeDuration);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
    }
}
TooltipDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"] },
    { type: TooltipConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"] }
];
TooltipDirective.propDecorators = {
    adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tooltipChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    htmlContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipHtml',] }],
    _placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPlacement',] }],
    _isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipIsOpen',] }],
    _enable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipEnable',] }],
    _appendToBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipAppendToBody',] }],
    tooltipAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _popupClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipClass',] }],
    _tooltipContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipContext',] }],
    _tooltipPopupDelay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipPopupDelay',] }],
    tooltipFadeDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _tooltipTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['tooltipTrigger',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-describedby',] }],
    tooltipStateChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["OnChange"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TooltipModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_3__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_4__["PositioningService"]]
        };
    }
}
TooltipModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-tooltip.js.map


/***/ }),

/***/ "./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/typeahead/fesm2015/ngx-bootstrap-typeahead.js ***!
  \**********************************************************************************/
/*! exports provided: TypeaheadConfig, TypeaheadContainerComponent, TypeaheadDirective, TypeaheadMatch, TypeaheadModule, TypeaheadOptions, escapeRegexp, getValueFromObject, latinMap, latinize, tokenize, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadConfig", function() { return TypeaheadConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadContainerComponent", function() { return TypeaheadContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadDirective", function() { return TypeaheadDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadMatch", function() { return TypeaheadMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return TypeaheadModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadOptions", function() { return TypeaheadOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegexp", function() { return escapeRegexp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFromObject", function() { return getValueFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinMap", function() { return latinMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latinize", function() { return latinize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenize", function() { return tokenize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return typeaheadAnimation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");










/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/** @type {?} */
const latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypeaheadOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        Object.assign(this, options);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypeaheadMatch {
    // tslint:disable-next-line:no-any
    /**
     * @param {?} item
     * @param {?=} value
     * @param {?=} header
     */
    constructor(item, value = item, header = false) {
        this.item = item;
        this.value = value;
        this.header = header;
    }
    /**
     * @return {?}
     */
    isHeader() {
        return this.header;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, (/**
     * @param {?} a
     * @return {?}
     */
    function (a) {
        return latinMap[a] || a;
    }));
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */
function tokenize(str, wordRegexDelimiters = ' ', phraseRegexDelimiters = '') {
    /* tslint:enable */
    /** @type {?} */
    const regexStr = `(?:[${phraseRegexDelimiters}])([^${phraseRegexDelimiters}]+)` +
        `(?:[${phraseRegexDelimiters}])|([^${wordRegexDelimiters}]+)`;
    /** @type {?} */
    const preTokenized = str.split(new RegExp(regexStr, 'g'));
    /** @type {?} */
    const result = [];
    /** @type {?} */
    const preTokenizedLength = preTokenized.length;
    /** @type {?} */
    let token;
    /** @type {?} */
    const replacePhraseDelimiters = new RegExp(`[${phraseRegexDelimiters}]+`, 'g');
    for (let i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
// tslint:disable-next-line:no-any
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        /** @type {?} */
        const functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    /** @type {?} */
    const properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    /** @type {?} */
    const propertiesArray = properties.split('.');
    for (const property of propertiesArray) {
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TYPEAHEAD_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
/** @type {?} */
const typeaheadAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('typeaheadAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('animated-down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => animated-down', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: 0, overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(TYPEAHEAD_ANIMATION_TIMING)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('animated-up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*', overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => animated-up', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*', overflow: 'hidden' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(TYPEAHEAD_ANIMATION_TIMING)
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => unanimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0s'))
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypeaheadContainerComponent {
    /**
     * @param {?} positionService
     * @param {?} renderer
     * @param {?} element
     */
    constructor(positionService, renderer, element) {
        this.positionService = positionService;
        this.renderer = renderer;
        this.element = element;
        this.isFocused = false;
        this.visibility = 'hidden';
        this.height = 0;
        this._matches = [];
        this.isScrolledIntoView = (/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) {
            /** @type {?} */
            const containerViewTop = this.ulElement.nativeElement.scrollTop;
            /** @type {?} */
            const containerViewBottom = containerViewTop + Number(this.ulElement.nativeElement.offsetHeight);
            /** @type {?} */
            const elemTop = elem.offsetTop;
            /** @type {?} */
            const elemBottom = elemTop + elem.offsetHeight;
            return ((elemBottom <= containerViewBottom) && (elemTop >= containerViewTop));
        });
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
    }
    /**
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set matches(value) {
        this.positionService.setOptions({
            modifiers: { flip: { enabled: this.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        this.positionService.event$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((/**
         * @return {?}
         */
        () => {
            this.positionService.disable();
            this.visibility = this.typeaheadScrollable ? 'hidden' : 'visible';
            if (this.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            this.positionService.enable();
            this.animationState = 'unanimated';
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(parseInt(TYPEAHEAD_ANIMATION_TIMING, 10)))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.positionService.enable();
        }));
        this._matches = value;
        this.needScrollbar = this.typeaheadScrollable && this.typeaheadOptionsInScrollableView < this.matches.length;
        if (this.typeaheadScrollable) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.setScrollableMode();
            }));
        }
        if (this.typeaheadIsFirstItemActive && this._matches.length > 0) {
            this._active = this._matches[0];
            if (this._active.isHeader()) {
                this.nextActiveMatch();
            }
        }
        if (this._active && !this.typeaheadIsFirstItemActive) {
            /** @type {?} */
            const concurrency = this._matches.find((/**
             * @param {?} match
             * @return {?}
             */
            match => match.value === this._active.value));
            if (concurrency) {
                this.selectActive(concurrency);
                return;
            }
            this._active = null;
        }
    }
    /**
     * @return {?}
     */
    get isTopPosition() {
        return this.element.nativeElement.classList.contains('top');
    }
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    get optionsListTemplate() {
        return this.parent ? this.parent.optionsListTemplate : undefined;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this.parent ? this.parent.isAnimated : false;
    }
    /**
     * @return {?}
     */
    get adaptivePosition() {
        return this.parent ? this.parent.adaptivePosition : false;
    }
    /**
     * @return {?}
     */
    get typeaheadScrollable() {
        return this.parent ? this.parent.typeaheadScrollable : false;
    }
    /**
     * @return {?}
     */
    get typeaheadOptionsInScrollableView() {
        return this.parent ? this.parent.typeaheadOptionsInScrollableView : 5;
    }
    /**
     * @return {?}
     */
    get typeaheadIsFirstItemActive() {
        return this.parent ? this.parent.typeaheadIsFirstItemActive : true;
    }
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    get itemTemplate() {
        return this.parent ? this.parent.typeaheadItemTemplate : undefined;
    }
    /**
     * @param {?=} isActiveItemChanged
     * @return {?}
     */
    selectActiveMatch(isActiveItemChanged) {
        if (this._active && this.parent.typeaheadSelectFirstItem) {
            this.selectMatch(this._active);
        }
        if (!this.parent.typeaheadSelectFirstItem && isActiveItemChanged) {
            this.selectMatch(this._active);
        }
    }
    /**
     * @return {?}
     */
    prevActiveMatch() {
        /** @type {?} */
        const index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollPrevious(index);
        }
    }
    /**
     * @return {?}
     */
    nextActiveMatch() {
        /** @type {?} */
        const index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
        if (this.typeaheadScrollable) {
            this.scrollNext(index);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectActive(value) {
        this.isFocused = true;
        this._active = value;
    }
    /**
     * @param {?} match
     * @param {?} query
     * @return {?}
     */
    highlight(match, query) {
        /** @type {?} */
        let itemStr = match.value;
        /** @type {?} */
        let itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? latinize(itemStr)
            : itemStr).toLowerCase();
        /** @type {?} */
        let startIdx;
        /** @type {?} */
        let tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            /** @type {?} */
            const queryLen = query.length;
            for (let i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr =
                        `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                            `${itemStr.substring(startIdx + tokenLen)}`;
                    itemStrHelper =
                        `${itemStrHelper.substring(0, startIdx)}        ${' '.repeat(tokenLen)}         ` +
                            `${itemStrHelper.substring(startIdx + tokenLen)}`;
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr =
                    `${itemStr.substring(0, startIdx)}<strong>${itemStr.substring(startIdx, startIdx + tokenLen)}</strong>` +
                        `${itemStr.substring(startIdx + tokenLen)}`;
            }
        }
        return itemStr;
    }
    /**
     * @return {?}
     */
    focusLost() {
        this.isFocused = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isActive(value) {
        return this._active === value;
    }
    /**
     * @param {?} value
     * @param {?=} e
     * @return {?}
     */
    selectMatch(value, e = void 0) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout((/**
         * @return {?}
         */
        () => this.parent.typeaheadOnSelect.emit(value)), 0);
        return false;
    }
    /**
     * @return {?}
     */
    setScrollableMode() {
        if (!this.ulElement) {
            this.ulElement = this.element;
        }
        if (this.liElements.first) {
            /** @type {?} */
            const ulStyles = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getStyles(this.ulElement.nativeElement);
            /** @type {?} */
            const liStyles = ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["Utils"].getStyles(this.liElements.first.nativeElement);
            /** @type {?} */
            const ulPaddingBottom = parseFloat((ulStyles['padding-bottom'] ? ulStyles['padding-bottom'] : '')
                .replace('px', ''));
            /** @type {?} */
            const ulPaddingTop = parseFloat((ulStyles['padding-top'] ? ulStyles['padding-top'] : '0')
                .replace('px', ''));
            /** @type {?} */
            const optionHeight = parseFloat((liStyles.height ? liStyles.height : '0')
                .replace('px', ''));
            /** @type {?} */
            const height = this.typeaheadOptionsInScrollableView * optionHeight;
            this.guiHeight = `${height + ulPaddingTop + ulPaddingBottom}px`;
        }
        this.renderer.setStyle(this.element.nativeElement, 'visibility', 'visible');
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollPrevious(index) {
        if (index === 0) {
            this.scrollToBottom();
            return;
        }
        if (this.liElements) {
            /** @type {?} */
            const liElement = this.liElements.toArray()[index - 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop = liElement.nativeElement.offsetTop;
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    scrollNext(index) {
        if (index + 1 > this.matches.length - 1) {
            this.scrollToTop();
            return;
        }
        if (this.liElements) {
            /** @type {?} */
            const liElement = this.liElements.toArray()[index + 1];
            if (liElement && !this.isScrolledIntoView(liElement.nativeElement)) {
                this.ulElement.nativeElement.scrollTop =
                    liElement.nativeElement.offsetTop -
                        Number(this.ulElement.nativeElement.offsetHeight) +
                        Number(liElement.nativeElement.offsetHeight);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    scrollToBottom() {
        this.ulElement.nativeElement.scrollTop = this.ulElement.nativeElement.scrollHeight;
    }
    /**
     * @private
     * @return {?}
     */
    scrollToTop() {
        this.ulElement.nativeElement.scrollTop = 0;
    }
}
TypeaheadContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'typeahead-container',
                template: "<!-- inject options list template -->\n<ng-template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n             [ngTemplateOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></ng-template>\n\n<!-- default options item template -->\n<ng-template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"highlight(match, query)\"></span>\n</ng-template>\n\n<!-- Bootstrap 3 options list template -->\n<ng-template #bs3Template>\n  <ul class=\"dropdown-menu\"\n      #ulElement\n      [style.overflow-y]=\"needScrollbar ? 'scroll': 'auto'\"\n      [style.height]=\"needScrollbar ? guiHeight: 'auto'\">\n    <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n      <li #liElements *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</li>\n      <li #liElements\n          *ngIf=\"!match.isHeader()\"\n          [@typeaheadAnimation]=\"animationState\"\n          [class.active]=\"isActive(match)\"\n          (mouseenter)=\"selectActive(match)\">\n\n        <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n          <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                       [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n        </a>\n      </li>\n    </ng-template>\n  </ul>\n</ng-template>\n\n<!-- Bootstrap 4 options list template -->\n<ng-template #bs4Template>\n  <ng-template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{ match }}</h6>\n    <ng-template [ngIf]=\"!match.isHeader()\">\n      <button #liElements\n              [@typeaheadAnimation]=\"animationState\"\n              class=\"dropdown-item\"\n              (click)=\"selectMatch(match, $event)\"\n              (mouseenter)=\"selectActive(match)\"\n              [class.active]=\"isActive(match)\">\n        <ng-template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\"\n                     [ngTemplateOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></ng-template>\n      </button>\n    </ng-template>\n  </ng-template>\n</ng-template>\n",
                host: {
                    class: 'dropdown open bottom',
                    '[class.dropdown-menu]': 'isBs4',
                    '[style.height]': `isBs4 && needScrollbar ? guiHeight: 'auto'`,
                    '[style.visibility]': `visibility`,
                    '[class.dropup]': 'dropup',
                    style: 'position: absolute;display: block;'
                },
                animations: [typeaheadAnimation],
                styles: [`
    :host.dropdown {
      z-index: 1000;
    }

    :host.dropdown-menu, .dropdown-menu {
      overflow-y: auto;
      height: 100px;
    }
  `]
            }] }
];
/** @nocollapse */
TypeaheadContainerComponent.ctorParameters = () => [
    { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
TypeaheadContainerComponent.propDecorators = {
    ulElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['ulElement', { static: false },] }],
    liElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: ['liElements',] }],
    focusLost: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default values provider for typeahead
 */
class TypeaheadConfig {
    constructor() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * used to hide results on blur
         */
        this.hideResultsOnBlur = true;
        /**
         * used to choose the first item in typeahead container
         */
        this.selectFirstItem = true;
        /**
         * used to active/inactive the first item in typeahead container
         */
        this.isFirstItemActive = true;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */
        this.minLength = 1;
    }
}
TypeaheadConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypeaheadDirective {
    /**
     * @param {?} cis
     * @param {?} config
     * @param {?} changeDetection
     * @param {?} element
     * @param {?} ngControl
     * @param {?} renderer
     * @param {?} viewContainerRef
     */
    constructor(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
        this.changeDetection = changeDetection;
        this.element = element;
        this.ngControl = ngControl;
        this.renderer = renderer;
        /**
         * minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = void 0;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * should be used only in case of typeahead attribute is array.
         * If true - loading of options will be async, otherwise - sync.
         * true make sense if options array is large.
         */
        this.typeaheadAsync = void 0;
        /**
         * match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /**
         * Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /**
         * should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /**
         * specifies if typeahead is scrollable
         */
        this.typeaheadScrollable = false;
        /**
         * specifies number of options to show in scroll view
         */
        this.typeaheadOptionsInScrollableView = 5;
        /**
         * fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         */
        this.typeaheadSelectFirstItem = true;
        /**
         * makes active first item in a list
         */
        this.typeaheadIsFirstItemActive = true;
        /**
         * fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when option was selected, return object with data of this option
         */
        this.typeaheadOnSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when blur event occurs. returns the active item
         */
        // tslint:disable-next-line:no-any
        this.typeaheadOnBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This attribute indicates that the dropdown should be opened upwards
         */
        this.dropup = false;
        this.isActiveItemChanged = false;
        this.isTypeaheadOptionsListActive = false;
        // tslint:disable-next-line:no-any
        this.keyUpEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placement = 'bottom-left';
        this._subscriptions = [];
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
            .provide({ provide: TypeaheadConfig, useValue: config });
        Object.assign(this, {
            typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
            typeaheadSelectFirstItem: config.selectFirstItem,
            typeaheadIsFirstItemActive: config.isFirstItemActive,
            typeaheadMinLength: config.minLength,
            adaptivePosition: config.adaptivePosition,
            isAnimated: config.isAnimated
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined &&
            !(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["isObservable"])(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    onInput(e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        /** @type {?} */
        const value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        if (this._container) {
            // esc
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.hide();
                return;
            }
            // up
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 38 || event.key === 'ArrowUp') {
                this.isActiveItemChanged = true;
                this._container.prevActiveMatch();
                return;
            }
            // down
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 40 || event.key === 'ArrowDown') {
                this.isActiveItemChanged = true;
                this._container.nextActiveMatch();
                return;
            }
            // enter
            /* tslint:disable-next-line: deprecation */
            if (event.keyCode === 13 || event.key === 'Enter') {
                this._container.selectActiveMatch();
                return;
            }
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        /* tslint:disable-next-line: deprecation */
        if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
            event.preventDefault();
            if (this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch();
                return;
            }
            if (!this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch(this.isActiveItemChanged);
                this.isActiveItemChanged = false;
                this.hide();
            }
        }
    }
    /**
     * @param {?} match
     * @return {?}
     */
    changeModel(match) {
        /** @type {?} */
        const valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        (this.ngControl.control).setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    }
    /**
     * @return {?}
     */
    get matches() {
        return this._matches;
    }
    /**
     * @return {?}
     */
    show() {
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: `${this.dropup ? 'top' : 'bottom'} start` })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer.listen('document', 'click', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            if (!this.typeaheadHideResultsOnBlur || this.element.nativeElement.contains(e.target)) {
                return undefined;
            }
            this.onOutsideClick();
        }));
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        /** @type {?} */
        const normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hide() {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = null;
        }
    }
    /**
     * @return {?}
     */
    onOutsideClick() {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    }
    /**
     * @protected
     * @return {?}
     */
    asyncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((/**
         * @return {?}
         */
        () => this.typeahead)))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            this.finalizeAsyncCall(matches);
        })));
    }
    /**
     * @protected
     * @return {?}
     */
    syncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(this.typeaheadWaitMs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            /** @type {?} */
            const normalizedQuery = this.normalizeQuery(value);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.typeahead)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                return (option &&
                    this.testMatch(this.normalizeOption(option), normalizedQuery));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
        })))
            .subscribe((/**
         * @param {?} matches
         * @return {?}
         */
        (matches) => {
            this.finalizeAsyncCall(matches);
        })));
    }
    // tslint:disable-next-line:no-any
    /**
     * @protected
     * @param {?} option
     * @return {?}
     */
    normalizeOption(option) {
        /** @type {?} */
        const optionValue = getValueFromObject(option, this.typeaheadOptionField);
        /** @type {?} */
        const normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    normalizeQuery(value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        /** @type {?} */
        let normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    }
    /**
     * @protected
     * @param {?} match
     * @param {?} test
     * @return {?}
     */
    testMatch(match, test) {
        /** @type {?} */
        let spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (let i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    }
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    finalizeAsyncCall(matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // fix: remove usage of ngControl internals
            /** @type {?} */
            const _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            /** @type {?} */
            const normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? tokenize(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    }
    /**
     * @protected
     * @param {?} options
     * @return {?}
     */
    prepareMatches(options) {
        /** @type {?} */
        const limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            /** @type {?} */
            let matches = [];
            // extract all group names
            /** @type {?} */
            const groups = limited
                .map((/**
             * @param {?} option
             * @return {?}
             */
            (option) => getValueFromObject(option, this.typeaheadGroupField)))
                .filter((/**
             * @param {?} v
             * @param {?} i
             * @param {?} a
             * @return {?}
             */
            (v, i, a) => a.indexOf(v) === i));
            groups.forEach((/**
             * @param {?} group
             * @return {?}
             */
            (group) => {
                // add group header to array of matches
                matches.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches = matches.concat(limited
                    .filter((
                // tslint:disable-next-line:no-any
                /**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => getValueFromObject(option, this.typeaheadGroupField) === group))
                    .map((
                // tslint:disable-next-line:no-any
                /**
                 * @param {?} option
                 * @return {?}
                 */
                (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)))));
            }));
            this._matches = matches;
        }
        else {
            this._matches = limited.map((
            // tslint:disable-next-line:no-any
            /**
             * @param {?} option
             * @return {?}
             */
            (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    hasMatches() {
        return this._matches.length > 0;
    }
}
TypeaheadDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] }
];
/** @nocollapse */
TypeaheadDirective.ctorParameters = () => [
    { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"] },
    { type: TypeaheadConfig },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
];
TypeaheadDirective.propDecorators = {
    typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadMinLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    adaptivePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isAnimated: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadWaitMs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadOptionsLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadOptionField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadGroupField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadAsync: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadLatinize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadSingleWords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadWordDelimiters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadPhraseDelimiters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadItemTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    optionsListTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadScrollable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadOptionsInScrollableView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadHideResultsOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadSelectFirstItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadIsFirstItemActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    typeaheadLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    typeaheadNoResults: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    typeaheadOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    typeaheadOnBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
    onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypeaheadModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TypeaheadModule,
            providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"], TypeaheadConfig]
        };
    }
}
TypeaheadModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"]],
                declarations: [TypeaheadContainerComponent, TypeaheadDirective],
                exports: [TypeaheadContainerComponent, TypeaheadDirective],
                entryComponents: [TypeaheadContainerComponent]
            },] }
];


//# sourceMappingURL=ngx-bootstrap-typeahead.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/button-fab/button-fab.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/button-fab/button-fab.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button>\r\n    <!-- <a routerLink=\"/\"> -->\r\n    <img src=\"/assets/images/floatmenu_2.png\">\r\n    <!-- </a> -->\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button color=\"light\" routerLink=\"/\" ng-reflect-router-link=\"/\">\r\n      <img src=\"/assets/images/portfolio.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <a routerLink=\"/\">\r\n        <img src=\"/assets/images/globe.png\">\r\n      </a>\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <img src=\"/assets/images/study.png\">\r\n    </ion-fab-button>\r\n    <ion-fab-button color=\"light\">\r\n      <img src=\"/assets/images/user.png\">\r\n    </ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer-blue/footer-blue.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer-blue/footer-blue.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-footer no-border (click)=\"openLink()\">\r\n  <ion-toolbar color=\"primary\">\r\n  <p style=\"text-align: center; margin-top: 1rem; color: white; background-color: #094f72; \">www.brokersnetwork.mx</p>\r\n</ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer no-border (click)=\"openLink()\"  >\r\n  <p style=\"text-align: center; margin-top: 1rem; color: #094f72\">www.brokersnetwork.mx</p>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/main-header/main-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/main-header/main-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header no-border >\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    \r\n      <ion-img slot=\"end\" [src]=\"urlLogo\" style=\"\r\n      width: 30%;\r\n      margin-top: 10px!important;\r\n      margin-bottom: 10px;\r\n      margin-right: 3vh;\"></ion-img>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/menu-registro/menu-registro.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/menu-registro/menu-registro.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-header no-border >\r\n\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-text text-center>\r\n      <ion-img [src]=\"urlLogo\" style=\"\r\n      width: 30%;\r\n      margin-top: 10px!important;\r\n      left: 0;\r\n      right: 0;\r\n      margin: 0 auto;\r\n      top: 50%;\r\n      margin-bottom: 10px;\"></ion-img>\r\n    </ion-text>\r\n  </ion-toolbar>\r\n</ion-header>\r\n"

/***/ }),

/***/ "./src/app/services/rs.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/rs.service.ts ***!
  \****************************************/
/*! exports provided: RootSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootSettingsService", function() { return RootSettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let RootSettingsService = class RootSettingsService {
    constructor(platform) {
        this.platform = platform;
        this.ROOTURL = "http://broktool.com/ControlPanel/php/admin/";
    }
    obtnerViajesPorIDServicio() {
    }
};
RootSettingsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
RootSettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], RootSettingsService);



/***/ }),

/***/ "./src/app/shared/button-fab/button-fab.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/button-fab/button-fab.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9idXR0b24tZmFiL2J1dHRvbi1mYWIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/button-fab/button-fab.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/button-fab/button-fab.component.ts ***!
  \***********************************************************/
/*! exports provided: ButtonFabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonFabComponent", function() { return ButtonFabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonFabComponent = class ButtonFabComponent {
    constructor() { }
    ngOnInit() { }
};
ButtonFabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-fab',
        template: __webpack_require__(/*! raw-loader!./button-fab.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/button-fab/button-fab.component.html"),
        styles: [__webpack_require__(/*! ./button-fab.component.scss */ "./src/app/shared/button-fab/button-fab.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ButtonFabComponent);



/***/ }),

/***/ "./src/app/shared/footer-blue/footer-blue.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/footer-blue/footer-blue.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXItYmx1ZS9mb290ZXItYmx1ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/footer-blue/footer-blue.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/footer-blue/footer-blue.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterBlueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBlueComponent", function() { return FooterBlueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



let FooterBlueComponent = class FooterBlueComponent {
    constructor(iab) {
        this.iab = iab;
    }
    ngOnInit() { }
    openLink() {
        this.iab.create("https://www.brokersnetwork.mx/", "_system");
    }
};
FooterBlueComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] }
];
FooterBlueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer-blue',
        template: __webpack_require__(/*! raw-loader!./footer-blue.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer-blue/footer-blue.component.html"),
        styles: [__webpack_require__(/*! ./footer-blue.component.scss */ "./src/app/shared/footer-blue/footer-blue.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
], FooterBlueComponent);



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let FooterComponent = class FooterComponent {
    constructor(iab, keyboard, platform) {
        this.iab = iab;
        this.keyboard = keyboard;
        this.platform = platform;
    }
    /*  isKeyboardHide=true;
    
      ionViewWillEnter() {
    
        this.platform.ready().then(() => {
          this.keyboard.onKeyboardWillShow().subscribe(()=>{
            this.isKeyboardHide=false;
            console.log('SHOWK');
          });
    
          this.keyboard.onKeyboardWillHide().subscribe(()=>{
            this.isKeyboardHide=true;
            console.log('HIDEK');
          });
        });
    
    
      }*/
    ngOnInit() { }
    openLink() {
        this.iab.create("https://www.brokersnetwork.mx/", "_system");
    }
};
FooterComponent.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_3__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], FooterComponent);



/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/main-header/main-header.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/main-header/main-header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/main-header/main-header.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/main-header/main-header.component.ts ***!
  \*************************************************************/
/*! exports provided: MainHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function() { return MainHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainHeaderComponent = class MainHeaderComponent {
    constructor() {
        this.urlLogo = '/assets/images/logoHB.png';
    }
    ngOnInit() { }
};
MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-header',
        template: __webpack_require__(/*! raw-loader!./main-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/main-header/main-header.component.html"),
        styles: [__webpack_require__(/*! ./main-header.component.scss */ "./src/app/shared/main-header/main-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainHeaderComponent);



/***/ }),

/***/ "./src/app/shared/menu-registro/menu-registro.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/menu-registro/menu-registro.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tZW51LXJlZ2lzdHJvL21lbnUtcmVnaXN0cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/menu-registro/menu-registro.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/menu-registro/menu-registro.component.ts ***!
  \*****************************************************************/
/*! exports provided: MenuRegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuRegistroComponent", function() { return MenuRegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuRegistroComponent = class MenuRegistroComponent {
    constructor() {
        this.urlLogo = '/assets/images/logoB.png';
    }
    ngOnInit() { }
};
MenuRegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-registro',
        template: __webpack_require__(/*! raw-loader!./menu-registro.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/menu-registro/menu-registro.component.html"),
        styles: [__webpack_require__(/*! ./menu-registro.component.scss */ "./src/app/shared/menu-registro/menu-registro.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuRegistroComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-registro/menu-registro.component */ "./src/app/shared/menu-registro/menu-registro.component.ts");
/* harmony import */ var _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-blue/footer-blue.component */ "./src/app/shared/footer-blue/footer-blue.component.ts");
/* harmony import */ var _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-header/main-header.component */ "./src/app/shared/main-header/main-header.component.ts");
/* harmony import */ var _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./button-fab/button-fab.component */ "./src/app/shared/button-fab/button-fab.component.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__["MenuRegistroComponent"],
            _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__["FooterBlueComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
            _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__["ButtonFabComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]
        ],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _menu_registro_menu_registro_component__WEBPACK_IMPORTED_MODULE_6__["MenuRegistroComponent"],
            _footer_blue_footer_blue_component__WEBPACK_IMPORTED_MODULE_7__["FooterBlueComponent"],
            _main_header_main_header_component__WEBPACK_IMPORTED_MODULE_8__["MainHeaderComponent"],
            _button_fab_button_fab_component__WEBPACK_IMPORTED_MODULE_9__["ButtonFabComponent"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=default~clientes-archivados-clientes-archivados-module~detalles-casa-detalles-casa-module~detalles-c~dce00526-es2015.js.map