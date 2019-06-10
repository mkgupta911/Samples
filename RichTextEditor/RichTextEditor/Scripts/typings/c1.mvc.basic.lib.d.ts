

/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Contains utilities used by all controls and modules, as well as the
 * @see:Control and @see:Event classes.
 */
declare module wijmo {
    /**
     * Gets the version of the Wijmo library that is currently loaded.
     */
    function getVersion(): string;
    /**
     * Sets the license key that identifies licensed Wijmo applications.
     *
     * If you do not set the license key, Wijmo will run in evaluation mode,
     * adding a watermark element to the page.
     *
     * Licensed users may obtain keys at the
     * <a href="https://www.grapecity.com/en/my-account" target="_blank">My Account</a>
     * section of the Wijmo site.
     *
     * Note that Wijmo does not send keys or any licensing information to any servers.
     * It only checks the internal consistency of the key provided.
     *
     * @param licenseKey String containing the license key to use in this application.
     */
    function setLicenseKey(licenseKey: string): void;
    /**
     * Specifies constants that represent keyboard codes.
     *
     * This enumeration is useful when handling <b>keyDown</b> events.
     */
    enum Key {
        /** The backspace key. */
        Back = 8,
        /** The tab key. */
        Tab = 9,
        /** The enter key. */
        Enter = 13,
        /** The escape key. */
        Escape = 27,
        /** The space key. */
        Space = 32,
        /** The page up key. */
        PageUp = 33,
        /** The page down key. */
        PageDown = 34,
        /** The end key. */
        End = 35,
        /** The home key. */
        Home = 36,
        /** The left arrow key. */
        Left = 37,
        /** The up arrow key. */
        Up = 38,
        /** The right arrow key. */
        Right = 39,
        /** The down arrow key. */
        Down = 40,
        /** The delete key. */
        Delete = 46,
        /** The F1 key. */
        F1 = 112,
        /** The F2 key. */
        F2 = 113,
        /** The F3 key. */
        F3 = 114,
        /** The F4 key. */
        F4 = 115,
        /** The F5 key. */
        F5 = 116,
        /** The F6 key. */
        F6 = 117,
        /** The F7 key. */
        F7 = 118,
        /** The F8 key. */
        F8 = 119,
        /** The F9 key. */
        F9 = 120,
        /** The F10 key. */
        F10 = 121,
        /** The F11 key. */
        F11 = 122,
        /** The F12 key. */
        F12 = 123,
    }
    /**
     * Specifies constants that represent data types.
     *
     * Use the @see:getType method to get a @see:DataType from a value.
     */
    enum DataType {
        /** Object (anything). */
        Object = 0,
        /** String. */
        String = 1,
        /** Number. */
        Number = 2,
        /** Boolean. */
        Boolean = 3,
        /** Date (date and time). */
        Date = 4,
        /** Array. */
        Array = 5,
    }
    /**
     * Allows callers to verify whether an object implements an interface.
     */
    interface IQueryInterface {
        /**
         * Returns true if the object implements a given interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
    }
    /**
     * Casts a value to a type if possible.
     *
     * @param value Value to cast.
     * @param type Type or interface name to cast to.
     * @return The value passed in if the cast was successful, null otherwise.
     */
    function tryCast(value: any, type: any): any;
    /**
     * Determines whether an object is a primitive type (string, number, Boolean, or Date).
     *
     * @param value Value to test.
     */
    function isPrimitive(value: any): boolean;
    /**
     * Determines whether an object is a string.
     *
     * @param value Value to test.
     */
    function isString(value: any): boolean;
    /**
     * Determines whether a string is null, empty, or whitespace only.
     *
     * @param value Value to test.
     */
    function isNullOrWhiteSpace(value: string): boolean;
    /**
     * Determines whether an object is a number.
     *
     * @param value Value to test.
     */
    function isNumber(value: any): boolean;
    /**
     * Determines whether an object is an integer.
     *
     * @param value Value to test.
     */
    function isInt(value: any): boolean;
    /**
     * Determines whether an object is a Boolean.
     *
     * @param value Value to test.
     */
    function isBoolean(value: any): boolean;
    /**
     * Determines whether an object is a function.
     *
     * @param value Value to test.
     */
    function isFunction(value: any): boolean;
    /**
     * Determines whether an object is undefined.
     *
     * @param value Value to test.
     */
    function isUndefined(value: any): boolean;
    /**
     * Determines whether an object is a Date.
     *
     * @param value Value to test.
     */
    function isDate(value: any): boolean;
    /**
     * Determines whether an object is an Array.
     *
     * @param value Value to test.
     */
    function isArray(value: any): boolean;
    /**
     * Determines whether a value is an object
     * (as opposed to a value type, an array, or a Date).
     *
     * @param value Value to test.
     */
    function isObject(value: any): boolean;
    /**
     * Determines whether an object is empty
     * (contains no enumerable properties).
     *
     * @param obj Object to test.
     */
    function isEmpty(obj: any): boolean;
    /**
     * Creates a new unique id for an element by adding sequential
     * numbers to a given base id.
     *
     * @param baseId String to use as a basis for generating the unique id.
     */
    function getUniqueId(baseId: string): string;
    /**
     * Converts mouse or touch event arguments into a @see:Point in page coordinates.
     */
    function mouseToPage(e: any): Point;
    /**
     * Gets the type of a value.
     *
     * @param value Value to test.
     * @return A @see:DataType value representing the type of the value passed in.
     */
    function getType(value: any): DataType;
    /**
     * Changes the type of a value.
     *
     * If the conversion fails, the original value is returned. To check if a
     * conversion succeeded, you should check the type of the returned value.
     *
     * @param value Value to convert.
     * @param type @see:DataType to convert the value to.
     * @param format Format to use when converting to or from strings.
     * @return The converted value, or the original value if a conversion was not possible.
     */
    function changeType(value: any, type: DataType, format: string): any;
    /**
     * Rounds or truncates a number to a specified precision.
     *
     * @param value Value to round or truncate.
     * @param prec Number of decimal digits for the result.
     * @param truncate Whether to truncate or round the original value.
     */
    function toFixed(value: number, prec: number, truncate: boolean): number;
    /**
     * Replaces each format item in a specified string with the text equivalent of an
     * object's value.
     *
     * The function works by replacing parts of the <b>formatString</b> with the pattern
     * '{name:format}' with properties of the <b>data</b> parameter. For example:
     *
     * <pre>
     * var data = { name: 'Joe', amount: 123456 };
     * var msg = wijmo.format('Hello {name}, you won {amount:n2}!', data);
     * </pre>
     *
     * The @see:format function supports pluralization. If the format string is a
     * JSON-encoded object with 'count' and 'when' properties, the method uses
     * the 'count' parameter of the data object to select the appropriate format
     * from the 'when' property. For example:
     *
     * <pre>
     * var fmt = {
     *     count: 'count',
     *     when: {
     *         0: 'No items selected.',
     *         1: 'One item is selected.',
     *         2: 'A pair is selected.',
     *         'other': '{count:n0} items are selected.'
     *     }
     * }
     * fmt = JSON.stringify(fmt);
     * console.log(wijmo.format(fmt, { count: 0 })); // No items selected.
     * console.log(wijmo.format(fmt, { count: 1 })); // One item is selected.
     * console.log(wijmo.format(fmt, { count: 2 })); // A pair is selected.
     * console.log(wijmo.format(fmt, { count: 12 })); 12 items are selected.
     * </pre>
     *
     * The optional <b>formatFunction</b> allows you to customize the content by
     * providing context-sensitive formatting. If provided, the format function
     * gets called for each format element and gets passed the data object, the
     * parameter name, the format, and the value; it should return an output string.
     * For example:
     *
     * <pre>
     * var data = { name: 'Joe', amount: 123456 };
     * var msg = wijmo.format('Hello {name}, you won {amount:n2}!', data,
     *     function (data, name, fmt, val) {
     *         if (wijmo.isString(data[name])) {
     *             val = wijmo.escapeHtml(data[name]);
     *         }
     *         return val;
     *     }
     * );
     * </pre>
     *
     * @param format A composite format string.
     * @param data The data object used to build the string.
     * @param formatFunction An optional function used to format items in context.
     * @return The formatted string.
     */
    function format(format: string, data: any, formatFunction?: Function): string;
    /**
     * Clamps a value between a minimum and a maximum.
     *
     * @param value Original value.
     * @param min Minimum allowed value.
     * @param max Maximum allowed value.
     */
    function clamp(value: number, min: number, max: number): number;
    /**
     * Copies properties from an object to another.
     *
     * This method is typically used to initialize controls and other Wijmo objects
     * by setting their properties and assigning event handlers.
     *
     * The destination object must define all the properties defined in the source,
     * or an error will be thrown.
     *
     * @param dst The destination object.
     * @param src The source object.
     */
    function copy(dst: any, src: any): void;
    /**
     * Throws an exception if a condition is false.
     *
     * @param condition Condition expected to be true.
     * @param msg Message of the exception if the condition is not true.
     */
    function assert(condition: boolean, msg: string): void;
    /**
     * Outputs a message to indicate a member has been deprecated.
     *
     * @param oldMember Member that has been deprecated.
     * @param newMember Member that replaces the one that has been deprecated.
     */
    function _deprecated(oldMember: string, newMember: string): void;
    /**
     * Asserts that a value is a string.
     *
     * @param value Value supposed to be a string.
     * @param nullOK Whether null values are acceptable.
     * @return The string passed in.
     */
    function asString(value: string, nullOK?: boolean): string;
    /**
     * Asserts that a value is a number.
     *
     * @param value Value supposed to be numeric.
     * @param nullOK Whether null values are acceptable.
     * @param positive Whether to accept only positive numeric values.
     * @return The number passed in.
     */
    function asNumber(value: number, nullOK?: boolean, positive?: boolean): number;
    /**
     * Asserts that a value is an integer.
     *
     * @param value Value supposed to be an integer.
     * @param nullOK Whether null values are acceptable.
     * @param positive Whether to accept only positive integers.
     * @return The number passed in.
     */
    function asInt(value: number, nullOK?: boolean, positive?: boolean): number;
    /**
     * Asserts that a value is a Boolean.
     *
     * @param value Value supposed to be Boolean.
     * @param nullOK Whether null values are acceptable.
     * @return The Boolean passed in.
     */
    function asBoolean(value: boolean, nullOK?: boolean): boolean;
    /**
     * Asserts that a value is a Date.
     *
     * @param value Value supposed to be a Date.
     * @param nullOK Whether null values are acceptable.
     * @return The Date passed in.
     */
    function asDate(value: Date, nullOK?: boolean): Date;
    /**
     * Asserts that a value is a function.
     *
     * @param value Value supposed to be a function.
     * @param nullOK Whether null values are acceptable.
     * @return The function passed in.
     */
    function asFunction(value: any, nullOK?: boolean): Function;
    /**
     * Asserts that a value is an array.
     *
     * @param value Value supposed to be an array.
     * @param nullOK Whether null values are acceptable.
     * @return The array passed in.
     */
    function asArray(value: any, nullOK?: boolean): any[];
    /**
     * Asserts that a value is an instance of a given type.
     *
     * @param value Value to be checked.
     * @param type Type of value expected.
     * @param nullOK Whether null values are acceptable.
     * @return The value passed in.
     */
    function asType(value: any, type: any, nullOK?: boolean): any;
    /**
     * Asserts that a value is a valid setting for an enumeration.
     *
     * @param value Value supposed to be a member of the enumeration.
     * @param enumType Enumeration to test for.
     * @param nullOK Whether null values are acceptable.
     * @return The value passed in.
     */
    function asEnum(value: number, enumType: any, nullOK?: boolean): number;
    /**
     * Asserts that a value is an @see:ICollectionView or an Array.
     *
     * @param value Array or @see:ICollectionView.
     * @param nullOK Whether null values are acceptable.
     * @return The @see:ICollectionView that was passed in or a @see:CollectionView
     * created from the array that was passed in.
     */
    function asCollectionView(value: any, nullOK?: boolean): collections.ICollectionView;
    /**
     * Checks whether an @see:ICollectionView is defined and not empty.
     *
     * @param value @see:ICollectionView to check.
     */
    function hasItems(value: collections.ICollectionView): boolean;
    /**
     * Converts a camel-cased string into a header-type string by capitalizing the first letter
     * and adding spaces before uppercase characters preceded by lower-case characters.
     *
     * For example, 'somePropertyName' becomes 'Some Property Name'.
     *
     * @param text String to convert to header case.
     */
    function toHeaderCase(text: string): string;
    /**
     * Escapes a string by replacing HTML characters with text entities.
     *
     * Strings entered by users should always be escaped before they are displayed
     * in HTML pages. This helps ensure page integrity and prevent HTML/javascript
     * injection attacks.
     *
     * @param text Text to escape.
     * @return An HTML-escaped version of the original string.
     */
    function escapeHtml(text: string): string;
    /**
     * Converts an HTML string into plain text.
     *
     * @param html HTML string to convert to plain text.
     * @return A plain-text version of the string.
     */
    function toPlainText(html: string): string;
    /**
     * Checks whether an element has a class.
     *
     * @param e Element to check.
     * @param className Class to check for.
     */
    function hasClass(e: Element, className: string): boolean;
    /**
     * Adds a class to an element.
     *
     * @param e Element that will have the class added.
     * @param className Class (or space-separated list of classes) to add to the element.
     */
    function addClass(e: Element, className: string): void;
    /**
     * Removes a class from an element.
     *
     * @param e Element that will have the class removed.
     * @param className Class (or space-separated list of classes) to remove from the element.
     */
    function removeClass(e: Element, className: string): void;
    /**
     * Adds or removes a class to or from an element.
     *
     * @param e Element that will have the class added.
     * @param className Class to add or remove.
     * @param addOrRemove Whether to add or remove the class. If not provided, toggle the class.
     */
    function toggleClass(e: Element, className: string, addOrRemove?: boolean): void;
    /**
     * Sets or clears an attribute on an element.
     *
     * @param e Element that will be updated.
     * @param name Name of the attribute to add or remove.
     * @param value Value of the attribute, or null to remove the attribute
     * from the element.
     * @param keep Whether to keep original attribute if present.
     */
    function setAttribute(e: Element, name: string, value?: any, keep?: boolean): void;
    /**
     * Sets or clears an element's <b>aria-label</b> attribute.
     *
     * @param e Element that will be updated.
     * @param value Value of the aria label, or null to remove the label
     * from the element.
     */
    function setAriaLabel(e: Element, value?: string): void;
    /**
     * Sets the start and end positions of a selection in a text field.
     *
     * This method is similar to the native @see:setSelectionRange method
     * in HTMLInputElement objects, except it checks for conditions that
     * may cause exceptions (element not in the DOM, disabled, or hidden).
     *
     * @param e HTMLInputElement or HTMLTextAreaElement to select.
     * @param start Offset into the text field for the start of the selection.
     * @param end Offset into the text field for the end of the selection.
     */
    function setSelectionRange(e: any, start: number, end?: number): boolean;
    /**
     * Disables the autocomplete, autocorrect, autocapitalize, and spellcheck
     * properties of an input element.
     *
     * @param e The input element.
     */
    function disableAutoComplete(e: HTMLInputElement): void;
    /**
     * Safely removes an element from the DOM tree.
     *
     * @param e Element to remove from the DOM tree.
     */
    function removeChild(e: Node): Node;
    /**
     * Gets a reference to the element that contains the focus,
     * accounting for shadow document fragments.
     */
    function getActiveElement(): HTMLElement;
    /**
     * Moves the focus to the next/previous/first focusable child within
     * a given parent element.
     *
     * @param parent Parent element.
     * @param offset Offset to use when moving the focus (use zero to focus on the first focusable child).
     * @return True if the focus was set, false if a focusable element was not found.
     */
    function moveFocus(parent: HTMLElement, offset: number): boolean;
    /**
     * Gets an element from a query selector.
     *
     * @param selector An element, a query selector string, or a jQuery object.
     */
    function getElement(selector: any): HTMLElement;
    /**
     * Creates an element from an HTML string.
     *
     * @param html HTML fragment to convert into an HTMLElement.
     * @param appendTo Optional HTMLElement to append the new element to.
     * @return The new element.
     */
    function createElement(html: string, appendTo?: HTMLElement): HTMLElement;
    /**
     * Sets the text content of an element.
     *
     * @param e Element that will have its content updated.
     * @param text Plain text to be assigned to the element.
     */
    function setText(e: HTMLElement, text: string): void;
    /**
     * Checks whether an HTML element contains another.
     *
     * @param parent Parent element.
     * @param child Child element.
     * @param popup Whether to take Wijmo popups into account.
     * @return True if the parent element contains the child element.
     */
    function contains(parent: any, child: any, popup?: boolean): boolean;
    /**
     * Finds the closest ancestor (including the original element) that satisfies a selector.
     *
     * @param e Element where the search should start.
     * @param selector A string containing a selector expression to match elements against.
     * @return The closest ancestor that satisfies the selector, or null if not found.
     */
    function closest(e: any, selector: string): Element;
    /**
     * Finds the closest ancestor (including the original element) that satisfies a class selector.
     *
     * @param e Element where the search should start.
     * @param className A string containing the class name to match elements against.
     * @return The closest ancestor that has the specified class name, or null if not found.
     */
    function closestClass(e: any, className: string): Node;
    /**
     * Enables or disables an element.
     *
     * @param e Element to enable or disable.
     * @param value Whether to enable or disable the element.
     */
    function enable(e: HTMLElement, value: boolean): void;
    /**
     * Gets the bounding rectangle of an element in page coordinates.
     *
     * This is similar to the <b>getBoundingClientRect</b> function,
     * except that uses viewport coordinates, which change when the
     * document scrolls.
     */
    function getElementRect(e: Element): Rect;
    /**
     * Modifies the style of an element by applying the properties specified in an object.
     *
     * @param e Element or array of elements whose style will be modified.
     * @param css Object containing the style properties to apply to the element.
     */
    function setCss(e: any, css: any): void;
    /**
     * Calls a function on a timer with a parameter varying between zero and one.
     *
     * Use this function to create animations by modifying document properties
     * or styles on a timer.
     *
     * For example, the code below changes the opacity of an element from zero
     * to one in one second:
     * <pre>var element = document.getElementById('someElement');
     * animate(function(pct) {
     *   element.style.opacity = pct;
     * }, 1000);</pre>
     *
     * The function returns an interval ID that you can use to stop the
     * animation. This is typically done when you are starting a new animation
     * and wish to suspend other on-going animations on the same element.
     * For example, the code below keeps track of the interval ID and clears
     * if before starting a new animation:
     * <pre>var element = document.getElementById('someElement');
     * if (this._animInterval) {
     *   clearInterval(this._animInterval);
     * }
     * var self = this;
     * self._animInterval = animate(function(pct) {
     *   element.style.opacity = pct;
     *   if (pct == 1) {
     *     self._animInterval = null;
     *   }
     * }, 1000);</pre>
     *
     * @param apply Callback function that modifies the document.
     * The function takes a single parameter that represents a percentage.
     * @param duration The duration of the animation, in milliseconds.
     * @param step The interval between animation frames, in milliseconds.
     * @return An interval id that you can use to suspend the animation.
     */
    function animate(apply: Function, duration?: number, step?: number): any;
    /**
     * Class that represents a point (with x and y coordinates).
     */
    class Point {
        /**
         * Gets or sets the x coordinate of this @see:Point.
         */
        x: number;
        /**
         * Gets or sets the y coordinate of this @see:Point.
         */
        y: number;
        /**
         * Initializes a new instance of the @see:Point class.
         *
         * @param x X coordinate of the new Point.
         * @param y Y coordinate of the new Point.
         */
        constructor(x?: number, y?: number);
        /**
         * Returns true if a @see:Point has the same coordinates as this @see:Point.
         *
         * @param pt @see:Point to compare to this @see:Point.
         */
        equals(pt: Point): boolean;
        /**
         * Creates a copy of this @see:Point.
         */
        clone(): Point;
    }
    /**
     * Class that represents a size (with width and height).
     */
    class Size {
        /**
         * Gets or sets the width of this @see:Size.
         */
        width: number;
        /**
         * Gets or sets the height of this @see:Size.
         */
        height: number;
        /**
         * Initializes a new instance of the @see:Size class.
         *
         * @param width Width of the new @see:Size.
         * @param height Height of the new @see:Size.
         */
        constructor(width?: number, height?: number);
        /**
         * Returns true if a @see:Size has the same dimensions as this @see:Size.
         *
         * @param sz @see:Size to compare to this @see:Size.
         */
        equals(sz: Size): boolean;
        /**
         * Creates a copy of this @see:Size.
         */
        clone(): Size;
    }
    /**
     * Class that represents a rectangle (with left, top, width, and height).
     */
    class Rect {
        /**
         * Gets or sets the left coordinate of this @see:Rect.
         */
        left: number;
        /**
         * Gets or sets the top coordinate of this @see:Rect.
         */
        top: number;
        /**
         * Gets or sets the width of this @see:Rect.
         */
        width: number;
        /**
         * Gets or sets the height of this @see:Rect.
         */
        height: number;
        /**
         * Initializes a new instance of the @see:Rect class.
         *
         * @param left Left coordinate of the new @see:Rect.
         * @param top Top coordinate of the new @see:Rect.
         * @param width Width of the new @see:Rect.
         * @param height Height of the new @see:Rect.
         */
        constructor(left: number, top: number, width: number, height: number);
        /**
         * Gets the right coordinate of this @see:Rect.
         */
        readonly right: number;
        /**
         * Gets the bottom coordinate of this @see:Rect.
         */
        readonly bottom: number;
        /**
         * Returns true if a @see:Rect has the same coordinates and dimensions
         * as this @see:Rect.
         *
         * @param rc @see:Rect to compare to this @see:Rect.
         */
        equals(rc: Rect): boolean;
        /**
         * Creates a copy of this @see:Rect.
         */
        clone(): Rect;
        /**
         * Creates a @see:Rect from <b>ClientRect</b> or <b>SVGRect</b> objects.
         *
         * @param rc Rectangle obtained by a call to the DOM's <b>getBoundingClientRect</b>
         * or <b>GetBoundingBox</b> methods.
         */
        static fromBoundingRect(rc: any): Rect;
        /**
         * Gets a rectangle that represents the union of two rectangles.
         *
         * @param rc1 First rectangle.
         * @param rc2 Second rectangle.
         */
        static union(rc1: Rect, rc2: Rect): Rect;
        /**
         * Gets a rectangle that represents the intersection of two rectangles.
         *
         * @param rc1 First rectangle.
         * @param rc2 Second rectangle.
         */
        static intersection(rc1: Rect, rc2: Rect): Rect;
        /**
         * Determines whether the rectangle contains a given point or rectangle.
         *
         * @param pt The @see:Point or @see:Rect to ckeck.
         */
        contains(pt: any): boolean;
        /**
         * Creates a rectangle that results from expanding or shrinking a rectangle by the specified amounts.
         *
         * @param dx The amount by which to expand or shrink the left and right sides of the rectangle.
         * @param dy The amount by which to expand or shrink the top and bottom sides of the rectangle.
         */
        inflate(dx: number, dy: number): Rect;
    }
    /**
     * Provides date and time utilities.
     */
    class DateTime {
        /**
         * Gets a new Date that adds the specified number of days to a given Date.
         *
         * @param value Original date.
         * @param days Number of days to add to the given date.
         */
        static addDays(value: Date, days: number): Date;
        /**
         * Gets a new Date that adds the specified number of months to a given Date.
         *
         * @param value Original date.
         * @param months Number of months to add to the given date.
         */
        static addMonths(value: Date, months: number): Date;
        /**
         * Gets a new Date that adds the specified number of years to a given Date.
         *
         * @param value Original date.
         * @param years Number of years to add to the given date.
         */
        static addYears(value: Date, years: number): Date;
        /**
         * Gets a new Date that adds the specified number of hours to a given Date.
         *
         * @param value Original date.
         * @param hours Number of hours to add to the given date.
         */
        static addHours(value: Date, hours: number): Date;
        /**
         * Gets a new Date that adds the specified number of minutes to a given Date.
         *
         * @param value Original date.
         * @param minutes Number of minutes to add to the given date.
         */
        static addMinutes(value: Date, minutes: number): Date;
        /**
         * Gets a new Date that adds the specified number of seconds to a given Date.
         *
         * @param value Original date.
         * @param seconds Number of seconds to add to the given date.
         */
        static addSeconds(value: Date, seconds: number): Date;
        /**
         * Returns true if two Date objects refer to the same date (ignoring time).
         *
         * @param d1 First date.
         * @param d2 Second date.
         */
        static sameDate(d1: Date, d2: Date): boolean;
        /**
         * Returns true if two Date objects refer to the same time (ignoring date).
         *
         * @param d1 First date.
         * @param d2 Second date.
         */
        static sameTime(d1: Date, d2: Date): boolean;
        /**
         * Returns true if two Date objects refer to the same date and time.
         *
         * @param d1 First date.
         * @param d2 Second date.
         */
        static equals(d1: Date, d2: Date): boolean;
        /**
         * Gets a Date object with the date and time set on two Date objects.
         *
         * @param date Date object that contains the date (day/month/year).
         * @param time Date object that contains the time (hour:minute:second).
         */
        static fromDateTime(date: Date, time: Date): Date;
        /**
         * Converts a calendar date to a fiscal date using the current culture.
         *
         * @param date Calendar date.
         * @param govt Whether to use the government or corporate fiscal year.
         */
        static toFiscal(date: Date, govt: boolean): Date;
        /**
         * Converts a fiscal year date to a calendar date using the current culture.
         *
         * @param date Fiscal year date.
         * @param govt Whether to use the government or corporate fiscal year.
         */
        static fromFiscal(date: Date, govt: boolean): Date;
        /**
         * Gets a new Date object instance.
         *
         * @param year Integer value representing the year, defaults to current year.
         * @param month Integer value representing the month (0-11), defaults to current month.
         * @param day Integer value representing the day (1-31), defaults to current day.
         * @param hour Integer value representing the hour, defaults to zero.
         * @param min Integer value representing the minute, defaults to zero.
         * @param sec Integer value representing the second, defaults to zero.
         * @param ms Integer value representing the millisecond, defaults to zero.
         */
        static newDate(year?: number, month?: number, day?: number, hour?: number, min?: number, sec?: number, ms?: number): Date;
        /**
         * Creates a copy of a given Date object.
         *
         * @param date Date object to copy.
         */
        static clone(date: Date): Date;
    }
    /**
     * Performs HTTP requests.
     *
     * The <b>settings</b> parameter may contain the following:
     *
     * <table>
     * <tr>
     *   <td><b>method</b></td>
     *   <td>The HTTP method to use for the request (e.g. "POST", "GET", "PUT").
     *       The default is "GET".</td>
     * </tr>
     * <tr>
     *   <td><b>data</b></td>
     *   <td>Data to be sent to the server. It is appended to the url for GET requests,
     *       and converted to a JSON string for other requests.</td>
     * </tr>
     * <tr>
     *   <td><b>async</b></td>
     *   <td>By default, all requests are sent asynchronously (i.e. this is set to true by default).
     *       If you need synchronous requests, set this option to false.</td>
     * </tr>
     * <tr>
     *   <td><b>success</b></td>
     *   <td>A function to be called if the request succeeds.
     *       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
     * </tr>
     * <tr>
     *   <td><b>error</b></td>
     *   <td>A function to be called if the request fails.
     *       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
     * </tr>
     * <tr>
     *   <td><b>complete</b></td>
     *   <td>A function to be called when the request finishes (after success and error callbacks are executed).
     *       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
     * </tr>
     * <tr>
     *   <td><b>beforeSend</b></td>
     *   <td>A function to be called immediately before the request us sent.
     *       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
     * </tr>
     * <tr>
     *   <td><b>requestHeaders</b></td>
     *   <td>A JavaScript object containing key/value pairs to be added to the request
     *       headers.</td>
     * </tr>
     * <tr>
     *   <td><b>user</b></td>
     *   <td>A username to be used with <b>XMLHttpRequest</b> in response to an HTTP access
     *       authentication request.</td>
     * </tr>
     * <tr>
     *   <td><b>password</b></td>
     *   <td>A password to be used with <b>XMLHttpRequest</b> in response to an HTTP access
     *       authentication request.</td>
     * </tr>
     * </table>
     *
     * Use the <b>success</b> to obtain the result of the request which is provided in
     * the callback's <b>XMLHttpRequest</b> parameter. For example, the code below uses
     * the @see:httpRequest method to retrieve a list of customers from an OData service:
     *
     * <pre>wijmo.httpRequest('http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json', {
     *   success: function (xhr) {
     *     var response = JSON.parse(xhr.responseText),
     *         customers = response.value;
     *     // do something with the customers...
     *   }
     * });</pre>
     *
     * @param url String containing the URL to which the request is sent.
     * @param settings An optional object used to configure the request.
     * @return The <b>XMLHttpRequest</b> object used to perform the request.
     */
    function httpRequest(url: string, settings?: any): XMLHttpRequest;
}

declare module wijmo {
    /**
     * Gets or sets an object that contains all localizable strings in the Wijmo library.
     *
     * The culture selector is a two-letter string that represents an
     * <a href='http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes'>ISO 639 culture</a>.
     */
    var culture: any;
    /**
     * Class that implements formatting and parsing of numbers and Dates.
     *
     * By default, @see:Globalize uses the American English culture.
     * To switch cultures, include the appropriate <b>wijmo.culture.*.js</b>
     * file after the wijmo files.
     *
     * The example below shows how you can use the @see:Globalize class
     * to format dates, times, and numbers in different cultures:
     *
     * @fiddle:u9fo3ynp
     */
    class Globalize {
        /**
         * Formats a number or a date.
         *
         * The format strings used with the @see:format function are similar to
         * the ones used by <b>Globalize.js</b> and by the .NET Globalization
         * library. The tables below contains links that describe the formats
         * available:
         *
         * <ul>
         * <li><a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx">
         *      Standard Numeric Format Strings</a></li>
         * <li><a href="http://msdn.microsoft.com/en-us/library/az4se3k1(v=vs.110).aspx">
         *      Standard Date and Time Format Strings</a></li>
         * <li><a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx">
         *      Custom Date and Time Format Strings</a></li>
         * </ul>
         *
         * @param value Number or Date to format (all other types are converted to strings).
         * @param format Format string to use when formatting numbers or dates.
         * @param trim Whether to remove trailing zeros from numeric results.
         * @param truncate Whether to truncate the numeric values rather than round them.
         * @return A string representation of the given value.
         */
        static format(value: any, format: string, trim?: boolean, truncate?: boolean): string;
        /**
         * Formats a number using the current culture.
         *
         * The @see:formatNumber method accepts most .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx">
         * Standard Numeric Format Strings</a>, except for the 'e' and 'x' formats
         * (scientific notation and hexadecimal) which are not supported.
         *
         * Numeric format strings take the form <i>Axxsscc</i>, where:
         * <ul>
         * <li>
         *  <i>A</i> is a single case-insensitive alphabetic character called the
         *  format specifier.</li>
         * <li>
         *  <i>xx</i> is an optional integer called the precision specifier.
         *  The precision specifier affects the number of digits in the result.</li>
         * <li>
         *  <i>ss</i> is an optional string used to scale the number. If provided,
         *  it must consist of commas. The number is divided by 1000 for each comma
         *  specified.</li>
         * <li>
         *  <i>cc</i> is an optional string used to override the currency symbol
         *  when formatting currency values. This is useful when formatting
         *  currency values for cultures different than the current default
         *  (for example, when formatting Euro or Yen values in applications
         *  that use the English culture).</li>
         * </ul>
         *
         * The following table describes the standard numeric format specifiers and
         * displays sample output produced by each format specifier for the default
         * culture.
         *
         * <b>n</b> Number: <code>formatNumber(1234.5, 'n2') => '1,234.50'</code><br/>
         * <b>f</b> Fixed-point: <code>formatNumber(1234.5, 'f2') => '1234.50'</code><br/>
         * <b>g</b> General (no trailing zeros): <code>formatNumber(1234.5, 'g2') => '1234.5'</code><br/>
         * <b>d</b> Decimal (integers): <code>formatNumber(-1234, 'd6') => '-001234'</code><br/>
         * <b>x</b> Hexadecimal (integers): <code>formatNumber(1234, 'x6') => '0004d2'</code><br/>
         * <b>c</b> Currency: <code>formatNumber(1234, 'c') => '$ 1,234.00'</code><br/>
         * <b>p</b> Percent: <code>formatNumber(0.1234, 'p2') => '12.34 %'</code>
         *
         * The scaling specifier is especially useful when charting large values. For
         * example, the markup below creates a chart that plots population versus GDP.
         * The raw data expresses the population is units and the GDP in millions.
         * The scaling specified in the axes formats causes the chart to show population
         * in millions and GDP in trillions:
         *
         * <pre>&lt;wj-flex-chart
         *   items-source="countriesGDP" binding-x="pop" chart-type="Scatter"&gt;
         *   &lt;wj-flex-chart-series
         *     name="GDP" binding="gdp"&gt;&lt;/wj-flex-chart-series&gt;
         *   &lt;wj-flex-chart-axis
         *     wj-property="axisX" title="Population (millions)"
         *     format="n0,,"&gt;
         *   &lt;/wj-flex-chart-axis&gt;
         *   &lt;wj-flex-chart-axis
         *     wj-property="axisY" title="GDP (US$ trillions)"
         *     format="c0,,"&gt;
         *   &lt;/wj-flex-chart-axis&gt;
         * &lt;/wj-flex-chart&gt;</pre>
         *
         * @param value Number to format.
         * @param format .NET-style standard numeric format string (e.g. 'n2', 'c4', 'p0', 'g2', 'd2').
         * @param trim Whether to remove trailing zeros from the result.
         * @param truncate Whether to truncate the value rather than round it.
         * @return A string representation of the given number.
         */
        static formatNumber(value: number, format: string, trim?: boolean, truncate?: boolean): string;
        /**
         * Formats a date using the current culture.
         *
         * The @see:format parameter contains a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx">Date format string</a>
         * with the following additions:
         * <ul>
         *  <li><i>Q, q</i> Calendar quarter.</li>
         *  <li><i>U</i> Fiscal quarter (government).</li>
         *  <li><i>u</i> Fiscal quarter (private sector).</li>
         *  <li><i>EEEE, EEE, EE, E</i> Fiscal year (government).</li>
         *  <li><i>eeee, eee, ee, e</i> Fiscal year (private sector).</li>
         * </ul>
         *
         * For example:
         *
         * <pre>
         * var d = new Date(2015, 9, 1); // Oct 1, 2015
         * console.log(wijmo.Globalize.format(d, '"FY"EEEE"Q"U') + ' (US culture)');
         * &gt; FY2016Q1 (US culture)
         * </pre>
         *
         * Another addition is available for dealing with complex eras such
         * as those defined in the Japanese culture:
         *
         * <ul>
         *  <li><i>ggg</i> Era name (e.g. '平成', '昭和', '大正', or '明治').</li>
         *  <li><i>gg</i> Era initial (e.g. '平', '昭', '大', or '明').</li>
         *  <li><i>g</i> Era symbol (e.g. 'H', 'S', 'T', or 'M').</li>
         * </ul>
         *
         * @fiddle:vw6en3sa
         *
         * @param value Number or Date to format.
         * @param format .NET-style Date format string.
         * @return A string representation of the given date.
         */
        static formatDate(value: Date, format: string): string;
        /**
         * Parses a string into an integer.
         *
         * @param value String to convert to an integer.
         * @param format Format to use when parsing the number.
         * @return The integer represented by the given string,
         * or <b>NaN</b> if the string cannot be parsed into an integer.
         */
        static parseInt(value: string, format?: string): number;
        /**
         * Parses a string into a floating point number.
         *
         * @param value String to convert to a number.
         * @param format Format to use when parsing the number.
         * @return The floating point number represented by the given string,
         * or <b>NaN</b> if the string cannot be parsed into a floating point number.
         */
        static parseFloat(value: string, format?: string): number;
        /**
         * Parses a string into a Date.
         *
         * Two-digit years are converted to full years based on the value of the
         * calendar's <b>twoDigitYearMax</b> property. By default, this is set to
         * 2029, meaning two-digit values of 30 to 99 are parsed as 19**, and values
         * from zero to 29 are parsed as 20**.
         *
         * You can change this threshold by assigning a new value to the calendar.
         * For example:
         *
         * <pre>// get calendar
         * var cal = wijmo.culture.Globalize.calendar;
         *
         * // default threshold is 2029, so "30" is parsed as 1930
         * cal.twoDigitYearMax = 2029;
         * var d1 = wijmo.Globalize.parseDate('30/12', 'yy/MM'); // dec 1930
         *
         * // changing threshold to 2100, so all values are parsed as 20**
         * cal.twoDigitYearMax = 2100;
         * var d2 = wijmo.Globalize.parseDate('30/12', 'yy/MM'); // dec 2030</pre>
         *
         * @param value String to convert to a Date.
         * @param format Format string used to parse the date.
         * @param defaultDate Date to use as a reference in case date parts are
         * missing form the input (e.g. when format = 'MM/dd').
         * @return The date represented by the given string, or null if the string
         * cannot be parsed into a Date.
         */
        static parseDate(value: string, format: string, defaultDate?: Date): Date;
        static _CJK: string;
        /**
         * Gets the first day of the week according to the current culture.
         *
         * The value returned is between zero (Sunday) and six (Saturday).
         */
        static getFirstDayOfWeek(): number;
        /**
         * Gets the symbol used as a decimal separator in numbers.
         */
        static getNumberDecimalSeparator(): string;
        private static _toFixedStr(num, digits);
        private static _unquote(s);
        private static _dateFormatParts;
        private static _parseDateFormat(format);
        private static _formatDatePart(d, format, part);
        private static _getEra(d, cal);
        private static _expandFormat(format);
        private static _zeroPad(num, places);
        private static _h12(d);
        private static _shiftDecimal(val, shift);
    }
    function _updateCulture(): void;
    function _addCultureInfo(member: string, info: any): void;
}

declare module wijmo {
    /**
     * Provides binding to complex properties (e.g. 'customer.address.city')
     */
    class Binding {
        _path: string;
        _parts: any[];
        _key: string;
        /**
         * Initializes a new instance of the @see:Binding class.
         *
         * @param path Name of the property to bind to.
         */
        constructor(path: string);
        /**
         * Gets or sets the path for the binding.
         *
         * In the simplest case, the path is the name of the property of the source
         * object to use for the binding (e.g. 'street').
         *
         * Sub-properties of a property can be specified by a syntax similar to that
         * used in JavaScript (e.g. 'address.street').
         */
        path: string;
        /**
         * Gets the binding value for a given object.
         *
         * If the object does not contain the property specified by the
         * binding @see:path, the method returns null.
         *
         * @param object The object that contains the data to be retrieved.
         */
        getValue(object: any): any;
        /**
         * Sets the binding value on a given object.
         *
         * If the object does not contain the property specified by the
         * binding @see:path, the value is not set.
         *
         * @param object The object that contains the data to be set.
         * @param value Data value to set.
         */
        setValue(object: any, value: any): void;
    }
}

declare module wijmo {
    /**
     * Represents an event handler.
     *
     * Event handlers are functions invoked when events are raised.
     *
     * Every event handler has two arguments:
     * <ul>
     *   <li><b>sender</b> is the object that raised the event, and</li>
     *   <li><b>args</b> is an optional object that contains the event parameters.</li>
     * </ul>
     *
     * The example below shows how you can add event handlers to Wijmo events:
     *
     * @fiddle:9tkuuf5t
     */
    interface IEventHandler {
        (sender: any, args: EventArgs): void;
    }
    /**
     * Represents an event.
     *
     * Wijmo events are similar to .NET events. Any class may define events by
     * declaring them as fields. Any class may subscribe to events using the
     * event's @see:addHandler method and unsubscribe using the @see:removeHandler
     * method.
     *
     * Wijmo event handlers take two parameters: <i>sender</i> and <i>args</i>.
     * The first is the object that raised the event, and the second is an object
     * that contains the event parameters.
     *
     * Classes that define events follow the .NET pattern where for every event
     * there is an <i>on[EVENTNAME]</i> method that raises the event. This pattern
     * allows derived classes to override the <i>on[EVENTNAME]</i> method and
     * handle the event before and/or after the base class raises the event.
     * Derived classes may even suppress the event by not calling the base class
     * implementation.
     *
     * For example, the TypeScript code below overrides the <b>onValueChanged</b>
     * event for a control to perform some processing before and after the
     * <b>valueChanged</b> event fires:
     *
     * <pre>// override base class
     * onValueChanged(e: EventArgs) {
     *   // execute some code before the event fires
     *   console.log('about to fire valueChanged');
     *   // optionally, call base class to fire the event
     *   super.onValueChanged(e);
     *   // execute some code after the event fired
     *   console.log('valueChanged event just fired');
     * }</pre>
     */
    class Event {
        private _handlers;
        /**
         * Adds a handler to this event.
         *
         * @param handler Function invoked when the event is raised.
         * @param self Object that defines the event handler
         * (accessible as 'this' from the handler code).
         */
        addHandler(handler: IEventHandler, self?: any): void;
        /**
         * Removes a handler from this event.
         *
         * @param handler Function invoked when the event is raised.
         * @param self Object that defines the event handler (accessible as 'this' from the handler code).
         */
        removeHandler(handler: IEventHandler, self?: any): void;
        /**
         * Removes all handlers associated with this event.
         */
        removeAllHandlers(): void;
        /**
         * Raises this event, causing all associated handlers to be invoked.
         *
         * @param sender Source object.
         * @param args Event parameters.
         */
        raise(sender: any, args?: EventArgs): void;
        /**
         * Gets a value that indicates whether this event has any handlers.
         */
        readonly hasHandlers: boolean;
        /**
         * Gets the number of handlers added to this event.
         */
        readonly handlerCount: number;
    }
    /**
     * Base class for event arguments.
     */
    class EventArgs {
        /**
         * Provides a value to use with events that do not have event data.
         */
        static empty: EventArgs;
    }
    /**
     * Provides arguments for cancellable events.
     */
    class CancelEventArgs extends EventArgs {
        /**
         * Gets or sets a value that indicates whether the event should be canceled.
         */
        cancel: boolean;
    }
    /**
     * Provides arguments for property change events.
     */
    class PropertyChangedEventArgs extends EventArgs {
        _name: string;
        _oldVal: any;
        _newVal: any;
        /**
         * Initializes a new instance of the @see:PropertyChangedEventArgs class.
         *
         * @param propertyName The name of the property whose value changed.
         * @param oldValue The old value of the property.
         * @param newValue The new value of the property.
         */
        constructor(propertyName: string, oldValue: any, newValue: any);
        /**
         * Gets the name of the property whose value changed.
         */
        readonly propertyName: string;
        /**
         * Gets the old value of the property.
         */
        readonly oldValue: any;
        /**
         * Gets the new value of the property.
         */
        readonly newValue: any;
    }
    /**
     * Provides arguments for @see:XMLHttpRequest error events.
     */
    class RequestErrorEventArgs extends CancelEventArgs {
        _xhr: XMLHttpRequest;
        _msg: string;
        /**
         * Initializes a new instance of the @see:RequestErrorEventArgs class.
         *
         * @param xhr The @see:XMLHttpRequest that detected the error.
         * The status and statusText properties of the request object
         * contain details about the error.
         * @param msg Optional error message.
         */
        constructor(xhr: XMLHttpRequest, msg?: string);
        /**
         * Gets a reference to the @see:XMLHttpRequest that detected the error.
         *
         * The status and statusText properties of the request object contain
         * details about the error.
         */
        readonly request: XMLHttpRequest;
        /**
         * Gets or sets an error message to display to the user.
         */
        message: string;
    }
}

declare module wijmo {
    var controlBaseClass: ObjectConstructor;
    class ControlBase extends controlBaseClass {
        constructor();
    }
    /**
     * Base class for all Wijmo controls.
     *
     * The @see:Control class handles the association between DOM elements and the
     * actual control. Use the @see:hostElement property to get the DOM element
     * that is hosting a control, or the @see:getControl method to get the control
     * hosted in a given DOM element.
     *
     * The @see:Control class also provides a common pattern for invalidating and
     * refreshing controls, for updating the control layout when its size changes,
     * and for handling the HTML templates that define the control structure.
     */
    class Control extends ControlBase {
        static _licKey: string;
        static _wme: HTMLElement;
        static _touching: boolean;
        static _toTouch: any;
        static _REFRESH_INTERVAL: number;
        static _FOCUS_INTERVAL: number;
        static _ANIM_DEF_DURATION: number;
        static _ANIM_DEF_STEP: number;
        static _CLICK_DELAY: number;
        static _CLICK_REPEAT: number;
        static _CLIPBOARD_DELAY: number;
        static _POPUP_ZINDEX: number;
        static _SEARCH_DELAY: number;
        static _HOVER_DELAY: number;
        static _DRAG_SCROLL_EDGE: number;
        static _DRAG_SCROLL_STEP: number;
        static _CTRL_KEY: string;
        static _OWNR_KEY: string;
        static _SCRL_KEY: string;
        static _rxInputAtts: RegExp;
        protected _e: HTMLElement;
        protected _orgTabIndex: number;
        protected _orgOuter: string;
        protected _orgTag: string;
        protected _orgAtts: NamedNodeMap;
        protected _listeners: any[];
        protected _pristine: boolean;
        protected _focus: boolean;
        protected _updating: number;
        protected _fullUpdate: boolean;
        protected _toInv: any;
        protected _toFocus: any;
        protected _szCtl: Size;
        protected _rtlDir: boolean;
        /**
         * Initializes a new instance of the @see:Control class and attaches it to a DOM element.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         * @param invalidateOnResize Whether the control should be invalidated when it is resized.
         */
        constructor(element: any, options?: any, invalidateOnResize?: boolean);
        /**
         * Gets the HTML template used to create instances of the control.
         *
         * This method traverses up the class hierarchy to find the nearest
         * ancestor that specifies a control template. For example, if you
         * specify a prototype for the @see:ComboBox control, which does
         * not specify a template, it will override the template defined
         * by the @see:DropDown base class (the nearest ancestor that does
         * specify a template).
         */
        getTemplate(): string;
        /**
         * Applies the template to a new instance of a control, and returns the root element.
         *
         * This method should be called by constructors of templated controls.
         * It is responsible for binding the template parts to the
         * corresponding control members.
         *
         * For example, the code below applies a template to an instance
         * of an @see:InputNumber control. The template must contain elements
         * with the 'wj-part' attribute set to 'input', 'btn-inc', and 'btn-dec'.
         * The control members '_tbx', '_btnUp', and '_btnDn' will be assigned
         * references to these elements.
         *
         * <pre>this.applyTemplate('wj-control wj-inputnumber', template, {
         *   _tbx: 'input',
         *   _btnUp: 'btn-inc',
         *   _btnDn: 'btn-dec'
         * }, 'input');</pre>
         *
         * @param classNames Names of classes to add to the control's host element.
         * @param template An HTML string that defines the control template.
         * @param parts A dictionary of part variables and their names.
         * @param namePart Name of the part to be named after the host element. This
         * determines how the control submits data when used in forms.
         */
        applyTemplate(classNames: string, template: string, parts: Object, namePart?: string): HTMLElement;
        /**
         * Disposes of the control by removing its association with the host element.
         *
         * The @see:dispose method automatically removes any event listeners added
         * with the @see:addEventListener method.
         *
         * Calling the @see:dispose method is important in applications that create
         * and remove controls dynamically. Failing to dispose of the controls may
         * cause memory leaks.
         */
        dispose(): void;
        /**
         * Gets the control that is hosted in a given DOM element.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         */
        static getControl(element: any): Control;
        /**
         * Gets the DOM element that is hosting the control.
         */
        readonly hostElement: HTMLElement;
        /**
         * Gets a value indicating whether the control is hosted in an element
         * with right-to-left layout.
         */
        readonly rightToLeft: boolean;
        /**
         * Sets the focus to this control.
         */
        focus(): void;
        /**
         * Checks whether this control contains the focused element.
         */
        containsFocus(): boolean;
        /**
         * Invalidates the control causing an asynchronous refresh.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        invalidate(fullUpdate?: boolean): void;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        /**
         * Invalidates all Wijmo controls contained in an HTML element.
         *
         * Use this method when your application has dynamic panels that change
         * the control's visibility or dimensions. For example, splitters, accordions,
         * and tab controls usually change the visibility of its content elements.
         * In this case, failing to notify the controls contained in the element
         * may cause them to stop working properly.
         *
         * If this happens, you must handle the appropriate event in the dynamic
         * container and call the @see:Control.invalidateAll method so the contained
         * Wijmo controls will update their layout information properly.
         *
         * @param e Container element. If set to null, all Wijmo controls
         * on the page will be invalidated.
         */
        static invalidateAll(e?: HTMLElement): void;
        /**
         * Refreshes all Wijmo controls contained in an HTML element.
         *
         * This method is similar to @see:invalidateAll, except the controls
         * are updated immediately rather than after an interval.
         *
         * @param e Container element. If set to null, all Wijmo controls
         * on the page will be invalidated.
         */
        static refreshAll(e?: HTMLElement): void;
        /**
         * Disposes of all Wijmo controls contained in an HTML element.
         *
         * @param e Container element.
         */
        static disposeAll(e?: HTMLElement): void;
        /**
         * Suspends notifications until the next call to @see:endUpdate.
         */
        beginUpdate(): void;
        /**
         * Resumes notifications suspended by calls to @see:beginUpdate.
         */
        endUpdate(): void;
        /**
         * Gets a value that indicates whether the control is currently being updated.
         */
        readonly isUpdating: boolean;
        /**
         * Executes a function within a @see:beginUpdate/@see:endUpdate block.
         *
         * The control will not be updated until the function has been executed.
         * This method ensures @see:endUpdate is called even if the function throws
         * an exception.
         *
         * @param fn Function to be executed.
         */
        deferUpdate(fn: Function): void;
        /**
         * Gets a value that indicates whether the control is currently handling
         * a touch event.
         */
        readonly isTouching: boolean;
        /**
         * Gets or sets a value that determines whether the control is disabled.
         *
         * Disabled controls cannot get mouse or keyboard events.
         */
        isDisabled: boolean;
        /**
         * Initializes the control by copying the properties from a given object.
         *
         * This method allows you to initialize controls using plain data objects
         * instead of setting the value of each property in code.
         *
         * For example:
         * <pre>
         * grid.initialize({
         *   itemsSource: myList,
         *   autoGenerateColumns: false,
         *   columns: [
         *     { binding: 'id', header: 'Code', width: 130 },
         *     { binding: 'name', header: 'Name', width: 60 }
         *   ]
         * });
         * // is equivalent to
         * grid.itemsSource = myList;
         * grid.autoGenerateColumns = false;
         * // etc.
         * </pre>
         *
         * The initialization data is type-checked as it is applied. If the
         * initialization object contains unknown property names or invalid
         * data types, this method will throw.
         *
         * @param options Object that contains the initialization data.
         */
        initialize(options: any): void;
        /**
         * Adds an event listener to an element owned by this @see:Control.
         *
         * The control keeps a list of attached listeners and their handlers,
         * making it easier to remove them when the control is disposed (see the
         * @see:dispose and @see:removeEventListener methods).
         *
         * Failing to remove event listeners may cause memory leaks.
         *
         * The <b>passive</b> parameter is set to false by default, which means
         * the event handler may call <b>event.preventDefault()</b>.
         * If you are adding passive handlers to touch or wheel events, setting
         * this parameter to true will improve application performance.
         *
         * For details on passive event listeners, please see
         * <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners">Improving scrolling performance with passive listeners</a>.
         *
         * @param target Target element for the event.
         * @param type String that specifies the event.
         * @param fn Function to execute when the event occurs.
         * @param capture Whether the listener should be handled by the control before it is handled by the target element.
         * @param passive Indicates that the handler will never call <b>preventDefault()</b>.
         */
        addEventListener(target: EventTarget, type: string, fn: any, capture?: boolean, passive?: boolean): void;
        /**
         * Removes one or more event listeners attached to elements owned by this @see:Control.
         *
         * @param target Target element for the event. If null, removes listeners attached to all targets.
         * @param type String that specifies the event. If null, removes listeners attached to all events.
         * @param fn Handler to remove. If null, removes all handlers.
         * @param capture Whether the listener is capturing. If null, removes capturing and non-capturing listeners.
         * @return The number of listeners removed.
         */
        removeEventListener(target?: EventTarget, type?: string, fn?: any, capture?: boolean): number;
        /**
         * Occurs when the control gets the focus.
         */
        readonly gotFocus: Event;
        /**
         * Raises the @see:gotFocus event.
         */
        onGotFocus(e?: EventArgs): void;
        /**
         * Occurs when the control loses the focus.
         */
        readonly lostFocus: Event;
        /**
         * Raises the @see:lostFocus event.
         */
        onLostFocus(e?: EventArgs): void;
        /**
         * Occurs when the control is about to refresh its contents.
         */
        readonly refreshing: Event;
        /**
         * Raises the @see:refreshing event.
         */
        onRefreshing(e?: EventArgs): void;
        /**
         * Occurs after the control has refreshed its contents.
         */
        readonly refreshed: Event;
        /**
         * Raises the @see:refreshed event.
         */
        onRefreshed(e?: EventArgs): void;
        _getProductInfo(): string;
        private _updateWme();
        _hasPendingUpdates(): boolean;
        protected _handleResize(): void;
        _handleFocusBlur(): void;
        protected _updateFocusState(): void;
        protected _updateState(): void;
        protected _handleTouchStart(e: any): void;
        protected _handleTouchEnd(e: any): void;
        private _handleDisabled(e);
        private _replaceWithDiv(element);
        private _copyAttributes(e, atts, names);
        _getKeyCode(e: KeyboardEvent): number;
    }
}

declare module wijmo {
    /**
     * Specifies the type of aggregate to calculate over a group of values.
     */
    enum Aggregate {
        /**
         * No aggregate.
         */
        None = 0,
        /**
         * Returns the sum of the numeric values in the group.
         */
        Sum = 1,
        /**
         * Returns the count of non-null values in the group.
         */
        Cnt = 2,
        /**
         * Returns the average value of the numeric values in the group.
         */
        Avg = 3,
        /**
         * Returns the maximum value in the group.
         */
        Max = 4,
        /**
         * Returns the minimum value in the group.
         */
        Min = 5,
        /**
         * Returns the difference between the maximum and minimum numeric values in the group.
         */
        Rng = 6,
        /**
         * Returns the sample standard deviation of the numeric values in the group
         * (uses the formula based on n-1).
         */
        Std = 7,
        /**
         * Returns the sample variance of the numeric values in the group
         * (uses the formula based on n-1).
         */
        Var = 8,
        /**
         * Returns the population standard deviation of the values in the group
         * (uses the formula based on n).
         */
        StdPop = 9,
        /**
         * Returns the population variance of the values in the group
         * (uses the formula based on n).
         */
        VarPop = 10,
        /**
         * Returns the count of all values in the group (including nulls).
         */
        CntAll = 11,
        /**
         * Returns the first non-null value in the group.
         */
        First = 12,
        /**
         * Returns the last non-null value in the group.
         */
        Last = 13,
    }
    /**
     * Calculates an aggregate value from the values in an array.
     *
     * @param aggType Type of aggregate to calculate.
     * @param items Array with the items to aggregate.
     * @param binding Name of the property to aggregate on (in case the items are not simple values).
     */
    function getAggregate(aggType: Aggregate, items: any[], binding?: string): any;
}

/**
 * Defines interfaces and classes related to data, including the @see:ICollectionView
 * interface, @see:CollectionView and @see:ObservableArray classes.
 */
declare module wijmo.collections {
    /**
     * Notifies listeners of dynamic changes, such as when items get added and
     * removed or when the collection is sorted, filtered, or grouped.
     */
    interface INotifyCollectionChanged {
        /**
         * Occurs when the collection changes.
         */
        collectionChanged: Event;
    }
    /**
     * Describes the action that caused the @see:INotifyCollectionChanged.collectionChanged
     * event to fire.
     */
    enum NotifyCollectionChangedAction {
        /** An item was added to the collection. */
        Add = 0,
        /** An item was removed from the collection. */
        Remove = 1,
        /** An item was changed or replaced. */
        Change = 2,
        /**
         * Several items changed simultaneously
         * (for example, the collection was sorted, filtered, or grouped).
         */
        Reset = 3,
    }
    /**
     * Provides data for the @see:INotifyCollectionChanged.collectionChanged event.
     */
    class NotifyCollectionChangedEventArgs extends EventArgs {
        /**
         * Provides a reset notification.
         */
        static reset: NotifyCollectionChangedEventArgs;
        /**
         * Gets the action that caused the event to fire.
         */
        action: NotifyCollectionChangedAction;
        /**
         * Gets the item that was added, removed, or changed.
         */
        item: any;
        /**
         * Gets the index at which the change occurred.
         */
        index: number;
        /**
         * Initializes a new instance of the @see:NotifyCollectionChangedEventArgs class.
         *
         * @param action Type of action that caused the event to fire.
         * @param item Item that was added or changed.
         * @param index Index of the item.
         */
        constructor(action?: NotifyCollectionChangedAction, item?: any, index?: number);
    }
    /**
     * Represents a method that takes an item of any type and returns a
     * boolean that indicates whether the object meets a set of criteria.
     */
    interface IPredicate {
        (item: any): boolean;
    }
    /**
    * Represents the method that compares two objects.
    */
    interface IComparer {
        (x: any, y: any): number;
    }
    /**
     * Describes a sorting criterion.
     */
    class SortDescription {
        _bnd: Binding;
        _asc: boolean;
        /**
         * Initializes a new instance of the @see:SortDescription class.
         *
         * @param property Name of the property to sort on.
         * @param ascending Whether to sort in ascending order.
         */
        constructor(property: string, ascending: boolean);
        /**
         * Gets the name of the property used to sort.
         */
        readonly property: string;
        /**
         * Gets a value that determines whether to sort the values in ascending order.
         */
        readonly ascending: boolean;
    }
    /**
     * Enables collections to have the functionalities of current record management,
     * custom sorting, filtering, and grouping.
     *
     * This is a JavaScript version of the <b>ICollectionView</b> interface used in
     * Microsoft's XAML platform. It provides a consistent, powerful, and  MVVM-friendly
     * way to bind data to UI elements.
     *
     * Wijmo includes several classes that implement @see:ICollectionView. The most
     * common is @see:CollectionView, which works based on regular JavsScript
     * arrays.
     */
    interface ICollectionView extends INotifyCollectionChanged, IQueryInterface {
        /**
         * Gets a value that indicates whether this view supports filtering via the
         * @see:filter property.
         */
        canFilter: boolean;
        /**
         * Gets a value that indicates whether this view supports grouping via the
         * @see:groupDescriptions property.
         */
        canGroup: boolean;
        /**
         * Gets a value that indicates whether this view supports sorting via the
         * @see:sortDescriptions property.
         */
        canSort: boolean;
        /**
         * Gets the current item in the view.
         */
        currentItem: any;
        /**
         * Gets the ordinal position of the current item in the view.
         */
        currentPosition: number;
        /**
         * Gets or sets a callback used to determine if an item is suitable for
         * inclusion in the view.
         *
         * NOTE: If the filter function needs a scope (i.e. a meaningful 'this'
         * value), then remember to set the filter using the 'bind' function to
         * specify the 'this' object. For example:
         * <pre>
         *   collectionView.filter = this._filter.bind(this);
         * </pre>
         */
        filter: IPredicate;
        /**
         * Gets a collection of @see:GroupDescription objects that describe how the
         * items in the collection are grouped in the view.
         */
        groupDescriptions: ObservableArray;
        /**
         * Gets the top-level groups.
         */
        groups: any[];
        /**
         * Gets a value that indicates whether this view contains no items.
         */
        isEmpty: boolean;
        /**
         * Gets a collection of @see:SortDescription objects that describe how the items
         * in the collection are sorted in the view.
         */
        sortDescriptions: ObservableArray;
        /**
         * Gets or sets the collection object from which to create this view.
         */
        sourceCollection: any;
        /**
         * Returns a value that indicates whether a given item belongs to this view.
         *
         * @param item The item to locate in the collection.
         */
        contains(item: any): boolean;
        /**
         * Sets the specified item to be the current item in the view.
         *
         * @param item The item to set as the @see:currentItem.
         */
        moveCurrentTo(item: any): boolean;
        /**
         * Sets the first item in the view as the current item.
         */
        moveCurrentToFirst(): boolean;
        /**
         * Sets the last item in the view as the current item.
         */
        moveCurrentToLast(): boolean;
        /**
         * Sets the item after the current item in the view as the current item.
         */
        moveCurrentToNext(): boolean;
        /**
         * Sets the item at the specified index in the view as the current item.
         *
         * @param index The index of the item to set as the @see:currentItem.
         */
        moveCurrentToPosition(index: number): boolean;
        /**
         * Sets the item before the current item in the view as the current item.
         */
        moveCurrentToPrevious(): any;
        /**
         * Re-creates the view using the current sort, filter, and group parameters.
         */
        refresh(): any;
        /**
         * Occurs after the current item changes.
         */
        currentChanged: Event;
        /**
         * Occurs before the current item changes.
         */
        currentChanging: Event;
        /**
         * Suspends refreshes until the next call to @see:endUpdate.
         */
        beginUpdate(): any;
        /**
         * Resumes refreshes suspended by a call to @see:beginUpdate.
         */
        endUpdate(): any;
        /**
         * Executes a function within a beginUpdate/endUpdate block.
         *
         * The collection will not be refreshed until the function has been executed.
         * This method ensures endUpdate is called even if the function throws.
         *
         * @param fn Function to be executed within the beginUpdate/endUpdate block.
         */
        deferUpdate(fn: Function): any;
        /**
         * Gets the filtered, sorted, grouped items in the view.
         */
        items: any[];
    }
    /**
     * Defines methods and properties that extend @see:ICollectionView to provide
     * editing capabilities.
     */
    interface IEditableCollectionView extends ICollectionView {
        /**
         * Gets a value that indicates whether a new item can be added to the collection.
         */
        canAddNew: boolean;
        /**
         * Gets a value that indicates whether the collection view can discard pending changes
         * and restore the original values of an edited object.
         */
        canCancelEdit: boolean;
        /**
         * Gets a value that indicates whether items can be removed from the collection.
         */
        canRemove: boolean;
        /**
         * Gets the item that is being added during the current add transaction.
         */
        currentAddItem: any;
        /**
         * Gets the item that is being edited during the current edit transaction.
         */
        currentEditItem: any;
        /**
         * Gets a value that indicates whether an add transaction is in progress.
         */
        isAddingNew: boolean;
        /**
         * Gets a value that indicates whether an edit transaction is in progress.
         */
        isEditingItem: boolean;
        /**
         * Adds a new item to the collection.
         *
         * @return The item that was added to the collection.
         */
        addNew(): any;
        /**
         * Ends the current edit transaction and, if possible,
         * restores the original value to the item.
         */
        cancelEdit(): any;
        /**
         * Ends the current add transaction and discards the pending new item.
         */
        cancelNew(): any;
        /**
         * Ends the current edit transaction and saves the pending changes.
         */
        commitEdit(): any;
        /**
         * Ends the current add transaction and saves the pending new item.
         */
        commitNew(): any;
        /**
         * Begins an edit transaction of the specified item.
         *
         * @param item Item to edit.
         */
        editItem(item: any): any;
        /**
         * Removes the specified item from the collection.
         *
         * @param item Item to remove from the collection.
         */
        remove(item: any): any;
        /**
         * Removes the item at the specified index from the collection.
         *
         * @param index Index of the item to remove from the collection.
         */
        removeAt(index: number): any;
    }
    /**
     * Defines methods and properties that extend @see:ICollectionView to provide
     * paging capabilities.
     */
    interface IPagedCollectionView extends ICollectionView {
        /**
         * Gets a value that indicates whether the @see:pageIndex value can change.
         */
        canChangePage: boolean;
        /**
         * Gets a value that indicates whether the index is changing.
         */
        isPageChanging: boolean;
        /**
         * Gets the number of items in the view taking paging into account.
         *
         * To get the total number of items, use the @see:totalItemCount property.
         *
         * Notice that this is different from the .NET <b>IPagedCollectionView</b>,
         * where <b>itemCount</b> and <b>totalItemCount</b> both return the count
         * before paging is applied.
         */
        itemCount: number;
        /**
         * Gets the zero-based index of the current page.
         */
        pageIndex: number;
        /**
         * Gets or sets the number of items to display on each page.
         */
        pageSize: number;
        /**
         * Gets the total number of items in the view before paging is applied.
         *
         * To get the number of items in the current view not taking paging into
         * account, use the @see:itemCount property.
         *
         * Notice that this is different from the .NET <b>IPagedCollectionView</b>,
         * where <b>itemCount</b> and <b>totalItemCount</b> both return the count
         * before paging is applied.
         */
        totalItemCount: number;
        /**
         * Sets the first page as the current page.
         */
        moveToFirstPage(): boolean;
        /**
         * Sets the last page as the current page.
         */
        moveToLastPage(): boolean;
        /**
         * Moves to the page after the current page.
         */
        moveToNextPage(): boolean;
        /**
         * Moves to the page at the specified index.
         *
         * @param index Index of the page to move to.
         */
        moveToPage(index: number): boolean;
        /**
         * Moves to the page before the current page.
         */
        moveToPreviousPage(): boolean;
        /**
        * Occurs after the page index changes.
        */
        pageChanged: Event;
        /**
         * Occurs before the page index changes.
         */
        pageChanging: Event;
    }
    /**
     * Provides data for the @see:IPagedCollectionView.pageChanging event
     */
    class PageChangingEventArgs extends CancelEventArgs {
        /**
         * Gets the index of the page that is about to become current.
         */
        newPageIndex: number;
        /**
         * Initializes a new instance of the @see:PageChangingEventArgs class.
         *
         * @param newIndex Index of the page that is about to become current.
         */
        constructor(newIndex: number);
    }
    /**
     * Represents a base class for types defining grouping conditions.
     *
     * The concrete class which is commonly used for this purpose is
     * @see:PropertyGroupDescription.
     */
    class GroupDescription {
        /**
         * Returns the group name for the given item.
         *
         * @param item The item to get group name for.
         * @param level The zero-based group level index.
         * @return The name of the group the item belongs to.
         */
        groupNameFromItem(item: any, level: number): any;
        /**
         * Returns a value that indicates whether the group name and the item name
         * match (which implies that the item belongs to the group).
         *
         * @param groupName The name of the group.
         * @param itemName The name of the item.
         * @return True if the names match; otherwise, false.
         */
        namesMatch(groupName: any, itemName: any): boolean;
    }
    /**
     * Describes the grouping of items using a property name as the criterion.
     *
     * For example, the code below causes a @see:CollectionView to group items
     * by the value of their 'country' property:
     * <pre>
     * var cv = new wijmo.collections.CollectionView(items);
     * var gd = new wijmo.collections.PropertyGroupDescription('country');
     * cv.groupDescriptions.push(gd);
     * </pre>
     *
     * You may also specify a callback function that generates the group name.
     * For example, the code below causes a @see:CollectionView to group items
     * by the first letter of the value of their 'country' property:
     * <pre>
     * var cv = new wijmo.collections.CollectionView(items);
     * var gd = new wijmo.collections.PropertyGroupDescription('country',
     *   function(item, propName) {
     *     return item[propName][0]; // return country's initial
     * });
     * cv.groupDescriptions.push(gd);
     * </pre>
     */
    class PropertyGroupDescription extends GroupDescription {
        _bnd: Binding;
        _converter: Function;
        /**
         * Initializes a new instance of the @see:PropertyGroupDescription class.
         *
         * @param property The name of the property that specifies
         * which group an item belongs to.
         * @param converter A callback function that takes an item and
         * a property name and returns the group name. If not specified,
         * the group name is the property value for the item.
         */
        constructor(property: string, converter?: Function);
        /**
         * Gets the name of the property that is used to determine which
         * group an item belongs to.
         */
        readonly propertyName: string;
        /**
         * Returns the group name for the given item.
         *
         * @param item The item to get group name for.
         * @param level The zero-based group level index.
         * @return The name of the group the item belongs to.
         */
        groupNameFromItem(item: any, level: number): any;
        /**
         * Returns a value that indicates whether the group name and the item name
         * match (which implies that the item belongs to the group).
         *
         * @param groupName The name of the group.
         * @param itemName The name of the item.
         * @return True if the names match; otherwise, false.
         */
        namesMatch(groupName: any, itemName: any): boolean;
    }
}

declare module wijmo.collections {
    /**
     * Base class for Array classes with notifications.
     */
    class ArrayBase extends Array {
        /**
         * Initializes a new instance of the @see:ArrayBase class.
         */
        constructor();
    }
    /**
     * Array that sends notifications on changes.
     *
     * The class raises the @see:collectionChanged event when changes are made with
     * the push, pop, splice, insert, or remove methods.
     *
     * Warning: Changes made by assigning values directly to array members or to the
     * length of the array do not raise the @see:collectionChanged event.
     */
    class ObservableArray extends ArrayBase implements INotifyCollectionChanged {
        private _updating;
        /**
         * Initializes a new instance of the @see:ObservableArray class.
         *
         * @param data Array containing items used to populate the @see:ObservableArray.
         */
        constructor(data?: any[]);
        /**
         * Adds one or more items to the end of the array.
         *
         * @param ...item One or more items to add to the array.
         * @return The new length of the array.
         */
        push(...item: any[]): number;
        pop(): any;
        /**
         * Removes and/or adds items to the array.
         *
         * @param index Position where items will be added or removed.
         * @param count Number of items to remove from the array.
         * @param item Item to add to the array.
         * @return An array containing the removed elements.
         */
        splice(index: number, count: number, item?: any): any[];
        /**
         * Creates a shallow copy of a portion of an array.
         *
         * @param begin Position where the copy starts.
         * @param end Position where the copy ends.
         * @return A shallow copy of a portion of an array.
         */
        slice(begin?: number, end?: number): any[];
        /**
         * Searches for an item in the array.
         *
         * @param searchElement Element to locate in the array.
         * @param fromIndex The index where the search should start.
         * @return The index of the item in the array, or -1 if the item was not found.
         */
        indexOf(searchElement: any, fromIndex?: number): number;
        /**
         * Sorts the elements of the array in place.
         *
         * @param compareFn Specifies a function that defines the sort order.
         * If specified, the function should take two arguments and should return
         * -1, +1, or 0 to indicate the first argument is smaller, greater than,
         * or equal to the second argument.
         * If omitted, the array is sorted in dictionary order according to the
         * string conversion of each element.
         * @return A copy of the sorted array.
         */
        sort(compareFn?: Function): this;
        /**
         * Inserts an item at a specific position in the array.
         *
         * @param index Position where the item will be added.
         * @param item Item to add to the array.
         */
        insert(index: number, item: any): void;
        /**
         * Removes an item from the array.
         *
         * @param item Item to remove.
         * @return True if the item was removed, false if it wasn't found in the array.
         */
        remove(item: any): boolean;
        /**
         * Removes an item at a specific position in the array.
         *
         * @param index Position of the item to remove.
         */
        removeAt(index: number): void;
        /**
         * Assigns an item at a specific position in the array.
         *
         * @param index Position where the item will be assigned.
         * @param item Item to assign to the array.
         */
        setAt(index: number, item: any): void;
        /**
         * Removes all items from the array.
         */
        clear(): void;
        /**
         * Suspends notifications until the next call to @see:endUpdate.
         */
        beginUpdate(): void;
        /**
         * Resumes notifications suspended by a call to @see:beginUpdate.
         */
        endUpdate(): void;
        /**
         * Gets a value that indicates whether notifications are currently suspended
         * (see @see:beginUpdate and @see:endUpdate).
         */
        readonly isUpdating: boolean;
        /**
         * Executes a function within a @see:beginUpdate/@see:endUpdate block.
         *
         * The collection will not be refreshed until the function finishes.
         * This method ensures @see:endUpdate is called even if the function throws
         * an exception.
         *
         * @param fn Function to be executed without updates.
         */
        deferUpdate(fn: Function): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         * @return True if the caller queries for a supported interface.
         */
        implementsInterface(interfaceName: string): boolean;
        /**
         * Occurs when the collection changes.
         */
        readonly collectionChanged: Event;
        /**
         * Raises the @see:collectionChanged event.
         *
         * @param e Contains a description of the change.
         */
        onCollectionChanged(e?: NotifyCollectionChangedEventArgs): void;
        private _raiseCollectionChanged(action?, item?, index?);
    }
}

declare module wijmo.collections {
    /**
     * Class that implements the @see:ICollectionView interface to expose data in
     * regular JavaScript arrays.
     *
     * The @see:CollectionView class implements the following interfaces:
     * <ul>
     *   <li>@see:ICollectionView: provides current record management,
     *       custom sorting, filtering, and grouping.</li>
     *   <li>@see:IEditableCollectionView: provides methods for editing,
     *       adding, and removing items.</li>
     *   <li>@see:IPagedCollectionView: provides paging.</li>
     * </ul>
     *
     * To use the @see:CollectionView class, start by declaring it and passing a
     * regular array as a data source. Then configure the view using the
     * @see:filter, @see:sortDescriptions, @see:groupDescriptions, and
     * @see:pageSize properties. Finally, access the view using the @see:items
     * property. For example:
     *
     * <pre>// create a new CollectionView
     * var cv = new wijmo.collections.CollectionView(myArray);
     *
     * // sort items by amount in descending order
     * var sd = new wijmo.collections.SortDescription('amount', false);
     * cv.sortDescriptions.push(sd);
     *
     * // show only items with amounts greater than 100
     * cv.filter = function(item) { return item.amount &gt; 100 };
     *
     * // show the sorted, filtered result on the console
     * for (var i = 0; i &lt; cv.items.length; i++) {
     *   var item = cv.items[i];
     *   console.log(i + ': ' + item.name + ' ' + item.amount);
     * }</pre>
     *
     * The example below shows how you can use a @see:CollectionView
     * to provide sorted views of some raw data:
     *
     * @fiddle:2g70rkct
     */
    class CollectionView implements IEditableCollectionView, IPagedCollectionView {
        _src: any[];
        _ncc: INotifyCollectionChanged;
        _view: any[];
        _pgView: any[];
        _groups: CollectionViewGroup[];
        _fullGroups: CollectionViewGroup[];
        _digest: string;
        _idx: number;
        _filter: IPredicate;
        _srtDsc: ObservableArray;
        _grpDesc: ObservableArray;
        _newItem: any;
        _edtItem: any;
        _edtClone: any;
        _committing: boolean;
        _canceling: boolean;
        _pendingRefresh: boolean;
        _pgSz: number;
        _pgIdx: number;
        _updating: number;
        _itemCreator: Function;
        _stableSort: boolean;
        _nullsFirst: boolean;
        _canFilter: boolean;
        _canGroup: boolean;
        _canSort: boolean;
        _canAddNew: boolean;
        _canCancelEdit: boolean;
        _canRemove: boolean;
        _canChangePage: boolean;
        _trackChanges: boolean;
        _chgAdded: ObservableArray;
        _chgRemoved: ObservableArray;
        _chgEdited: ObservableArray;
        _srtCvt: Function;
        _srtCmp: Function;
        _getError: Function;
        static _collator: Intl.Collator;
        /**
         * Initializes a new instance of the @see:CollectionView class.
         *
         * @param sourceCollection Array that serves as a source for this
         * @see:CollectionView.
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(sourceCollection?: any, options?: any);
        _copy(key: string, value: any): boolean;
        /**
         * Gets or sets a function that creates new items for the collection.
         *
         * If the creator function is not supplied, the @see:CollectionView
         * will try to create an uninitialized item of the appropriate type.
         *
         * If the creator function is supplied, it should be a function that
         * takes no parameters and returns an initialized object of the proper
         * type for the collection.
         */
        newItemCreator: Function;
        /**
         * Gets or sets a function used to convert values when sorting.
         *
         * If provided, the function should take as parameters a
         * @see:SortDescription, a data item, and a value to convert,
         * and should return the converted value.
         *
         * This property provides a way to customize sorting. For example,
         * the @see:FlexGrid control uses it to sort mapped columns by
         * display value instead of by raw value.
         *
         * For example, the code below causes a @see:CollectionView to
         * sort the 'country' property, which contains country code integers,
         * using the corresponding country names:
         *
         * <pre>var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
         * collectionView.sortConverter = function (sd, item, value) {
         *   if (sd.property == 'countryMapped') {
         *     value = countries[value]; // convert country id into name
         *   }
         *   return value;
         * }</pre>
         */
        sortConverter: Function;
        /**
         * Gets or sets a function used to compare values when sorting.
         *
         * If provided, the sort comparer function should take as parameters
         * two values of any type, and should return -1, 0, or +1 to indicate
         * whether the first value is smaller than, equal to, or greater than
         * the second. If the sort comparer returns null, the standard built-in
         * comparer is used.
         *
         * This @see:sortComparer property allows you to use custom comparison
         * algorithms that in some cases result in sorting sequences that are
         * more consistent with user's expectations than plain string comparisons.
         *
         * For example, see
         * <a href="http://www.davekoelle.com/alphanum.html">Dave Koele's Alphanum algorithm</a>.
         * It breaks up strings into chunks composed of strings or numbers, then
         * sorts number chunks in value order and string chunks in ASCII order.
         * Dave calls the result a "natural sorting order".
         *
         * The example below shows a typical use for the @see:sortComparer property:
         * <pre>// create a CollectionView with a custom sort comparer
         * var dataCustomSort = new wijmo.collections.CollectionView(data, {
         *   sortComparer: function (a, b) {
         *     return wijmo.isString(a) && wijmo.isString(b)
         *       ? alphanum(a, b) // use custom comparer for strings
         *       : null; // use default comparer for everything else
         *   }
         * });</pre>
         *
         * The example below shows how you can use an
         * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator">Intl.Collator</a>
         * to control the sort order:
         * <pre>// create a CollectionView that uses an Intl.Collator to sort
         * var collator = window.Intl ? new Intl.Collator() : null;
         * var dataCollator = new wijmo.collections.CollectionView(data, {
         *   sortComparer: function (a, b) {
         *     return wijmo.isString(a) && wijmo.isString(b) && collator
         *       ? collator.compare(a, b) // use collator for strings
         *       : null; // use default comparer for everything else
         *   }
         * });</pre>
         */
        sortComparer: Function;
        /**
         * Gets or sets whether to use a stable sort algorithm.
         *
         * Stable sorting algorithms maintain the relative order of records with equal keys.
         * For example, consider a collection of objects with an "Amount" field.
         * If you sort the collection by "Amount", a stable sort will keep the original
         * order of records with the same Amount value.
         *
         * This property is set to false by default, which causes the @see:CollectionView
         * to use JavaScript's built-in sort method, which is very fast but not stable.
         * Setting the @see:useStableSort property to true increases sort times by 30% to
         * 50%, which can be significant for large collections.
         */
        useStableSort: boolean;
        /**
         * Gets or sets a value that determines whether null values should appear
         * first or last when the collection is sorted (regardless of sort direction).
         *
         * This property is set to false by default, which causes null values to appear
         * last on the sorted collection. This is  also the default behavior in Excel.
         */
        sortNullsFirst: boolean;
        /**
         * Calculates an aggregate value for the items in this collection.
         *
         * @param aggType Type of aggregate to calculate.
         * @param binding Property to aggregate on.
         * @param currentPage Whether to include only items on the current page.
         * @return The aggregate value.
         */
        getAggregate(aggType: Aggregate, binding: string, currentPage?: boolean): any;
        /**
         * Gets or sets a value that determines whether the control should
         * track changes to the data.
         *
         * If @see:trackChanges is set to true, the @see:CollectionView keeps
         * track of changes to the data and exposes them through the
         * @see:itemsAdded, @see:itemsRemoved, and @see:itemsEdited collections.
         *
         * Tracking changes is useful in situations where you need to update
         * the server after the user has confirmed that the modifications are
         * valid.
         *
         * After committing or cancelling changes, use the @see:clearChanges method
         * to clear the @see:itemsAdded, @see:itemsRemoved, and @see:itemsEdited
         * collections.
         *
         * The @see:CollectionView only tracks changes made when the proper
         * @see:CollectionView methods are used (@see:editItem/@see:commitEdit,
         * @see:addNew/@see:commitNew, and @see:remove).
         * Changes made directly to the data are not tracked.
         */
        trackChanges: boolean;
        /**
         * Gets an @see:ObservableArray containing the records that were added to
         * the collection since @see:trackChanges was enabled.
         */
        readonly itemsAdded: ObservableArray;
        /**
         * Gets an @see:ObservableArray containing the records that were removed from
         * the collection since @see:trackChanges was enabled.
         */
        readonly itemsRemoved: ObservableArray;
        /**
         * Gets an @see:ObservableArray containing the records that were edited in
         * the collection since @see:trackChanges was enabled.
         */
        readonly itemsEdited: ObservableArray;
        /**
         * Clears all changes by removing all items in the @see:itemsAdded,
         * @see:itemsRemoved, and @see:itemsEdited collections.
         *
         * Call this method after committing changes to the server or
         * after refreshing the data from the server.
         */
        clearChanges(): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
        /**
         * Gets or sets a callback that determines whether a specific property
         * of an item contains validation errors.
         *
         * If provided, the callback should take two parameters containing the
         * item and the property to validate, and should return a string describing
         * the error (or null if there are no errors).
         *
         * For example:
         *
         * <pre>var view = new wijmo.collections.CollectionView(data, {
         *     getError: function (item, property) {
         *         switch (property) {
         *             case 'country':
         *                 return countries.indexOf(item.country) &lt; 0
         *                     ? 'Invalid Country'
         *                     : null;
         *             case 'downloads':
         *             case 'sales':
         *             case 'expenses':
         *                 return item[property] &lt; 0
         *                     ? 'Cannot be negative!'
         *                     : null;
         *             case 'active':
         *                 return item.active && item.country.match(/US|UK/)
         *                     ? 'No active items allowed in the US or UK!'
         *                     : null;
         *         }
         *         return null;
         *     }
         * });</pre>
         */
        getError: Function;
        /**
         * Occurs when the collection changes.
         */
        readonly collectionChanged: Event;
        /**
         * Raises the @see:collectionChanged event.
         *
         * @param e Contains a description of the change.
         */
        onCollectionChanged(e?: NotifyCollectionChangedEventArgs): void;
        protected _raiseCollectionChanged(action?: NotifyCollectionChangedAction, item?: any, index?: number): void;
        protected _notifyItemChanged(item: any): void;
        /**
         * Occurs before the value of the @see:sourceCollection property changes.
         */
        readonly sourceCollectionChanging: Event;
        /**
         * Raises the @see:sourceCollectionChanging event.
         *
         * @param e @see:CancelEventArgs that contains the event data.
         */
        onSourceCollectionChanging(e: CancelEventArgs): boolean;
        /**
         * Occurs after the value of the @see:sourceCollection property changes.
         */
        readonly sourceCollectionChanged: Event;
        /**
         * Raises the @see:sourceCollectionChanged event.
         */
        onSourceCollectionChanged(e?: EventArgs): void;
        /**
         * Gets a value that indicates whether this view supports filtering via the
         * @see:filter property.
         */
        canFilter: boolean;
        /**
         * Gets a value that indicates whether this view supports grouping via the
         * @see:groupDescriptions property.
         */
        canGroup: boolean;
        /**
         * Gets a value that indicates whether this view supports sorting via the
         * @see:sortDescriptions property.
         */
        canSort: boolean;
        /**
         * Gets or sets the current item in the view.
         */
        currentItem: any;
        /**
         * Gets the ordinal position of the current item in the view.
         */
        currentPosition: number;
        /**
         * Gets or sets a callback used to determine if an item is suitable for
         * inclusion in the view.
         *
         * The callback function should return true if the item passed in as a
         * parameter should be included in the view.
         *
         * NOTE: If the filter function needs a scope (i.e. a meaningful 'this'
         * value) remember to set the filter using the 'bind' function to specify
         * the 'this' object. For example:
         * <pre>
         *   collectionView.filter = this._filter.bind(this);
         * </pre>
         */
        filter: IPredicate;
        /**
         * Gets a collection of @see:GroupDescription objects that describe how the
         * items in the collection are grouped in the view.
         */
        readonly groupDescriptions: ObservableArray;
        /**
         * Gets an array of @see:CollectionViewGroup objects that represents the
         * top-level groups.
         */
        readonly groups: CollectionViewGroup[];
        /**
         * Gets a value that indicates whether this view contains no items.
         */
        readonly isEmpty: boolean;
        /**
         * Gets an array of @see:SortDescription objects that describe how the items
         * in the collection are sorted in the view.
         */
        readonly sortDescriptions: ObservableArray;
        /**
         * Gets or sets the underlying (unfiltered and unsorted) collection.
         */
        sourceCollection: any;
        private _sourceChanged(s, e);
        /**
         * Returns a value indicating whether a given item belongs to this view.
         *
         * @param item Item to seek.
         */
        contains(item: any): boolean;
        /**
         * Sets the specified item to be the current item in the view.
         *
         * @param item Item that will become current.
         */
        moveCurrentTo(item: any): boolean;
        /**
         * Sets the first item in the view as the current item.
         */
        moveCurrentToFirst(): boolean;
        /**
         * Sets the last item in the view as the current item.
         */
        moveCurrentToLast(): boolean;
        /**
         * Sets the item before the current item in the view as the current item.
         */
        moveCurrentToPrevious(): boolean;
        /**
         * Sets the item after the current item in the view as the current item.
         */
        moveCurrentToNext(): boolean;
        /**
         * Sets the item at the specified index in the view as the current item.
         *
         * @param index Index of the item that will become current.
         */
        moveCurrentToPosition(index: number): boolean;
        /**
         * Re-creates the view using the current sort, filter, and group parameters.
         */
        refresh(): void;
        _performRefresh(): void;
        _performSort(items: any[]): void;
        _compareItems(): (a: any, b: any) => number;
        _performFilter(items: any[]): any[];
        /**
         * Occurs after the current item changes.
         */
        readonly currentChanged: Event;
        /**
         * Raises the @see:currentChanged event.
         */
        onCurrentChanged(e?: EventArgs): void;
        /**
         * Occurs before the current item changes.
         */
        readonly currentChanging: Event;
        /**
         * Raises the @see:currentChanging event.
         *
         * @param e @see:CancelEventArgs that contains the event data.
         */
        onCurrentChanging(e: CancelEventArgs): boolean;
        /**
         * Gets items in the view.
         */
        readonly items: any[];
        /**
         * Suspend refreshes until the next call to @see:endUpdate.
         */
        beginUpdate(): void;
        /**
         * Resume refreshes suspended by a call to @see:beginUpdate.
         */
        endUpdate(): void;
        /**
         * Gets a value that indicates whether notifications are currently suspended
         * (see @see:beginUpdate and @see:endUpdate).
         */
        readonly isUpdating: boolean;
        /**
         * Executes a function within a @see:beginUpdate/@see:endUpdate block.
         *
         * The collection will not be refreshed until the function finishes.
         * This method ensures @see:endUpdate is called even if the function throws
         * an exception.
         *
         * @param fn Function to be executed without updates.
         */
        deferUpdate(fn: Function): void;
        /**
         * Gets a value that indicates whether a new item can be added to the collection.
         */
        canAddNew: boolean;
        /**
         * Gets a value that indicates whether the collection view can discard pending changes
         * and restore the original values of an edited object.
         */
        canCancelEdit: boolean;
        /**
         * Gets a value that indicates whether items can be removed from the collection.
         */
        canRemove: boolean;
        /**
         * Gets the item that is being added during the current add transaction.
         */
        readonly currentAddItem: any;
        /**
         * Gets the item that is being edited during the current edit transaction.
         */
        readonly currentEditItem: any;
        /**
         * Gets a value that indicates whether an add transaction is in progress.
         */
        readonly isAddingNew: boolean;
        /**
         * Gets a value that indicates whether an edit transaction is in progress.
         */
        readonly isEditingItem: boolean;
        /**
         * Begins an edit transaction of the specified item.
         *
         * @param item Item to be edited.
         */
        editItem(item: any): void;
        /**
         * Ends the current edit transaction and saves the pending changes.
         */
        commitEdit(): void;
        /**
         * Ends the current edit transaction and, if possible,
         * restores the original value to the item.
         */
        cancelEdit(): void;
        /**
         * Creates a new item and adds it to the collection.
         *
         * This method takes no parameters. It creates a new item, adds it to the
         * collection, and defers refresh operations until the new item is
         * committed using the @see:commitNew method or canceled using the
         * @see:cancelNew method.
         *
         * The code below shows how the @see:addNew method is typically used:
         *
         * <pre>
         * // create the new item, add it to the collection
         * var newItem = view.addNew();
         * // initialize the new item
         * newItem.id = getFreshId();
         * newItem.name = 'New Customer';
         * // commit the new item so the view can be refreshed
         * view.commitNew();
         * </pre>
         *
         * You can also add new items by pushing them into the @see:sourceCollection
         * and then calling the @see:refresh method. The main advantage of @see:addNew
         * is in user-interactive scenarios (like adding new items in a data grid),
         * because it gives users the ability to cancel the add operation. It also
         * prevents the new item from being sorted or filtered out of view until the
         * add operation is committed.
         *
         * @return The item that was added to the collection.
         */
        addNew(): any;
        /**
         * Ends the current add transaction and saves the pending new item.
         */
        commitNew(): void;
        /**
         * Ends the current add transaction and discards the pending new item.
         */
        cancelNew(): void;
        /**
         * Removes the specified item from the collection.
         *
         * @param item Item to be removed from the collection.
         */
        remove(item: any): void;
        /**
         * Removes the item at the specified index from the collection.
         *
         * @param index Index of the item to be removed from the collection.
         * The index is relative to the view, not to the source collection.
         */
        removeAt(index: number): void;
        _trackItemChanged(item: any): void;
        _extend(dst: any, src: any): void;
        _sameContent(dst: any, src: any): boolean;
        _sameValue(v1: any, v2: any): boolean;
        /**
         * Gets a value that indicates whether the @see:pageIndex value can change.
         */
        canChangePage: boolean;
        /**
         * Gets a value that indicates whether the page index is changing.
         */
        readonly isPageChanging: boolean;
        /**
         * Gets the total number of items in the view taking paging into account.
         */
        readonly itemCount: number;
        /**
         * Gets the zero-based index of the current page.
         */
        readonly pageIndex: number;
        /**
         * Gets or sets the number of items to display on each page.
         */
        pageSize: number;
        /**
         * Gets the total number of items in the view before paging is applied.
         */
        readonly totalItemCount: number;
        /**
         * Gets the total number of pages.
         */
        readonly pageCount: number;
        /**
         * Sets the first page as the current page.
         *
         * @return True if the page index was changed successfully.
         */
        moveToFirstPage(): boolean;
        /**
         * Sets the last page as the current page.
         *
         * @return True if the page index was changed successfully.
         */
        moveToLastPage(): boolean;
        /**
         * Moves to the page before the current page.
         *
         * @return True if the page index was changed successfully.
         */
        moveToPreviousPage(): boolean;
        /**
         * Moves to the page after the current page.
         *
         * @return True if the page index was changed successfully.
         */
        moveToNextPage(): boolean;
        /**
         * Moves to the page at the specified index.
         *
         * @param index Index of the page to move to.
         * @return True if the page index was changed successfully.
         */
        moveToPage(index: number): boolean;
        /**
        * Occurs after the page index changes.
        */
        readonly pageChanged: Event;
        /**
         * Raises the @see:pageChanged event.
         */
        onPageChanged(e?: EventArgs): void;
        /**
         * Occurs before the page index changes.
         */
        readonly pageChanging: Event;
        /**
         * Raises the @see:pageChanging event.
         *
         * @param e @see:PageChangingEventArgs that contains the event data.
         */
        onPageChanging(e: PageChangingEventArgs): boolean;
        _getFullGroup(g: CollectionViewGroup): CollectionViewGroup;
        _getGroupByPath(groups: CollectionViewGroup[], level: number, path: string): CollectionViewGroup;
        _getPageView(): any[];
        _createGroups(items: any[]): CollectionViewGroup[];
        private _getGroupsDigest(groups);
        private _mergeGroupItems(groups);
        private _getGroup(gd, groups, map, name, level, isBottomLevel);
    }
    /**
     * Represents a group created by a @see:CollectionView object based on
     * its @see:CollectionView.groupDescriptions property.
     */
    class CollectionViewGroup {
        _gd: GroupDescription;
        _name: string;
        _path: string;
        _level: number;
        _isBottomLevel: boolean;
        _groups: CollectionViewGroup[];
        _items: any[];
        /**
         * Initializes a new instance of the @see:CollectionViewGroup class.
         *
         * @param groupDescription @see:GroupDescription that owns the new group.
         * @param name Name of the new group.
         * @param level Level of the new group.
         * @param isBottomLevel Whether this group has any subgroups.
         */
        constructor(groupDescription: GroupDescription, name: string, level: number, isBottomLevel: boolean);
        readonly name: string;
        readonly level: number;
        readonly isBottomLevel: boolean;
        readonly items: any[];
        readonly groups: CollectionViewGroup[];
        readonly groupDescription: GroupDescription;
        /**
         * Calculates an aggregate value for the items in this group.
         *
         * @param aggType Type of aggregate to calculate.
         * @param binding Property to aggregate on.
         * @param view CollectionView that owns this group.
         * @return The aggregate value.
         */
        getAggregate(aggType: Aggregate, binding: string, view?: ICollectionView): any;
    }
}

declare module wijmo {
    /**
     * Provides a pop-up window that displays additional information about
     * elements on the page.
     *
     * The @see:Tooltip class can be used in two modes:
     *
     * <b>Automatic Mode:</b> Use the @see:setTooltip method to connect
     * the @see:Tooltip to one or more elements on the page. The @see:Tooltip
     * will automatically monitor events and display the tooltips when the
     * user performs actions that trigger the tooltip.
     * For example:
     *
     * <pre>var tt = new wijmo.Tooltip();
     * tt.setTooltip('#menu', 'Select commands.');
     * tt.setTooltip('#tree', 'Explore the hierarchy.');
     * tt.setTooltip('#chart', '#idChartTooltip');</pre>
     *
     * <b>Manual Mode:</b> The caller is responsible for showing and hiding
     * the tooltip using the @see:show and @see:hide methods. For example:
     *
     * <pre>var tt = new wijmo.Tooltip();
     * element.addEventListener('click', function () {
     *   if (tt.isVisible) {
     *     tt.hide();
     *   } else {
     *     tt.show(element, 'This is an important element!');
     *   }
     * });</pre>
     *
     * The example below shows how you can use the @see:Tooltip class
     * to add Excel-style notes to cells in a @see:FlexGrid control:
     *
     * @fiddle:2d0jhd6r
     */
    class Tooltip {
        static _eTip: HTMLElement;
        private _toShow;
        private _toHide;
        private _showAutoTipBnd;
        private _hideAutoTipBnd;
        private _html;
        private _cssClass;
        private _gap;
        private _showAtMouse;
        private _showDelay;
        private _hideDelay;
        private _tips;
        /**
         * Initializes a new instance of the @see:Tooltip class.
         *
         * @param options JavaScript object containing initialization data for the @see:Tooltip.
         */
        constructor(options?: any);
        /**
         * Assigns tooltip content to a given element on the page.
         *
         * The same tooltip may be used to display information for any number
         * of elements on the page. To remove the tooltip from an element,
         * call @see:setTooltip and specify null for the content.
         *
         * To remove the tooltips for all elements, call the @see:dispose method.
         *
         * @param element Element, element ID, or control that the tooltip explains.
         * @param content Tooltip content or ID of the element that contains the tooltip content.
         */
        setTooltip(element: any, content: string): void;
        /**
         * Gets the tooltip content associated with a given element.
         *
         * @param element Element, element ID, or control that the tooltip explains.
         * @return Tooltip content associated with the given element.
         */
        getTooltip(element: any): string;
        /**
         * Shows the tooltip with the specified content, next to the specified element.
         *
         * @param element Element, element ID, or control that the tooltip explains.
         * @param content Tooltip content or ID of the element that contains the tooltip content.
         * @param bounds Optional element that defines the bounds of the area that the tooltip
         * targets. If not provided, the bounds of the element are used (as reported by the
         * <b>getBoundingClientRect</b> method).
         */
        show(element: any, content: string, bounds?: Rect): void;
        /**
         * Hides the tooltip if it is currently visible.
         */
        hide(): void;
        /**
         * Removes all tooltips associated with this @see:Tooltip instance.
         */
        dispose(): void;
        /**
         * Gets a value that determines whether the tooltip is currently visible.
         */
        readonly isVisible: boolean;
        /**
         * Gets or sets a value that determines whether the tooltip contents
         * should be displayed as plain text or as HTML.
         *
         * The default value for the property is <b>true</b>.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a CSS class name to use when showing the tooltip.
         */
        cssClass: string;
        /**
         * Gets or sets the distance between the tooltip and the target element.
         *
         * The default value for the property is <b>6</b> pixels.
         */
        gap: number;
        /**
         * Gets or sets a value that determines whether the tooltip should be
         * positioned with respect to the mouse position rather than the
         * target element.
         *
         * The default value for the property is <b>false</b>.
         */
        showAtMouse: boolean;
        /**
         * Gets or sets the delay, in milliseconds, before showing the tooltip
         * after the mouse enters the target element.
         *
         * The default value for the property is <b>500</b> milliseconds.
         */
        showDelay: number;
        /**
         * Gets or sets the delay, in milliseconds, before hiding the tooltip
         * if the mouse remains over the element.
         *
         * The default value for the property is <b>zero</b> milliseconds,
         * which causes the tip to remain visible until the mouse moves
         * away from the element.
         */
        hideDelay: number;
        /**
         * Occurs before the tooltip content is displayed.
         *
         * The event handler may customize the tooltip content or suppress
         * the tooltip display by changing the event parameters.
         */
        readonly popup: Event;
        /**
         * Raises the @see:popup event.
         *
         * @param e @see:TooltipEventArgs that contains the event data.
         */
        onPopup(e: TooltipEventArgs): boolean;
        private _indexOf(e);
        private _attach(e);
        private _detach(e);
        private _showAutoTip(e);
        private _hideAutoTip(e);
        private _clearTimeouts();
        private _getContent(content);
        private _setContent(content);
    }
    /**
     * Provides arguments for the @see:Tooltip.popup event.
     */
    class TooltipEventArgs extends CancelEventArgs {
        private _content;
        private _e;
        /**
         * Initializes a new instance of the @see:TooltipEventArgs class.
         *
         * @param content String to show in the tooltip.
         * @param element HTMLElement that the tip refers to.
         */
        constructor(content: string, element?: HTMLElement);
        /**
         * Gets a reference to the tooltip element.
         */
        readonly tip: HTMLElement;
        /**
         * Gets a reference to the element that the tooltip refers to.
         */
        readonly element: HTMLElement;
        /**
         * Gets or sets the content to show in the tooltip.
         *
         * This parameter can be used while handling the @see:Tooltip.popup
         * event to modify the content of the tooltip.
         */
        content: string;
    }
}

declare module wijmo {
    /**
     * Represents a color.
     *
     * The @see:Color class parses colors specified as CSS strings and exposes
     * their red, green, blue, and alpha channels as read-write properties.
     *
     * The @see:Color class also provides @see:fromHsb and @see:fromHsl methods
     * for creating colors using the HSB and HSL color models instead of RGB,
     * as well as @see:getHsb and @see:getHsl methods for retrieving the color
     * components using those color models.
     *
     * Finally, the @see:Color class provides an @see:interpolate method that
     * creates colors by interpolating between two colors using the HSL model.
     * This method is especially useful for creating color animations with the
     * @see:animate method.
     *
     * The example below shows how this works:
     *
     * @fiddle:xjo09z48
     */
    class Color {
        _r: number;
        _g: number;
        _b: number;
        _a: number;
        /**
         * Initializes a new @see:Color from a CSS color specification.
         *
         * @param color CSS color specification.
         */
        constructor(color: string);
        /**
         * Gets or sets the red component of this @see:Color,
         * in a range from 0 to 255.
         */
        r: number;
        /**
         * Gets or sets the green component of this @see:Color,
         * in a range from 0 to 255.
         */
        g: number;
        /**
         * Gets or sets the blue component of this @see:Color,
         * in a range from 0 to 255.
         */
        b: number;
        /**
         * Gets or sets the alpha component of this @see:Color,
         * in a range from 0 to 1 (zero is transparent, one is solid).
         */
        a: number;
        /**
         * Returns true if a @see:Color has the same value as this @see:Color.
         *
         * @param clr @see:Color to compare to this @see:Color.
         */
        equals(clr: Color): boolean;
        /**
         * Gets a string representation of this @see:Color.
         */
        toString(): string;
        /**
         * Creates a new @see:Color using the specified RGBA color channel values.
         *
         * @param r Value for the red channel, from 0 to 255.
         * @param g Value for the green channel, from 0 to 255.
         * @param b Value for the blue channel, from 0 to 255.
         * @param a Value for the alpha channel, from 0 to 1.
         */
        static fromRgba(r: number, g: number, b: number, a?: number): Color;
        /**
         * Creates a new @see:Color using the specified HSB values.
         *
         * @param h Hue value, from 0 to 1.
         * @param s Saturation value, from 0 to 1.
         * @param b Brightness value, from 0 to 1.
         * @param a Alpha value, from 0 to 1.
         */
        static fromHsb(h: number, s: number, b: number, a?: number): Color;
        /**
         * Creates a new @see:Color using the specified HSL values.
         *
         * @param h Hue value, from 0 to 1.
         * @param s Saturation value, from 0 to 1.
         * @param l Lightness value, from 0 to 1.
         * @param a Alpha value, from 0 to 1.
         */
        static fromHsl(h: number, s: number, l: number, a?: number): Color;
        /**
         * Creates a new @see:Color from a CSS color string.
         *
         * @param value String containing a CSS color specification.
         * @return A new @see:Color, or null if the string cannot be parsed into a color.
         */
        static fromString(value: string): Color;
        /**
         * Gets an array with this color's HSB components.
         */
        getHsb(): number[];
        /**
         * Gets an array with this color's HSL components.
         */
        getHsl(): number[];
        /**
         * Creates a @see:Color by interpolating between two colors.
         *
         * @param c1 First color.
         * @param c2 Second color.
         * @param pct Value between zero and one that determines how close the
         * interpolation should be to the second color.
         */
        static interpolate(c1: Color, c2: Color, pct: number): Color;
        /**
         * Gets the closest opaque color to a given color.
         *
         * @param c @see:Color to be converted to an opaque color
         * (the color may also be specified as a string).
         * @param bkg Background color to use when removing the transparency
         * (defaults to white).
         */
        static toOpaque(c: any, bkg?: any): Color;
        _parse(c: string): boolean;
        /**
         * Converts an HSL color value to RGB.
         *
         * @param h The hue (between zero and one).
         * @param s The saturation (between zero and one).
         * @param l The lightness (between zero and one).
         * @return An array containing the R, G, and B values (between zero and 255).
         */
        static _hslToRgb(h: number, s: number, l: number): number[];
        static _hue2rgb(p: number, q: number, t: number): number;
        /**
         * Converts an RGB color value to HSL.
         *
         * @param r The value of the red channel (between zero and 255).
         * @param g The value of the green channel (between zero and 255).
         * @param b The value of the blue channel (between zero and 255).
         * @return An array containing the H, S, and L values (between zero and one).
         */
        static _rgbToHsl(r: number, g: number, b: number): number[];
        /**
         * Converts an RGB color value to HSB.
         *
         * @param r The value of the red channel (between zero and 255).
         * @param g The value of the green channel (between zero and 255).
         * @param b The value of the blue channel (between zero and 255).
         * @return An array containing the H, S, and B values (between zero and one).
         */
        static _rgbToHsb(r: number, g: number, b: number): number[];
        /**
         * Converts an HSB color value to RGB.
         *
         * @param h The hue (between zero and one).
         * @param s The saturation (between zero and one).
         * @param b The brightness (between zero and one).
         * @return An array containing the R, G, and B values (between zero and 255).
         */
        static _hsbToRgb(h: number, s: number, b: number): number[];
        /**
         * Converts an HSB color value to HSL.
         *
         * @param h The hue (between zero and one).
         * @param s The saturation (between zero and one).
         * @param b The brightness (between zero and one).
         * @return An array containing the H, S, and L values (between zero and one).
         */
        static _hsbToHsl(h: number, s: number, b: number): number[];
        /**
         * Converts an HSL color value to HSB.
         *
         * @param h The hue (between zero and one).
         * @param s The saturation (between zero and one).
         * @param l The lightness (between zero and one).
         * @return An array containing the H, S, and B values (between zero and one).
         */
        static _hslToHsb(h: number, s: number, l: number): number[];
    }
}

declare module wijmo {
    /**
     * Static class that provides utility methods for clipboard operations.
     *
     * The @see:Clipboard class provides static @see:copy and @see:paste methods
     * that can be used by controls to customize the clipboard content during
     * clipboard operations.
     *
     * For example, the code below shows how a control could intercept the
     * clipboard shortcut keys and provide custom clipboard handling:
     *
     * <pre>
     * rootElement.addEventListener('keydown', function(e) {
     *   // copy: ctrl+c or ctrl+Insert
     *   if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 45)) {
     *     var text = this.getClipString();
     *     Clipboard.copy(text);
     *     return;
     *   }
     *   // paste: ctrl+v or shift+Insert
     *   if ((e.ctrlKey && e.keyCode == 86) || (e.shiftKey && e.keyCode == 45)) {
     *     Clipboard.paste(function (text) {
     *       this.setClipString(text);
     *     });
     *     return;
     *   }
     * });</pre>
     *
     * The example below shows how you can customize the behavior of the clipboard
     * paste command when the target is a @see:FlexGrid control:
     *
     * @fiddle:64vr06dd
     */
    class Clipboard {
        /**
         * Copies a string to the clipboard.
         *
         * This method only works if invoked immediately after the user
         * pressed a clipboard copy command (such as ctrl+c).
         *
         * @param text Text to copy to the clipboard.
         */
        static copy(text: string): void;
        /**
         * Gets a string from the clipboard.
         *
         * This method only works if invoked immediately after the user
         * pressed a clipboard paste command (such as ctrl+v).
         *
         * @param callback Function called when the clipboard content
         * has been retrieved. The function receives the clipboard
         * content as a parameter.
         */
        static paste(callback: Function): void;
        private static _copyPaste(copyText, pasteCallback);
    }
}

declare module wijmo {
    /**
     * Shows an element as a popup.
     *
     * The popup element becomes a child of the body element,
     * and is positioned above or below a reference rectangle,
     * depending on how much room is available.
     *
     * The reference rectangle may be specified as one of the following:
     *
     * <dl class="dl-horizontal">
     *   <dt>HTMLElement</dt>
     *   <dd>The bounding rectangle of the element.</dd>
     *   <dt>MouseEvent</dt>
     *   <dd>The bounding rectangle of the event's target element.</dd>
     *   <dt>Rect</dt>
     *   <dd>The given rectangle.</dd>
     *   <dt>null</dt>
     *   <dd>No reference rectangle; the popup is centered on the window.</dd>
     * </dl>
     *
     * Call the @see:hidePopup method to hide the popup.
     *
     * @param popup Element to show as a popup.
     * @param ref Reference element or rectangle used to position the popup.
     * @param above Position popup above the reference rectangle if possible.
     * @param fadeIn Use a fade-in animation to make the popup appear gradually.
     * @param copyStyles Whether to copy font and color styles from the reference element, or an element to use as the style source.
     * @return An interval id that you can use to suspend the fade-in animation.
     */
    function showPopup(popup: HTMLElement, ref?: any, above?: boolean, fadeIn?: boolean, copyStyles?: any): any;
    /**
     * Hides a popup element previously displayed with the @see:showPopup
     * method.
     *
     * @param popup Popup element to hide.
     * @param remove Whether to remove the popup from the DOM or just to hide it.
     * This parameter may be a boolean or a callback function that gets invoked
     * after the popup has been removed from the DOM.
     * @param fadeOut Whether to use a fade-out animation to make the popup disappear gradually.
     * @return An interval id that you can use to suspend the fade-out animation.
     */
    function hidePopup(popup: HTMLElement, remove?: any, fadeOut?: boolean): any;
}

declare module wijmo {
    /**
     * Class that enables the creation of custom documents for printing.
     *
     * The @see:PrintDocument class makes it easy to create documents for printing or
     * exporting to PDF. Most browsers allow you to select the paper size, orientation,
     * margins, and whether to include page headers and footers.
     *
     * To use, instantiate a @see:PrintDocument, add content using the @see:append
     * method, and finish by calling the @see:print method.
     *
     * For example:
     * <pre>// create the document
     * var doc = new wijmo.PrintDocument({
     *   title: 'PrintDocument Test'
     * });
     * // add some simple text
     * doc.append('&lt;h1&gt;Printing Example&lt;/h1&gt;');
     * doc.append('&lt;p&gt;This document was created using the &lt;b&gt;PrintDocument&lt;/b&gt; class.&lt;/p&gt;');
     * // add some existing elements
     * doc.append(document.getElementById('gaugeControl'));
     * // print the document (or export it to PDF)
     * doc.print();</pre>
     *
     * The example below shows how you can create a printer-friendly version of
     * a document which can be printed or exported to PDF and other formats
     * directly from the browser:
     *
     * @fiddle:c75xjs11
     */
    class PrintDocument {
        _iframe: HTMLIFrameElement;
        _title: string;
        _css: string[];
        _copyCss: boolean;
        /**
         * Initializes a new instance of the @see:PrintDocument class.
         *
         * @param options JavaScript object containing initialization data for the @see:PrintDocument.
         */
        constructor(options?: any);
        /**
         * Gets or sets the document title.
         *
         * Setting this property to null causes the @see:PrintDocument
         * to use the title from the current document.
         */
        title: string;
        /**
         * Gets or sets a value that determines whether the @see:PrintDocument
         * should include the CSS style sheets defined in the main document.
         *
         * The default value for the property is <b>true</b>.
         */
        copyCss: boolean;
        /**
         * Adds a CSS style sheet to the document.
         *
         * @param href URL of the CSS file that should be added to the document.
         */
        addCSS(href: string): void;
        /**
         * Appends an HTML element or string to the document.
         *
         * @param child HTML element or string to append to the document.
         */
        append(child: any): void;
        /**
         * Prints the document.
         */
        print(): void;
        _cloneNode(child: Node): Node;
        _getDocument(): Document;
        _close(): void;
        _addStyle(style: string): void;
    }
}

declare module wijmo {
    /**
     * Class that provides masking services to an HTMLInputElement.
     */
    class _MaskProvider {
        _tbx: HTMLInputElement;
        _msk: string;
        _promptChar: string;
        _mskArr: _MaskElement[];
        _firstPos: number;
        _lastPos: number;
        _backSpace: boolean;
        _composing: boolean;
        _full: boolean;
        _matchEnd: number;
        _autoComplete: string;
        _spellCheck: boolean;
        _hbInput: any;
        _hbKeyDown: any;
        _hbKeyPress: any;
        _hbCompositionStart: any;
        _hbCompositionEnd: any;
        _evtInput: any;
        static _X_DBCS_BIG_HIRA: string;
        static _X_DBCS_BIG_KATA: string;
        static _X_SBCS_BIG_KATA: string;
        /**
         * Initializes a new instance of the @see:_MaskProvider class.
         *
         * @param input Input element to be masked.
         * @param mask Input mask.
         * @param promptChar Character used to indicate input positions.
         */
        constructor(input: HTMLInputElement, mask?: any, promptChar?: string);
        /**
         * Gets or sets the Input element to be masked.
         */
        input: HTMLInputElement;
        /**
         * Gets or sets the input mask used to validate input.
         */
        mask: string;
        /**
         * Gets or sets the input mask used to validate input.
         */
        promptChar: string;
        /**
         * Gets a value that indicates whether the mask has been completely filled.
         */
        readonly maskFull: boolean;
        /**
         * Gets an array with the position of the first and last wildcard characters in the mask.
         */
        getMaskRange(): number[];
        /**
         * Gets the raw value of the editor, excluding prompts and literals.
         */
        getRawValue(): string;
        /**
         * Updates the control mask and content.
         */
        refresh(): void;
        _input(e: any): void;
        _keydown(e: KeyboardEvent): void;
        _keypress(e: KeyboardEvent): void;
        _compositionstart(e: KeyboardEvent): void;
        _compositionend(e: KeyboardEvent): void;
        _preventKey(charCode: number): boolean;
        _connect(connect: boolean): void;
        _valueChanged(): boolean;
        _applyMask(): string;
        _handleVagueLiterals(text: string): string;
        _isCharValid(mask: string, c: string): boolean;
        _validatePosition(start: number): void;
        _parseMask(): void;
    }
    /**
     * Class that contains information about a position in an input mask.
     */
    class _MaskElement {
        wildCard: string;
        charCase: string;
        literal: string;
        vague: boolean;
        /**
         * Initializes a new instance of the @see:_MaskElement class.
         *
         * @param wildcardOrLiteral Wildcard or literal character
         * @param charCase Whether to convert wildcard matches to upper or lowercase.
         */
        constructor(wildcardOrLiteral: string, charCase?: string);
    }
}

declare module wijmo {
    /**
     * Class that provides repeat-clicking on behalf of an HTMLElement
     * (typically a button).
     */
    class _ClickRepeater {
        private static _stopEvents;
        private _e;
        private _disabled;
        private _isDown;
        private _toDelay;
        private _toRepeat;
        private _mousedownBnd;
        private _mouseupBnd;
        private _clickBnd;
        /**
         * Initializes a new instance of the @see:_ClickRepeater class.
         *
         * @param element Element that will raise click events while the mouse is down.
         */
        constructor(element: HTMLElement);
        /**
         * Gets or sets the element that will raise click events while the mouse is down.
         */
        element: HTMLElement;
        /**
         * Gets or sets a value that determines whether this repeater is disabled.
         */
        disabled: boolean;
        _connect(connect: boolean): void;
        _clearTimeouts(): void;
        _mousedown(e: MouseEvent): void;
        _mouseup(e: MouseEvent): void;
        _click(): void;
    }
}

declare module wijmo {
    function isMobile(): boolean;
    function isFirefox(): boolean;
    function isSafari(): boolean;
    function isEdge(): boolean;
    function isIE(): boolean;
    function isIE9(): boolean;
    function isIE10(): boolean;
    function getEventOptions(capture: boolean, passive: boolean): any;
    function supportsFocusOptions(): boolean;
    function _startDrag(dataTransfer: any, effectAllowed: string): void;
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Provides classes that support the OData protocol, including the
 * @see:ODataCollectionView class.
 *
 * OData is a standardized protocol for creating and consuming data APIs.
 * OData builds on core protocols like HTTP and commonly accepted
 * methodologies like REST.
 * The result is a uniform way to expose full-featured data APIs.
 * (http://www.odata.org/)
 */
declare module wijmo.odata {
    /**
     * Extends the @see:CollectionView class to support loading and
     * saving data to and from OData sources.
     *
     * You can use the @see:ODataCollectionView class to load data from
     * OData services and use it as a data source for any Wijmo controls.
     *
     * In addition to full CRUD support you get all the @see:CollectionView
     * features including sorting, filtering, paging, and grouping.
     * The sorting, filtering, and paging functions may be performed on the
     * server or on the client.
     *
     * The code below shows how you can instantiate an @see:ODataCollectionView
     * that selects some fields from the data source and provides sorting on the
     * client.
     * Notice how the 'options' parameter is used to pass in initialization
     * data, which is the same approach used when initializing controls:
     *
     * <pre>var url = 'http://services.odata.org/Northwind/Northwind.svc';
     * var categories = new wijmo.odata.ODataCollectionView(url, 'Categories', {
     *   fields: ['CategoryID', 'CategoryName', 'Description'],
     *   sortOnServer: false
     * });</pre>
     *
     * The example below uses an @see:ODataCollectionView to load data from
     * a NorthWind OData provider service, and shows the result in a
     * @see:FlexGrid control:
     *
     * @fiddle:r5a21ysm
     */
    class ODataCollectionView extends collections.CollectionView {
        _url: string;
        _tbl: string;
        _count: number;
        _fields: string[];
        _keys: string[];
        _expand: string;
        _dataTypes: any;
        _sortOnServer: boolean;
        _pageOnServer: boolean;
        _filterOnServer: boolean;
        _showDatesAsGmt: boolean;
        _inferDataTypes: boolean;
        _dataTypesInferred: any;
        _reviverBnd: any;
        _jsonReviver: Function;
        _filterDef: string;
        _toGetData: any;
        _loading: boolean;
        _requestHeaders: any;
        _odv: number;
        static _odvCache: {};
        static _rxDate: RegExp;
        /**
         * Initializes a new instance of the @see:ODataCollectionView class.
         *
         * @param url Url of the OData service (for example
         * 'http://services.odata.org/Northwind/Northwind.svc').
         * @param tableName Name of the table (entity) to retrieve from the service.
         * If not provided, a list of the tables (entities) available is retrieved.
         * @param options JavaScript object containing initialization data (property
         * values and event handlers) for the @see:ODataCollectionView.
         */
        constructor(url: string, tableName: string, options?: any);
        /**
         * Gets the name of the table (entity) that this collection is bound to.
         */
        readonly tableName: string;
        /**
         * Gets or sets an array containing the names of the fields to retrieve from
         * the data source.
         *
         * If this property is set to null or to an empty array, all fields are
         * retrieved.
         *
         * For example, the code below creates an @see:ODataCollectionView that
         * gets only three fields from the 'Categories' table in the database:
         *
         * <pre>var categories = new wijmo.data.ODataCollectionView(url, 'Categories', {
         *   fields: ['CategoryID', 'CategoryName', 'Description']
         * });</pre>
         */
        fields: string[];
        /**
         * Gets or sets an object containing request headers to be used when sending
         * or requesting data.
         *
         * The most typical use for this property is in scenarios where authentication
         * is required. For example:
         *
         * <pre>var categories = new wijmo.odata.ODataCollectionView(serviceUrl, 'Categories', {
         *   fields: ['Category_ID', 'Category_Name'],
         *   requestHeaders: { Authorization: db.token }
         * });</pre>
         */
        requestHeaders: any;
        /**
         * Gets or sets an array containing the names of the key fields.
         *
         * Key fields are required for update operations (add/remove/delete).
         */
        keys: string[];
        /**
         * Gets or sets a string that specifies whether related entities should
         * be included in the return data.
         *
         * This property maps directly to OData's $expand option.
         *
         * For example, the code below retrieves all the customers and their
         * orders from the database. Each customer entity has an "Orders"
         * field that contains an array of order objects:
         *
         * <pre>var url = 'http://services.odata.org/Northwind/Northwind.svc';
         * var customersOrders = new wijmo.odata.ODataCollectionView(url, 'Customers', {
         *   expand: 'Orders'
         * });</pre>
         */
        expand: string;
        /**
         * Gets or sets a custom reviver function to use when parsing JSON
         * values returned from the server.
         *
         * If provided, the function must take two parameters (key and value),
         * and must return the parsed value (which can be the same as the
         * original value).
         *
         * For details about reviver functions, please refer to the documentation
         * for the
         * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse" target="_blank">JSON.parse method</a>.
         */
        jsonReviver: Function;
        /**
         * Gets or sets a JavaScript object to be used as a map for coercing data types
         * when loading the data.
         *
         * The object keys represent the field names and the values are @see:DataType values
         * that indicate how the data should be coerced.
         *
         * For example, the code below creates an @see:ODataCollectionView and specifies
         * that 'Freight' values, which are stored as strings in the database, should be
         * converted into numbers; and that three date fields should be converted into dates:
         *
         * <pre>var orders = new wijmo.data.ODataCollectionView(url, 'Orders', {
         *   dataTypes: {
         *     Freight: wijmo.DataType.Number
         *     OrderDate: wijmo.DataType.Date,
         *     RequiredDate: wijmo.DataType.Date,
         *     ShippedDate: wijmo.DataType.Date,
         *   }
         * });</pre>
         *
         * This property is useful when the database contains data stored in
         * formats that do not conform to common usage.
         *
         * In most cases you don't have to provide information about the
         * data types, because the @see:inferDataTypes property handles
         * the conversion of Date values automatically.
         *
         * If you do provide explicit type information, the @see:inferDataTypes
         * property is not applied. Because of this, any data type information
         * that is provided should be complete, including all fields of type
         * Date.
         */
        dataTypes: any;
        /**
         * Gets or sets a value that determines whether fields that contain
         * strings that look like standard date representations should be
         * converted to dates automatically.
         *
         * This property is set to true by default, because the @see:ODataCollectionView
         * class uses JSON and that format does not support Date objects.
         *
         * This property has no effect if specific type information is provided using
         * the @see:dataTypes property.
         */
        inferDataTypes: boolean;
        /**
         * Gets or sets a value that determines whether dates should be adjusted
         * to look like GMT rather than local dates.
         */
        showDatesAsGmt: boolean;
        /**
         * Gets or sets a value that determines whether sort operations
         * should be performed on the server or on the client.
         *
         * Use the @see:sortDescriptions property to specify how the
         * data should be sorted.
         *
         * The default value for this property is <b>true</b>.
         */
        sortOnServer: boolean;
        /**
         * Gets or sets a value that determines whether paging should be
         * performed on the server or on the client.
         *
         * Use the @see:pageSize property to enable paging.
         *
         * The default value for this property is <b>true</b>.
         */
        pageOnServer: boolean;
        /**
         * Gets or sets a value that determines whether filtering should be
         * performed on the server or on the client.
         *
         * Use the @see:filter property to perform filtering on the client,
         * and use the  @see:filterDefinition property to perform filtering
         * on the server.
         *
         * In some cases it may be desirable to apply independent filters
         * on the client <b>and</b> on the server.
         *
         * You can achieve this by setting (1) the @see:filterOnServer property
         * to false and the @see:filter property to a filter function (to enable
         * client-side filtering) and (2) the @see:filterDefinition property to
         * a filter string (to enable server-side filtering).
         *
         * The default value for this property is <b>true</b>.
         */
        filterOnServer: boolean;
        /**
         * Gets or sets a string containing an OData filter specification to
         * be used for filtering the data on the server.
         *
         * The filter definition syntax is described in the
         * <a href="http://www.odata.org/documentation/odata-version-2-0/uri-conventions/">OData documentation</a>.
         *
         * For example, the code below causes the server to return records
         * where the 'CompanyName' field starts with 'A' and ends with 'S':
         *
         * <pre>view.filterDefinition = "startswith(CompanyName, 'A') and endswith(CompanyName, 'B')";</pre>
         *
         * Filter definitions can be generated automatically. For example, the
         * @see:FlexGridFilter component detects whether its data source is an
         * @see:ODataCollectionView and automatically updates both the
         * @see:ODataCollectionView.filter and @see:ODataCollectionView.filterDefinition
         * properties.
         *
         * Note that the @see:ODataCollectionView.filterDefinition property is applied
         * even if the @see:ODataCollectionView.filterOnServer property is set to false.
         * This allows you to apply server and client filters to the same collection,
         * which can be useful in many scenarios.
         *
         * For example, the code below uses the @see:ODataCollectionView.filterDefinition
         * property to filter on the server and the @see:ODataCollectionView.filter
         * property to further filter on the client. The collection will show items with
         * names that start with 'C' and have unit prices greater than 20:
         *
         * <pre>var url = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
         * var data = new wijmo.odata.ODataCollectionView(url, 'Products', {
         *   oDataVersion: 4,
         *   filterDefinition: 'startswith(ProductName, \'C\')', // server filter
         *   filterOnServer: false, // client filter
         *   filter: function(product) {
         *     return product.UnitPrice &gt; 20;
         *   },
         * });</pre>
         */
        filterDefinition: string;
        /**
         * Updates the filter definition based on a known filter provider such as the
         * @see:FlexGridFilter.
         *
         * @param filterProvider Known filter provider, typically an instance of a
         * @see:FlexGridFilter.
         */
        updateFilterDefinition(filterProvider: any): void;
        /**
         * Gets or sets the OData version used by the server.
         *
         * There are currently four versions of OData services, 1.0 through 4.0.
         * Version 4.0 is used by the latest services, but there are many legacy
         * services still in operation.
         *
         * If you know what version of OData your service implements, set the
         * @see:oDataVersion property to the appropriate value (1 through 4) when
         * creating the @see:ODataCollectionView (see example below).
         *
         * <pre>var url = 'http://services.odata.org/Northwind/Northwind.svc';
         * var categories = new wijmo.odata.ODataCollectionView(url, 'Categories', {
         *   oDataVersion: 1.0, // legacy OData source
         *   fields: ['CategoryID', 'CategoryName', 'Description'],
         *   sortOnServer: false
         * });</pre>
         *
         * If you do not know what version of OData your service implements (perhaps
         * you are writing an OData explorer application), then do not specify the
         * version. In this case, the @see:ODataCollectionView will get this information
         * from the server. This operation requires an extra request, but only once
         * per service URL, so the overhead is small.
         */
        oDataVersion: number;
        /**
         * Gets a value that indicates the @see:ODataCollectionView is
         * currently loading data.
         *
         * This property can be used to provide progress indicators.
         */
        readonly isLoading: boolean;
        /**
         * Occurs when the @see:ODataCollectionView starts loading data.
         */
        readonly loading: Event;
        /**
         * Raises the @see:loading event.
         */
        onLoading(e?: EventArgs): void;
        /**
         * Occurs when the @see:ODataCollectionView finishes loading data.
         */
        readonly loaded: Event;
        /**
         * Raises the @see:loaded event.
         */
        onLoaded(e?: EventArgs): void;
        /**
         * Loads or re-loads the data from the OData source.
         */
        load(): void;
        /**
         * Occurs when there is an error reading or writing data.
         */
        readonly error: Event;
        /**
         * Raises the @see:error event.
         *
         * By default, errors throw exceptions and trigger a data refresh. If you
         * want to prevent this behavior, set the @see:RequestErrorEventArgs.cancel
         * parameter to true in the event handler.
         *
         * @param e @see:RequestErrorEventArgs that contains information about the error.
         */
        onError(e: RequestErrorEventArgs): boolean;
        /**
         * Override @see:commitNew to add the new item to the database.
         */
        commitNew(): void;
        /**
         * Override @see:commitEdit to modify the item in the database.
         */
        commitEdit(): void;
        /**
         * Override @see:remove to remove the item from the database.
         *
         * @param item Item to be removed from the database.
         */
        remove(item: any): void;
        /**
         * Gets the total number of items in the view before paging is applied.
         */
        readonly totalItemCount: number;
        /**
         * Gets the total number of pages.
         */
        readonly pageCount: number;
        /**
         * Gets or sets the number of items to display on a page.
         */
        pageSize: number;
        /**
         * Raises the @see:pageChanging event.
         *
         * @param e @see:PageChangingEventArgs that contains the event data.
         */
        onPageChanging(e: collections.PageChangingEventArgs): boolean;
        _getPageView(): any[];
        _performRefresh(): void;
        _storeItems(items: any[], append: boolean): void;
        _getReadUrl(nextLink?: string): string;
        _getReadParams(nextLink?: string): any;
        _getData(nextLink?: string, xhrCallback?: Function): void;
        private _convertToDbFormat(item);
        private _reviver(key, value);
        private _convertItem(dataTypes, item);
        private _getInferredDataTypes(arr);
        private _getServiceUrl();
        private _getSchema();
        private _getWriteUrl(item?);
        private _asODataFilter(filter);
        private _asODataValueFilter(vf);
        private _asEquals(fld, value, type);
        private _asODataConditionFilter(cf);
        private _asODataCondition(cf, cond);
        private _asODataValue(val, dataType);
        private _error(xhr);
    }
}

declare module wijmo.odata {
    /**
     * Extends the @see:ODataCollectionView class to support loading data on
     * demand, using the @see:setWindow method.
     *
     * The example below shows how you can declare an @see:ODataCollectionView
     * and synchronize it with a @see:wijmo.grid.FlexGrid control to load the
     * data that is within the grid's viewport:
     *
     * <pre>// declare virtual collection view
     * var vcv = new wijmo.odata.ODataVirtualCollectionView(url, 'Order_Details_Extendeds', {
     *   oDataVersion: 4
     * });
     * // use virtual collection as grid data source
     * flex.itemsSource = vcv;
     * // update data window when the grid scrolls
     * flex.scrollPositionChanged.addHandler(function () {
     *   var rng = flex.viewRange;
     *   vcv.setWindow(rng.row, rng.row2);
     * });</pre>
     *
     * The @see:ODataVirtualCollectionView class implements a 'data window' so only
     * data that is actually being displayed is loaded from the server. Items that are
     * not being displayed are added to the collection as null values until a call
     * to the @see:setWindow method causes them those items to be loaded.
     *
     * This 'on-demand' method of loading data has advantages when dealing with large
     * data sets, because it prevents the application from loading data until it is
     * required. But it does impose some limitation: sorting and filtering must be
     * done on the server; grouping and paging are not supported.
     *
     * The example below uses an @see:ODataVirtualCollectionView to load data from
     * a NorthWind OData provider service. The collection loads data on-demant,
     * as the user scrolls the grid:
     *
     * @fiddle:smh5p6xr
     */
    class ODataVirtualCollectionView extends ODataCollectionView {
        _data: any[];
        _skip: number;
        _start: number;
        _end: number;
        _refresh: boolean;
        _loadOffset: number;
        _toSetWindow: any;
        _pendingRequest: XMLHttpRequest;
        /**
         * Initializes a new instance of the @see:ODataVirtualCollectionView class.
         *
         * @param url Url of the OData service (for example
         * 'http://services.odata.org/Northwind/Northwind.svc').
         * @param tableName Name of the table (entity) to retrieve from the service.
         * If not provided, a list of the tables (entities) available is retrieved.
         * @param options JavaScript object containing initialization data (property
         * values and event handlers) for the @see:ODataVirtualCollectionView.
         */
        constructor(url: string, tableName: string, options?: any);
        /**
         * Sets the data window to ensure a range of records are loaded into the view.
         *
         * @param start Index of the first item in the data window.
         * @param end Index of the last item in the data window.
         */
        setWindow(start: number, end: number): void;
        /**
         * @see:ODataVirtualCollectionView requires @see:pageOnServer to be set to true.
         */
        pageOnServer: boolean;
        /**
         * @see:ODataVirtualCollectionView requires @see:sortOnServer to be set to true.
         */
        sortOnServer: boolean;
        /**
         * @see:ODataVirtualCollectionView requires @see:filterOnServer to be set to true.
         */
        filterOnServer: boolean;
        /**
         * @see:ODataVirtualCollectionView requires @see:canGroup to be set to false.
         */
        canGroup: boolean;
        _performRefresh(): void;
        _getReadParams(nextLink?: string): any;
        _storeItems(items: any[], append: boolean): void;
        _performSetWindow(start: number, end: number): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Defines the @see:FlexGrid control and associated classes.
 *
 * The example below creates a @see:FlexGrid control and binds it to a
 * 'data' array. The grid has four columns, specified by explicitly
 * populating the grid's @see:FlexGrid.columns array.
 *
 * @fiddle:6GB66
 */
declare module wijmo.grid {
    /**
     * Specifies constants that define the visibility of row and column headers.
     */
    enum HeadersVisibility {
        /** No header cells are displayed. */
        None = 0,
        /** Only column header cells are displayed. */
        Column = 1,
        /** Only row header cells are displayed. */
        Row = 2,
        /** Both column and row header cells are displayed. */
        All = 3,
    }
    /**
     * The @see:FlexGrid control provides a powerful and flexible way to
     * display and edit data in a tabular format.
     *
     * The @see:FlexGrid control is a full-featured grid, providing all the
     * features you are used to including several selection modes, sorting,
     * column reordering, grouping, filtering, editing, custom cells,
     * XAML-style star-sizing columns, row and column virtualization, etc.
     *
     * The @see:FlexGrid control supports the following keyboard commands:
     *
     * <table>
     *   <thead>
     *     <tr><th>Key Combination</th><th>Action</th></tr>
     *   </thead>
     *   <tbody>
     *     <tr><td>Shift + Space</td><td>Select row</td></tr>
     *     <tr><td>Control + Space</td><td>Select column</td></tr>
     *     <tr><td>F2</td><td>Start editing the current cell</td></tr>
     *     <tr><td>Space</td><td>Start editing or toggle checkbox</td></tr>
     *     <tr><td>Control + A</td><td>Select the entire grid contents</td></tr>
     *     <tr><td>Left/Right</td><td>Select the cell to the left/right of the selection, collapse/expand group rows</td></tr>
     *     <tr><td>Shift + Left/Right</td><td>Extend the selection to include the next cell to the left/right of the selection</td></tr>
     *     <tr><td>Up/Down</td><td>Select the next cell above or below the selection</td></tr>
     *     <tr><td>Shift + Up/Down</td><td>Extend the selection to include the cell above or below the selection</td></tr>
     *     <tr><td>Alt + Up/Down</td><td>Drop down the listbox editor for the current cell</td></tr>
     *     <tr><td>PageUp/Down</td><td>Select the cell one page above or below the selection</td></tr>
     *     <tr><td>Shift + PageUp/Down</td><td>Extend the selection to include the cell one page above or below the selection</td></tr>
     *     <tr><td>Alt + PageUp/Down</td><td>Move the selection to the first or last row</td></tr>
     *     <tr><td>Shift + Alt + PageUp/Down</td><td>Extend the selection to include the first or last row</td></tr>
     *     <tr><td>Home/End</td><td>Move the selection to the first or last column</td></tr>
     *     <tr><td>Shift + Home/End</td><td>Extend the selection to include the first or last column</td></tr>
     *     <tr><td>Ctrl + Home/End</td><td>Move the selection to the first/last row and column</td></tr>
     *     <tr><td>Shift + Ctrl + Home/End</td><td>Extend the selection to include the first/last row and column</td></tr>
     *     <tr><td>Escape</td><td>Cancel current cell or row editing operation</td></tr>
     *     <tr><td>Tab</td><td>Move the selection to the next focusable element on the page (by default, can be overridden using the @see:keyActionTab property)</td></tr>
     *     <tr><td>Enter</td><td>Exit editing mode and move the selection to the cell below the current one (by default, can be overridden using the @see:keyActionEnter property)</td></tr>
     *     <tr><td>Delete, Backspace</td><td>Delete the currently selected rows (if the @see:allowDelete property is set to true), or clear the content of the selected cells (if the values are not required).</td></tr>
     *     <tr><td>Control + C or Control + Insert</td><td>Copy the selection to the clipboard (if the @see:autoClipboard property is set to true)</td></tr>
     *     <tr><td>Control + V or Shift + Insert</td><td>Paste the content of the clipboard into the selected area (if the @see:autoClipboard property is set to true)</td></tr>
     *   </tbody>
     * </table>
     *
     * @fiddle:6GB66
     */
    class FlexGrid extends Control {
        static _WJS_STICKY: string;
        static _WJS_MEASURE: string;
        static _WJS_UPDATING: string;
        static _MIN_VIRT_ROWS: number;
        _root: HTMLDivElement;
        _eCt: HTMLDivElement;
        _fCt: HTMLDivElement;
        _eTL: HTMLDivElement;
        _eBL: HTMLDivElement;
        _eFocus: HTMLDivElement;
        _activeCell: HTMLElement;
        _eCHdr: HTMLDivElement;
        _eCFtr: HTMLDivElement;
        _eRHdr: HTMLDivElement;
        _eCHdrCt: HTMLDivElement;
        _eCFtrCt: HTMLDivElement;
        _eRHdrCt: HTMLDivElement;
        _eTLCt: HTMLDivElement;
        _eBLCt: HTMLDivElement;
        _eSz: HTMLDivElement;
        _eMarquee: HTMLDivElement;
        private _gpTL;
        private _gpCHdr;
        private _gpRHdr;
        private _gpCells;
        private _gpBL;
        private _gpCFtr;
        private _maxOffsetY;
        private _heightBrowser;
        _szClient: Size;
        _offsetY: number;
        _lastCount: number;
        _rcBounds: Rect;
        _ptScrl: Point;
        _cellPadLeft: number;
        _cellPadVert: number;
        _clipToScreen: boolean;
        _mouseHdl: _MouseHandler;
        _edtHdl: _EditHandler;
        _selHdl: _SelectionHandler;
        _addHdl: _AddNewHandler;
        _keyHdl: _KeyboardHandler;
        _imeHdl: _ImeHandler;
        _mrgMgr: MergeManager;
        private _autoGenCols;
        private _autoClipboard;
        private _autoScroll;
        private _autoSearch;
        private _readOnly;
        private _indent;
        private _autoSizeMode;
        private _quickSize;
        private _hdrVis;
        private _alSorting;
        private _alAddNew;
        private _alDelete;
        private _alResizing;
        private _alDragging;
        private _alMerging;
        private _ssHdr;
        private _shSort;
        private _shGroups;
        private _shAlt;
        private _shErr;
        private _hasValidation;
        private _shDropDown;
        private _tglDropDown;
        private _valEdt;
        private _gHdrFmt;
        private _rows;
        private _cols;
        private _hdrRows;
        private _ftrRows;
        private _hdrCols;
        private _cf;
        private _itemFormatter;
        private _items;
        private _cv;
        private _childItemsPath;
        private _rowHdrPath;
        private _sortRowIndex;
        private _deferResizing;
        private _bndSortConverter;
        private _stickyHdr;
        private _afScrl;
        private _afSticky;
        private _pSel;
        private _pOutline;
        private _vt;
        private _scrollHandlerAttached;
        private _itemValidator;
        private _fzClone;
        _vtRows: number;
        _vtCols: number;
        /**
         * Gets or sets the template used to instantiate @see:FlexGrid controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:FlexGrid class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        _handleResize(): void;
        /**
         * Gets or sets a value that determines whether the row and column headers
         * are visible.
         */
        headersVisibility: HeadersVisibility;
        /**
         * Gets or sets a value that determines whether column headers should remain
         * visible when the user scrolls the document.
         */
        stickyHeaders: boolean;
        /**
         * Gets or sets a value that determines whether the grid should preserve
         * the selected state of rows when the data is refreshed.
         */
        preserveSelectedState: boolean;
        /**
         * Gets or sets a value that determines whether the grid should preserve
         * the expanded/collapsed state of nodes when the data is refreshed.
         *
         * The @see:preserveOutlineState property implementation is based on
         * JavaScript's @see:Map object, which is not available in IE 9 or 10.
         */
        preserveOutlineState: boolean;
        /**
         * Gets or sets the minimum number of rows and/or columns required to enable
         * virtualization.
         *
         * This property is set to zero by default, meaning virtualization is always
         * enabled. This improves binding performance and memory requirements, at the
         * expense of a small performance decrease while scrolling.
         *
         * If your grid has a small number of rows (about 50 to 100), you may be able to
         * improve scrolling performance by setting this property to a slightly higher
         * value (like 150). This will disable virtualization and will slow down binding,
         * but may improve perceived scroll performance. For example, the code below sets
         * causes the grid to virtualize cells when the data source has more than 150 items:
         *
         * <pre>// virtualize grid when there are more than 150 items
         * theGrid.virtualizationThreshold = 150;
         * </pre>
         *
         * Setting this property to values higher than 200 is not recommended. Loading
         * times will become too long; the grid will freeze for a few seconds while
         * creating cells for all rows, and the browser will become slow because of
         * the large number of elements on the page.
         *
         * If you want to set separate virtualization thresholds for rows and columns,
         * you may set the @see:virtualizationThreshold property to an array with two
         * numbers. In this case, the first number will be used as the row threshold
         * and the second as the column threshold. For example, the code below sets
         * causes the grid to virtualize rows but not columns:
         *
         * <pre>// virtualize rows (threshold 0) but not columns (threshold 10,000)
         * theGrid.virtualizationThreshold = [0, 10000];
         * </pre>
         */
        virtualizationThreshold: any;
        /**
         * Gets or sets a value that determines whether the grid should generate
         * columns automatically based on the @see:itemsSource.
         *
         * The column generation depends on the @see:itemsSource property containing
         * at least one item. This data item is inspected and a column is created and
         * bound to each property that contains a primitive value (number, string,
         * Boolean, or Date).
         *
         * Properties set to null do not generate columns, because the grid would
         * have no way of guessing the appropriate type. In this type of scenario,
         * you should set the @see:autoGenerateColumns property to false and create
         * the columns explicitly. For example:
         *
         * <pre>var grid = new wijmo.grid.FlexGrid('#theGrid', {
         *   autoGenerateColumns: false, // data items may contain null values
         *   columns: [                  // so define columns explicitly
         *     { binding: 'name', header: 'Name', dataType: 'String' },
         *     { binding: 'amount', header: 'Amount', dataType: 'Number' },
         *     { binding: 'date', header: 'Date', dataType: 'Date' },
         *     { binding: 'active', header: 'Active', dataType: 'Boolean' }
         *   ],
         *   itemsSource: customers
         * });</pre>
         *
         * The default value for this property is <b>true</b>.
         */
        autoGenerateColumns: boolean;
        /**
         * Gets or sets a value that determines whether the grid should handle
         * clipboard shortcuts.
         *
         * The clipboard shortcuts are as follows:
         *
         * <dl class="dl-horizontal">
         *   <dt>ctrl+C, ctrl+Ins</dt>    <dd>Copy grid selection to clipboard.</dd>
         *   <dt>ctrl+V, shift+Ins</dt>   <dd>Paste clipboard text to grid selection.</dd>
         * </dl>
         *
         * Only visible rows and columns are included in clipboard operations.
         *
         * Read-only cells are not affected by paste operations.
         *
         * The default value for this property is <b>true</b>.
         */
        autoClipboard: boolean;
        /**
         * Gets or sets a value that determines whether the grid should automatically
         * scroll its contents while users drag rows or columns into new positions.
         *
         * Row and column dragging are controlled by the @see:allowDragging property.
         *
         * The default value for this property is <b>true</b>.
         */
        autoScroll: boolean;
        /**
         * Gets or sets a value that determines whether the grid should search for
         * cells as the users types into read-only cells.
         *
         * The search happens on the column that is currently selected, if it is
         * not editable. The search starts at the currently selected row and is
         * case-insensitive.
         *
         * The default value for this property is <b>false</b>.
         */
        autoSearch: boolean;
        /**
         * Gets or sets a JSON string that defines the current column layout.
         *
         * The column layout string represents an array with the columns and their
         * properties. It can be used to persist column layouts defined by users so
         * they are preserved across sessions, and can also be used to implement undo/redo
         * functionality in applications that allow users to modify the column layout.
         *
         * The column layout string does not include <b>dataMap</b> properties because
         * data maps are not serializable.
         */
        columnLayout: string;
        /**
         * Gets or sets a value that determines whether the user can modify
         * cell values using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets a value that determines whether the grid should support
         * Input Method Editors (IME) while not in edit mode.
         *
         * This property is relevant only for sites/applications in Japanese,
         * Chinese, Korean, and other languages that require IME support.
         *
         * The default value for this property is <b>false</b>.
         */
        imeEnabled: boolean;
        /**
         * Gets or sets a value that determines whether users may resize
         * rows and/or columns with the mouse.
         *
         * If resizing is enabled, users can resize columns by dragging
         * the right edge of column header cells, or rows by dragging the
         * bottom edge of row header cells.
         *
         * Users may also double-click the edge of the header cells to
         * automatically resize rows and columns to fit their content.
         * The auto-size behavior can be customized using the @see:autoSizeMode
         * property.
         *
         * The default value for this property is <b>AllowResizing.Columns</b>.
         */
        allowResizing: AllowResizing;
        /**
         * Gets or sets a value that determines whether row and column resizing
         * should be deferred until the user releases the mouse button.
         *
         * By default, @see:deferResizing is set to false, causing rows and columns
         * to be resized as the user drags the mouse. Setting this property to true
         * causes the grid to show a resizing marker and to resize the row or column
         * only when the user releases the mouse button.
         *
         * The default value for this property is <b>false</b>.
         */
        deferResizing: boolean;
        /**
         * Gets or sets which cells should be taken into account when auto-sizing a
         * row or column.
         *
         * This property controls what happens when users double-click the edge of
         * a column header.
         *
         * By default, the grid will automatically set the column width based on the
         * content of the header and data cells in the column. This property allows
         * you to change that to include only the headers or only the data.
         *
         * The default value for this property is <b>AutoSizeMode.Both</b>.
         */
        autoSizeMode: AutoSizeMode;
        /**
         * Gets or sets a value that determines whether the grid should optimize
         * performance over precision when auto-sizing columns.
         *
         * Setting this property to false disables quick auto-sizing. Setting
         * it to true enables the feature, subject to the value of each column's
         * @see:wijmo.grid.Column.quickAutoSize property. Setting it to null
         * (the default value) enables the feature for grids that don't have a
         * custom @see:itemFormatter or handlers attached to the @see:formatItem
         * event.
         */
        quickAutoSize: boolean;
        _getQuickAutoSize(): boolean;
        /**
         * Gets or sets a value that determines whether users are allowed to sort columns
         * by clicking the column header cells.
         *
         * The default value for this property is <b>true</b>.
         */
        allowSorting: boolean;
        /**
         * Gets or sets a value that indicates whether the grid should provide a new row
         * template so users can add items to the source collection.
         *
         * The new row template will not be displayed if the @see:isReadOnly property
         * is set to true.
         *
         * The default value for this property is <b>false</b>.
         */
        allowAddNew: boolean;
        /**
         * Gets or sets a value that indicates whether the new row template should be
         * located at the top of the grid or at the bottom.
         *
         * If you set the @see:newRowAtTop property to true, and you want the new
         * row template to remain visible at all times, set the @see:frozenRows
         * property to one. This will freeze the new row template at the top so
         * it won't scroll off the view.
         *
         * The new row template will be displayed only if the @see:allowAddNew property
         * is set to true and if the @see:itemsSource object supports adding new items.
         *
         * The default value for this property is <b>false</b>.
         */
        newRowAtTop: boolean;
        /**
         * Gets or sets a value that indicates whether the grid should delete
         * selected rows when the user presses the Delete key.
         *
         * Selected rows will not be deleted if the @see:isReadOnly property
         * is set to true.
         *
         * The default value for this property is <b>false</b>.
         */
        allowDelete: boolean;
        /**
         * Gets or sets which parts of the grid provide cell merging.
         *
         * The default value for this property is <b>AllowMerging.None</b>.
         */
        allowMerging: AllowMerging;
        /**
         * Gets or sets a value that indicates whether the grid should
         * add class names to indicate selected header cells.
         *
         * The default value for this property is <b>HeadersVisibility.None</b>.
         */
        showSelectedHeaders: HeadersVisibility;
        /**
         * Gets or sets a value that indicates whether the grid should
         * display an Excel-style marquee around the current selection.
         *
         * The default value for this property is <b>false</b>.
         */
        showMarquee: boolean;
        /**
         * Gets or sets a value that determines whether the grid should display
         * sort indicators in the column headers.
         *
         * Sorting is controlled by the @see:ICollectionView.sortDescriptions
         * property of the @see:ICollectionView object used as a the grid's
         * @see:itemsSource.
         *
         * The default value for this property is <b>true</b>.
         */
        showSort: boolean;
        /**
         * Gets or sets a value that determines whether the @see:FlexGrid should insert
         * group rows to delimit data groups.
         *
         * Data groups are created by modifying the @see:ICollectionView.groupDescriptions
         * property of the @see:ICollectionView object used as an @see:itemsSource.
         *
         * The default value for this property is <b>true</b>.
         */
        showGroups: boolean;
        /**
         * Gets or sets a value that determines whether the grid should add the 'wj-alt'
         * class to cells in alternating rows.
         *
         * Setting this property to false disables alternate row styles without any
         * changes to the CSS.
         *
         * The default value for this property is <b>true</b>.
         */
        showAlternatingRows: boolean;
        /**
         * Gets or sets a value that determines whether the grid should add the 'wj-state-invalid'
         * class to cells that contain validation errors, and tooltips with error descriptions.
         *
         * The grid detects validation errors using the @see:itemValidator property or
         * the @see:CollectionView.getError property on the grid's @see:itemsSource.
         *
         * The default value for this property is <b>true</b>.
         */
        showErrors: boolean;
        /**
         * Gets or sets a validator function to determine whether cells contain
         * valid data.
         *
         * If specified, the validator function should take two parameters containing
         * the cell's row and column indices, and should return a string containing
         * the error description.
         *
         * This property is especially useful when dealing with unbound grids,
         * since bound grids can be validated using the @see:CollectionView.getError
         * property instead.
         *
         * This example shows how you could prevent cells from containing the same
         * data as the cell immediately above it:
         * <pre>// check that the cell above doesn't contain the same value as this one
         * theGrid.itemValidator = function (row, col) {
         *   if (row &gt; 0) {
         *     var valThis = theGrid.getCellData(row, col, false),
         *         valPrev = theGrid.getCellData(row - 1, col, false);
         *     if (valThis != null && valThis == valPrev) {
         *       return 'This is a duplicate value...'
         *     }
         *   }
         *   return null; // no errors
         * }</pre>
         */
        itemValidator: Function;
        /**
         * Gets or sets a value that determines whether the grid should remain
         * in edit mode when the user tries to commit edits that fail validation.
         *
         * The grid detects validation errors by calling the @see:CollectionView.getError
         * method on the grid's @see:itemsSource.
         *
         * The default value for this property is <b>true</b>.
         */
        validateEdits: boolean;
        /**
         * Gets or sets the format string used to create the group header content.
         *
         * The string may contain any text, plus the following replacement strings:
         * <ul>
         *   <li><b>{name}</b>: The name of the property being grouped on.</li>
         *   <li><b>{value}</b>: The value of the property being grouped on.</li>
         *   <li><b>{level}</b>: The group level.</li>
         *   <li><b>{count}</b>: The total number of items in this group.</li>
         * </ul>
         *
         * If a column is bound to the grouping property, the column header is used
         * to replace the <code>{name}</code> parameter, and the column's format and
         * data maps are used to calculate the <code>{value}</code> parameter.
         * If no column is available, the group information is used instead.
         *
         * You may add invisible columns bound to the group properties in order to
         * customize the formatting of the group header cells.
         *
         * The default value for this property is<br/>
         * <code>'{name}: &lt;b&gt;{value}&lt;/b&gt;({count:n0} items)'</code>,
         * which creates group headers similar to<br/>
         * <code>'Country: <b>UK</b> (12 items)'</code> or<br/>
         * <code>'Country: <b>Japan</b> (8 items)'</code>.
         */
        groupHeaderFormat: string;
        /**
         * Gets or sets a value that determines whether users are allowed to drag
         * rows and/or columns with the mouse.
         *
         * If the @see:autoScroll property is set to true, the grid will automatically
         * scroll its contents while the user drags rows or columns into new positions.
         *
         * The grid allows dragging columns by default.
         *
         * Dragging rows requires special considerations in bound scenarios.
         *
         * When you drag rows on bound grids, the rows will get out of sync with the
         * data source (row 4 may refer to item 6 for example).
         * To avoid this, you should handle the @see:draggedRow event and
         * synchronize the data with the new row positions.
         *
         * Also, remember to set the @see:allowSorting property to false or you
         * the row order will be determined by the data, and dragging rows will be
         * pointless.
         *
         * This fiddle demonstrates row dragging with a bound grid:
         * <a href="http://jsfiddle.net/Wijmo5/kyg0qsda/" target="_blank">Bound Row Dragging</a>.
         *
         * The default value for this property is <b>AllowDragging.Columns</b>.
         */
        allowDragging: AllowDragging;
        /**
         * Gets or sets the array or @see:ICollectionView that contains items
         * shown on the grid.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView that contains the grid data.
         *
         * If the @see:itemsSource property was set to an @see:ICollectionView,
         * this property returns that value.
         *
         * If the @see:itemsSource property was set to an array of data items,
         * this property returns the internal @see:CollectionView created
         * by the grid to support currency, editing, and sorting.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets the @see:IEditableCollectionView that contains the grid data.
         */
        readonly editableCollectionView: collections.IEditableCollectionView;
        /**
         * Gets or sets the name of the property (or properties) used to generate
         * child rows in hierarchical grids.
         *
         * Set this property to a string to specify the name of the property that
         * contains an item's child items
         * (e.g. <code>childItemsPath = 'items';</code>).
         *
         * If items at different levels child items with different names, then
         * set this property to an array containing the names of the properties
         * that contain child items et each level
         * (e.g. <code>childItemsPath = ['checks','earnings'];</code>).
         *
         * @fiddle:kk9j93bL
         */
        childItemsPath: any;
        /**
         * Gets or sets the name of the property used to create row header
         * cells.
         *
         * Row header cells are not visible or selectable. They are meant
         * for use with accessibility tools.
         */
        rowHeaderPath: string;
        /**
         * Gets the @see:GridPanel that contains the data cells.
         */
        readonly cells: GridPanel;
        /**
         * Gets the @see:GridPanel that contains the column header cells.
         */
        readonly columnHeaders: GridPanel;
        /**
         * Gets the @see:GridPanel that contains the column footer cells.
         *
         * The @see:columnFooters panel appears below the grid cells, to the
         * right of the @see:bottomLeftCells panel. It can be used to display
         * summary information below the grid data.
         *
         * The example below shows how you can add a row to the @see:columnFooters
         * panel to display summary data for columns that have the
         * @see:Column.aggregate property set:
         *
         * <pre>function addFooterRow(flex) {
         *   // create a GroupRow to show aggregates
         *   var row = new wijmo.grid.GroupRow();
         *
         *   // add the row to the column footer panel
         *   flex.columnFooters.rows.push(row);
         *
         *   // show a sigma on the header
         *   flex.bottomLeftCells.setCellData(0, 0, '\u03A3');
         * }</pre>
         */
        readonly columnFooters: GridPanel;
        /**
         * Gets the @see:GridPanel that contains the row header cells.
         */
        readonly rowHeaders: GridPanel;
        /**
         * Gets the @see:GridPanel that contains the top left cells
         * (to the left of the column headers).
         */
        readonly topLeftCells: GridPanel;
        /**
         * Gets the @see:GridPanel that contains the bottom left cells.
         *
         * The @see:bottomLeftCells panel appears below the row headers, to the
         * left of the @see:columnFooters panel.
         */
        readonly bottomLeftCells: GridPanel;
        /**
         * Gets the grid's row collection.
         */
        readonly rows: RowCollection;
        /**
         * Gets the grid's column collection.
         */
        readonly columns: ColumnCollection;
        /**
         * Gets a column by name or by binding.
         *
         * The method searches the column by name. If a column with the given name
         * is not found, it searches by binding. The searches are case-sensitive.
         *
         * @param name The name or binding to find.
         * @return The column with the specified name or binding, or null if not found.
         */
        getColumn(name: string): Column;
        /**
         * Gets or sets the number of frozen rows.
         *
         * Frozen rows do not scroll vertically, but the cells they contain
         * may be selected and edited.
         *
         * The default value for this property is <b>0</b>.
         */
        frozenRows: number;
        /**
         * Gets or sets the number of frozen columns.
         *
         * Frozen columns do not scroll horizontally, but the cells they contain
         * may be selected and edited.
         *
         * The default value for this property is <b>0</b>.
         */
        frozenColumns: number;
        /**
         * Gets or sets a value that determines whether the FlexGrid should
         * clone frozen cells and show then in a separate element to improve
         * perceived performance while scrolling.
         *
         *
         * The default value for this property is <b>null</b>,
         * which causes the grid to select the best setting depending
         * on the browser.
         */
        cloneFrozenCells: boolean;
        /**
         * Gets or sets the index of row in the column header panel that
         * shows and changes the current sort.
         *
         * The default value for this property is <b>null</b>,
         * which causes the bottom row in the @see:columnHeaders
         * panel to act as the sort row.
         */
        sortRowIndex: number;
        /**
         * Gets or sets a @see:Point that represents the value of the grid's scrollbars.
         */
        scrollPosition: Point;
        /**
         * Gets the client size of the control (control size minus headers and scrollbars).
         */
        readonly clientSize: Size;
        /**
         * Gets the bounding rectangle of the control in page coordinates.
         */
        readonly controlRect: Rect;
        /**
         * Gets the size of the grid content in pixels.
         */
        readonly scrollSize: Size;
        /**
         * Gets the range of cells currently in view.
         */
        readonly viewRange: CellRange;
        /**
         * Gets or sets the @see:CellFactory that creates and updates cells for this grid.
         */
        cellFactory: CellFactory;
        /**
         * Gets or sets a formatter function used to customize cells on this grid.
         *
         * The formatter function can add any content to any cell. It provides
         * complete flexibility over the appearance and behavior of grid cells.
         *
         * If specified, the function should take four parameters: the @see:GridPanel
         * that contains the cell, the row and column indices of the cell, and the
         * HTML element that represents the cell. The function will typically change
         * the <b>innerHTML</b> property of the cell element.
         *
         * For example:
         * <pre>
         * flex.itemFormatter = function(panel, r, c, cell) {
         *   if (panel.cellType == CellType.Cell) {
         *     // draw sparklines in the cell
         *     var col = panel.columns[c];
         *     if (col.name == 'sparklines') {
         *       cell.innerHTML = getSparklike(panel, r, c);
         *     }
         *   }
         * }
         * </pre>
         *
         * Note that the FlexGrid recycles cells, so if your @see:itemFormatter
         * modifies the cell's style attributes, you must make sure that it resets
         * these attributes for cells that should not have them. For example:
         *
         * <pre>
         * flex.itemFormatter = function(panel, r, c, cell) {
         *   // reset attributes we are about to customize
         *   var s = cell.style;
         *   s.color = '';
         *   s.backgroundColor = '';
         *   // customize color and backgroundColor attributes for this cell
         *   ...
         * }
         * </pre>
         *
         * If you have a scenario where multiple clients may want to customize the
         * grid rendering (for example when creating directives or re-usable libraries),
         * consider using the @see:formatItem event instead. The event allows multiple
         * clients to attach their own handlers.
         */
        itemFormatter: Function;
        /**
         * Gets a value that indicates whether a given cell can be edited.
         *
         * @param r Index of the row that contains the cell.
         * @param c Index of the column that contains the cell.
         */
        canEditCell(r: number, c: number): boolean;
        /**
         * Gets the value stored in a cell in the scrollable area of the grid.
         *
         * @param r Index of the row that contains the cell.
         * @param c Index of the column that contains the cell.
         * @param formatted Whether to format the value for display.
         */
        getCellData(r: number, c: number, formatted: boolean): any;
        /**
         * Gets a the bounds of a cell element in viewport coordinates.
         *
         * This method returns the bounds of cells in the @see:cells
         * panel (scrollable data cells). To get the bounds of cells
         * in other panels, use the @see:getCellBoundingRect method
         * in the appropriate @see:GridPanel object.
         *
         * The returned value is a @see:Rect object which contains the
         * position and dimensions of the cell in viewport coordinates.
         * The viewport coordinates are the same used by the
         * <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect">getBoundingClientRect</a>
         * method.
         *
         * @param r Index of the row that contains the cell.
         * @param c Index of the column that contains the cell.
         * @param raw Whether to return the rectangle in raw panel coordinates
         * as opposed to viewport coordinates.
         */
        getCellBoundingRect(r: number, c: number, raw?: boolean): Rect;
        /**
         * Sets the value of a cell in the scrollable area of the grid.
         *
         * @param r Index of the row that contains the cell.
         * @param c Index, name, or binding of the column that contains the cell.
         * @param value Value to store in the cell.
         * @param coerce Whether to change the value automatically to match the column's data type.
         * @param invalidate Whether to invalidate the grid to show the change.
         * @return True if the value was stored successfully, false otherwise.
         */
        setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
        /**
         * Gets a @see:wijmo.grid.HitTestInfo object with information about a given point.
         *
         * For example:
         *
         * <pre>// hit test a point when the user clicks on the grid
         * flex.hostElement.addEventListener('click', function (e) {
         *   var ht = flex.hitTest(e.pageX, e.pageY);
         *   console.log('you clicked a cell of type "' +
         *     wijmo.grid.CellType[ht.cellType] + '".');
         * });</pre>
         *
         * @param pt @see:Point to investigate, in page coordinates, or a MouseEvent object, or x coordinate of the point.
         * @param y Y coordinate of the point in page coordinates (if the first parameter is a number).
         * @return A @see:wijmo.grid.HitTestInfo object with information about the point.
         */
        hitTest(pt: any, y?: any): wijmo.grid.HitTestInfo;
        /**
         * Gets the content of a @see:CellRange as a string suitable for
         * copying to the clipboard.
         *
         * Hidden rows and columns are not included in the clip string.
         *
         * @param rng @see:CellRange to copy. If omitted, the current selection is used.
         * @param csv Whether to use the CSV format (comma-delimited cells).
         * @param headers Whether to include the column headers.
         */
        getClipString(rng?: CellRange, csv?: boolean, headers?: boolean): string;
        /**
         * Parses a string into rows and columns and applies the content to a given range.
         *
         * Hidden rows and columns are skipped.
         *
         * @param text Tab and newline delimited text to parse into the grid.
         * @param rng @see:CellRange to copy. If omitted, the current selection is used.
         */
        setClipString(text: string, rng?: CellRange): void;
        /**
         * Overridden to set the focus to the grid without scrolling the
         * whole grid into view.
         */
        focus(): void;
        /**
         * Disposes of the control by removing its association with the host element.
         */
        dispose(): void;
        /**
         * Refreshes the grid display.
         *
         * @param fullUpdate Whether to update the grid layout and content, or just the content.
         */
        refresh(fullUpdate?: boolean): void;
        /**
         * Refreshes the grid display.
         *
         * @param fullUpdate Whether to update the grid layout and content, or just the content.
         * @param recycle Whether to recycle existing elements.
         * @param state Whether to keep existing elements and update their state.
         */
        refreshCells(fullUpdate: boolean, recycle?: boolean, state?: boolean): void;
        /**
         * Resizes a column to fit its content.
         *
         * This method only works if the grid is visible. If its host element
         * has not been added to the DOM, or if any of the grid's ancestor
         * elements is hidden, the grid will not be able to measure the cells
         * and therefore will not be able to auto-size the columns.
         *
         * @param c Index of the column to resize.
         * @param header Whether the column index refers to a regular or a header row.
         * @param extra Extra spacing, in pixels.
         */
        autoSizeColumn(c: number, header?: boolean, extra?: number): void;
        /**
         * Resizes a range of columns to fit their content.
         *
         * The grid will always measure all rows in the current view range, plus up
         * to 2,000 rows not currently in view. If the grid contains a large amount
         * of data (say 50,000 rows),  then not all rows will be measured since that
         * could take a long time.
         *
         * This method only works if the grid is visible. If its host element has not
         * been added to the DOM, or if any of the grid's ancestor elements is hidden,
         * the grid will not be able to measure the cells and therefore will not be
         * able to auto-size the columns.
         *
         * @param firstColumn Index of the first column to resize (defaults to the first column).
         * @param lastColumn Index of the last column to resize (defaults to the last column).
         * @param header Whether the column indices refer to regular or header columns.
         * @param extra Extra spacing, in pixels.
         */
        autoSizeColumns(firstColumn?: number, lastColumn?: number, header?: boolean, extra?: number): void;
        /**
         * Resizes a row to fit its content.
         *
         * This method only works if the grid is visible. If its host element
         * has not been added to the DOM, or if any of the grid's ancestor
         * elements are hidden, the grid will not be able to measure the cells
         * and therefore will not be able to auto-size the rows.
         *
         * @param r Index of the row to resize.
         * @param header Whether the row index refers to a regular or a header row.
         * @param extra Extra spacing, in pixels.
         */
        autoSizeRow(r: number, header?: boolean, extra?: number): void;
        /**
         * Resizes a range of rows to fit their content.
         *
         * This method only works if the grid is visible. If its host element
         * has not been added to the DOM, or if any of the grid's ancestor
         * elements is hidden, the grid will not be able to measure the cells
         * and therefore will not be able to auto-size the rows.
         *
         * @param firstRow Index of the first row to resize.
         * @param lastRow Index of the last row to resize.
         * @param header Whether the row indices refer to regular or header rows.
         * @param extra Extra spacing, in pixels.
         */
        autoSizeRows(firstRow?: number, lastRow?: number, header?: boolean, extra?: number): void;
        /**
         * Gets or sets the indent used to offset row groups of different levels.
         */
        treeIndent: number;
        /**
         * Collapses all the group rows to a given level.
         *
         * @param level Maximum group level to show.
         */
        collapseGroupsToLevel(level: number): void;
        /**
         * Gets or sets the current selection mode.
         */
        selectionMode: SelectionMode;
        /**
         * Gets or sets the current selection.
         */
        selection: CellRange;
        /**
         * Selects a cell range and optionally scrolls it into view.
         *
         * The @see:select method can be called by passing a @see:CellRange and
         * an optional boolean parameter that indicates whether the new selection
         * should be scrolled into view. For example:
         *
         * <pre>// select cell 1,1 and scroll it into view
         * grid.select(new CellRange(1, 1), true);
         *
         * // select range (1,1)-(2,4) and do not scroll it into view
         * grid.select(new CellRange(1, 1, 2, 4), false);
         * </pre>
         *
         * You can also call the @see:select method passing the index or the
         * row and column you want to select. In this case, the new selection
         * always scrolls into view. For example:
         *
         * <pre>// select cell 1,1 and scroll it into view
         * grid.select(1, 1);
         * </pre>
         *
         * @param rng Range to select.
         * @param show Whether to scroll the new selection into view.
         */
        select(rng: any, show?: any): void;
        /**
         * Gets a @see:SelectedState value that indicates the selected state of a cell.
         *
         * @param r Row index of the cell to inspect.
         * @param c Column index of the cell to inspect.
         */
        getSelectedState(r: number, c: number): SelectedState;
        /**
         * Gets or sets an array containing the rows that are currently selected.
         *
         * Note: this property can be read in all selection modes, but it can be
         * set only when @see:selectionMode is set to <b>SelectionMode.ListBox</b>.
         */
        selectedRows: any[];
        /**
         * Gets or sets an array containing the data items that are currently selected.
         *
         * Note: this property can be read in all selection modes, but it can be
         * set only when @see:selectionMode is set to <b>SelectionMode.ListBox</b>.
         */
        selectedItems: any[];
        /**
         * Scrolls the grid to bring a specific cell into view.
         *
         * Negative row and column indices are ignored, so if you call
         *
         * <pre>grid.scrollIntoView(200, -1);</pre>
         *
         * The grid will scroll vertically to show row 200, and will not
         * scroll horizontally.
         *
         * @param r Index of the row to scroll into view.
         * @param c Index of the column to scroll into view.
         * @param refresh Optional parameter that determines whether the grid
         * should refresh to show the new scroll position immediately.
         * @return True if the grid scrolled.
         */
        scrollIntoView(r: number, c: number, refresh?: boolean): boolean;
        /**
         * Checks whether a given CellRange is valid for this grid's row and column collections.
         *
         * @param rng Range to check.
         */
        isRangeValid(rng: CellRange): boolean;
        /**
         * Starts editing a given cell.
         *
         * Editing in the @see:FlexGrid is similar to editing in Excel:
         * Pressing F2 or double-clicking a cell puts the grid in <b>full-edit</b> mode.
         * In this mode, the cell editor remains active until the user presses Enter, Tab,
         * or Escape, or until he moves the selection with the mouse. In full-edit mode,
         * pressing the cursor keys does not cause the grid to exit edit mode.
         *
         * Typing text directly into a cell puts the grid in <b>quick-edit mode</b>.
         * In this mode, the cell editor remains active until the user presses Enter,
         * Tab, or Escape, or any arrow keys.
         *
         * Full-edit mode is normally used to make changes to existing values.
         * Quick-edit mode is normally used for entering new data quickly.
         *
         * While editing, the user can toggle between full and quick modes by
         * pressing the F2 key.
         *
         * @param fullEdit Whether to stay in edit mode when the user presses the cursor keys. Defaults to true.
         * @param r Index of the row to be edited. Defaults to the currently selected row.
         * @param c Index of the column to be edited. Defaults to the currently selected column.
         * @param focus Whether to give the editor the focus when editing starts. Defaults to true.
         * @return True if the edit operation started successfully.
         */
        startEditing(fullEdit?: boolean, r?: number, c?: number, focus?: boolean): boolean;
        /**
         * Commits any pending edits and exits edit mode.
         *
         * @param cancel Whether pending edits should be canceled or committed.
         * @return True if the edit operation finished successfully.
         */
        finishEditing(cancel?: boolean): boolean;
        /**
         * Gets the <b>HTMLInputElement</b> that represents the cell editor currently active.
         */
        readonly activeEditor: HTMLInputElement;
        /**
         * Gets a @see:CellRange that identifies the cell currently being edited.
         */
        readonly editRange: CellRange;
        /**
         * Gets or sets the @see:MergeManager object responsible for determining how cells
         * should be merged.
         */
        mergeManager: MergeManager;
        /**
         * Gets a @see:CellRange that specifies the merged extent of a cell
         * in a @see:GridPanel.
         *
         * @param p The @see:GridPanel that contains the range.
         * @param r Index of the row that contains the cell.
         * @param c Index of the column that contains the cell.
         * @param clip Whether to clip the merged range to the grid's current view range.
         * @return A @see:CellRange that specifies the merged range, or null if the cell is not merged.
         */
        getMergedRange(p: GridPanel, r: number, c: number, clip?: boolean): CellRange;
        /**
         * Gets or sets the action to perform when the TAB key is pressed.
         *
         * The default setting for this property is @see:KeyAction.None,
         * which causes the browser to select the next or previous controls
         * on the page when the TAB key is pressed. This is the recommended
         * setting to improve page accessibility.
         *
         * In previous versions, the default was set to @see:KeyAction.Cycle,
         * which caused the control to move the selection across and down
         * the grid. This is the standard Excel behavior, but is not good
         * for accessibility.
         *
         * There is also a @see:KeyAction.CycleOut setting that causes the
         * selection to move through the cells (as @see:KeyAction.Cycle),
         * and then on to the next/previous control on the page when the
         * last or first cells are selected.
         */
        keyActionTab: KeyAction;
        /**
         * Gets or sets the action to perform when the ENTER key is pressed.
         *
         * The default setting for this property is @see:KeyAction.MoveDown,
         * which causes the control to move the selection to the next row.
         * This is the standard Excel behavior.
         */
        keyActionEnter: KeyAction;
        /**
         * Gets or sets a value that indicates whether the grid adds drop-down
         * buttons to the cells in columns that have the @see:Column.showDropDown
         * property set to true.
         *
         * The drop-down buttons are shown only on columns that have a @see:Column.dataMap
         * set and are editable. Clicking on the drop-down buttons causes the grid
         * to show a list where users can select the value for the cell.
         *
         * Cell drop-downs require the wijmo.input module to be loaded.
         */
        showDropDown: boolean;
        /**
         * Toggles the drop-down list-box associated with the currently selected
         * cell.
         *
         * This method can be used to show the drop-down list automatically
         * when the cell enters edit mode, or when the user presses certain
         * keys.
         *
         * For example, this code causes the grid to show the drop-down list
         * whenever the grid enters edit mode:
         * <pre>// show the drop-down list when the grid enters edit mode
         * theGrid.beginningEdit = function () {
         *   theGrid.toggleDropDownList();
         * }</pre>
         *
         * This code causes the grid to show the drop-down list when the grid
         * enters edit mode after the user presses the space bar:
         * <pre> // show the drop-down list when the user presses the space bar
         * theGrid.hostElement.addEventListener('keydown', function (e) {
         *   if (e.keyCode == 32) {
         *     e.preventDefault();
         *     theGrid.toggleDropDownList();
         *   }
         * }, true);</pre>
         */
        toggleDropDownList(): void;
        /**
         * Occurs after the grid has been bound to a new items source.
         */
        readonly itemsSourceChanging: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         *
         * @param e @see:CancelEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onItemsSourceChanging(e: CancelEventArgs): boolean;
        /**
         * Occurs after the grid has been bound to a new items source.
         */
        readonly itemsSourceChanged: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         */
        onItemsSourceChanged(e?: EventArgs): void;
        /**
         * Occurs after the control has scrolled.
         */
        readonly scrollPositionChanged: Event;
        /**
         * Raises the @see:scrollPositionChanged event.
         */
        onScrollPositionChanged(e?: EventArgs): void;
        /**
         * Occurs before selection changes.
         */
        readonly selectionChanging: Event;
        /**
         * Raises the @see:selectionChanging event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onSelectionChanging(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after selection changes.
         */
        readonly selectionChanged: Event;
        /**
         * Raises the @see:selectionChanged event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onSelectionChanged(e: CellRangeEventArgs): void;
        /**
         * Occurs before the grid rows are bound to items in the data source.
         */
        readonly loadingRows: Event;
        /**
         * Raises the @see:loadingRows event.
         *
         * @param e @see:CancelEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onLoadingRows(e: CancelEventArgs): boolean;
        /**
         * Occurs after the grid rows have been bound to items in the data source.
         */
        readonly loadedRows: Event;
        /**
         * Raises the @see:loadedRows event.
         */
        onLoadedRows(e?: EventArgs): void;
        /**
         * Occurs before the grid updates its internal layout.
         */
        readonly updatingLayout: Event;
        /**
         * Raises the @see:updatingLayout event.
         *
         * @param e @see:CancelEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onUpdatingLayout(e: CancelEventArgs): boolean;
        /**
         * Occurs after the grid has updated its internal layout.
         */
        readonly updatedLayout: Event;
        /**
         * Raises the @see:updatedLayout event.
         */
        onUpdatedLayout(e?: EventArgs): void;
        /**
         * Occurs as columns are resized.
         */
        readonly resizingColumn: Event;
        /**
         * Raises the @see:resizingColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onResizingColumn(e: CellRangeEventArgs): boolean;
        /**
         * Occurs when the user finishes resizing a column.
         */
        readonly resizedColumn: Event;
        /**
         * Raises the @see:resizedColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onResizedColumn(e: CellRangeEventArgs): void;
        /**
         * Occurs before the user auto-sizes a column by double-clicking the
         * right edge of a column header cell.
         */
        readonly autoSizingColumn: Event;
        /**
         * Raises the @see:autoSizingColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onAutoSizingColumn(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after the user auto-sizes a column by double-clicking the
         * right edge of a column header cell.
         */
        readonly autoSizedColumn: Event;
        /**
         * Raises the @see:autoSizedColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onAutoSizedColumn(e: CellRangeEventArgs): void;
        /**
         * Occurs when the user starts dragging a column.
         */
        readonly draggingColumn: Event;
        /**
         * Raises the @see:draggingColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDraggingColumn(e: CellRangeEventArgs): boolean;
        /**
         * Occurs as the user drags a column to a new position.
         *
         * The handler may cancel the event to prevent users from
         * dropping columns at certain positions. For example:
         *
         * <pre>// remember column being dragged
         * flex.draggingColumn.addHandler(function (s, e) {
         *     theColumn = s.columns[e.col].binding;
         * });
         *
         * // prevent 'sales' column from being dragged to index 0
         * s.draggingColumnOver.addHandler(function (s, e) {
         *     if (theColumn == 'sales' && e.col == 0) {
         *         e.cancel = true;
         *     }
         * });</pre>
         */
        readonly draggingColumnOver: Event;
        /**
         * Raises the @see:draggingColumnOver event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDraggingColumnOver(e: CellRangeEventArgs): boolean;
        /**
         * Occurs when the user finishes dragging a column.
         */
        readonly draggedColumn: Event;
        /**
         * Raises the @see:draggedColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onDraggedColumn(e: CellRangeEventArgs): void;
        /**
         * Occurs as rows are resized.
         */
        readonly resizingRow: Event;
        /**
         * Raises the @see:resizingRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onResizingRow(e: CellRangeEventArgs): boolean;
        /**
         * Occurs when the user finishes resizing rows.
         */
        readonly resizedRow: Event;
        /**
         * Raises the @see:resizedRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onResizedRow(e: CellRangeEventArgs): void;
        /**
         * Occurs before the user auto-sizes a row by double-clicking the
         * bottom edge of a row header cell.
         */
        readonly autoSizingRow: Event;
        /**
         * Raises the @see:autoSizingRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onAutoSizingRow(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after the user auto-sizes a row by double-clicking the
         * bottom edge of a row header cell.
         */
        readonly autoSizedRow: Event;
        /**
         * Raises the @see:autoSizedRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onAutoSizedRow(e: CellRangeEventArgs): void;
        /**
         * Occurs when the user starts dragging a row.
         */
        readonly draggingRow: Event;
        /**
         * Raises the @see:draggingRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDraggingRow(e: CellRangeEventArgs): boolean;
        /**
         * Occurs as the user drags a row to a new position.
         */
        readonly draggingRowOver: Event;
        /**
         * Raises the @see:draggingRowOver event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDraggingRowOver(e: CellRangeEventArgs): boolean;
        /**
         * Occurs when the user finishes dragging a row.
         */
        readonly draggedRow: Event;
        /**
         * Raises the @see:draggedRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onDraggedRow(e: CellRangeEventArgs): void;
        /**
         * Occurs when a group is about to be expanded or collapsed.
         */
        readonly groupCollapsedChanging: Event;
        /**
         * Raises the @see:groupCollapsedChanging event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onGroupCollapsedChanging(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after a group has been expanded or collapsed.
         */
        readonly groupCollapsedChanged: Event;
        /**
         * Raises the @see:groupCollapsedChanged event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onGroupCollapsedChanged(e: CellRangeEventArgs): void;
        /**
         * Occurs before the user applies a sort by clicking on a column header.
         */
        readonly sortingColumn: Event;
        /**
         * Raises the @see:sortingColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onSortingColumn(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after the user applies a sort by clicking on a column header.
         */
        readonly sortedColumn: Event;
        /**
         * Raises the @see:sortedColumn event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onSortedColumn(e: CellRangeEventArgs): void;
        /**
         * Occurs before a cell enters edit mode.
         */
        readonly beginningEdit: Event;
        /**
         * Raises the @see:beginningEdit event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onBeginningEdit(e: CellRangeEventArgs): boolean;
        /**
         * Occurs when an editor cell is created and before it becomes active.
         */
        readonly prepareCellForEdit: Event;
        /**
         * Raises the @see:prepareCellForEdit event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onPrepareCellForEdit(e: CellRangeEventArgs): void;
        /**
         * Occurs when a cell edit is ending.
         *
         * You can use this event to perform validation and prevent invalid edits.
         * For example, the code below prevents users from entering values that
         * do not contain the letter 'a'. The code demonstrates how you can obtain
         * the old and new values before the edits are applied.
         *
         * <pre>function cellEditEnding (sender, e) {
         *   // get old and new values
         *   var flex = sender,
         *       oldVal = flex.getCellData(e.row, e.col),
         *       newVal = flex.activeEditor.value;
         *   // cancel edits if newVal doesn't contain 'a'
         *   e.cancel = newVal.indexOf('a') &lt; 0;
         * }</pre>
         *
         * Setting the @see:CellEditEndingEventArgs.cancel parameter to
         * true causes the grid to discard the edited value and keep the
         * cell's original value.
         *
         * If you also set the @see:CellEditEndingEventArgs.stayInEditMode
         * parameter to true, the grid will remain in edit mode so the user
         * can correct invalid entries before committing the edits.
         */
        readonly cellEditEnding: Event;
        /**
         * Raises the @see:cellEditEnding event.
         *
         * @param e @see:CellEditEndingEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onCellEditEnding(e: CellEditEndingEventArgs): boolean;
        /**
         * Occurs when a cell edit has been committed or canceled.
         */
        readonly cellEditEnded: Event;
        /**
         * Raises the @see:cellEditEnded event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onCellEditEnded(e: CellRangeEventArgs): void;
        /**
         * Occurs before a row enters edit mode.
         */
        readonly rowEditStarting: Event;
        /**
         * Raises the @see:rowEditStarting event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onRowEditStarting(e: CellRangeEventArgs): void;
        /**
         * Occurs after a row enters edit mode.
         */
        readonly rowEditStarted: Event;
        /**
         * Raises the @see:rowEditStarted event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onRowEditStarted(e: CellRangeEventArgs): void;
        /**
         * Occurs when a row edit is ending, before the changes are committed or canceled.
         *
         * This event can be used in conjunction with the @see:rowEditStarted event to
         * implement deep-binding edit undos. For example:
         *
         * <pre>// save deep bound values when editing starts
         * var itemData = {};
         * s.rowEditStarted.addHandler(function (s, e) {
         *   var item = s.collectionView.currentEditItem;
         *   itemData = {};
         *   s.columns.forEach(function (col) {
         *     if (col.binding.indexOf('.') &gt; -1) { // deep binding
         *       var binding = new wijmo.Binding(col.binding);
         *       itemData[col.binding] = binding.getValue(item);
         *     }
         *   })
         * });
         *
         * // restore deep bound values when edits are canceled
         * s.rowEditEnded.addHandler(function (s, e) {
         *   if (e.cancel) { // edits were canceled by the user
         *     var item = s.collectionView.currentEditItem;
         *     for (var k in itemData) {
         *       var binding = new wijmo.Binding(k);
         *       binding.setValue(item, itemData[k]);
         *     }
         *   }
         *   itemData = {};
         * });</pre>
         */
        readonly rowEditEnding: Event;
        /**
         * Raises the @see:rowEditEnding event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onRowEditEnding(e: CellRangeEventArgs): void;
        /**
         * Occurs when a row edit has been committed or canceled.
         */
        readonly rowEditEnded: Event;
        /**
         * Raises the @see:rowEditEnded event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onRowEditEnded(e: CellRangeEventArgs): void;
        /**
         * Occurs when the user creates a new item by editing the new row template
         * (see the @see:allowAddNew property).
         *
         * The event handler may customize the content of the new item or cancel
         * the new item creation.
         */
        readonly rowAdded: Event;
        /**
         * Raises the @see:rowAdded event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onRowAdded(e: CellRangeEventArgs): boolean;
        /**
         * Occurs when the user is deleting a selected row by pressing the Delete
         * key (see the @see:allowDelete property).
         *
         * The event handler may cancel the row deletion.
         */
        readonly deletingRow: Event;
        /**
         * Raises the @see:deletingRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDeletingRow(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after the user has deleted a row by pressing the Delete
         * key (see the @see:allowDelete property).
         */
        readonly deletedRow: Event;
        /**
         * Raises the @see:deletedRow event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onDeletedRow(e: CellRangeEventArgs): void;
        /**
         * Occurs when the user is copying the selection content to the
         * clipboard by pressing one of the clipboard shortcut keys
         * (see the @see:autoClipboard property).
         *
         * The event handler may cancel the copy operation.
         */
        readonly copying: Event;
        /**
         * Raises the @see:copying event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onCopying(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after the user has copied the selection content to the
         * clipboard by pressing one of the clipboard shortcut keys
         * (see the @see:autoClipboard property).
         */
        readonly copied: Event;
        /**
         * Raises the @see:copied event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onCopied(e: CellRangeEventArgs): void;
        /**
         * Occurs when the user is pasting content from the clipboard
         * by pressing one of the clipboard shortcut keys
         * (see the @see:autoClipboard property).
         *
         * The event handler may cancel the paste operation.
         */
        readonly pasting: Event;
        /**
         * Raises the @see:pasting event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onPasting(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after the user has pasted content from the
         * clipboard by pressing one of the clipboard shortcut keys
         * (see the @see:autoClipboard property).
         */
        readonly pasted: Event;
        /**
         * Raises the @see:pasted event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onPasted(e: CellRangeEventArgs): void;
        /**
         * Occurs when the user is pasting content from the clipboard
         * into a cell (see the @see:autoClipboard property).
         *
         * The event handler may cancel the paste operation.
         */
        readonly pastingCell: Event;
        /**
         * Raises the @see:pastingCell event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onPastingCell(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after the user has pasted content from the
         * clipboard into a cell (see the @see:autoClipboard property).
         */
        readonly pastedCell: Event;
        /**
         * Raises the @see:pastedCell event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         */
        onPastedCell(e: CellRangeEventArgs): void;
        /**
         * Occurs when an element representing a cell has been created.
         *
         * This event can be used to format cells for display. It is similar
         * in purpose to the @see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         *
         * For example, this code removes the 'wj-wrap' class from cells in
         * group rows:
         *
         * <pre>flex.formatItem.addHandler(function (s, e) {
         *   if (flex.rows[e.row] instanceof wijmo.grid.GroupRow) {
         *     wijmo.removeClass(e.cell, 'wj-wrap');
         *   }
         * });</pre>
         */
        readonly formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatItemEventArgs that contains the event data.
         */
        onFormatItem(e: FormatItemEventArgs): void;
        /**
         * Occurs when the grid starts creating/updating the elements that
         * make up the current view.
         */
        readonly updatingView: Event;
        /**
         * Raises the @see:updatingView event.
         *
         * @param e @see:CancelEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onUpdatingView(e: CancelEventArgs): boolean;
        /**
         * Occurs when the grid finishes creating/updating the elements that
         * make up the current view.
         *
         * The grid updates the view in response to several actions, including:
         *
         * <ul>
         * <li>refreshing the grid or its data source,</li>
         * <li>adding, removing, or changing rows or columns,</li>
         * <li>resizing or scrolling the grid,</li>
         * <li>changing the selection.</li>
         * </ul>
         */
        readonly updatedView: Event;
        /**
         * Raises the @see:updatedView event.
         */
        onUpdatedView(e?: EventArgs): void;
        _getShowErrors(): boolean;
        _getHasValidation(): boolean;
        _getError(p: GridPanel, r: number, c: number): string;
        private _setAria(name, value);
        private _setFocus(force);
        _setFocusNoScroll(e: HTMLElement): void;
        private _getDefaultRowHeight();
        protected _getCollectionView(value: any): collections.ICollectionView;
        private _getCanvasContext();
        private _getWidestRow(p, rowRange, col, ctx);
        private _getDesiredWidth(p, r, c, e);
        private _getDesiredHeight(p, r, c, e);
        _getDesiredRowHeight(panel: GridPanel, r: number, eMeasure: HTMLElement, cache: any): number;
        _getSortRowIndex(): number;
        _mappedColumns: any;
        private _sortConverter(sd, item, value, init);
        protected _bindGrid(full: boolean): void;
        _cvCollectionChanged(sender: any, e: collections.NotifyCollectionChangedEventArgs): void;
        private _cvCurrentChanged(s, e);
        private _syncSelection(force);
        private _getRowIndex(index);
        _getCvIndex(index: number): number;
        private _findRow(data);
        private _updateLayout();
        private _updateStickyHeaders();
        private _updateScrollHandler();
        _getClipToScreen(): boolean;
        private _scroll(e);
        private _updateScrollPosition();
        private _updateContent(recycle, state?);
        private _clearCells();
        _useFrozenDiv(): boolean;
        private _updateFrozenCells(state);
        private _getMarqueeRect(rng);
        _bindColumns(): void;
        _updateColumnTypes(): void;
        _getBindingColumn(p: GridPanel, r: Number, c: Column): Column;
        _getRowHeaderPath(): Binding;
        _bindRows(): void;
        _addBoundRow(items: any[], index: number): void;
        _addNode(items: any[], index: number, level: number): void;
        private _addGroup(g);
        private static _getSerializableProperties(obj);
        _copy(key: string, value: any): boolean;
        _isInputElement(e: any): boolean;
        _wantsInput(e: any): boolean;
        private static _maxCssHeight;
        private static _getMaxSupportedCssHeight();
        static _rtlMode: string;
        private static _getRtlMode();
    }
}

declare module wijmo.grid {
    /**
     * Provides arguments for @see:CellRange events.
     */
    class CellRangeEventArgs extends CancelEventArgs {
        _p: GridPanel;
        _rng: CellRange;
        _data: any;
        /**
         * Initializes a new instance of the @see:CellRangeEventArgs class.
         *
         * @param p @see:GridPanel that contains the range.
         * @param rng Range of cells affected by the event.
         * @param data Data related to the event.
         */
        constructor(p: GridPanel, rng: CellRange, data?: any);
        /**
         * Gets the @see:GridPanel affected by this event.
         */
        readonly panel: GridPanel;
        /**
         * Gets the @see:CellRange affected by this event.
         */
        readonly range: CellRange;
        /**
         * Gets the row affected by this event.
         */
        readonly row: number;
        /**
         * Gets the column affected by this event.
         */
        readonly col: number;
        /**
         * Gets or sets the data associated with the event.
         */
        data: any;
    }
    /**
     * Provides arguments for the @see:FlexGrid.formatItem event.
     */
    class FormatItemEventArgs extends CellRangeEventArgs {
        _cell: HTMLElement;
        /**
        * Initializes a new instance of the @see:FormatItemEventArgs class.
        *
        * @param p @see:GridPanel that contains the range.
        * @param rng Range of cells affected by the event.
        * @param cell Element that represents the grid cell to be formatted.
        */
        constructor(p: GridPanel, rng: CellRange, cell: HTMLElement);
        /**
         * Gets a reference to the element that represents the grid cell to be formatted.
         */
        readonly cell: HTMLElement;
    }
    /**
     * Provides arguments for the @see:FlexGrid.cellEditEnding event.
     */
    class CellEditEndingEventArgs extends CellRangeEventArgs {
        _stayInEditMode: boolean;
        _refresh: boolean;
        /**
         * Gets or sets whether the cell should remain in edit mode instead
         * of finishing the edits.
         */
        stayInEditMode: boolean;
        /**
         * Gets or sets a value that determines whether the grid should refresh
         * all its contents after the edits are done.
         */
        refresh: boolean;
    }
}

declare module wijmo.grid {
    /**
     * Specifies constants that define the type of cell in a @see:GridPanel.
     */
    enum CellType {
        /** Unknown or invalid cell type. */
        None = 0,
        /** Regular data cell. */
        Cell = 1,
        /** Column header cell. */
        ColumnHeader = 2,
        /** Row header cell. */
        RowHeader = 3,
        /** Top-left cell. */
        TopLeft = 4,
        /** Column footer cell. */
        ColumnFooter = 5,
        /** Bottom left cell (at the intersection of the row header and column footer cells). **/
        BottomLeft = 6,
    }
    /**
     * Represents a logical part of the grid, such as the column headers, row headers,
     * and scrollable data part.
     */
    class GridPanel {
        private _g;
        private _ct;
        private _cf;
        private _e;
        private _rows;
        private _cols;
        private _offsetY;
        private _activeCell;
        _vrb: CellRange;
        _vru: CellRange;
        static readonly _INDEX_KEY: string;
        /**
         * Initializes a new instance of the @see:GridPanel class.
         *
         * @param g The @see:FlexGrid object that owns the panel.
         * @param cellType The type of cell in the panel.
         * @param rows The rows displayed in the panel.
         * @param cols The columns displayed in the panel.
         * @param host The HTMLElement that hosts the cells in the control.
         */
        constructor(g: FlexGrid, cellType: CellType, rows: RowCollection, cols: ColumnCollection, host: HTMLElement);
        /**
         * Gets the grid that owns the panel.
         */
        readonly grid: FlexGrid;
        /**
         * Gets the type of cell contained in the panel.
         */
        readonly cellType: CellType;
        /**
         * Gets a @see:CellRange that indicates the range of cells currently visible on the panel.
         */
        readonly viewRange: CellRange;
        /**
         * Gets the total width of the content in the panel.
         */
        readonly width: number;
        /**
         * Gets the total height of the content in this panel.
         */
        readonly height: number;
        /**
         * Gets the panel's row collection.
         */
        readonly rows: RowCollection;
        /**
         * Gets the panel's column collection.
         */
        readonly columns: ColumnCollection;
        /**
         * Gets the value stored in a cell in the panel.
         *
         * @param r The row index of the cell.
         * @param c The index, name, or binding of the column that contains the cell.
         * @param formatted Whether to format the value for display.
         */
        getCellData(r: number, c: any, formatted: boolean): any;
        /**
         * Sets the content of a cell in the panel.
         *
         * @param r The index of the row that contains the cell.
         * @param c The index, name, or binding of the column that contains the cell.
         * @param value The value to store in the cell.
         * @param coerce Whether to change the value automatically to match the column's data type.
         * @param invalidate Whether to invalidate the grid to show the change.
         * @return Returns true if the value is stored successfully, false otherwise (failed cast).
         */
        setCellData(r: number, c: any, value: any, coerce?: boolean, invalidate?: boolean): boolean;
        /**
         * Gets a cell's bounds in viewport coordinates.
         *
         * The returned value is a @see:Rect object which contains the position and dimensions
         * of the cell in viewport coordinates.
         * The viewport coordinates are the same as those used by the
         * <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect"
         * target="_blank">getBoundingClientRect</a> method.
         *
         * @param r The index of the row that contains the cell.
         * @param c The index of the column that contains the cell.
         * @param raw Whether to return the rectangle in raw panel coordinates as opposed to viewport coordinates.
         */
        getCellBoundingRect(r: number, c: number, raw?: boolean): Rect;
        /**
         * Gets the element that represents a cell within this @see:GridPanel.
         *
         * If the cell is not currently in view, this method returns null.
         *
         * @param r The index of the row that contains the cell.
         * @param c The index of the column that contains the cell.
         */
        getCellElement(r: number, c: number): HTMLElement;
        /**
         * Gets a @see:SelectedState value that indicates the selected state of a cell.
         *
         * @param r Row index of the cell to inspect.
         * @param c Column index of the cell to inspect.
         * @param rng @see:CellRange that contains the cell to inspect.
         */
        getSelectedState(r: number, c: number, rng: CellRange): SelectedState;
        /**
         * Gets the host element for the panel.
         */
        readonly hostElement: HTMLElement;
        _getOffsetY(): number;
        _updateContent(recycle: boolean, state: boolean, offsetY: number): HTMLElement;
        _updateScrollPosition(): void;
        _clearCells(): void;
        _reorderCells(rngNew: CellRange, rngOld: CellRange): void;
        _createRange(start: number, end: number): Range;
        _renderColHdrRow(rng: CellRange, state: boolean): number;
        _renderColHdrCell(row: HTMLElement, c: number, rng: CellRange, state: boolean, ctr: number): number;
        _renderRowHdrCell(row: HTMLElement, r: number, value: any): number;
        _renderRow(r: number, rng: CellRange, state: boolean, ctr: number): number;
        _renderCell(row: HTMLElement, r: number, c: number, rng: CellRange, state: boolean, ctr: number): number;
        _removeExtraCells(row: HTMLElement, count: number): void;
        _getViewRange(): CellRange;
        _getFrozenPos(): Point;
    }
}

declare module wijmo.grid {
    /**
     * Creates HTML elements that represent cells within a @see:FlexGrid control.
     */
    class CellFactory {
        static _WJC_COLLAPSE: string;
        static _WJC_DROPDOWN: string;
        static _ddBtn: HTMLElement;
        static _fmtRng: CellRange;
        /**
         * Creates or updates a cell in the grid.
         *
         * @param p The @see:GridPanel that contains the cell.
         * @param r The index of the row that contains the cell.
         * @param c The index of the column that contains the cell.
         * @param cell The element that represents the cell.
         * @param rng The @see:CellRange object that contains the cell's
         * merged range, or null if the cell is not merged.
         * @param updateContent Whether to update the cell's content as
         * well as its position and style.
         */
        updateCell(p: GridPanel, r: number, c: number, cell: HTMLElement, rng?: CellRange, updateContent?: boolean): void;
        /**
         * Disposes of a cell element and releases all resources associated with it.
         *
         * @param cell The element that represents the cell.
         */
        disposeCell(cell: HTMLElement): void;
        /**
         * Gets the value of the editor currently being used.
         *
         * @param g @see:FlexGrid that owns the editor.
         */
        getEditorValue(g: FlexGrid): any;
        private _isEditingCell(g, r, c);
        private _getTreeBtn(gr);
        private _getSortIcon(col);
    }
}

declare module wijmo.grid {
    /**
     * Represents a rectangular group of cells defined by two row indices and
     * two column indices.
     */
    class CellRange {
        _row: number;
        _col: number;
        _row2: number;
        _col2: number;
        /**
         * Initializes a new instance of the @see:CellRange class.
         *
         * @param r The index of the first row in the range (defaults to -1).
         * @param c The index of the first column in the range (defaults to -1).
         * @param r2 The index of the last row in the range (defaults to <b>r</b>).
         * @param c2 The index of the last column in the range (defaults to <b>c</b>).
         */
        constructor(r?: number, c?: number, r2?: number, c2?: number);
        /**
         * Initializes an existing @see:CellRange.
         *
         * @param r The index of the first row in the range (defaults to -1).
         * @param c The index of the first column in the range (defaults to -1).
         * @param r2 The index of the last row in the range (defaults to <b>r</b>).
         * @param c2 The index of the last column in the range (defaults to <b>c</b>).
         */
        setRange(r?: number, c?: number, r2?: number, c2?: number): void;
        /**
         * Gets or sets the index of the first row in the range.
         */
        row: number;
        /**
         * Gets or sets the index of the first column in the range.
         */
        col: number;
        /**
         * Gets or sets the index of the second row in the range.
         */
        row2: number;
        /**
         * Gets or sets the index of the second column in the range.
         */
        col2: number;
        /**
         * Creates a copy of the range.
         */
        clone(): CellRange;
        /**
         * Gets the number of rows in the range.
         */
        readonly rowSpan: number;
        /**
         * Gets the number of columns in the range.
         */
        readonly columnSpan: number;
        /**
         * Gets the index of the top row in the range.
         */
        readonly topRow: number;
        /**
         * Gets the index of the bottom row in the range.
         */
        readonly bottomRow: number;
        /**
         * Gets the index of the leftmost column in the range.
         */
        readonly leftCol: number;
        /**
         * Gets the index of the rightmost column in the range.
         */
        readonly rightCol: number;
        /**
         * Checks whether the range contains valid row and column indices
         * (row and column values are zero or greater).
         */
        readonly isValid: boolean;
        /**
         * Checks whether this range corresponds to a single cell (beginning and ending rows have
         * the same index, and beginning and ending columns have the same index).
         */
        readonly isSingleCell: boolean;
        /**
         * Checks whether the range contains another range or a specific cell.
         *
         * @param r The CellRange object or row index to find.
         * @param c The column index (required if the r parameter is not a CellRange object).
         */
        contains(r: any, c?: number): boolean;
        /**
         * Checks whether the range contains a given row.
         *
         * @param r The index of the row to find.
         */
        containsRow(r: number): boolean;
        /**
         * Checks whether the range contains a given column.
         *
         * @param c The index of the column to find.
         */
        containsColumn(c: number): boolean;
        /**
         * Checks whether the range intersects another range.
         *
         * @param rng The CellRange object to check.
         */
        intersects(rng: CellRange): boolean;
        /**
         * Checks whether the range intersects the rows in another range.
         *
         * @param rng The CellRange object to check.
         */
        intersectsRow(rng: CellRange): boolean;
        /**
         * Checks whether the range intersects the columns in another range.
         *
         * @param rng The CellRange object to check.
         */
        intersectsColumn(rng: CellRange): boolean;
        /**
         * Gets the rendered size of this range.
         *
         * @param p The @see:GridPanel object that contains the range.
         * @return A @see:Size object that represents the sum of row heights and column widths in the range.
         */
        getRenderSize(p: GridPanel): Size;
        /**
         * Checks whether the range equals another range.
         *
         * @param rng The CellRange object to compare to this range.
         */
        equals(rng: CellRange): boolean;
    }
}

declare module wijmo.grid {
    /**
     * Specifies flags that represent the state of a grid row or column.
     */
    enum RowColFlags {
        /** The row or column is visible. */
        Visible = 1,
        /** The row or column can be resized. */
        AllowResizing = 2,
        /** The row or column can be dragged to a new position with the mouse. */
        AllowDragging = 4,
        /** The row or column can contain merged cells. */
        AllowMerging = 8,
        /** The column can be sorted by clicking its header with the mouse. */
        AllowSorting = 16,
        /** The column was generated automatically. */
        AutoGenerated = 32,
        /** The group row is collapsed. */
        Collapsed = 64,
        /** The row has a parent group that is collapsed. */
        ParentCollapsed = 128,
        /** The row or column is selected. */
        Selected = 256,
        /** The row or column is read-only (cannot be edited). */
        ReadOnly = 512,
        /** Cells in this row or column contain HTML text. */
        HtmlContent = 1024,
        /** Cells in this row or column may contain wrapped text. */
        WordWrap = 2048,
        /** Cells in this row or column may contain wrapped text. */
        MultiLine = 4096,
        /** Cells in this column have templates. */
        HasTemplate = 8192,
        /** Default settings for new rows. */
        RowDefault = 3,
        /** Default settings for new columns. */
        ColumnDefault = 23,
    }
    /**
     * An abstract class that serves as a base for the @see:Row and @see:Column classes.
     */
    class RowCol {
        _sz: number;
        _cssClass: string;
        _cssClassAll: string;
        _szMin: number;
        _szMax: number;
        _list: any;
        _f: RowColFlags;
        _pos: number;
        _idx: number;
        _vidx: number;
        /**
         * Gets or sets a value that indicates whether the row or column is visible.
         */
        visible: boolean;
        /**
         * Gets a value that indicates whether the row or column is
         * visible and not collapsed.
         *
         * This property is read-only. To change the visibility of a
         * row or column, use the @see:visible property instead.
         */
        readonly isVisible: boolean;
        /**
         * Gets the position of the row or column.
         */
        readonly pos: number;
        /**
         * Gets the index of the row or column in the parent collection.
         */
        readonly index: number;
        /**
         * Gets the index of the row or column in the parent collection
         * ignoring invisible elements (@see:isVisible).
         */
        readonly visibleIndex: number;
        /**
         * Gets or sets the size of the row or column.
         *
         * Setting this property to null or negative values causes
         * the element to use the parent collection's default size.
         */
        size: number;
        /**
         * Gets the render size of the row or column.
         *
         * This property accounts for visibility, default size,
         * and min and max sizes.
         */
        readonly renderSize: number;
        /**
         * Gets or sets a value that indicates whether the user can resize
         * the row or column with the mouse.
         *
         * The default value for this property is <b>true</b>.
         */
        allowResizing: boolean;
        /**
         * Gets or sets a value that indicates whether the user can move the row or column to a new position with the mouse.
         *
         * The default value for this property is <b>true</b>.
         */
        allowDragging: boolean;
        /**
         * Gets or sets a value that indicates whether cells in the
         * row or column can be merged.
         *
         * The default value for this property is <b>false</b>.
         */
        allowMerging: boolean;
        /**
         * Gets or sets a value that indicates whether the row or column
         * is selected.
         */
        isSelected: boolean;
        /**
         * Gets or sets a value that indicates whether cells in the
         * row or column can be edited.
         *
         * The default value for this property is <b>true</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets a value that indicates whether cells in this row or column
         * contain HTML content rather than plain text.
         *
         * This property only applies to regular cells. Row and column header
         * cells contain plain text by default. If you want to display HTML
         * in row or column headers, you must use the @see:FlexGrid.formatItem
         * event and set the cell's innerHTML content in code.
         *
         * The default value for this property is <b>false</b>.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a value that indicates whether the content of cells in
         * this row or column should wrap to fit the available column width.
         *
         * The default value for this property is <b>false</b>.
         */
        wordWrap: boolean;
        /**
         * Gets or sets a value that indicates whether the content of cells in
         * this row or column should wrap at new line characters (\n).
         *
         * The default value for this property is <b>false</b>.
         */
        multiLine: boolean;
        /**
         * Gets or sets a CSS class name to use when rendering
         * data (non-header) cells in the row or column.
         */
        cssClass: string;
        /**
         * Gets or sets a CSS class name to use when rendering
         * all cells (data and headers) in the row or column.
         */
        cssClassAll: string;
        /**
         * Gets the @see:FlexGrid that owns this row or column.
         */
        readonly grid: FlexGrid;
        /**
         * Gets the @see:ICollectionView bound to this row or column.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Marks the owner list as dirty and refreshes the owner grid.
         */
        onPropertyChanged(): void;
        _getFlag(flag: RowColFlags): boolean;
        _setFlag(flag: RowColFlags, value: boolean, quiet?: boolean): boolean;
    }
    /**
     * Represents a column on the grid.
     */
    class Column extends RowCol {
        private static _ctr;
        private _hdr;
        private _name;
        private _type;
        private _align;
        private _map;
        private _fmt;
        private _agg;
        private _inpType;
        private _mask;
        private _maxLen;
        private _required;
        private _showDropDown;
        private _ddCssClass;
        private _quickSize;
        private _descById;
        _binding: Binding;
        _bindingSort: Binding;
        _szStar: string;
        _hash: string;
        /**
         * Initializes a new instance of the @see:Column class.
         *
         * @param options Initialization options for the column.
         */
        constructor(options?: any);
        /**
         * Gets or sets the name of the column.
         *
         * The column name can be used to retrieve the column using the
         * @see:FlexGrid.getColumn method.
         */
        name: string;
        /**
         * Gets or sets the type of value stored in the column.
         *
         * Values are coerced into the proper type when editing the grid.
         */
        dataType: DataType;
        /**
         * Gets or sets a value that determines whether values in the column
         * are required.
         *
         * By default, this property is set to null, which means values
         * are required, but non-masked string columns may contain empty
         * strings.
         *
         * When set to true, values are required and empty strings are
         * not allowed.
         *
         * When set to false, null values and empty strings are allowed.
         */
        isRequired: boolean;
        /**
         * Gets or sets a value that indicates whether the grid adds drop-down
         * buttons to the cells in this column.
         *
         * The drop-down buttons are shown only if the column has a @see:dataMap
         * set and is editable. Clicking on the drop-down buttons causes the grid
         * to show a list where users can select the value for the cell.
         *
         * Cell drop-downs require the wijmo.input module to be loaded.
         *
         * The default value for this property is <b>true</b>.
         */
        showDropDown: boolean;
        /**
         * Gets or sets a CSS class name to add to drop-downs in this column.
         *
         * The drop-down buttons are shown only if the column has a @see:dataMap
         * set and is editable. Clicking on the drop-down buttons causes the grid
         * to show a list where users can select the value for the cell.
         *
         * Cell drop-downs require the wijmo.input module to be loaded.
         */
        dropDownCssClass: string;
        /**
         * Gets or sets the "type" attribute of the HTML input element used to
         * edit values in this column.
         *
         * By default, this property is set to "tel" for numeric columns, and to
         * "text" for all other non-boolean column types. The "tel" input type
         * causes mobile devices to show a numeric keyboard that includes a negative
         * sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not
         * work well for the current culture, device, or application.
         * In these cases, try setting the property to "number" or simply "text."
         */
        inputType: string;
        /**
         * Gets or sets a mask to use while editing values in this column.
         *
         * The mask format is the same used by the @see:wijmo.input.InputMask
         * control.
         *
         * If specified, the mask must be compatible with the value of
         * the @see:format property. For example, the mask '99/99/9999' can
         * be used for entering dates formatted as 'MM/dd/yyyy'.
         */
        mask: string;
        /**
         * Gets or sets the maximum number of characters that the can
         * be entered into the cell.
         *
         * This property is set to null by default, which allows entries
         * with any number of characters.
         */
        maxLength: number;
        /**
         * Gets or sets the name of the property the column is bound to.
         */
        binding: string;
        /**
         * Gets or sets the name of the property to use when sorting this column.
         *
         * Use this property in cases where you want the sorting to be performed
         * based on values other than the ones specified by the @see:binding property.
         *
         * Setting this property is null causes the grid to use the value of the
         * @see:binding property to sort the column.
         */
        sortMemberPath: string;
        /**
         * Gets or sets the width of the column.
         *
         * Column widths may be positive numbers (sets the column width in pixels),
         * null or negative numbers (uses the collection's default column width), or
         * strings in the format '{number}*' (star sizing).
         *
         * The star-sizing option performs a XAML-style dynamic sizing where column
         * widths are proportional to the number before the star. For example, if
         * a grid has three columns with widths "100", "*", and "3*", the first column
         * will be 100 pixels wide, the second will take up 1/4th of the remaining
         * space, and the last will take up the remaining 3/4ths of the remaining space.
         *
         * Star-sizing allows you to define columns that automatically stretch to fill
         * the width available. For example, set the width of the last column to "*"
         * and it will automatically extend to fill the entire grid width so there's
         * no empty space. You may also want to set the column's @see:minWidth property
         * to prevent the column from getting too narrow.
         */
        width: any;
        /**
         * Gets or sets the minimum width of the column.
         *
         * This property is set to null by default, which means there
         * is the minimum width is zero.
         */
        minWidth: number;
        /**
         * Gets or sets the maximum width (in pixels) of the column.
         *
         * This property is set to null by default, which means there
         * is no maximum width.
         */
        maxWidth: number;
        /**
         * Gets or sets a value that determines whether the grid should optimize
         * performance over precision when auto-sizing this column.
         *
         * Setting this property to false disables quick auto-sizing for this column.
         * Setting it to true enables the feature, subject to the value of the grid's
         * @see:wijmo.grid.FlexGrid.quickAutoSize property.
         * Setting it to null (the default value) enables the feature for columns
         * that display plain text and don't have templates.
         */
        quickAutoSize: boolean;
        private _getQuickAutoSize();
        /**
         * Gets the render width of the column.
         *
         * The value returned takes into account the column's visibility, default size, and min and max sizes.
         */
        readonly renderWidth: number;
        /**
         * Gets or sets the horizontal alignment of items in the column.
         *
         * The default value for this property is null, which causes the grid to select
         * the alignment automatically based on the column's @see:dataType (numbers are
         * right-aligned, Boolean values are centered, and other types are left-aligned).
         *
         * If you want to override the default alignment, set this property
         * to 'left', 'right', or 'center'.
         */
        align: string;
        /**
         * Gets the actual column alignment.
         *
         * Returns the value of the @see:align property if it is not null, or
         * selects the alignment based on the column's @see:dataType.
         */
        getAlignment(): string;
        /**
         * Gets a value that determines whether the column is required.
         *
         * Returns the value of the @see:isRequired property if it is not null, or
         * determines the required status based on the column's @see:dataType.
         *
         * By default, string columns are not required unless they have an associated
         * @see:dataMap or @see:mask; all other data types are required.
         */
        getIsRequired(): boolean;
        /**
         * Gets or sets the text displayed in the column header.
         */
        header: string;
        /**
         * Gets or sets the @see:DataMap used to convert raw values into display
         * values for the column.
         *
         * Columns with an associated @see:dataMap show drop-down buttons that
         * can be used for quick editing. If you do not want to show the drop-down
         * buttons, set the column's @see:showDropDown property to false.
         *
         * Cell drop-downs require the wijmo.input module to be loaded.
         */
        dataMap: DataMap;
        /**
         * Gets or sets the format string used to convert raw values into display
         * values for the column (see @see:Globalize).
         */
        format: string;
        /**
         * Gets or sets a value that indicates whether the user can sort the column by clicking its header.
         */
        allowSorting: boolean;
        /**
         * Gets a string that describes the current sorting applied to the column.
         * Possible values are '+' for ascending order, '-' for descending order, or
         * null for unsorted columns.
         */
        readonly currentSort: string;
        /**
         * Gets or sets the @see:Aggregate to display in the group header rows
         * for the column.
         */
        aggregate: Aggregate;
        /**
         * Gets or sets the ID of an element that contains a description
         * of the column.
         *
         * The ID is used as the value of the <b>aria-describedby</b>
         * attribute for the column header element.
         */
        describedById: string;
        _getBindingSort(): string;
        static _parseStarSize(value: any): number;
    }
    /**
     * Represents a row in the grid.
     */
    class Row extends RowCol {
        private _data;
        _ubv: any;
        /**
         * Initializes a new instance of the @see:Row class.
         *
         * @param dataItem The data item that this row is bound to.
         */
        constructor(dataItem?: any);
        /**
         * Gets or sets the item in the data collection that the item is bound to.
         */
        dataItem: any;
        /**
         * Gets or sets the height of the row.
         * Setting this property to null or negative values causes the element to use the
         * parent collection's default size.
         */
        height: number;
        /**
         * Gets the render height of the row.
         *
         * The value returned takes into account the row's visibility, default size, and min and max sizes.
         */
        readonly renderHeight: number;
    }
    /**
     * Represents a row that serves as a header for a group of rows.
     */
    class GroupRow extends Row {
        _level: number;
        /**
         * Initializes a new instance of the @see:GroupRow class.
         */
        constructor();
        /**
         * Gets or sets the hierarchical level of the group associated with the GroupRow.
         */
        level: number;
        /**
         * Gets a value that indicates whether the group row has child rows.
         */
        readonly hasChildren: boolean;
        /**
         * Gets or sets a value that indicates whether the GroupRow is collapsed
         * (child rows are hidden) or expanded (child rows are visible).
         */
        isCollapsed: boolean;
        /**
         * Gets the header text for this @see:GroupRow.
         */
        getGroupHeader(): string;
        _setCollapsed(collapsed: boolean): void;
        /**
         * Gets a @see:CellRange object that contains all of the rows in the group represented
         * by this @see:GroupRow and all of the columns in the grid.
         */
        getCellRange(): CellRange;
    }
    /**
     * Abstract class that serves as a base for row and column collections.
     */
    class RowColCollection extends collections.ObservableArray {
        _g: FlexGrid;
        _frozen: number;
        _vlen: number;
        _szDef: number;
        _szTot: number;
        _szCustom: boolean;
        _dirty: boolean;
        _szMin: number;
        _szMax: number;
        /**
         * Initializes a new instance of the @see:RowColCollection class.
         *
         * @param g The @see:FlexGrid that owns the collection.
         * @param defaultSize The default size of the elements in the collection.
         */
        constructor(g: FlexGrid, defaultSize: number);
        /**
         * Gets the @see:FlexGrid that owns this collection.
         */
        readonly grid: FlexGrid;
        /**
         * Gets or sets the default size of elements in the collection.
         */
        defaultSize: number;
        /**
         * Gets or sets the number of frozen rows or columns in the collection.
         *
         * Frozen rows and columns do not scroll, and instead remain at the top or left of
         * the grid, next to the fixed cells. Unlike fixed cells, however, frozen
         * cells may be selected and edited like regular cells.
         */
        frozen: number;
        /**
         * Checks whether a row or column is frozen.
         *
         * @param index The index of the row or column to check.
         */
        isFrozen(index: number): boolean;
        /**
         * Gets or sets the minimum size of elements in the collection.
         */
        minSize: number;
        /**
         * Gets or sets the maximum size of elements in the collection.
         */
        maxSize: number;
        /**
         * Gets the total size of the elements in the collection.
         */
        getTotalSize(): number;
        /**
         * Gets the number of visible elements in the collection (@see:Row.isVisible).
         */
        readonly visibleLength: number;
        /**
         * Gets the index of the element at a given physical position.
         * @param position Position of the item in the collection, in pixels.
         */
        getItemAt(position: number): number;
        /**
         * Finds the next visible cell for a selection change.
         * @param index Starting index for the search.
         * @param move Type of move (size and direction).
         * @param pageSize Size of a page (in case the move is a page up/down).
         */
        getNextCell(index: number, move: SelMove, pageSize: number): any;
        /**
         * Checks whether an element can be moved from one position to another.
         *
         * @param src The index of the element to move.
         * @param dst The position to which to move the element, or specify -1 to append the element.
         * @return Returns true if the move is valid, false otherwise.
         */
        canMoveElement(src: number, dst: number): boolean;
        /**
         * Moves an element from one position to another.
         * @param src Index of the element to move.
         * @param dst Position where the element should be moved to (-1 to append).
         */
        moveElement(src: number, dst: number): void;
        /**
         * Keeps track of dirty state and invalidate grid on changes.
         */
        onCollectionChanged(e?: collections.NotifyCollectionChangedEventArgs): void;
        /**
         * Appends an item to the array.
         *
         * @param item Item to add to the array.
         * @return The new length of the array.
         */
        push(item: any): number;
        /**
         * Removes or adds items to the array.
         *
         * @param index Position where items are added or removed.
         * @param count Number of items to remove from the array.
         * @param item Item to add to the array.
         * @return An array containing the removed elements.
         */
        splice(index: number, count: number, item?: any): any[];
        /**
         * Suspends notifications until the next call to @see:endUpdate.
         */
        beginUpdate(): void;
        _setDefaultSize(value: number): void;
        _update(): boolean;
    }
    /**
     * Represents a collection of @see:Column objects in a @see:FlexGrid control.
     */
    class ColumnCollection extends RowColCollection {
        _firstVisible: number;
        _descById: string;
        /**
         * Gets a column by name or by binding.
         *
         * The method searches the column by name. If a column with the given name
         * is not found, it searches by binding. The searches are case-sensitive.
         *
         * @param name The name or binding to find.
         * @return The column with the specified name or binding, or null if not found.
         */
        getColumn(name: string): Column;
        /**
         * Gets the index of a column by name or binding.
         *
         * The method searches the column by name. If a column with the given name
         * is not found, it searches by binding. The searches are case-sensitive.
         *
         * @param name The name or binding to find.
         * @return The index of column with the specified name or binding, or -1 if not found.
         */
        indexOf(name: any): number;
        /**
         * Gets or sets the ID of an element that contains a description
         * of the column headers.
         *
         * The ID is used as the value of the <b>aria-describedby</b>
         * attribute for all column header elements. For column-specific
         * descriptions, use the column's @see:Column.describedById instead.
         */
        describedById: string;
        /**
         * Gets the index of the first visible column (where the outline tree is displayed).
         */
        readonly firstVisibleIndex: number;
        _update(): boolean;
        _updateStarSizes(szAvailable: number): boolean;
    }
    /**
     * Represents a collection of @see:Row objects in a @see:FlexGrid control.
     */
    class RowCollection extends RowColCollection {
        _maxLevel: number;
        _ariaLabel: string;
        /**
         * Gets or sets a string used as an ARIA label for all rows in this
         * collection.
         *
         * For example, the code below adds ARIA labels to the header and
         * data rows:
         *
         * <pre>
         * grid.rows.ariaLabel = 'data row';
         * grid.columnHeaders.rows.ariaLabel = 'header row';
         * </pre>
         */
        ariaLabel: string;
        /**
         * Gets the maximum group level in the grid.
         *
         * @return The maximum group level or -1 if the grid has no group rows.
         */
        readonly maxGroupLevel: number;
        _update(): boolean;
    }
}

declare module wijmo.grid {
    /**
     * Contains information about the part of a @see:FlexGrid control
     * at a given position on the page.
     */
    class HitTestInfo {
        _g: FlexGrid;
        _p: GridPanel;
        _pt: Point;
        _row: number;
        _col: number;
        _rng: CellRange;
        _edge: number;
        static _SZEDGE: number[];
        /**
         * Initializes a new instance of the @see:wijmo.grid.HitTestInfo class.
         *
         * @param grid The @see:FlexGrid control, @see:GridPanel, or cell element
         * to investigate.
         * @param pt The @see:Point object in page coordinates to investigate.
         */
        constructor(grid: any, pt: any);
        /**
         * Gets the point in control coordinates that this @see:wijmo.grid.HitTestInfo refers to.
         */
        readonly point: Point;
        /**
         * Gets the type of cell found at the specified position.
         */
        readonly cellType: CellType;
        /**
         * Gets the @see:GridPanel that this @see:HitTestInfo refers to.
         */
        readonly panel: GridPanel;
        /**
         * Gets the @see:FlexGrid that this @see:HitTestInfo refers to.
         */
        readonly grid: FlexGrid;
        /**
         * Gets the row index of the cell at the specified position.
         */
        readonly row: number;
        /**
         * Gets the column index of the cell at the specified position.
         */
        readonly col: number;
        /**
         * Gets the cell range at the specified position.
         */
        readonly range: CellRange;
        /**
         * Gets a value that indicates whether the mouse is near the left edge of the cell.
         */
        readonly edgeLeft: boolean;
        /**
         * Gets a value that indicates whether the mouse is near the top edge of the cell.
         */
        readonly edgeTop: boolean;
        /**
         * Gets a value that indicates whether the mouse is near the right edge of the cell.
         */
        readonly edgeRight: boolean;
        /**
         * Gets a value that indicates whether the mouse is near the bottom edge of the cell.
         */
        readonly edgeBottom: boolean;
    }
}

declare module wijmo.grid {
    /**
     * Specifies constants that define which areas of the grid support cell merging.
     */
    enum AllowMerging {
        /** No merging. */
        None = 0,
        /** Merge scrollable cells. */
        Cells = 1,
        /** Merge column headers. */
        ColumnHeaders = 2,
        /** Merge row headers. */
        RowHeaders = 4,
        /** Merge column and row headers. */
        AllHeaders = 6,
        /** Merge all areas. */
        All = 7,
    }
    /**
     * Defines the @see:FlexGrid's cell merging behavior.
     *
     * An instance of this class is automatically created and assigned to
     * the grid's @see:FlexGrid.mergeManager property to implement the
     * grid's default merging behavior.
     *
     * If you want to customize the default merging behavior, create a class
     * that derives from @see:MergeManager and override the @see:getMergedRange
     * method.
     */
    class MergeManager {
        _g: FlexGrid;
        /**
         * Initializes a new instance of the @see:MergeManager class.
         *
         * @param g The @see:FlexGrid object that owns this @see:MergeManager.
         */
        constructor(g: FlexGrid);
        /**
         * Gets a @see:CellRange that specifies the merged extent of a cell
         * in a @see:GridPanel.
         *
         * @param p The @see:GridPanel that contains the range.
         * @param r The index of the row that contains the cell.
         * @param c The index of the column that contains the cell.
         * @param clip Whether to clip the merged range to the grid's current view range.
         * @return A @see:CellRange that specifies the merged range, or null if the cell is not merged.
         */
        getMergedRange(p: GridPanel, r: number, c: number, clip?: boolean): CellRange;
        private _mergeCell(p, r1, c1, r2, c2);
    }
}

declare module wijmo.grid {
    /**
     * Represents a data map for use with a column's @see:Column.dataMap property.
     *
     * Data maps provide the grid with automatic look up capabilities. For example,
     * you may want to display a customer name instead of his ID, or a color name
     * instead of its RGB value.
     *
     * The code below binds a grid to a collection of products, then assigns a
     * @see:DataMap to the grid's 'CategoryID' column so the grid displays the
     * category names rather than the raw IDs.
     *
     * The grid takes advantage of data maps also for editing. If the <b>wijmo.input</b>
     * module is loaded, then when editing data-mapped columns the grid will show
     * a drop-down list containing the values on the map.
     *
     * <pre>
     * // bind grid to products
     * var flex = new wijmo.grid.FlexGrid();
     * flex.itemsSource = products;
     * // map CategoryID column to show category name instead of ID
     * var col = flex.columns.getColumn('CategoryID');
     * col.dataMap = new wijmo.grid.DataMap(categories, 'CategoryID', 'CategoryName');
     * </pre>
     *
     * In general, data maps apply to whole columns. However, there are situations
     * where you may want to restrict the options available for a cell based on a
     * value on a different column. For example, if you have "Country" and "City"
     * columns, you will probably want to restrict the cities based on the current
     * country.
     *
     * There are two ways you can implement these "dynamic" data maps:
     *
     * <ol>
     *   <li>
     *     If the @see:DataMap is just a list of strings, you can change it before
     *     the grid enters edit mode. In this case, the cells contain the string
     *     being displayed, and changing the map won't affect other cells in the
     *     same column.
     *     This fiddle demonstrates:
     *     <a href="http://jsfiddle.net/Wijmo5/8brL80r8/">show me</a>.
     *   </li>
     *   <li>
     *     If the @see:DataMap is a real map (stores key values in the cells, shows
     *     a corresponding string), then you can apply a filter to restrict the
     *     values shown in the drop-down. The @see:DataMap will still contain the
     *     same keys and values, so other cells in the same column won't be disturbed
     *     by the filter.
     *     This fiddle demonstrates:
     *     <a href="http://jsfiddle.net/Wijmo5/xborLd4t/">show me</a>.
     *   </li>
     * </ol>
     *
     * In some cases, you may want to create a @see:DataMap to represent an enumeration.
     * This can be done with the following code:
     *
     * <pre>// build a DataMap for a given enum
     *  function getDataMap(enumClass) {
     *      var pairs = [];
     *      for (var key in enumClass) {
     *          var val = parseInt(key);
     *          if (!isNaN(val)) {
     *              pairs.push({ key: val, name: enumClass[val] });
     *          }
     *      }
     *      return new wijmo.grid.DataMap(pairs, 'key', 'name');
     * }</pre>
     */
    class DataMap {
        _cv: collections.ICollectionView;
        _keyPath: string;
        _displayPath: string;
        _editable: boolean;
        _sortByKey: boolean;
        _hash: any;
        /**
         * Initializes a new instance of the @see:DataMap class.
         *
         * @param itemsSource An array or @see:ICollectionView that contains the items to map.
         * @param selectedValuePath The name of the property that contains the keys (data values).
         * @param displayMemberPath The name of the property to use as the visual representation of the items.
         */
        constructor(itemsSource: any, selectedValuePath?: string, displayMemberPath?: string);
        /**
         * Gets or sets a value that determines whether to use mapped (display)
         * or raw values when sorting the data.
         */
        sortByDisplayValues: boolean;
        /**
         * Gets the @see:ICollectionView object that contains the map data.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets the name of the property to use as a key for the item (data value).
         */
        readonly selectedValuePath: string;
        /**
         * Gets the name of the property to use as the visual representation of the item.
         */
        readonly displayMemberPath: string;
        /**
         * Gets the key that corresponds to a given display value.
         *
         * @param displayValue The display value of the item to retrieve.
         */
        getKeyValue(displayValue: string): any;
        /**
         * Gets the display value that corresponds to a given key.
         *
         * @param key The key of the item to retrieve.
         */
        getDisplayValue(key: any): any;
        /**
         * Gets an array with all of the display values on the map.
         *
         * @param dataItem Data item for which to get the display items.
         * This parameter is optional. If not provided, all possible display
         * values should be returned.
         */
        getDisplayValues(dataItem?: any): string[];
        /**
         * Gets an array with all of the keys on the map.
         */
        getKeyValues(): string[];
        /**
         * Gets or sets a value that indicates whether users should be allowed to enter
         * values that are not present on the @see:DataMap.
         *
         * In order for a @see:DataMap to be editable, the @see:selectedValuePath and
         * @see:displayMemberPath must be set to the same value.
         */
        isEditable: boolean;
        /**
         * Occurs when the map data changes.
         */
        readonly mapChanged: Event;
        /**
         * Raises the @see:mapChanged event.
         */
        onMapChanged(e?: EventArgs): void;
        private _indexOf(value, path, caseSensitive);
    }
}

declare module wijmo.grid {
    /**
     * Specifies constants that define the selection behavior.
     */
    enum SelectionMode {
        /** The user cannot select cells using the mouse or keyboard. */
        None = 0,
        /** The user can select only a single cell at a time. */
        Cell = 1,
        /** The user can select contiguous blocks of cells. */
        CellRange = 2,
        /** The user can select a single row at a time. */
        Row = 3,
        /** The user can select contiguous rows. */
        RowRange = 4,
        /** The user can select non-contiguous rows. */
        ListBox = 5,
    }
    /**
     * Specifies constants that represent the selected state of a cell.
     */
    enum SelectedState {
        /** The cell is not selected. */
        None = 0,
        /** The cell is selected but is not the active cell. */
        Selected = 1,
        /** The cell is selected and is the active cell. */
        Cursor = 2,
        /** The cell is active cell but not in a selected state. */
        Active = 3,
    }
    /**
     * Specifies constants that represent a type of movement for the selection.
     */
    enum SelMove {
        /** Do not change the selection. */
        None = 0,
        /** Select the next visible cell. */
        Next = 1,
        /** Select the previous visible cell. */
        Prev = 2,
        /** Select the first visible cell in the next page. */
        NextPage = 3,
        /** Select the first visible cell in the previous page. */
        PrevPage = 4,
        /** Select the first visible cell. */
        Home = 5,
        /** Select the last visible cell. */
        End = 6,
        /** Select the next visible cell skipping rows if necessary. */
        NextCell = 7,
        /** Select the previous visible cell skipping rows if necessary. */
        PrevCell = 8,
    }
    /**
     * Handles the grid's selection.
     */
    class _SelectionHandler {
        private _g;
        private _sel;
        private _mode;
        /**
         * Initializes a new instance of the @see:_SelectionHandler class.
         *
         * @param g @see:FlexGrid that owns this @see:_SelectionHandler.
         */
        constructor(g: FlexGrid);
        /**
         * Gets or sets the current selection mode.
         */
        selectionMode: SelectionMode;
        /**
         * Gets or sets the current selection.
         */
        selection: CellRange;
        /**
         * Selects a cell range and optionally scrolls it into view.
         *
         * @param rng Range to select.
         * @param show Whether to scroll the new selection into view.
         */
        select(rng: any, show?: any): void;
        /**
         * Moves the selection by a specified amount in the vertical and horizontal directions.
         * @param rowMove How to move the row selection.
         * @param colMove How to move the column selection.
         * @param extend Whether to extend the current selection or start a new one.
         */
        moveSelection(rowMove: SelMove, colMove: SelMove, extend: boolean): void;
        private _getReferenceCell(rowMove, colMove, extend);
        _adjustSelection(rng: CellRange): CellRange;
    }
}

declare module wijmo.grid {
    /**
     * Specifies constants that define the action to perform when special
     * keys such as ENTER and TAB are pressed.
     */
    enum KeyAction {
        /** No special action (let the browser handle the key). */
        None = 0,
        /** Move the selection to the next row. */
        MoveDown = 1,
        /** Move the selection to the next column. */
        MoveAcross = 2,
        /** Move the selection to the next column, then wrap to the next row. */
        Cycle = 3,
        /** Move the selection to the next column, then wrap to the next row, then out of the control. */
        CycleOut = 4,
    }
    /**
     * Handles the grid's keyboard commands.
     */
    class _KeyboardHandler {
        _g: FlexGrid;
        _altDown: boolean;
        _kaTab: KeyAction;
        _kaEnter: KeyAction;
        _search: string;
        _toSearch: any;
        /**
         * Initializes a new instance of the @see:_KeyboardHandler class.
         *
         * @param g @see:FlexGrid that owns this @see:_KeyboardHandler.
         */
        constructor(g: FlexGrid);
        _keydown(e: KeyboardEvent): void;
        _performKeyAction(action: KeyAction, shift: boolean): boolean;
        private _keypress(e);
        private _findNext(row, col);
        private _moveSel(rowMove, colMove, extend);
        private _deleteSel(evt);
        private _startEditing(fullEdit, evt, r?, c?);
    }
}

declare module wijmo.grid {
    /**
     * Specifies constants that define the row/column sizing behavior.
     */
    enum AllowResizing {
        /** The user may not resize rows or columns. */
        None = 0,
        /** The user may resize columns by dragging the edge of the column headers. */
        Columns = 1,
        /** The user may resize rows by dragging the edge of the row headers. */
        Rows = 2,
        /** The user may resize rows and columns by dragging the edge of the headers. */
        Both = 3,
        /** The user may resize columns by dragging the edge of any cell. */
        ColumnsAllCells,
        /** The user may resize rows by dragging the edge of any cell. */
        RowsAllCells,
        /** The user may resize rows and columns by dragging the edge of any cell. */
        BothAllCells,
    }
    /**
     * Specifies constants that define the row/column auto-sizing behavior.
     */
    enum AutoSizeMode {
        /** Autosizing is disabled. */
        None = 0,
        /** Autosizing accounts for header cells. */
        Headers = 1,
        /** Autosizing accounts for data cells. */
        Cells = 2,
        /** Autosizing accounts for header and data cells. */
        Both = 3,
    }
    /**
     * Specifies constants that define the row/column dragging behavior.
     */
    enum AllowDragging {
        /** The user may not drag rows or columns. */
        None = 0,
        /** The user may drag columns. */
        Columns = 1,
        /** The user may drag rows. */
        Rows = 2,
        /** The user may drag rows and columns. */
        Both = 3,
    }
    /**
     * Handles the grid's mouse commands.
     */
    class _MouseHandler {
        _g: FlexGrid;
        _htDown: HitTestInfo;
        _htDrag: HitTestInfo;
        _selDown: CellRange;
        _tsLast: number;
        _isDown: boolean;
        _eMouse: MouseEvent;
        _lbSelState: boolean;
        _lbSelRows: Object;
        _szRowCol: RowCol;
        _szStart: number;
        _szArgs: CellRangeEventArgs;
        _dragSrc: any;
        _dvMarker: HTMLElement;
        _rngTarget: CellRange;
        _updating: boolean;
        static _SZ_MIN: number;
        /**
         * Initializes a new instance of the @see:_MouseHandler class.
         *
         * @param g @see:FlexGrid that owns this @see:_MouseHandler.
         */
        constructor(g: FlexGrid);
        /**
         * Resets the mouse state.
         */
        resetMouseState(): void;
        private _enableTouchResizing();
        private _mousedown(e);
        private _mousemove(e);
        private _mouseup(e);
        private _click(e);
        private _handleClick(e);
        private _clickSort(e, ht);
        private _dblclick(e);
        private _hover(e);
        private _getResizeCol(ht);
        private _getResizeRow(ht);
        private _mouseSelect(e, extend);
        private _handleResizing(e);
        private _dragstart(e);
        private _dragend(e);
        private _dragover(e);
        private _drop(e);
        private _hitTest(e);
        private _showResizeMarker(sz);
        private _showDragMarker(ht);
        private _finishResizing(e);
        private _startListBoxSelection(row);
        private _handleSelection(ht, extend);
    }
}

declare module wijmo.grid {
    /**
     * Handles the grid's editing.
     */
    class _EditHandler {
        _g: FlexGrid;
        _rng: CellRange;
        _edt: HTMLInputElement;
        _edItem: any;
        _lbx: input.ListBox;
        _fullEdit: boolean;
        _list: any;
        _evtInput: any;
        _evtChange: any;
        _edtValue: string;
        /**
         * Initializes a new instance of the @see:_EditHandler class.
         *
         * @param g @see:FlexGrid that owns this @see:_EditHandler.
         */
        constructor(g: FlexGrid);
        /**
         * Starts editing a given cell.
         *
         * @param fullEdit Whether to stay in edit mode when the user presses the cursor keys. Defaults to false.
         * @param r Index of the row to be edited. Defaults to the currently selected row.
         * @param c Index of the column to be edited. Defaults to the currently selected column.
         * @param focus Whether to give the editor the focus. Defaults to true.
         * @param evt Event that triggered this action (usually a keypress or keydown).
         * @return True if the edit operation started successfully.
         */
        startEditing(fullEdit?: boolean, r?: number, c?: number, focus?: boolean, evt?: any): boolean;
        /**
         * Commits any pending edits and exits edit mode.
         *
         * @param cancel Whether pending edits should be canceled or committed.
         * @return True if the edit operation finished successfully.
         */
        finishEditing(cancel?: boolean): boolean;
        /**
         * Gets the <b>HTMLInputElement</b> that represents the cell editor currently active.
         */
        readonly activeEditor: HTMLInputElement;
        /**
         * Gets a @see:CellRange that identifies the cell currently being edited.
         */
        readonly editRange: CellRange;
        /**
         * Gets the content of a @see:CellRange as a string suitable for
         * copying to the clipboard.
         *
         * Hidden rows and columns are not included in the clip string.
         *
         * @param rng @see:CellRange to copy. If omitted, the current selection is used.
         * @param csv Whether to use the CSV format (comma-delimited cells).
         * @param headers Whether to include the column headers.
         */
        getClipString(rng?: CellRange, csv?: boolean, headers?: boolean): string;
        protected _getCellClipString(cell: string, csv: boolean): string;
        /**
         * Parses a string into rows and columns and applies the content to a given range.
         *
         * Hidden rows and columns are skipped.
         *
         * @param text Tab and newline delimited text to parse into the grid.
         * @param rng @see:CellRange to copy. If omitted, the current selection is used.
         */
        setClipString(text: string, rng?: CellRange): boolean;
        _isNativeCheckbox(edt: any): boolean;
        _parseClipString(text: string): string[][];
        private _parseClipCell(rows, text, start, end, newRow);
        _expandClipRows(rows: string[][], rng: CellRange): void;
        private _updateEditorCell(r, c, updateHdr);
        private _updateCell(cell);
        private _getValidationError();
        _allowEditing(r: number, c: number): boolean;
        _commitRowEdits(): void;
        _keydown(e: KeyboardEvent): boolean;
        private _keydownListBox(e);
        _keypress(e: KeyboardEvent): void;
        _findString(items: string[], text: string, caseSensitive: boolean): number;
        _toggleListBox(evt: any, rng?: CellRange): boolean;
        private _createListBox();
        private _removeListBox();
    }
}

declare module wijmo.grid {
    /**
     * Manages the new row template used to add rows to the grid.
     */
    class _AddNewHandler {
        protected _g: FlexGrid;
        protected _nrt: _NewRowTemplate;
        protected _keydownBnd: any;
        protected _top: boolean;
        protected _committing: boolean;
        /**
         * Initializes a new instance of the @see:_AddNewHandler class.
         *
         * @param g @see:FlexGrid that owns this @see:_AddNewHandler.
         */
        constructor(g: FlexGrid);
        /**
         * Gets or sets a value that indicates whether the new row template should be located
         * at the top of the grid or at the bottom.
         */
        newRowAtTop: boolean;
        /**
         * Updates the new row template to ensure it's visible only if the grid is
         * bound to a data source that supports adding new items, and that it is
         * in the right position.
         */
        updateNewRowTemplate(): void;
        _attach(): void;
        _detach(): void;
        _keydown(e: KeyboardEvent): void;
        _beginningEdit(sender: any, e: CellRangeEventArgs): void;
        _rowEditEnded(sender: any, e: CellRangeEventArgs): void;
    }
    /**
     * Represents a row template used to add items to the source collection.
     */
    class _NewRowTemplate extends Row {
    }
}

declare module wijmo.grid {
    /**
     * Implements a hidden input element so users can choose IME modes
     * when the FlexGrid has focus and start composing before the grid
     * enters edit mode.
     */
    class _ImeHandler {
        _g: FlexGrid;
        _tbx: HTMLInputElement;
        _isMouseDown: boolean;
        _updateImeFocusBnd: any;
        _cmpstartBnd: any;
        _mousedownBnd: any;
        _mouseupBnd: any;
        _keydownBnd: any;
        _ignoreKey: boolean;
        static _cssHidden: {
            position: string;
            left: number;
            top: number;
            width: string;
            overflow: string;
        };
        /**
         * Initializes a new instance of the @see:_ImeHandler class
         * and attaches it to a @see:FlexGrid.
         *
         * @param g @see:FlexGrid that this @see:_ImeHandler will be attached to.
         */
        constructor(g: FlexGrid);
        /**
         * Disposes of this @see:_ImeHandler.
         */
        dispose(): void;
        _keydown(e: KeyboardEvent): void;
        _compositionstart(): void;
        _cellEditEnded(): void;
        _mousedown(e: any): void;
        _mouseup(e: any): void;
        _updateImeFocus(): void;
        _enableIme(): boolean;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
declare module wijmo.grid.filter {
    /**
     * Defines a filter for a column on a @see:FlexGrid control.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    interface IColumnFilter {
        column: Column;
        isActive: boolean;
        apply(value: any): boolean;
        clear(): void;
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a value filter for a column on a @see:FlexGrid control.
     *
     * Value filters contain an explicit list of values that should be
     * displayed by the grid.
     */
    class ValueFilter implements IColumnFilter {
        private _col;
        private _values;
        private _filterText;
        private _xValueSearch;
        private _maxValues;
        private _uniqueValues;
        private _sortValues;
        private _map;
        /**
         * Initializes a new instance of the @see:ValueFilter class.
         *
         * @param column The column to filter.
         */
        constructor(column: Column);
        /**
         * Gets or sets an object with all the formatted values that should be
         * shown on the value list.
         */
        showValues: any;
        /**
         * Gets or sets a string used to filter the list of display values.
         */
        filterText: string;
        /**
         * Gets or sets a value that determines whether the filter should
         * include only values selected by the @see:filterText property.
         *
         * This property is set to true by default, which matches Excel's
         * behavior.
         *
         * Set it to false to disable this behavior, so searching only affects
         * which items are displayed on the list and not which items are
         * included in the filter.
         */
        exclusiveValueSearch: boolean;
        /**
         * Gets or sets the maximum number of elements on the list of display values.
         *
         * Adding too many items to the list makes searching difficult and hurts
         * performance. This property limits the number of items displayed at any time,
         * but users can still use the search box to filter the items they are
         * interested in.
         *
         * This property is set to 250 by default.
         *
         * This code changes the value to 1,000,000, effectively listing all unique
         * values for the field:
         *
         * <pre>// change the maxItems property for the 'id' column:
         * var f = new wijmo.grid.filter.FlexGridFilter(s);
         * f.getColumnFilter('id').valueFilter.maxValues = 1000000;</pre>
         */
        maxValues: number;
        /**
         * Gets or sets an array containing the unique values to be displayed on the list.
         *
         * If this property is set to null, the list will be filled based on the grid data.
         *
         * Explicitly assigning the list of unique values is more efficient than building
         * the list from the data, and is required for value filters to work properly when
         * the data is filtered on the server (because in this case some values might not
         * be present on the client so the list will be incomplete).
         *
         * By default, the filter editor will sort the unique values when displaying them
         * to the user. If you want to prevent that and show the values in the order you
         * provided, set the @see:sortValues property to false.
         *
         * For example, the code below provides a list of countries to be used in the
         * @see:ValueFilter for the column bound to the 'country' field:
         *
         * <pre>// create filter for a FlexGrid
         * var filter = new wijmo.grid.filter.FlexGridFilter(grid);
         * // assign list of unique values to country filter
         * var cf = filter.getColumnFilter('country');
         * cf.valueFilter.uniqueValues = countries;</pre>
         */
        uniqueValues: any[];
        /**
         * Gets or sets a value that determines whether the values should be sorted
         * when displayed in the editor.
         *
         * This property is especially useful when you are using the @see:uniqueValues
         * to provide a custom list of values property and you would like to preserve
         * the order of the values.
         */
        sortValues: boolean;
        /**
         * Gets or sets the @see:DataMap used to convert raw values into display
         * values shown when editing this filter.
         */
        dataMap: DataMap;
        /**
         * Gets the @see:Column to filter.
         */
        readonly column: Column;
        /**
         * Gets a value that indicates whether the filter is active.
         *
         * The filter is active if there is at least one value is selected.
         */
        readonly isActive: boolean;
        /**
         * Gets a value that indicates whether a value passes the filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
        /**
         * Clears the filter.
         */
        clear(): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
        _getUniqueValues(col: Column, filtered: boolean): any[];
    }
}

declare module wijmo.grid.filter {
    /**
     * The editor used to inspect and modify @see:ValueFilter objects.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ValueFilterEditor extends Control {
        private _filter;
        private _toText;
        private _filterText;
        private _view;
        private _divFilter;
        private _cmbFilter;
        private _cbSelectAll;
        private _spSelectAll;
        private _divValues;
        private _lbValues;
        /**
         * Gets or sets the template used to instantiate @see:ColumnFilterEditor controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:ValueFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:ValueFilter to edit.
         */
        constructor(element: any, filter: ValueFilter);
        /**
         * Gets a reference to the @see:ValueFilter being edited.
         */
        readonly filter: ValueFilter;
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
        /**
         * Clears the editor without applying changes to the filter.
         */
        clearEditor(): void;
        /**
         * Gets a value that determines whether the editor has been cleared.
         */
        readonly isEditorClear: boolean;
        /**
         * Updates filter to reflect the current editor values.
         */
        updateFilter(): void;
        private _getItems();
        private _filterTextChanged();
        private _filterValues(value);
        private _cbSelectAllClicked();
        private _updateSelectAllCheck();
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a condition filter for a column on a @see:FlexGrid control.
     *
     * Condition filters contain two conditions that may be combined
     * using an 'and' or an 'or' operator.
     *
     * This class is used by the @see:FlexGridFilter class; you will
     * rarely use it directly.
     */
    class ConditionFilter implements IColumnFilter {
        private _col;
        private _c1;
        private _c2;
        private _and;
        private _map;
        /**
         * Initializes a new instance of the @see:ConditionFilter class.
         *
         * @param column The column to filter.
         */
        constructor(column: Column);
        /**
         * Gets the first condition in the filter.
         */
        readonly condition1: FilterCondition;
        /**
         * Gets the second condition in the filter.
         */
        readonly condition2: FilterCondition;
        /**
         * Gets a value that indicates whether to combine the two conditions
         * with an AND or an OR operator.
         *
         * The default value for this property is <b>true</b>.
         */
        and: boolean;
        /**
         * Gets or sets the @see:DataMap used to convert raw values into display
         * values shown when editing this filter.
         */
        dataMap: DataMap;
        /**
         * Gets the @see:Column to filter.
         */
        readonly column: Column;
        /**
         * Gets a value that indicates whether the filter is active.
         *
         * The filter is active if at least one of the two conditions
         * has its operator and value set to a valid combination.
         */
        readonly isActive: boolean;
        /**
         * Returns a value indicating whether a value passes this filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
        /**
         * Clears the filter.
         */
        clear(): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
    }
}

declare module wijmo.grid.filter {
    /**
     * The editor used to inspect and modify @see:ConditionFilter objects.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ConditionFilterEditor extends Control {
        private _filter;
        private _cmb1;
        private _val1;
        private _cmb2;
        private _val2;
        private _divHdr;
        private _divCmb1;
        private _divVal1;
        private _divCmb2;
        private _divVal2;
        private _spAnd;
        private _spOr;
        private _btnAnd;
        private _btnOr;
        /**
         * Gets or sets the template used to instantiate @see:ConditionFilterEditor controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:ConditionFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:ConditionFilter to edit.
         */
        constructor(element: any, filter: ConditionFilter);
        /**
         * Gets a reference to the @see:ConditionFilter being edited.
         */
        readonly filter: ConditionFilter;
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
        /**
         * Clears the editor without applying changes to the filter.
         */
        clearEditor(): void;
        /**
         * Gets a value that determines whether the editor has been cleared.
         */
        readonly isEditorClear: boolean;
        /**
         * Updates filter to reflect the current editor values.
         */
        updateFilter(): void;
        private _createOperatorCombo(element, label);
        private _createValueInput(e, label);
        private _hasDatePart(fmt);
        private _hasTimePart(fmt);
        private _btnAndOrChanged(e);
        private _checkRadio(radio, checked);
        private _keydown(e);
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a filter condition.
     *
     * This class is used by the @see:FlexGridFilter class;
     * you will rarely have to use it directly.
     */
    class FilterCondition {
        private _op;
        private _val;
        private _strVal;
        private _mapVal;
        private _filter;
        /**
         * Initializes a new instance of the @see:FilterCondition class.
         *
         * @param filter The @see:ConditionFilter that owns this @see:FilterCondition.
         */
        constructor(filter?: ConditionFilter);
        /**
         * Gets or sets the operator used by this @see:FilterCondition.
         */
        operator: Operator;
        /**
         * Gets or sets the value used by this @see:FilterCondition.
         */
        value: any;
        /**
         * Gets a value that indicates whether the condition is active.
         */
        readonly isActive: boolean;
        /**
         * Clears the condition.
         */
        clear(): void;
        /**
         * Returns a value that determines whether the given value passes this
         * @see:FilterCondition.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
    }
    /**
     * Specifies filter condition operators.
     */
    enum Operator {
        /** Equals. */
        EQ = 0,
        /** Does not equal. */
        NE = 1,
        /** Greater than. */
        GT = 2,
        /** Greater than or equal to. */
        GE = 3,
        /** Less than. */
        LT = 4,
        /** Less than or equal to. */
        LE = 5,
        /** Begins with. */
        BW = 6,
        /** Ends with. */
        EW = 7,
        /** Contains. */
        CT = 8,
        /** Does not contain. */
        NC = 9,
    }
}

declare module wijmo.grid.filter {
    /**
     * Defines a filter for a column on a @see:FlexGrid control.
     *
     * The @see:ColumnFilter contains a @see:ConditionFilter and a
     * @see:ValueFilter; only one of them may be active at a time.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ColumnFilter implements IColumnFilter {
        private _owner;
        private _col;
        private _valueFilter;
        private _conditionFilter;
        private _filterType;
        /**
         * Initializes a new instance of the @see:ColumnFilter class.
         *
         * @param owner The @see:FlexGridFilter that owns this column filter.
         * @param column The @see:Column to filter.
         */
        constructor(owner: FlexGridFilter, column: Column);
        /**
         * Gets or sets the types of filtering provided by this filter.
         *
         * Setting this property to null causes the filter to use the value
         * defined by the owner filter's @see:FlexGridFilter.defaultFilterType
         * property.
         */
        filterType: FilterType;
        /**
         * Gets or sets the @see:DataMap used to convert raw values into display
         * values shown when editing this filter.
         *
         * The example below assigns a @see:DataMap to Boolean column filters
         * so the filter editor displays 'Yes' and 'No' instead of 'true' and 'false':
         *
         * <pre>var filter = new wijmo.grid.filter.FlexGridFilter(grid),
         *     map = new wijmo.grid.DataMap([
         *             { value: true, caption: 'Yes' },
         *             { value: false, caption: 'No' },
         *         ], 'value', 'caption');
         * for (var c = 0; c &lt; grid.columns.length; c++) {
         *     if (grid.columns[c].dataType == wijmo.DataType.Boolean) {
         *         filter.getColumnFilter(c).dataMap = map;
         *     }
         * }</pre>
         */
        dataMap: DataMap;
        /**
         * Gets the @see:ValueFilter in this @see:ColumnFilter.
         */
        readonly valueFilter: ValueFilter;
        /**
         * Gets the @see:ConditionFilter in this @see:ColumnFilter.
         */
        readonly conditionFilter: ConditionFilter;
        /**
         * Gets the @see:Column being filtered.
         */
        readonly column: Column;
        /**
         * Gets a value that indicates whether the filter is active.
         */
        readonly isActive: boolean;
        /**
         * Gets a value that indicates whether a value passes the filter.
         *
         * @param value The value to test.
         */
        apply(value: any): boolean;
        /**
         * Clears the filter.
         */
        clear(): void;
        /**
         * Returns true if the caller queries for a supported interface.
         *
         * @param interfaceName Name of the interface to look for.
         */
        implementsInterface(interfaceName: string): boolean;
    }
}

declare module wijmo.grid.filter {
    /**
     * The editor used to inspect and modify column filters.
     *
     * This class is used by the @see:FlexGridFilter class; you
     * rarely use it directly.
     */
    class ColumnFilterEditor extends Control {
        private _filter;
        private _edtVal;
        private _edtCnd;
        private _wasTouching;
        private _divSort;
        private _btnAsc;
        private _btnDsc;
        private _divType;
        private _aCnd;
        private _aVal;
        private _divEdtVal;
        private _divEdtCnd;
        private _btnApply;
        private _btnCancel;
        private _btnClear;
        /**
         * Gets or sets the template used to instantiate @see:ColumnFilterEditor controls.
         */
        static controlTemplate: string;
        '</div>': any;
        /**
         * Initializes a new instance of the @see:ColumnFilterEditor class.
         *
         * @param element The DOM element that hosts the control, or a selector
         * for the host element (e.g. '#theCtrl').
         * @param filter The @see:ColumnFilter to edit.
         * @param sortButtons Whether to show sort buttons in the editor.
         */
        constructor(element: any, filter: ColumnFilter, sortButtons?: boolean);
        /**
         * Gets a reference to the @see:ColumnFilter being edited.
         */
        readonly filter: ColumnFilter;
        /**
         * Updates editor with current filter settings.
         */
        updateEditor(): void;
        /**
         * Updates filter with current editor settings.
         */
        updateFilter(): void;
        /**
         * Occurs after the filter is modified.
         */
        readonly filterChanged: Event;
        /**
         * Raises the @see:filterChanged event.
         */
        onFilterChanged(e?: EventArgs): void;
        /**
         * Occurs when one of the editor buttons is clicked.
         */
        readonly buttonClicked: Event;
        /**
         * Raises the @see:buttonClicked event.
         */
        onButtonClicked(e?: EventArgs): void;
        protected _handleResize(): void;
        _showFilter(filterType: FilterType): void;
        _enableLink(a: HTMLLinkElement, enable: boolean): void;
        private _getFilterType();
        private _btnClicked(e);
    }
}

/**
 * Extension that provides an Excel-style filtering UI for @see:FlexGrid controls.
 */
declare module wijmo.grid.filter {
    /**
     * Specifies types of column filter.
     */
    enum FilterType {
        /** No filter. */
        None = 0,
        /** A filter based on two conditions. */
        Condition = 1,
        /** A filter based on a set of values. */
        Value = 2,
        /** A filter that combines condition and value filters. */
        Both = 3,
    }
    /**
     * Implements an Excel-style filter for @see:FlexGrid controls.
     *
     * To enable filtering on a @see:FlexGrid control, create an instance
     * of the @see:FlexGridFilter and pass the grid as a parameter to the
     * constructor. For example:
     *
     * <pre>
     * // create FlexGrid
     * var flex = new wijmo.grid.FlexGrid('#gridElement');
     * // enable filtering on the FlexGrid
     * var filter = new wijmo.grid.filter.FlexGridFilter(flex);
     * </pre>
     *
     * Once this is done, a filter icon is added to the grid's column headers.
     * Clicking the icon shows an editor where the user can edit the filter
     * conditions for that column.
     *
     * The @see:FlexGridFilter class depends on the <b>wijmo.grid</b> and
     * <b>wijmo.input</b> modules.
     *
     * The example below shows how you can use a @see:FlexGridFilter to add
     * filtering to a @see:FlexGrid control:
     *
     * @fiddle:1ttsyag4
     *
     * The @see:FlexGridFilter class relies on the filtering functionality
     * provided by the @see:wijmo.collections.CollectionView class, and
     * therefore can be used only with bound grids.
     */
    class FlexGridFilter {
        static _WJC_FILTER: string;
        private _g;
        private _filters;
        private _filterColumns;
        private _divEdt;
        private _edtCol;
        private _showIcons;
        private _showSort;
        private _defFilterType;
        private _xValueSearch;
        private _tmd;
        /**
         * Initializes a new instance of the @see:FlexGridFilter class.
         *
         * @param grid The @see:FlexGrid to filter.
         * @param options Initialization options for the @see:FlexGridFilter.
         */
        constructor(grid: FlexGrid, options?: any);
        /**
         * Gets a reference to the @see:FlexGrid that owns this filter.
         */
        readonly grid: FlexGrid;
        /**
         * Gets or sets an array containing the names or bindings of the columns
         * that have filters.
         *
         * Setting this property to null or to an empty array adds filters to
         * all columns.
         */
        filterColumns: string[];
        /**
         * Gets or sets a value indicating whether the @see:FlexGridFilter adds filter
         * editing buttons to the grid's column headers.
         *
         * If you set this property to false, then you are responsible for providing
         * a way for users to edit, clear, and apply the filters.
         *
         * The default value for this property is <b>true</b>.
         */
        showFilterIcons: boolean;
        /**
         * Gets or sets a value indicating whether the filter editor should include
         * sort buttons.
         *
         * By default, the editor shows sort buttons like Excel does. But since users
         * can sort columns by clicking their headers, sort buttons in the filter editor
         * may not be desirable in some circumstances.
         *
         * The default value for this property is <b>true</b>.
         */
        showSortButtons: boolean;
        /**
         * Gets the filter for the given column.
         *
         * @param col The @see:Column that the filter applies to (or column name or index).
         * @param create Whether to create the filter if it does not exist.
         */
        getColumnFilter(col: any, create?: boolean): ColumnFilter;
        /**
         * Gets or sets the default filter type to use.
         *
         * This value can be overridden in filters for specific columns.
         * For example, the code below creates a filter that filters by
         * conditions on all columns except the "ByValue" column:
         *
         * <pre>
         * var f = new wijmo.grid.filter.FlexGridFilter(flex);
         * f.defaultFilterType = wijmo.grid.filter.FilterType.Condition;
         * var col = flex.columns.getColumn('ByValue'),
         *     cf = f.getColumnFilter(col);
         * cf.filterType = wijmo.grid.filter.FilterType.Value;
         * </pre>
         *
         * The default value for this property is <b>FilterType.Both</b>.
         */
        defaultFilterType: FilterType;
        /**
         * Gets or sets a value that determines whether the filter should
         * include only values selected by the @see:ValueFilter.filterText
         * property.
         *
         * This property is set to true by default, which matches Excel's
         * behavior.
         *
         * Set it to false to disable this behavior, so searching only affects
         * which items are displayed on the list and not which items are
         * included in the filter.
         */
        exclusiveValueSearch: boolean;
        /**
         * Gets or sets the current filter definition as a JSON string.
         *
         * The @see:filterDefinition includes information about all
         * currently active column filters. It does not include data maps
         * because data maps are not serializable.
         */
        filterDefinition: string;
        /**
         * Gets the active @see:ColumnFilterEditor.
         *
         * This property allows you to customize the filter editor when
         * handling the @see:filterChanging event.
         * It returns null when no filters are being edited.
         */
        readonly activeEditor: ColumnFilterEditor;
        /**
         * Shows the filter editor for the given grid column.
         *
         * @param col The @see:Column that contains the filter to edit.
         * @param ht A @see:wijmo.grid.HitTestInfo object containing the range of the cell
         * that triggered the filter display.
         * @param refElem An HTMLElement to use as a reference for positioning the editor.
         */
        editColumnFilter(col: any, ht?: HitTestInfo, refElem?: HTMLElement): void;
        _setAriaExpanded(cell: HTMLElement, value: boolean): void;
        /**
         * Closes the filter editor.
         */
        closeEditor(): void;
        /**
         * Applies the current column filters to the grid.
         */
        apply(): void;
        /**
         * Clears all column filters.
         */
        clear(): void;
        /**
         * Occurs after the filter is applied.
         */
        readonly filterApplied: Event;
        /**
         * Raises the @see:filterApplied event.
         */
        onFilterApplied(e?: EventArgs): void;
        /**
         * Occurs when a column filter is about to be edited by the user.
         *
         * Use this event to customize the column filter if you want to
         * override the default settings for the filter.
         *
         * For example, the code below sets the operator used by the filter
         * conditions to 'contains' if they are null:
         *
         * <pre>filter.filterChanging.addHandler(function (s, e) {
         *   var cf = filter.getColumnFilter(e.col);
         *   if (!cf.valueFilter.isActive && cf.conditionFilter.condition1.operator == null) {
         *     cf.filterType = wijmo.grid.filter.FilterType.Condition;
         *     cf.conditionFilter.condition1.operator = wijmo.grid.filter.Operator.CT;
         *   }
         * });</pre>
         */
        readonly filterChanging: Event;
        /**
         * Raises the @see:filterChanging event.
         *
         * @param e @see:CellRangeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onFilterChanging(e: CellRangeEventArgs): boolean;
        /**
         * Occurs after a column filter has been edited by the user.
         *
         * Use the event parameters to determine the column that owns
         * the filter and whether changes were applied or canceled.
         */
        readonly filterChanged: Event;
        /**
         * Raises the @see:filterChanged event.
         */
        onFilterChanged(e: CellRangeEventArgs): void;
        _asColumn(col: any): Column;
        private _filter(item);
        private _formatItem(s, e);
        _addFilterButton(col: Column, cf: ColumnFilter, cell: HTMLElement): void;
        _mousedown(e: MouseEvent): void;
        _click(e: MouseEvent): void;
        private _toggleEditor(e);
        _keydown(e: KeyboardEvent): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Extension that provides a drag and drop UI for editing
 * groups in bound @see:FlexGrid controls.
 */
declare module wijmo.grid.grouppanel {
    /**
     * The @see:GroupPanel control provides a drag and drop UI for editing
     * groups in a bound @see:FlexGrid control.
     *
     * It allows users to drag columns from the @see:FlexGrid into the
     * panel and to move groups within the panel. Users may click the
     * group markers in the panel to sort based on the group column or
     * to remove groups.
     *
     * In order to use a @see:GroupPanel, add it to a page that contains a
     * @see:FlexGrid control and set the panel's @see:grid property to the
     * @see:FlexGrid control. For example:
     *
     * <pre>// create a FlexGrid
     * var flex = new wijmo.grid.FlexGrid('#flex-grid');
     * flex.itemsSource = getData();
     * // add a GroupPanel to edit data groups
     * var groupPanel = new wijmo.grid.grouppanel.GroupPanel('#group-panel');
     * groupPanel.placeholder = "Drag columns here to create groups.";
     * groupPanel.grid = flex;</pre>
     *
     * The example below shows how you can use a @see:GroupPanel control to
     * add Outlook-style grouping to a @see:FlexGrid control:
     *
     * @fiddle:hf7ud7ge
     *
     * The @see:GroupPanel control relies on the grouping functionality
     * provided by the @see:wijmo.collections.CollectionView class, and
     * therefore can be used only with bound grids.
     */
    class GroupPanel extends Control {
        _g: any;
        _view: collections.ICollectionView;
        _gds: collections.ObservableArray;
        _hideGroupedCols: boolean;
        _maxGroups: number;
        _dragCol: Column;
        _dragMarker: HTMLElement;
        _divMarkers: HTMLElement;
        _divPH: HTMLElement;
        _hiddenCols: any[];
        _filter: grid.filter.FlexGridFilter;
        /**
         * Gets or sets the template used to instantiate @see:GroupPanel controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:GroupPanel class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets a value indicating whether the panel hides grouped columns in the owner grid.
         *
         * The @see:FlexGrid displays grouping information in row headers, so it is
         * usually a good idea to hide grouped columns since they display redundant
         * information.
         *
         * The default value for this property is <b>true</b>.
         */
        hideGroupedColumns: boolean;
        /**
         * Gets or sets the maximum number of groups allowed.
         *
         * Setting this property to -1 allows any number of groups
         * to be created. Setting it to zero prevents any grouping.
         *
         * The default value for this property is <b>6</b>.
         */
        maxGroups: number;
        /**
         * Gets or sets a string to display in the control when it contains no groups.
         *
         * The default value for this property is <b>''</b> (empty string).
         */
        placeholder: string;
        /**
         * Gets or sets the @see:FlexGrid that is connected to this @see:GroupPanel.
         *
         * Once a grid is connected to the panel, the panel displays the groups
         * defined in the grid's data source. Users can drag grid columns
         * into the panel to create new groups, drag groups within the panel to
         * re-arrange the groups, or delete items in the panel to remove the groups.
         */
        grid: FlexGrid;
        /**
         * Gets or sets the @see:grid.filter.FlexGridFilter to use for filtering
         * the grid data.
         *
         * If you set this property to a valid filter, the group descriptors will
         * display filter icons that can be used to see and edit the filer conditions
         * associated with the groups.
         */
        filter: grid.filter.FlexGridFilter;
        /**
         * Updates the panel to show the current groups.
         */
        refresh(): void;
        _getColumnFilter(col: Column): any;
        _editFilter(marker: HTMLElement): void;
        _addGroup(col: Column, e: MouseEvent): void;
        _moveGroup(marker: HTMLElement, e: MouseEvent): void;
        _removeGroup(index: number, groups?: collections.ObservableArray): void;
        _getIndex(e: MouseEvent): number;
        _getElementIndex(e: HTMLElement): number;
        _draggingColumn(s: FlexGrid, e: CellRangeEventArgs): void;
        _itemsSourceChanging(s: FlexGrid, e: EventArgs): void;
        _itemsSourceChanged(s: FlexGrid, e: EventArgs): void;
        _collectionChanged(sender: any, e: collections.NotifyCollectionChangedEventArgs): void;
        _dragStart(e: any): void;
        _dragOver(e: any): void;
        _drop(e: MouseEvent): void;
        _dragEnd(e: any): void;
        _click(e: any): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Extension that provides detail rows for @see:FlexGrid controls.
 */
declare module wijmo.grid.detail {
    /**
     * Specifies constants that define the action to perform when the
     * ENTER key is pressed.
     */
    enum KeyAction {
        /** No special action (let the grid handle the key). */
        None = 0,
        /** Toggle the detail display. */
        ToggleDetail = 1,
    }
    /**
     * Specifies when and how the row details are displayed.
     */
    enum DetailVisibilityMode {
        /**
         * Details are shown or hidden in code, using the
         * @see:FlexGridDetailProvider.showDetail and
         * @see:FlexGridDetailProvider.hideDetail methods.
         */
        Code = 0,
        /**
         * Details are shown for the row that is currently selected.
         */
        Selection = 1,
        /**
         * Details are shown or hidden using buttons added to the row headers.
         * Only one row may be expanded at a time.
         */
        ExpandSingle = 2,
        /**
         * Details are shown or hidden using buttons added to the row headers.
         * Multiple rows may be expanded at a time.
         */
        ExpandMulti = 3,
    }
    /**
     * Implements detail rows for @see:FlexGrid controls.
     *
     * To add detail rows to a @see:FlexGrid control, create an instance of a
     * @see:FlexGridDetailProvider and set the @see:createDetailCell property
     * to a function that creates elements to be displayed in the detail cells.
     *
     * For example:
     *
     * <pre>// create FlexGrid to show categories
     * var gridCat = new wijmo.grid.FlexGrid('#gridCat');
     * gridCat.itemsSource = getCategories();
     * // add detail rows showing products in each category
     * var detailProvider = new wijmo.grid.detail.FlexGridDetailProvider(gridCat);
     * detailProvider.createDetailCell = function (row) {
     *   var cell = document.createElement('div');
     *   var gridProducts = new wijmo.grid.FlexGrid(cell);
     *   gridProducts.itemsSource = getProducts(row.dataItem.CategoryID);
     *   return cell;
     * }</pre>
     *
     * The @see:FlexGridDetailProvider provides a @see:detailVisibilityMode property
     * that determines when the detail rows should be displayed. The default value for
     * this property is <b>ExpandSingle</b>, which adds collapse/expand icons to the
     * row headers.
     *
     * The example below shows how you can use a @see:FlexGridDetailProvider to add
     * different types of detail to the rows in a @see:FlexGrid:
     *
     * @fiddle:r9up8exz
     */
    class FlexGridDetailProvider {
        static _WJC_DETAIL: string;
        _g: FlexGrid;
        _maxHeight: number;
        _mode: DetailVisibilityMode;
        _animated: boolean;
        _toSel: any;
        _createDetailCellFn: Function;
        _disposeDetailCellFn: Function;
        _rowHasDetailFn: Function;
        _keyActionEnter: KeyAction;
        /**
         * Initializes a new instance of the @see:FlexGridDetailProvider class.
         *
         * @param grid @see:FlexGrid that will receive detail rows.
         * @param options Initialization options for the new @see:FlexGridDetailProvider.
         */
        constructor(grid: FlexGrid, options?: any);
        /**
         * Gets the @see:FlexGrid that owns this @see:FlexGridDetailProvider.
         */
        readonly grid: FlexGrid;
        /**
         * Gets or sets a value that determines when row details are displayed.
         *
         * The default value for this property is <b>DetailVisibilityMode.ExpandSingle</b>.
         */
        detailVisibilityMode: DetailVisibilityMode;
        /**
         * Gets or sets the maximum height of the detail rows, in pixels.
         *
         * The default value for this property is <b>null</b>, which means
         * there's no upper limit to the detail row height.
         */
        maxHeight: number;
        /**
         * Gets or sets a value that indicates whether to use animation when
         * showing row details.
         *
         * The default value for this property is <b>false</b>.
         */
        isAnimated: boolean;
        /**
         * Gets or sets the action to perform when the ENTER key is pressed.
         *
         * The default setting for this property is @see:KeyAction.None,
         * which lets the grid handle the key.
         * The other option is @see:KeyAction.ToggleDetail, which handles
         * the Enter key to toggle the display of the row details.
         */
        keyActionEnter: KeyAction;
        /**
         * Gets or sets the callback function that creates detail cells.
         *
         * The callback function takes a @see:Row as a parameter and
         * returns an HTML element representing the row details.
         * For example:
         *
         * <pre>// create detail cells for a given row
         * dp.createDetailCell = function (row) {
         *   var cell = document.createElement('div');
         *   var detailGrid = new wijmo.grid.FlexGrid(cell, {
         *     itemsSource: getProducts(row.dataItem.CategoryID),
         *     headersVisibility: wijmo.grid.HeadersVisibility.Column
         *   });
         *   return cell;
         * };</pre>
         */
        createDetailCell: Function;
        /**
         * Gets or sets the callback function that disposes of detail cells.
         *
         * The callback function takes a @see:Row as a parameter and
         * disposes of any resources associated with the detail cell.
         *
         * This function is optional. Use it in cases where the
         * @see:createDetailCell function allocates resources that are not
         * automatically garbage-collected.
         */
        disposeDetailCell: Function;
        /**
         * Gets or sets the callback function that determines whether a row
         * has details.
         *
         * The callback function takes a @see:Row as a parameter and
         * returns a boolean value that indicates whether the row has
         * details. For example:
         *
         * <pre>// remove details from items with odd CategoryID
         * dp.rowHasDetail = function (row) {
         *   return row.dataItem.CategoryID % 2 == 0;
         * };</pre>
         *
         * Setting this property to null indicates all rows have details.
         */
        rowHasDetail: Function;
        /**
         * Gets the detail row associated with a given grid row.
         *
         * @param row Row or index of the row to investigate.
         */
        getDetailRow(row: any): DetailRow;
        /**
         * Gets a value that determines if a row's details are visible.
         *
         * @param row Row or index of the row to investigate.
         */
        isDetailVisible(row: any): boolean;
        /**
         * Gets a value that determines if a row has details to show.
         *
         * @param row Row or index of the row to investigate.
         */
        isDetailAvailable(row: any): boolean;
        /**
         * Hides the detail row for a given row.
         *
         * @param row Row or index of the row that will have its details hidden.
         * This parameter is optional. If not provided, all detail rows are hidden.
         */
        hideDetail(row?: any): void;
        /**
         * Shows the detail row for a given row.
         *
         * @param row Row or index of the row that will have its details shown.
         * @param hideOthers Whether to hide details for all other rows.
         */
        showDetail(row: any, hideOthers?: boolean): void;
        _sizeDetailRow(row: DetailRow): void;
        _handleFixedCells(): void;
        _toIndex(row: any): number;
        _hdrClick(e: MouseEvent): void;
        _toggleRowDetail(row: number): boolean;
        _selectionChanged(s: FlexGrid, e: EventArgs): void;
        _formatItem(s: any, e: FormatItemEventArgs): void;
        _resizedRow(s: any, e: CellRangeEventArgs): void;
        _hasDetail(row: number): boolean;
        _isRegularRow(row: Row): boolean;
        _createDetailCell(row: Row, col?: Column): HTMLElement;
    }
}

declare module wijmo.grid.detail {
    /**
     * Merge manager class used by the @see:FlexGridDetailProvider class.
     *
     * The @see:DetailMergeManager merges detail cells (cells in a @see:DetailRow)
     * into a single detail cell that spans all grid columns.
     */
    class DetailMergeManager extends MergeManager {
        /**
         * Initializes a new instance of the @see:DetailMergeManager class.
         *
         * @param grid The @see:FlexGrid object that owns this @see:DetailMergeManager.
         */
        constructor(grid: FlexGrid);
        /**
         * Gets a @see:CellRange that specifies the merged extent of a cell
         * in a @see:GridPanel.
         *
         * @param p The @see:GridPanel that contains the range.
         * @param r The index of the row that contains the cell.
         * @param c The index of the column that contains the cell.
         * @param clip Whether to clip the merged range to the grid's current view range.
         * @return A @see:CellRange that specifies the merged range, or null if the cell is not merged.
         */
        getMergedRange(p: GridPanel, r: number, c: number, clip?: boolean): CellRange;
    }
}

declare module wijmo.grid.detail {
    /**
     * Row that contains a single detail cell spanning all grid columns.
     */
    class DetailRow extends Row {
        _detail: HTMLElement;
        /**
         * Initializes a new instance of the @see:DetailRow class.
         *
         * @param parentRow @see:Row that this @see:DetailRow provides details for.
         */
        constructor(parentRow: Row);
        /**
         * Gets or sets the HTML element that represents the detail cell in this @see:DetailRow.
         */
        detail: HTMLElement;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
declare module wijmo.input {
    /**
     * DropDown control (abstract).
     *
     * Contains an input element and a button used to show or hide the drop-down.
     *
     * Derived classes must override the _createDropDown method to create whatever
     * editor they want to show in the drop down area (a list of items, a calendar,
     * a color editor, etc).
     */
    class DropDown extends Control {
        _tbx: HTMLInputElement;
        _elRef: HTMLElement;
        _btn: HTMLElement;
        _dropDown: HTMLElement;
        _showBtn: boolean;
        _autoExpand: boolean;
        _animate: boolean;
        _cssClass: string;
        _oldText: string;
        _altDown: boolean;
        _minWidthDropdown: string;
        _setFocus: boolean;
        /**
         * Gets or sets the template used to instantiate @see:DropDown controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:DropDown class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted
         * by the control.
         *
         * The default value for this property is <b>text</b>.
         */
        inputType: string;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets a value that determines whether the control value must be
         * set to a non-null value or whether it can be set to null
         * (by deleting the content of the control).
         *
         * This property defaults to true for most controls, including @see:ComboBox,
         * @see:InputDate, @see:InputTime, @see:InputDateTime, and @see:InputColor.
         * It defaults to false for the @see:AutoComplete control.
         */
        isRequired: boolean;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets or sets a value that indicates whether the drop down is currently
         * visible.
         *
         * The default value for this property is <b>false</b>.
         */
        isDroppedDown: boolean;
        /**
         * Gets the drop down element shown when the @see:isDroppedDown
         * property is set to true.
         */
        readonly dropDown: HTMLElement;
        /**
         * Gets or sets a CSS class name to add to the control's drop-down element.
         *
         * This property is useful when styling the drop-down element, because it is
         * shown as a child of the document body rather than as a child of the control
         * itself, which prevents using CSS selectors based on the parent control.
         */
        dropDownCssClass: string;
        /**
         * Gets or sets a value that indicates whether the control should
         * display a drop-down button.
         *
         * The default value for this property is <b>true</b>.
         */
        showDropDownButton: boolean;
        /**
         * Gets or sets a value that indicates whether the control should
         * automatically expand the selection to whole words/numbers when
         * the control is clicked.
         *
         * The default value for this property is <b>true</b>.
         */
        autoExpandSelection: boolean;
        /**
         * Gets or sets a value that indicates whether the control should use a fade-in animation
         * when displaying the drop-down.
         *
         * The default value for this property is <b>false</b>.
         */
        isAnimated: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Occurs when the value of the @see:text property changes.
         */
        readonly textChanged: Event;
        /**
         * Raises the @see:textChanged event.
         */
        onTextChanged(e?: EventArgs): void;
        /**
         * Occurs before the drop down is shown or hidden.
         */
        readonly isDroppedDownChanging: Event;
        /**
         * Raises the @see:isDroppedDownChanging event.
         */
        onIsDroppedDownChanging(e: CancelEventArgs): boolean;
        /**
         * Occurs after the drop down is shown or hidden.
         */
        readonly isDroppedDownChanged: Event;
        /**
         * Raises the @see:isDroppedDownChanged event.
         */
        onIsDroppedDownChanged(e?: EventArgs): void;
        onGotFocus(e?: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        containsFocus(): boolean;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        _handleResize(): void;
        protected _dropDownClick(e: MouseEvent): void;
        private _expandSelection();
        private _getCharType(text, pos);
        protected _keydown(e: KeyboardEvent): void;
        protected _btnclick(e: MouseEvent): void;
        protected _setText(text: string, fullMatch: boolean): void;
        protected _updateBtn(): void;
        protected _createDropDown(): void;
        protected _commitText(): void;
        protected _updateDropDown(): void;
    }
}

declare module wijmo.input {
    /**
     * Specifies constants that define the date selection behavior.
     */
    enum DateSelectionMode {
        /** The user cannot change the current value using the mouse or keyboard. */
        None = 0,
        /** The user can select days. */
        Day = 1,
        /** The user can select months. */
        Month = 2,
    }
    /**
     * The @see:Calendar control displays a one-month calendar and allows users
     * to select a date.
     *
     * You may use the @see:min and @see:max properties to restrict the range
     * of dates that the user can select.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to get or set the currently selected date.
     *
     * Use the @see:selectionMode property to determine whether users should be
     * allowed to select days, months, or no values at all.
     *
     * The @see:Calendar control supports the following keyboard commands:
     *
     * <table>
     *   <thead>
     *     <tr><th>Key Combination</th><th>Moves Selection To</th></tr>
     *   </thead>
     *   <tbody>
     *     <tr><td>Left</td><td>Previous day</td></tr>
     *     <tr><td>Right</td><td>Next day</td></tr>
     *     <tr><td>Up</td><td>Previous week</td></tr>
     *     <tr><td>Down</td><td>Next week</td></tr>
     *     <tr><td>PgUp</td><td>Previous month</td></tr>
     *     <tr><td>PgDn</td><td>Next month</td></tr>
     *     <tr><td>Alt + PgUp</td><td>Previous year</td></tr>
     *     <tr><td>Alt + PgDn</td><td>Next year</td></tr>
     *     <tr><td>Home</td><td>First valid day of the month</td></tr>
     *     <tr><td>End</td><td>Last valid day of the month</td></tr>
     *     <tr><td>Alt + End</td><td>Today's date</td></tr>
     *   </tbody>
     * </table>
     *
     * The example below shows a <b>Date</b> value with date and time information
     * using an @see:InputDate and an @see:InputTime control. Notice how both
     * controls are bound to the same controller variable, and each edits the
     * appropriate information (either date or time). The example also shows a
     * @see:Calendar control that allows users to select the date with a
     * single click.
     *
     * @fiddle:vgc3Y
     */
    class Calendar extends Control {
        private _tbHdr;
        private _tbMth;
        private _tbYr;
        private _btnMth;
        private _spMth;
        private _btnPrv;
        private _btnTdy;
        private _btnNxt;
        private _lbYears;
        private _value;
        private _currMonth;
        private _firstDay;
        private _min;
        private _max;
        private _fdw;
        private _itemFormatter;
        private _itemValidator;
        private _readOnly;
        private _selMode;
        private _rptUp;
        private _rptDn;
        private _yrPicker;
        private _tmYrHidden;
        private _fmtYrMo;
        private _fmtYr;
        private _fmtDayHdr;
        private _fmtDay;
        private _fmtMonths;
        /**
         * Gets or sets the template used to instantiate @see:Calendar controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:Calendar class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the currently selected date.
         *
         * The default value for this property is the current date.
         */
        value: Date;
        /**
         * Gets or sets the earliest date that the user can select in the calendar.
         *
         * The default value for this property is <b>null</b>, which means no earliest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest date that the user can select in the calendar.
         *
         * The default value for this property is <b>null</b>, which means no latest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets a value that indicates whether users can select
         * days, months, or no values at all.
         *
         * The default value for this property is <b>DateSelectionMode.Day</b>.
         */
        selectionMode: DateSelectionMode;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets a value that determines whether the calendar buttons
         * should act as repeat buttons, firing repeatedly as the button
         * remains pressed.
         *
         * The default value for this property is <b>true</b>.
         */
        repeatButtons: boolean;
        /**
         * Gets or sets a value that determines whether the calendar should
         * display a list of years when the user clicks the header element
         * on the year calendar.
         *
         * The default value for this property is <b>true</b>.
         */
        showYearPicker: boolean;
        /**
         * Gets or sets a value that represents the first day of the week,
         * the one displayed in the first column of the calendar.
         *
         * Setting this property to null causes the calendar to use the default
         * for the current culture. In the English culture, the first day of the
         * week is Sunday (0); in most European cultures, the first day of the
         * week is Monday (1).
         */
        firstDayOfWeek: number;
        /**
         * Gets or sets the month displayed in the calendar.
         */
        displayMonth: Date;
        /**
         * Gets or sets the format used to display the month and year
         * above the calendar in month view.
         *
         * The default value for this property is <b>'y'</b>.
         */
        formatYearMonth: string;
        /**
         * Gets or sets the format used to display the headers
         * above the days in month view.
         *
         * The default value for this property is <b>'ddd'</b>.
         */
        formatDayHeaders: string;
        /**
         * Gets or sets the format used to display the days
         * in month view.
         *
         * The default value for this property is 'd ' (the space after the 'd'
         * prevents the format from being interpreted as 'd', the standard format
         * used to represent the short date pattern).
         */
        formatDays: string;
        /**
         * Gets or sets the format used to display the year
         * above the months in year view.
         *
         * The default value for this property is <b>'yyyy'</b>.
         */
        formatYear: string;
        /**
         * Gets or sets the format used to display the months
         * in year view.
         *
         * The default value for this property is <b>'MMM'</b>.
         */
        formatMonths: string;
        /**
         * Gets or sets a value indicating whether the control displays the header
         * area with the current month and navigation buttons.
         *
         * The default value for this property is <b>true</b>.
         */
        showHeader: boolean;
        /**
         * Gets or sets a value indicating whether the calendar displays
         * a month or a year.
         *
         * The default value for this property is <b>true</b>.
         */
        monthView: boolean;
        /**
         * Gets or sets a formatter function to customize dates in the calendar.
         *
         * The formatter function can add any content to any date. It allows
         * complete customization of the appearance and behavior of the calendar.
         *
         * If specified, the function takes two parameters:
         * <ul>
         *     <li>the date being formatted </li>
         *     <li>the HTML element that represents the date</li>
         * </ul>
         *
         * For example, the code below shows weekends with a yellow background:
         * <pre>
         * calendar.itemFormatter = function(date, element) {
         *   var day = date.getDay();
         *   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets a validator function to determine whether dates are valid for selection.
         *
         * If specified, the validator function should take one parameter representing the
         * date to be tested, and should return false if the date is invalid and should not
         * be selectable.
         *
         * For example, the code below shows weekends in a disabled state and prevents users
         * from selecting those dates:
         * <pre>
         * calendar.itemValidator = function(date) {
         *   var weekday = date.getDay();
         *   return weekday != 0 && weekday != 6;
         * }
         * </pre>
         */
        itemValidator: Function;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        /**
         * Occurs after the @see:displayMonth property changes.
         */
        readonly displayMonthChanged: Event;
        /**
         * Raises the @see:displayMonthChanged event.
         */
        onDisplayMonthChanged(e?: EventArgs): void;
        /**
         * Occurs when an element representing a day in the calendar has been created.
         *
         * This event can be used to format calendar items for display. It is similar
         * in purpose to the @see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         *
         * For example, the code below uses the @see:formatItem event to disable weekends
         * so they appear dimmed in the calendar:
         *
         * <pre>// disable Sundays and Saturdays
         * calendar.formatItem.addHandler(function (s, e) {
         *   var day = e.data.getDay();
         *   if (day == 0 || day == 6) {
         *     wijmo.addClass(e.item, 'wj-state-disabled');
         *   }
         * });</pre>
         */
        readonly formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatItemEventArgs that contains the event data.
         */
        onFormatItem(e: FormatItemEventArgs): void;
        containsFocus(): boolean;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        private _canChangeValue();
        private _valid(date);
        private _inValidRange(date);
        private _monthInValidRange(month);
        private _yearInValidRange(year);
        private _sameMonth(date, month);
        private _getValidDate(month, first);
        _clamp(value: Date): Date;
        private _createChildren();
        private _createYearPicker();
        private _createElement(tag, parent?, className?);
        private _click(e);
        private _getCellIndex(tbl, cell);
        private _keydown(e);
        private _getMonth(date);
        private _monthMode();
        private _navigate(skip);
    }
}

declare module wijmo.input {
    /**
     * The @see:ColorPicker control allows users to select a color by clicking
     * on panels to adjust color channels (hue, saturation, brightness, alpha).
     *
     * Use the @see:value property to get or set the currently selected color.
     *
     * The control is used as a drop-down for the @see:InputColor control.
     *
     * @fiddle:z84ebpec
     */
    class ColorPicker extends Control {
        _hsb: number[];
        _alpha: number;
        _value: string;
        _palette: string[];
        _eSB: HTMLElement;
        _eHue: HTMLElement;
        _eAlpha: HTMLElement;
        _cSB: HTMLElement;
        _cHue: HTMLElement;
        _cAlpha: HTMLElement;
        _ePal: HTMLElement;
        _ePreview: HTMLElement;
        _eText: HTMLElement;
        _htDown: Element;
        /**
         * Gets or sets the template used to instantiate @see:ColorPicker controls.
         */
        static controlTemplate: string;
        static _tplCursor: string;
        /**
         * Initializes a new instance of the @see:ColorPicker class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker allows users
         * to edit the color's alpha channel (transparency).
         *
         * The default value for this property is <b>true</b>.
         */
        showAlphaChannel: boolean;
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker shows a string representation
         * of the current color.
         *
         * The default value for this property is <b>false</b>.
         */
        showColorString: boolean;
        /**
         * Gets or sets the currently selected color.
         *
         * This property defaults to 'white'.
         */
        value: string;
        /**
         * Gets or sets an array that contains the colors in the palette.
         *
         * The palette contains ten colors, represented by an array with
         * ten strings. The first two colors are usually white and black.
         */
        palette: string[];
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        protected _mouseDown(e: MouseEvent): void;
        protected _mouseMove(e: MouseEvent): void;
        protected _mouseUp(e: MouseEvent): void;
        private _updateColor();
        private _updatePalette();
        private _makePalEntry(color, margin);
        private _updatePanels();
        private _getTargetPanel(e);
    }
}

declare module wijmo.input {
    /**
     * The @see:ListBox control displays a list of items which may contain
     * plain text or HTML, and allows users to select items with the mouse
     * or the keyboard.
     *
     * Use the @see:ListBox.selectedIndex property to determine which item
     * is currently selected.
     *
     * You can populate a @see:ListBox using an array of strings or you can
     * use an array of objects, in which case the @see:ListBox.displayMemberPath
     * property determines which object property is displayed on the list.
     *
     * To display items that contain HTML rather than plain text, set the
     * @see:ListBox.isContentHtml property to true.
     *
     * The @see:ListBox control supports the following keyboard commands:
     *
     * <table>
     *   <thead>
     *     <tr><th>Key Combination</th><th>Action</th></tr>
     *   </thead>
     *   <tbody>
     *     <tr><td>Up/Down</td><td>Select the previous/next item</td></tr>
     *     <tr><td>PageUp/Down</td><td>Select the item one page above or below the selection</td></tr>
     *     <tr><td>Home/End</td><td>Select the first/last items</td></tr>
     *     <tr><td>Space</td><td>Toggle the checkbox in the current item (see the @see:checkedMemberPath property)</td></tr>
     *     <tr><td>Other characters</td><td>Search for items that contain the text typed (multi-character auto-search)</td></tr>
     *   </tbody>
     * </table>
     *
     * The example below creates a @see:ListBox control and populates it using
     * a 'countries' array. The control updates its @see:ListBox.selectedIndex
     * and @see:ListBox.selectedItem properties as the user moves the selection.
     *
     * @fiddle:8HnLx
     */
    class ListBox extends Control {
        _items: any;
        _cv: collections.ICollectionView;
        _itemFormatter: Function;
        _pathDisplay: Binding;
        _pathValue: Binding;
        _pathChecked: Binding;
        _html: boolean;
        _shGroups: boolean;
        _checkedItems: any[];
        _itemRole: string;
        _checking: boolean;
        _search: string;
        _toSearch: any;
        _bndDisplay: Binding;
        _fmtItemHandlers: number;
        _itemCount: number;
        /**
         * Initializes a new instance of the @see:ListBox class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the array or @see:ICollectionView object that contains
         * the list items.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object used as the item source.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets or sets a value that determines whether the @see:ListBox should
         * include group header items to delimit data groups.
         *
         * Data groups are created by modifying the @see:ICollectionView.groupDescriptions
         * property of the @see:ICollectionView object used as an @see:itemsSource.
         *
         * The @see:ListBox only shows the first level of grouping.
         *
         * The default value for this property is <b>false</b>.
         */
        showGroups: boolean;
        /**
         * Gets or sets a value indicating whether items contain plain
         * text or HTML.
         *
         * The default value for this property is <b>false</b>.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a function used to customize the values shown on
         * the list.
         * The function takes two arguments, the item index and the default
         * text or html, and returns the new text or html to display.
         *
         * If the formatting function needs a scope (i.e. a meaningful
         * 'this' value), then remember to set the filter using the 'bind'
         * function to specify the 'this' object. For example:
         *
         * <pre>
         *   listBox.itemFormatter = customItemFormatter.bind(this);
         *   function customItemFormatter(index, content) {
         *     if (this.makeItemBold(index)) {
         *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
         *     }
         *     return content;
         *   }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets the name of the property to use as the visual
         * representation of the items.
         */
        displayMemberPath: string;
        /**
         * Gets or sets the name of the property used to get the
         * @see:selectedValue from the @see:selectedItem.
         */
        selectedValuePath: string;
        /**
         * Gets or sets the name of the property used to control
         * check boxes placed next to each item.
         *
         * Use this property to create multi-select LisBoxes.
         *
         * When an item is checked or unchecked, the control raises the
         * @see:itemChecked event.
         *
         * Use the @see:selectedItem property to retrieve the item that
         * was checked or unchecked, or use the @see:checkedItems property
         * to retrieve the list of items that are currently checked.
         */
        checkedMemberPath: string;
        /**
         * Gets or sets the value or the "role" attribute added to the
         * list items. The default value for this property is "option".
         */
        itemRole: string;
        /**
         * Gets the string displayed for the item at a given index.
         *
         * The string may be plain text or HTML, depending on the setting
         * of the @see:isContentHtml property.
         *
         * @param index The index of the item in the @see:itemsSource.
         */
        getDisplayValue(index: number): string;
        /**
         * Gets the text displayed for the item at a given index (as plain text).
         *
         * @param index The index of the item in the @see:itemsSource.
         */
        getDisplayText(index: number): string;
        /**
         * Gets a value that determines whether the item at a given index is enabled.
         *
         * @param index The index of the item in the @see:itemsSource.
         */
        isItemEnabled(index: number): boolean;
        /**
         * Gets or sets the index of the currently selected item.
         */
        selectedIndex: number;
        /**
         * Gets or sets the item that is currently selected.
         */
        selectedItem: any;
        /**
         * Gets or sets the value of the @see:selectedItem obtained using
         * the @see:selectedValuePath.
         */
        selectedValue: any;
        /**
         * Gets or sets the maximum height of the list.
         */
        maxHeight: number;
        /**
         * Highlights the selected item and scrolls it into view.
         *
         * @param setFocus Whether to set the focus to the list after scrolling
         * the selected item into view.
         */
        showSelection(setFocus?: boolean): void;
        /**
         * Loads the list with items from the current @see:itemsSource.
         */
        loadList(): void;
        /**
         * Gets the checked state of an item on the list.
         *
         * This method is applicable only on multi-select ListBoxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         */
        getItemChecked(index: number): boolean;
        /**
         * Sets the checked state of an item on the list.
         *
         * This method is applicable only on multi-select ListBoxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         * @param checked Item's new checked state.
         */
        setItemChecked(index: number, checked: boolean): void;
        /**
         * Toggles the checked state of an item on the list.
         * This method is applicable only to multi-select ListBoxes
         * (see the @see:checkedMemberPath property).
         *
         * @param index Item index.
         */
        toggleItemChecked(index: number): void;
        /**
         * Gets or sets an array containing the items that are currently checked.
         */
        checkedItems: any[];
        /**
         * Gets the data index of an element within the list.
         *
         * @param e Element to search for.
         * @return The index of the element in the list, or -1 if
         * the element is not a member of the list.
         */
        indexOf(e: HTMLElement): number;
        /**
         * Occurs when the value of the @see:selectedIndex property changes.
         */
        readonly selectedIndexChanged: Event;
        /**
         * Raises the @see:selectedIndexChanged event.
         */
        onSelectedIndexChanged(e?: EventArgs): void;
        /**
         * Occurs when the list of items changes.
         */
        readonly itemsChanged: Event;
        /**
         * Raises the @see:itemsChanged event.
         */
        onItemsChanged(e?: EventArgs): void;
        /**
         * Occurs before the list items are generated.
         */
        readonly loadingItems: Event;
        /**
         * Raises the @see:loadingItems event.
         */
        onLoadingItems(e?: EventArgs): void;
        /**
         * Occurs after the list items have been generated.
         */
        readonly loadedItems: Event;
        /**
         * Raises the @see:loadedItems event.
         */
        onLoadedItems(e?: EventArgs): void;
        /**
         * Occurs when the current item is checked or unchecked by the user.
         *
         * This event is raised when the @see:checkedMemberPath is set to
         * the name of a property to add check boxes to each item in the control.
         *
         * Use the @see:selectedItem property to retrieve the item that was
         * checked or unchecked.
         */
        readonly itemChecked: Event;
        /**
         * Raises the @see:itemChecked event.
         */
        onItemChecked(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        readonly checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        /**
         * Occurs when an element representing a list item has been created.
         *
         * This event can be used to format list items for display. It is similar
         * in purpose to the @see:itemFormatter property, but has the advantage
         * of allowing multiple independent handlers.
         */
        readonly formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatItemEventArgs that contains the event data.
         */
        onFormatItem(e: FormatItemEventArgs): void;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        _getChild(index: number): HTMLElement;
        _getElementIndex(index: number): number;
        private _setItemChecked(index, checked, notify?);
        private _cvCollectionChanged(sender, e);
        private _cvCurrentChanged(sender, e);
        private _populateList();
        _createItem(i: number): string;
        _createHeaderItem(group: wijmo.collections.CollectionViewGroup): string;
        private _click(e);
        private _keydown(e);
        private _keypress(e);
        _selectNext(): boolean;
        _selectPrev(): boolean;
        _selectFirst(): boolean;
        _selectLast(): boolean;
        _selectNextPage(): boolean;
        _selectPrevPage(): boolean;
        private _findNext();
        private _getCheckbox(index);
        _initFromSelect(hostElement: HTMLElement): void;
    }
    /**
     * Provides arguments for the @see:ListBox.formatItem event.
     */
    class FormatItemEventArgs extends EventArgs {
        _index: number;
        _data: any;
        _item: HTMLElement;
        /**
         * Initializes a new instance of the @see:FormatItemEventArgs class.
         *
         * @param index Index of the item being formatted in the source @see:ICollectionView, or -1 if the item is a group header.
         * @param data Data item being formatted, or a @see:CollectionViewGroup object if the item is a group header.
         * @param item Element that represents the list item to be formatted.
         */
        constructor(index: number, data: any, item: HTMLElement);
        /**
         * Gets the index of the data item in the list.
         */
        readonly index: number;
        /**
         * Gets the data item being formatted.
         */
        readonly data: any;
        /**
         * Gets a reference to the element that represents the list item to be formatted.
         */
        readonly item: HTMLElement;
    }
}

declare module wijmo.input {
    /**
     * The @see:ComboBox control allows users to pick strings from lists.
     *
     * The control automatically completes entries as the user types, and
     * allows users to show a drop-down list with the items available.
     *
     * Use the @see:ComboBox.itemsSource property to populate the list of
     * options.
     * The items may be strings or objects. If the items are objects, use
     * the @see:ComboBox.displayMemberPath to define which property of the
     * items will be displayed in the list and use the @see:ComboBox.selectedValuePath
     * property to define which property of the items will be used to set the
     * combo's @see:ComboBox.selectedValue property.
     *
     * Use the @see:ComboBox.selectedIndex or the @see:ComboBox.text properties
     * to determine which item is currently selected.
     *
     * The @see:ComboBox.isRequired property determines whether the control
     * must have a non-null value or whether it can be set to null
     * (by deleting the content of the control). If the value is set to null,
     * the @see:ComboBox.selectedIndex is set to -1.
     *
     * The @see:ComboBox.isEditable property determines whether users can enter
     * values that are not present in the list.
     *
     * The example below creates a @see:ComboBox control and populates it with
     * a list of countries. The @see:ComboBox searches for the country as the
     * user types.
     * The @see:ComboBox.isEditable property is set to false, so the user must
     * select one of the items in the list.
     *
     * The example also shows how to create and populate a @see:ComboBox using
     * an HTML <b>&lt;select&gt;</b> element with <b>&lt;option&gt;</b> child
     * elements.
     *
     * @fiddle:8HnLx
     */
    class ComboBox extends DropDown {
        _lbx: ListBox;
        _editable: boolean;
        _delKey: number;
        _composing: boolean;
        _settingText: boolean;
        _pathHdr: Binding;
        _bsCollapse: boolean;
        /**
         * Initializes a new instance of the @see:ComboBox class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the array or @see:ICollectionView object that contains
         * the items to select from.
         *
         * Setting this property to an array causes the @see:ComboBox to create
         * an internal @see:ICollectionView object that is exposed by the
         * @see:ComboBox.collectionView property.
         *
         * The @see:ComboBox selection is determined by the current item in its
         * @see:ComboBox.collectionView. By default, this is the first item in
         * the collection. You may change this behavior by setting the
         * @see:wijmo.collections.CollectionView.currentItem property of the
         * @see:ComboBox.collectionView to null.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object used as the item source.
         */
        readonly collectionView: collections.ICollectionView;
        /**
         * Gets or sets a value that determines whether the drop-down @see:ListBox
         * should include group header items to delimit data groups.
         *
         * Data groups are created by modifying the @see:ICollectionView.groupDescriptions
         * property of the @see:ICollectionView object used as an @see:itemsSource.
         *
         * The default value for this property is <b>false</b>.
         */
        showGroups: boolean;
        /**
         * Gets or sets the name of the property to use as the visual
         * representation of the items.
         */
        displayMemberPath: string;
        /**
         * Gets or sets the name of a property to use for getting the value
         * displayed in the control's input element.
         *
         * The default value for this property is null, which causes the control
         * to display the same content in the input element as in the selected
         * item of the drop-down list.
         *
         * Use this property if you want to de-couple the value shown in the
         * input element from the values shown in the drop-down list. For example,
         * the input element could show an item's name and the drop-down list
         * could show additional detail.
         */
        headerPath: string;
        /**
         * Gets or sets the name of the property used to get the
         * @see:selectedValue from the @see:selectedItem.
         */
        selectedValuePath: string;
        /**
         * Gets or sets a value indicating whether the drop-down list displays
         * items as plain text or as HTML.
         *
         * The default value for this property is <b>false</b>.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a function used to customize the values shown in
         * the drop-down list.
         * The function takes two arguments, the item index and the default
         * text or html, and returns the new text or html to display.
         *
         * If the formatting function needs a scope (i.e. a meaningful 'this'
         * value), then remember to set the filter using the 'bind' function
         * to specify the 'this' object. For example:
         *
         * <pre>
         *   comboBox.itemFormatter = customItemFormatter.bind(this);
         *   function customItemFormatter(index, content) {
         *     if (this.makeItemBold(index)) {
         *       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
         *     }
         *     return content;
         *   }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Event that fires when items in the drop-down list are created.
         *
         * You can use this event to modify the HTML in the list items.
         * For details, see the @see:ListBox.formatItem event.
         */
        readonly formatItem: Event;
        /**
         * Gets or sets the index of the currently selected item in
         * the drop-down list.
         */
        selectedIndex: number;
        /**
         * Gets or sets the item that is currently selected in
         * the drop-down list.
         */
        selectedItem: any;
        /**
         * Gets or sets the value of the @see:selectedItem, obtained
         * using the @see:selectedValuePath.
         *
         * If the @see:selectedValuePath property is not set, gets or
         * sets the value of the control's @see:selectedItem property.
         *
         * If the @see:itemsSource property is not set, gets or sets
         * the value of the control's @see:text property.
         */
        selectedValue: any;
        /**
         * Gets or sets a value that determines whether the content of the
         * input element should be restricted to items in the @see:itemsSource
         * collection.
         *
         * This property defaults to false on the @see:ComboBox control, and
         * to true on the @see:AutoComplete and @see:InputTime controls.
         */
        isEditable: boolean;
        /**
         * Gets or sets the maximum height of the drop-down list.
         */
        maxDropDownHeight: number;
        /**
         * Gets or sets the maximum width of the drop-down list.
         *
         * The width of the drop-down list is also limited by the width of
         * the control itself (that value represents the drop-down's
         * minimum width).
         */
        maxDropDownWidth: number;
        /**
         * Gets the string displayed in the input element for the item at a
         * given index (always plain text).
         *
         * @param index The index of the item to retrieve the text for.
         */
        getDisplayText(index?: number): string;
        /**
         * Gets the index of the first item that matches a given string.
         *
         * @param text The text to search for.
         * @param fullMatch Whether to look for a full match or just the start of the string.
         * @return The index of the item, or -1 if not found.
         */
        indexOf(text: string, fullMatch: boolean): number;
        /**
         * Gets the @see:ListBox control shown in the drop-down.
         */
        readonly listBox: ListBox;
        /**
         * Occurs when the value of the @see:itemsSource property changes.
         */
        readonly itemsSourceChanged: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         */
        onItemsSourceChanged(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:selectedIndex property changes.
         */
        readonly selectedIndexChanged: Event;
        /**
         * Raises the @see:selectedIndexChanged event.
         */
        onSelectedIndexChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onLostFocus(e?: EventArgs): void;
        onIsDroppedDownChanging(e: CancelEventArgs): boolean;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _updateBtn(): void;
        protected _createDropDown(): void;
        protected _wheel(e: WheelEvent): void;
        protected _dropDownClick(e: MouseEvent): void;
        protected _setText(text: string, fullMatch: boolean): void;
        protected _findNext(text: string, step: number): number;
        protected _keydown(e: KeyboardEvent): void;
        protected _updateInputSelection(start: number): void;
        private _getSelStart();
        private _getSelEnd();
        private _setSelRange(start, end);
    }
}

/**
 * Defines input controls for strings, numbers, dates, times, and colors.
 */
declare module wijmo.input {
    /**
     * The @see:AutoComplete control is an input control that allows callers
     * to customize the item list as the user types.
     *
     * The control is similar to the @see:ComboBox, except the item source is a
     * function (@see:itemsSourceFunction) rather than a static list. For example,
     * you can look up items on remote databases as the user types.
     *
     * The example below creates an @see:AutoComplete control and populates it using
     * a 'countries' array. The @see:AutoComplete searches for the country as the user
     * types, and narrows down the list of countries that match the current input.
     *
     * @fiddle:8HnLx
     */
    class AutoComplete extends ComboBox {
        private _cssMatch;
        private _itemsSourceFn;
        private _itemsSourceFnCallBackBnd;
        private _srchProp;
        private _minLength;
        private _maxItems;
        private _itemCount;
        private _delay;
        private _toSearch;
        private _query;
        private _rxMatch;
        private _rxHighlight;
        private _inCallback;
        private _srchProps;
        /**
         * Initializes a new instance of the @see:AutoComplete class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the minimum input length to trigger auto-complete suggestions.
         *
         * The default value for this property is <b>2</b>.
         */
        minLength: number;
        /**
         * Gets or sets the maximum number of items to display in the drop-down list.
         *
         * The default value for this property is <b>6</b>.
         */
        maxItems: number;
        /**
         * Gets or sets the delay, in milliseconds, between when a keystroke occurs
         * and when the search is performed.
         *
         * The default value for this property is <b>500</b> milliseconds.
         */
        delay: number;
        /**
         * Gets or sets a string containing a comma-separated list of properties to use
         * when searching for items.
         *
         * By default, the @see:AutoComplete control searches for matches against the
         * property specified by the @see:displayMemberPath property.
         * The @see:searchMemberPath property allows you to search using additional
         * properties.
         *
         * For example, the code below would cause the control to display the company
         * name and search by company name, symbol, and country:
         *
         * <pre>var ac = new wijmo.input.AutoComplete('#autoComplete', {
         *   itemsSource: companies,
         *   displayMemberPath: 'name',
         *   searchMemberPath: 'symbol,country'
         * });</pre>
         */
        searchMemberPath: string;
        /**
         * Gets or sets a function that provides list items dynamically as the user types.
         *
         * The function takes three parameters:
         * <ul>
         *     <li>the query string typed by the user</li>
         *     <li>the maximum number of items to return</li>
         *     <li>the callback function to call when the results become available</li>
         * </ul>
         *
         * For example:
         * <pre>autoComplete.itemsSourceFunction = function (query, max, callback) {
         *   // get results from the server
         *   var params = { query: query, max: max };
         *   $.getJSON('companycatalog.ashx', params, function (response) {
         *     // return results to the control
         *     callback(response);
         *   });
         * };</pre>
         */
        itemsSourceFunction: Function;
        /**
         * Gets or sets the name of the CSS class used to highlight any parts
         * of the content that match the search terms.
         */
        cssMatch: string;
        _keydown(e: KeyboardEvent): void;
        _setText(text: string): void;
        _itemSourceFunctionCallback(result: any): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _updateItems(): void;
        protected _filter(item: any): boolean;
        protected _getItemText(item: any, header: boolean): string;
        protected _formatListItem(sender: any, e: FormatItemEventArgs): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:Menu control shows a text element with a drop-down list of commands that
     * the user can invoke by click or touch.
     *
     * The @see:Menu control inherits from @see:ComboBox, so you populate and style it
     * in the same way that you do the @see:ComboBox (see the @see:Menu.itemsSource
     * property).
     *
     * The @see:Menu control adds an @see:Menu.itemClicked event that fires when the user
     * selects an item from the menu. The event handler can inspect the @see:Menu control
     * to determine which item was clicked. For example:
     *
     * <pre>
     * var menu = new wijmo.input.Menu(hostElement);
     * menu.header = 'Main Menu';
     * menu.itemsSource = ['option 1', 'option 2', 'option 3'];
     * menu.itemClicked.addHandler(function(sender, args) {
     *   var menu = sender;
     *   alert('Thanks for selecting item ' + menu.selectedIndex + ' from menu ' + menu.header + '!');
     * });
     * </pre>
     *
     * The example below shows how you can create menus that handle the
     * @see:itemClicked event.
     *
     * @fiddle:5fe93pm8
     */
    class Menu extends ComboBox {
        _hdr: HTMLElement;
        _closing: boolean;
        _cmd: any;
        _cmdPath: string;
        _cmdParamPath: string;
        _subPath: string;
        _defaultItem: any;
        _owner: HTMLElement;
        _isButton: boolean;
        _openOnHover: boolean;
        _closeOnLeave: boolean;
        _toHover: any;
        _subMenu: Menu;
        _hoverEnterBnd: any;
        _hoverLeaveBnd: any;
        _hoverOverBnd: any;
        /**
         * Initializes a new instance of the @see:Menu class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the HTML text shown in the @see:Menu element.
         */
        header: string;
        /**
         * Gets or sets the command to execute when an item is clicked.
         *
         * Commands are objects that implement two methods:
         * <ul>
         *  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
         *  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
         *      that determines whether the controller can execute the command.
         *      If this method returns false, the menu option is disabled.</li>
         * </ul>
         *
         * The parameter passed to the command is defined by the value of the
         * @see:commandParameterPath property of the current item. If the
         * @see:commandParameterPath property is not specified, the parameter
         * passed is the item itself.
         *
         * You can also set commands on individual items using the @see:commandPath
         * property.
         */
        command: any;
        /**
         * Gets or sets the name of the property that contains the command to
         * execute when the user clicks an item.
         *
         * Commands are objects that implement two methods:
         * <ul>
         *  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
         *  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
         *      that determines whether the controller can execute the command.
         *      If this method returns false, the menu option is disabled.</li>
         * </ul>
         */
        commandPath: string;
        /**
         * Gets or sets the name of the property that contains a parameter to use with
         * the command specified by the @see:commandPath property.
         */
        commandParameterPath: string;
        /**
         * Gets or sets the name of the property that contains an array with items
         * to be displayed in a sub-menu.
         */
        subItemsPath: string;
        /**
         * Gets or sets a value that determines whether the menu (and any sub-menus)
         * should open automatically when the mouse hovers over the items.
         *
         * See also the @see:closeOnLeave property, which determines whether the
         * menu should close automatically when the mouse leaves the menu.
         *
         * The default value for this property is <b>false</b>.
         */
        openOnHover: boolean;
        /**
         * Gets or sets a value that determines whether the menu (and any sub-menus)
         * should close automatically when the mouse leaves the menu.
         *
         * This property is applicable only when the @see:openOnHover is set to true.
         *
         * The default value for this property is <b>true</b>.
         */
        closeOnLeave: boolean;
        /**
         * Gets or sets a value that determines whether this @see:Menu should act
         * as a split button instead of a regular menu.
         *
         * The default value for this property is <b>false</b>.
         *
         * The difference between regular menus and split buttons is what happens
         * when the user clicks the menu header.
         * In regular menus, clicking the header shows or hides the menu options.
         * In split buttons, clicking the header raises the @see:Menu.itemClicked
         * event and/or invokes the command associated with the last option selected by
         * the user as if the user had picked the item from the drop-down list.
         *
         * If you want to differentiate between clicks on menu items and the button
         * part of a split button, check the value of the @see:Menu.isDroppedDown property
         * of the event sender. If that is true, then a menu item was clicked; if it
         * is false, then the button was clicked.
         *
         * For example, the code below implements a split button that uses the drop-down
         * list only to change the default item/command, and triggers actions only when
         * the button is clicked:
         *
         * <pre>&lt;-- view --&gt;
         * &lt;wj-menu is-button="true" header="Run" value="browser"
         *   item-clicked="itemClicked(s, e)"&gt;
         *   &lt;wj-menu-item value="'Internet Explorer'"&gt;Internet Explorer&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Chrome'"&gt;Chrome&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Firefox'"&gt;Firefox&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Safari'"&gt;Safari&lt;/wj-menu-item&gt;
         *   &lt;wj-menu-item value="'Opera'"&gt;Opera&lt;/wj-menu-item&gt;
         * &lt;/wj-menu&gt;
         *
         * // controller
         * $scope.browser = 'Internet Explorer';
         * $scope.itemClicked = function (s, e) {
         *   // if not dropped down, click was on the button
         *   if (!s.isDroppedDown) {
         *     alert('running ' + $scope.browser);
         *   }
         *}</pre>
         */
        isButton: boolean;
        /**
         * Gets or sets the element that owns this @see:Menu.
         *
         * This variable is set by the wj-context-menu directive in case a single
         * menu is used as a context menu for several different elements.
         */
        owner: HTMLElement;
        /**
         * Shows the menu at a given location.
         *
         * This method is useful if you want to use the menu as a context
         * menu, attached to one or more elements on the page. For example:
         *
         * <pre>// create menu
         * var div = document.createElement('div');
         * var menu = new wijmo.input.Menu(div, {
         *     itemsSource: 'New,Open,Save,Exit'.split(','),
         *     itemClicked: function (s, e) {
         *         alert('thanks for picking ' + menu.selectedIndex);
         *     }
         * });
         *
         * // use it as a context menu for one or more elements
         * var element = document.getElementById('btn');
         * element.addEventListener('contextmenu', function (e) {
         *     e.preventDefault();
         *     menu.show(e);
         * });</pre>
         *
         * @param position An optional <b>MouseEvent</b> or reference element
         * that determines the position where the menu should be displayed.
         * If not provided, the menu is displayed at the center of the screen.
         */
        show(position?: any): void;
        /**
         * Hides the menu.
         *
         * This method is useful if you want to hide a context menu displayed
         * with the @see:show method.
         */
        hide(): void;
        /**
         * Occurs when the user picks an item from the menu.
         *
         * The handler can determine which item was picked by reading the event sender's
         * @see:selectedIndex property.
         */
        readonly itemClicked: Event;
        /**
         * Raises the @see:itemClicked event.
         */
        onItemClicked(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        _updateHoverEvents(): void;
        _getSubItems(item: any): any[];
        _formatMenuItem(s: ListBox, e: FormatItemEventArgs): void;
        protected _keydown(e: KeyboardEvent): void;
        protected _dropDownClick(e: MouseEvent): void;
        private _showSubMenu();
        private _raiseCommand(e?);
        private _getCommand(item);
        private _getCommandParm(item);
        private _executeCommand(cmd, parm);
        private _canExecuteCommand(cmd, parm);
        private _enableDisableItems();
        private _clearHover();
        private _hoverEnter(e);
        private _hoverLeave(e);
        private _hoverOver(e);
    }
}

declare module wijmo.input {
    /**
     * The @see:MultiSelect control allows users to select multiple items from
     * drop-down lists that contain custom objects or simple strings.
     *
     * The @see:MultiSelect control extends @see:ComboBox, with all the usual
     * properties, including @see:MultiSelect.itemsSource and
     * @see:MultiSelect.displayMemberPath.
     *
     * Like the @see:ListBox control, it has a @see:MultiSelect.checkedMemberPath
     * property that defines the name of the property that determines whether an
     * item is checked or not.
     *
     * The items currently checked (selected) can be obtained using the
     * @see:MultiSelect.checkedItems property.
     *
     * The control header is fully customizable. By default, it shows up to two items
     * selected and the item count after that. You can change the maximum number of
     * items to display (@see:MultiSelect.maxHeaderItems), the message shown when no
     * items are selected (@see:MultiSelect.placeholder), and the format string used to
     * show the item count (@see:MultiSelect.headerFormat).
     *
     * Alternatively, you can provide a function to generate the header content based
     * on whatever criteria your application requires (@see:MultiSelect.headerFormatter).
     *
     * The example below shows how you can use a @see:MultiSelect control to select
     * multiple items from a drop-down list:
     *
     * @fiddle:44w7fob2
     */
    class MultiSelect extends ComboBox {
        private _maxHdrItems;
        private _readOnly;
        private _selectAll;
        private _selectAllCheckbox;
        private _selectAllSpan;
        private _selectAllLabel;
        private _hdrFmt;
        private _hdrFormatter;
        static _DEF_CHECKED_PATH: string;
        /**
         * Initializes a new instance of the @see:MultiSelect class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets whether the control should display a "Select All" checkbox
         * above the items to select or de-select all items.
         *
         * The default value for this property is <b>false</b>.
         */
        showSelectAllCheckbox: boolean;
        /**
         * Gets or sets the string to be used as a label for the "Select All"
         * checkbox that is displayed when the @see:showSelectAllCheckbox
         * property is set to true.
         *
         * This property is set to null by default, which causes the control
         * to show a localized version of the string "Select All".
         */
        selectAllLabel: string;
        /**
         * Gets or sets the name of the property used to control the checkboxes
         * placed next to each item.
         */
        checkedMemberPath: string;
        /**
         * Gets or sets the maximum number of items to display on the control header.
         *
         * If no items are selected, the header displays the text specified by the
         * @see:placeholder property.
         *
         * If the number of selected items is smaller than or equal to the value of the
         * @see:maxHeaderItems property, the selected items are shown in the header.
         *
         * If the number of selected items is greater than @see:maxHeaderItems, the
         * header displays the selected item count instead.
         */
        maxHeaderItems: number;
        /**
         * Gets or sets the format string used to create the header content
         * when the control has more than @see:maxHeaderItems items checked.
         *
         * The format string may contain the '{count}' replacement string
         * which gets replaced with the number of items currently checked.
         * The default value for this property in the English culture is
         * '{count:n0} items selected'.
         */
        headerFormat: string;
        /**
         * Gets or sets a function that gets the text displayed in the control
         * header.
         *
         * By default, the control header content is determined based on the
         * @see:placeholder, @see:maxHeaderItems, and on the current selection.
         *
         * You may customize the header content by specifying a function that
         * returns a custom string based on whatever criteria your application
         * requires.
         */
        headerFormatter: Function;
        /**
         * Gets or sets an array containing the items that are currently checked.
         */
        checkedItems: any[];
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        readonly checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _createDropDown(): void;
        isReadOnly: boolean;
        refresh(fullUpdate?: boolean): void;
        protected _setText(text: string, fullMatch: boolean): void;
        protected _keydown(e: KeyboardEvent): void;
        private _updateHeader();
    }
}

declare module wijmo.input {
    /**
     * The @see:MultiAutoComplete control allows users to pick items from lists
     * that contain custom objects or simple strings.
     *
     * The example below shows how you can use a @see:MultiAutoComplete to
     * enter multiple items picked from a single list:
     *
     * @fiddle:94c6wb77
     */
    class MultiAutoComplete extends AutoComplete {
        private _wjTpl;
        private _wjInput;
        private _helperInput;
        private _selItems;
        private _maxSelItems;
        private _lastInputValue;
        private _selPath;
        private _notAddItm;
        static _clsActive: string;
        /**
         * Initializes a new instance of the @see:MultiAutoComplete class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Overridden to prevent the control from showing the drop-down button.
         */
        showDropDownButton: boolean;
        /**
         * Gets or sets the maximum number of items that can be selected.
         *
         * Setting this property to null (the default value) allows users
         * to pick any number of items.
         */
        maxSelectedItems: number;
        /**
         * Gets or sets the name of the property used to control which
         * item will be selected.
         */
        selectedMemberPath: string;
        /**
         * Gets or sets an array containing the items that are currently
         * selected.
         */
        selectedItems: any[];
        /**
         * Occurs when the value of the @see:selectedItems property changes.
         */
        readonly selectedItemsChanged: Event;
        /**
         * Raises the @see:selectedItemsChanged event.
         */
        onSelectedItemsChanged(e?: EventArgs): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        _keydown(e: KeyboardEvent): void;
        protected _updateState(): void;
        private _keyup(e);
        private _addHelperInput();
        private _refreshHeader();
        private _insertToken(item);
        private _updateMaxItems();
        private _updateFocus();
        private _addItem(clearSelected);
        private _delItem(isDelKey);
        private _updateSelItems(itm, isAdd);
        private _createItem(tokenTxt);
        private _itemOn(isPrev);
        private _itemOff();
        private _initSeltems();
        private _getSelItem(index);
        private _setSelItem(item, selected);
        private _clearSelIndex();
        private _hasSelectedMemeberPath();
        private _disableInput(disabled);
        private _adjustInputWidth();
        private _getItemIndex(token);
    }
}

declare module wijmo.input {
    /**
     * Specifies actions that trigger showing and hiding @see:Popup controls.
     */
    enum PopupTrigger {
        /** No triggers; popups must be shown and hidden using code. */
        None = 0,
        /** Show or hide the popup when the owner element is clicked. */
        Click = 1,
        /** Hide the popup when it loses focus. */
        Blur = 2,
        /** Show or hide the popup when the owner element is clicked, hide when it loses focus. */
        ClickOrBlur = 3,
    }
    /**
     * Class that shows an element as a popup.
     *
     * Popups may be have @see:owner elements, in which case they behave
     * as rich tooltips that may be shown or hidden based on actions
     * specified by the @see:Popup.showTrigger and @see:Popup.hideTrigger
     * properties.
     *
     * Popups with no owner elements behave like dialogs. They are centered
     * on the screen and displayed using the @see:show method.
     *
     * To close a @see:Popup, call the @see:Popup.hide method.
     *
     * Alternatively, any clickable elements within a @see:Popup that have
     * the classes starting with the 'wj-hide' string will hide the @see:Popup
     * when clicked and will set the @see:Popup.dialogResult property to the
     * class name so the caller may take appropriate action.
     *
     * For example, the @see:Popup below will be hidden when the user presses
     * the OK or Cancel buttons, and the @see:Popup.dialogResult property will
     * be set to either 'wj-hide-cancel' or 'wj-hide-ok':
     *
     * <pre>&lt;button id="btnPopup"&gt;Show Popup&lt;/button&gt;
     * &lt;wj-popup owner="#btnPopup" style="padding:12px"&gt;
     *   &lt;p&gt;Press one of the buttons below to hide the Popup.&lt;/p&gt;
     *   &lt;hr/&gt;
     *   &lt;button class="wj-hide-ok" ng-click="handleOK()"&gt;OK&lt;/button&gt;
     *   &lt;button class="wj-hide-cancel"&gt;Cancel&lt;/button&gt;
     * &lt;/wj-popup&gt;</pre>
     *
     * The example below shows how you can use the @see:Popup control to implement
     * popups attached to owner elements and dialogs:
     *
     * @fiddle:j9t6s1xp
     */
    class Popup extends Control {
        static _DRAG_THRESHOLD: number;
        protected _owner: HTMLElement;
        protected _modal: boolean;
        protected _showTrigger: PopupTrigger;
        protected _hideTrigger: PopupTrigger;
        protected _hideAnim: any;
        protected _fadeIn: boolean;
        protected _fadeOut: boolean;
        protected _removeOnHide: boolean;
        protected _draggable: boolean;
        protected _dragged: boolean;
        protected _bkdrop: HTMLDivElement;
        protected _result: any;
        protected _resultEnter: any;
        protected _callback: Function;
        protected _refreshing: boolean;
        protected _visible: boolean;
        protected _wasVisible: boolean;
        protected _composing: boolean;
        protected _ownerClickBnd: any;
        protected _ownerMousedownBnd: any;
        /**
         * Initializes a new instance of the @see:Popup class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the element that owns this @see:Popup.
         *
         * If the @see:owner is null, the @see:Popup behaves like a dialog.
         * It is centered on the screen and must be shown using the
         * @see:show method.
         */
        owner: HTMLElement;
        /**
         * Gets or sets the HTML element contained in this @see:Popup.
         */
        content: HTMLElement;
        /**
         * Gets or sets the actions that show the @see:Popup.
         *
         * By default, the @see:showTrigger property is set to @see:PopupTrigger.Click,
         * which causes the popup to appear when the user clicks the owner element.
         *
         * If you set the @see:showTrigger property to @see:PopupTrigger.None, the popup
         * will be shown only when the @see:show method is called.
         */
        showTrigger: PopupTrigger;
        /**
         * Gets or sets the actions that hide the @see:Popup.
         *
         * By default, the @see:hideTrigger property is set to @see:PopupTrigger.Blur,
         * which hides the popup when it loses focus.
         *
         * If you set the @see:hideTrigger property to @see:PopupTrigger.Click, the popup
         * will be hidden only when the owner element is clicked.
         *
         * If you set the @see:hideTrigger property to @see:PopupTrigger.None, the popup
         * will be hidden only when the @see:hide method is called.
         */
        hideTrigger: PopupTrigger;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * use a fade-in animation when it is shown.
         *
         * The default value for this property is <b>true</b>.
         */
        fadeIn: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * use a fade-out animation when it is hidden.
         *
         * The default value for this property is <b>true</b>.
         */
        fadeOut: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup element
         * should be removed from the DOM when the @see:Popup is hidden, as
         * opposed to being hidden.
         *
         * The default value for this property is <b>true</b>.
         */
        removeOnHide: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Popup should
         * be displayed as a modal dialog.
         *
         * Modal dialogs show a dark backdrop that makes the @see:Popup stand
         * out from other content on the page.
         *
         * If you want to make a dialog truly modal, also set the @see:Popup.hideTrigger
         * property to @see:PopupTrigger.None, so users won't be able to click the
         * backdrop to dismiss the dialog. In this case, the dialog will close only
         * if the @see:Popup.hide method is called or if the user presses the Escape
         * key.
         *
         * The default value for this property is <b>false</b>.
         */
        modal: boolean;
        /**
         * Gets or sets a value that determines whether the popup can be dragged
         * with the mouse by its header.
         *
         * The header is identified by the '.wj-dialog-header' CSS selector.
         * If the dialog does not contain any elements with the 'wj-dialog-header'
         * class, user will not be able to drag the popup.
         *
         * When making popups draggable, you may want to set the cursor property
         * of the '.wj-dialog-header' CSS selector. For example:
         *
         * <pre>
         * &lt;style&gt;
         *   .wj-popup {
         *     width: 30%;
         *   }
         *   .wj-dialog-header {
         *     cursor: move;
         *   }
         * &lt;/style&gt;
         * </pre>
         *
         * The default value for this property is <b>false</b>.
         */
        isDraggable: boolean;
        /**
         * Gets or sets a value used as a return value for the @see:Popup after
         * it is hidden.
         *
         * This property is set to null when the @see:Popup is displayed. It can be
         * set in response to button click events or in the call to the @see:hide
         * method to provide a result value to callers.
         */
        dialogResult: any;
        /**
         * Gets or sets a value to be used as a @see:dialogResult when the user presses
         * the Enter key while the @see:Popup is visible.
         *
         * If the user presses Enter and the @see:dialogResultEnter property is not null,
         * the popup checks whether all its child elements are in a valid state.
         * If so, the popup is closed and the @see:dialogResult property is set to
         * the value of the @see:dialogResultEnter property.
         */
        dialogResultEnter: any;
        /**
         * Gets a value that determines whether the @see:Popup is currently visible.
         */
        readonly isVisible: boolean;
        /**
         * Shows the @see:Popup.
         *
         * @param modal Whether to show the popup as a modal dialog. If provided, this
         * sets the value of the @see:modal property.
         * @param handleResult Callback invoked when the popup is hidden. If provided,
         * this should be a function that receives the popup as a parameter.
         *
         * The <b>handleResult</b> callback allows callers to handle the result of modal
         * dialogs without attaching handlers to the @see:hidden event. For example,
         * the code below shows a dialog used to edit the current item in a
         * @see:CollectionView. The edits are committed or canceled depending on the
         * @see:Popup.dialogResult value. For example:
         *
         * <pre>$scope.editCurrentItem = function () {
         *   $scope.data.editItem($scope.data.currentItem);
         *   $scope.itemEditor.show(true, function (e) {
         *     if (e.dialogResult == 'wj-hide-ok') {
         *       $scope.data.commitEdit();
         *     } else {
         *       $scope.data.cancelEdit();
         *     }
         *   });
         * }</pre>
         */
        show(modal?: boolean, handleResult?: Function): void;
        /**
         * Hides the @see:Popup.
         *
         * @param dialogResult Optional value assigned to the @see:dialogResult property
         * before closing the @see:Popup.
         */
        hide(dialogResult?: any): void;
        /**
         * Occurs before the @see:Popup is shown.
         */
        readonly showing: Event;
        /**
         * Raises the @see:showing event.
         */
        onShowing(e: CancelEventArgs): boolean;
        /**
         * Occurs after the @see:Popup has been shown.
         */
        readonly shown: Event;
        /**
         * Raises the @see:shown event.
         */
        onShown(e?: EventArgs): void;
        /**
         * Occurs before the @see:Popup is hidden.
         */
        readonly hiding: Event;
        /**
         * Raises the @see:hiding event.
         */
        onHiding(e: CancelEventArgs): boolean;
        /**
         * Occurs after the @see:Popup has been hidden.
         */
        readonly hidden: Event;
        /**
         * Raises the @see:hidden event.
         */
        onHidden(e?: EventArgs): void;
        dispose(): void;
        onLostFocus(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        _makeDraggable(draggable: boolean): void;
        protected _handleResize(): void;
        protected _ownerClick(e: any): void;
        protected _ownerMouseDown(e: any): void;
        private _showBackdrop();
        private _validateAndHide(result);
    }
}

declare module wijmo.input {
    /**
     * The @see:InputDate control allows users to type in dates using any format
     * supported by the @see:Globalize class, or to pick dates from a drop-down
     * that contains a @see:Calendar control.
     *
     * Use the @see:min and @see:max properties to restrict the range of
     * values that the user can enter.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to gets or set the currently selected date.
     *
     * The example below shows a <b>Date</b> value (that includes date and time information)
     * using an @see:InputDate and an an @see:InputTime control. Notice how both controls
     * are bound to the same controller variable, and each edits the appropriate information
     * (either date or time). The example also shows a @see:Calendar control that you can
     * use to select the date with a single click.
     *
     * @fiddle:vgc3Y
     */
    class InputDate extends DropDown {
        private _calendar;
        private _value;
        private _format;
        private _calChanged;
        private _calChanging;
        private _msk;
        /**
         * Initializes a new instance of the @see:InputDate class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the current date.
         *
         * The default value for this property is the current date.
         */
        value: Date;
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets or sets a value that indicates whether users can select
         * days, months, or no values at all.
         *
         * This property affects the behavior of the drop-down calendar,
         * but not the format used to display dates.
         * If you set @see:selectionMode to 'Month', you should normally
         * set the @see:format property to 'MMM yyyy' or some format that
         * does not include the day. For example:
         *
         * <pre>var inputDate = new wijmo.input.InputDate('#el, {
         *   selectionMode: 'Month',
         *   format: 'MMM yyyy'
         * });</pre>
         *
         * The default value for this property is <b>DateSelectionMode.Day</b>.
         */
        selectionMode: DateSelectionMode;
        /**
         * Gets or sets the earliest date that the user can enter.
         *
         * The default value for this property is <b>null</b>, which means no earliest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest date that the user can enter.
         *
         * The default value for this property is <b>null</b>, which means no latest
         * date is defined.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets a value that determines whether the calendar buttons
         * should act as repeat buttons, firing repeatedly as the button
         * remains pressed.
         *
         * The default value for this property is <b>true</b>.
         */
        repeatButtons: boolean;
        /**
         * Gets or sets a value that determines whether the drop-down
         * calendar should display a list of years when the user clicks
         * the header element on the year calendar.
         *
         * The default value for this property is <b>true</b>.
         */
        showYearPicker: boolean;
        /**
         * Gets or sets the format used to display the selected date.
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * Date format string</a>.
         *
         * The default value for this property is <b>d</b>, the culture-dependent
         * short date pattern (e.g. 6/15/2020 in the US, 15/6/2020 in France, or
         * 2020/6/15 in Japan).
         */
        format: string;
        /**
         * Gets or sets a mask to use while editing.
         *
         * The mask format is the same one that the @see:wijmo.input.InputMask
         * control uses.
         *
         * If specified, the mask must be compatible with the value of
         * the @see:format property. For example, the mask '99/99/9999' can
         * be used for entering dates formatted as 'MM/dd/yyyy'.
         */
        mask: string;
        /**
         * Gets a reference to the @see:Calendar control shown in the drop-down box.
         */
        readonly calendar: Calendar;
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to <b>"tel"</b>, a value that causes mobile  devices
         * to show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and therefore
         * is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets a validator function to determine whether dates are valid for selection.
         *
         * If specified, the validator function should take one parameter representing the
         * date to be tested, and should return false if the date is invalid and should not
         * be selectable.
         *
         * For example, the code below prevents users from selecting dates that fall on
         * weekends:
         * <pre>
         * inputDate.itemValidator = function(date) {
         *   var weekday = date.getDay();
         *   return weekday != 0 && weekday != 6;
         * }
         * </pre>
         */
        itemValidator: Function;
        /**
         * Gets or sets a formatter function to customize dates in the drop-down calendar.
         *
         * The formatter function can add any content to any date. It allows
         * complete customization of the appearance and behavior of the calendar.
         *
         * If specified, the function takes two parameters:
         * <ul>
         *     <li>the date being formatted </li>
         *     <li>the HTML element that represents the date</li>
         * </ul>
         *
         * For example, the code below shows weekends with a yellow background:
         * <pre>
         * inputDate.itemFormatter = function(date, element) {
         *   var day = date.getDay();
         *   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _createDropDown(): void;
        protected _updateDropDown(): void;
        protected _keydown(e: KeyboardEvent): void;
        private _canChangeValue();
        protected _clamp(value: Date): Date;
        protected _commitText(): void;
        private _isValidDate(value);
    }
}

declare module wijmo.input {
    /**
     * The @see:InputTime control allows users to enter times using any format
     * supported by the @see:Globalize class, or to pick times from a drop-down
     * list.
     *
     * The @see:min, @see:max, and @see:step properties determine the values shown
     * in the list.
     *
     * For details about using the @see:min and @see:max properties, please see the
     * <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * The @see:value property gets or sets a @see:Date object that represents the time
     * selected by the user.
     *
     * The example below shows a <b>Date</b> value (that includes date and time information)
     * using an @see:InputDate and an @see:InputTime control. Notice how both controls
     * are bound to the same controller variable, and each edits the appropriate information
     * (either date or time). The example also shows a @see:Calendar control that can be
     * used to select the date with a single click.
     *
     * @fiddle:vgc3Y
     */
    class InputTime extends ComboBox {
        _value: Date;
        _min: Date;
        _max: Date;
        _step: number;
        _format: string;
        _msk: _MaskProvider;
        _hasCustomItems: boolean;
        /**
         * Initializes a new instance of the @see:InputTime class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to "tel", a value that causes mobile devices to
         * show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and therefore
         * is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets the current input time.
         */
        value: Date;
        /**
         * Gets or sets the text shown in the control.
         */
        text: string;
        /**
         * Gets or sets the earliest time that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: Date;
        /**
         * Gets or sets the latest time that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: Date;
        /**
         * Gets or sets the number of minutes between entries in the drop-down list.
         *
         * The default value for this property is 15 minutes.
         * Setting it to null, zero, or any negative value disables the drop-down.
         */
        step: number;
        /**
         * Gets or sets the format used to display the selected time (see @see:Globalize).
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * time format string</a>.
         */
        format: string;
        /**
         * Gets or sets a mask to use while the user is editing.
         *
         * The mask format is the same used by the @see:wijmo.input.InputMask
         * control.
         *
         * If specified, the mask must be compatible with the value of
         * the @see:format property. For example, you can use the mask '99:99 >LL'
         * for entering short times (format 't').
         */
        mask: string;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        onItemsSourceChanged(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        onSelectedIndexChanged(e?: EventArgs): void;
        _clamp(value: Date): Date;
        protected _wheel(e: WheelEvent): void;
        protected _updateInputSelection(start: number): void;
        protected _updateItems(): void;
        private _getTime(value);
        protected _keydown(e: KeyboardEvent): void;
        protected _commitText(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputDateTime control extends the @see:InputDate control to allows users
     * to input dates and times, either by typing complete date/time values in any format
     * supported by the @see:Globalize class, or by picking dates from a drop-down calendar
     * and times from a drop-down list.
     *
     * Use the @see:InputDateTime.min and @see:InputDateTime.max properties to restrict
     * the range of dates that the user can enter.
     *
     * Use the @see:InputDateTime.timeMin and @see:InputDateTime.timeMax properties to
     * restrict the range of times that the user can enter.
     *
     * Use the @see:InputDateTime.value property to gets or set the currently selected
     * date/time.
     *
     * The example below shows how you can use an @see:InputDateTime control to edit
     * dates and times using a single control:
     *
     * @fiddle:465gmuL2
     */
    class InputDateTime extends InputDate {
        private _btnTm;
        private _inputTime;
        private _hadFocus;
        /**
         * Gets or sets the template used to instantiate @see:InputDateTime controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:InputDateTime class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the earliest time that the user can enter.
         */
        timeMin: Date;
        /**
         * Gets or sets the latest time that the user can enter.
         */
        timeMax: Date;
        /**
         * Gets or sets the format used to display times in the drop-down list.
         *
         * This property does not affect the value shown in the control's input element.
         * That value is formatted using the @see:format property.
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
         * time format string</a>.
         */
        timeFormat: string;
        /**
         * Gets or sets the number of minutes between entries in the drop-down list of times.
         */
        timeStep: number;
        /**
         * Gets a reference to the inner @see:InputTime control so you can access its
         * full object model.
         */
        readonly inputTime: InputTime;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        protected _updateBtn(): void;
        protected _clamp(value: Date): Date;
        protected _commitText(): void;
        protected _setDropdown(e: HTMLElement): boolean;
        protected _updateDropDown(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputNumber control allows users to enter numbers.
     *
     * The control prevents users from accidentally entering invalid data and
     * formats the number as it is edited.
     *
     * Pressing the minus key reverses the sign of the value being edited,
     * regardless of cursor position.
     *
     * You may use the @see:min and @see:max properties to limit the range of
     * acceptable values, and the @see:step property to provide spinner buttons
     * that increase or decrease the value with a click.
     *
     * For details about using the @see:min and @see:max properties, please see
     * the <a href="static/minMax.html">Using the min and max properties</a> topic.
     *
     * Use the @see:value property to get or set the currently selected number.
     *
     * The example below creates several @see:InputNumber controls and shows
     * the effect of using different formats, ranges, and step values.
     *
     * @fiddle:Cf9L9
     */
    class InputNumber extends Control {
        _tbx: HTMLInputElement;
        _btnUp: HTMLElement;
        _btnDn: HTMLElement;
        _value: number;
        _min: number;
        _max: number;
        _format: string;
        _step: number;
        _showBtn: boolean;
        _readOnly: boolean;
        _oldText: string;
        _composing: boolean;
        _chrDec: string;
        _chrCur: string;
        _chrNeg: string;
        _chrPls: string;
        _chrPct: string;
        _chrTho: string;
        _fmtSpc: string;
        _fmtPrc: number;
        _rxSym: RegExp;
        _rxNeg: RegExp;
        _delKey: boolean;
        _rptUp: _ClickRepeater;
        _rptDn: _ClickRepeater;
        /**
         * Gets or sets the template used to instantiate @see:InputNumber controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:InputNumber class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted by the control.
         *
         * By default, this property is set to "tel", a value that causes mobile devices to
         * show a numeric keypad that includes a negative sign and a decimal separator.
         *
         * Use this property to change the default setting if the default does not work well
         * for the current culture, device, or application. In those cases, try changing
         * the value to "number" or "text."
         *
         * Note that input elements with type "number" prevent selection in Chrome and
         * therefore that type is not recommended. For more details, see this link:
         * http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome
         */
        inputType: string;
        /**
         * Gets or sets the current value of the control.
         */
        value: number;
        /**
         * Gets or sets a value indicating whether the control value must be
         * a number or whether it can be set to null (by deleting the content
         * of the control).
         *
         * The default value for this property is <b>true</b>.
         */
        isRequired: boolean;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets the smallest number that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: number;
        /**
         * Gets or sets the largest number that the user can enter.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: number;
        /**
         * Gets or sets the amount to add or subtract to the @see:value property
         * when the user clicks the spinner buttons.
         */
        step: number;
        /**
         * Gets or sets the format used to display the number being edited (see @see:Globalize).
         *
         * The format string is expressed as a .NET-style
         * <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx" target="_blank">
         * standard numeric format string</a>.
         */
        format: string;
        /**
         * Gets or sets the text shown in the control.
         */
        text: string;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets or sets a value indicating whether the control displays spinner buttons
         * to increment or decrement the value (the step property must be set to a
         * value other than zero).
         *
         * The default value for this property is <b>true</b>.
         */
        showSpinner: boolean;
        /**
         * Gets or sets a value that determines whether the spinner buttons
         * should act as repeat buttons, firing repeatedly as the button
         * remains pressed.
         *
         * The default value for this property is <b>true</b>.
         */
        repeatButtons: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Returns a value within the range defined by the @see:min and @see:max
         * properties.
         *
         * @param value Value to clamp.
         */
        clamp(value: number): number;
        /**
         * Occurs when the value of the @see:text property changes.
         */
        readonly textChanged: Event;
        /**
         * Raises the @see:textChanged event.
         */
        onTextChanged(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        dispose(): void;
        onGotFocus(e: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        refresh(fullUpdate?: boolean): void;
        private _updateSymbols();
        private _isNumeric(chr, digitsOnly);
        private _getInputRange(digitsOnly);
        private _flipSign();
        private _getSelStartDigits();
        private _setSelStartDigits(start);
        private _increment(step);
        protected _updateBtn(): void;
        protected _setText(text: string): void;
        protected _keypress(e: KeyboardEvent): void;
        protected _keydown(e: KeyboardEvent): void;
        protected _input(): void;
        protected _clickSpinner(e: MouseEvent): void;
        protected _updateAria(): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputMask control provides a way to govern what a user is allowed
     * to enter.
     *
     * The control prevents users from accidentally entering invalid data and
     * saves time by skipping over literals (such as slashes in dates) as the
     * user types.
     *
     * The mask used to validate the input is defined by the @see:InputMask.mask
     * property, which may contain one or more of the following special
     * characters:
     *
     *  <dl class="dl-horizontal">
     *      <dt>0</dt>      <dd>Digit.</dd>
     *      <dt>9</dt>      <dd>Digit or space.</dd>
     *      <dt>#</dt>      <dd>Digit, sign, or space.</dd>
     *      <dt>L</dt>      <dd>Letter.</dd>
     *      <dt>l</dt>      <dd>Letter or space.</dd>
     *      <dt>A</dt>      <dd>Alphanumeric.</dd>
     *      <dt>a</dt>      <dd>Alphanumeric or space.</dd>
     *      <dt>.</dt>      <dd>Localized decimal point.</dd>
     *      <dt>,</dt>      <dd>Localized thousand separator.</dd>
     *      <dt>:</dt>      <dd>Localized time separator.</dd>
     *      <dt>/</dt>      <dd>Localized date separator.</dd>
     *      <dt>$</dt>      <dd>Localized currency symbol.</dd>
     *      <dt>&lt;</dt>   <dd>Converts characters that follow to lowercase.</dd>
     *      <dt>&gt;</dt>   <dd>Converts characters that follow to uppercase.</dd>
     *      <dt>|</dt>      <dd>Disables case conversion.</dd>
     *      <dt>\</dt>      <dd>Escapes any character, turning it into a literal.</dd>
     *      <dt>９</dt>     <dd>DBCS Digit.</dd>
     *      <dt>Ｊ</dt>     <dd>DBCS Hiragana.</dd>
     *      <dt>Ｇ</dt>     <dd>DBCS big Hiragana.</dd>
     *      <dt>Ｋ</dt>     <dd>DBCS Katakana. </dd>
     *      <dt>Ｎ</dt>     <dd>DBCS big Katakana.</dd>
     *      <dt>K</dt>      <dd>SBCS Katakana.</dd>
     *      <dt>N</dt>      <dd>SBCS big Katakana.</dd>
     *      <dt>Ｚ</dt>     <dd>Any DBCS character.</dd>
     *      <dt>H</dt>      <dd>Any SBCS character.</dd>
     *      <dt>All others</dt><dd>Literals.</dd>
     *  </dl>
     *
     * The example below shows how you can use the @see:InputMask control to
     * edit strings with custom formats:
     *
     * @fiddle:j6er01bx
     */
    class InputMask extends Control {
        _tbx: HTMLInputElement;
        _oldValue: string;
        _msk: _MaskProvider;
        /**
         * Gets or sets the template used to instantiate @see:InputMask controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:InputMask class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets the HTML input element hosted by the control.
         *
         * Use this property in situations where you want to customize the
         * attributes of the input element.
         */
        readonly inputElement: HTMLInputElement;
        /**
         * Gets or sets the "type" attribute of the HTML input element hosted
         * by the control.
         *
         * The default value for this property is <b>text</b>.
         */
        inputType: string;
        /**
         * Gets or sets the text currently shown in the control.
         */
        value: string;
        /**
         * Gets or sets the raw value of the control (excluding mask literals).
         *
         * The raw value of the control excludes prompt and literal characters.
         * For example, if the @see:mask property is set to "AA-9999" and the
         * user enters the value "AB-1234", the @see:rawValue property will
         * return "AB1234", excluding the hyphen that is part of the mask.
         */
        rawValue: string;
        /**
         * Gets or sets the mask used to validate the input as the user types.
         *
         * The mask is defined as a string with one or more of the masking
         * characters listed in the @see:InputMask topic.
         */
        mask: string;
        /**
         * Gets or sets the symbol used to show input positions in the control.
         */
        promptChar: string;
        /**
         * Gets or sets the string shown as a hint when the control is empty.
         */
        placeholder: string;
        /**
         * Gets a value that indicates whether the mask has been completely filled.
         */
        readonly maskFull: boolean;
        /**
         * Gets or sets a value indicating whether the control value
         * must be a non-empty string.
         *
         * The default value for this property is <b>true</b>.
         */
        isRequired: boolean;
        /**
         * Gets or sets a value that indicates whether the user can modify
         * the control value using the mouse and keyboard.
         *
         * The default value for this property is <b>false</b>.
         */
        isReadOnly: boolean;
        /**
         * Sets the focus to the control and selects all its content.
         */
        selectAll(): void;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        _updateState(): void;
        dispose(): void;
        refresh(fullUpdate?: boolean): void;
        onGotFocus(e: any): void;
    }
}

declare module wijmo.input {
    /**
     * The @see:InputColor control allows users to select colors by typing in
     * HTML-supported color strings, or to pick colors from a drop-down
     * that shows a @see:ColorPicker control.
     *
     * Use the @see:value property to get or set the currently selected color.
     *
     * @fiddle:z84ebpec
     */
    class InputColor extends DropDown {
        private _ePreview;
        private _colorPicker;
        private _value;
        /**
         * Initializes a new instance of the @see:InputColor class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the current color.
         */
        value: string;
        /**
         * Gets or sets the text shown on the control.
         */
        text: string;
        /**
         * Gets or sets a value indicating whether the @see:ColorPicker allows users
         * to edit the color's alpha channel (transparency).
         *
         * The default value for this property is <b>true</b>.
         */
        showAlphaChannel: boolean;
        /**
         * Gets or sets an array that contains the colors in the palette.
         *
         * The palette contains ten colors, represented by an array with
         * ten strings. The first two colors are usually white and black.
         */
        palette: string[];
        /**
         * Gets a reference to the @see:ColorPicker control shown in the drop-down.
         */
        readonly colorPicker: ColorPicker;
        /**
         * Occurs when the value of the @see:value property changes, either
         * as a result of user actions or by assignment in code.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        onIsDroppedDownChanged(e?: EventArgs): void;
        protected _createDropDown(): void;
        protected _keydown(e: KeyboardEvent): void;
        protected _commitText(): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
declare module wijmo.chart {
    /**
     * Class that represents a data point (with x and y coordinates).
     *
     * X and Y coordinates can be specified as a number or a Date object(time-based data).
     */
    class DataPoint {
        /**
         * Gets or sets X coordinate value of this @see:DataPoint.
         */
        x: any;
        /**
         * Gets or sets Y coordinate value of this @see:DataPoint.
         */
        y: any;
        /**
         * Initializes a new instance of the @see:DataPoint class.
         *
         * @param x X coordinate of the new DataPoint.
         * @param y Y coordinate of the new DataPoint.
         */
        constructor(x?: any, y?: any);
    }
    /**
     * Provides arguments for @see:Series events.
     */
    class RenderEventArgs extends CancelEventArgs {
        _engine: IRenderEngine;
        /**
         * Initializes a new instance of the @see:RenderEventArgs class.
         *
         * @param engine (@see:IRenderEngine) The rendering engine to use.
         */
        constructor(engine: IRenderEngine);
        /**
         * Gets the @see:IRenderEngine object to use for rendering the chart elements.
         */
        readonly engine: IRenderEngine;
    }
    /**
     * Provides arguments for @see:Series rendering event.
     */
    class SeriesRenderingEventArgs extends RenderEventArgs {
        _index: number;
        _count: number;
        /**
         * Initializes a new instance of the @see:SeriesRenderingEventArgs class.
         *
         * @param engine (@see:IRenderEngine) The rendering engine to use.
         * @param index The index of the series to render.
         * @param count Total number of the series to render.
         */
        constructor(engine: IRenderEngine, index: number, count: number);
        /**
         * Gets the index of the series to render.
         */
        readonly index: number;
        /**
         * Gets the total number of series to render.
         */
        readonly count: number;
    }
    /**
     * Specifies the format of the image with embed base64-encoded binary data.
     */
    enum ImageFormat {
        /** Gets the W3C Portable Network Graphics (PNG) image format. */
        Png = 0,
        /** Gets the Joint Photographic Experts Group (JPEG) image format. */
        Jpeg = 1,
        /** Gets the Scalable Vector Graphics(SVG) image format. */
        Svg = 2,
    }
    /**
     * The @see:FlexChartBase control from which the FlexChart and FlexPie derive.
     */
    class FlexChartBase extends Control implements _IPalette {
        static _WIDTH: number;
        static _HEIGHT: number;
        static _SELECTION_THRESHOLD: number;
        _items: any;
        _cv: wijmo.collections.ICollectionView;
        protected _palette: string[];
        private _selectionMode;
        private _itemFormatter;
        _selectionIndex: number;
        _options: any;
        private _plotMargin;
        _header: string;
        _headerStyle: any;
        _footer: string;
        _footerStyle: any;
        _legend: Legend;
        _defPalette: string[];
        _notifyCurrentChanged: boolean;
        _rectFooter: Rect;
        _rectHeader: Rect;
        _rectChart: Rect;
        _rectLegend: Rect;
        _currentRenderEngine: IRenderEngine;
        _legendHost: SVGGElement;
        private _needBind;
        private _toShow;
        private _toHide;
        _tooltip: ChartTooltip;
        _chartRectId: string;
        /**
         * Gets or sets the array or @see:ICollectionView object that contains the data used to create the chart.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object that contains the chart data.
         */
        readonly collectionView: wijmo.collections.ICollectionView;
        /**
         * Gets or sets an array of default colors to use for displaying each series.
         *
         * The array contains strings that represents CSS colors. For example:
         * <pre>
         * // use colors specified by name
         * chart.palette = ['red', 'green', 'blue'];
         * // or use colors specified as rgba-values
         * chart.palette = [
         *   'rgba(255,0,0,1)',
         *   'rgba(255,0,0,0.8)',
         *   'rgba(255,0,0,0.6)',
         *   'rgba(255,0,0,0.4)'];
         * </pre>
         *
         * There is a set of predefined palettes in the @see:Palettes class that you can use, for example:
         * <pre>
         * chart.palette = wijmo.chart.Palettes.coral;
         * </pre>
         */
        palette: string[];
        /**
         * Gets or sets the plot margin in pixels.
         *
         * The plot margin represents the area between the edges of the control
         * and the plot area.
         *
         * By default, this value is calculated automatically based on the space
         * required by the axis labels, but you can override it if you want
         * to control the precise position of the plot area within the control
         * (for example, when aligning multiple chart controls on a page).
         *
         * You may set this property to a numeric value or to a CSS-style
         * margin specification. For example:
         *
         * <pre>
         * // set the plot margin to 20 pixels on all sides
         * chart.plotMargin = 20;
         * // set the plot margin for top, right, bottom, left sides
         * chart.plotMargin = '10 15 20 25';
         * // set the plot margin for top/bottom (10px) and left/right (20px)
         * chart.plotMargin = '10 20';
         * </pre>
         */
        plotMargin: any;
        /**
         * Gets or sets the chart legend.
         */
        legend: Legend;
        /**
         * Gets or sets the text displayed in the chart header.
         */
        header: string;
        /**
         * Gets or sets the text displayed in the chart footer.
         */
        footer: string;
        /**
         * Gets or sets the style of the chart header.
         */
        headerStyle: any;
        /**
         * Gets or sets the style of the chart footer.
         */
        footerStyle: any;
        /**
         * Gets or sets an enumerated value indicating whether or what is
         * selected when the user clicks the chart.
         *
         * The default value for this property is <b>SelectionMode.None</b>.
         */
        selectionMode: SelectionMode;
        /**
         * Gets or sets the item formatter function that allows you to customize
         * the appearance of the chart elements.
         *
         * If specified, the function should take three parameters: the chart's
         * @see:IRenderEngine responsible for rendering elements on the chart,
         * a @see:HitTestInfo parameter that describes the element being rendered,
         * and a function that provides the default rendering for the item.
         *
         * For example:
         * <pre>
         * itemFormatter: function (engine, hitTestInfo, defaultRenderer) {
         *   var ht = hitTestInfo,
         *       binding = 'downloads';
         *
         *   // check that this is the right series/element
         *   if (ht.series.binding == binding && ht.pointIndex &gt; 0 &&
         *       ht.chartElement == wijmo.chart.ChartElement.SeriesSymbol) {
         *
         *     // get current and previous values
         *     var chart = ht.series.chart,
         *         items = chart.collectionView.items,
         *         valNow = items[ht.pointIndex][binding],
         *         valPrev = items[ht.pointIndex - 1][binding];
         *
         *     // add line if value is increasing
         *     if (valNow &gt; valPrev) {
         *       var pt1 = chart.dataToPoint(ht.pointIndex, valNow),
         *           pt2 = chart.dataToPoint(ht.pointIndex - 1, valPrev);
         *       engine.drawLine(pt1.x, pt1.y, pt2.x, pt2.y, null, {
         *         stroke: 'gold',
         *         strokeWidth: 6
         *       });
         *     }
         *   }
         *
         *   // render element as usual
         *   defaultRenderer();
         * }
         * </pre>
         *
         * @fiddle:rptz23nL
         */
        itemFormatter: Function;
        /**
         * Occurs before the chart starts rendering data.
         */
        rendering: Event;
        /**
         * Occurs after the chart finishes rendering.
         */
        rendered: Event;
        /**
         * Raises the @see:rendered event.
         *
         * @param e The @see:RenderEventArgs object used to render the chart.
         */
        onRendered(e: RenderEventArgs): void;
        /**
         * Raises the @see:rendering event.
         *
         * @param e The @see:RenderEventArgs object used to render the chart.
         */
        onRendering(e: RenderEventArgs): void;
        /**
         * Saves the chart to an image file.
         *
         * NOTE: This method does not work in IE browsers. If you require IE support,
         * add the <code>wijmo.chart.render</code> module to the page.
         *
         * @param filename The filename for the exported image file including extension.
         * Supported types are PNG, JPEG and SVG.
         */
        saveImageToFile(filename: string): void;
        /**
         * Saves the chart to an image data url.
         *
         * NOTE: This method does not work in IE browsers. If you require IE support,
         * add the <code>wijmo.chart.render</code> module to the page.
         *
         * @param format The @see:ImageFormat for the exported image.
         * @param done A function to be called after data url is generated. The function gets passed the data url as its argument.
         */
        saveImageToDataUrl(format: ImageFormat, done: Function): void;
        _exportToImage(extension: any, processDataURI: any): void;
        /**
         * Refreshes the chart.
         *
         * @param fullUpdate A value indicating whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        /**
         * Occurs after the selection changes, whether programmatically
         * or when the user clicks the chart. This is useful, for example,
         * when you want to update details in a textbox showing the current
         * selection.
         */
        selectionChanged: Event;
        /**
         * Raises the @see:selectionChanged event.
         */
        onSelectionChanged(e?: EventArgs): void;
        onLostFocus(e?: EventArgs): void;
        private _cvCollectionChanged(sender, e);
        private _cvCurrentChanged(sender, e);
        /**
        * Gets a color from the palette by index.
        *
        * @param index The index of the color in the palette.
        */
        _getColor(index: number): string;
        /**
         * Gets a lighter color from the palette by index.
         *
         * @param index The index of the color in the palette.
         */
        _getColorLight(index: number): string;
        /**
         * Gets a lighter color from the palette by color string.
         *
         * @param color The color in the palette.
         */
        _getLightColor(color: string): string;
        _bindChart(): void;
        _clearCachedValues(): void;
        _render(engine: IRenderEngine, applyElement?: boolean): void;
        _renderHeader(engine: IRenderEngine, rect: Rect): void;
        _renderFooter(engine: IRenderEngine, rect: Rect): void;
        _renderLegends(engine: IRenderEngine, rect: Rect): void;
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        _performBind(): void;
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pt: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        _getHitTestItem(index: number): any;
        _getHitTestValue(index: number): any;
        _getHitTestLabel(index: number): any;
        _refreshChart(): void;
        _drawTitle(engine: IRenderEngine, rect: Rect, title: string, style: any, isFooter: boolean): Rect;
        /**
         * Converts page coordinates to control coordinates.
         *
         * @param pt The point of page coordinates or x value
             of page coordinates.
         * @param y The y value of page coordinates. Its value
             should be a number, if pt is a number type. However,
             the y parameter is optional when pt is Point type.
         */
        pageToControl(pt: any, y?: number): Point;
        _toControl(pt: any, y?: number): Point;
        _highlightItems(items: any, cls: any, selected: boolean): void;
        _parseMargin(value: any): any;
        _showToolTip(content: any, rect: any): void;
        _hideToolTip(): void;
        private _clearTimeouts();
        _getHostOffset(): Point;
        _getHostSize(): Size;
        _getHostComputedStyle(): CSSStyleDeclaration;
        _find(elem: SVGElement, names: string[]): any[];
    }
    interface _IHitArea {
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        tag: any;
        ignoreLabel: boolean;
    }
    class _KeyWords {
        private _keys;
        constructor();
        replace(s: string, ht: HitTestInfo): string;
        getValue(key: string, ht: HitTestInfo, fmt?: string): string;
    }
}

declare module wijmo.chart {
    /**
     * The @see:FlexPie control provides pie and doughnut charts with selectable
     * slices.
     *
     * To use the @see:FlexPie control, set the @see:FlexPie.itemsSource property
     * to an array containing the data and use the @see:FlexPie.binding and
     * @see:FlexPie.bindingName properties to set the properties that contain
     * the item values and names.
     */
    class FlexPie extends FlexChartBase {
        private static _MARGIN;
        private _binding;
        private _bindingName;
        _areas: any[];
        private _keywords;
        private _startAngle;
        private _innerRadius;
        private _offset;
        private _reversed;
        private _isAnimated;
        private _selectedItemPosition;
        private _selectedItemOffset;
        private _pieGroup;
        _rotationAngle: number;
        private _center;
        _radius: number;
        private _selectedOffset;
        private _selectedIndex;
        private _angles;
        private _selectionAnimationID;
        private _colRowLens;
        private _lbl;
        _values: number[];
        _labels: string[];
        _pels: any[];
        _sum: number;
        /**
         * Initializes a new instance of the @see:FlexPie class.
         *
         * @param element The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').
         * @param options A Javascript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the name of the property that contains the chart values.
         */
        binding: string;
        /**
         * Gets or sets the name of the property that contains the name of the data items.
         */
        bindingName: string;
        /**
         * Gets or sets the starting angle for the pie slices, in degrees.
         *
         * Angles are measured clockwise, starting at the 9 o'clock position.
         *
         * The default value for this property is <b>0</b>.
         */
        startAngle: number;
        /**
         * Gets or sets the offset of the slices from the pie center.
         *
         * The offset is measured as a fraction of the pie radius.
         *
         * The default value for this property is <b>0</b>.
         */
        offset: number;
        /**
         * Gets or sets the size of the pie's inner radius.
         *
         * The inner radius is measured as a fraction of the pie radius.
         *
         * The default value for this property is zero, which creates
         * a pie. Setting this property to values greater than zero
         * creates pies with a hole in the middle, also known as
         * doughnut charts.
         *
         * The default value for this property is <b>0</b>.
         */
        innerRadius: number;
        /**
         * Gets or sets a value that determines whether angles are reversed
         * (counter-clockwise).
         *
         * The default value is false, which causes angles to be measured in
         * the clockwise direction.
         *
         * The default value for this property is <b>false</b>.
         */
        reversed: boolean;
        /**
         * Gets or sets the position of the selected slice.
         *
         * Setting this property to a value other than 'None' causes
         * the pie to rotate when an item is selected.
         *
         * Note that in order to select slices by clicking the chart,
         * you must set the @see:selectionMode property to 'Point'.
         *
         * The default value for this property is <b>Position.None</b>.
         */
        selectedItemPosition: wijmo.chart.Position;
        /**
         * Gets or sets the offset of the selected slice from the pie center.
         *
         * Offsets are measured as a fraction of the pie radius.
         *
         * The default value for this property is <b>0</b>.
         */
        selectedItemOffset: number;
        /**
         * Gets or sets a value indicating whether to use animation when items are selected.
         *
         * See also the @see:selectedItemPosition and @see:selectionMode
         * properties.
         *
         * The default value for this property is <b>false</b>.
         */
        isAnimated: boolean;
        /**
         * Gets the chart's @see:Tooltip.
         */
        readonly tooltip: ChartTooltip;
        /**
         * Gets or sets the point data label.
         */
        dataLabel: PieDataLabel;
        /**
         * Gets or sets the index of the selected slice.
         */
        selectedIndex: number;
        _getLabelsForLegend(): string[];
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         * @return A @see:wijmo.chart.HitTestInfo object containing information about the point.
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        _performBind(): void;
        _initData(): void;
        _getBindData(item: any, values: any, labels: any, binding: any, bindingName: any): number;
        _render(engine: IRenderEngine, applyElement?: boolean): void;
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pos: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        _renderData(engine: IRenderEngine, rect: Rect, g: any): void;
        _renderPie(engine: any, radius: any, innerRadius: any, startAngle: any, offset: any): void;
        _getCenter(): Point;
        _renderSlices(engine: any, values: any, sum: any, radius: any, innerRadius: any, startAngle: any, totalSweep: any, offset: any): void;
        _renderSlice(engine: any, cx: any, cy: any, currentAngle: any, idx: any, radius: any, innerRadius: any, startAngle: any, sweep: any, totalSweep: any): void;
        _getSelectedItemOffset(index: any, angle: any): {
            x: number;
            y: number;
        };
        _renderLabels(engine: IRenderEngine): void;
        _drawSlice(engine: IRenderEngine, i: number, reversed: boolean, cx: number, cy: number, r: number, irad: number, angle: number, sweep: number): void;
        _measureLegendItem(engine: IRenderEngine, name: string): Size;
        _drawLegendItem(engine: IRenderEngine, rect: Rect, i: number, name: string): void;
        private _getLabelContent(ht, content);
        private _select(pointIndex, animate?);
        _highlightCurrent(): void;
        _highlight(selected: boolean, pointIndex: number, animate?: boolean): void;
        _animateSelectionAngle(target: number, duration: number): void;
        _getHitTestItem(index: number): any;
        _getHitTestValue(index: number): number;
        _getHitTestLabel(index: number): string;
    }
    interface _ISegment {
        center: Point;
        radius: number;
        langle: number;
        angle: number;
        sweep: number;
    }
    class _PieSegment implements _IHitArea, _ISegment {
        private _center;
        private _angle;
        private _sweep;
        private _radius;
        private _radius2;
        private _isFull;
        private _originAngle;
        private _originSweep;
        private _startAngle;
        constructor(center: Point, radius: number, angle: number, sweep: number, startAngle?: number);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        readonly center: Point;
        readonly radius: number;
        readonly langle: number;
        readonly angle: number;
        readonly sweep: number;
        tag: any;
        ignoreLabel: boolean;
    }
    class _DonutSegment implements _IHitArea, _ISegment {
        private _center;
        private _angle;
        private _sweep;
        private _originAngle;
        private _originSweep;
        private _radius;
        private _radius2;
        private _iradius;
        private _iradius2;
        private _isFull;
        private _startAngle;
        constructor(center: Point, radius: number, innerRadius: number, angle: number, sweep: number, startAngle?: number);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        readonly center: Point;
        readonly radius: number;
        readonly langle: number;
        readonly angle: number;
        readonly sweep: number;
        readonly innerRadius: number;
        tag: any;
        ignoreLabel: boolean;
    }
}

declare module wijmo.chart {
    /**
     * Specifies whether and how to stack the chart's data values.
     */
    enum Stacking {
        /** No stacking. Each series object is plotted independently. */
        None = 0,
        /** Stacked charts show how each value contributes to the total. */
        Stacked = 1,
        /** 100% stacked charts show how each value contributes to the total with the relative size of
         * each series representing its contribution to the total. */
        Stacked100pc = 2,
    }
    /**
     * Specifies what is selected when the user clicks the chart.
     */
    enum SelectionMode {
        /** Select neither series nor data points when the user clicks the chart. */
        None = 0,
        /** Select the whole @see:Series when the user clicks it on the chart. */
        Series = 1,
        /** Select the data point when the user clicks it on the chart. Since Line, Area, Spline,
         * and SplineArea charts do not render individual data points, nothing is selected with this
         * setting on those chart types. */
        Point = 2,
    }
    /**
     * The core charting control for @see:FlexChart.
     *
     */
    class FlexChartCore extends FlexChartBase {
        static _CSS_AXIS_X: string;
        static _CSS_AXIS_Y: string;
        static _CSS_LINE: string;
        static _CSS_GRIDLINE: string;
        static _CSS_TICK: string;
        static _CSS_GRIDLINE_MINOR: string;
        static _CSS_TICK_MINOR: string;
        static _CSS_LABEL: string;
        static _CSS_LEGEND: string;
        static _CSS_HEADER: string;
        static _CSS_FOOTER: string;
        static _CSS_TITLE: string;
        static _CSS_SELECTION: string;
        static _CSS_PLOT_AREA: string;
        static _CSS_DATA_LABELS: string;
        static _FG: string;
        private _series;
        private _axes;
        private _pareas;
        private _axisX;
        private _axisY;
        private _selection;
        private _interpolateNulls;
        private _legendToggle;
        private _symbolSize;
        private _dataInfo;
        _plotRect: Rect;
        private __barPlotter;
        private __linePlotter;
        private __areaPlotter;
        private __bubblePlotter;
        private __financePlotter;
        private __funnelPlotter;
        private _plotters;
        private _binding;
        private _bindingX;
        _rotated: boolean;
        _stacking: Stacking;
        private _lbl;
        _xlabels: string[];
        _xvals: number[];
        _xDataType: DataType;
        private _hitTester;
        private _lblAreas;
        private _keywords;
        private _curPlotter;
        private _colRowLens;
        _bindingSeparator: string;
        /**
         * Initializes a new instance of the @see:FlexChart class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options A JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        _initAxes(): void;
        /**
         * Gets the collection of @see:Series objects.
         */
        readonly series: wijmo.collections.ObservableArray;
        /**
         * Gets the collection of @see:Axis objects.
         */
        readonly axes: wijmo.collections.ObservableArray;
        /**
         * Gets or sets the main X axis.
         */
        axisX: Axis;
        /**
         * Gets or sets the main Y axis.
         */
        axisY: Axis;
        /**
         * Gets the collection of @see:PlotArea objects.
         */
        readonly plotAreas: PlotAreaCollection;
        /**
         * Gets or sets the name of the property that contains the Y values.
         */
        binding: string;
        /**
         * Gets or sets the name of the property that contains the X data values.
         */
        bindingX: string;
        /**
         * Gets or sets the size of the symbols used for all Series objects
         * in this @see:FlexChart.
         *
         * This property may be overridden by the symbolSize property on
         * each @see:Series object.
         *
         * The default value for this property is <b>10</b> pixels.
         */
        symbolSize: number;
        /**
         * Gets or sets a value that determines whether to interpolate
         * null values in the data.
         *
         * If true, the chart interpolates the value of any missing data
         * based on neighboring points. If false, it leaves a break in
         * lines and areas at the points with null values.
         *
         * The default value for this property is <b>false</b>.
         */
        interpolateNulls: boolean;
        /**
         * Gets or sets a value indicating whether clicking legend items toggles the
         * series visibility in the chart.
         *
         * The default value for this property is <b>false</b>.
         */
        legendToggle: boolean;
        /**
         * Gets the chart @see:Tooltip object.
         *
         * The tooltip content is generated using a template that may contain any of the following
         * parameters:
         *
         * <ul>
         *  <li><b>propertyName</b>:    Any property of the data object represented by the point.</li>
         *  <li><b>seriesName</b>:      Name of the series that contains the data point (FlexChart only).</li>
         *  <li><b>pointIndex</b>:      Index of the data point.</li>
         *  <li><b>value</b>:           <b>Value</b> of the data point (y-value for @see:FlexChart, item value for @see:FlexPie).</li>
         *  <li><b>x</b>:               <b>x</b>-value of the data point (FlexChart only).</li>
         *  <li><b>y</b>:               <b>y</b>-value of the data point (FlexChart only).</li>
         *  <li><b>name</b>:            <b>Name</b> of the data point (x-value for @see:FlexChart or legend entry for @see:FlexPie).</li>
         * </ul>
         *
         * To modify the template, assign a new value to the tooltip's content property.
         * For example:
         *
         * <pre>
         * chart.tooltip.content = '&lt;b&gt;{seriesName}&lt;/b&gt; ' +
         *    '&lt;img src="resources/{x}.png"/&gt;&lt;br/&gt;{y}';
         * </pre>
         *
         * You can disable chart tooltips by setting the template to an empty string.
         *
         * You can also use the @see:tooltip property to customize tooltip parameters
         * such as @see:Tooltip.showDelay and @see:Tooltip.hideDelay:
         *
         * <pre>
         * chart.tooltip.showDelay = 1000;
         * </pre>
         *
         * See @see:ChartTooltip properties for more details and options.
         */
        readonly tooltip: ChartTooltip;
        /**
         * Gets or sets the point data label.
         */
        dataLabel: DataLabel;
        /**
         * Gets or sets the selected chart series.
         */
        selection: SeriesBase;
        /**
         * Occurs when the series visibility changes, for example when the legendToggle
         * property is set to true and the user clicks the legend.
        */
        seriesVisibilityChanged: Event;
        /**
         * Raises the @see:seriesVisibilityChanged event.
         *
         * @param e The @see:SeriesEventArgs object that contains the event data.
         */
        onSeriesVisibilityChanged(e: SeriesEventArgs): void;
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         * @return A @see:wijmo.chart.HitTestInfo object with information about the point.
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        /**
         * Converts a @see:Point from control coordinates to chart data coordinates.
         *
         * @param pt The point to convert, in control coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         * @return The point in chart data coordinates.
         */
        pointToData(pt: any, y?: number): Point;
        /**
         * Converts a @see:Point from data coordinates to control coordinates.
         *
         * @param pt @see:Point in data coordinates, or X coordinate of a point in data coordinates.
         * @param y Y coordinate of the point (if the first parameter is a number).
         * @return The @see:Point in control coordinates.
         */
        dataToPoint(pt: any, y?: number): Point;
        _copy(key: string, value: any): boolean;
        _createSeries(): SeriesBase;
        _clearCachedValues(): void;
        _performBind(): void;
        _hitTestSeries(pt: Point, seriesIndex: number): HitTestInfo;
        _hitTestData(pt: any): HitTestInfo;
        _hitTestLabels(pt: Point): _IHitArea;
        private static _dist2(p1, p2);
        static _dist(p0: Point, p1: Point, p2: Point): number;
        static _distToSegmentSquared(p: Point, v: Point, w: Point): number;
        _isRotated(): boolean;
        _plotrectId: string;
        _getChartType(): ChartType;
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pos: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        private _renderLegendElements(engine, series, pos, p, areas, isVertical, width, height, colRowLen);
        private _renderLabels(engine);
        private _getAxes();
        private _clearPlotters();
        _initPlotter(plotter: _IPlotter): void;
        private readonly _barPlotter;
        private readonly _linePlotter;
        private readonly _areaPlotter;
        private readonly _bubblePlotter;
        private readonly _financePlotter;
        private readonly _funnelPlotter;
        _getPlotter(series: SeriesBase): _IPlotter;
        _layout(rect: Rect, size: Size, engine: IRenderEngine): void;
        private _layoutSingle(rect, size, engine);
        private _layoutMultiple(rect, size, engine);
        private _convertX(x, left, right);
        private _convertY(y, top, bottom);
        _getLabelContent(ht: HitTestInfo, content: any): string;
        private _select(newSelection, pointIndex);
        private _highlightCurrent();
        private _highlight(series, selected, pointIndex);
        _updateAuxAxes(axes: Axis[], isRotated: boolean): void;
        static _contains(rect: Rect, pt: Point): boolean;
        static _intersects(rect1: Rect, rect2: Rect): boolean;
        static _epoch: number;
        static _msPerDay: number;
        static _toOADate(date: Date): number;
        static _fromOADate(val: number): Date;
        static _renderText(engine: IRenderEngine, text: string, pos: Point, halign: any, valign: any, className?: string, groupName?: string, style?: any, test?: any): Rect;
        static _renderRotatedText(engine: IRenderEngine, text: string, pos: Point, halign: any, valign: any, center: Point, angle: number, className: string, groupClassName?: string, style?: any): any;
    }
    /**
     * Analyzes chart data.
     */
    class _DataInfo {
        private minY;
        private maxY;
        private minX;
        private maxX;
        private minXp;
        private minYp;
        private dataTypeX;
        private dataTypeY;
        private stackAbs;
        private _xvals;
        private dx;
        constructor();
        analyse(seriesList: any, isRotated: boolean, stacking: Stacking, xvals: Array<number>, logx: boolean, logy: boolean): void;
        _parseYVal(val: any, xval: any, custom: any, stackAbs: any, stackPos: any, stackNeg: any): void;
        getMinY(): number;
        getMaxY(): number;
        getMinX(): number;
        getMaxX(): number;
        getMinXp(): number;
        getMinYp(): number;
        getDeltaX(): number;
        getDataTypeX(): DataType;
        getDataTypeY(): DataType;
        getStackedAbsSum(key: number): number;
        getXVals(): Array<number>;
        static isValid(value: number): boolean;
    }
    /**
     * Represents the chart palette.
     */
    interface _IPalette {
        _getColor(i: number): string;
        _getColorLight(i: number): string;
    }
    /**
     * Extends the @see:Tooltip class to provide chart tooltips.
     */
    class ChartTooltip extends Tooltip {
        private _content;
        private _threshold;
        /**
         * Initializes a new instance of the @see:ChartTooltip class.
         */
        constructor();
        /**
         * Gets or sets the tooltip content.
         *
         * The tooltip content can be specified as a string or as a function that
         * takes a @see:wijmo.chart.HitTestInfo object as a parameter.
         *
         * When the tooltip content is a string, it may contain any of the following
         * parameters:
         *
         * <ul>
         *  <li><b>propertyName</b>:    Any property of the data object represented by the point.</li>
         *  <li><b>seriesName</b>:      Name of the series that contains the data point (FlexChart only).</li>
         *  <li><b>pointIndex</b>:      Index of the data point.</li>
         *  <li><b>value</b>:           <b>Value</b> of the data point (y-value for @see:FlexChart, item value for @see:FlexPie).</li>
         *  <li><b>x</b>:               <b>x</b>-value of the data point (FlexChart only).</li>
         *  <li><b>y</b>:               <b>y</b>-value of the data point (FlexChart only).</li>
         *  <li><b>name</b>:            <b>Name</b> of the data point (x-value for @see:FlexChart or legend entry for @see:FlexPie).</li>
         * </ul>
         *
         * Parameters must be enclosed in single curly brackets. For example:
         *
         * <pre>
         *   // 'country' and 'sales' are properties of the data object.
         *   chart.tooltip.content = '{country}, sales:{sales}';
         * </pre>
         *
         * The next example shows how to set the tooltip content using a function.
         *
         *  <pre>
         *   // Set the tooltip content
         *   chart.tooltip.content = function (ht) {
         *     return ht.name + ":" + ht.value.toFixed();
         *   }
         * </pre>
         */
        content: any;
        /**
         * Gets or sets the maximum distance from the element to display the tooltip.
         */
        threshold: number;
    }
}

/**
 * Defines the @see:FlexChart control and its associated classes.
 *
 * The example below creates a @see:FlexChart control and binds it to a data array.
 * The chart has three series, each corresponding to a property in the objects
 * contained in the source array.
 *
 * The last series in the example uses the @see:Series.chartType property to
 * override the default chart type used
 * by the other series.
 *
 * @fiddle:6GB66
 */
declare module wijmo.chart {
    /**
     * Specifies the chart type.
     */
    enum ChartType {
        /** Shows vertical bars and allows you to compare values of items across categories. */
        Column = 0,
        /** Shows horizontal bars. */
        Bar = 1,
        /** Shows patterns within the data using X and Y coordinates. */
        Scatter = 2,
        /** Shows trends over a period of time or across categories. */
        Line = 3,
        /** Shows a line chart with a symbol on each data point. */
        LineSymbols = 4,
        /** Shows a line chart with the area below the line filled with color. */
        Area = 5,
        /** Shows a Scatter chart with a third data value that determines the
         * size of the symbol. The data for this chart type can be defined using the
         *  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
         * following format: "yProperty, bubbleSizeProperty".*/
        Bubble = 6,
        /** Presents items with high, low, open, and close values.
         * The size of the wick line is determined by the High and Low values,
         * while the size of the bar is determined by the Open and Close values.
         * The bar is displayed using different colors, depending on
         * whether the close value is higher or lower than the open value.
         * The data for this chart type can be defined using the
         *  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        Candlestick = 7,
        /** Displays the same information as a candlestick chart, except that opening
         * values are displayed using lines to the left, while lines to the right
         * indicate closing values.  The data for this chart type can be defined using the
         *  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
         * following format: "highProperty, lowProperty, openProperty, closeProperty". */
        HighLowOpenClose = 8,
        /** Displays a line chart that plots curves rather than angled lines through the
        * data points. */
        Spline = 9,
        /** Displays a spline chart with symbols on each data point. */
        SplineSymbols = 10,
        /** Displays a spline chart with the area below the line filled with color. */
        SplineArea = 11,
        /** Displays a funnel chart, usually representing stages in a process such as a sales pipeline. */
        Funnel = 12,
    }
    /**
     * The @see:FlexChart control provides a powerful and flexible way to visualize
     * data.
     *
     * You can use the @see:FlexChart control to create charts that display data in
     * several formats, including bar, line, symbol, bubble, and others.
     *
     * To use the @see:FlexChart control, set the @see:FlexChart.itemsSource property
     * to an array containing the data objects, then add one or more @see:Series objects
     * to the @see:FlexChart.series property.
     *
     * Use the @see:FlexChart.chartType property to define the @see:ChartType used as
     * a default for all series. You may override the chart type for each series by
     * setting the @see:Series.chartType property on the members of the
     * @see:FlexChart.series array.
     *
     * @fiddle:6GB66
     */
    class FlexChart extends FlexChartCore {
        private _chartType;
        /**
         * Initializes a new instance of the @see:FlexChart class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options A JavaScript object containing initialization data
         * for the control.
         */
        constructor(element: any, options?: any);
        _getChartType(): ChartType;
        /**
         * Gets or sets the type of chart to create.
         *
         * The default value for this property is <b>ChartType.Column</b>.
         */
        chartType: ChartType;
        /**
         * Gets or sets a value indicating whether to flip the axes so that
         * X becomes vertical and Y becomes horizontal.
         *
         * The default value for this property is <b>false</b>.
         */
        rotated: boolean;
        /**
         * Gets or sets a value that determines whether and how the series objects are stacked.
         *
         * The default value for this property is <b>Stacking.None</b>.
         */
        stacking: Stacking;
        /**
         * Gets or sets various chart options.
         *
         * The following options are supported:
         *
         * <b>bubble.maxSize</b>: Specifies the maximum size
         * of symbols in the Bubble chart. The default value is 30 pixels.
         *
         * <b>bubble.minSize</b>: Specifies the minimum size
         * of symbols in the Bubble chart. The default value is 5 pixels.
         *
         * <pre>chart.options = {
         *   bubble: { minSize: 5, maxSize: 30 }
         * }</pre>
         *
         *
         * <b>funnel.neckWidth</b>: Specifies the neck width as a percentage for the Funnel chart.
         * The default value is 0.2.
         *
         * <b>funnel.neckHeight</b>: Specifies the neck height as a percentage for the Funnel chart.
         * The default value is 0.
         *
         * <b>funnel.type</b>: Specifies the type of Funnel chart. It should be 'rectangle' or 'default'.
         * neckWidth and neckHeight don't work if type is set to rectangle.
         *
         * <pre>chart.options = {
         *   funnel: { neckWidth: 0.3, neckHeight: 0.3, type: 'rectangle' }
         * }</pre>

         * <b>groupWidth</b>: Specifies the group width for the Column charts,
         * or the group height for the Bar charts. The group width can be specified
         * in pixels or as percentage of the available space. The default value is '70%'.
         *
         * <pre>chart.options = {
         *   groupWidth : 50; // 50 pixels
         * }
         * chart.options = {
         *   groupWidth : '100%'; // 100% pixels
         * }</pre>
         */
        options: any;
    }
}

declare module wijmo.chart {
    /**
     * Specifies the position of an axis or legend on the chart.
     */
    enum Position {
        /** The item is not visible. */
        None = 0,
        /** The item appears to the left of the chart. */
        Left = 1,
        /** The item appears above the chart. */
        Top = 2,
        /** The item appears to the right of the chart. */
        Right = 3,
        /** The item appears below the chart. */
        Bottom = 4,
        /** The item is positioned automatically. */
        Auto = 5,
    }
    /**
     * Specifies the axis type.
     */
    enum AxisType {
        /** Category axis (normally horizontal). */
        X = 0,
        /** Value axis (normally vertical). */
        Y = 1,
    }
    /**
     * Specifies how to handle overlapping labels.
     */
    enum OverlappingLabels {
        /**
         * Hide overlapping labels.
         */
        Auto = 0,
        /**
         * Show all labels, including overlapping ones.
         */
        Show = 1,
    }
    /**
     * Axis interface.
     */
    interface _IAxis {
        actualMin: number;
        actualMax: number;
        convert(val: number): number;
    }
    /**
     * Specifies whether and where the axis tick marks appear.
     */
    enum TickMark {
        /** No tick marks appear. */
        None = 0,
        /** Tick marks appear outside the plot area. */
        Outside = 1,
        /** Tick marks appear inside the plot area. */
        Inside = 2,
        /** Tick marks cross the axis. */
        Cross = 3,
    }
    /**
     * Represents an axis in the chart.
     */
    class Axis implements _IAxis {
        _GRIDLINE_WIDTH: number;
        _LINE_WIDTH: number;
        _TICK_WIDTH: number;
        _TICK_HEIGHT: number;
        _TICK_OVERLAP: number;
        _TICK_LABEL_DISTANCE: number;
        private static MAX_MAJOR;
        private static MAX_MINOR;
        _chart: FlexChartCore;
        private _type;
        private _min;
        private _max;
        private _position;
        private _majorUnit;
        private _minorUnit;
        private _majorGrid;
        private _minorGrid;
        private _title;
        private _labelStyle;
        private _reversed;
        private _format;
        private _actualMin;
        private _actualMax;
        _axisType: AxisType;
        private _majorTickMarks;
        private _minorTickMarks;
        private _logBase;
        private _labels;
        private _labelAngle;
        private _labelAlign;
        private _axisLine;
        _plotrect: Rect;
        private _szTitle;
        _isTimeAxis: boolean;
        _lbls: string[];
        _values: number[];
        private _rects;
        private _name;
        private _origin;
        private _overlap;
        private _items;
        private _cv;
        private _binding;
        private _ifmt;
        private _tfmt;
        private static _id;
        private __uniqueId;
        private _parea;
        private _labelPadding;
        _axrect: Rect;
        _desiredSize: Size;
        _annoSize: Size;
        _hasOrigin: boolean;
        _hostElement: SVGGElement;
        _vals: any;
        /**
         * Initializes a new instance of the @see:Axis class.
         *
         * @param position The position of the axis on the chart.
         */
        constructor(position?: Position);
        /**
         * Gets the axis host element.
         */
        readonly hostElement: SVGGElement;
        /**
         * Gets the actual axis minimum.
         *
         * It returns a number or a Date object (for time-based data).
        */
        readonly actualMin: any;
        /**
        * Gets the actual axis maximum.
        *
        * It returns a number or a Date object (for time-based data).
        */
        readonly actualMax: any;
        /**
         * Gets or sets the minimum value shown on the axis.
         *
         * The value can be a number or a Date object (for time-based data).
         *
         * The default value for this property is <b>null</b>, which causes
         * the chart to calculate the minimum value based on the data.
         */
        min: any;
        /**
         * Gets or sets the maximum value shown on the axis.
         *
         * The value can be a number or a Date object (for time-based data).
         *
         * The default value for this property is <b>null</b>, which causes
         * the chart to calculate the maximum value based on the data.
         */
        max: any;
        /**
         * Gets or sets a value indicating whether the axis is
         * reversed (top to bottom or right to left).
         *
         * The default value for this property is <b>false</b>.
         */
        reversed: boolean;
        /**
         * Gets or sets the position of the axis with respect to the plot area.
         */
        position: Position;
        /**
         * Gets or sets the number of units between axis labels.
         *
         * If the axis contains date values, then the units are
         * expressed in days.
         */
        majorUnit: number;
        /**
          * Gets or sets the number of units between minor axis ticks.
          *
          * If the axis contains date values, then the units are
          * expressed in days.
          */
        minorUnit: number;
        /**
         * Gets or sets the axis name.
         */
        name: string;
        /**
         * Gets or sets the title text shown next to the axis.
         */
        title: string;
        /**
         * Gets or sets the format string used for the axis labels
         * (see @see:Globalize).
         */
        format: string;
        /**
         * Gets or sets a value indicating whether the axis includes grid lines.
         */
        majorGrid: boolean;
        /**
         * Gets or sets the location of the axis tick marks.
         */
        majorTickMarks: TickMark;
        /**
         * Gets or sets a value indicating whether the axis includes minor grid lines.
         */
        minorGrid: boolean;
        /**
         * Gets or sets the location of the minor axis tick marks.
         */
        minorTickMarks: TickMark;
        /**
         * Gets or sets a value indicating whether the axis line is visible.
         *
         * The default value for this property is <b>true</b>.
         */
        axisLine: boolean;
        /**
         * Gets or sets a value indicating whether the axis labels are visible.
         *
         * The default value for this property is <b>true</b>.
         */
        labels: boolean;
        /**
         * Gets or sets the label alignment.
         *
         * By default the labels are centered. The supported values are
         * 'left' and 'right for the X-axis, 'top' and 'bottom' for the Y-axis.
         */
        labelAlign: string;
        /**
         * Gets or sets the rotation angle of the axis labels.
         *
         * The angle is measured in degrees with valid values
         * ranging from -90 to 90.
         */
        labelAngle: number;
        /**
         * Gets or sets the value at which an axis crosses the perpendicular axis.
         **/
        origin: number;
        /**
         * Gets or sets a value indicating how to handle overlapping axis labels.
         *
         * The default value for this property is <b>OverlappingLabels.Auto</b>.
         */
        overlappingLabels: OverlappingLabels;
        /**
         * Gets or sets the items source for the axis labels.
         *
         * Names of the properties are specified by the @see:wijmo.chart.Axis.binding property.
         *
         * For example:
         *
         * <pre>
         *  // default value for Axis.binding is 'value,text'
         *  chart.axisX.itemsSource = [ { value:1, text:'one' }, { value:2, text:'two' } ];
         * </pre>
         */
        itemsSource: any;
        /**
         * Gets or sets the comma-separated property names for the
         * @see:wijmo.chart.Axis.itemsSource property to use in axis labels.
         *
         * The first name specifies the value on the axis, the second represents the corresponding
         * axis label. The default value is 'value,text'.
         */
        binding: string;
        /**
         * Gets or sets the itemFormatter function for the axis labels.
         *
         * If specified, the function takes two parameters:
         * <ul>
         * <li><b>render engine</b>: The @see:wijmo.chart.IRenderEngine object to be used
         * in formatting the labels.</li>
         * <li><b>current label</b>: An object with the following properties:
         *   <ul>
         *     <li><b>value</b>: The value of the axis label to format.</li>
         *     <li><b>text</b>: The text to use in the label.</li>
         *     <li><b>pos</b>: The position in control coordinates at which
         *     the label is to be rendered.</li>
         *     <li><b>cls</b>: The CSS class to be applied to the label.</li>
         *   </ul></li>
         * </ul>
         *
         * The function returns the label parameters of labels for which
         * properties are modified.
         *
         * For example:
         * <pre>
         * chart.axisY.itemFormatter = function(engine, label) {
         *     if (label.val &gt; 5){
         *         engine.textFill = 'red'; // red text
         *         label.cls = null; // no default CSS
         *      }
         *     return label;
         * }
         * </pre>
         */
        itemFormatter: Function;
        /**
         * Gets or sets the logarithmic base of the axis.
         *
         * If the base is not specified the axis uses a linear scale.
         *
         * Use the @see:logBase property to spread data that is clustered
         * around the origin. This is common in several financial and economic
         * data sets.
         */
        logBase: number;
        _getLogBase(): number;
        _isLogAxis(): boolean;
        /**
         * Gets or sets the plot area for the axis.
         */
        plotArea: PlotArea;
        /**
         * Gets or sets the label padding, in pixels.
         *
         * The default value for this property is <b>5</b> pixels.
         */
        labelPadding: number;
        readonly _groupClass: string;
        /**
         * Occurs when the axis range changes.
         */
        rangeChanged: Event;
        /**
         * Raises the @see:rangeChanged event.
         */
        onRangeChanged(e?: EventArgs): void;
        _getPosition(): Position;
        _isOverlapped(engine: IRenderEngine, w: number, lblClass: string, axisType: AxisType): boolean;
        _actualAngle: number;
        /**
         * Calculates the axis height.
         *
         * @param engine Rendering engine.
         * @param maxw Max width.
         */
        _getHeight(engine: IRenderEngine, maxw: number): number;
        _updateAutoFormat(delta: number): number;
        _getActualRange(): number;
        _updateActualLimitsByChartType(labels: any, min: any, max: any): {
            min: any;
            max: any;
        };
        /**
         * Update the actual axis limits based on a specified data range.
         *
         * @param dataType Data type.
         * @param dataMin Data minimum.
         * @param dataMax Data maximum.
         * @param labels Category labels(category axis).
         * @param values Values(value axis).
         */
        _updateActualLimits(dataType: DataType, dataMin: number, dataMax: number, labels?: string[], values?: number[]): void;
        /**
         * Set the axis position.
         *
         * @param axisRect Axis rectangle.
         * @param plotRect Plot area rectangle.
         */
        _layout(axisRect: Rect, plotRect: Rect): void;
        _hasVisibileSeries(): boolean;
        /**
         * Render the axis.
         *
         * @param engine Rendering engine.
         */
        _render(engine: IRenderEngine): void;
        _renderLineAndTitle(engine: any): void;
        _renderMinor(engine: any, vals: any, isCategory: any): void;
        _renderRotatedText(engine: IRenderEngine, val: any, text: string, pos: Point, halign: any, valign: any, center: Point, angle: number, className: string, groupClassName?: string, style?: any): void;
        _getFormattedItem(engine: IRenderEngine, val: any, text: string, pos: Point, className: string): {
            val: any;
            text: string;
            pos: Point;
            cls: string;
        };
        _renderLabelsAndTicks(engine: any, index: any, val: any, sval: any, labelAngle: any, tickMarks: any, showLabel: any, t1: any, t2: any): boolean;
        _xCross(x: number): boolean;
        _createMinors(engine: IRenderEngine, vals: number[], isVert: boolean, isNear: boolean, isCategory: boolean): void;
        _renderMinors(engine: IRenderEngine, ticks: number[], isVert: boolean, isNear: boolean): void;
        _renderLabel(engine: IRenderEngine, val: number, text: string, pos: Point, ha: any, va: any, className?: string): boolean;
        private _renderRotatedLabel(engine, val, sval, lpt, ha, labelAngle, lblClass, isNear);
        private _getLabelAlign(isVert);
        _customConvert: Function;
        _customConvertBack: Function;
        /**
         * Converts the specified value from data to pixel coordinates.
         *
         * @param val The data value to convert.
         * @param maxValue The max value of the data, it's optional.
         * @param minValue The min value of the data, it's optional.
         */
        convert(val: number, maxValue?: number, minValue?: number): number;
        /**
         * Converts the specified value from pixel to data coordinates.
         *
         * @param val The pixel coordinates to convert back.
         */
        convertBack(val: number): number;
        /**
         * Gets the axis type.
         */
        readonly axisType: AxisType;
        _getMinNum(): number;
        _getMaxNum(): number;
        private _updating;
        _beginUpdate(): void;
        _endUpdate(): void;
        _cancelUpdate(): void;
        /**
         * Gets a value that indicates whether the control is currently being updated.
         */
        readonly _isUpdating: boolean;
        private _invalidate();
        private _cvCollectionChanged(sender, e);
        private _createLabels(start, len, delta, vals, lbls);
        private _createLogarithmicLabels(min, max, unit, vals, lbls, isLabels);
        _createTimeLabels(start: number, len: number, vals: number[], lbls: string[]): void;
        _formatValue(val: number): string;
        private _calcMajorUnit();
        private _getAnnoNumber(isVert);
        private _nicePrecision(range);
        private _niceTickNumber(x);
        _niceNumber(x: number, exp: number, round: boolean): number;
        readonly _uniqueId: number;
    }
    /**
     * Represents a collection of @see:Axis objects in a @see:FlexChart control.
     */
    class AxisCollection extends wijmo.collections.ObservableArray {
        /**
         * Gets an axis by name.
         *
         * @param name The name of the axis to look for.
         * @return The axis object with the specified name, or null if not found.
         */
        getAxis(name: string): Axis;
        /**
         * Gets the index of an axis by name.
         *
         * @param name The name of the axis to look for.
         * @return The index of the axis with the specified name, or -1 if not found.
         */
        indexOf(name: string): number;
    }
}

declare module wijmo.chart {
    /**
     * Represents a plot area on the chart.
     *
     * The chart can have multiple plot areas with multiple axes.
     * To assign axis to plot area use <b>Axis.plotArea</b> property. For example:
     * <pre>
     *  // create a plot area
     *  var pa = new wijmo.chart.PlotArea();
     *  pa.row = 1;
     *  chart.plotAreas.push(pa);
     *  // create auxiliary y-axis
     *  var ay2 = new wijmo.chart.Axis(wijmo.chart.Position.Left);
     *  ay2.plotArea = pa; // attach axis to the plot area
     *  chart.axes.push(ay2);
     *  // plot first series along y-axis
     *  chart.series[0].axisY = ay2;
     * </pre>
     */
    class PlotArea {
        private _row;
        private _col;
        private _width;
        private _height;
        private _name;
        private _style;
        private _rect;
        _chart: FlexChartCore;
        /**
         * Initializes a new instance of the @see:PlotArea class.
         *
         * @param options Initialization options for the plot area.
         */
        constructor(options?: any);
        /**
         * Gets or sets the row index of plot area.
         * This determines the vertical position of the plot area
         * on the chart.
         */
        row: number;
        /**
         * Gets or sets the column index of plot area.
         * This determines the horizontal position of the plot
         * area on the chart.
         */
        column: number;
        /**
         * Gets or sets the plot area name.
         */
        name: string;
        /**
         * Gets or sets width of the plot area.
         *
         * The width can be specified as a number (in pixels) or
         * as a string in the format '{number}*' (star sizing).
         */
        width: any;
        /**
         * Gets or sets the height of the plot area.
         *
         * The height can be specified as a number (in pixels) or
         * as a string in the format '{number}*' (star sizing).
         */
        height: any;
        /**
         * Gets or sets the style of the plot area.
         *
         * Using <b>style</b> property, you can set appearance of the plot area.
         * For example:
         * <pre>
         *   pa.style = { fill: 'rgba(0,255,0,0.1)' };
         * </pre>
         */
        style: any;
        private _invalidate();
        _render(engine: IRenderEngine): void;
        _setPlotX(x: number, w: number): void;
        _setPlotY(y: number, h: number): void;
    }
    /**
     * Represents a collection of @see:PlotArea objects in a @see:FlexChartCore control.
     */
    class PlotAreaCollection extends wijmo.collections.ObservableArray {
        /**
         * Gets a plot area by name.
         *
         * @param name The name of the plot area to look for.
         * @return The axis object with the specified name, or null if not found.
         */
        getPlotArea(name: string): PlotArea;
        /**
         * Gets the index of a plot area by name.
         *
         * @param name The name of the plot area to look for.
         * @return The index of the plot area with the specified name, or -1 if not found.
         */
        indexOf(name: string): number;
        _getWidth(column: number): any;
        _getHeight(row: number): any;
        _calculateWidths(width: number, ncols: number): number[];
        _calculateHeights(height: number, nrows: number): number[];
        private _calculateLengths(width, ncols, glens);
    }
}

declare module wijmo.chart {
    /**
     * Specifies whether and where the Series is visible.
     */
    enum SeriesVisibility {
        /** The series is visible on the plot and in the legend. */
        Visible = 0,
        /** The series is visible only on the plot. */
        Plot = 1,
        /** The series is visible only in the legend. */
        Legend = 2,
        /** The series is hidden. */
        Hidden = 3,
    }
    /**
     * Specifies the type of marker to use for the @see:Series.symbolMarker
     * property.
     *
     * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
     */
    enum Marker {
        /**
         * Uses a circle to mark each data point.
         */
        Dot = 0,
        /**
         * Uses a square to mark each data point.
         */
        Box = 1,
    }
    /**
     * Data series interface
     */
    interface _ISeries {
        style: any;
        symbolStyle: any;
        getValues: (dim: number) => number[];
        getDataType: (dim: number) => DataType;
        drawLegendItem(engine: IRenderEngine, rect: Rect, index: number): any;
        measureLegendItem(engine: IRenderEngine, index: number): Size;
        _setPointIndex(pointIndex: number, elementIndex: number): any;
    }
    class DataArray {
        dataType: DataType;
        values: Array<number>;
    }
    /**
     * Provides arguments for @see:Series events.
     */
    class SeriesEventArgs extends EventArgs {
        _series: Series;
        /**
         * Initializes a new instance of the @see:SeriesEventArgs class.
         *
         * @param series Specifies the @see:Series object affected by this event.
         */
        constructor(series: SeriesBase);
        /**
         * Gets the @see:Series object affected by this event.
         */
        readonly series: SeriesBase;
    }
    /**
     * Represents a series of data points to display in the chart.
     */
    class SeriesBase implements _ISeries {
        static _LEGEND_ITEM_WIDTH: number;
        static _LEGEND_ITEM_HEIGHT: number;
        static _LEGEND_ITEM_MARGIN: number;
        private static _DEFAULT_SYM_SIZE;
        __chart: FlexChartCore;
        private _name;
        private _binding;
        private _showValues;
        private _symbolStyle;
        private _symbolSize;
        private _style;
        private _altStyle;
        _cv: wijmo.collections.ICollectionView;
        private _itemsSource;
        private _values;
        private _valueDataType;
        _chartType: ChartType;
        private _symbolMarker;
        private _bindingX;
        private _xvalues;
        private _xvalueDataType;
        private _cssClass;
        private _visibility;
        private _axisX;
        private _axisY;
        private __plotter;
        private _interpolateNulls;
        _legendElement: SVGAElement;
        _hostElement: SVGGElement;
        _pointIndexes: number[];
        /**
         * Initializes a new instance of the @see:SeriesBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets a value that determines whether to interpolate
         * null values in the data.
         *
         * If true, the series interpolates the value of any missing data
         * based on neighboring points. If false, it leaves a break in
         * lines and areas at the points with null values.
         *
         * The default value for this property is <b>false</b>.
         */
        interpolateNulls: boolean;
        /**
         * Gets or sets the series style.
         */
        style: any;
        /**
         * Gets or sets the alternate style for the series.
         *
         * The alternate style is used for negative values in Bar, Column,
         * and Scatter charts; and for rising values in financial chart types
         * like Candlestick, LineBreak, EquiVolume etc.
         *
         * The default value for this property is <b>null</b>, which causes the
         * series to use the default style.
         */
        altStyle: any;
        /**
         * Gets or sets the series symbol style.
         *
         * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
         */
        symbolStyle: any;
        /**
         * Gets or sets the size (in pixels) of the symbols used to render this @see:Series.
         * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
         *
         * The default value for this property is <b>10</b> pixels.
         */
        symbolSize: number;
        /**
         * Gets or sets the shape of marker to use for each data point in the series.
         * Applies to Scatter, LineSymbols, and SplineSymbols chart types.
         *
         * The default value for this property is <b>Marker.Dot</b>.
         */
        symbolMarker: Marker;
        /**
         * Gets or sets the name of the property that contains Y values for the series.
         */
        binding: string;
        /**
         * Gets or sets the name of the property that contains X values for the series.
         */
        bindingX: string;
        /**
         * Gets or sets the series name.
         *
         * The series name is displayed in the chart legend. Any series without a name
         * does not appear in the legend.
         */
        name: string;
        /**
         * Gets or sets the array or @see:ICollectionView object that contains the series data.
         */
        itemsSource: any;
        /**
         * Gets the @see:ICollectionView object that contains the data for this series.
         */
        readonly collectionView: wijmo.collections.ICollectionView;
        /**
         * Gets the @see:FlexChart object that owns this series.
         */
        readonly chart: FlexChartCore;
        /**
         * Gets the series host element.
         */
        readonly hostElement: SVGGElement;
        /**
         * Gets the series element in the legend.
         */
        readonly legendElement: SVGGElement;
        /**
         * Gets or sets the series CSS class.
         */
        cssClass: string;
        /**
         * Gets or sets an enumerated value indicating whether and where the series appears.
         *
         * The default value for this property is <b>SeriesVisibility.Visible</b>.
         */
        visibility: SeriesVisibility;
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        /**
         * Gets the plot element that corresponds to the specified point index.
         *
         * @param pointIndex The index of the data point.
         */
        getPlotElement(pointIndex: number): any;
        /**
         * Gets or sets the X-axis for the series.
         */
        axisX: Axis;
        /**
         * Gets or sets the Y-axis for the series.
         */
        axisY: Axis;
        /**
         * Initializes the series by copying the properties from a given object.
         *
         * @param options JavaScript object containing initialization data for the series.
         */
        initialize(options: any): void;
        /**
         * Converts a @see:Point from control coordinates to series data coordinates.
         *
         * @param pt The point to convert, in control coordinates.
         * @return The point in series data coordinates.
         */
        pointToData(pt: Point): Point;
        /**
         * Converts a @see:Point from series data coordinates to control coordinates.
         *
         * @param pt @see:Point in series data coordinates.
         * @return The @see:Point in control coordinates.
         */
        dataToPoint(pt: Point): Point;
        /**
         * Occurs when series is rendering.
         */
        rendering: Event;
        /**
         * Raises the @see:rendering event.
         *
         * @param engine The @see:IRenderEngine object used to render the series.
         * @param index The index of the series to render.
         * @param count Total number of the series to render.
         */
        onRendering(engine: IRenderEngine, index: number, count: number): boolean;
        /**
         * Occurs when series is rendered.
         */
        rendered: Event;
        /**
         * Raises the @see:rendered event.
         *
         * @param engine The @see:IRenderEngine object used to render the series.
         */
        onRendered(engine: IRenderEngine): void;
        _chart: FlexChartCore;
        _getSymbolSize(): number;
        _plotter: _IPlotter;
        getDataType(dim: number): DataType;
        getValues(dim: number): number[];
        /**
         * Draw a legend item at the specified position.
         *
         * @param engine The rendering engine to use.
         * @param rect The position of the legend item.
         * @param index Index of legend item(for series with multiple legend items).
         */
        drawLegendItem(engine: IRenderEngine, rect: Rect, index: number): void;
        private _getLegendStyle(style);
        /**
         * Measures height and width of the legend item.
         *
         * @param engine The rendering engine to use.
         * @param index Index of legend item(for series with multiple legend items).
         */
        measureLegendItem(engine: IRenderEngine, index: number): Size;
        /**
         * Returns number of series items in the legend.
         */
        legendItemLength(): number;
        /**
         * Returns the series bounding rectangle in data coordinates.
         *
         * If getDataRect() returns null, the limits are calculated automatically based on the data values.
         *
         * @param currentRect The current rectangle of chart. This parameter is optional.
         * @param calculatedRect The calculated rectangle of chart. This parameter is optional.
         */
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        _getChartType(): ChartType;
        /**
         * Clears any cached data values.
         */
        _clearValues(): void;
        _getBinding(index: number): string;
        _getBindingValues(index: number): number[];
        _getItem(pointIndex: number): any;
        _getLength(): number;
        _setPointIndex(pointIndex: number, elementIndex: number): void;
        private _getDataRect();
        _isCustomAxisX(): boolean;
        _isCustomAxisY(): boolean;
        _getAxisX(): Axis;
        _getAxisY(): Axis;
        _measureLegendItem(engine: IRenderEngine, text: string): Size;
        _drawFunnelLegendItem(engine: IRenderEngine, rect: Rect, index: number, style: any, symbolStyle: any): void;
        private _getFunnelLegendName(index);
        _drawLegendItem(engine: IRenderEngine, rect: Rect, chartType: ChartType, text: string, style: any, symbolStyle: any): void;
        private _cvCollectionChanged(sender, e);
        private _cvCurrentChanged(sender, e);
        _bindValues(items: Array<any>, binding: string, isX?: boolean): DataArray;
        _invalidate(): void;
        _indexToPoint(pointIndex: number): Point;
        _getSymbolFill(seriesIndex?: number): string;
        _getSymbolStroke(seriesIndex?: number): string;
        _getAltSymbolStroke(seriesIndex?: number): string;
        _getAltSymbolFill(seriesIndex?: number): string;
        _renderLabels(engine: IRenderEngine, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): void;
    }
}

declare module wijmo.chart {
    /**
     * Represents a series of data points to display in the chart.
     *
     * The @see:Series class supports all basic chart types. You may define
     * a different chart type on each @see:Series object that you add to the
     * @see:FlexChart series collection. This overrides the @see:chartType
     * property set on the chart that is the default for all @see:Series objects
     * in its collection.
     */
    class Series extends SeriesBase {
        /**
         * Gets or sets the chart type for a specific series, overriding the chart type
         * set on the overall chart.
         *
         * The default value for this property is <b>null</b>, which causes the
         * series to use chart type defined by the parent chart.
         */
        chartType: ChartType;
    }
}

declare module wijmo.chart {
    /**
     * Represents a rendering engine that performs the basic drawing routines.
     */
    interface IRenderEngine {
        /**
         * Clears the viewport and starts the rendering cycle.
         */
        beginRender(): any;
        /**
         * Finishes the rendering cycle.
         */
        endRender(): any;
        /**
         * Sets the size of the viewport.
         *
         * @param w Viewport width.
         * @param h Viewport height.
         */
        setViewportSize(w: number, h: number): any;
        /**
         * Gets the rendered element.
         */
        element: Element;
        /**
         * Gets or sets the color used to fill the element.
         */
        fill: string;
        /**
         * Gets or sets the color used to outline the element.
         */
        stroke: string;
        /**
         * Gets or sets the thickness of the outline.
         */
        strokeWidth: number;
        /**
         * Gets or sets the text color.
         */
        textFill: string;
        /**
         * Gets or sets the font size for the text output.
         */
        fontSize: string;
        /**
         * Gets or sets the font family for the text output.
         */
        fontFamily: string;
        /**
         * Draws an ellipse.
         *
         * @param cx X coordinate of the ellipse's center.
         * @param cy Y coordinate of the ellipse's center.
         * @param rx X radius (half of the ellipse's width).
         * @param ry Y radius (half of the ellipse's height).
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawEllipse(cx: number, cy: number, rx: number, ry: number, className?: string, style?: any): any;
        /**
         * Draws a rectangle.
         *
         * @param x Left of the rectangle.
         * @param y Bottom of the rectangle.
         * @param w Width of the rectangle.
         * @param h Height of the rectangle.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawRect(x: number, y: number, w: number, h: number, className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a line.
         *
         * @param x1 X coordinate of the first point.
         * @param y1 Y coordinate of the first point.
         * @param x2 X coordinate of the second point.
         * @param y2 Y coordinate of the second point.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawLine(x1: number, y1: number, x2: number, y2: number, className?: string, style?: any): any;
        /**
         * Draws a series of lines.
         *
         * @param xs Array of X coordinates.
         * @param ys Array of Y coordinates.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawLines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a series of splines (smooth path).
         *
         * @param xs Array of X coordinates.
         * @param ys Array of Y coordinates.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawSplines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a polygon.
         *
         * @param xs Array of X coordinates.
         * @param ys Array of Y coordinates.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawPolygon(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a pie segment.
         *
         * @param cx X coordinate of the segment center.
         * @param cy Y coordinate of the segment center.
         * @param radius Radius of the segment.
         * @param startAngle Start angle of the segment, in degrees.
         * @param sweepAngle Sweep angle of the segment, in degrees clockwise.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawPieSegment(cx: number, cy: number, radius: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a doughnut segment.
         *
         * @param cx X coordinate of the segment center.
         * @param cy Y coordinate of the segment center.
         * @param radius Outer radius of the segment.
         * @param innerRadius Inner radius of the segment.
         * @param startAngle Start angle of the segment, in degrees.
         * @param sweepAngle Sweep angle of the segment, in degrees clockwise.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         * @param clipPath Id of the path to use as a clipping path.
         */
        drawDonutSegment(cx: number, cy: number, radius: number, innerRadius: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): any;
        /**
         * Draws a string.
         *
         * @param s String to be drawn.
         * @param pt Reference point for the string.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawString(s: string, pt: Point, className?: string, style?: any): any;
        /**
         * Draws a rotated string.
         *
         * @param s String to be drawn.
         * @param pt Reference point for rendering the string.
         * @param center Reference point for rotating the string.
         * @param angle Rotation angle, in degrees, clockwise.
         * @param className Class name to be applied to the element.
         * @param style Style object to be applied to the element.
         */
        drawStringRotated(s: string, pt: Point, center: Point, angle: number, className?: string, style?: any): any;
        /**
         * Draws an image.
         *
         * @param href Url of the image to draw.
         * @param x Left coordinate of the image's bounding rectangle.
         * @param y Bottom coordinate of the image's bounding rectangle.
         * @param w Image width.
         * @param h Image height.
         */
        drawImage(href: string, x: number, y: number, w: number, h: number): any;
        /**
         * Measures a string.
         *
         * @param s String to be measured.
         * @param className Class name to use when measuring the string.
         * @param groupName Name of the group to use when measuring the string.
         * @param style Style object to use when measuring the string.
         */
        measureString(s: string, className?: string, groupName?: string, style?: any): Size;
        /**
         * Starts a group.
         *
         * @param className Class name to apply to the new group.
         * @param clipPath Id of the path to use as a clipping path.
         * @param createTransform Whether to create a new transform for the group.
         */
        startGroup(className?: string, clipPath?: string, createTransform?: boolean): any;
        /**
         * Ends a group.
         */
        endGroup(): any;
        /**
         * Adds a clipping rectangle to the context.
         *
         * @param clipRect The clipping rectangle.
         * @param id The ID of the clipping rectangle.
         */
        addClipRect(clipRect: Rect, id: string): any;
    }
}

declare module wijmo.chart {
    /**
     * Render to svg.
     */
    class _SvgRenderEngine implements IRenderEngine {
        private static svgNS;
        private static xlinkNS;
        private _element;
        private _svg;
        private _text;
        private _textGroup;
        private _defs;
        private _fill;
        private _stroke;
        private _textFill;
        private _strokeWidth;
        private _fontSize;
        private _fontFamily;
        private _group;
        private _groupCls;
        private _clipRect;
        private static _isff;
        private _savedGradient;
        private _bbCache;
        constructor(element: HTMLElement);
        beginRender(): void;
        endRender(): void;
        setViewportSize(w: number, h: number): void;
        readonly element: Element;
        fill: string;
        fontSize: string;
        fontFamily: string;
        stroke: string;
        strokeWidth: number;
        textFill: string;
        addClipRect(clipRect: Rect, id: string): void;
        drawEllipse(cx: number, cy: number, rx: number, ry: number, className?: string, style?: any): SVGElement;
        drawRect(x: number, y: number, w: number, h: number, className?: string, style?: any, clipPath?: string): SVGElement;
        drawLine(x1: number, y1: number, x2: number, y2: number, className?: string, style?: any): SVGElement;
        drawLines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): SVGElement;
        drawSplines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): SVGElement;
        drawPolygon(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): SVGElement;
        drawPieSegment(cx: number, cy: number, r: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): SVGElement;
        drawDonutSegment(cx: number, cy: number, radius: number, innerRadius: number, startAngle: number, sweepAngle: number, className?: string, style?: any, clipPath?: string): SVGElement;
        drawString(s: string, pt: Point, className?: string, style?: any): SVGElement;
        drawStringRotated(s: string, pt: Point, center: Point, angle: number, className?: string, style?: any): SVGElement;
        measureString(s: string, className?: string, groupName?: string, style?: any): Size;
        startGroup(className?: string, clipPath?: string, createTransform?: boolean): SVGElement;
        endGroup(): void;
        drawImage(imageHref: string, x: number, y: number, w: number, h: number): SVGElement;
        private _appendChild(element);
        private _create();
        private _setText(element, s);
        private _getKey(s, cls, group);
        private _createText(pos, text);
        private _applyStyle(el, style);
        private _deCase(s);
        private _getClass(el);
        private _getBBox(text);
        private _applyColor(el, key, val);
    }
}

declare module wijmo.chart {
    /**
     * Represents the chart legend.
     */
    class Legend {
        _chart: FlexChartBase;
        _position: Position;
        private _title;
        private _titleAlign;
        private _titlePadding;
        private _areas;
        private _sz;
        private _colRowLens;
        /**
         * Initializes a new instance of the @see:Legend class.
         *
         * @param chart @see:FlexChartBase that owns this @see:Legend.
         */
        constructor(chart: FlexChartBase);
        /**
         * Gets or sets a value that determines whether and where the legend
         * appears in relation to the plot area.
         */
        position: Position;
        /**
         * Gets or sets a value that determines the title of the legend.
         */
        title: string;
        /**
         * Gets or sets a value that determines the align value of the legend.
         * The value should be 'left', 'center' or 'right'.
         */
        titleAlign: string;
        _getDesiredSize(engine: IRenderEngine, pos: Position, w: number, h: number): Size;
        _getPosition(w: number, h: number): Position;
        _render(engine: IRenderEngine, pt: Point, pos: Position, w: number, h: number): void;
        _hitTest(pt: Point): number;
    }
}

declare module wijmo.chart {
    /**
     * Specifies the type of chart element found by the hitTest method.
     */
    enum ChartElement {
        /** The area within the axes. */
        PlotArea = 0,
        /** X-axis. */
        AxisX = 1,
        /** Y-axis. */
        AxisY = 2,
        /** The area within the control but outside the axes. */
        ChartArea = 3,
        /** The chart legend. */
        Legend = 4,
        /** The chart header. */
        Header = 5,
        /** The chart footer. */
        Footer = 6,
        /** A chart series. */
        Series = 7,
        /** A chart series symbol. */
        SeriesSymbol = 8,
        /** A data label. */
        DataLabel = 9,
        /** No chart element. */
        None = 10,
    }
    /**
     * Contains information about a part of a @see:FlexChart control at
     * a specified page coordinate.
     */
    class HitTestInfo {
        private _chart;
        private _pt;
        private _series;
        private _pointIndex;
        _chartElement: ChartElement;
        _dist: number;
        private _item;
        private _x;
        private __xfmt;
        private _y;
        private __yfmt;
        private _name;
        /**
         * Initializes a new instance of the @see:wijmo.chart.HitTestInfo class.
         *
         * @param chart The chart control.
         * @param point The original point in window coordinates.
         * @param element The chart element.
         */
        constructor(chart: FlexChartBase, point: Point, element?: ChartElement);
        /**
         * Gets the @see:FlexChartBase that owns this @see:wijmo.chart.HitTestInfo.
         */
        readonly chart: FlexChartBase;
        /**
         * Gets the point, in control coordinates,
         * that this @see:wijmo.chart.HitTestInfo refers to.
         */
        readonly point: Point;
        /**
         * Gets the chart series at the specified coordinates.
         */
        readonly series: SeriesBase;
        /**
         * Gets the data point index at the specified coordinates.
         */
        readonly pointIndex: number;
        /**
         * Gets the chart element at the specified coordinates.
         */
        readonly chartElement: ChartElement;
        /**
         * Gets the distance to the closest data point.
         */
        readonly distance: number;
        /**
         * Gets the data object that corresponds to the closest data point.
         */
        readonly item: any;
        /**
         * Gets the x-value of the closest data point.
         */
        readonly x: any;
        /**
         * Gets the y-value of the closest data point.
         */
        readonly y: any;
        readonly value: any;
        readonly name: any;
        readonly _xfmt: any;
        readonly _yfmt: any;
        _setData(series: SeriesBase, pi?: number): void;
        _setDataPoint(dataPoint: _DataPoint): void;
        private _getValue(index, formatted);
        private readonly ax;
        private readonly ay;
    }
}

declare module wijmo.chart {
    /**
     * These are predefined color palettes for chart @see:Series objects.
     *
     * To create custom color palettes, supply an array of strings or rgba values.
     *
     * You can specify palettes for @see:FlexChart and @see:FlexPie controls.
     * For example:
     *
     * <pre>chart.palette = Palettes.light;</pre>
     *
     * The following palettes are pre-defined:
     * <ul>
     *   <li>standard (default)</li>
     *   <li>cocoa</li>
     *   <li>coral</li>
     *   <li>dark</li>
     *   <li>highcontrast</li>
     *   <li>light</li>
     *   <li>midnight</li>
     *   <li>modern</li>
     *   <li>organic</li>
     *   <li>slate</li>
     *   <li>zen</li>
     *   <li>cyborg</li>
     *   <li>superhero</li>
     *   <li>flatly</li>
     *   <li>darkly</li>
     *   <li>cerulan</li>
     * </ul>
     */
    class Palettes {
        static standard: string[];
        static cocoa: string[];
        static coral: string[];
        static dark: string[];
        static highcontrast: string[];
        static light: string[];
        static midnight: string[];
        static modern: string[];
        static organic: string[];
        static slate: string[];
        static zen: string[];
        static cyborg: string[];
        static superhero: string[];
        static flatly: string[];
        static darkly: string[];
        static cerulan: string[];
    }
}

declare module wijmo.chart {
    /**
     * Calculates Spline curves.
     */
    class _Spline {
        private k;
        private _x;
        private _y;
        private _a;
        private _b;
        private _c;
        private _d;
        private _len;
        private m;
        constructor(x: number[], y: number[]);
        private calculatePoint(val);
        calculate(): {
            xs: any;
            ys: any;
        };
    }
}

declare module wijmo.chart {
    /**
     * Specifies the position of data labels on the chart.
     */
    enum LabelPosition {
        /** No data labels appear. */
        None = 0,
        /** The labels appear to the left of the data points. */
        Left = 1,
        /** The labels appear above the data points. */
        Top = 2,
        /** The labels appear to the right of the data points. */
        Right = 3,
        /** The labels appear below the data points. */
        Bottom = 4,
        /** The labels appear centered on the data points. */
        Center = 5,
    }
    /**
     * Specifies the position of data labels on the pie chart.
     */
    enum PieLabelPosition {
        /** No data labels. */
        None = 0,
        /** The label appears inside the pie slice. */
        Inside = 1,
        /** The item appears at the center of the pie slice. */
        Center = 2,
        /** The item appears outside the pie slice. */
        Outside = 3,
        /** The item appears inside the pie slice and depends of its angle. */
        Radial = 4,
        /** The item appears inside the pie slice and has circular direction. */
        Circular = 5,
    }
    /**
     * Provides arguments for @see:DataLabel rendering event.
     */
    class DataLabelRenderEventArgs extends RenderEventArgs {
        private _ht;
        private _pt;
        private _text;
        /**
         * Initializes a new instance of the @see:DataLabelRenderEventArgs class.
         *
         * @param engine (@see:IRenderEngine) The rendering engine to use.
         * @param ht The hit test information.
         * @param pt The reference point.
         * @param text The label text.
         */
        constructor(engine: IRenderEngine, ht: HitTestInfo, pt: Point, text: string);
        /**
         * Gets or sets a value that indicates whether the event should be cancelled.
         */
        cancel: boolean;
        /**
         * Gets the point associated with the label in control coordinates.
         */
        readonly point: Point;
        /**
         * Gets or sets the label text.
         */
        text: string;
        /**
         * Gets the hit test information.
         */
        readonly hitTestInfo: wijmo.chart.HitTestInfo;
    }
    /**
    * Represents the base abstract class for the @see:DataLabel and the @see:PieDataLabel classes.
    */
    class DataLabelBase {
        private _content;
        _chart: FlexChartBase;
        private _bdr;
        private _line;
        private _off;
        /**
         * Gets or sets the content of data labels.
         *
         * The content can be specified as a string or as a function that
         * takes @see:wijmo.chart.HitTestInfo object as a parameter.
         *
         * When the label content is a string, it can contain any of the following
         * parameters:
         *
         * <ul>
         *  <li><b>seriesName</b>: Name of the series that contains the data point (FlexChart only).</li>
         *  <li><b>pointIndex</b>: Index of the data point.</li>
         *  <li><b>value</b>: <b>Value</b> of the data point.</li>
         *  <li><b>x</b>: <b>x</b>-value of the data point (FlexChart only).</li>
         *  <li><b>y</b>: <b>y</b>-value of the data point (FlexChart only).</li>
         *  <li><b>name</b>: <b>Name</b> of the data point.</li>
         *  <li><b>propertyName</b>: any property of data object.</li>
         * </ul>
         *
         * The parameter must be enclosed in curly brackets, for example 'x={x}, y={y}'.
         *
         * In the following example, we show the y value of the data point in the labels.
         *
         * <pre>
         *  // Create a chart and show y data in labels positioned above the data point.
         *  var chart = new wijmo.chart.FlexChart('#theChart');
         *  chart.initialize({
         *      itemsSource: data,
         *      bindingX: 'country',
         *      series: [
         *          { name: 'Sales', binding: 'sales' },
         *          { name: 'Expenses', binding: 'expenses' },
         *          { name: 'Downloads', binding: 'downloads' }],
         *  });
         *  chart.dataLabel.position = "Top";
         *  chart.dataLabel.content = "{country} {seriesName}:{y}";
         * </pre>
         *
         * The next example shows how to set data label content using a function.
         *
         * <pre>
         *  // Set the data label content
         *  chart.dataLabel.content = function (ht) {
         *    return ht.name + ":" + ht.value.toFixed();
         *  }
         * </pre>
         *
         */
        content: any;
        /**
         * Gets or sets a value indicating whether the data labels have borders.
         */
        border: boolean;
        /**
         * Gets or sets the offset from label to the data point.
         */
        offset: number;
        /**
         * Gets or sets a value indicating whether to draw lines that connect
         * labels to the data points.
         */
        connectingLine: boolean;
        /**
         * Occurs before the data label is rendered.
         */
        rendering: Event;
        /**
         * Raises the @see:rendering event.
         *
         * @param e The @see:DataLabelRenderEventArgs object used to render the label.
         * @return True if the event was not canceled.
         */
        onRendering(e: DataLabelRenderEventArgs): boolean;
        _invalidate(): void;
    }
    /**
     * The point data label for FlexChart.
     */
    class DataLabel extends DataLabelBase {
        private _pos;
        /**
         * Gets or sets the position of the data labels.
         */
        position: LabelPosition;
    }
    /**
     * The point data label for FlexPie.
     */
    class PieDataLabel extends DataLabelBase {
        private _pos;
        /**
         * Gets or sets the position of the data labels.
         */
        position: PieLabelPosition;
    }
}

declare module wijmo.chart {
    /**
     * Specifies the direction of the lines shown by the @see:LineMarker.
     */
    enum LineMarkerLines {
        /** No lines. */
        None = 0,
        /** Vertical line. */
        Vertical = 1,
        /** Horizontal line. */
        Horizontal = 2,
        /** Vertical and horizontal lines. */
        Both = 3,
    }
    /**
     * Specifies how the @see:LineMarker interacts with the user.
     */
    enum LineMarkerInteraction {
        /** No interaction, the user specifies the position by clicking. */
        None = 0,
        /** The @see:LineMarker moves with the pointer. */
        Move = 1,
        /** The @see:LineMarker moves when the user drags the lines. */
        Drag = 2,
    }
    /**
     * Specifies the alignment of the @see:LineMarker.
     */
    enum LineMarkerAlignment {
        /**
         * The LineMarker alignment adjusts automatically so that it stays
         * within the boundaries of the plot area. */
        Auto = 2,
        /** The LineMarker aligns to the right of the pointer. */
        Right = 0,
        /** The LineMarker aligns to the left of the pointer. */
        Left = 1,
        /** The LineMarker aligns to the bottom of the pointer. */
        Bottom = 4,
        /** The LineMarker aligns to the top of the pointer. */
        Top = 6,
    }
    /**
     * Represents an extension of the LineMarker for the FlexChart.
     *
     * The @see:LineMarker consists of a text area with content reflecting
     * data point values, and optional vertical or horizontal lines
     * (or both for a cross-hair effect) positioned over the plot area.
     *
     * It can be static (interaction = None), follow the mouse or touch
     * position (interaction = Move), or move when the user drags the
     * line (interaction = Drag).
     *
     * For example:
     * <pre>
     *   // create an interactive marker with a horizontal line and y-value
     *   var lm = new wijmo.chart.LineMarker($scope.ctx.chart, {
     *       lines: wijmo.chart.LineMarkerLines.Horizontal,
     *       interaction: wijmo.chart.LineMarkerInteraction.Move,
     *       alignment : wijmo.chart.LineMarkerAlignment.Top
     *   });
     *   lm.content = function (ht) {
     *       // show y-value
     *       return lm.y.toFixed(2);
     *   }
     * </pre>
     */
    class LineMarker {
        static _CSS_MARKER: string;
        static _CSS_MARKER_HLINE: string;
        static _CSS_MARKER_VLINE: string;
        static _CSS_MARKER_CONTENT: string;
        static _CSS_MARKER_CONTAINER: string;
        static _CSS_LINE_DRAGGABLE: string;
        static _CSS_TOUCH_DISABLED: string;
        private _chart;
        private _plot;
        private _marker;
        private _markerContainer;
        private _markerContent;
        private _dragEle;
        private _hLine;
        private _vLine;
        private _plotRect;
        private _targetPoint;
        private _wrapperMoveMarker;
        private _capturedEle;
        private _wrapperMousedown;
        private _wrapperMouseup;
        private _contentDragStartPoint;
        private _mouseDownCrossPoint;
        private _isVisible;
        private _horizontalPosition;
        private _verticalPosition;
        private _alignment;
        private _content;
        private _seriesIndex;
        private _lines;
        private _interaction;
        private _dragThreshold;
        private _dragContent;
        private _dragLines;
        /**
         * Initializes a new instance of the @see:LineMarker class.
         *
         * @param chart The chart on which the LineMarker appears.
         * @param options A JavaScript object containing initialization data for the control.
         */
        constructor(chart: FlexChartCore, options?: any);
        /**
         * Gets the @see:FlexChart object that owns the LineMarker.
         */
        readonly chart: FlexChartCore;
        /**
         * Gets or sets the visibility of the LineMarker.
         */
        isVisible: boolean;
        /**
         * Gets or sets the index of the series in the chart in which the LineMarker appears.
         * This takes effect when the @see:interaction property is set to
         * wijmo.chart.LineMarkerInteraction.Move or wijmo.chart.LineMarkerInteraction.Drag.
         */
        seriesIndex: number;
        /**
         * Gets or sets the horizontal position of the LineMarker relative to the plot area.
         *
         * Its value range is (0, 1).
         * If the value is null or undefined and @see:interaction is set to
         * wijmo.chart.LineMarkerInteraction.Move or wijmo.chart.LineMarkerInteraction.Drag,
         * the horizontal position of the marker is calculated automatically based on the
         * pointer's position.
         */
        horizontalPosition: number;
        /**
         * Gets the current x-value as chart data coordinates.
         */
        readonly x: number;
        /**
         * Gets the current y-value as chart data coordinates.
         */
        readonly y: number;
        /**
         * Gets or sets the content function that allows you to customize the text content of the LineMarker.
         */
        content: Function;
        /**
         * Gets or sets the vertical position of the LineMarker relative to the plot area.
         *
         * Its value range is (0, 1).
         * If the value is null or undefined and @see:interaction is set to wijmo.chart.LineMarkerInteraction.Move
         * or wijmo.chart.LineMarkerInteraction.Drag, the vertical position of the LineMarker is calculated automatically based on the pointer's position.
         */
        verticalPosition: number;
        /**
         * Gets or sets the alignment of the LineMarker content.
         *
         * By default, the LineMarker shows to the right, at the bottom of the target point.
         * Use '|' to combine alignment values.
         *
         * <pre>
         * // set the alignment to the left.
         * marker.alignment = wijmo.chart.LineMarkerAlignment.Left;
         * // set the alignment to the left top.
         * marker.alignment = wijmo.chart.LineMarkerAlignment.Left | wijmo.chart.LineMarkerAlignment.Top;
         * </pre>
         */
        alignment: LineMarkerAlignment;
        /**
         * Gets or sets the visibility of the LineMarker lines.
         */
        lines: LineMarkerLines;
        /**
         * Gets or sets the interaction mode of the LineMarker.
         */
        interaction: LineMarkerInteraction;
        /**
         * Gets or sets the maximum distance from the horizontal or vertical
         * line that the marker can be dragged.
         */
        dragThreshold: number;
        /**
         * Gets or sets a value indicating whether the content of the marker
         * is draggable when the interaction mode is "Drag."
         */
        dragContent: boolean;
        /**
         * Gets or sets a value indicating whether the lines are linked
         * when the horizontal or vertical line is dragged when the
         * interaction mode is "Drag."
         */
        dragLines: boolean;
        /**
         * Occurs after the @see:LineMarker's position changes.
         */
        positionChanged: Event;
        /**
         * Raises the @see:positionChanged event.
         *
         * @param point The target point at which to show the LineMarker.
         */
        onPositionChanged(point: Point): void;
        /**
         * Removes the LineMarker from the chart.
         */
        remove(): void;
        private _attach();
        private _attachDrag();
        private _detach();
        private _detachDrag();
        private _toggleDragEventAttach(isAttach);
        private _onMousedown(e);
        private _onMouseup(e);
        _moveMarker(e: any): void;
        private _getElementPaddingValuee(ele, key);
        private _show(ele?);
        private _hide(ele?);
        private _toggleVisibility();
        private _resetDefaultValue();
        private _initialize();
        private _createMarker();
        private _removeMarker();
        private _getContainer();
        private _createContainer();
        private _createChildren();
        private _toggleElesDraggableClass(draggable);
        private _updateMarkerSize();
        private _updateLinesSize();
        private _resetLinesVisibility();
        private _updateMarkerPosition(point?);
        private _updateContent();
        private _raisePositionChanged(x, y);
        private _updatePositionByAlignment(isMarkerMoved?);
        private _getEventPoint(e);
        private _pointInRect(pt, rect);
    }
}

declare module wijmo.chart {
    class _DataPoint {
        private _seriesIndex;
        private _pointIndex;
        private _dataX;
        private _dataY;
        constructor(seriesIndex: number, pointIndex: number, dataX: number, dataY: number);
        readonly seriesIndex: number;
        readonly pointIndex: number;
        dataX: number;
        dataY: number;
    }
    enum _MeasureOption {
        X = 0,
        Y = 1,
        XY = 2,
    }
    class _RectArea implements _IHitArea {
        private _rect;
        constructor(rect: Rect);
        readonly rect: Rect;
        tag: any;
        ignoreLabel: boolean;
        contains(pt: Point): boolean;
        pointDistance(pt1: Point, pt2: Point, option: _MeasureOption): number;
        distance(pt: Point): number;
    }
    class _CircleArea implements _IHitArea {
        private _center;
        private _rad;
        private _rad2;
        tag: any;
        ignoreLabel: boolean;
        constructor(center: Point, radius: number);
        setRadius(radius: number): void;
        readonly center: Point;
        contains(pt: Point): boolean;
        distance(pt: Point): number;
    }
    class _LinesArea implements _IHitArea {
        private _x;
        private _y;
        tag: any;
        ignoreLabel: boolean;
        constructor(x: any, y: any);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
    }
    class _HitResult {
        area: _IHitArea;
        distance: number;
    }
    class _HitTester {
        _chart: FlexChartCore;
        _map: {
            [key: number]: Array<_IHitArea>;
        };
        constructor(chart: FlexChartCore);
        add(area: _IHitArea, seriesIndex: number): void;
        clear(): void;
        hitTest(pt: Point, testLines?: boolean): _HitResult;
        hitTestSeries(pt: Point, seriesIndex: any): _HitResult;
    }
}

declare module wijmo.chart {
    /**
     * Plots data series.
     */
    interface _IPlotter {
        chart: FlexChartCore;
        dataInfo: _DataInfo;
        hitTester: _HitTester;
        seriesIndex: number;
        seriesCount: number;
        clipping: boolean;
        stacking: Stacking;
        rotated: boolean;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): any;
        _renderLabels(engine: IRenderEngine, series: SeriesBase, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): any;
        _renderLabel(engine: IRenderEngine, map: _IHitArea, dp: _DataPoint, chart: FlexChartCore, lbl: DataLabel, series: SeriesBase, offset: number, lblAreas: _RectArea[]): any;
        load(): any;
        unload(): any;
    }
    /**
     * Base class for chart plotters of all types (bar, line, area).
     */
    class _BasePlotter {
        _DEFAULT_WIDTH: number;
        _DEFAULT_SYM_SIZE: number;
        clipping: boolean;
        chart: FlexChart;
        hitTester: _HitTester;
        dataInfo: _DataInfo;
        seriesIndex: number;
        seriesCount: number;
        clear(): void;
        _renderLabels(engine: IRenderEngine, series: SeriesBase, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): void;
        _renderLabel(engine: IRenderEngine, map: _IHitArea, dp: _DataPoint, chart: FlexChartCore, lbl: DataLabel, series: SeriesBase, offset: number, lblAreas: _RectArea[]): void;
        _getPointAndPosition(pt: Point, pos: LabelPosition, map: _IHitArea, chart: FlexChartCore): void;
        _getLabelPoint(series: SeriesBase, dataPoint: _DataPoint): Point;
        _renderLabelAndBorder(engine: IRenderEngine, s: string, pos: LabelPosition, offset: number, pt: Point, line: boolean, marg: any, border: boolean): Rect;
        getOption(name: string, parent?: string): any;
        getNumOption(name: string, parent?: string): number;
        static cloneStyle(style: any, ignore: string[]): any;
        isValid(datax: number, datay: number, ax: _IAxis, ay: _IAxis): boolean;
        load(): void;
        unload(): void;
    }
}

declare module wijmo.chart {
    /**
     * Bar/column chart plotter.
     */
    class _BarPlotter extends _BasePlotter implements _IPlotter {
        origin: number;
        width: number;
        isVolume: boolean;
        private _volHelper;
        private _itemsSource;
        stackPosMap: {};
        stackNegMap: {};
        stacking: Stacking;
        rotated: boolean;
        _getSymbolOrigin: Function;
        _getSymbolStyles: Function;
        clear(): void;
        load(): void;
        unload(): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        private _isRange(series);
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        private drawSymbol(engine, rect, series, pointIndex, point);
        private drawDefaultSymbol(engine, rect, series);
    }
}

declare module wijmo.chart {
    /**
     * Line/scatter chart plotter.
     */
    class _LinePlotter extends _BasePlotter implements _IPlotter {
        hasSymbols: boolean;
        hasLines: boolean;
        isSpline: boolean;
        rotated: boolean;
        stacking: Stacking;
        stackPos: {
            [key: number]: number;
        };
        stackNeg: {
            [key: number]: number;
        };
        constructor();
        clear(): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        _drawLines(engine: IRenderEngine, xs: number[], ys: number[], className?: string, style?: any, clipPath?: string): void;
        _drawSymbol(engine: IRenderEngine, x: number, y: number, sz: number, series: SeriesBase, pointIndex: number): void;
        _drawDefaultSymbol(engine: IRenderEngine, x: number, y: number, sz: number, marker: Marker, style?: any): void;
    }
}

declare module wijmo.chart {
    /**
     * Area chart plotter.
     */
    class _AreaPlotter extends _BasePlotter implements _IPlotter {
        stacking: Stacking;
        isSpline: boolean;
        rotated: boolean;
        private stackPos;
        private stackNeg;
        constructor();
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        clear(): void;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        _convertToSpline(x: number[], y: number[]): {
            xs: any;
            ys: any;
        };
        _drawSymbols(engine: IRenderEngine, series: _ISeries, seriesIndex: number): void;
    }
}

declare module wijmo.chart {
    class _BubblePlotter extends _LinePlotter {
        private _MIN_SIZE;
        private _MAX_SIZE;
        private _minSize;
        private _maxSize;
        private _minValue;
        private _maxValue;
        constructor();
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        _drawSymbol(engine: IRenderEngine, x: number, y: number, sz: number, series: Series, pointIndex: number): void;
    }
}

declare module wijmo.chart {
    class _FinancePlotter extends _BasePlotter {
        isCandle: boolean;
        isArms: boolean;
        isEqui: boolean;
        isVolume: boolean;
        symbolWidth: any;
        private _volHelper;
        private _itemsSource;
        private _symWidth;
        private _isPixel;
        clear(): void;
        load(): void;
        unload(): void;
        parseSymbolWidth(val: any): void;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        _drawSymbol(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, si: number, pi: number, fill: any, w: number, x: number, hi: number, lo: number, open: number, close: number): void;
    }
}

declare module wijmo.chart {
    /**
     * Funnel chart plotter.
     */
    class _FunnelPlotter extends _BasePlotter implements _IPlotter {
        _getSymbolOrigin: Function;
        _getSymbolStyles: Function;
        stacking: Stacking;
        rotated: boolean;
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number, customRender?: Function): void;
        private _getTrapezoidArea(width, angle, height);
        private _getTrapezoidOffsetY(width, area, angle);
        private drawSymbol(engine, rect, series, pointIndex, point);
        private drawDefaultSymbol(engine, rect, series);
        _getPointAndPosition(pt: Point, pos: LabelPosition, map: _IHitArea, chart: FlexChartCore): void;
    }
    class _FunnelSegment implements _IHitArea {
        private _center;
        private _startPoint;
        private _width;
        private _height;
        private _neckWidth;
        private _neckHeight;
        private _offsetX;
        private _offsetY;
        private _rotated;
        constructor(startPoint: Point, width: number, height: number, neckWidth: number, neckHeight: number, rotated?: boolean);
        contains(pt: Point): boolean;
        distance(pt: Point): number;
        readonly center: Point;
        tag: any;
        ignoreLabel: boolean;
    }
}

declare module wijmo.chart {
    class _VolumeHelper {
        private _volumes;
        private _xVals;
        private _xDataMin;
        private _xDataMax;
        private _xDataType;
        private _hasXs;
        private _calcData;
        constructor(volumes: number[], xVals: number[], xDataMin: number, xDataMax: number, xDataType?: DataType);
        convert(x: number, min: number, max: number): number;
        convertBack(x: number, min: number, max: number): number;
        private _init();
        private _getXVolume(x);
        static convertToRange(value: number, newMin: number, newMax: number, oldMin: number, oldMax: number): number;
        private _fillGaps();
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Defines classes that add analytics features to charts including @see:TrendLine,
 * @see:MovingAverage and @see:FunctionSeries.
 */
declare module wijmo.chart.analytics {
    /**
     * Represents base class for various trend lines.
     */
    class TrendLineBase extends SeriesBase {
        private _sampleCount;
        private _bind;
        private _bindX;
        _xValues: any[];
        _yValues: any[];
        _originXValues: any[];
        _originYValues: any[];
        /**
         * Initializes a new instance of the @see:TrendLineBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the sample count for function calculation.
         * The property doesn't apply for MovingAverage.
         */
        sampleCount: number;
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
        getValues(dim: number): number[];
        _calculateValues(): void;
        _invalidate(): void;
        _clearValues(): void;
        _clearCalculatedValues(): void;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the fit type for a @see:TrendLine series.
     */
    enum TrendLineFitType {
        /**
         * A straight line that most closely approximates the data.  Y(x) = a * x + b.
         */
        Linear = 0,
        /**
         * Regression fit to the equation Y(x) = a * exp(b*x).
         */
        Exponential = 1,
        /**
         * Regression fit to the equation Y(x) = a * ln(x) + b.
         */
        Logarithmic = 2,
        /**
         * Regression fit to the equation Y(x) = a * pow(x, b).
         */
        Power = 3,
        /**
         * Regression fit to the equation Y(x) = a + b * cos(x) + c * sin(x) + d * cos(2*x) + e * sin(2*x) + ...
         */
        Fourier = 4,
        /**
         * Regression fit to the equation Y(x) = a * x^n + b * x^n-1 + c * x^n-2 + ... + z.
         */
        Polynomial = 5,
        /**
         * The minimum X-value.
         */
        MinX = 6,
        /**
         * The minimum Y-value.
         */
        MinY = 7,
        /**
         * The maximum X-value.
         */
        MaxX = 8,
        /**
         * The maximum Y-value.
         */
        MaxY = 9,
        /**
         * The average X-value.
         */
        AverageX = 10,
        /**
         * The average Y-value.
         */
        AverageY = 11,
    }
    /**
     * Represents a trend line series in a @see:FlexChart or @see:FinancialChart.
     *
     * A trend line is a line superimposed on a chart revealing the overall
     * direction of data.
     *
     * You may define a different fit type for each @see:TrendLine series
     * on the @see:FlexChart by setting its @see:fitType property.
     */
    class TrendLine extends TrendLineBase {
        private _fitType;
        private _order;
        private _helper;
        /**
         * Initializes a new instance of the @see:TrendLine class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the fit type of the @see:TrendLine.
         */
        fitType: TrendLineFitType;
        /**
         * Gets or sets the number of terms in a polynomial or Fourier equation.
         *
         * Set this value to an integer greater than 1.
         * It gets applied when the fitType is set to
         * wijmo.chart.analytics.TrendLineFitType.Polynomial or
         * wijmo.chart.analytics.TrendLineFitType.Fourier.
         */
        order: number;
        /**
         * Gets the coefficients of the equation.
         */
        readonly coefficients: number[];
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
        /**
         * Gets the formatted equation string for the coefficients.
         *
         * @param fmt The formatting function used to convert the coefficients
         * into strings. This parameter is optional.
         */
        getEquation(fmt?: Function): string;
        _calculateValues(): void;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Represents a base class of function series for @see:wijmo.chart.FlexChart.
     */
    class FunctionSeries extends TrendLineBase {
        private _min;
        private _max;
        /**
         * Initializes a new instance of the @see:FunctionSeries class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the minimum value of the parameter for calculating a function.
         */
        min: number;
        /**
         * Gets or sets the maximum value of the parameter for calculating a function.
         */
        max: number;
        getValues(dim: number): number[];
        _calculateValues(): void;
        _validateValue(value: number): number;
        _calculateValue(func: Function, parameter: number): number;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
    }
    /**
     * Represents a Y function series of @see:wijmo.chart.FlexChart.
     *
     * The @see:YFunctionSeries plots a function defined by formulas
     * of type y=f(x), specified using the @see:func property.
     */
    class YFunctionSeries extends FunctionSeries {
        private _func;
        /**
         * Initializes a new instance of the @see:YFunctionSeries class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the function used to calculate Y value.
         */
        func: Function;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
    }
    /**
     * Represents a parametric function series for @see:wijmo.chart.FlexChart.
     *
     * The @see::ParametricFunctionSeries plots a function defined by formulas
     * x=f(t) and y=f(t).
     *
     * The x and y values are calculated by the functions assigned to the
     * @see:xFunc and @see:yFunc properties.
     */
    class ParametricFunctionSeries extends FunctionSeries {
        private _xFunc;
        private _yFunc;
        /**
         * Initializes a new instance of the @see:ParametricFunctionSeries class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the function used to calculate the x value.
         */
        xFunc: Function;
        /**
         * Gets or sets the function used to calculate the y value.
         */
        yFunc: Function;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
        /**
         * Gets the approximate x and y from the given value.
         *
         * @param value The value to calculate.
         */
        approximate(value: number): any;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the type of MovingAverage Series.
     */
    enum MovingAverageType {
        /**
         * An average of the last n values.
         */
        Simple = 0,
        /**
         * Weighted average of the last n values,
         * where the weight decreases by 1 with each previous value.
         */
        Weighted = 1,
        /**
         * Weighted average of the last n values,
         * where the weight decreases exponentially with each previous value.
         */
        Exponential = 2,
        /**
         * Weighted average of the last n values,
         * whose result is equivalent to a double smoothed simple moving average.
         */
        Triangular = 3,
    }
    /**
     * Represents a moving average trend line for @see:FlexChart and @see:FinancialChart.
     *
     * It is a calculation to analyze data points by creating a series of averages of
     * different subsets of the full data set. You may define a different type on each
     * @see:MovingAverage object by setting the @see:type property on the
     * @see:MovingAverage itself.
     *
     * The @see:MovingAverage class has a @see:period property that allows you to set
     * the number of periods for computing the average value.
     */
    class MovingAverage extends TrendLineBase {
        private _period;
        private _type;
        /**
         * Initializes a new instance of the @see:MovingAverage class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the type of the moving average series.
         */
        type: MovingAverageType;
        /**
         * Gets or sets the period of the moving average series.
         * It should be set to integer value greater than 1.
         */
        period: number;
        _checkPeriod(): void;
        _calculateValues(): void;
        private _calculateSimple(x, y, forTMA?);
        private _calculateWeighted(x, y);
        private _calculateExponential(x, y);
        private _calculateTriangular(x, y);
    }
}

declare module wijmo.chart.analytics {
    /**
     * Represents a Waterfall series of @see:wijmo.chart.FlexChart.
     *
     * The @see:Waterfall series is normally used to demonstrate how
     * the starting position either increases or decreases through a
     * series of changes.
     */
    class Waterfall extends SeriesBase {
        static CSS_CONNECTOR_LINE_GROUP: string;
        static CSS_CONNECTOR_LINE: string;
        static CSS_ENDLABEL: string;
        _barPlotter: _BarPlotter;
        private _start;
        private _startLabel;
        private _relativeData;
        private _connectorLines;
        private _showTotal;
        private _totalLabel;
        private _styles;
        private _wfstyle;
        private _xValues;
        private _getXValues;
        private _yValues;
        private _showIntermediateTotal;
        private _intermediateTotalPositions;
        private _intermediateTotalLabels;
        private _intermediateTotalPos;
        /**
         * Initializes a new instance of the @see:Waterfall class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets a value that determines whether the given data
         * represents absolute or relative values (differences).
         */
        relativeData: boolean;
        /**
         * Gets or sets a value that determines the value of the start bar.
         * If start is null, the start bar will not be shown.
         */
        start: number;
        /**
         * Gets or sets the label of the start bar.
         */
        startLabel: string;
        /**
         * Gets or sets a value that determines whether to show
         * the total bar at the end of the chart.
         */
        showTotal: boolean;
        /**
         * Gets or sets the label of the total bar.
         */
        totalLabel: string;
        /**
         * Gets or sets a value that determines whether to show intermediate
         * total bars.
         *
         * This property works with @see:intermediateTotalPositions and
         * @see:intermediateTotalLabels properties.
         */
        showIntermediateTotal: boolean;
        /**
         * Gets or sets a value of the property that contains the index
         * for positions of the intermediate total bars.
         *
         * This property works with the @see:showIntermediateTotal and
         * @see:intermediateTotalLabels properties.
         */
        intermediateTotalPositions: number[];
        /**
         * Gets or sets the name of the property that contains labels for
         * the intermediate total bars. This should be an array or a string.
         *
         * This property works with the @see:showIntermediateTotal and
         * @see:intermediateTotalPositions properties.
         */
        intermediateTotalLabels: any;
        /**
         * Gets or sets a value that determines whether to show
         * connector lines.
         */
        connectorLines: boolean;
        /**
         * Gets or sets the Waterfall styles.
         *
         * The following styles are supported:
         *
         * <ol>
         *   <li><b>start</b>: Specifies the style of the start column.</li>
         *   <li><b>total</b>: Specifies the style of the total column.</li>
         *   <li><b>intermediateTotal</b>: Specifies the style of the intermediate total column.</li>
         *   <li><b>falling</b>: Specifies the style of the falling columns.</li>
         *   <li><b>rising</b>: Specifies the style of the rising columns.</li>
         *   <li><b>connectorLines</b>: Specifies the style of the connectorLines.</li>
         * </ol>
         *
         * <pre>waterfall.styles = {
         *   start: { fill: 'blue', stroke: 'blue' },
         *   total: { fill: 'yellow', stroke: 'yellow' },
         *   falling: { fill: 'red', stroke: 'red' },
         *   rising: { fill: 'green', stroke: 'green' },
         *   connectorLines: { stroke: 'blue', 'stroke-dasharray': '10, 10' }
         * }</pre>
         */
        styles: any;
        getValues(dim: number): number[];
        legendItemLength(): number;
        measureLegendItem(engine: IRenderEngine, index: number): Size;
        drawLegendItem(engine: IRenderEngine, rect: Rect, index: number): void;
        _clearValues(): void;
        _invalidate(): void;
        private _rendering(sender, args);
        private _getStyles();
        private _getStyleByKey(styles, key, fill, stroke);
        private _drawConnectorLine(engine, rotated, prevArea, currArea, falling);
        private _getLegendStyles(index);
        private _getName(index);
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the quartile calculation method of @see:BoxWhisker series.
     */
    enum QuartileCalculation {
        /** Include median value when calculating quartile. */
        InclusiveMedian = 0,
        /** Exclude median value when calculating quartile. */
        ExclusiveMedian = 1,
    }
    /**
     * Represents a Box&Whisker chart series.
     *
     * The @see:BoxWhisker series is normally used to compare distributions
     * between different sets of numerical data.
     */
    class BoxWhisker extends SeriesBase {
        private _groupWidth;
        private _gapWidth;
        private _showMeanLine;
        private _meanLineStyle;
        private _showMeanMarker;
        private _meanMarkerStyle;
        private _showInnerPoints;
        private _showOutliers;
        private _quartileCalculation;
        hitTester: _HitTester;
        /**
         * Initializes a new instance of the @see:BoxWhisker class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        private _initProperties(options);
        _clearValues(): void;
        /**
         * Gets or sets a value that specifies the quartile calculation method.
         */
        quartileCalculation: QuartileCalculation;
        /**
         * Gets or sets a value that determines the group width as a percentage.
         *
         * The default value for this property is 0.8. The min value is 0 and max value is 1.
         */
        groupWidth: number;
        /**
         * Gets or sets a value that determines the width of the gab between groups
         * as a percentage.
         *
         * The default value for this property is 0.1. The min value is 0 and max value is 1.
         */
        gapWidth: number;
        /**
         * Gets or sets a value that determines whether to show the mean line.
         */
        showMeanLine: boolean;
        /**
         * Gets or sets a value that specifies the style for the mean line.
         */
        meanLineStyle: any;
        /**
         * Gets or sets a value that determines whether to show the mean marker.
         */
        showMeanMarker: boolean;
        /**
         * Gets or sets a value that specifies the style for the mean marker.
         */
        meanMarkerStyle: any;
        /**
         * Gets or sets a value that determines whether to show the inner data points
         * for each point in the series.
         */
        showInnerPoints: boolean;
        /**
         * Gets or sets a value that determines whether to show outliers.
         *
         * Outliers are inner points outside the range between the first
         * and third quartiles.
         */
        showOutliers: boolean;
        private _rendering(sender, args);
        _convertPoints(points: number[], axis: _IAxis): number[];
        _drawBoxWhisker(engine: IRenderEngine, xs: any, ys: any, prevXS: any, prevYS: any, series: _ISeries): void;
        _renderLabels(engine: IRenderEngine, smap: _IHitArea[], chart: FlexChartCore, lblAreas: _RectArea[]): void;
    }
    class _BoxPlot {
        private _data;
        private _min;
        private _max;
        private _mean;
        private _firstQuartile;
        private _thirdQuartile;
        private _median;
        private _quartileCalculation;
        private _iqr;
        private _outlierPoints;
        private _innerPoints;
        private _showOutliers;
        constructor(data: number[], quartileCalculation: QuartileCalculation, showOutliers: boolean);
        readonly showOutliers: boolean;
        readonly min: number;
        readonly max: number;
        readonly mean: number;
        readonly firstQuartile: number;
        readonly thirdQuartile: number;
        readonly median: number;
        readonly outlierPoints: number[];
        readonly innerPoints: number[];
        _parse(): void;
        _quartileInc(data: number[], percent: number): any;
        _quartileExc(data: number[], percent: number): any;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the meaning of the @see:ErrorBar's @see:ErrorBar.value property.
     */
    enum ErrorAmount {
        /** The value property represents the error as an absolute value. */
        FixedValue = 0,
        /** The value property represents the error as a percentage. */
        Percentage = 1,
        /** The value property represents the error as a number of standard deviations. */
        StandardDeviation = 2,
        /** The error is the standard error of the mean (value property is not used). */
        StandardError = 3,
        /** Error values are bound through the @see:ErrorBar.binding property or set to an object with 'plus' and 'minus' values. */
        Custom = 4,
    }
    /**
     * Specifies the end style of the error bars.
     */
    enum ErrorBarEndStyle {
        /** Error bars end with a cap. */
        Cap = 0,
        /** Error bars are simple lines. */
        NoCap = 1,
    }
    /**
     * Specifies the direction of the error bar.
     */
    enum ErrorBarDirection {
        /** Show errors in both directions. */
        Both = 0,
        /** Show errors only in the minus direction. */
        Minus = 1,
        /** Show errors only in the plus direction. */
        Plus = 2,
    }
    /**
     * Represents an @see:ErrorBar series on a @see:wijmo.chart.FlexChart.
     *
     * The @see:ErrorBar series shows error margins and standard deviations
     * at a glance. They can be shown as a standard error amounts, percentages,
     * or standard deviation.
     *
     * You can also set the error values explicitly to display the exact
     * amounts you want.
     */
    class ErrorBar extends Series {
        private __errorValue;
        private _mean;
        private _errorAmount;
        private _endStyle;
        private _direction;
        private _value;
        private _errorBarStyle;
        private _paddings;
        private _plusBindingValues;
        private _minusBindingValues;
        private _errorBarEles;
        /**
         * Initializes a new instance of the @see:ErrorBar class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets a value that specifies the error value of the series.
         *
         * This property works with the @see:errorAmount property.
         */
        value: any;
        /**
         * Gets or sets a value that specifies the meaning of the
         * @see:value property.
         */
        errorAmount: ErrorAmount;
        /**
         * Gets or sets the style used to render the error bars.
         */
        errorBarStyle: any;
        /**
         * Gets or sets a value that specifies the end style of the error bars.
         */
        endStyle: ErrorBarEndStyle;
        /**
         * Gets or sets a value that specifies the direction of the error bars.
         */
        direction: ErrorBarDirection;
        getDataRect(currentRect?: Rect, calculatedRect?: Rect): Rect;
        private _getCustomValue(i);
        _calculateErrorValue(): void;
        _clearValues(): void;
        getValues(dim: number): number[];
        _chart: FlexChartCore;
        _errorValue: number;
        readonly _showPlus: boolean;
        readonly _showMinus: boolean;
        private _rendering(sender, args);
        /**
         * Gets the plot element that corresponds to the specified point index.
         *
         * @param pointIndex The index of the data point.
         */
        getPlotElement(pointIndex: number): any;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
declare module wijmo.chart.annotation {
    /**
     * Specifies the attachment of the annotation.
     */
    enum AnnotationAttachment {
        /**
        * Coordinates of the annotation point are defined by the data series index and
        * the data point index. */
        DataIndex = 0,
        /** Annotation point is specified in data coordinates. */
        DataCoordinate = 1,
        /** Annotation point is specified as a relative position inside the control where
        * (0,0) is the top left corner and (1,1) is the bottom right corner.*/
        Relative = 2,
        /** The annotation point is specified in control's pixel coordinates.  */
        Absolute = 3,
    }
    /**
     * Specifies the position of the annotation.
     */
    enum AnnotationPosition {
        /** The annotation appears at the Center of the target point. */
        Center = 0,
        /** The annotation appears at the Top of the target point. */
        Top = 1,
        /** The annotation appears at the Bottom of the target point. */
        Bottom = 2,
        /** The annotation appears at the Left of the target point. */
        Left = 4,
        /** The annotation appears at the Right of the target point. */
        Right = 8,
    }
    /**
     * Represents the base class of annotations for the @see:AnnotationLayer.
     */
    class AnnotationBase {
        static _DATA_KEY: string;
        static _CSS_ANNOTATION: string;
        static _CSS_ANNO_TEXT: string;
        static _CSS_ANNO_SHAPE: string;
        private _attachment;
        private _point;
        private _seriesIndex;
        private _pointIndex;
        private _position;
        private _offset;
        private _style;
        private _isVisible;
        private _tooltip;
        private _name;
        _element: SVGElement;
        _layer: AnnotationLayer;
        /**
         * Initializes a new instance of the @see:AnnotationBase class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the attachment of the annotation.
         */
        attachment: AnnotationAttachment;
        /**
         * Gets or sets the point of the annotation.
         * The coordinates of points depends on the @see:attachment property.
         * See @see:AnnotationAttachment for further description.
         */
        point: DataPoint;
        /**
         * Gets or sets the data series index of the annotation.
         * Applies only when the <b>attachment</b> property is set to DataIndex.
         */
        seriesIndex: number;
        /**
         * Gets or sets the data point index of the annotation.
         * Applies only when the <b>attachment</b> property is set to DataIndex.
         */
        pointIndex: number;
        /**
         * Gets or sets the position of the annotation.
         * The position is relative to the @see:point.
         */
        position: AnnotationPosition;
        /**
         * Gets or sets the offset of the annotation from the @see:point.
         */
        offset: Point;
        /**
         * Gets or sets the style of the annotation.
         */
        style: any;
        /**
         * Gets or sets the visibility of the annotation.
         */
        isVisible: boolean;
        /**
         * Gets or sets the tooltip of the annotation.
         */
        tooltip: string;
        /**
         * Gets or sets the name of the annotation.
         */
        name: string;
        /**
         * Render this annotation.
         *
         * @param engine The engine to render annotation.
         */
        render(engine: IRenderEngine): void;
        /**
         * Destroy this annotation
         */
        destroy(): void;
        _copy(dst: any, src: any): void;
        _processOptions(key: any, dst: any, src: any): void;
        _resetDefaultValue(): void;
        _toggleVisibility(visible: boolean): void;
        _getCSSClass(): string;
        _render(engine: IRenderEngine): void;
        _repaint(): void;
        _convertPoint(pt?: DataPoint): Point;
        _convertDataToLen(total: number, axis: Axis, val: any, converted?: boolean): number;
        _renderCenteredText(content: string, engine: IRenderEngine, point: Point, className?: string, angle?: number, style?: any): void;
        _adjustOffset(pt: Point, offset: Point): void;
        _getOffset(engine?: IRenderEngine): Point;
        _getPositionOffset(engine?: IRenderEngine): Point;
        _getSize(engine?: IRenderEngine): Size;
        _isValidPoint(pt: Point): boolean;
        _measureString(engine: IRenderEngine, text: string, className: string): Size;
    }
    /**
     * Represents a text annotation for the @see:AnnotationLayer.
     */
    class Text extends AnnotationBase {
        static _CSS_TEXT: string;
        private _text;
        /**
         * Initializes a new instance of the @see:Text annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        /**
         * Gets or sets the text of the annotation.
         */
        text: string;
        _render(engine: IRenderEngine): void;
        _getSize(engine?: IRenderEngine): Size;
    }
    /**
     * Represents a base class of shape annotations for the @see:AnnotationLayer.
     */
    class Shape extends AnnotationBase {
        static _CSS_SHAPE: string;
        private _content;
        _shapeContainer: SVGGElement;
        /**
         * Initializes a new instance of the @see:Shape annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        /**
         * Gets or sets the text of the annotation.
         */
        content: string;
        _render(engine: IRenderEngine): void;
        _getContentCenter(): DataPoint;
        _renderShape(engine: IRenderEngine): void;
        _renderText(engine: IRenderEngine): void;
    }
    /**
     * Represents an ellipse annotation for @see:AnnotationLayer.
     */
    class Ellipse extends Shape {
        static _CSS_ELLIPSE: string;
        private _width;
        private _height;
        /**
         * Initializes a new instance of the @see:Ellipse annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the width of the @see:Ellipse annotation.
         */
        width: number;
        /**
         * Gets or sets the height of the @see:Ellipse annotation.
         */
        height: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a rectangle annotation for @see:AnnotationLayer.
     */
    class Rectangle extends Shape {
        static _CSS_RECTANGLE: string;
        private _width;
        private _height;
        /**
         * Initializes a new instance of the @see:Rectangle annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the width of the @see:Rectangle annotation.
         */
        width: number;
        /**
         * Gets or sets the height of the @see:Rectangle annotation.
         */
        height: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a line annotation for @see:AnnotationLayer.
     */
    class Line extends Shape {
        static _CSS_LINE: string;
        private _start;
        private _end;
        private _cS;
        private _cE;
        /**
         * Initializes a new instance of the @see:Line annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the start point of the @see:Line annotation.
         */
        start: DataPoint;
        /**
         * Gets or sets the end point of the Line annotation.
         */
        end: DataPoint;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _getContentCenter(): DataPoint;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
        _renderText(engine: IRenderEngine): void;
        _renderCenteredText(content: string, engine: IRenderEngine, point: Point, className?: string, angle?: number, style?: any): void;
    }
    /**
     * Represents a polygon annotation for @see:AnnotationLayer.
     */
    class Polygon extends Shape {
        static _CSS_POLYGON: string;
        private _points;
        /**
         * Initializes a new instance of the @see:Polygon annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        _processOptions(key: any, dst: any, src: any): void;
        /**
         * Gets the collection of points of the @see:Polygon annotation.
         */
        readonly points: wijmo.collections.ObservableArray;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _getContentCenter(): DataPoint;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a circle annotation for @see:AnnotationLayer.
     */
    class Circle extends Shape {
        static _CSS_CIRCLE: string;
        private _radius;
        /**
         * Initializes a new instance of the @see:Circle annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the radius of the @see:Circle annotation.
         */
        radius: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents a square annotation for the @see:AnnotationLayer.
     */
    class Square extends Shape {
        static _CSS_SQUARE: string;
        private _length;
        /**
         * Initializes a new instance of the @see:Square annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the length of the @see:Square annotation.
         */
        length: number;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
    }
    /**
     * Represents an image annotation for @see:AnnotationLayer.
     */
    class Image extends Shape {
        static _CSS_IMAGE: string;
        private _width;
        private _height;
        private _href;
        /**
         * Initializes a new instance of the @see:Image annotation class.
         *
         * @param options JavaScript object containing initialization data for the object.
         */
        constructor(options?: any);
        /**
         * Gets or sets the width of the @see:Image annotation.
         */
        width: number;
        /**
         * Gets or sets the height of the @see:Image annotation.
         */
        height: number;
        /**
         * Gets or sets the href of the @see:Image annotation.
         */
        href: string;
        _resetDefaultValue(): void;
        _getCSSClass(): string;
        _renderShape(engine: IRenderEngine): void;
        _getSize(): Size;
        private _applyStyle(el, style);
        private _deCase(s);
    }
}

/**
 * Defines the @see:AnnotationLayer and various annotations for @see:FlexChart and
 * @see:FinancialChart.
 */
declare module wijmo.chart.annotation {
    /**
     * Represents an annotation layer for @see:FlexChart and @see:FinancialChart.
     *
     * The AnnotationLayer contains a collection of various annotation elements: texts,
     * lines, images, rectangles etc.
     * To use the @see:AnnotationLayer, create annotations and push them to the layer's
     * items property.
     */
    class AnnotationLayer {
        static _CSS_Layer: string;
        private _items;
        private _engine;
        _layerEle: SVGGElement;
        private _plotrectId;
        private _tooltip;
        private _forceTTShowing;
        private _annoTTShowing;
        _chart: FlexChartCore;
        /**
         * Initializes a new instance of the @see:AnnotationLayer class.
         *
         * @param chart A chart to which the @see:AnnotationLayer is attached.
         * @param options A JavaScript object containing initialization data for
         * @see:AnnotationLayer.
         */
        constructor(chart: FlexChartCore, options?: any);
        _init(chart: FlexChartCore): void;
        private _lostFocus(evt);
        /**
         * Gets the collection of annotation elements in the @see:AnnotationLayer.
         */
        readonly items: wijmo.collections.ObservableArray;
        /**
         * Gets an annotation element by name in the @see:AnnotationLayer.
         * @param name The annotation's name.
         */
        getItem(name: string): AnnotationBase;
        /**
         * Gets the annotation elements by name in the @see:AnnotationLayer.
         * @param name The annotations' name.
         */
        getItems(name: string): Array<AnnotationBase>;
        private _bindTooltip();
        _showTooltip(): boolean;
        private _toggleTooltip(tooltip, evt, parentNode);
        _getAnnotation(ele: any, parentNode: any): AnnotationBase;
        private _getAnnotationElement(ele, pNode);
        private _itemsChanged(items, e);
        private _renderAnnotations();
        _renderGroup(): void;
        _renderAnnotation(item: AnnotationBase): void;
        private _destroyAnnotations();
        private _destroyAnnotation(item);
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
declare module wijmo.chart.interaction {
    /**
     * Range Slider.
     */
    class _RangeSlider {
        private static _HRANGESLIDER;
        private static _VRANGESLIDER;
        private static _RANGESLIDER_DECBTN;
        private static _RANGESLIDER_INCBTN;
        private static _RANGESLIDER_RANGEHANDLE;
        private static _RANGESLIDER_MINHANDLE;
        private static _RANGESLIDER_MAXHANDLE;
        private static _RANGESLIDER_HANDLE_ACTIVE;
        private _isVisible;
        private _buttonsVisible;
        private _minScale;
        private _maxScale;
        private _seamless;
        private _rsContainer;
        private _rsEle;
        private _decBtn;
        private _incBtn;
        private _rsContent;
        private _minHandler;
        private _rangeHandler;
        private _maxHandler;
        private _wrapperSliderMousedown;
        private _wrapperDocMouseMove;
        private _wrapperDocMouseup;
        private _wrapperBtnMousedown;
        private _wrapperRangeSpaceMousedown;
        private _wrapperRangeMouseleave;
        private _isTouch;
        private _slidingInterval;
        private _rangeSliderRect;
        private _isHorizontal;
        private _isBtnMousedown;
        private _needSpaceClick;
        private _hasButtons;
        private _movingEle;
        private _movingOffset;
        private _range;
        private _plotBox;
        private _startPt;
        _minPos: number;
        _maxPos: number;
        constructor(container: HTMLElement, needSpaceClick: boolean, hasButtons?: boolean, options?: any);
        /**
         * Gets or sets whether the increase/decrease buttons are displayed or not.
         */
        buttonsVisible: boolean;
        /**
         * Gets or sets the orientation of the range slider.
         */
        isHorizontal: boolean;
        /**
         * Gets or sets the visibility of the range slider.
         */
        isVisible: boolean;
        /**
         * Gets or sets the minimum range scale of the range slider.
         */
        minScale: number;
        /**
         * Gets or sets the maximum range scale of the range slider.
         */
        maxScale: number;
        /**
         * Gets or sets a value that determines whether the min/max elements
         * may be reversed by dragging one over the other.
         */
        seamless: boolean;
        /**
        * Occurs after the range changes.
        */
        rangeChanged: Event;
        /**
         * Raises the @see:rangeChanged event.
         */
        onRangeChanged(e?: EventArgs): void;
        /**
        * Occurs while the range is changing.
        */
        rangeChanging: Event;
        /**
         * Raises the @see:rangeChanging event.
         */
        onRangeChanging(e?: EventArgs): void;
        readonly _isSliding: boolean;
        readonly _handleWidth: number;
        private _createSlider(container);
        private _switchEvent(isOn);
        private _onSliderMousedown(e);
        private _onDocMouseMove(e);
        private _onMove(mvPt);
        private _onDocMouseup(e);
        private _onRangeSpaceMousedown(e);
        private _onRangeMouseleave(e);
        private _onBtnMousedown(e);
        _refresh(rsRect?: any): void;
        private _updateElesPosition();
        private _refreshSlider(minCss, rangeCss, maxCss);
        private _invalidate();
        private _changeRange(offset);
        private _doSliding(offset, pt?);
        private _setSlidingInterval(offset, pt?);
        private _clearInterval();
        private _getRsRect();
    }
}

/**
 * Defines classes that add interactive features to charts.
 */
declare module wijmo.chart.interaction {
    /**
    * Specifies the orientation of the range selector.
    */
    enum Orientation {
        /** Horizontal, x-data range. */
        X = 0,
        /** Vertical, y-data range. */
        Y = 1,
    }
    /**
     * The @see:RangeSelector control displays a range selector that allows the user to
     * choose the range of data to display on the specified @see:FlexChart.
     *
     * To use the @see:RangeSelector control, specify the @see:FlexChart
     * control to display the selected range of data.
     *
     * The @see:rangeChanged event is fired when there is a change in min or max value.
     * For example:
     * <pre>
     *  var rangeSelector = new wijmo.chart.interaction.RangeSelector(chart);
     *  rangeSelector.rangeChanged.addHandler(function () {
     *     // perform related updates
     *     // e.g. modify displayed range of another chart
     *     update(rangeSelector.min, rangeSelector.max);
     *   });
     * </pre>
     */
    class RangeSelector {
        private _isVisible;
        private _min;
        private _max;
        private _orientation;
        private _seamless;
        private _minScale;
        private _maxScale;
        private _chart;
        private _rangeSelectorEle;
        private _rangeSlider;
        /**
         * Initializes a new instance of the @see:RangeSelector class.
         *
         * @param chart The @see:FlexChart that displays the selected range.
         * @param options A JavaScript object containing initialization data for the control.
         */
        constructor(chart: FlexChartCore, options?: any);
        /**
         * Gets or sets the visibility of the range selector.
         */
        isVisible: boolean;
        /**
         * Gets or sets the minimum value of the range.
         * If not set, the minimum is calculated automatically.
         */
        min: number;
        /**
         * Gets or sets the maximum value of the range.
         * If not set, the maximum is calculated automatically.
         */
        max: number;
        /**
         * Gets or sets the orientation of the range selector.
         */
        orientation: Orientation;
        /**
         * Gets or sets a value that determines whether the min/max elements
         * may be reversed by dragging one over the other.
         */
        seamless: boolean;
        /**
         * Gets or sets the minimum amount of data that can be selected,
         * as a percentage of the overall chart range.
         * This property must be set to a value between zero and one.
         */
        minScale: number;
        /**
         * Gets or sets the maximum amount of data that can be selected,
         * as a percentage of the total range.
         * This property must be set to a value between zero and one.
         */
        maxScale: number;
        /**
         * Removes the @see:RangeSelector control from the chart.
         */
        remove(): void;
        /**
         * Occurs after the range changes.
         */
        rangeChanged: Event;
        /**
         * Raises the @see:rangeChanged event.
         */
        onRangeChanged(e?: EventArgs): void;
        private _createRangeSelector();
        private _switchEvent(isOn);
        private _refresh();
        private _adjustMinAndMax();
        private _updateMinAndMaxWithScale(fireEvent);
        private _changeRange();
        private _updateRange();
        private _getMinAndMax();
    }
}

declare module wijmo.chart.interaction {
    /**
      * Specifies the mouse action of the chart gestures.
      */
    enum MouseAction {
        /** Zoom chart by mouse. */
        Zoom = 0,
        /** Pan chart by mouse. */
        Pan = 1,
    }
    /**
      * Specifies the interactive axes of the chart gestures.
      */
    enum InteractiveAxes {
        /** Interactive Axis X. */
        X = 0,
        /** Interactive Axis Y. */
        Y = 1,
        /** Interactive Both Axis X and Axis Y. */
        XY = 2,
    }
    /**
     * The @see:ChartGestures control allows the user to zoom or pan on
     * the specified @see:FlexChart.
     *
     * To use the @see:ChartGestures control, specify the @see:FlexChart
     * control on which to zoom or pan.
     *
     * <pre>
     *  var chartGestures = new wijmo.chart.interaction.ChartGestures(chart);
     * </pre>
     */
    class ChartGestures {
        static _CSS_ZOOM: string;
        static _CSS_ZOOM_OVERLAY: string;
        static _CSS_PANABLE: string;
        static _CSS_TOUCH_DISABLED: string;
        static _CSS_BLOCK_INTERACTION: string;
        private _chart;
        private _zoomEle;
        private _overlayEle;
        private _zoomEleOffset;
        private _wrapperMousedown;
        private _wrapperMouseMove;
        private _wrapperMouseup;
        private _wrapperPointerdown;
        private _wrapperPointerMove;
        private _wrapperPointerup;
        private _wrapperTouchStart;
        private _wrapperTouchMove;
        private _wrapperTouchEnd;
        private _wrapperMouseWheel;
        private _plotBox;
        private _startFirstPt;
        private _minX;
        private _maxX;
        private _minY;
        private _maxY;
        private _seriesGroup;
        private _threadHold;
        private _scaling;
        private _panning;
        private _startDistance;
        private _clip;
        private _selection;
        private _startPointers;
        private _mvPointers;
        private _plotOffset;
        private _endPoint;
        private _pinchStartEvents;
        private _minXRange;
        private _minYRange;
        private _innerUpdating;
        private _lastMinX;
        private _lastMaxX;
        private _lastMinY;
        private _lastMaxY;
        private _mouseAction;
        private _interactiveAxes;
        private _enable;
        private _scaleX;
        private _scaleY;
        private _posX;
        private _posY;
        /**
         * Initializes a new instance of the @see:ChartGestures class.
         *
         * @param chart The @see:FlexChart that allows the user to zoom or pan.
         * @param options A JavaScript object containing initialization data for the control.
         */
        constructor(chart: wijmo.chart.FlexChartCore, options?: any);
        /**
          * Gets or sets the mouse action of the ChartGestures.
          */
        mouseAction: MouseAction;
        /**
          * Gets or sets the interactive axes of the ChartGestures.
          */
        interactiveAxes: InteractiveAxes;
        /**
          * Gets or sets the enable of the ChartGestures.
          */
        enable: boolean;
        /**
          * Gets or sets the initial scale of axis X.
          * The scale should be more than 0 and less than or equal to 1.
          * The scale specifies which part of the range between Min and Max
          * is shown. When scale is 1 (default value), the whole axis range
          * is visible.
          */
        scaleX: number;
        /**
          * Gets or sets the initial scale of axis Y.
          * The scale should be more than 0 and less than or equal to 1.
          * The scale specifies which part of the range between Min and Max
          * is shown. When scale is 1 (default value), the whole axis range
          * is visible.
          */
        scaleY: number;
        /**
          * Gets or sets the initial position of the axis X.
          * The value represents initial position on the axis when the Scale
          * is less than 1. Otherwise, the Value has no effect. The Value should
          * lie between 0 to 1.
         */
        posX: number;
        /**
          * Gets or sets the initial position of the axis Y.
          * The value represents initial position on the axis when the Scale
          * is less than 1. Otherwise, the Value has no effect. The Value should
          * lie between 0 to 1.
         */
        posY: number;
        /**
         * Removes the @see:ChartGestures control from the chart.
         */
        remove(): void;
        /**
         * Reset the axis of the chart.
         */
        reset(): void;
        /**
         * Refreshes the @see:FlexChart with the gestures settings.
         */
        _refreshChart(): void;
        private _initialize();
        private _switchEvent(isOn);
        private _refresh();
        /** mouse event*/
        private _onMousedown(e);
        private _onMouseMove(e);
        private _onMouseup(e);
        private _onMouseWheel(e);
        private _mouseDown(e);
        private _mouseMove(e);
        private _mouseup(e);
        /** ms pointer event*/
        private _onPointerdown(e);
        private _onPointerMove(e);
        private _onPointerup(e);
        private _pointerDown(e);
        private _pointerMove(e);
        private _pointerUp(e);
        /** touch event*/
        private _onTouchStart(e);
        private _onTouchMove(e);
        private _onTouchEnd(e);
        /** help method of zooming chart by mouse */
        private _initOverlay();
        private _updateOverLay(mvPt);
        _updatePoint(mvPt: Point): void;
        _pointInPlotArea(mvPt: Point): boolean;
        private _zoomedChart(endPt);
        private _zoomedAxis(endPt, isX);
        private _panningChart(distanceX, distanceY);
        private _pannedChart(distanceX, distanceY);
        private _scalingChart(scale, offset);
        private _scaledChart(e);
        private _updateAxisByDistance(isX, distance);
        private _updateAxisByChg(isX, chgMin, chgMax);
        private _initAxisRangeWithPosAndScale(isX);
        private _updateAxisRange(axis, tMin, tMax);
        private _reset();
        private _getAxisMin(axis);
        private _getAxisMax(axis);
        private _getTransFormGroups();
        private _disabledOthersInteraction(disabled);
        private _getPoint(e);
        private _getTouchPair(event);
        private _touchDistance(event);
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Defines the @see:ChartAnimation for @see:FlexChart, @see:FinancialChart and @see:FlexPie.
 */
declare module wijmo.chart.animation {
    /**
     * Specifies the rate of change of a parameter over time.
     */
    enum Easing {
        /** Simple linear tweening, no easing and no acceleration. */
        Linear = 0,
        /** Easing equation for a swing easing */
        Swing = 1,
        /** Easing equation for a quadratic easing in, accelerating from zero velocity. */
        EaseInQuad = 2,
        /** Easing equation for a quadratic easing out, decelerating to zero velocity. */
        EaseOutQuad = 3,
        /** Easing equation for a quadratic easing in and out, acceleration until halfway, then deceleration. */
        EaseInOutQuad = 4,
        /** Easing equation for a cubic easing in - accelerating from zero velocity. */
        EaseInCubic = 5,
        /** Easing equation for a cubic easing out - decelerating to zero velocity. */
        EaseOutCubic = 6,
        /** Easing equation for a cubic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutCubic = 7,
        /** Easing equation for a quartic easing in - accelerating from zero velocity. */
        EaseInQuart = 8,
        /** Easing equation for a quartic easing out - decelerating to zero velocity. */
        EaseOutQuart = 9,
        /** Easing equation for a quartic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutQuart = 10,
        /** Easing equation for a quintic easing in - accelerating from zero velocity. */
        EaseInQuint = 11,
        /** Easing equation for a quintic easing out - decelerating to zero velocity. */
        EaseOutQuint = 12,
        /** Easing equation for a quintic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutQuint = 13,
        /** Easing equation for a sinusoidal easing in - accelerating from zero velocity. */
        EaseInSine = 14,
        /** Easing equation for a sinusoidal easing out - decelerating to zero velocity.  */
        EaseOutSine = 15,
        /** Easing equation for a sinusoidal easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutSine = 16,
        /** Easing equation for an exponential easing in - accelerating from zero velocity. */
        EaseInExpo = 17,
        /** Easing equation for an exponential easing out - decelerating to zero velocity. */
        EaseOutExpo = 18,
        /** Easing equation for an exponential easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutExpo = 19,
        /** Easing equation for a circular easing in - accelerating from zero velocity. */
        EaseInCirc = 20,
        /** Easing equation for a circular easing out - decelerating to zero velocity. */
        EaseOutCirc = 21,
        /** Easing equation for a circular easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutCirc = 22,
        /** Easing equation for a back easing in - accelerating from zero velocity. */
        EaseInBack = 23,
        /** Easing equation for a back easing out - decelerating to zero velocity. */
        EaseOutBack = 24,
        /** Easing equation for a back easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutBack = 25,
        /** Easing equation for a bounce easing in - accelerating from zero velocity. */
        EaseInBounce = 26,
        /** Easing equation for a bounce easing out - decelerating to zero velocity. */
        EaseOutBounce = 27,
        /** Easing equation for a bounce easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutBounce = 28,
        /** Easing equation for an elastic easing in - accelerating from zero velocity. */
        EaseInElastic = 29,
        /** Easing equation for an elastic easing out - decelerating to zero velocity. */
        EaseOutElastic = 30,
        /** Easing equation for an elastic easing in and out - acceleration until halfway, then deceleration. */
        EaseInOutElastic = 31,
    }
    /**
     * Specifies the animation mode whether chart should animate one point at a time,
     * series by series, or all at once.
     */
    enum AnimationMode {
        /** All points and series are animated at once. */
        All = 0,
        /**
         * Animation is performed point by point. Multiple series are animated
         * simultaneously at the same time.
        */
        Point = 1,
        /**
         * Animation is performed series by series.
         * Entire series is animated at once, following the same animation as the "All"
         * option, but just one series at a time.
         */
        Series = 2,
    }
    /**
     * Represents the animation for @see:FlexChart, @see:FinancialChart and @see:FlexPie.
     *
     * The @see:ChartAnimation provides built-in animation while loading and updating
     * the chart.
     * The animation can be configured by the user through several properties that
     * include duration, easing function, animation mode.
     */
    class ChartAnimation {
        private _chart;
        private _animation;
        private _cv;
        private _updateEventArgs;
        private _chartType;
        private _play;
        /**
         * Initializes a new instance of the @see:ChartAnimation class.
         *
         * @param chart A chart to which the @see:ChartAnimation is attached.
         * @param options A JavaScript object containing initialization data for
         * @see:ChartAnimation.
         */
        constructor(chart: FlexChartBase, options?: any);
        private _initOptions(options);
        private _setCV(cv);
        /**
         * Gets or sets whether the plot points animate one at a time, series by series,
         * or all at once.
         * The whole animation is still completed within the duration.
         */
        animationMode: AnimationMode;
        /**
         * Gets or sets the easing function applied to the animation.
         */
        easing: Easing;
        /**
         * Gets or sets the length of entire animation in milliseconds.
         */
        duration: number;
        /**
         * Gets or sets a value indicating whether animation is applied to the axis.
         */
        axisAnimation: boolean;
        private _playAnimation();
        /**
         * Performs the animation.
         */
        animate(): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Defines the @see:Sunburst chart control and its associated classes.
 */
declare module wijmo.chart.hierarchical {
    /**
     * Sunburst chart control.
     */
    class Sunburst extends FlexPie {
        private _bindName;
        private _processedData;
        private _legendLabels;
        private _level;
        private _sliceIndex;
        private _parentRef;
        private _childItemsPath;
        private _processedItem;
        constructor(element: any, options?: any);
        /**
         * Gets or sets the name of the property containing name of the data item;
         * it should be an array or a string.
         */
        bindingName: any;
        /**
         * Gets or sets the name of the property (or properties) used to generate
         * child items in hierarchical data.
         *
         * Set this property to a string to specify the name of the property that
         * contains an item's child items (e.g. <code>'items'</code>).
         *
         * Set this property to an array containing the names of the properties
         * that contain child items at each level, when the items are child items
         * at different levels with different names
         * (e.g. <code>[ 'accounts', 'checks', 'earnings' ]</code>).
         */
        childItemsPath: any;
        _initData(): void;
        _performBind(): void;
        private _calculateValueAndLevel(arr, level);
        _renderPie(engine: any, radius: any, innerRadius: any, startAngle: any, offset: any): void;
        _renderHierarchicalSlices(engine: any, cx: any, cy: any, values: any, sum: any, radius: any, innerRadius: any, startAngle: any, totalSweep: any, offset: any, level: any): void;
        _getLabelsForLegend(): string[];
        _highlightCurrent(): void;
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        _getSelectedItemOffset(index: any, angle: any): {
            x: number;
            y: number;
        };
        private _getSelectedParentIndex(index);
    }
}

declare module wijmo.chart.hierarchical {
    /**
     * Specifies the treemap type.
     */
    enum TreeMapType {
        /** Shows squarified treemap. */
        Squarified = 0,
        /** Shows horizontal squarified treemap. */
        Horizontal = 1,
        /** Shows vertical squarified treemap. */
        Vertical = 2,
    }
    /**
     * The @see:TreeMap control displays hierarchical (tree-structured) data as a set
     * of nested rectangles. Each branch of the tree is given a rectangle, which is then
     * tiled with smaller rectangles representing sub-branches.
     * A leaf node's rectangle has an area proportional to a specified dimension of the data.
     * Often the leaf nodes are colored to show a separate dimension of the data.
     *
     * To use the @see:TreeMap control, set the @see:TreeMap.itemsSource property
     * to an array containing the data and use the @see:TreeMap.binding and
     * @see:TreeMap.bindingName properties to set the properties that contain
     * the item values and names.
     */
    class TreeMap extends FlexChartBase {
        static _CSS_ITEMDEPTH: string;
        private static _MARGIN;
        private _binding;
        private _bindingName;
        _values: number[];
        _labels: string[];
        _areas: any[];
        private _sum;
        private _keywords;
        private _processedData;
        private _depth;
        private _itemIndex;
        private _childItemsPath;
        private _processedItem;
        private _lbl;
        private _tmGroup;
        private _type;
        private _maxDepth;
        private _plotRect;
        private _tmItems;
        private _colRowLens;
        _currentItem: any;
        _defPalette: any;
        /**
         * Initializes a new instance of the @see:TreeMap class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options A Javascript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        _rollUp(): void;
        private _toogleTooltip(evt);
        /**
         * The selectionMode doesn't work in TreeMap control.
         */
        selectionMode: SelectionMode;
        readonly _treeMapItems: any[];
        /**
         * Gets the chart's @see:Tooltip.
         */
        readonly tooltip: ChartTooltip;
        /**
        * Gets or sets the name of the property of the data item that contains the chart value.
        *
        * The binding property is used to calculate the size of the node as compared to other node values.
        * The property should contain numeric data.
        */
        binding: string;
        /**
         * Gets or sets the @see:TreeMapType of the treemap.
         */
        type: TreeMapType;
        /**
         * Gets or sets the name of the property containing name of the data item.
         * The bindingName property is used to show name of the node. It should be an array or a string.
         */
        bindingName: any;
        /**
         * Gets or sets the @see:DataLabel of the treemap.
         */
        dataLabel: DataLabel;
        /**
         * Gets or sets the name of the property (or properties) used to generate
         * child items in hierarchical data.
         *
         * Set this property to a string to specify the name of the property that
         * contains an item's child items (e.g. <code>'items'</code>).
         *
         * Set this property to an array containing the names of the properties
         * that contain child items at each level, when the items are child items
         * at different levels with different names
         * (e.g. <code>[ 'accounts', 'checks', 'earnings' ]</code>).
         */
        childItemsPath: any;
        /**
         * Gets or sets the maximum number of node levels to show in the current view.
         * These levels are flattened into the current plane.
         * If a treemap has more levels than this value, user has to move up and down.
         */
        maxDepth: number;
        /**
         * Gets or sets an array of default colors to be used in a treemap.
         *
         * The array contains strings that represent CSS colors. For example:
         * <pre>
         * // use colors specified by name
         * chart.palette = ['red', 'green', 'blue'];
         * // or use colors specified as rgba-values
         * chart.palette = [
         *   'rgba(255,0,0,1)',
         *   'rgba(255,0,0,0.8)',
         *   'rgba(255,0,0,0.6)',
         *   'rgba(255,0,0,0.4)'];
         * </pre>
         *
         * Or contains titleColor, maxColor, minColor separately. For example:
         * <pre>
         * chart.palette = [{
         *      titleColor: '#00277d',
         *      maxColor: 'rgba(0,39,125,0.7)',
         *      minColor: 'rgba(168,187,230,0.7)'
         *  }, {
         *      titleColor: '#7d1f00',
         *      maxColor: 'rgba(125,21,0,0.7)',
         *      minColor: 'rgba(230,183,168,0.7)'
         *  }, {
         *      titleColor: '#007d27',
         *      maxColor: 'rgba(0,125,39,0.7)',
         *      minColor: 'rgba(168,230,188,0.7)'
         *  }];
         * </pre>
         */
        palette: string[];
        _initData(): void;
        _performBind(): void;
        private _sortData(data);
        private _getTMItemsAndLabelsAndValues(data, treemapItems, depth, parentItem, color?);
        private _calculateColorForItems(items, color?, colorConverter?);
        private _getBindData(item, values, binding);
        private _calculateValueAndDepth(arr, depth);
        _prepareRender(): void;
        _renderChart(engine: IRenderEngine, rect: Rect, applyElement: boolean): void;
        private _renderTreeMap(engine, rect, container, items, sum, maxDepth);
        private _resetItemRects(items);
        private _calculateItemRects(rect, items, sum, depth, maxDepth);
        private _renderHierarchicalTreeMapItems(engine, container, rect, items, sum, depth, maxDepth);
        _renderLabels(engine: IRenderEngine): void;
        private _renderLabelAndBorder(engine, area, rect, s, pos, offset, pt, line, marg, border);
        private _renderText(engine, area, rect, s, pt, halign, valign, className);
        private _cutText(s, actualWidth, maxWidth);
        private _measureLegendItem(engine, text);
        _getDesiredLegendSize(engine: IRenderEngine, isVertical: boolean, width: number, height: number): Size;
        _renderLegend(engine: IRenderEngine, pos: Point, areas: any[], isVertical: boolean, width: number, height: number): void;
        _drawLegendItem(engine: IRenderEngine, rect: Rect, i: number, name: string): void;
        private _getLabelContent(ht, content);
        /**
         * Gets a @see:wijmo.chart.HitTestInfo object with information about the specified point.
         *
         * @param pt The point to investigate, in window coordinates.
         * @param y Y coordinate of the point (if the first parameter is a number).
         * @return A @see:wijmo.chart.HitTestInfo object containing information about the point.
         */
        hitTest(pt: any, y?: number): wijmo.chart.HitTestInfo;
        _getHitTestItem(index: number): any;
        _getHitTestValue(index: number): number;
        _getHitTestLabel(index: number): string;
    }
}

declare module wijmo.chart.hierarchical {
    class HierarchicalUtil {
        static parseDataToHierarchical(data: any, binding: any, bindingName: any, childItemsPath: any): any[];
        private static parseGroupCV(cv, binding);
        private static parseGroups(group, binding);
        private static parseItems(items, binding, bindingName, childItemsPath);
        private static isFlatItem(item, binding);
        private static convertFlatData(items, binding, bindingName);
        private static convertFlatToHierarchical(arr, data);
        private static convertFlatItem(data, item, binding, bindingName);
        private static parseItem(item, binding, bindingName, childItemsPath);
        static parseFlatItem(data: any, item: any, binding: any, bindingName: any): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Defines the @see:FlexRadar control and its associated classes.
 *
 */
declare module wijmo.chart.radar {
    /**
     * Specifies the type of radar chart.
     */
    enum RadarChartType {
        /** Shows vertical bars and allows you to compare values of items across categories. */
        Column = 0,
        /** Shows patterns within the data using X and Y coordinates. */
        Scatter = 1,
        /** Shows trends over a period of time or across categories. */
        Line = 2,
        /** Shows line chart with a symbol on each data point. */
        LineSymbols = 3,
        /** Shows line chart with the area below the line filled with color. */
        Area = 4,
    }
    /**
     * radar chart control.
     */
    class FlexRadar extends FlexChartCore {
        private _chartType;
        private _startAngle;
        private _totalAngle;
        private _reversed;
        _center: wijmo.Point;
        _radius: number;
        _angles: number[];
        _isPolar: boolean;
        _areas: any[];
        private __radarLinePlotter;
        private __radarColumnPlotter;
        /**
         * Initializes a new instance of the @see:FlexRadar class.
         *
         * @param element The DOM element that hosts the control, or a selector for the
         * host element (e.g. '#theCtrl').
         * @param options A JavaScript object containing initialization data for the
         * control.
         */
        constructor(element: any, options?: any);
        private readonly _radarLinePlotter;
        private readonly _radarColumnPlotter;
        _initAxes(): void;
        _layout(rect: Rect, size: Size, engine: IRenderEngine): void;
        /**
         * Gets or sets the type of radar chart to be created.
         */
        chartType: RadarChartType;
        /**
         * Gets or sets the starting angle for the radar, in degrees.
         *
         * Angles are measured clockwise, starting at the 12 o'clock position.
         */
        startAngle: number;
        /**
         * Gets or sets the total angle for the radar, in degrees.  Its default value is 360.
         * The value must be greater than 0, or less than or equal to 360.
         */
        totalAngle: number;
        /**
         * Gets or sets a value that determines whether angles are reversed
         * (counter-clockwise).
         *
         * The default value is false, which causes angles to be measured in
         * the clockwise direction.
         */
        reversed: boolean;
        /**
         * Gets or sets a value that determines whether and how the series objects are stacked.
         */
        stacking: Stacking;
        _getChartType(): chart.ChartType;
        _getPlotter(series: FlexRadarSeries): _IPlotter;
        _convertPoint(radius: any, angle: any): Point;
        _createSeries(): SeriesBase;
        _clearCachedValues(): void;
        _performBind(): void;
        _prepareRender(): void;
    }
}

declare module wijmo.chart.radar {
    /**
     * Represents a series of data points to display in the chart.
     *
     * The @see:FlexRadarSeries class supports all basic chart types. You may define
     * a different chart type on each @see:FlexRadarSeries object that you add to the
     * @see:FlexRadar series collection. This overrides the @see:chartType
     * property set on the chart that is the default for all @see:FlexRadarSeries objects
     * in its collection.
     */
    class FlexRadarSeries extends SeriesBase {
        private _finChartType;
        /**
         * Gets or sets the chart type for a specific series, overriding the chart type
         * set on the overall chart. Please note that ColumnVolume, EquiVolume,
         * CandleVolume and ArmsCandleVolume chart types are not supported and should be
         * set on the @see:FinancialChart.
         */
        chartType: RadarChartType;
        _getChartType(): chart.ChartType;
    }
}

declare module wijmo.chart.radar {
    /**
     * Represents an axis in the radar chart.
     */
    class FlexRadarAxis extends Axis {
        private _points;
        private _axisLabels;
        _height: number;
        private __actualMin;
        private __actualMax;
        _render(engine: IRenderEngine): void;
        _getHeight(engine: IRenderEngine, maxw: number): number;
        _getActualRange(): number;
        _updateActualLimits(dataType: DataType, dataMin: number, dataMax: number, labels?: string[], values?: number[]): void;
        _updateActualLimitsByChartType(labels: any, min: any, max: any): {
            min: any;
            max: any;
        };
        /**
         * Converts the specified value from data to pixel coordinates.
         *
         * @param val The data value to convert.
         * @param maxValue The max value of the data, it's optional.
         * @param minValue The min value of the data, it's optional.
         */
        convert(val: number, maxValue?: number, minValue?: number): number;
        _renderLineAndTitle(engine: any): void;
        _renderPolygon(engine: any, r: any, cls: any): void;
        _renderMinors(engine: IRenderEngine, ticks: number[], isVert: boolean, isNear: boolean): void;
        private _drawMinorTickLength(engine, tover, angle, pt);
        _renderLabelsAndTicks(engine: any, index: any, val: any, sval: any, labelAngle: any, tickMarks: any, showLabel: any, t1: any, t2: any): boolean;
        private _renderXGridLine(engine, chart, x, cls);
        private _renderXTick(engine, chart, x, cls, t1, t2);
        private _renderYGridLine(engine, chart, y, cls);
        private _getXLabelVAlign(angle);
        private _getXLabelAlign(angle);
        _createTimeLabels(start: number, len: number, vals: number[], lbls: string[]): void;
        _niceNumber(x: number, exp: number, round: boolean): number;
    }
}

declare module wijmo.chart.radar {
    /**
     * Line/scatter radar chart plotter.
     */
    class _RadarLinePlotter extends _LinePlotter {
        isArea: boolean;
        _getLabelPoint(series: any, dataPoint: _DataPoint): Point;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number): void;
    }
}

declare module wijmo.chart.radar {
    /**
     * Column(Rose) radar chart plotter.
     */
    class _RadarBarPlotter extends _BarPlotter {
        adjustLimits(dataInfo: _DataInfo, plotRect: Rect): Rect;
        _getLabelPoint(series: any, dataPoint: _DataPoint): Point;
        plotSeries(engine: IRenderEngine, ax: _IAxis, ay: _IAxis, series: _ISeries, palette: _IPalette, iser: number, nser: number): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Defines the @see:RadialGauge, @see:LinearGauge, and @see:BulletGraph
 * controls.
 *
 * Unlike many gauge controls, Wijmo gauges concentrate on the data being
 * displayed, with little extraneous color and markup elements. They were
 * designed to be easy to use and to read, especially on small-screen devices.
 *
 * Wijmo gauges are composed of @see:Range objects. Every Wijmo gauge has
 * at least two ranges: the "face" and the "pointer".
 *
 * <ul><li>
 * The "face" represents the gauge background. The "min" and "max"
 * properties of the face range correspond to the "min" and "max" properties
 * of the gauge control, and limit the values that the gauge can display.
 * </li><li>
 * The "pointer" is the range that indicates the gauge's current value. The
 * "max" property of the pointer range corresponds to the "value" property
 * of the gauge.
 * </li></ul>
 *
 * In addition to these two special ranges, gauges may have any number of
 * additional ranges added to their "ranges" collection. These additional
 * ranges can be used for two things:
 *
 * <ul><li>
 * By default, the extra ranges appear as part of the gauge background.
 * This way you can show 'zones' within the gauge, like 'good,' 'average,'
 * and 'bad' for example.
 * </li><li>
 * If you set the gauge's "showRanges" property to false, the additional
 * ranges are not shown. Instead, they are used to automatically set the
 * color of the "pointer" based on the current value.
 * </li></ul>
 */
declare module wijmo.gauge {
    /**
     * Specifies which values to display as text.
     */
    enum ShowText {
        /** Do not show any text in the gauge. */
        None = 0,
        /** Show the gauge's @see:Gauge.value as text. */
        Value = 1,
        /** Show the gauge's @see:Gauge.min and @see:Gauge.max values as text. */
        MinMax = 2,
        /** Show the gauge's @see:Gauge.value, @see:Gauge.min, and @see:Gauge.max as text. */
        All = 3,
    }
    /**
     * Base class for the Wijmo Gauge controls (abstract).
     */
    class Gauge extends Control {
        static _SVGNS: string;
        static _ctr: number;
        private _ranges;
        private _rngElements;
        private _format;
        private _getText;
        private _showRanges;
        private _stackRanges;
        private _shadow;
        private _animated;
        private _animInterval;
        private _readOnly;
        private _step;
        private _showText;
        private _showTicks;
        private _tickSpacing;
        private _thumbSize;
        private _filterID;
        private _rangesDirty;
        private _origin;
        private _dragging;
        protected _thickness: number;
        protected _initialized: boolean;
        protected _animColor: string;
        protected _face: Range;
        protected _pointer: Range;
        protected _dSvg: HTMLDivElement;
        protected _svg: SVGSVGElement;
        protected _gFace: SVGGElement;
        protected _gRanges: SVGGElement;
        protected _gPointer: SVGGElement;
        protected _gCover: SVGGElement;
        protected _pFace: SVGPathElement;
        protected _pPointer: SVGPathElement;
        protected _pTicks: SVGPathElement;
        protected _filter: SVGFilterElement;
        protected _cValue: SVGCircleElement;
        protected _tValue: SVGTextElement;
        protected _tMin: SVGTextElement;
        protected _tMax: SVGTextElement;
        /**
         * Gets or sets the template used to instantiate @see:Gauge controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:Gauge class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the value displayed on the gauge.
         */
        value: number;
        /**
         * Gets or sets the minimum value that can be displayed on the gauge.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        min: number;
        /**
         * Gets or sets the maximum value that can be displayed on the gauge.
         *
         * For details about using the @see:min and @see:max properties, please see the
         * <a href="static/minMax.html">Using the min and max properties</a> topic.
         */
        max: number;
        /**
         * Gets or sets the starting point used for painting the range.
         *
         * By default, this property is set to null, which causes the value range
         * to start at the gauge's minimum value, or zero if the minimum is less
         * than zero.
         */
        origin: number;
        /**
         * Gets or sets a value that indicates whether the user can edit the value
         * using the mouse and keyboard.
         *
         * The default value for this property is <b>true</b>.
         */
        isReadOnly: boolean;
        /**
         * Gets or sets the amount to add to or subtract from the @see:value property
         * when the user presses the arrow keys or moves the mouse wheel.
         */
        step: number;
        /**
         * Gets or sets the format string used to display gauge values as text.
         */
        format: string;
        /**
         * Gets or sets a callback that returns customized strings used to
         * display gauge values.
         *
         * Use this property if you want to customize the strings shown on
         * the gauge in cases where the @see:format property is not enough.
         *
         * If provided, the callback should be a function as that takes as
         * parameters the gauge, the part name, the value, and the formatted
         * value. The callback should return the string to be displayed on
         * the gauge.
         *
         * For example:
         *
         * <pre>// callback to convert values into strings
         * gauge.getText = function (gauge, part, value, text) {
         *   switch (part) {
         *     case 'value':
         *       if (value &lt;= 10) return 'Empty!';
         *       if (value &lt;= 25) return 'Low...';
         *       if (value &lt;= 95) return 'Good';
         *       return 'Full';
         *     case 'min':
         *       return 'EMPTY';
         *     case 'max':
         *       return 'FULL';
         *   }
         *   return text;
         * }</pre>
         */
        getText: Function;
        /**
         * Gets or sets the thickness of the gauge, on a scale between zero and one.
         *
         * Setting the thickness to one causes the gauge to fill as much of the
         * control area as possible. Smaller values create thinner gauges.
         */
        thickness: number;
        /**
         * Gets or sets the @see:Range used to represent the gauge's overall geometry
         * and appearance.
         */
        face: Range;
        /**
         * Gets or sets the @see:Range used to represent the gauge's current value.
         */
        pointer: Range;
        /**
         * Gets or sets the @see:ShowText values to display as text in the gauge.
         *
         * The default value for this property is <b>ShowText.All</b> for @see:RadialGauge
         * controls, and to <b>ShowText.None</b> for @see:LinearGauge controls.
         */
        showText: ShowText;
        /**
         * Gets or sets a property that determines whether the gauge should
         * display tickmarks at each @see:step value.
         *
         * The tickmarks can be formatted in CSS using the <b>wj-gauge</b> and
         * <b>wj-ticks</b> class names. For example:
         *
         * <pre>.wj-gauge .wj-ticks {
         *     stroke-width: 2px;
         *     stroke: white;
         * }</pre>
         *
         * The default value for this property is <b>false</b>.
         */
        showTicks: boolean;
        /**
         * Gets or sets the spacing between tickmarks.
         *
         * Set the @see:showTicks property to true if you want the
         * gauge to show tickmarks along its face. By default, the
         * interval between tickmarks is defined by the @see:step
         * property.
         *
         * Use the @see:tickSpacing property to override the default
         * and use a spacing that is different from the @see:step
         * value. Set the @see:tickSpacing property to null to revert
         * to the default behavior.
         */
        tickSpacing: number;
        /**
         * Gets or sets the size of the element that shows the gauge's current value,
         * in pixels.
         */
        thumbSize: number;
        /**
         * Gets or sets a value that indicates whether the gauge displays the ranges
         * contained in  the @see:ranges property.
         *
         * If this property is set to false, the ranges contained in the @see:ranges
         * property are not displayed in the gauge. Instead, they are used to
         * interpolate the color of the @see:pointer range while animating value changes.
         *
         * The default value for this property is <b>true</b>.
         */
        showRanges: boolean;
        /**
         * Gets or sets a value that determines whether the ranges contained in
         * the @see:ranges collection should be stacked within the gauge.
         *
         * By default, @see:stackRanges is set to false, and the ranges in the
         * @see:ranges collection are displayed with the same thickness as the
         * gauge's face.
         *
         * Setting @see:stackRanges to true causes the ranges to become narrower,
         * and to be displayed side-by-side.
         */
        stackRanges: boolean;
        /**
         * Gets or sets a value that indicates whether the gauge displays
         * a shadow effect.
         *
         * The default value for this property is <b>true</b>.
         */
        hasShadow: boolean;
        /**
         * Gets or sets a value that determines whether the @see:Gauge
         * should use animation to show value changes.
         *
         * The default value for this property is <b>true</b>.
         */
        isAnimated: boolean;
        /**
         * Gets the collection of ranges in this gauge.
         */
        readonly ranges: collections.ObservableArray;
        /**
         * Occurs when the value of the @see:value property changes.
         */
        readonly valueChanged: Event;
        /**
         * Raises the @see:valueChanged event.
         */
        onValueChanged(e?: EventArgs): void;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Indicates whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        /**
         * Gets a number that corresponds to the value of the gauge at a given point.
         *
         * For example:
         *
         * <pre>
         * // hit test a point when the user clicks on the gauge
         * gauge.hostElement.addEventListener('click', function (e) {
         *   var ht = gauge.hitTest(e.pageX, e.pageY);
         *   if (ht != null) {
         *     console.log('you clicked the gauge at value ' + ht.toString());
         *   }
         * });
         * </pre>
         *
         * @param pt The point to investigate, in window coordinates, or a MouseEvent object,
         * or the x coordinate of the point.
         * @param y The Y coordinate of the point (if the first parameter is a number).
         * @return Value of the gauge at the point, or null if the point is not on the gauge's face.
         */
        hitTest(pt: any, y?: number): number;
        static _getBBox(e: any): any;
        protected _getFilterUrl(): string;
        protected _getRangeElement(rng: Range): SVGPathElement;
        protected _rangeChanged(rng: Range, e: PropertyChangedEventArgs): void;
        protected _createElement(tag: string, parent: SVGElement, cls?: string): Element;
        protected _centerText(e: SVGTextElement, value: number, center: Point): void;
        protected _copy(key: string, value: any): boolean;
        protected _getPercent: (value: any) => number;
        protected _showElement(e: SVGElement, show: boolean): void;
        protected _setAttribute(e: SVGElement, att: string, value: string): void;
        protected _updateRange(rng: Range, value?: number): void;
        protected _getPointerColor(value: number): string;
        protected _keydown(e: KeyboardEvent): void;
        protected _getKey(key: number): number;
        protected _applyMouseValue(e: any, instant?: boolean): boolean;
        protected _updateRangeElement(e: SVGPathElement, rng: Range, value: number): void;
        protected _updateText(): void;
        protected _updateTicks(): void;
        protected _getValueFromPoint(pt: Point): any;
        protected _fix(n: any): string;
        protected _updateAria(): void;
    }
}

declare module wijmo.gauge {
    /**
     * Represents the direction in which the pointer of a @see:LinearGauge
     * increases.
     */
    enum GaugeDirection {
        /** Gauge value increases from left to right. */
        Right = 0,
        /** Gauge value increases from right to left. */
        Left = 1,
        /** Gauge value increases from bottom to top. */
        Up = 2,
        /** Gauge value increases from top to bottom. */
        Down = 3,
    }
    /**
     * The @see:LinearGauge displays a linear scale with an indicator
     * that represents a single value and optional ranges to represent
     * reference values.
     *
     * If you set the gauge's @see:LinearGauge.isReadOnly property to
     * false, then users will be able to edit the value by clicking on
     * the gauge.
     *
     * @fiddle:wkcehhvu
     */
    class LinearGauge extends Gauge {
        private _direction;
        /**
         * Initializes a new instance of the @see:LinearGauge class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the direction in which the gauge is filled.
         *
         * The default value for this property is <b>GaugeDirection.Right</b>.
         */
        direction: GaugeDirection;
        _updateRangeElement(e: SVGPathElement, rng: Range, value: number): void;
        _updateText(): void;
        _updateTicks(): void;
        _updateSegment(path: SVGPathElement, rc: Rect): void;
        _setText(e: SVGTextElement, value: number, rc: Rect, pos: string): void;
        _getRangeRect(rng: Range, value?: number): Rect;
        _getValueFromPoint(pt: Point): number;
        _getDirection(): GaugeDirection;
        _getKey(key: number): number;
    }
}

declare module wijmo.gauge {
    /**
     * The @see:RadialGauge displays a circular scale with an indicator
     * that represents a single value and optional ranges to represent
     * reference values.
     *
     * If you set the gauge's @see:RadialGauge.isReadOnly property to
     * false, then users will be able to edit the value by clicking on
     * the gauge.
     *
     * @fiddle:kqkm8zt0
     */
    class RadialGauge extends Gauge {
        private _startAngle;
        private _sweepAngle;
        private _autoScale;
        private _rcSvg;
        private _ctmInv;
        private _ptSvg;
        /**
         * Initializes a new instance of the @see:RadialGauge class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the starting angle for the gauge.
         *
         * Angles are measured in degrees, clockwise, starting from the
         * 9 o'clock position.
         *
         * The default value for this property is <b>0</b>.
         */
        startAngle: number;
        /**
         * Gets or sets the sweep angle for the gauge.
         *
         * Angles are measured in degrees, clockwise,
         * starting from the 9 o'clock position.
         *
         * The default value for this property is <b>180</b>.
         */
        sweepAngle: number;
        /**
         * Gets or sets a value that indicates whether the gauge automatically
         * scales to fill the host element.
         *
         * The default value for this property is <b>true</b>.
         */
        autoScale: boolean;
        /**
         * Gets the size of the gauge's client area, taking into account the
         * @see:autoScale, padding, borders, and margins.
         */
        readonly clientSize: Size;
        /**
         * Refreshes the control.
         *
         * @param fullUpdate Indicates whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        _updateRangeElement(e: SVGPathElement, rng: Range, value: number): void;
        _updateText(): void;
        _updateTicks(): void;
        _updateSegment(path: SVGPathElement, ctr: Point, rOut: number, rIn: number, start: number, sweep: number): void;
        _getPoint(ctr: Point, angle: number, radius: number): Point;
        _getValueFromPoint(pt: Point): number;
    }
}

declare module wijmo.gauge {
    /**
     * The @see:BulletGraph is a type of linear gauge designed specifically for use
     * in dashboards. It displays a single key measure along with a comparative
     * measure and qualitative ranges to instantly signal whether the measure is
     * good, bad, or in some other state.
     *
     * Bullet Graphs were created and popularized by dashboard design expert
     * Stephen Few. You can find more details and examples on
     * <a href="http://en.wikipedia.org/wiki/Bullet_graph">Wikipedia</a>.
     *
     * @fiddle:vqrwdvgq
     */
    class BulletGraph extends LinearGauge {
        _rngTarget: Range;
        _rngGood: Range;
        _rngBad: Range;
        /**
         * Initializes a new instance of the @see:BulletGraph class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the target value for the measure.
         */
        target: number;
        /**
         * Gets or sets a reference value considered good for the measure.
         */
        good: number;
        /**
         * Gets or sets a reference value considered bad for the measure.
         */
        bad: number;
        _getRangeRect(rng: Range, value?: number): Rect;
    }
}

declare module wijmo.gauge {
    /**
     * Defines ranges to be used with @see:Gauge controls.
     *
     * @see:Range objects have @see:min and @see:max properties that
     * define the range's domain, as well as @see:color and @see:thickness
     * properties that define the range's appearance.
     *
     * Every @see:Gauge control has at least two ranges:
     * the 'face' defines the minimum and maximum values for the gauge, and
     * the 'pointer' displays the gauge's current value.
     *
     * In addition to the built-in ranges, gauges may have additional
     * ranges used to display regions of significance (for example,
     * low, medium, and high values).
     */
    class Range {
        static _ctr: number;
        private _min;
        private _max;
        private _thickness;
        private _color;
        private _name;
        /**
         * Initializes a new instance of the @see:Range class.
         *
         * @param options Initialization options for the @see:Range or a string
         * containing the @see:Range name.
         */
        constructor(options?: string);
        /**
         * Gets or sets the minimum value for this range.
         */
        min: number;
        /**
         * Gets or sets the maximum value for this range.
         */
        max: number;
        /**
         * Gets or sets the color used to display this range.
         */
        color: string;
        /**
         * Gets or sets the thickness of this range as a percentage of
         * the parent gauge's thickness.
         */
        thickness: number;
        /**
         * Gets or sets the name of this @see:Range.
         */
        name: string;
        /**
         * Occurs when the value of a property in this @see:Range changes.
         */
        readonly propertyChanged: Event;
        /**
         * Raises the @see:propertyChanged event.
         *
         * @param e @see:PropertyChangedEventArgs that contains the property
         * name, old, and new values.
         */
        onPropertyChanged(e: PropertyChangedEventArgs): void;
        _setProp(name: string, value: any): void;
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
declare var JSZip: any;
declare module wijmo.xlsx {
    /**
     * Defines a reference to JSZip module that will be used by the Wijmo xlsx export modules.
     *
     * This method should be used in npm modules based applications to provide wijmo.xlsx module
     * with a reference to the JSZip module retrieved using the ES6 import statement. For example:
     * <pre>import * as JSZip from 'jszip';
     * import * as wjcXlsx from 'wijmo/wijmo.xlsx';
     * wjcXlsx.useJSZip(JSZip);
     * </pre>
     *
     * @param jszip Reference to the JSZip constructor function.
     */
    function useJSZip(jszip: any): void;
    class _xlsx {
        private static _alphabet;
        private static _indexedColors;
        private static _numFmts;
        private static _tableColumnFunctions;
        private static _xmlDescription;
        private static _workbookNS;
        private static _relationshipsNS;
        private static _defaultFontName;
        private static _defaultFontSize;
        private static _macroEnabled;
        private static _sharedStrings;
        static readonly _defaultColorThemes: string[];
        private static _colorThemes;
        private static _styles;
        private static _sharedFormulas;
        private static _borders;
        private static _fonts;
        private static _fills;
        private static _contentTypes;
        private static _props;
        private static _xlRels;
        private static _worksheets;
        private static _tableStyles;
        private static _dxfs;
        private static _tables;
        static load(base64: string): any;
        static loadAsync(base64: string): any;
        static save(workbook: any): any;
        static saveAsync(workbook: any, onError?: (reason?: any) => any): any;
        private static _loadImpl(zipImpl, base64);
        private static _getZipStyle(zip, retChain, result);
        private static _getZipSharedString(zip, retChain, result);
        private static _saveWorkbookToZip(workbook, isAsync?);
        private static _getSharedString(sharedString);
        private static _getInlineString(cell);
        private static _getCoreSetting(coreSetting, result);
        private static _getWorkbook(workbook, result);
        private static _getTheme(theme);
        private static _getStyle(styleSheet);
        private static _getEdgeBorder(strBorder, edge);
        private static _getSheet(sheet, index, result);
        private static _getTable(table);
        private static _getTableColumn(column);
        private static _getSheetRelatedTable(rel);
        private static _getSheetRelatedHyperlink(rel, id, sheet);
        private static _getTableStyles(styleDefs, dxfs);
        private static _getTableStyleElement(dxf);
        private static _getTableStyleByName(styleName);
        private static _getHyperlink(sheet, hyperlinkPart);
        private static _getTextRunFont(item);
        private static _getTextOfTextRuns(textRuns);
        private static _isBuiltInStyleName(styleName);
        private static _generateRelsDoc();
        private static _generateThemeDoc();
        private static _generateClrScheme();
        private static _generateFontScheme();
        private static _generateFmtScheme();
        private static _generateFillScheme();
        private static _generateLineStyles();
        private static _generateEffectScheme();
        private static _generateBgFillScheme();
        private static _generateCoreDoc(file);
        private static _generateSheetGlobalSetting(index, worksheet, file);
        private static _generateCell(rowIndex, colIndex, styleIndex, type, val, formula);
        private static _generateMergeSetting(merges);
        private static _generateStyleDoc();
        private static _generateBorderStyle(borders, isTable?);
        private static _generateFontStyle(fontStyle, needScheme?);
        private static _generateFillStyle(patternType, fillColor, isTableStyle?);
        private static _generateCellXfs(numFmtId, borderId, fontId, fillId, style);
        private static _generateContentTypesDoc();
        private static _generateAppDoc(file);
        private static _generateWorkbookRels();
        private static _generateWorkbook(file);
        private static _generateWorkSheet(sheetIndex, file, xlWorksheets);
        private static _generateSharedStringsDoc();
        private static _generatePlainText(val);
        private static _generateTable(table, xlTables);
        private static _generateTableFilterSetting(ref, showTotalRow, columns);
        private static _generateHyperlinkRel(externalLinks);
        private static _getDxfs();
        private static _generateDxfs();
        private static _generateTableStyles();
        private static _isEmptyStyleEle(styleEle);
        private static _getTableFileName(tables, tableName);
        private static _getColor(s, isFillColor);
        private static _getThemeColor(theme, tint);
        private static _parseColor(color);
        private static _getsBaseSharedFormulas(sheet);
        private static _parseSharedFormulaInfo(cellRef, formula);
        private static _getSharedFormula(si, cellRef);
        private static _convertDate(input);
        private static _parseBorder(border, needDefaultBorder);
        private static _applyDefaultBorder(style);
        private static _resolveStyleInheritance(style);
        private static _parsePixelToCharWidth(pixels);
        private static _parseCharWidthToPixel(charWidth);
        private static _parseCharCountToCharWidth(charCnt);
        private static _numAlpha(i);
        private static _alphaNum(s);
        private static _typeOf(obj);
        private static _extend(dst, src);
        private static _isEmpty(obj);
        private static _cloneStyle(src);
        private static _cloneColumnsStyle(columns);
        private static _getSheetIndex(fileName);
        private static _checkValidMergeCell(merges, startRow, rowSpan, startCol, colSpan);
        private static _getAttr(s, attr);
        private static _getChildNodeValue(s, child);
        private static _getSheetIndexBySheetName(file, sheetName);
    }
}

/**
 * The module has a dependency on the <a href="https://stuk.github.io/jszip" target="_blank">JSZip</a>
 * library which can be referenced as follows:
 * <ul>
 * <li>In order to invoke the synchronous save and load methods, JSZip2 library should be
 * referenced in html page with the markup like this:
 * <pre>&lt;script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"&gt;&lt;/script&gt;</pre></li>
 * <li>In order to invoke the asynchronous save and load methods, JSZip3 library should be
 * referenced in html page with the markup like this:
 * <pre>&lt;script src="http://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"&gt;&lt;/script&gt;</pre></li>
 * <li>If application is constructed based on npm modules then you may prefer to load JSZip module by means of the ES6
 * <b>import</b> statement, instead of a script tag. In this case you should additionally provide wijmo.xlsx module
 * with a reference to the JSZip module using the @see:useJSZip function, with a code like shown below:
 * <pre>import * as JSZip from 'jszip';
 * import * as wjcXlsx from 'wijmo/wijmo.xlsx';
 * wjcXlsx.useJSZip(JSZip);
 * </pre>
 *
 * It's enough to call the @see:useJSZip function only once per application page, and the best place to do it
 * could be a some root module of the application.</li></ul>
*/
declare module wijmo.xlsx {
    /**
     * Represents an Excel workbook.
     */
    class Workbook implements IWorkbook {
        /**
         * Gets or sets the name of application that generated the file that appears in the file properties.
         */
        application: string;
        /**
         * Gets or sets the name of company that generated the file that appears in the file properties.
         */
        company: string;
        /**
         * Gets or sets the creator of the xlsx file.
         */
        creator: string;
        /**
         * Gets or sets the creation time of the xlsx file.
         */
        created: Date;
        /**
         * Gets or sets the last modifier of the xlsx file.
         */
        lastModifiedBy: string;
        /**
         * Gets or sets the last modified time of the xlsx file.
         */
        modified: Date;
        /**
         * Gets or sets the index of the active sheet in the xlsx file.
         */
        activeWorksheet: number;
        private _reservedContent;
        private _sheets;
        private _styles;
        private _definedNames;
        private _tableStyles;
        private _colorThemes;
        private static _alphabet;
        private static _formatMap;
        /**
         * Initializes a new instance of the @see:Workbook class.
         */
        constructor();
        /**
         * Gets the WorkSheet array of the workbook.
         */
        readonly sheets: WorkSheet[];
        /**
         * Gets the styles table of the workbook.
         */
        readonly styles: WorkbookStyle[];
        /**
         * Gets the defined name items of the workbook.
         */
        readonly definedNames: DefinedName[];
        /**
         * Gets the color of the workbook themes.
         */
        readonly colorThemes: string[];
        /**
         * Gets or sets the reserved content from xlsx file that flexgrid or flexsheet doesn't support yet.
         */
        reservedContent: any;
        /**
         * Saves the book to a file and returns a base-64 string representation of
         * the book.
         * This method works with JSZip 2.5.
         *
         * For example, this sample creates an xlsx file with a single cell:
         *
         * <pre>function exportXlsx(fileName) {
         *     var book = new wijmo.xlsx.Workbook(),
         *         sheet = new wijmo.xlsx.WorkSheet(),
         *         bookRow = new wijmo.xlsx.WorkbookRow(),
         *         bookCell = new wijmo.xlsx.WorkbookCell();
         *     bookCell.value = 'Hello, Excel!';
         *     bookRow.cells.push(bookCell);
         *     sheet.rows.push(bookRow);
         *     book.sheets.push(sheet);
         *     book.save(fileName);
         * }</pre>
         *
         * The file name is optional. If not provided, the method still returns
         * a base-64 string representing the book. This string can be used for
         * further processing on the client or on the server.
         *
         * @param fileName Name of the xlsx file to save.
         * @return A base-64 string that represents the content of the file.
         */
        save(fileName?: string): string;
        /**
         * Saves the book to a file asynchronously.
         * This method works with JSZip 3.0.
         *
         * @param fileName Name of the xlsx file to save.
         * @param onSaved This callback provides an approach to get the base-64 string
         * that represents the content of the saved workbook. Since this method is an
         * asynchronous method, user does not get the base-64 string immediately.
         * User has to get the base-64 string via this callback.
         * This has a single parameter, the base-64 string of the saved workbook.
         * It will be passed to user.
         * @param onError This callback catches error information when saving.
         * This has a single parameter, the failure reason.
         * Return value will be passed to user, if he wants to catch the save failure reason.
         *
         * For example:
         * <pre>
         * workbook.saveAsync('', function (base64){
         *      // User can access the base64 string in this callback.
         *      document.getElementByID('export').href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' + 'base64,' + base64;
         * }, function (reason){
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of save failure is ' + reason);
         * });
         * </pre>
         */
        saveAsync(fileName?: string, onSaved?: (base64?: string) => any, onError?: (reason?: any) => any): void;
        /**
         * Loads from base-64 string or data url.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen from Open File
         * // dialog and creates a workbook instance to load the file.
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &nbsp;
         * // JavaScript
         * var workbook, // receives imported IWorkbook
         *     importFile = document.getElementById('importFile');
         * &nbsp;
         * importFile.addEventListener('change', function () {
         *     loadWorkbook();
         * });
         * &nbsp;
         * function loadWorkbook() {
         *     var reader,
         *         workbook,
         *         file = importFile.files[0];
         *     if (file) {
         *         reader = new FileReader();
         *         reader.onload = function (e) {
         *            workbook = new wijmo.xlsx.Workbook(),
         *            workbook.load(reader.result);
         *         };
         *         reader.readAsDataURL(file);
         *     }
         * }</pre>
         *
         * @param base64 The base-64 string that contains the xlsx file content.
         */
        load(base64: string): void;
        /**
         * Loads from base-64 string or data url asynchronously.
         * This method works with JSZip 3.0.
         *
         * @param base64 base64 string that contains the xlsx file content.
         * @param onLoaded This callback provides an approach to get an instance of the loaded workbook.
         * Since this method is an asynchronous method, user is not able to get instance of
         * the loaded workbook immediately. User has to get the instance through this callback.
         * This has a single parameter, instance of the loaded workbook. It will be passed to user.
         * @param onError This callback catches error information when loading.
         * This has a single parameter, the failure reason. Return value is
         * be passed to user, if he wants to catch the load failure reason.
         *
         * For example:
         * <pre>
         * workbook.loadAsync(base64, function (workbook) {
         *      // User can access the loaded workbook instance in this callback.
         *      var app = worksheet.application ;
         *      ...
         * }, function (reason) {
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of load failure is ' + reason);
         * });
         * </pre>
         */
        loadAsync(base64: string, onLoaded: (workbook: Workbook) => void, onError?: (reason?: any) => any): void;
        _serialize(): IWorkbook;
        _deserialize(workbookOM: IWorkbook): void;
        _addWorkSheet(workSheet: WorkSheet, sheetIndex?: number): void;
        static _saveToFile(base64: string, fileName: string, containMarcos: boolean): void;
        private _getBase64String(base64);
        /**
         * Converts the wijmo date format to Excel format.
         *
         * @param format The wijmo date format.
         * @return Excel format representation.
         */
        static toXlsxDateFormat(format: string): string;
        /**
         * Converts the wijmo number format to xlsx format.
         *
         * @param format The wijmo number format.
         * @return Excel format representation.
         */
        static toXlsxNumberFormat(format: string): string;
        /**
         * Converts the xlsx multi-section format string to an array of corresponding wijmo formats.
         *
         * @param xlsxFormat The Excel format string, that may contain multiple format sections
         * separated by a semicolon.
         * @return An array of .Net format strings where each element corresponds to a separate
         * Excel format section.
         * The returning array always contains at least one element. It can be an empty string
         * in case the passed Excel format is empty.
         */
        static fromXlsxFormat(xlsxFormat: string): string[];
        static _parseCellFormat(format: string, isDate: boolean): string;
        static _parseExcelFormat(item: any): string;
        /**
         * Converts zero-based cell, row or column index to Excel alphanumeric representation.
         *
         * @param row The zero-based row index or a null value if only column index
         * is to be converted.
         * @param col The zero-based column index or a null value if only row index
         * is to be converted.
         * @param absolute True value indicates that absolute indices is to be returned
         * for both, row and column (like $D$7). The <b>absoluteCol</b> parameter allows
         * to redefine this value for the column index.
         * @param absoluteCol True value indicates that column index is absolute.
         * @param isWholeRow Indicates whether the Cell reference is whole row, whole column or specific cell range.
         * If isWholeRow is true means the cell reference is whole row.
         * If isWholeRow is false means the cell reference is whole column.
         * If isWholeRow is null means the cell reference is specific cell range.
         * @return The alphanumeric Excel index representation.
        */
        static xlsxAddress(row: number, col: number, absolute?: boolean, absoluteCol?: boolean, isWholeRow?: boolean): string;
        /**
         * Convert Excel's alphanumeric cell, row or column index to the zero-based
         * row/column indices pair.
         *
         * @param xlsxIndex The alphanumeric Excel index that may include alphabetic A-based
         * column index and/or numeric 1-based row index, like "D15", "D" or "15". The
         * alphabetic column index can be in lower or upper case.
         * @return The object with <b>row</b> and <b>col</b> properties containing zero-based
         * row and/or column indices.
         * If row or column component is not specified in the alphanumeric index, then
         * corresponding returning property is undefined.
         */
        static tableAddress(xlsxIndex: string): ITableAddress;
        static _parseHAlignToString(hAlign: HAlign): string;
        static _parseStringToHAlign(hAlign: string): HAlign;
        static _parseVAlignToString(vAlign: VAlign): string;
        static _parseStringToVAlign(vAlign: string): VAlign;
        static _parseBorderTypeToString(type: BorderStyle): string;
        static _parseStringToBorderType(type: string): BorderStyle;
        static _escapeXML(s: any): string;
        static _unescapeXML(val: any): string;
        private static _numAlpha(i);
        private static _alphaNum(s);
        private static _b64ToUint6(nChr);
        static _base64DecToArr(sBase64: string, nBlocksSize?: number): Uint8Array;
        private static _uint6ToB64(nUint6);
        static _base64EncArr(aBytes: Uint8Array): string;
        private _serializeWorkSheets();
        private _serializeWorkbookStyles();
        private _serializeDefinedNames();
        private _serializeTableStyles();
        private _deserializeWorkSheets(workSheets);
        private _deserializeWorkbookStyles(workbookStyles);
        private _deserializeDefinedNames(definedNames);
        private _deserializeTableStyles(tableStyles);
    }
    /**
     * Represents the Workbook Object Model sheet definition that includes sheet
     * properties and data.
     *
     * The sheet cells are stored in row objects and are accessible using JavaScript
     * expressions like <b>sheet.rows[i].cells[j]</b>.
     */
    class WorkSheet implements IWorkSheet {
        /**
         * Gets or sets the sheet name.
         */
        name: string;
        /**
         *  Gets or sets the @see:WorkbookFrozenPane settings.
         */
        frozenPane: WorkbookFrozenPane;
        /**
         * Gets or sets a value indicating whether summary rows appear below or
         * above detail rows.
         */
        summaryBelow: boolean;
        /**
         * Gets or sets the worksheet visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the worksheet, and
         * can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        private _columns;
        private _rows;
        private _tables;
        /**
         * Initializes a new instance of the @see:WorkSheet class.
         */
        constructor();
        /**
         * Gets or sets an array of sheet columns definitions.
         *
         * Each @see:WorkbookColumn object in the array describes a column
         * at the corresponding position in xlsx sheet, i.e. the column with index 0
         * corresponds to xlsx sheet column with index A, object with
         * index 1 defines sheet column with index B, and so on. If certain column
         * has no description in xlsx file, then corresponding array element
         * is undefined for both export and import operations.
         *
         * If @see:WorkbookColumn object in the array doesn't specify the
         * <b>width</b> property value, then the default column width is applied.
         */
        readonly columns: WorkbookColumn[];
        /**
         * Gets an array of sheet rows definition.
         *
         * Each @see:WorkbookRow object in the array describes a row at the corresponding
         * position in xlsx sheet, i.e. the row with index 0 corresponds to excel sheet
         * row with index 1, object with index 1 defines sheet row with index 2, and so on.
         * If certain row has no properties and data in xlsx file, then corresponding array
         * element is undefined for both export and import operations.
         *
         * If @see:WorkbookRow object in the array doesn't specify the <b>height</b> property
         * value, then the default row height is applied.
         */
        readonly rows: WorkbookRow[];
        /**
         * Gets the name of tables refered in this worksheet.
         */
        readonly tables: WorkbookTable[];
        _serialize(): IWorkSheet;
        _deserialize(workSheetOM: IWorkSheet): void;
        _addWorkbookColumn(column: WorkbookColumn, columnIndex?: number): void;
        _addWorkbookRow(row: WorkbookRow, rowIndex?: number): void;
        private _serializeWorkbookColumns();
        private _serializeWorkbookRows();
        private _serializeTables();
        private _deserializeWorkbookColumns(workbookColumns);
        private _deserializeWorkbookRows(workbookRows);
        private _deserializeTables(tables);
        private _checkEmptyWorkSheet();
    }
    /**
     * Represents the Workbook Object Model column definition.
     */
    class WorkbookColumn implements IWorkbookColumn {
        /**
         * Gets or sets the width of the column in device-independent
         * (1/96th inch) pixels or characters.
         *
         * The numeric value defines the width in pixels. On import,
         * the widths are always expressed in pixels.
         *
         * The string value which is a number with the 'ch' suffix,
         * for example '10ch', defines the width in characters.
         * It has the same meaning as the column width defined through
         * Excel UI. The width can be specified in characters
         * for the export operations only.
         *
         * If width is not specified, then the default width is applied.
         */
        width: any;
        /**
         * Gets or sets the column visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the column style.
         *
         * The property defines the style for all cells in the column,
         * and can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        /**
         * Gets or sets a value indicating whether the column width is
         * automatically adjusted to fit the content of its cells.
         */
        autoWidth: boolean;
        /**
         * Initializes a new instance of the @see:WorkbookColumn class.
         */
        constructor();
        _serialize(): IWorkbookColumn;
        _deserialize(workbookColumnOM: IWorkbookColumn): void;
        private _checkEmptyWorkbookColumn();
    }
    /**
     * Represents the Workbook Object Model row definition.
     */
    class WorkbookRow implements IWorkbookRow {
        /**
         * Gets or sets the row height in device-independent (1/96th inch) pixels.
         *
         * If height is not specified, then the default height is applied.
         */
        height: number;
        /**
         * Gets or sets the row visibility.
         */
        visible: boolean;
        /**
         * Gets or sets the group level of the row.
         */
        groupLevel: number;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the row,
         * and can be overridden by the specific cell styles.
         */
        style: WorkbookStyle;
        /**
         * Indicating if the row is in the collapsed outline state.
         */
        collapsed: boolean;
        private _cells;
        /**
         * Initializes a new instance of the @see:WorkbookRow class.
         */
        constructor();
        /**
         * Gets or sets an array of cells in the row.
         *
         * Each @see:WorkbookCell object in the array describes a cell
         * at the corresponding position in the row, i.e. a cell with
         * index 0 pertains to column with index A, a cell with index 1
         * defines cell pertaining to column with index B, and so on.
         * If a certain cell has no definition (empty) in xlsx file,
         * then corresponding array element is undefined for both export
         * and import operations.
         */
        readonly cells: WorkbookCell[];
        _serialize(): IWorkbookRow;
        _deserialize(workbookRowOM: IWorkbookRow): void;
        _addWorkbookCell(cell: WorkbookCell, cellIndex?: number): void;
        private _serializeWorkbookCells();
        private _deserializeWorkbookCells(workbookCells);
        private _checkEmptyWorkbookRow();
    }
    /**
     * Represents the Workbook Object Model cell definition.
     */
    class WorkbookCell implements IWorkbookCell {
        /**
         * Gets or sets the cell value.
         *
         * The type of the value can be String, Number, Boolean or Date.
         */
        value: any;
        /**
         * Indicates whether the cell value is date or not.
         */
        isDate: boolean;
        /**
         * Gets or sets the formula of cell.
         */
        formula: string;
        /**
         * Gets or sets the style of cell.
         */
        style: WorkbookStyle;
        /**
         * Gets or sets the colSpan setting of cell.
         */
        colSpan: number;
        /**
         * Gets or sets the rowSpan setting of cell.
         */
        rowSpan: number;
        /**
         * Gets or sets the hyperlink of cell.
         */
        link: string;
        /**
         * Gets or sets the text runs represent the rich text of cell.
         */
        textRuns: WorkbookTextRun[];
        /**
         * Initializes a new instance of the @see:WorkbookCell class.
         */
        constructor();
        _serialize(): IWorkbookCell;
        _deserialize(workbookCellOM: IWorkbookCell): void;
        private _serializeTextRuns();
        private _deserializeTextRuns(textRunOMs);
        private _checkEmptyWorkbookCell();
    }
    /**
     * Workbook frozen pane definition
     */
    class WorkbookFrozenPane implements IWorkbookFrozenPane {
        /**
         * Gets or sets the number of frozen rows.
         */
        rows: number;
        /**
         * Gets or sets the number of frozen columns.
         */
        columns: number;
        /**
         * Initializes a new instance of the @see:WorkbookFrozenPane class.
         */
        constructor();
        _serialize(): IWorkbookFrozenPane;
        _deserialize(workbookFrozenPaneOM: IWorkbookFrozenPane): void;
    }
    /**
     * Represents the Workbook Object Model style definition used
     * to style Excel cells, columns and rows.
     */
    class WorkbookStyle implements IWorkbookStyle {
        /**
         * Cell value format, defined using Excel format syntax.
         *
         * The description of Excel format syntax can be found
         * <a href="https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4" target="_blank">here</a>.
         *
         * You may use the <b>toXlsxNumberFormat</b> and <b>toXlsxDateFormat</b> static
         * functions of the @see:Workbook class to convert from .Net (@see:Globalize)
         * format to Excel format.
         */
        format: string;
        /**
         * Defines the base style that this style inherits.
         *
         * This property is applicable for the export operations only.
         * The style gets all the properties defined in the base style,
         * and can override or augment them by setting its own properties.
         */
        basedOn: WorkbookStyle;
        /**
         * Gets or sets the font of style.
         */
        font: WorkbookFont;
        /**
         * Gets or sets the horizontal alignment of text.
         */
        hAlign: HAlign;
        /**
         *  Gets or sets the vertical alignment of text.
         */
        vAlign: VAlign;
        /**
         * Gets or sets the indent setting of style.
         */
        indent: number;
        /**
         * Gets or sets the background setting.
         */
        fill: WorkbookFill;
        /**
         * Gets or sets the border setting.
         */
        borders: WorkbookBorder;
        /**
         * Gets or sets the word wrap setting of row.
         */
        wordWrap: boolean;
        /**
         * Initializes a new instance of the @see:WorkbookStyle class.
         */
        constructor();
        _serialize(): IWorkbookStyle;
        _deserialize(workbookStyleOM: IWorkbookStyle): void;
        private _checkEmptyWorkbookStyle();
    }
    /**
     * Represents the Workbook Object Model font definition.
     */
    class WorkbookFont implements IWorkbookFont {
        /**
         * Gets or sets the font family name.
         */
        family: string;
        /**
         * Gets or sets the font size in device-independent (1/96th inch) pixels.
         */
        size: number;
        /**
         * Indicates whether the current font is bold.
         */
        bold: boolean;
        /**
         * Indicates whether the current font has the italic style applied.
         */
        italic: boolean;
        /**
         * Indicates whether the current font is underlined.
         */
        underline: boolean;
        /**
         * Gets or sets the font color.
         *
         * For export, the color can be specified in any valid HTML format
         * like 6-character dash notation or rgb/rgba/hsl/hsla functional form.
         * In case of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character dash
         * notation, for example, "#afbfcf".
         */
        color: string;
        /**
         * Initializes a new instance of the @see:WorkbookFont class.
         */
        constructor();
        _serialize(): IWorkbookFont;
        _deserialize(workbookFontOM: IWorkbookFont): void;
        private _checkEmptyWorkbookFont();
    }
    /**
     * Represents the Workbook Object Model background fill definition.
     */
    class WorkbookFill implements IWorkbookFill {
        /**
         * Gets or sets the fill color.
         *
         * For export, the color can be specified in any valid HTML format
         * like 6-character dash notation or rgb/rgba/hsl/hsla functional form.
         * In case of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character dash
         * notation, for example, "#afbfcf".
         */
        color: string;
        /**
         * Initializes a new instance of the @see:WorkbookFill class.
         */
        constructor();
        _serialize(): IWorkbookFill;
        _deserialize(workbookFillOM: IWorkbookFill): void;
    }
    /**
     * Represents the Workbook Object Model border definition.
     */
    class WorkbookBorder implements IWorkbookBorder {
        /**
         * Gets or sets the top border setting.
         */
        top: WorkbookBorderSetting;
        /**
         * Gets or sets the bottom border setting.
         */
        bottom: WorkbookBorderSetting;
        /**
         * Gets or sets the left border setting.
         */
        left: WorkbookBorderSetting;
        /**
         * Gets or sets the right border setting.
         */
        right: WorkbookBorderSetting;
        /**
         * Gets or sets the diagonal border setting.
         */
        diagonal: WorkbookBorderSetting;
        /**
         * Initializes a new instance of the @see:WorkbookBorder class.
         */
        constructor();
        _serialize(): IWorkbookBorder;
        _deserialize(workbookBorderOM: IWorkbookBorder): void;
        private _checkEmptyWorkbookBorder();
    }
    /**
     * Represents the Workbook Object Model background setting definition.
     */
    class WorkbookBorderSetting implements IWorkbookBorderSetting {
        /**
         * Gets or sets the border color.
         *
         * For export, the color can be specified in any valid HTML format
         * like 6-character dash notation or rgb/rgba/hsl/hsla functional form.
         * In case of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character dash
         * notation, for example, "#afbfcf".
         */
        color: string;
        /**
         * Gets or sets the border type.
         */
        style: BorderStyle;
        /**
         * Initializes a new instance of the @see:WorkbookBorderSetting class.
         */
        constructor();
        _serialize(): IWorkbookBorderSetting;
        _deserialize(workbookBorderSettingOM: IWorkbookBorderSetting): void;
    }
    /**
     * Represents the Workbook Object Model Defined Name item definition.
     */
    class DefinedName implements IDefinedName {
        /**
         * The name of the defined name item.
         */
        name: string;
        /**
         * The value of the defined name item.
         * The value could be a formula, a string constant or a cell range.
         * For e.g. "Sum(1, 2, 3)", "test" or "sheet1!A1:B2"
         */
        value: any;
        /**
         * Indicates the defined name item works in which sheet.
         * If omitted, the defined name item works in workbook
         */
        sheetName: string;
        /**
         * Initializes a new instance of the @see:DefinedName class.
         */
        constructor();
        _serialize(): IDefinedName;
        _deserialize(definedNameOM: IDefinedName): void;
    }
    /**
     * Represents the WorkbookTable Object Model background setting definition.
     */
    class WorkbookTable implements IWorkbookTable {
        /**
         * The name of the table.  It is used to reference the table programmatically.
         */
        name: string;
        /**
         * The range on the relevant sheet that the table occupies expressed using A1 style referencing. i.e. "A1:D4".
         * The reference shall include the totals row if it is shown.
         */
        range: string;
        /**
         * Indicates whether show the header row for the table.
         */
        showHeaderRow: boolean;
        /**
         * Indicates whether show the total row for the table.
         */
        showTotalRow: boolean;
        /**
         * Indicating whether banded column formatting is applied.
         */
        showBandedColumns: boolean;
        /**
         * The table style to use with the table.
         */
        style: WorkbookTableStyle;
        /**
         * Indicating whether banded row formatting is applied.
         */
        showBandedRows: boolean;
        /**
         * Indicating whether the first column in the table should have the style applied.
         */
        alterFirstColumn: boolean;
        /**
         * Indicating whether the last column in the table should have the style applied.
         */
        alterLastColumn: boolean;
        private _columns;
        /**
         * The columns of the table.
         */
        readonly columns: WorkbookTableColumn[];
        /**
         * Initializes a new instance of the @see:WorkbookTable class.
         */
        constructor();
        _serialize(): IWorkbookTable;
        _deserialize(workbookTableOM: IWorkbookTable): void;
        private _serializeTableColumns();
        private _deserializeTableColumns(tableColumnOMs);
    }
    /**
     * Represents the WorkbookTableColumn Object Model background setting definition.
     */
    class WorkbookTableColumn implements IWorkbookTableColumn {
        /**
         * The name of the table column. It is referenced through functions.
         */
        name: string;
        /**
         * The string to show in the totals row cell for the column.
         */
        totalRowLabel: string;
        /**
         * The function to show in the totals row cell for this column.
         */
        totalRowFunction: string;
        /**
         * Indicating whether show filter button for the column.
         */
        showFilterButton: boolean;
        /**
         * Initializes a new instance of the @see:WorkbookTableColumn class.
         */
        constructor();
        _serialize(): IWorkbookTableColumn;
        _deserialize(workbookTableColumnOM: IWorkbookTableColumn): void;
    }
    /**
     * Represents the WorkbookTableStyle Object Model background setting definition.
     */
    class WorkbookTableStyle implements IWorkbookTableStyle {
        /**
         * The name of the table style.
         */
        name: string;
        /**
         * The whole table style.
         */
        wholeTableStyle: WorkbookTableCommonStyle;
        /**
         * The first column stripe style.
         */
        firstBandedColumnStyle: WorkbookTableBandedStyle;
        /**
         * The second column stripe style.
         */
        secondBandedColumnStyle: WorkbookTableBandedStyle;
        /**
         * The first row stripe style.
         */
        firstBandedRowStyle: WorkbookTableBandedStyle;
        /**
         * The second row stripe style.
         */
        secondBandedRowStyle: WorkbookTableBandedStyle;
        /**
         * The first column style.
         */
        firstColumnStyle: WorkbookTableCommonStyle;
        /**
         * The last column style.
         */
        lastColumnStyle: WorkbookTableCommonStyle;
        /**
         * The header row style.
         */
        headerRowStyle: WorkbookTableCommonStyle;
        /**
         * The total row style.
         */
        totalRowStyle: WorkbookTableCommonStyle;
        /**
         * The first cell style in the header row.
         */
        firstHeaderCellStyle: WorkbookTableCommonStyle;
        /**
         * The last cell style in the header row.
         */
        lastHeaderCellStyle: WorkbookTableCommonStyle;
        /**
         * The first cell style in the total row.
         */
        firstTotalCellStyle: WorkbookTableCommonStyle;
        /**
         * The last cell style in the total row.
         */
        lastTotalCellStyle: WorkbookTableCommonStyle;
        /**
         * Initializes a new instance of the @see:WorkbookTableStyle class.
         */
        constructor();
        _serialize(): IWorkbookTableStyle;
        _deserialize(workbookTableStyleOM: IWorkbookTableStyle): void;
        private _checkEmptyWorkbookTableStyle();
    }
    /**
     * Represents the WorkbookTableCommonStyle Object Model background setting definition.
     */
    class WorkbookTableCommonStyle extends WorkbookStyle implements IWorkbookTableCommonStyle {
        /**
         * Table borders setting.
         */
        borders: WorkbookTableBorder;
        /**
         * Initializes a new instance of the @see:WorkbookTableCommonStyle class.
         */
        constructor();
        _deserialize(workbookTableCommonStyleOM: IWorkbookTableCommonStyle): void;
    }
    /**
     * Represents the WorkbookTableBandedStyle Object Model background setting definition.
     */
    class WorkbookTableBandedStyle extends WorkbookTableCommonStyle implements IWorkbookTableBandedStyle {
        /**
         * Number of rows or columns in a single band of striping.
         */
        size: number;
        /**
         * Initializes a new instance of the @see:WorkbookTableBandedStyle class.
         */
        constructor();
        _serialize(): IWorkbookTableBandedStyle;
        _deserialize(workbookTableBandedStyleOM: IWorkbookTableBandedStyle): void;
    }
    /**
     * Represents the Workbook Object Model table border definition.
     */
    class WorkbookTableBorder extends WorkbookBorder implements IWorkbookTableBorder {
        /**
         * Vertical border setting.
         */
        vertical: WorkbookBorderSetting;
        /**
         * Horizontal border setting.
         */
        horizontal: WorkbookBorderSetting;
        /**
         * Initializes a new instance of the @see:WorkbookTableBorder class.
         */
        constructor();
        _serialize(): IWorkbookTableBorder;
        _deserialize(workbookBorderOM: IWorkbookTableBorder): void;
    }
    /**
     * Represents the Workbook Object Model text run definition.
     */
    class WorkbookTextRun implements IWorkbookTextRun {
        /**
         * Gets or sets the font of the text run.
         */
        font: WorkbookFont;
        /**
         * Gets or sets the text of the text run.
         */
        text: string;
        /**
         * Initializes a new instance of the @see:WorkbookTextRun class.
         */
        constructor();
        _serialize(): IWorkbookTextRun;
        _deserialize(workbookTextRunOM: IWorkbookTextRun): void;
    }
    interface IXlsxFileContent {
        base64: string;
        base64Array: Uint8Array;
        href: Function;
    }
    /**
     * Represents the Workbook Object Model sheet definition that
     * includes sheet properties and data.
     *
     * The sheet cells are stored in row objects and are accessible
     * using JavaScript expressions like <b>sheet.rows[i].cells[j]</b>.
     */
    interface IWorkSheet {
        /**
         * Gets or sets the sheet name.
         */
        name?: string;
        /**
         * Gets or sets an array of sheet columns definitions.
         *
         * Each @see:IWorkbookColumn object in the array describes a column at the
         * corresponding position in xlsx sheet, i.e. column with index 0 corresponds
         * to xlsx sheet column with index A, object with index 1 defines sheet column
         * with index B, and so on. If certain column has no description in xlsx file,
         * then corresponding array element is undefined for both export and import operations.
         *
         * If @see:IWorkbookColumn object in the array doesn't specify the <b>width</b>
         * property value, then the default column width is applied.
         */
        columns?: IWorkbookColumn[];
        /**
         * Gets or sets an array of sheet rows definition.
         *
         * Each @see:IWorkbookRow object in the array describes a row at the
         * corresponding position in xlsx sheet, i.e. row with index 0 corresponds
         * to xlsx sheet row with index A, object with index 1 defines sheet row
         * with index B, and so on. If certain row has no description in xlsx file,
         * then corresponding array element is undefined for both export and import operations.
         *
         * If @see:IWorkbookRow object in the array doesn't specify the <b>height</b>
         * property value, then the default row height is applied.
         */
        rows?: IWorkbookRow[];
        /**
         *  Gets or sets the frozen pane settings.
         */
        frozenPane?: IWorkbookFrozenPane;
        /**
         * Gets or sets a value indicating whether summary rows appear below or above detail rows.
         */
        summaryBelow?: boolean;
        /**
         * Gets or sets the worksheet visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the sheet style.
         *
         * The property defines the style for all cells in the worksheet,
         * and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * Gets the tables in this worksheet.
         */
        tables?: IWorkbookTable[];
    }
    /**
     * Represents the Workbook Object Model column definition.
     */
    interface IWorkbookColumn {
        /**
         * Gets or sets the width of the column in device-independent (1/96th inch) pixels
         * or characters.
         *
         * The numeric value defines the width in pixels. On import, the widths are
         * always expressed in pixels.
         *
         * The string value which is a number with the 'ch' suffix, for example '10ch',
         * defines the width in characters. It has the same meaning as the column width
         * defined through Excel UI. The width can be specified in characters
         * for the export operations only.
         *
         * If width is not specified, then the default width is applied.
         */
        width?: any;
        /**
         * Gets or sets the column visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the column style.
         *
         * The property defines the style for all cells in the column,
         * and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * Gets or sets a value indicating whether the column width is
         * automatically adjusted to fit the content of its cells.
         */
        autoWidth?: boolean;
    }
    /**
     * Represents the Workbook Object Model row definition.
     */
    interface IWorkbookRow {
        /**
         * Gets or sets the row height in device-independent (1/96th inch) pixels.
         *
         * If height is not specified, then the default height is applied.
         */
        height?: number;
        /**
         * Gets or sets the row visibility.
         */
        visible?: boolean;
        /**
         * Gets or sets the group level of the row.
         */
        groupLevel?: number;
        /**
         * Gets or sets the row style.
         *
         * The property defines the style for all cells in the row,
         * and can be overridden by the specific cell styles.
         */
        style?: IWorkbookStyle;
        /**
         * TBD: Indicating if the row is in the collapsed outline state.
         */
        collapsed?: boolean;
        /**
         * Gets or sets an array of cells in the row.
         *
         * Each @see:IWorkbookCell object in the array describes a cell at
         * the corresponding position in the row, i.e. cell with index 0
         * pertains to column with index A, cell with index 1 defines
         * cell pertaining to column with index B, and so on. If a certain cell
         * has no definition (empty) in xlsx file, then corresponding array
         * element is undefined for both export and import operations.
         */
        cells?: IWorkbookCell[];
    }
    /**
     * Represents the Workbook Object Model cell definition.
     */
    interface IWorkbookCell {
        /**
         * Gets or sets the cell value.
         *
         * The type of the value can be String, Number, Boolean or Date.
         */
        value?: any;
        /**
         * Indicates whether the cell value is date or not.
         */
        isDate?: boolean;
        /**
         * Cell formula
         */
        formula?: string;
        /**
         * Cell style
         */
        style?: IWorkbookStyle;
        /**
         * Cell colSpan setting
         */
        colSpan?: number;
        /**
         * Cell rowSpan setting
         */
        rowSpan?: number;
        /**
         * The hyperlink of the cell.
         */
        link?: string;
        /**
         * The text runs represent the rich text of cell.
         */
        textRuns?: IWorkbookTextRun[];
    }
    /**
     * Workbook frozen pane definition
     */
    interface IWorkbookFrozenPane {
        /**
         * Gets or sets the number of frozen rows.
         */
        rows: number;
        /**
         * Gets or sets the number of frozen columns.
         */
        columns: number;
    }
    /**
     * Represents an Excel Workbook. This interface is the root of the Excel
     * Workbook Object Model (WOM) which provides a way to define properties
     * and data stored in xlsx file.
     *
     * To create an xlsx file, create a @see:Workbook object and populate them
     * with @see:WorkSheet, @see:WorkbookColumn, @see:WorkbookRow, and @see:WorkbookCell
     * objects.
     *
     * To save xlsx files, use the @see:Workbook.save method which can save the
     * book to a file or return it as a base-64 string.
     *
     * To load existing xlsx files, use the @see:Workbook.load method which will
     * populate the book.
     */
    interface IWorkbook {
        /**
         * Defines an array of Excel Workbook sheets.
         */
        sheets: IWorkSheet[];
        /**
        * Name of the application that generated the file that appears in the file properties.
        */
        application?: string;
        /**
        * Name of the company that generated the file that appears in the file properties.
        */
        company?: string;
        /**
         * Creator of the xlsx file.
         */
        creator?: string;
        /**
         * Creation time of the xlsx file.
         */
        created?: Date;
        /**
         * Last modifier of the xlsx file.
         */
        lastModifiedBy?: string;
        /**
         * Last modified time of the xlsx file.
         */
        modified?: Date;
        /**
         * Index of the active sheet in the xlsx file.
         */
        activeWorksheet?: number;
        /**
         * Styles table of the workbook.
         */
        styles?: IWorkbookStyle[];
        /**
         * The reserved content for the workbook.
         */
        reservedContent?: any;
        /**
         * The array of the defined name items.
         */
        definedNames?: IDefinedName[];
        /**
         * The color of the workbook themes.
         */
        colorThemes?: string[];
    }
    /**
     * Represents the Workbook Object Model style definition used to
     * style Excel cells, columns and rows.
     */
    interface IWorkbookStyle {
        /**
         * Cell value format, defined using Excel format syntax.
         *
         * The description of Excel format syntax can be found
         * <a href="https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4" target="_blank">here</a>.
         *
         * You may use the <b>toXlsxNumberFormat</b> and <b>toXlsxDateFormat</b>
         * static functions of the @see:Workbook class to convert from .Net
         * (@see:Globalize) format to Excel format.
         */
        format?: string;
        /**
         * Defines the base style that this style inherits.
         *
         * This property is applicable for export operations only.
         * The style gets all the properties defined in the base style,
         * and can override or augment them by setting its own properties.
         */
        basedOn?: IWorkbookStyle;
        /**
         * Gets or sets the font properties.
         */
        font?: IWorkbookFont;
        /**
         * Gets or sets the horizontal alignment of a text.
         */
        hAlign?: HAlign;
        /**
         *  Gets or sets the vertical alignment of a text.
         */
        vAlign?: VAlign;
        /**
         * Text indent.
         * It is an integer value, where an increment of 1 represents 3 spaces.
         */
        indent?: number;
        /**
         * Cell outline setting.
         */
        borders?: IWorkbookBorder;
        /**
         * Cells background.
         */
        fill?: IWorkbookFill;
        /**
         * Word wrap setting.
         */
        wordWrap?: boolean;
    }
    /**
     * Represents the Workbook Object Model font definition.
     */
    interface IWorkbookFont {
        /**
         * Gets or sets the font family name.
         */
        family?: string;
        /**
         * Gets or sets the font size in device-independent (1/96th inch) pixels.
         */
        size?: number;
        /**
         * Gets or sets a value indicating whether this font is bold.
         */
        bold?: boolean;
        /**
         * Gets or sets a value indicating whether this font has the italic style applied.
         */
        italic?: boolean;
        /**
         * Gets or sets a value indicating whether this font is underlined.
         */
        underline?: boolean;
        /**
         * Gets or sets the font color.
         *
         * For export, the color can be specified in any valid HTML format like
         * 6-character dash notation or rgb/rgba/hsl/hsla functional form. In case
         * of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character
         * dash notation, for example, "#afbfcf".
         */
        color?: string;
    }
    /**
     * Workbook cell outline definition.
     */
    interface IWorkbookBorder {
        /**
         * Top border setting.
         */
        top?: IWorkbookBorderSetting;
        /**
         * Bottom border setting.
         */
        bottom?: IWorkbookBorderSetting;
        /**
         * Left border setting.
         */
        left?: IWorkbookBorderSetting;
        /**
         * Right border setting.
         */
        right?: IWorkbookBorderSetting;
        /**
         * Diagonal border setting.
         */
        diagonal?: IWorkbookBorderSetting;
    }
    /**
     * Border style definition
     */
    interface IWorkbookBorderSetting {
        /**
         * Border color.
         *
         * For export, the color can be specified in any valid HTML format like
         * 6-character dash notation or rgb/rgba/hsl/hsla functional form. In case
         * of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character
         * dash notation, for example, "#afbfcf".
         */
        color?: string;
        /**
         * Border type.
         */
        style?: BorderStyle;
    }
    /**
     * Represents the Workbook Object Model background fill definition.
     */
    interface IWorkbookFill {
        /**
         * Gets or sets the fill color.
         *
         * For export, the color can be specified in any valid HTML format like
         * 6-character dash notation or rgb/rgba/hsl/hsla functional form. In case
         * of rgba/hsla representations, specified alpha channel value
         * is ignored.
         *
         * For import, a value is always represented in the HTML 6-character
         * dash notation, for example, "#afbfcf".
         */
        color?: string;
    }
    interface ITableIndex {
        row: number;
        col: number;
        absCol: boolean;
        absRow: boolean;
    }
    /**
     * Defines a cell index with zero-based row and column components,
     * as well as the properties indicating whether the index component
     * is absolute (for example: "$D") or relative (for example: "D").
     *
     * It is not related with the WorkbookTable any more.
     * It is a zero-based row/column indices pair that stores the converted Excel's alphanumeric cell.
     */
    interface ITableAddress {
        /**
         * A zero-based row index.
         */
        row: number;
        /**
         * A zero-based column index.
         */
        col: number;
        /**
        * Indicates whether the original column index is absolute (for example: "$D")
        * or relative (for example: "D").
        */
        absCol: boolean;
        /**
        * Indicates whether the original row index is absolute (for example: "$15")
        * or relative (for example: "15").
        */
        absRow: boolean;
    }
    /**
     * Represents the Defined name definition.
     */
    interface IDefinedName {
        /**
         * The name of the defined name item.
         */
        name: string;
        /**
         * The value of the defined name item.
         * The value could be a formula, a string constant or a cell range.
         * For e.g. "Sum(1, 2, 3)", "test" or "sheet1!A1:B2"
         */
        value: any;
        /**
         * Indicates the defined name item works in which sheet.
         * If omitted, the defined name item works in workbook.
         */
        sheetName?: string;
    }
    /**
     * Represents the Table definition.
     */
    interface IWorkbookTable {
        /**
         * The name of the table.  It is used to reference the table programmatically.
         */
        name: string;
        /**
         * The range on the relevant sheet that the table occupies expressed using A1 style referencing. i.e. "A1:D4".
         * The reference shall include the totals row if it is shown.
         */
        range: string;
        /**
         * Indicates whether show the header row for the table.
         */
        showHeaderRow: boolean;
        /**
         * Indicates whether show the total row for the table.
         */
        showTotalRow: boolean;
        /**
         * Indicating whether banded column formatting is applied.
         */
        showBandedColumns: boolean;
        /**
         * The table style to use with the table.
         */
        style: IWorkbookTableStyle;
        /**
         * Indicating whether banded row formatting is applied.
         */
        showBandedRows: boolean;
        /**
         * Indicating whether the first column in the table should have the style applied.
         */
        alterFirstColumn: boolean;
        /**
         * Indicating whether the last column in the table should have the style applied.
         */
        alterLastColumn: boolean;
        /**
         * The columns of the table.
         */
        columns: IWorkbookTableColumn[];
    }
    /**
     * Represents the Table Column definition.
     */
    interface IWorkbookTableColumn {
        /**
         * The name of the table column. It is referenced through functions.
         */
        name: string;
        /**
         * The string to show in the totals row cell for the column.
         */
        totalRowLabel?: string;
        /**
         * The function to show in the totals row cell for this column.
         */
        totalRowFunction?: string;
        /**
         * Indicating whether show filter button for the column.
         */
        showFilterButton?: boolean;
    }
    /**
     * Represents the Table Style definition.
     */
    interface IWorkbookTableStyle {
        /**
         * The name of the table style.
         */
        name: string;
        /**
         * The whole table style.
         */
        wholeTableStyle?: IWorkbookTableCommonStyle;
        /**
         * The first column stripe style.
         */
        firstBandedColumnStyle?: IWorkbookTableBandedStyle;
        /**
         * The second column stripe style.
         */
        secondBandedColumnStyle?: IWorkbookTableBandedStyle;
        /**
         * The first row stripe style.
         */
        firstBandedRowStyle?: IWorkbookTableBandedStyle;
        /**
         * The second row stripe style.
         */
        secondBandedRowStyle?: IWorkbookTableBandedStyle;
        /**
         * The first column style.
         */
        firstColumnStyle?: IWorkbookTableCommonStyle;
        /**
         * The last column style.
         */
        lastColumnStyle?: IWorkbookTableCommonStyle;
        /**
         * The header row style.
         */
        headerRowStyle?: IWorkbookTableCommonStyle;
        /**
         * The total row style.
         */
        totalRowStyle?: IWorkbookTableCommonStyle;
        /**
         * The first cell style in the header row.
         */
        firstHeaderCellStyle?: IWorkbookTableCommonStyle;
        /**
         * The last cell style in the header row.
         */
        lastHeaderCellStyle?: IWorkbookTableCommonStyle;
        /**
         * The first cell style in the total row.
         */
        firstTotalCellStyle?: IWorkbookTableCommonStyle;
        /**
         * The last cell style in the total row.
         */
        lastTotalCellStyle?: IWorkbookTableCommonStyle;
    }
    /**
     * Represents the Table Common Style definition.
     */
    interface IWorkbookTableCommonStyle extends IWorkbookStyle {
        /**
         * Table borders setting.
         */
        borders?: IWorkbookTableBorder;
    }
    /**
     * Represents the Table Stripe Style definition.
     */
    interface IWorkbookTableBandedStyle extends IWorkbookTableCommonStyle {
        /**
         * Number of rows or columns in a single band of striping.
         */
        size?: number;
    }
    /**
     * Table border definition.
     */
    interface IWorkbookTableBorder extends IWorkbookBorder {
        /**
         * Vertical border setting.
         */
        vertical?: IWorkbookBorderSetting;
        /**
         * Horizontal border setting.
         */
        horizontal?: IWorkbookBorderSetting;
    }
    /**
     * Piece of text run for rich text.
     */
    interface IWorkbookTextRun {
        /**
         * The font of the text run.
         */
        font?: IWorkbookFont;
        /**
         * The text of the text run.
         */
        text: string;
    }
    /**
     * Defines the Workbook Object Model horizontal text alignment.
     */
    enum HAlign {
        /** Alignment depends on the cell value type. */
        General = 0,
        /** Text is aligned to the left. */
        Left = 1,
        /** Text is centered. */
        Center = 2,
        /** Text is aligned to the right. */
        Right = 3,
        /** Text is replicated to fill the whole cell width. */
        Fill = 4,
        /** Text is justified. */
        Justify = 5,
    }
    /**
     * Vertical alignment
     */
    enum VAlign {
        /** Top vertical alignment */
        Top = 0,
        /** Center vertical alignment */
        Center = 1,
        /** Bottom vertical alignment */
        Bottom = 2,
        /** Justified vertical alignment */
        Justify = 3,
    }
    /**
     * Border line style
     */
    enum BorderStyle {
        /** No border */
        None = 0,
        /** Thin border */
        Thin = 1,
        /** Medium border */
        Medium = 2,
        /** Dashed border */
        Dashed = 3,
        /** Dotted border */
        Dotted = 4,
        /** Thick line border */
        Thick = 5,
        /** Double line border */
        Double = 6,
        /** Hair line border */
        Hair = 7,
        /** Medium dashed border */
        MediumDashed = 8,
        /** Thin dash dotted border */
        ThinDashDotted = 9,
        /** Medium dash dotted border */
        MediumDashDotted = 10,
        /** Thin dash dot dotted border */
        ThinDashDotDotted = 11,
        /** Medium dash dot dotted border */
        MediumDashDotDotted = 12,
        /** Slanted medium dash dotted border */
        SlantedMediumDashDotted = 13,
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Extension that defines the @see:FlexGridXlsxConverter class that provides
 * client-side Excel xlsx file save/load capabilities for the
 * @see:FlexGrid control.
 */
declare module wijmo.grid.xlsx {
    /**
     * This class provides static <b>load</b> and <b>save</b> methods for loading
     * and saving @see:FlexGrid controls from and to Excel xlsx files.
     *
     * The example below shows how you can use the @see:FlexGridXlsxConverter to
     * export the content of a @see:FlexGrid control to XLSX:
     *
     * @fiddle:yzcefvLy
     */
    class FlexGridXlsxConverter {
        private static hasCssText;
        /**
         * Save the @see:FlexGrid instance to the @see:Workbook instance.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample exports FlexGrid content to an xlsx file.
         * // click.
         * &nbsp;
         * // HTML
         * &lt;button
         *     onclick="saveXlsx('FlexGrid.xlsx')"&gt;
         *     Save
         * &lt;/button&gt;
         * &nbsp;
         * // JavaScript
         * function saveXlsx(fileName) {
         *     // Save the flexGrid to xlsx file.
         *     wijmo.grid.xlsx.FlexGridXlsxConverter.save(flexGrid,
         *             { includeColumnHeaders: true }, fileName);
         * }</pre>
         *
         * @param grid FlexGrid that will be saved.
         * @param options @see:IFlexGridXlsxOptions object specifying the save options.
         * @param fileName Name of the file that will be generated.
         * @return A @see:Workbook object that can be used to customize the workbook
         * before saving it (with the Workbook.save method).
         */
        static save(grid: FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string): wijmo.xlsx.Workbook;
        /**
         * Asynchronously saves the content of a @see:FlexGrid to a file.
         *
         * This method requires JSZip 3.0.
         *
         * @param grid FlexGrid that will be saved.
         * @param options @see:IFlexGridXlsxOptions object specifying the save options.
         * @param fileName Name of the file that will be generated.
         * @param onSaved Callback invoked when the method finishes executing.
         * The callback provides access to the content of the saved workbook
         * (encoded as a base-64 string and passed as a parameter to the callback).
         * @param onError Callback invoked when there are errors saving the file.
         * The error is passed as a parameter to the callback.
         *
         * For example:
         * <pre>
         * wijmo.grid.xlsx.FlexGridXlsxConverter.saveAsync(flexGrid,
         *     { includeColumnHeaders: true }, // options
         *     'FlexGrid.xlsx', // filename
         *     function (base64) { // onSaved
         *         // User can access the base64 string in this callback.
         *         document.getElementByID('export').href = 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' + 'base64,' + base64;
         *     },
         *     function (reason) { // onError
         *         // User can catch the failure reason in this callback.
         *         console.log('The reason of save failure is ' + reason);
         *     }
         *  );</pre>
         */
        static saveAsync(grid: FlexGrid, options?: IFlexGridXlsxOptions, fileName?: string, onSaved?: (base64: string) => any, onError?: (reason?: any) => any): wijmo.xlsx.Workbook;
        /**
         * Loads a @see:Workbook instance or a Blob object containing xlsx
         * file content to the @see:FlexGrid instance.
         * This method works with JSZip 2.5.
         *
         * For example:
         * <pre>// This sample opens an xlsx file chosen through Open File
         * // dialog and fills FlexGrid with the content of the first
         * // sheet.
         * &nbsp;
         * // HTML
         * &lt;input type="file"
         *     id="importFile"
         *     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
         * /&gt;
         * &lt;div id="flexHost"&gt;&lt;/&gt;
         * &nbsp;
         * // JavaScript
         * var flexGrid = new wijmo.grid.FlexGrid("#flexHost"),
         *     importFile = document.getElementById('importFile');
         * &nbsp;
         * importFile.addEventListener('change', function () {
         *     loadWorkbook();
         * });
         * &nbsp;
         * function loadWorkbook() {
         *     var reader,
         *         file = importFile.files[0];
         *     if (file) {
         *         reader = new FileReader();
         *         reader.onload = function (e) {
         *             wijmo.grid.xlsx.FlexGridXlsxConverter.load(flexGrid, reader.result,
         *                 { includeColumnHeaders: true });
         *         };
         *         reader.readAsArrayBuffer(file);
         *     }
         * }</pre>
         *
         * @param grid @see:FlexGrid that loads the @see:Workbook object.
         * @param workbook A @see:Workbook, Blob, base-64 string, or ArrayBuffer
         * containing the xlsx file content.
         * @param options @see:IFlexGridXlsxOptions object specifying the load options.
         */
        static load(grid: FlexGrid, workbook: any, options?: IFlexGridXlsxOptions): void;
        /**
         * Asynchronously loads a @see:Workbook or a Blob representing an xlsx file
         * into a @see:FlexGrid.
         *
         * This method requires JSZip 3.0.
         *
         * @param grid @see:FlexGrid that loads the @see:Workbook object.
         * @param workbook @see:Workbook, Blob, base-64 string, or ArrayBuffer
         * representing the xlsx file content.
         * @param options @see:IFlexGridXlsxOptions object specifying the load options.
         * @param onLoaded Callback invoked when the method finishes executing.
         * The callback provides access to the workbook that was loaded
         * (passed as a parameter to the callback).
         * @param onError Callback invoked when there are errors saving the file.
         * The error is passed as a parameter to the callback.
         *
         * For example:
         * <pre>
         * wijmo.grid.xlsx.FlexGridXlsxConverter.loadAsync(grid, blob, null, function (workbook) {
         *      // user can access the loaded workbook instance in this callback.
         *      var app = worksheet.application ;
         *      ...
         * }, function (reason) {
         *      // User can catch the failure reason in this callback.
         *      console.log('The reason of save failure is ' + reason);
         * });
         * </pre>
         */
        static loadAsync(grid: FlexGrid, workbook: any, options?: IFlexGridXlsxOptions, onLoaded?: (workbook: wijmo.xlsx.Workbook) => void, onError?: (reason?: any) => any): void;
        private static _saveFlexGridToWorkbook(grid, options?);
        private static _loadToFlexGrid(grid, workbook, options);
        private static _parseFlexGridRowToSheetRow(panel, workbookRow, rowIndex, startColIndex, columnSettings, includeCellStyles, fakeCell, cellsCache, isGroupRow, groupLevel, includeColumns, formatItem?);
        static _parseCellStyle(cellStyle: any, isTableStyle?: boolean): wijmo.xlsx.IWorkbookStyle;
        private static _parseBorder(cellStyle, isTableBorder);
        private static _parseEgdeBorder(cellStyle, edge);
        static _parseBorderStyle(borderStyle: wijmo.xlsx.BorderStyle, edge: string, cellStyle: any): void;
        private static _parseToExcelFontFamily(fontFamily);
        private static _parseToExcelFormula(formula, isDate);
        private static _parseToTextRuns(value);
        private static _parseToTextRunFont(style);
        static _getMeasureCell(panel: GridPanel, colIndex: number, patternCell: HTMLDivElement, cellsCache: _CellsCache): HTMLDivElement;
        private static _getColumnSetting(column, colIndex, columns);
        private static _toExcelHAlign(value);
        private static _getColumnCount(sheetData);
        private static _getRowCount(sheetData, columnCnt);
        private static _numAlpha(i);
        private static _getItemType(item);
        private static _setColumn(columns, columnIndex, item);
        private static _getItemValue(item);
        static _getCellStyle(panel: GridPanel, fakeCell: HTMLDivElement, r: number, c: number): any;
        private static _parseTextRunsToHTML(textRuns);
        private static _extend(dst, src);
        private static _checkParentCollapsed(groupCollapsedSettings, groupLevel);
        private static _getColSpan(p, mergedRange, includeColumns);
        private static _getColumnRenderWidth(colIndex, columns);
        private static _getMergedRange(row, col, mergeCells);
    }
    /**
     * Represents arguments of the IFlexGridXlsxOptions.formatItem callback.
     */
    class XlsxFormatItemEventArgs extends wijmo.grid.CellRangeEventArgs {
        private _cell;
        private _patternCell;
        private _xlsxCell;
        private _cellsCache;
        constructor(panel: GridPanel, rng: CellRange, cell: HTMLDivElement, patternCell: HTMLDivElement, cellsCache: _CellsCache, xlsxCell: wijmo.xlsx.IWorkbookCell);
        /**
         * If IFlexGridXlsxOptions.includeCellStyles is set to true then contains a
         * reference to the element that represents the formatted grid cell; otherwise, a null value.
         *
         */
        readonly cell: HTMLElement;
        /**
         * Contains an exporting cell representation. Initially it contains a default cell representation created
         * by FlexGrid export, and can be modified by the event handler to customize its final content. For example,
         * the xlsxCell.value property can be updated to modify a cell content, xlsxCell.style to modify cell's style,
         * and so on.
         */
        xlsxCell: wijmo.xlsx.IWorkbookCell;
        /**
         * Returns a cell with a custom formatting applied (formatItem event, cell templates).
         * This method is useful when export of custom formatting is disabled
         * (IFlexGridXlsxOptions.includeCellStyles=false), but you need
         * to export a custom content and/or style for a certain cells.
         */
        getFormattedCell(): HTMLElement;
    }
    /**
     * Defines additional worksheet properties that can be accesses via the dynamic <b>wj_sheetInfo</b> property
     * of the @see:FlexGrid instance.
     */
    interface IExtendedSheetInfo {
        /**
         * The sheet name.
         */
        name: string;
        /**
         * Sheet visibility.
         */
        visible: boolean;
        /**
         * Styled cells in the sheet
         */
        styledCells: any;
        /**
         * Merged ranges in the sheet
         */
        mergedRanges: CellRange[];
        /**
         * Contains an array of font names used in the sheet.
         */
        fonts: string[];
        /**
         * The tables in this worksheet.
         */
        tables: wijmo.xlsx.WorkbookTable[];
        /**
         * A function that evaluates the formula of cell.
         */
        evaluateFormula?: Function;
    }
    /**
     * FlexGrid Xlsx conversion options
     */
    interface IFlexGridXlsxOptions {
        /**
         * The index of the sheet in the workbook.  It indicates to import which sheet.
         */
        sheetIndex?: number;
        /**
         * The name of the sheet.
         * It indicates to import which sheet for importing.  If the sheetIndex and sheetName are both setting, the priority of sheetName is higher than sheetIndex.
         * It sets the name of worksheet for exporting.
         */
        sheetName?: string;
        /**
         * The visible of the sheet.
         */
        sheetVisible?: boolean;
        /**
         * Indicates whether to include column headers as first rows in the generated xlsx file.
         */
        includeColumnHeaders?: boolean;
        /**
         * Indicates whether to include column headers as first rows in the generated xlsx file.
         */
        includeRowHeaders?: boolean;
        /**
         * Indicates whether cells styling should be included in the generated xlsx file.
         */
        includeCellStyles?: boolean;
        /**
         * Index or name of the active sheet in the xlsx file.
         */
        activeWorksheet?: any;
        /**
         * A callback to indicate which columns of FlexGrid need be included or omitted during exporting.
         *
         * For example:
         * <pre>// This sample excludes the 'country' column from export.
         * &nbsp;
         * // JavaScript
         * wijmo.grid.xlsx.FlexGridXlsxConverter.save(grid, {
         *   includeColumns: function(column) {
         *      return column.binding !== 'country';
         *   }
         * }</pre>
         */
        includeColumns?: (column: Column) => boolean;
        /**
         * An optional callback which is called for every exported cell and allows to perform transformations
         * of exported cell value and style.
         * The callback is called irrespectively of the 'includeCellStyles' property value.
         * It has a single parameter of the @see:XlsxFormatItemEventArgs type that
         * provides both information about the source grid cell and an @see:IWorkbookCell object
         * defining its representation in the exported file, which can be customized in the callback.
         */
        formatItem?: (args: XlsxFormatItemEventArgs) => void;
    }
    type _CellsCache = HTMLDivElement[][];
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
interface Function {
    __super__: any;
    __proto__: any;
}
declare module wijmo.pdf {
}

declare var PDFDocument: {
    prototype: _IPdfKitDocument;
    new (options?: _IPdfKitDocumentOptions): _IPdfKitDocument;
};
interface _IPdfKitDocument {
    x: number;
    y: number;
    info: _IPdfKitDocumentInfo;
    compress: boolean;
    options: _IPdfKitDocumentOptions;
    page: _IPdfKitPage;
    addPage(options?: _IPdfKitPageOptions): _IPdfKitDocument;
    bufferedPageRange(): {
        start: number;
        count: number;
    };
    flushPages(): void;
    switchToPage(pageNumber: number): _IPdfKitPage;
    end(): boolean;
    lineGap(value: number): _IPdfKitDocument;
    currentLineGap(): number;
    currentLineHeight(includeGap?: boolean): number;
    widthOfString(value: string, options?: _IPdfKitWidthOfStringOptions): number;
    heightOfString(value: string, options?: _IPdfKitMeasurementTextOptions): number;
    moveDown(lines: number): _IPdfKitDocument;
    moveUp(lines: number): _IPdfKitDocument;
    text(text: string, options?: _IPdfKitTextOptions): _IPdfKitDocument;
    text(text: string, x?: number, y?: number, options?: _IPdfKitTextOptions): _IPdfKitDocument;
    textAndMeasure(text: string, x: number, y: number, options: _IPdfKitMeasurementTextOptions, measureOnly?: boolean): _IPdfKitTextSize;
    currentFontAscender(): number;
    currentFontBBox(): _IPdfKitFontBBox;
    currentFontSize(): number;
    font(name: string, size?: number): _IPdfKitDocument;
    font(src: ArrayBuffer, size?: number): _IPdfKitDocument;
    font(src: ArrayBuffer, fontFamily: string, size?: number): _IPdfKitDocument;
    fontSize(size: number): _IPdfKitDocument;
    registerFont(name: string, standardFontName: string): _IPdfKitDocument;
    registerFont(name: string, src: ArrayBuffer, fontFamily?: string): _IPdfKitDocument;
    image(URI: string | _IPdfKitImage, options?: _IPdfKitImageOptions): _IPdfKitDocument;
    image(URI: string | _IPdfKitImage, x?: number, y?: number, options?: _IPdfKitImageOptions): _IPdfKitDocument;
    openImage(URI: string): _IPdfKitImage;
    on(eventName: string, handler: Function): _IPdfKitDocument;
    on(eventName: 'data', handler: (chunk: any) => {}): _IPdfKitDocument;
    removeAllListeners(type: string): _IPdfKitDocument;
    removeListener(type: string, listener: Function): _IPdfKitDocument;
    fill(colorOrRule: string): _IPdfKitDocument;
    fill(color: string, rule?: string): _IPdfKitDocument;
    fill(color: number[], rule?: string): _IPdfKitDocument;
    fill(color: _IPdfKitGradient, rule?: string): _IPdfKitDocument;
    fillAndStroke(rule?: string): _IPdfKitDocument;
    fillAndStroke(fillColor: string, strokeColor: string, rule?: string): _IPdfKitDocument;
    fillAndStroke(fillColor: number[], strokeColor: number[], rule?: string): _IPdfKitDocument;
    fillAndStroke(fillColor: _IPdfKitGradient, strokeColor: _IPdfKitGradient, rule?: string): _IPdfKitDocument;
    fillColor(color: string, opacity?: number): _IPdfKitDocument;
    fillColor(color: number[], opacity?: number): _IPdfKitDocument;
    fillColor(color: _IPdfKitGradient, opacity?: number): _IPdfKitDocument;
    strokeColor(color: string, opacity?: number): _IPdfKitDocument;
    strokeColor(color: number[], opacity?: number): _IPdfKitDocument;
    strokeColor(color: _IPdfKitGradient, opacity?: number): _IPdfKitDocument;
    fillOpacity(opacity: number): _IPdfKitDocument;
    strokeOpacity(opacity: number): _IPdfKitDocument;
    opacity(opacity: number): _IPdfKitDocument;
    linearGradient(x1: number, y1: number, x2: number, y2: number): _IPdfKitGradient;
    radialGradient(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number): _IPdfKitGradient;
    closePath(): _IPdfKitDocument;
    clip(rule?: string): _IPdfKitDocument;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): _IPdfKitDocument;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): _IPdfKitDocument;
    circle(x: number, y: number, radius: number): _IPdfKitDocument;
    ellipse(x: number, y: number, r1: number, r2?: number): _IPdfKitDocument;
    lineTo(x: number, y: number): _IPdfKitDocument;
    lineWidth(width: number): _IPdfKitDocument;
    moveTo(x: number, y: number): _IPdfKitDocument;
    path(path: string): _IPdfKitDocument;
    rect(x: number, y: number, w: number, h: number): _IPdfKitDocument;
    roundedRect(x: number, y: number, w: number, h: number, r?: number): _IPdfKitDocument;
    polygon(...points: number[][]): _IPdfKitDocument;
    lineCap(value: any): _IPdfKitDocument;
    lineJoin(value: any): _IPdfKitDocument;
    miterLimit(value: number): _IPdfKitDocument;
    dash(length: number, options?: _IPdfKitDashOptions): _IPdfKitDocument;
    undash(): _IPdfKitDocument;
    stroke(color?: string): _IPdfKitDocument;
    stroke(color?: number[]): _IPdfKitDocument;
    stroke(color?: _IPdfKitGradient): _IPdfKitDocument;
    scale(xFactor: number, yFactor: number, options?: _IPdfKitOrigin): _IPdfKitDocument;
    scale(factor: number): _IPdfKitDocument;
    translate(x: number, y: number): _IPdfKitDocument;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): _IPdfKitDocument;
    rotate(angle: number, options?: _IPdfKitOrigin): _IPdfKitDocument;
    restore(): _IPdfKitDocument;
    save(): _IPdfKitDocument;
}
interface _IPdfKitPageOptions {
    layout?: string;
    margin?: number;
    margins?: _IPdfKitPageMargins;
    size?: any;
}
interface _IPdfKitPage {
    document: _IPdfKitDocument;
    width: number;
    height: number;
    margins: _IPdfKitPageMargins;
    size: any;
    layout: string;
    originalMargins: _IPdfKitPageMargins;
}
interface _IPdfKitDocumentOptions extends _IPdfKitPageOptions {
    bufferPages?: boolean;
    compress?: boolean;
    info?: _IPdfKitDocumentInfo;
    pageAdding?: (document: _IPdfKitDocument, options: _IPdfKitPageOptions) => void;
    pageAdded?: (document: _IPdfKitDocument, pageIndex: number) => void;
}
interface _IPdfKitDocumentInfo {
    Author?: string;
    CreationDate?: Date;
    Keywords?: string;
    ModDate?: Date;
    Subject?: string;
    Title?: string;
}
interface _IPdfKitPageMargins {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
interface _IPdfKitTextOptions {
    align?: string;
    lineBreak?: boolean;
    width?: number;
    height?: number;
    ellipsis?: any;
    columns?: number;
    columnGap?: number;
    indent?: number;
    paragraphGap?: number;
    lineGap?: number;
    wordSpacing?: number;
    characterSpacing?: number;
    fill?: boolean;
    stroke?: boolean;
    link?: string;
    underline?: boolean;
    strike?: boolean;
    continued?: boolean;
}
interface _IPdfKitDashOptions {
    phase?: number;
    space?: number;
}
interface _IPdfKitMeasurementTextOptions extends _IPdfKitTextOptions {
    includeLastLineExternalLeading?: boolean;
}
interface _IPdfKitWidthOfStringOptions {
    characterSpacing?: number;
}
interface _IPdfKitImage {
    width: number;
    height: number;
}
interface _IPdfKitImageOptions {
    width?: number;
    height?: number;
    scale?: number;
    fit?: number[];
    align?: string;
    valign?: string;
}
interface _IPdfKitGradient {
    stop(pos: number, color: any, opacity?: number): _IPdfKitGradient;
}
interface _IPdfKitOrigin {
    origin?: number[];
}
interface _IPdfKitTextSize {
    width?: number;
    height?: number;
    charCount?: number;
}
interface _IPdfKitFontBBox {
    llx: number;
    lly: number;
    urx: number;
    ury: number;
}

declare module wijmo.pdf {
    /**
    * Specifies the shape that shall be used at the ends of open subpaths
    * (and dashes, if any) when they are stroked.
    */
    enum PdfLineCapStyle {
        /**
        * The stroke is squared off at the endpoint of the path.
        */
        Butt = 0,
        /**
        * A semicircular arc with a diameter equal to the line width is
        * drawn around the endpoint and is filled in.
        */
        Round = 1,
        /**
        * The stroke continues beyond the endpoint of the path for a
        * distance equal to the half of the line width and is squared off.
        */
        Square = 2,
    }
    /**
    * Specifies the shape to be used at the corners of paths that are stroked.
    */
    enum PdfLineJoinStyle {
        /**
        * The outer edges of the strokes for the two segments are extended
        * until they meet at an angle.
        */
        Miter = 0,
        /**
        * An arc of a circle with a diameter equal to the line width is drawn
        * around the point where the two segments meet.
        */
        Round = 1,
        /**
        * The two segments are finished with butt caps and the resulting notch
        * beyond the ends of the segments is filled with a triangle.
        */
        Bevel = 2,
    }
    /**
    * Specifies a rule that determines if a point falls inside the enclosed path.
    */
    enum PdfFillRule {
        /**
        * Non-zero rule.
        */
        NonZero = 0,
        /**
        * Even-odd rule.
        */
        EvenOdd = 1,
    }
    /**
    * Specifies the page orientation.
    */
    enum PdfPageOrientation {
        /**
        * Portrait orientation.
        */
        Portrait = 0,
        /**
        * Landscape orientation.
        */
        Landscape = 1,
    }
    /**
    * Specifies the horizontal alignment of the image.
    */
    enum PdfImageHorizontalAlign {
        /**
        * Aligns the image to the left edge of the drawing area.
        */
        Left = 0,
        /**
        * Aligns the image in the middle of the drawing area.
        */
        Center = 1,
        /**
        * Aligns the image to the right edge of the drawing area.
        */
        Right = 2,
    }
    /**
    * Specifies the vertical alignment of the image.
    */
    enum PdfImageVerticalAlign {
        /**
        * Aligns the image to the top edge of the drawing area.
        */
        Top = 0,
        /**
        * Aligns the image in the middle of the drawing area.
        */
        Center = 1,
        /**
        * Aligns the image to the bottom edge of the drawing area.
        */
        Bottom = 2,
    }
    /**
    * Specifies the horizontal alignment of text content.
    */
    enum PdfTextHorizontalAlign {
        /**
        * Text is aligned to the left.
        */
        Left = 0,
        /**
        * Text is centered.
        */
        Center = 1,
        /**
        * Text is aligned to the right.
        */
        Right = 2,
        /**
        * Text is justified.
        */
        Justify = 3,
    }
    enum _PdfTextBaseline {
        Top = 0,
        Alphabetic = 1,
    }
    /**
    * Specifies the page size, in points.
    */
    enum PdfPageSize {
        /**
        * Represents the A0 page size.
        */
        A0 = 0,
        /**
        * Represents the A1 page size.
        */
        A1 = 1,
        /**
        * Represents the A2 page size.
        */
        A2 = 2,
        /**
        * Represents the A3 page size.
        */
        A3 = 3,
        /**
        * Represents the A4 page size.
        */
        A4 = 4,
        /**
        * Represents the A5 page size.
        */
        A5 = 5,
        /**
        * Represents the A6 page size.
        */
        A6 = 6,
        /**
        * Represents the A7 page size.
        */
        A7 = 7,
        /**
        * Represents the A8 page size.
        */
        A8 = 8,
        /**
        * Represents the A9 page size.
        */
        A9 = 9,
        /**
        * Represents the A10 page size.
        */
        A10 = 10,
        /**
        * Represents the B0 page size.
        */
        B0 = 11,
        /**
        * Represents the B1 page size.
        */
        B1 = 12,
        /**
        * Represents the B2 page size.
        */
        B2 = 13,
        /**
        * Represents the B3 page size.
        */
        B3 = 14,
        /**
        * Represents the B4 page size.
        */
        B4 = 15,
        /**
        * Represents the B5 page size.
        */
        B5 = 16,
        /**
        * Represents the B6 page size.
        */
        B6 = 17,
        /**
        * Represents the B7 page size.
        */
        B7 = 18,
        /**
        * Represents the B8 page size.
        */
        B8 = 19,
        /**
        * Represents the B9 page size.
        */
        B9 = 20,
        /**
        * Represents the B10 page size.
        */
        B10 = 21,
        /**
        * Represents the C0 page size.
        */
        C0 = 22,
        /**
        * Represents the C1 page size.
        */
        C1 = 23,
        /**
        * Represents the C2 page size.
        */
        C2 = 24,
        /**
        * Represents the C3 page size.
        */
        C3 = 25,
        /**
        * Represents the C4 page size.
        */
        C4 = 26,
        /**
        * Represents the C5 page size.
        */
        C5 = 27,
        /**
        * Represents the C6 page size.
        */
        C6 = 28,
        /**
        * Represents the C7 page size.
        */
        C7 = 29,
        /**
        * Represents the C8 page size.
        */
        C8 = 30,
        /**
        * Represents the C9 page size.
        */
        C9 = 31,
        /**
        * Represents the C10 page size.
        */
        C10 = 32,
        /**
        * Represents the RA0 page size.
        */
        RA0 = 33,
        /**
        * Represents the RA1 page size.
        */
        RA1 = 34,
        /**
        * Represents the RA2 page size.
        */
        RA2 = 35,
        /**
        * Represents the RA3 page size.
        */
        RA3 = 36,
        /**
        * Represents the RA4 page size.
        */
        RA4 = 37,
        /**
        * Represents the SRA0 page size.
        */
        SRA0 = 38,
        /**
        * Represents the SRA1 page size.
        */
        SRA1 = 39,
        /**
        * Represents the SRA2 page size.
        */
        SRA2 = 40,
        /**
        * Represents the SRA3 page size.
        */
        SRA3 = 41,
        /**
        * Represents the SRA4 page size.
        */
        SRA4 = 42,
        /**
        * Represents the executive page size.
        */
        Executive = 43,
        /**
        * Represents the folio page size.
        */
        Folio = 44,
        /**
        * Represents the legal page size.
        */
        Legal = 45,
        /**
        * Represents the letter page size.
        */
        Letter = 46,
        /**
        * Represents the tabloid page size.
        */
        Tabloid = 47,
    }
}

declare module wijmo.pdf {
    /** Infrastructure. */
    interface _IPdfTextFlowCtxState {
        xo: number;
        yo: number;
        lineGap: number;
    }
    /**
    * Represents text settings used by @see:PdfPageArea.drawText and @see:PdfPageArea.measureText methods.
    */
    interface IPdfTextSettings {
        /**
        * Determines how text is aligned within the drawing area.
        * The default value is <b>Left</b>.
        */
        align?: PdfTextHorizontalAlign;
        /**
        * Indicates whether line wrapping should be used or not.
        * The property is ignored if @see:IPdfTextSettings.width is defined.
        * The default value is true.
        */
        lineBreak?: boolean;
        /**
        * Determines the width of the text area in points to which the text should wrap.
        * The default value is undefined which means that the text area will be limited by
        * right margin of the page.
        * Use Infinity to indicate that the text area has an infinite width.
        * If defined, forces the @see:IPdfTextSettings.lineBreak property to be enabled.
        */
        width?: number;
        /**
        * Determines the height of the drawing area in points to which the text should be clipped.
        * The default value is undefined which means that the text area will be limited by
        * bottom edge of the body section.
        * Use Infinity to indicate that the text area has an infinite height.
        */
        height?: number;
        /**
        * Determines the character to display at the end of the text when it exceeds
        * the given area.The default value is undefined, that is, ellipsis is not displayed.
        * Set to true to use the default character.
        */
        ellipsis?: any;
        /**
        * Determines the number of columns to flow the text into.
        * The default value is 1.
        */
        columns?: number;
        /**
        * Determines the spacing between each column, in points.
        * The default value is 18.
        */
        columnGap?: number;
        /**
        * Determines the value of indentaion in each paragraph of text, in points.
        * The default value is 0.
        */
        indent?: number;
        /**
        * Determines the spacing between paragraphs of text.
        * The default value is 0.
        */
        paragraphGap?: number;
        /**
        * Determines the spacing between lines of text.
        * The default value is 0.
        */
        lineGap?: number;
        /**
        * Determines the spacing between words in the text.
        * The default value is 0.
        */
        wordSpacing?: number;
        /**
        * Determines the spacing between text characters.
        * The default value is 0.
        */
        characterSpacing?: number;
        /**
        * Indicates whether the text should be filled or not.
        * The default value is true.
        */
        fill?: boolean;
        /**
        * Indicates whether the text should be stroked or not.
        * The default value is false.
        */
        stroke?: boolean;
        /**
        * Determines a URL used to create a link annotation (URI action).
        */
        link?: string;
        /**
        * Indicates whether the text should be underlined or not.
        * The default value is false.
        */
        underline?: boolean;
        /**
        * Indicates whether the text should be striked out or not.
        * The default value is false.
        */
        strike?: boolean;
        /**
        * Indicates whether subsequent text should be continued right after that or
        * it will be a new paragraph. If true, the text settings will be retained
        * between drawText calls. It means that options argument will be merged with
        * the one taken from the previous drawText call.
        *
        * The default value is false.
        */
        continued?: boolean;
    }
    /**
    * Represents the settings used by @see:PdfPageArea.drawText method to draw a text
    * with the specified @see:PdfPen and @see:PdfBrush.
    */
    interface IPdfTextDrawSettings extends IPdfTextSettings {
        /**
        * Determines the font to use. If not specified, the default document font will be
        * used (@see:PdfDocument.setFont method).
        */
        font?: PdfFont;
        /**
        * Determines the pen to stroke the text. If not specified, the default document
        * pen will be used (@see:PdfDocument.setPen method).
        */
        pen?: any;
        /**
        * Determines the brush to fill the text. If not specified, the default document
        * brush will be used (@see:PdfDocument.setBrush method).
        */
        brush?: any;
        _baseline?: _PdfTextBaseline;
    }
    /**
    * Represents the settings used by @see:PdfPageArea.measureText method.
    */
    interface IPdfTextMeasurementSettings extends IPdfTextSettings {
        /**
        * Determines whether the last line external leading value should be included into the measurements result.
        * The default value is true.
        */
        includeLastLineExternalLeading?: boolean;
    }
    /**
    * Represents the image opened using @see:PdfPageArea.openImage method.
    */
    interface IPdfImage {
        /**
        * The width of the image, in pixels.
        */
        width: number;
        /**
        * The height of the image, in pixels.
        */
        height: number;
    }
    /**
     * Represents the image drawing settings used by @see:PdfPageArea.drawImage method.
     *
     * If neither width nor height options are provided, then the image will be rendered
     * in its original size. If only width is provided, then the image will be scaled
     * proportionally to fit in the provided width. If only height is provided, then the
     * image will be scaled proportionally to fit in the provided height. If both width
     * and height are provided, then image will be stretched to the dimensions depending
     * on the stretchProportionally property.
     */
    interface IPdfImageDrawSettings {
        /**
        * Determines the width of the image, in points.
        */
        width?: number;
        /**
        * Determines the height of the image, in points.
        */
        height?: number;
        /**
        * Indicates whether an image will be stretched proportionally or not, if both width
        * and height options are provided.
        */
        stretchProportionally?: boolean;
        /**
        * Determines the horizontal alignment in case of proportional stretching.
        */
        align?: PdfImageHorizontalAlign;
        /**
        * Determines the vertical alignment in case of proportional stretching.
        */
        vAlign?: PdfImageVerticalAlign;
    }
    /**
    * Represents the settings used by @see:PdfPageArea.drawSvg method to draw a SVG image.
    */
    interface IPdfSvgDrawSettings extends IPdfImageDrawSettings {
        /**
        * Determines a callback function used to convert a relative URL to a URL that is correct for the current request path.
        * The function gets passed the relative URL as its argument and should return the resolved URL.
        */
        urlResolver?: Function;
    }
    /**
    * Represents a range of buffered pages returned by @see:PdfDocument.bufferedPageRange method.
    */
    interface IPdfBufferedPageRange {
        /**
        * Determines the zero-based index of the first buffered page.
        */
        start: number;
        /**
        * Determines the count of buffered pages.
        */
        count: number;
    }
    /**
    * Represents the font attributes.
    */
    interface IPdfFontAttributes {
        /**
        * Glyphs have finishing strokes, flared or tapering ends, or have actual
        * serifed endings.
        */
        cursive?: boolean;
        /**
        * Fantasy fonts are primarily decorative fonts that contain playful representations
        * of characters.
        */
        fantasy?: boolean;
        /**
        * All glyphs have the same width.
        */
        monospace?: boolean;
        /**
        * Glyphs have finishing strokes, flared or tapering ends, or have actual
        * serifed endings.
        */
        serif?: boolean;
        /**
        * Glyphs have stroke endings that are plain.
        */
        sansSerif?: boolean;
    }
    /**
    * Represents the settings of the font to register by @see:PdfDocument.registerFont and
    * @see:PdfDocument.registerFontAsync methods.
    */
    interface IPdfFontFile extends IPdfFontAttributes {
        /**
        * An ArrayBuffer containing binary data or URL to load the font from.
        * Following font formats are supported: TrueType (.ttf), TrueType Collection (.ttc),
        * Datafork TrueType (.dfont).
        */
        source: any;
        /**
        * The name of the font to use.
        */
        name: string;
        /**
        * The style of the font. One of the following values: 'normal', 'italic', 'oblique'.
        */
        style?: string;
        /**
        * The weight of the font. One of the following values: 'normal', 'bold', '100', '200',
        *'300', '400', '500', '600', '700', '800', '900'.
        */
        weight?: string;
        /**
        * An optional parameter determining the TrueType Collection or Datafork TrueType
        * font family.
        */
        family?: string;
    }
    /**
    * Represents the document information used by @see:PdfDocument.info property.
    */
    interface IPdfDocumentInfo {
        /**
        * Determines the name of the person who created the document.
        */
        author?: string;
        /**
        * Determines the date and time the document was created on.
        */
        creationDate?: Date;
        /**
        * Determines the keywords associated with the document.
        */
        keywords?: string;
        /**
        * Determines the date and time when the document was last modified.
        */
        modDate?: Date;
        /**
        * Determines the subject of the document.
        */
        subject?: string;
        /**
        * Determines the title of the document.
        */
        title?: string;
    }
    /**
    * Represents the page margins.
    */
    interface IPdfPageMargins {
        /**
        * Determines the bottom margin, in points.
        */
        bottom: number;
        /**
        * Determines the left margin, in points.
        */
        left: number;
        /**
        * Determines the right margin, in points.
        */
        right: number;
        /**
        * Determines the top margin, in points.
        */
        top: number;
    }
    /**
    * Represents the page settings.
    */
    interface IPdfPageSettings {
        /**
        * Determines the layout of the page.
        */
        layout?: PdfPageOrientation;
        /**
        * Determines the margins of the page.
        */
        margins?: IPdfPageMargins;
        /**
        * Determines the dimensions of the page.
        * The following values are supported:
        * <ul>
        *  <li><b>@see:PdfPageSize</b>: predefined sizes.</li>
        *  <li><b>@see:Size</b>: custom sizes.</li>
        * </ul>
        */
        size?: any;
    }
    /**
    * Represents the text measurement information returned by @see:PdfPageArea.measureText method.
    */
    interface IPdfTextMeasurementInfo {
        /**
        * Determines the text size, in points.
        */
        size: Size;
        /**
        * Determines the character count.
        */
        charCount: number;
    }
}

declare module wijmo.pdf {
    var _Errors: {
        InvalidArg: (name: string) => string;
        InvalidFormat: (value: string) => string;
        ValueCannotBeEmpty: (name: string) => string;
        PathStarted: string;
        BufferPagesMustBeEnabled: string;
        AbstractMethod: string;
        FontNameMustBeSet: string;
        FontSourceMustBeStringArrayBuffer: string;
        FontSourceMustBeString: string;
        FontSourceMustBeArrayBuffer: string;
        EmptyUrl: string;
        UndefinedMimeType: string;
        InvalidImageDataUri: string;
        InvalidImageFormat: string;
    };
}

declare module wijmo.pdf {
    class _SafeColor extends Color {
        constructor(color: string);
        _parse(c: string): boolean;
        static fromString(value: string): Color;
    }
}

declare module wijmo.pdf {
    var _IE: boolean;
    /**
     * Saves the Blob object as a file.
     * @param blob The Blob object to save.
     * @param fileName The name with which the file is saved.
    */
    function saveBlob(blob: Blob, fileName: string): void;
    /**
    * Converts a point unit value to a pixel unit value.
    *
    * @param value The value to convert.
    * @return The converted value.
    */
    function ptToPx(value: number): number;
    /**
    * Converts a pixel unit value to a point unit value.
    *
    * @param value The value to convert.
    * @return The converted value.
    */
    function pxToPt(value: number): number;
    function _asColor(colorOrString: any, clone?: boolean): Color;
    function _asPdfPen(penOrColor: any, nullOK?: boolean): PdfPen;
    function _asPdfBrush(brushOrColor: any, nullOK?: boolean): PdfBrush;
    function _asPdfFont(font: PdfFont, nullOK?: boolean): PdfFont;
    function _asPt(value: any, emptyOK?: boolean, emptyValue?: number): number;
    function _formatMacros(str: string, dict: any): string;
    function _compare(a: any, b: any): boolean;
    function _shallowCopy(src: any): any;
    function _toTitleCase(value: string): string;
}

declare module wijmo.pdf {
    /**
     * Represents the dash pattern used to stroke paths.
     */
    class PdfDashPattern {
        private _dash;
        private _gap;
        private _phase;
        /**
        * Initializes a new instance of the @see:PdfDashPattern class.
        *
        * @param dash The length of alternating dashes, in points.
        * @param gap The length of alternating gaps, in points.
        * @param phase The distance in the dash pattern to start the dash at, in points.
        */
        constructor(dash?: number, gap?: number, phase?: number);
        /**
        * Gets or sets the length of alternating dashes, in points.
        * The default value is null which indicates no dash pattern, but a solid line.
        */
        dash: number;
        /**
        * Gets or sets the length of alternating gaps, in points.
        * The default value is equal to @see:dash which indicates that dashes and gaps will
        * have the same length.
        */
        gap: number;
        /**
        * Gets or sets the distance in the dash pattern to start the dash at, in points.
        * The default value is 0.
        */
        phase: number;
        /**
        * Creates a copy of this @see:PdfDashPattern.
        * @return A copy of this dash pattern.
        */
        clone(): PdfDashPattern;
        /**
        * Determines whether the specified @see:PdfDashPattern instance is equal
        * to the current one.
        *
        * @param value @see:PdfDashPattern to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfDashPattern): boolean;
    }
}

declare module wijmo.pdf {
    /**
    * Represents an abstract class that serves as a base class for all brushes.
    * Instances of any class that derives from this class are used to fill areas and text.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfBrush {
        /**
        * Creates a copy of this @see:PdfBrush.
        * @return A copy of this brush.
        */
        clone(): PdfBrush;
        /**
        * Determines whether the specified @see:PdfBrush instance is equal to the current one.
        *
        * @param value @see:PdfBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfBrush): boolean;
        _getBrushObject(area: PdfPageArea): any;
    }
}

declare module wijmo.pdf {
    /**
    * Represents an object which determines a transition point of a gradient.
    */
    class PdfGradientStop {
        private _offset;
        private _color;
        private _opacity;
        /**
        * Initializes a new instance of the @see:PdfGradientStop class.
        *
        * @param offset The location of the gradient stop on the gradient axis.
        * @param color The color of the gradient stop. A @see:wijmo.Color object or
        * any string acceptable by the @see:wijmo.Color.fromString method.
        * @param opacity The opacity of the gradient stop.
        */
        constructor(offset?: number, color?: any, opacity?: number);
        /**
        * Gets or sets the location of the gradient stop on gradient axis of the brush.
        * The value must be in range [0, 1], where 0 indicates that the gradient stop is
        * placed at the beginning of the gradient axis, while 1 indicates that the
        * gradient stop is placed at the end of the gradient axis.
        * The default value is 0.
        */
        offset: number;
        /**
        * Gets or sets the color of the gradient stop.
        * The default color is black.
        */
        color: Color;
        /**
        * Gets or sets the opacity of the gradient stop.
        * The value must be in range [0, 1], where 0 indicates that the gradient stop is
        * completely transparent, while 1 indicates that the gradient stop is completely
        * opaque. The default value is 1.
        */
        opacity: number;
        /**
        * Creates a copy of this @see:PdfGradientStop.
        * @return A copy of this gradient stop.
        */
        clone(): PdfGradientStop;
        /**
        * Determines whether the specified @see:PdfGradientStop instance is equal to
        * the current one.
        *
        * @param value @see:PdfGradientStop to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfGradientStop): boolean;
    }
}

declare module wijmo.pdf {
    /**
    * Represents an abstract class that serves as a base class for the
    * @see:PdfLinearGradientBrush and @see:PdfRadialGradientBrush classes.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfGradientBrush extends PdfBrush {
        private _opacity;
        private _stops;
        /**
        * Initializes a new instance of the @see:PdfGradientBrush class.
        *
        * @param stops The @see:PdfGradientStop array to set on this brush.
        * @param opacity The opacity of this brush.
        */
        constructor(stops?: PdfGradientStop[], opacity?: number);
        /**
        * Gets or sets the opacity of the brush.
        * The value must be in range [0, 1], where 0 indicates that the brush is
        * completely transparent and 1 indicates that the brush is completely opaque.
        * The default value is 1.
        */
        opacity: number;
        /**
        * Gets or sets an array of @see:PdfGradientStop objects representing a color,
        * offset and opacity within the brush's gradient axis.
        * The default value is an empty array.
        */
        stops: PdfGradientStop[];
        /**
        * Determines whether the specified @see:PdfGradientBrush instance is equal
        * to the current one.
        *
        * @param value @see:PdfGradientBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfGradientBrush): boolean;
        private _cloneStopsArray(value);
    }
}

declare module wijmo.pdf {
    /**
    * Represents a brush used to fill an area with a linear gradient.
    */
    class PdfLinearGradientBrush extends PdfGradientBrush {
        private _x1;
        private _y1;
        private _x2;
        private _y2;
        /**
        * Initializes a new instance of the @see:PdfLinearGradientBrush class.
        *
        * @param x1 The X-coordinate of the starting point of the linear gradient.
        * @param y1 The Y-coordinate of the starting point of the linear gradient.
        * @param x2 The X-coordinate of the ending point of the linear gradient.
        * @param y2 The Y-coordinate of the ending point of the linear gradient.
        * @param stops The @see:PdfGradientStop array to set on this brush.
        * @param opacity The opacity of this brush.
        */
        constructor(x1: number, y1: number, x2: number, y2: number, stops: PdfGradientStop[], opacity?: number);
        /**
        * Gets or sets the X-coordinate of the starting point of the linear gradient,
        * in page area coordinates, in points.
        */
        x1: number;
        /**
        * Gets or sets the Y-coordinate of the starting point of the linear gradient,
        * in page area coordinates, in points.
        */
        y1: number;
        /**
        * Gets or sets the X-coordinate of the ending point of the linear gradient,
        * in page area coordinates, in points.
        */
        x2: number;
        /**
        * Gets or sets the Y-coordinate of the ending point of the linear gradient,
        * in page area coordinates, in points.
        */
        y2: number;
        /**
        * Creates a copy of this @see:PdfLinearGradientBrush.
        * @return A copy of this brush.
        */
        clone(): PdfLinearGradientBrush;
        /**
        * Determines whether the specified @see:PdfLinearGradientBrush instance is equal to
        * the current one.
        *
        * @param value @see:PdfLinearGradientBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfLinearGradientBrush): boolean;
        _getBrushObject(area: PdfPageArea): any;
    }
}

declare module wijmo.pdf {
    /**
    * Represents a brush used to fill an area with a radial gradient.
    */
    class PdfRadialGradientBrush extends PdfGradientBrush {
        private _x1;
        private _y1;
        private _r1;
        private _x2;
        private _y2;
        private _r2;
        /**
        * Initializes a new instance of the @see:PdfRadialGradientBrush class.
        *
        * @param x1 The X-coordinate of the inner circle's center of the radial gradient.
        * @param y1 The Y-coordinate of the inner circle's center of the radial gradient.
        * @param r1 The radius of the inner circle of the radial gradient.
        * @param x2 The X-coordinate of the outer circle's center of the radial gradient.
        * @param y2 The Y-coordinate of the outer circle's center of the radial gradient.
        * @param r2 The radius of the outer circle of the radial gradient.
        * @param stops The @see:PdfGradientStop array to set on this brush.
        * @param opacity The opacity of this brush.
        */
        constructor(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number, stops: PdfGradientStop[], opacity?: number);
        /**
        * Gets or sets the X-coordinate of the inner circle's center that represents the
        * starting point of the radial gradient, in page area coordinates, in points.
        */
        x1: number;
        /**
        * Gets or sets the Y-coordinate of the inner circle's center that represents the
        * starting point of the radial gradient, in page area coordinates, in points.
        */
        y1: number;
        /**
        * Gets or sets the radius of the inner circle that represents the starting
        * point of the radial gradient, in page area coordinates, in points.
        */
        r1: number;
        /**
        * Gets or sets the X-coordinate of the outer circle's center that represents the ending point of the radial gradient, in page area coordinates, in points.
        */
        x2: number;
        /**
        * Gets or sets the Y-coordinate of the outer circle's center that represents
        * the ending point of the radial gradient, in page area coordinates, in points.
        */
        y2: number;
        /**
        * Gets or sets the radius of the outer circle that represents the ending point of the
        * radial gradient, in page area coordinates, in points.
        */
        r2: number;
        /**
        * Creates a copy of this @see:PdfRadialGradientBrush.
        * @return A copy of this brush.
        */
        clone(): PdfRadialGradientBrush;
        /**
        * Determines whether the specified @see:PdfRadialGradientBrush instance is equal
        * to the current one.
        *
        * @param value @see:PdfRadialGradientBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfRadialGradientBrush): boolean;
        _getBrushObject(area: PdfPageArea): any;
    }
}

declare module wijmo.pdf {
    /**
    * Represents a brush used to fill an area with a color.
    */
    class PdfSolidBrush extends PdfBrush {
        private _color;
        /**
        * Initializes a new instance of the @see:PdfSolidBrush class.
        *
        * @param color The color of this brush. A @see:wijmo.Color object or any string
        * acceptable by the @see:wijmo.Color.fromString method.
        */
        constructor(color?: any);
        /**
        * Gets or sets the color of the brush.
        * The default color is black.
        */
        color: Color;
        /**
        * Creates a copy of this @see:PdfSolidBrush.
        * @return A copy of this brush.
        */
        clone(): PdfSolidBrush;
        /**
        * Determines whether the specified @see:PdfSolidBrush instance is equal
        * to the current one.
        *
        * @param value @see:PdfSolidBrush to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfSolidBrush): boolean;
        _getBrushObject(area: PdfPageArea): Color;
    }
}

declare module wijmo.pdf {
    /**
     * Determines an object used to stroke paths and text.
     */
    class PdfPen {
        private _color;
        private _brush;
        private _width;
        private _cap;
        private _join;
        private _miterLimit;
        private _dashPattern;
        /**
        * Initializes a new instance of the @see:PdfPen class with the specified color or
        * brush or JavaScript object.
        *
        * The first argument can accept the following values:
        * <ul>
        *  <li>@see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.</li>
        *  <li>@see:PdfBrush object.</li>
        *  <li>JavaScript object containing initialization properties (all other arguments are ignored).</li>
        * </ul>
        *
        * @param colorOrBrushOrOptions The color or brush or JavaScript object to use.
        * @param width The width to use.
        * @param dashPattern The dash pattern to use.
        * @param cap The line cap style to use.
        * @param join The line join style to use.
        * @param miterLimit The miter limit to use.
        */
        constructor(colorOrBrushOrOptions?: any, width?: number, dashPattern?: PdfDashPattern, cap?: PdfLineCapStyle, join?: PdfLineJoinStyle, miterLimit?: number);
        /**
        * Gets or sets the color used to stroke paths.
        * The default color is black.
        */
        color: Color;
        /**
        * Gets or sets the brush used to stroke paths.
        * Takes precedence over the @see:color property, if defined.
        */
        brush: PdfBrush;
        /**
        * Gets or sets the line width used to stroke paths, in points.
        * The default width is 1.
        */
        width: number;
        /**
        * Gets or sets the shape that shall be used at the open ends of a stroked path.
        * The default value is <b>Butt</b>.
        */
        cap: PdfLineCapStyle;
        /**
        * Gets or sets the shape to be used at the corners of a stroked path.
        * The default value is <b>Miter</b>.
        */
        join: PdfLineJoinStyle;
        /**
        * Determines the maximum value of the miter length to the line width ratio, when the line
        * join is converted from miter to bevel.
        * The default value is 10.
        */
        miterLimit: number;
        /**
        * Gets the dash pattern used to stroke paths.
        * The default value is a solid line.
        */
        dashPattern: PdfDashPattern;
        /**
        * Creates a copy of this @see:PdfPen.
        * @return A copy of this pen.
        */
        clone(): PdfPen;
        /**
        * Determines whether the specified @see:PdfPen instance is equal to the current one.
        *
        * @param value @see:PdfPen to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfPen): boolean;
    }
}

declare module wijmo.pdf {
    /**
     * Represents a font.
     */
    class PdfFont {
        static _DEF_NATIVE_NAME: string;
        static _DEF_FAMILY_NAME: string;
        static _KNOWN_WEIGHTS: {
            'normal': number;
            'bold': number;
            '100': number;
            '200': number;
            '300': number;
            '400': number;
            '500': number;
            '600': number;
            '700': number;
            '800': number;
            '900': number;
        };
        static _KNOWN_STYLES: {
            'normal': number;
            'italic': number;
            'oblique': number;
        };
        static _DEF_PDFKIT_FONT: PdfFont;
        static _DEF_FONT: PdfFont;
        private _family;
        private _size;
        private _style;
        private _weight;
        /**
        * Initializes a new instance of the @see:PdfFont class.
        *
        * @param family The family name of the font.
        * @param size The size of the font.
        * @param style The style of the font.
        * @param weight The weight of the font.
        */
        constructor(family?: string, size?: number, style?: string, weight?: string);
        /**
        * Gets or sets the family name of the font.
        *
        * The list of the font family names in the order of preferences,
        * separated by commas. Each font family name can be the one that
        * was registered using the @see:PdfDocument.registerFont method or
        * the name of one of the PDF standard font families: 'courier',
        * 'helvetica', 'symbol', 'times', 'zapfdingbats' or the superfamily
        * name: 'cursive', 'fantasy', 'monospace', 'serif', 'sans-serif'.
        */
        family: string;
        /**
        * Gets or sets the size of the font.
        */
        size: number;
        /**
         * Gets or sets the style of the font.
         *
         * The following values are supported: 'normal', 'italic', 'oblique'.
         */
        style: string;
        /**
         * Gets or sets the weight of the font.
         *
         * The following values are supported: 'normal', 'bold', '100', '200', '300',
         * '400', '500', '600', '700', '800', '900'.
         */
        weight: string;
        /**
        * Creates a copy of this @see:PdfFont.
        * @return A copy of this font.
        */
        clone(): PdfFont;
        /**
        * Determines whether the specified @see:PdfFont instance is equal to the current one.
        *
        * @param value @see:PdfFont to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfFont): boolean;
    }
}

declare module wijmo.pdf {
    class _PdfFontRegistrar {
        private _fonts;
        private _weightNameToNum;
        private _doc;
        private _findFontCache;
        private _internalFontNames;
        constructor(doc: any);
        registerFont(font: IPdfFontFile): string;
        findFont(name: string, style?: string, weight?: string): string;
        private _normalizeFontSelector(name, style?, weight?);
        private _findFont(name, style?, weight?);
        private _findFontWeightFallback(name, style, weight, availableWeights?);
        private _makeInternalName(ns);
    }
}

declare module wijmo.pdf {
    /**
    * Represents an area of a page with its own coordinate system, where (0, 0) points
    * to the top-left corner.
    * Provides methods for drawing text, images, paths and transformations.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfPageArea {
        private _pdfdoc;
        _offset: Point;
        private _graphics;
        private _drawingText;
        private _ctxProps;
        /**
        * Initializes a new instance of the @see:PdfRunningTitle class.
        */
        constructor();
        /**
        * Gets or sets the X-coordinate (in points) of the current point in the text flow
        * used to draw a text or an image.
        */
        x: number;
        /**
        * Gets or sets the Y-coordinate (in points) of the current point in the text flow
        * used to draw a text or an image.
        */
        y: number;
        /**
        * Gets or sets the spacing between each line of text, in points.
        *
        * The default value is 0.
        */
        lineGap: number;
        /**
        * Gets the height of the area, in points.
        */
        readonly height: number;
        /**
        * Gets the width of the area, in points.
        */
        readonly width: number;
        /**
        * Gets an object that provides ability to draw paths.
        */
        readonly paths: PdfPaths;
        /**
        * Gets the document object.
        */
        readonly document: PdfDocument;
        /**
        * Draws a string with the given options and returns the measurement information.
        *
        * If <b>options.pen</b>, <b>options.brush</b> or <b>options.font</b> are omitted,
        * the current document's pen, brush or font are used (see @see:PdfDocument.setPen,
        * @see:PdfDocument.setBrush, and  @see:PdfDocument.setFont).
        *
        * The string is drawn within the rectangular area for which top-left corner, width
        * and  height are defined by the x, y, <b>options.width</b> and <b>options.height</b>
        * values. If x and y are not provided, the @see:PdfDocument.x and @see:PdfDocument.y
        * properties are used instead.
        *
        * The text is wrapped and clipped automatically within the area.
        * If <b>options.height</b> is not provided and the text exceeds the bottom body edge,
        * then a new page will be added to accommodate the text.
        *
        * Finally, the method updates the value of the @see:PdfDocument.x and @see:PdfDocument.y
        * properties. Hence, any subsequent text or image starts below this point
        * (depending on the value of <b>options.continued</b>).
        *
        * The measurement result doesn't reflect the fact that text can be split into
        * multiple pages or columns; the text is treated as a single block.
        *
        * @param text The text to draw.
        * @param x The X-coordinate of the point to draw the text at, in points.
        * @param y The Y-coordinate of the point to draw the text at, in points.
        * @param options Determines the text drawing options.
        * @return A @see:IPdfTextMeasurementInfo object determines the measurement information.
        */
        drawText(text: string, x?: number, y?: number, options?: IPdfTextDrawSettings): IPdfTextMeasurementInfo;
        /**
        * Draws an image in JPG or PNG format with the given options.
        *
        * If x and y are not defined, then @see:x and @see:y are used instead.
        *
        * Finally, if the image was drawn in the text flow, the method updates @see:y.
        * Hence, any subsequent text or image starts below this point.
        *
        * @param src A string containing the URL to get the image from or the data URI containing a base64 encoded image or a @see:wijmo.pdf.IPdfImage object.
        * @param x The x-coordinate of the point to draw the image at, in points.
        * @param y The y-coordinate of the point to draw the image at, in points.
        * @param options Determines the image drawing options.
        * @return The @see:PdfPageArea object.
        */
        drawImage(src: any, x?: number, y?: number, options?: IPdfImageDrawSettings): PdfPageArea;
        /**
        * Draws a SVG image with the given options.
        *
        * If x and y are not defined, then @see:x and @see:y are used instead.
        *
        * The method uses the values of the width and height attributes of the outermost svg element to determine the
        * scale factor according to the options.width and options.height properties. If any of these attributes are
        * omitted then scaling is not performed and the image will be rendered in its original size.
        *
        * Finally, if the image was drawn in the text flow, the method updates @see:y.
        * Hence, any subsequent text or image starts below this point.
        * The increment value is defined by the options.height property or by the outermost svg element's height attribute, which comes first.
        * If none of them is provided then @see:y will stay unchanged.
        *
        * The method supports a limited set of SVG features and provided primarily for rendering wijmo 5 chart controls.
        *
        * @param url A string containing the URL to get the SVG image from or the data URI containing a base64 encoded SVG image.
        * @param x The x-coordinate of the point to draw the image at, in points.
        * @param y The y-coordinate of the point to draw the image at, in points.
        * @param options Determines the SVG image drawing options.
        * @return The @see:PdfPageArea object.
        */
        drawSvg(url: string, x?: number, y?: number, options?: IPdfSvgDrawSettings): PdfPageArea;
        /**
        * Gets the line height with a given font.
        *
        * If font is not specified, then font used in the current document is used.
        *
        * @param font Font to get the line height.
        * @return The line height, in points.
        */
        lineHeight(font?: PdfFont): number;
        /**
        * Measures a text with the given font and text drawing options without rendering it.
        *
        * If font is not specified, then the font used in the current document is used.
        *
        * The method uses the same text rendering engine as @see:drawText, so it is tied up
        * in the same way to @see:x and the right page margin, if options.width is not
        * provided. The measurement result doesn't reflect the fact that text can be split
        * into multiple pages or columns; the text is treated as a single block.
        *
        * @param text Text to measure.
        * @param font Font to be applied on the text.
        * @param options Determines the text drawing options.
        * @return A @see:IPdfTextMeasurementInfo object determines the measurement information.
        */
        measureText(text: string, font?: PdfFont, options?: IPdfTextMeasurementSettings): IPdfTextMeasurementInfo;
        /**
        * Moves down the @see:y by a given number of lines using the given font or,
        * using the font of current document, if not specified.
        *
        * @param lines Number of lines to move down.
        * @param font Font to calculate the line height.
        * @return The @see:PdfPageArea object.
        */
        moveDown(lines?: number, font?: PdfFont): PdfPageArea;
        /**
        * Moves up the @see:y by a given number of lines using the given font or,
        * using the font of current document, if not specified.
        *
        * @param lines Number of lines to move up.
        * @param font Font to calculate the line height.
        * @return The @see:PdfPageArea object.
        */
        moveUp(lines?: number, font?: PdfFont): PdfPageArea;
        /**
        * Opens an image in JPG or PNG format.
        *
        * @param url A string containing the URL to get the image from or the data URI containing a base64 encoded image.
        * @return The @see:IPdfImage object containing image data.
        */
        openImage(url: string): IPdfImage;
        /**
        * Scales the graphic context by a specified scaling factor.
        *
        * The scaling factor value within the range [0, 1] indicates that the size will be
        * decreased.
        * The scaling factor value greater than 1 indicates that the size will be increased.
        *
        * @param xFactor The factor to scale the X dimension.
        * @param yFactor The factor to scale the Y dimension. If it is not provided, it is
        * assumed to be equal to xFactor.
        * @param origin The @see:Point to scale around, in points. If it is not provided,
        * then the top left corner is used.
        * @return The @see:PdfPageArea object.
        */
        scale(xFactor: number, yFactor?: number, origin?: Point): PdfPageArea;
        /**
        * Translates the graphic context with a given distance.
        *
        * @param x The distance to translate along the X-axis, in points.
        * @param y The distance to translate along the Y-axis, in points.
        * @return The @see:PdfPageArea object.
        */
        translate(x: number, y: number): PdfPageArea;
        /**
        * Transforms the graphic context with given six numbers which represents a
        * 3x3 transformation matrix.
        *
        * A transformation matrix is written as follows:
        * <table>
        *   <tr><td>a</td><td>b</td><td>0</td></tr>
        *   <tr><td>c</td><td>d</td><td>0</td></tr>
        *   <tr><td>e</td><td>f</td><td>1</td></tr>
        * </table>
        *
        * @param a Value of the first row and first column.
        * @param b Value of the first row and second column.
        * @param c Value of the second row and first column.
        * @param d Value of the second row and second column.
        * @param e Value of the third row and first column.
        * @param f Value of the third row and second column.
        * @return The @see:PdfPageArea object.
        */
        transform(a: number, b: number, c: number, d: number, e: number, f: number): PdfPageArea;
        /**
        * Rotates the graphic context clockwise by a specified angle.
        *
        * @param angle The rotation angle, in degrees.
        * @param origin The @see:Point of rotation, in points. If it is not provided,
        * then the top left corner is used.
        */
        rotate(angle: number, origin?: Point): PdfPageArea;
        _assertPathStarted(): void;
        _initialize(doc: PdfDocument, xo: number, yo: number): void;
        _isDrawingText(): boolean;
        private _switchCtx();
        private _saveCtx();
        private _textOptionsToNative(value);
    }
}

declare module wijmo.pdf {
    /**
    * Represents the declarative content of the running title.
    */
    class PdfRunningTitleDeclarativeContent {
        private _font;
        private _text;
        private _brush;
        /**
        * Initializes a new instance of the @see:PdfRunningTitleDeclarativeContent class.
        *
        * @param text The text of the running title.
        * @param font Font of the text.
        * @param brushOrColor The @see:PdfBrush or @see:wijmo.Color or any string acceptable
        * by the @see:wijmo.Color.fromString method used to fill the text.
        */
        constructor(text?: string, font?: PdfFont, brushOrColor?: any);
        /**
        * Gets or sets the font of the @see:text.
        */
        font: PdfFont;
        /**
        * Gets or sets the text of the running title.
        *
        * May contain up to 3 tabular characters ('\t') which are used for separating the text
        * into the parts that will be aligned within the page area using left, center and right
        * alignment.
        * Two kinds of macros are supported, '&[Page]' and '&[Pages]'. The former one designates
        * the current page index while the latter one designates the page count.
        *
        * For example, for the first page of a document having ten pages, the following string:
        * <pre>
        *    '&[Page]\\&[Pages]\theader\t&[Page]\\&[Pages]'
        * </pre>
        * will be translated to:
        * <pre>
        *    '1\10 header 1\10'
        * </pre>
        */
        text: string;
        /**
        * Gets or sets the brush used to fill the @see:text.
        */
        brush: PdfBrush;
        /**
        * Creates a copy of this @see:PdfRunningTitleDeclarativeContent.
        * @return A copy of this pen.
        */
        clone(): PdfRunningTitleDeclarativeContent;
        /**
        * Determines whether the specified @see:PdfRunningTitleDeclarativeContent instance
        * is equal to the current one.
        *
        * @param value @see:PdfRunningTitleDeclarativeContent to compare.
        * @return true if the specified object is equal to the current one, otherwise false.
        */
        equals(value: PdfRunningTitleDeclarativeContent): boolean;
    }
}

declare module wijmo.pdf {
    /**
    * Represents a running title of the page, like header and footer.
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfRunningTitle extends PdfPageArea {
        private _height;
        private _declarative;
        _heightChanged: Event;
        /**
        * Initializes a new instance of the @see:PdfRunningTitle class.
        *
        * @param options An optional object containing initialization settings.
        */
        constructor(options?: any);
        /**
        * Gets or sets an object that provides the ability to setup the running title
        * content declaratively.
        */
        declarative: PdfRunningTitleDeclarativeContent;
        /**
        * Gets or sets the height of the running title, in points.
        * To hide the running title, set this property to 0.
        * Changing this property has no effect on previous drawings; they will not be resized
        * or clipped.
        *
        * The default value is 24.
        */
        height: number;
        drawText(text: any, x?: any, y?: any, options?: IPdfTextDrawSettings): IPdfTextMeasurementInfo;
    }
}

declare module wijmo.pdf {
    class _PdfImageHelper {
        private static DATAURI_CACHE;
        static getDataUri(url: string): string;
        private static _toBase64(buffer);
    }
}

declare module wijmo.pdf {
    /**
    * Provides methods for creating graphics paths and drawing them or using them for clipping.
    *
    * Path creation method calls must be finished with the @see:PdfPaths.stroke,
    * @see:PdfPaths.fill, @see:PdfPaths.fillAndStroke or @see:PdfPaths.clip method.
    * Any document methods which don't apply directly to path creation/ drawing/ clipping
    * (changing a pen, drawing a text, saving the graphics state etc) are prohibited to use
    * until the path is finished.
    * The @see:PdfPaths.lineTo, @see:PdfPaths.bezierCurveTo and @see:PdfPaths.quadraticCurveTo
    * methods should not start the path, they must be preceded with the @see:PdfPaths.moveTo.
    *
    * The methods are chainable:
    * <pre>
    * doc.paths.moveTo(0, 0).lineTo(100, 100).stroke();
    * </pre>
    *
    * This class is not intended to be instantiated in your code.
    */
    class PdfPaths {
        private _doc;
        private _offset;
        private _pathBuffer;
        /**
        * Initializes a new instance of the @see:PdfPaths class.
        *
        * @param doc Document.
        * @param offset Offset.
        */
        constructor(doc: PdfDocument, offset: Point);
        /**
        * Sets a new current point.
        *
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        moveTo(x: number, y: number): PdfPaths;
        /**
        * Draws a line from the current point to a new point.
        *
        * The new current point is (x, y).
        *
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        lineTo(x: number, y: number): PdfPaths;
        /**
        * Draws a quadratic curve from the current point to a new point using the current point
        * and (cpx, cpy) as the control points.
        *
        * The new current point is (x, y).
        *
        * @param cpx The X-coordinate of the control point, in points.
        * @param cpy The Y-coordinate of the control point, in points.
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): PdfPaths;
        /**
        * Draws a bezier curve from the current point to a new point using the (cp1x, cp1y)
        * and (cp2x, cp2y) as the control points.
        *
        * The new current point is (x, y).
        *
        * @param cp1x The X-coordinate of the first control point, in points.
        * @param cp1y The Y-coordinate of the first control point, in points.
        * @param cp2x The X-coordinate of the second control point, in points.
        * @param cp2y The Y-coordinate of the second control point, in points.
        * @param x The X-coordinate of the new point, in points.
        * @param y The Y-coordinate of the new point, in points.
        * @return The @see:PdfPaths object.
        */
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): PdfPaths;
        /**
        * Draws a SVG 1.1 path.
        *
        * @param path The SVG path to draw.
        * @return The @see:PdfPaths object.
        */
        svgPath(path: string): PdfPaths;
        /**
        * Closes the current path and draws a line from the current point to the initial
        * point of the current path.
        *
        * @return The @see:PdfPaths object.
        */
        closePath(): PdfPaths;
        /**
        * Draws a rectangle.
        *
        * @param x The X-coordinate of the topleft corner of the rectangle, in points.
        * @param y The Y-coordinate of the topleft corner of the rectangle, in points.
        * @param width The width of the rectangle, in points.
        * @param height The width of the rectangle, in points.
        * @return The @see:PdfPaths object.
        */
        rect(x: number, y: number, width: number, height: number): PdfPaths;
        /**
        * Draws a rounded rectangle.
        *
        * @param x The X-coordinate of the upper-left corner of the rectangle, in points.
        * @param y The Y-coordinate of the upper-left corner of the rectangle, in points.
        * @param width The width of the rectangle, in points.
        * @param height The width of the rectangle, in points.
        * @param cornerRadius The corner radius of the rectangle, in points. The default value is 0.
        * @return The @see:PdfPaths object.
        */
        roundedRect(x: number, y: number, width: number, height: number, cornerRadius?: number): PdfPaths;
        /**
        * Draws an ellipse.
        *
        * @param x The X-coordinate of the center of the ellipse, in points.
        * @param y The Y-coordinate of the center of the ellipse, in points.
        * @param radiusX The radius of the ellipse along the X-axis, in points.
        * @param radiusY The radius of the ellipse along the Y-axis, in points.
        * If it is not provided, then it is assumed to be equal to radiusX.
        * @return The @see:PdfPaths object.
        */
        ellipse(x: number, y: number, radiusX: number, radiusY?: number): PdfPaths;
        /**
        * Draws a circle.
        *
        * @param x The X-coordinate of the center of the circle, in points.
        * @param y The Y-coordinate of the center of the circle, in points.
        * @param radius The radius of the circle, in points.
        * @return The @see:PdfPaths object.
        */
        circle(x: number, y: number, radius: number): PdfPaths;
        /**
        * Draws a polygon using a given points array.
        *
        * @param points An array of two-elements arrays [x, y] specifying
        * the X and Y coordinates of the point, in points.
        * @return The @see:PdfPaths object.
        */
        polygon(points: number[][]): PdfPaths;
        /**
        * Creates a clipping path used to limit the regions of the page affected by
        * painting operators.
        *
        * @param rule The fill rule to use.
        * @return The @see:PdfPaths object.
        */
        clip(rule?: PdfFillRule): PdfPaths;
        /**
        * Fills the path with the specified brush and rule.
        * If brush is not specified, then the default document brush will be used
        * (see the @see:PdfDocument.setBrush method).
        *
        * The brushOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfBrush object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfBrush object with the specified color will be created internally.
        *    </li>
        * </ul>
        *
        * @param brushOrColor The brush or color to use.
        * @param rule The fill rule to use.
        * @return The @see:PdfPaths object.
        */
        fill(brushOrColor?: any, rule?: PdfFillRule): PdfPaths;
        /**
        * Fills and strokes the path with the specified brush, pen and rule.
        * If brush and pen is not specified, then the default document brush and pen will
        * be used (See the @see:PdfDocument.setBrush, @see:PdfDocument.setPen methods).
        *
        * The brushOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfBrush object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfBrush object with the specified color will be created internally.
        *    </li>
        * </ul>
        *
        * The penOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfPen object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfPen object with the specified color will be created internally.
        *   </li>
        * </ul>
        *
        * @param brushOrColor The brush or color to use.
        * @param penOrColor The pen or color to use.
        * @param rule The fill rule to use.
        * @return The @see:PdfPaths object.
        */
        fillAndStroke(brushOrColor?: any, penOrColor?: any, rule?: PdfFillRule): PdfPaths;
        /**
        * Strokes the path with the specified pen.
        * If pen is not specified, then the default document pen will be used
        * (See the @see:PdfDocument.setPen method).
        *
        * The penOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfPen object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfPen object with the specified color will be created internally.
        *   </li>
        * </ul>
        *
        * @param penOrColor The pen or color to use.
        * @return The @see:PdfPaths object.
        */
        stroke(penOrColor?: any): PdfPaths;
        _hasPathBuffer(): boolean;
        private _writePathBuffer();
    }
}

declare module wijmo.pdf {
    class _PdfSvgPathHelper {
        static offset(path: string, offset: wijmo.Point): string;
        static scale(path: string, scale: number): string;
        private static _processPath(path, argCallback);
        private static _getTokenizer(path);
        private static _updateOffset(value, offset, cmd, cmdIdx, argIdx);
    }
}

declare module wijmo.pdf {
    class _XhrHelper {
        static arrayBufferAsync(url: string, success: (xhr: XMLHttpRequest, data: ArrayBuffer) => void, error?: (xhr: XMLHttpRequest) => void): void;
        static arrayBuffer(url: string, error?: (xhr: XMLHttpRequest) => void): ArrayBuffer;
        static text(url: string, error?: (xhr: XMLHttpRequest) => void): string;
        private static _getData(url, settings, success, error?);
    }
}

declare module wijmo.pdf {
    /**
    * Provides arguments for the @see:PdfDocument.end event.
    */
    class PdfDocumentEndedEventArgs extends EventArgs {
        private _blob;
        private _chunks;
        /**
        * Initializes a new instance of the @see:PdfDocumentEndedEventArgs class.
        *
        * @param chunks An array of chunks.
        */
        constructor(chunks: Uint8Array[]);
        /**
        * Gets a Blob object that contains the document data.
        */
        readonly blob: Blob;
        /**
        * Gets the underlying array of buffers that contains the document data.
        */
        readonly chunks: Uint8Array[];
    }
}

/**
* Defines the @see:PdfDocument class and associated classes.
*/
declare module wijmo.pdf {
    /**
    * Represents a PDF document object, based on <a href="https://github.com/devongovett/pdfkit">PDFKit</a> JavaScript library.
    */
    class PdfDocument extends PdfPageArea {
        private _doc;
        private _docInitialized;
        private _compress;
        private _bufferPages;
        private _chunks;
        private _fontReg;
        private _pageIndex;
        private _ehOnPageAdded;
        private _ehOnPageAdding;
        private _ehOnDocData;
        private _ehOnDocEnding;
        private _ehOnDocEnded;
        private _header;
        private _footer;
        private _graphicsStack;
        private _currentGS;
        private _defPen;
        private _defBrush;
        private _curFont;
        private _defFont;
        /**
        * Initializes a new instance of the @see:PdfDocument class.
        *
        * @param options An optional object containing initialization settings.
        */
        constructor(options?: any);
        /**
        * Gets a value that indicates whether the document compression is enabled.
        * This property can be assigned using the @see:PdfDocument constructor only.
        *
        * The default value is true.
        */
        readonly compress: boolean;
        /**
        * Gets a value that indicates whether the pages buffering mode is enabled which means
        * that the document's pages can be iterated over using @see:pageIndex and @see:bufferedPageRange.
        *
        * This property can be assigned using the @see:PdfDocument constructor only.
        * This property can be set to false only if both @see:header and @see:footer are invisible.
        *
        * The default value is true.
        */
        readonly bufferPages: boolean;
        /**
        * Gets or sets the document information, such as author name, document's creation
        * date and so on.
        */
        info: IPdfDocumentInfo;
        /**
        * Gets an object that represents a header, the page area positioned right below
        * the top margin.
        */
        readonly header: PdfRunningTitle;
        /**
        * Gets an object that represents a footer, the page area positioned right above
        * the bottom margin.
        */
        readonly footer: PdfRunningTitle;
        /**
        * Gets or sets the index of the current page within the buffered pages range.
        *
        * Use the @see:bufferedPageRange method to get the range of buffered pages.
        */
        pageIndex: number;
        /**
        * Gets an object that represents the default page settings for the pages added
        * automatically and for the @see:addPage method.
        */
        pageSettings: IPdfPageSettings;
        /**
        * Occurs when the document has been rendered.
        */
        ended: Event;
        /**
        * Occurs when a new page is added to the document.
        */
        pageAdded: Event;
        /**
        * Raises the @see:end event.
        *
        * @param args A @see:PdfDocumentEndedEventArgs object that contains the event data.
        */
        onEnded(args: PdfDocumentEndedEventArgs): void;
        /**
        * Raises the @see:pageAdded event.
        *
        * @param args A @see:EventArgs object that contains the event data.
        */
        onPageAdded(args: EventArgs): void;
        /**
         * Disposes the document.
         */
        dispose(): void;
        /**
        * Gets an object that represents the current page settings (read-only).
        *
        * @return A @see:IPdfPageSettings object that represents the current page settings.
        */
        readonly currentPageSettings: IPdfPageSettings;
        /**
        * Adds a new page with the given settings.
        *
        * If the settings parameter is omitted, then @see:pageSettings will be used instead.
        *
        * @param settings Page settings.
        * @return The @see:PdfDocument object.
        */
        addPage(settings?: IPdfPageSettings): PdfDocument;
        /**
        * Gets the range of buffered pages.
        * @return A @see:IPdfBufferedPageRange object that represents the range of buffered pages.
        */
        bufferedPageRange(): IPdfBufferedPageRange;
        /**
         * Finishes the document rendering.
         */
        end(): void;
        /**
        * Sets the default document brush.
        * This brush will be used by the @see:PdfPaths.fill, @see:PdfPaths.fillAndStroke and
        * @see:drawText methods, if no specific brush is provided.
        *
        * The brushOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfBrush object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfBrush object with the specified color will be created internally.
        *    </li>
        * </ul>
        *
        * @param brushOrColor The brush or color to use.
        * @return The @see:PdfDocument object.
        */
        setBrush(brushOrColor: any): PdfDocument;
        /**
        * Sets the default document pen.
        * This pen will be used by the @see:PdfPaths.stroke, @see:PdfPaths.fillAndStroke
        * and @see:drawText methods, if no specific pen is provided.
        *
        * The penOrColor argument can accept the following values:
        * <ul>
        *   <li>A @see:PdfPen object.</li>
        *   <li>
        *     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
        *     In this case, the @see:PdfPen object with the specified color will be created internally.
        *   </li>
        * </ul>
        *
        * @param penOrColor The pen or color to use.
        * @return The @see:PdfDocument object.
        */
        setPen(penOrColor: any): PdfDocument;
        /**
        * Sets the document font.
        *
        * If exact font with given style and weight properties is not found then,
        * <ul>
        *   <li>
        *     It tries to search the closest font using
        *     <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">font weight fallback</a>.
        *   </li>
        *   <li>
        *     If still nothing is found, it tries to find the closest font with other style in following order:
        *     <ul>
        *       <li><b>'italic'</b>: 'oblique', 'normal'.</li>
        *       <li><b>'oblique'</b>: 'italic', 'normal'.</li>
        *       <li><b>'normal'</b>: 'oblique', 'italic'.</li>
        *     </ul>
        *   </li>
        * </ul>
        *
        * @param font The font object to set.
        *
        * @return The @see:PdfDocument object.
        */
        setFont(font: PdfFont): PdfDocument;
        _getFont(): PdfFont;
        /**
        * Registers a font from a source and associates it with a given font family name
        * and font attributes.
        *
        * @param font The font to register.
        *
        * @return The @see:PdfDocument object.
        */
        registerFont(font: IPdfFontFile): PdfDocument;
        /**
        * Registers a font from a URL asynchronously and associates it with a given font
        * family name and font attributes.
        *
        * The callback function takes a @see:IPdfFontFile object as a parameter.
        *
        * @param font The font to register.
        * @param callback A callback function which will be called, when the font has been
        * registered.
        */
        registerFontAsync(font: IPdfFontFile, callback: Function): void;
        /**
        * Saves the state of the graphic context (including current pen, brush and
        * transformation state) and pushes it onto stack.
        *
        * @return The @see:PdfDocument object.
        */
        saveState(): PdfDocument;
        /**
        * Restores the state from the stack and applies it to the graphic context.
        *
        * @return The @see:PdfDocument object.
        */
        restoreState(): PdfDocument;
        private _runtimeProperties;
        _copy(key: string, value: any): boolean;
        readonly _document: any;
        _switchTextFlowCtx(state: _IPdfTextFlowCtxState): void;
        _getTextFlowCtxState(): _IPdfTextFlowCtxState;
        _toggleBrush(brush?: PdfBrush): void;
        _togglePen(pen?: PdfPen): void;
        _toggleFont(font?: PdfFont): void;
        private _onDocData(chunk);
        private _onDocEnding();
        private _onDocEnded();
        private _onPageAdding(doc, options);
        private _onPageAdded(doc);
        private _assertAreasPathStarted();
        private _pageSettingsToNative(pageSettings);
        private _processHeadersFooters();
        private _renderHeaderFooter(title, macros, isHeader);
        private _renderHeaderFooterPart(title, text, alignment, isHeader);
        private _setCurBrush(brush);
        private _setCurFont(font);
        private _setCurPen(pen);
        private _setNativeDocBrush(brush, strokeOrFill);
        private _resetAreasOffset(doc);
    }
}

declare module wijmo.pdf {
    type _TDictionary<T> = {
        [key: string]: T;
    };
    function _compressSpaces(value: string): string;
    function _resolveUrlIfRelative(url: string, urlResolver: (url: string) => string): string;
    interface _ISvgCssPropertyValue {
        value: string;
        important: boolean;
    }
    class _SvgCssRule {
        selector: string;
        declarations: _TDictionary<_ISvgCssPropertyValue>;
        constructor(selector: string, declaration: string);
        private _fillDeclarations(declaration);
    }
    class _SvgCssHelper {
        static matchesSelector(node: Element, selector: string): boolean;
        static getSpecificity(selector: string): number;
        static getComputedStyle(node: SVGElement, registeredRules: _TDictionary<_SvgCssRule>): _TDictionary<string>;
        static registerFontFace(doc: PdfDocument, rule: _SvgCssRule, urlResolver?: (url: string) => string): void;
    }
}

declare module wijmo.pdf {
    enum _SvgNumConversion {
        Default = 1,
        None = 2,
        Px = 3,
    }
    enum _SvgLengthContext {
        Width = 1,
        Height = 2,
        Other = 3,
    }
    enum _SvgAttrType {
        Number = 1,
        String = 2,
    }
    class _SvgAttr<T> {
        static parseValue(value: any, attrType: _SvgAttrType, viewPort: Size, lCtx: _SvgLengthContext, numConv: _SvgNumConversion): any;
        private _owner;
        private _value;
        private _defValue;
        private _propName;
        private _propType;
        private _searchValue;
        private _inheritable;
        private _pCtx;
        private _nc;
        constructor(owner: _SvgElementBase, propName: string, propType: _SvgAttrType, defValue?: any, nc?: _SvgNumConversion, lCtx?: _SvgLengthContext, inheritable?: boolean);
        readonly hasVal: boolean;
        val: T;
        protected readonly _val: any;
        reset(): void;
        protected _parse(value: any, nc?: _SvgNumConversion): any;
    }
    class _SvgNumAttr extends _SvgAttr<number> {
        constructor(owner: _SvgElementBase, propName: string, defValue?: any, nc?: _SvgNumConversion, pCtx?: _SvgLengthContext, inheritable?: boolean);
    }
    class _SvgStrAttr extends _SvgAttr<string> {
        constructor(owner: _SvgElementBase, propName: string, defValue?: any, inheritable?: boolean);
    }
    class _SvgColorAttr extends _SvgAttr<string> {
        constructor(owner: _SvgElementBase, propName: string, defValue?: any, inheritable?: boolean);
        asHref(): string;
        protected _parse(value: any): any;
    }
    class _SvgDashArrayAttr extends _SvgAttr<number[]> {
        constructor(owner: _SvgElementBase);
        protected _parse(value: any): number[];
    }
    class _SvgFillRuleAttr extends _SvgAttr<PdfFillRule> {
        constructor(owner: _SvgElementBase, propName: string);
        protected _parse(value: string): PdfFillRule;
    }
    class _SvgHRefAttr extends _SvgStrAttr {
        constructor(owner: _SvgElementBase, propName: string);
        protected _parse(value: string): string;
    }
    class _SvgIdRefAttr extends _SvgHRefAttr {
        protected _parse(value: string): string;
    }
    class _SvgPointsArrayAttr extends _SvgAttr<Point[]> {
        constructor(owner: _SvgElementBase, propName: string);
        protected _parse(value: any): Point[];
    }
    class _SvgTransformAttr extends _SvgAttr<((doc: PdfPageArea) => void)[]> {
        constructor(owner: _SvgElementBase);
        apply(element: _SvgElementBase): void;
        protected _parse(value: any): ((doc: PdfPageArea) => void)[];
    }
    class _SvgTextDecorationAttr extends _SvgAttr<string[]> {
        constructor(owner: _SvgElementBase);
        protected _parse(value: any): string[];
    }
    interface _ISvgViewBoxAttr {
        minX: number;
        minY: number;
        width: number;
        height: number;
    }
    class _SvgViewboxAttr extends _SvgAttr<_ISvgViewBoxAttr> {
        constructor(owner: _SvgElementBase);
        protected _parse(value: any): _ISvgViewBoxAttr;
    }
    interface _ISvgPreserveAspectRatioAttr {
        align: string;
        meet: boolean;
    }
    class _SvgPreserveAspectRatioAttr extends _SvgAttr<_ISvgPreserveAspectRatioAttr> {
        constructor(owner: _SvgElementBase);
        protected _parse(value: any): _ISvgPreserveAspectRatioAttr;
    }
    class _SvgScaleAttributes {
        private _owner;
        aspect: _SvgPreserveAspectRatioAttr;
        viewBox: _SvgViewboxAttr;
        constructor(owner: _SvgElementBase);
        apply(element: _SvgElementBase): Size;
    }
    class _SvgStrokeAttributes {
        private _owner;
        color: _SvgColorAttr;
        dashArray: _SvgDashArrayAttr;
        dashOffset: _SvgNumAttr;
        lineCap: _SvgStrAttr;
        lineJoin: _SvgStrAttr;
        miterLimit: _SvgNumAttr;
        opacity: _SvgNumAttr;
        width: _SvgNumAttr;
        constructor(owner: _SvgElementBase);
        toPen(element?: _SvgElementBase): PdfPen;
    }
    class _SvgFillAttributes {
        private _owner;
        color: _SvgColorAttr;
        opacity: _SvgNumAttr;
        rule: _SvgFillRuleAttr;
        constructor(owner: _SvgElementBase);
        toBrush(element?: _SvgElementBase): PdfBrush;
    }
    class _SvgFontAttributes {
        private _owner;
        family: _SvgStrAttr;
        size: _SvgAttr<string | number>;
        style: _SvgStrAttr;
        weight: _SvgStrAttr;
        constructor(owner: _SvgElementBase);
        toFont(): PdfFont;
    }
    class _SvgStyleAttributes {
        private _owner;
        fill: _SvgFillAttributes;
        font: _SvgFontAttributes;
        stroke: _SvgStrokeAttributes;
        clipRule: _SvgFillRuleAttr;
        constructor(owner: _SvgElementBase);
        apply(element: _SvgElementBase, fill?: boolean, stroke?: boolean): void;
    }
}

declare module wijmo.pdf {
    enum _SvgRenderMode {
        Render = 0,
        Ignore = 1,
        Clip = 2,
    }
    interface _ISvgElementBaseCtor {
        new (ctx: _ISvgRenderContext, node: SVGElement, defRenderMode?: _SvgRenderMode): _SvgElementBase;
    }
    class _SvgElementBase {
        private _children;
        private _attributes;
        private _parent;
        private _style;
        private _ctx;
        private _viewport;
        private _defRenderMode;
        private _curRenderMode;
        constructor(ctx: _ISvgRenderContext, node: SVGElement, defRenderMode?: _SvgRenderMode);
        readonly children: _SvgElementBase[];
        readonly ctx: _ISvgRenderContext;
        parent: _SvgElementBase;
        readonly style: _SvgStyleAttributes;
        viewport: Size;
        attr(name: string, value?: any): any;
        appendNode(node: _SvgElementBase): void;
        copyAttributesFrom(el: _SvgElementBase, except?: string[]): void;
        clone(): _SvgElementBase;
        remove(): void;
        clearAttr(name: string): void;
        render(viewPort: Size, renderMode?: _SvgRenderMode): void;
        readonly renderMode: _SvgRenderMode;
        protected _render(): void;
        protected _renderContent(): void;
    }
    class _SvgClippableElementBase extends _SvgElementBase {
        private _clipPath;
        constructor(ctx: _ISvgRenderContext, node: SVGElement, defRenderMode?: _SvgRenderMode);
        protected _render(): void;
    }
    class _SvgTransformableElementBase extends _SvgClippableElementBase {
        private _transform;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        protected _render(): void;
    }
    class _SvgShapeElementBase extends _SvgTransformableElementBase {
        protected _fill: boolean;
        protected _stroke: boolean;
        protected _renderContent(): void;
        protected _draw(): void;
    }
    class _SvgCircleElementImpl extends _SvgShapeElementBase {
        protected _draw(): void;
    }
    class _SvgEllipseElementImpl extends _SvgShapeElementBase {
        protected _draw(): void;
    }
    class _SvgLineElementImpl extends _SvgShapeElementBase {
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        protected _draw(): void;
    }
    class _SvgPathElementImpl extends _SvgShapeElementBase {
        private _d;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        protected _renderContent(): void;
        protected _draw(): void;
    }
    class _SvgPolylineElementImpl extends _SvgShapeElementBase {
        protected _draw(): boolean;
    }
    class _SvgPolygonElementImpl extends _SvgPolylineElementImpl {
        protected _draw(): boolean;
    }
    class _SvgRectElementImpl extends _SvgShapeElementBase {
        protected _draw(): void;
    }
    class _SvgClipPathElementImpl extends _SvgElementBase {
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
    }
    class _SvgDefsElementImpl extends _SvgClippableElementBase {
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
    }
    class _SvgGElementImpl extends _SvgTransformableElementBase {
    }
    class _SvgLinearGradientElementImpl extends _SvgElementBase {
        private _x1;
        private _x2;
        private _y1;
        private _y2;
        private _gradientUnits;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        toBrush(element: _SvgElementBase): PdfLinearGradientBrush;
    }
    class _SvgStopElementImpl extends _SvgElementBase {
        color: _SvgColorAttr;
        opacity: _SvgNumAttr;
        offset: _SvgStrAttr;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
    }
    class _SvgImageElementImpl extends _SvgTransformableElementBase {
        private _x;
        private _y;
        private _width;
        private _height;
        private _href;
        private _par;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        protected _renderContent(): void;
        private _renderSvgImage(url);
        private _renderRasterImage(url);
    }
    class _SvgStyleElementImpl extends _SvgElementBase {
        constructor(ctx: _ISvgRenderContext, node: SVGStyleElement);
    }
    class _SvgSvgElementImpl extends _SvgClippableElementBase {
        private _x;
        private _y;
        private _width;
        private _height;
        private _scale;
        private _overflow;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        readonly width: _SvgNumAttr;
        readonly height: _SvgNumAttr;
        protected _render(): void;
    }
    class _SvgSymbolElementImpl extends _SvgClippableElementBase {
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
    }
    class _SvgUseElementImpl extends _SvgElementBase {
        private _xlink;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        protected _render(): void;
    }
    interface _TextDecorator {
        decoration: _SvgTextDecorationAttr;
        style: _SvgStyleAttributes;
    }
    class _SvgTextElementImpl extends _SvgTransformableElementBase {
        private _x;
        private _y;
        private _dx;
        private _dy;
        private _textDecoration;
        constructor(ctx: _ISvgRenderContext, node: SVGElement);
        protected _render(): void;
        protected _renderContent(): void;
        private _prepareNodes();
    }
    class _SvgTspanElementImpl extends _SvgClippableElementBase {
        _text: string;
        _x: _SvgNumAttr;
        _y: _SvgNumAttr;
        _dx: _SvgNumAttr;
        _dy: _SvgNumAttr;
        _textDecoration: _SvgTextDecorationAttr;
        _decorators: _TextDecorator[];
        _cx: number;
        _cy: number;
        constructor(ctx: _ISvgRenderContext, node: SVGElement, text?: string);
        clone(): _SvgElementBase;
        _setDecorators(value: _TextDecorator[]): void;
        protected _renderContent(): void;
        private _decorate();
    }
}

declare module wijmo.pdf {
    interface _ISvgRenderContext {
        area: PdfPageArea;
        urlResolver: (url: string) => string;
        getElement: (id: string) => _SvgElementBase;
        registerCssRule: (rule: _SvgCssRule) => void;
    }
    class _SvgRenderer {
        private _elementsById;
        private _registeredCssRules;
        private _svg;
        private _doc;
        constructor(svgString: string, area: PdfPageArea, urlResolver?: (url: string) => string);
        readonly root: _SvgSvgElementImpl;
        render(viewPort?: Size): void;
        private _parse(svg);
        private _buildTree(dom, tree, handleTextNodes?);
        private _getClassName(nodeName);
        private _copyAttributes(node, element);
        private _getElementById(id);
        private _registerCssRule(rule, urlResolver?);
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
* Defines the @see:FlexGridPdfConverter class used to export the @see:FlexGrid to PDF.
*/
declare module wijmo.grid.pdf {
    /**
     * Specifies how the grid content should be scaled to fit the page.
     */
    enum ScaleMode {
        /**
         * Render the grid in actual size, breaking into pages as needed.
         */
        ActualSize = 0,
        /**
         * Scale the grid, so that it fits the page width.
         */
        PageWidth = 1,
        /**
         * Scale the grid, so that it fits on a single page.
         */
        SinglePage = 2,
    }
    /**
     * Specifies whether the whole grid or just a section should be rendered.
     */
    enum ExportMode {
        /**
         * Exports all the data from grid.
         */
        All = 0,
        /**
         * Exports the current selection only.
         */
        Selection = 1,
    }
    /**
     * Represents the look and feel of a cell.
     */
    interface ICellStyle {
        /**
         * Represents the background color of a cell.
         */
        backgroundColor?: string;
        /**
         * Represents the border color of a cell.
         */
        borderColor?: string;
        /**
         * Represents the text color of a cell.
         */
        color?: string;
        /**
         * Represents the font of a cell.
         */
        font?: any;
    }
    /**
     * Represents the look and feel of the @see:FlexGrid being exported.
     */
    interface IFlexGridStyle {
        /**
         * Specifies the cell style applied to cells within a @see:FlexGrid.
         */
        cellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to odd-numbered rows of the @see:FlexGrid.
         */
        altCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to grouped rows of the @see:FlexGrid.
         */
        groupCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to row headers and column headers of
         * the @see:FlexGrid.
         */
        headerCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to column footers of the @see:FlexGrid.
         */
        footerCellStyle?: ICellStyle;
        /**
         * Represents the cell style applied to cells of the @see:FlexGrid that contain
         * validation errors if the @see:FlexGrid.showErrors property is enabled.
         */
        errorCellStyle?: ICellStyle;
    }
    /**
     * Represents the settings used by the @see:FlexGridPdfConverter.draw and
     * @see:FlexGridPdfConverter.drawToPosition methods.
     */
    interface IFlexGridDrawSettings {
        /**
         * Indicates whether custom cell content and style should be evaluated and exported.
         * If set to true then export logic will retrieve cell content using cell.textContent property,
         * and cell style using getComputedStyle(cell).
         * Default is 'undefined' (i.e. false).
         */
        customCellContent?: boolean;
        /**
         * Indicates whether to draw detail rows.
         * If set to false then the detail rows will be ignored; otherwise the detail rows will be drawn empty
         * and their content should be drawn manually using formatItem event handler.
         * Default is 'undefined' (i.e. false).
         */
        drawDetailRows?: boolean;
        /**
         * Represents an array of custom fonts that will be embedded into the document.
         *
         * This sample illustrates how to setup the FlexGridPdfConverter to use two custom
         * fonts, Cuprum-Bold.ttf and Cuprum-Regular.ttf. The first one is applied to the
         * header cells only, while the second one is applied to all the remaining cells.
         *
         * <pre>
         * wijmo.grid.pdf.FlexGridPdfConverter.export(flex, fileName, {
         *    embeddedFonts: [{
         *       source: 'resources/ttf/Cuprum-Bold.ttf',
         *       name: 'cuprum',
         *       style: 'normal',
         *       weight: 'bold'
         *    }, {
         *       source: 'resources/ttf/Cuprum-Regular.ttf',
         *       name: 'cuprum',
         *       style: 'normal',
         *       weight: 'normal'
         *    }],
         *    styles: {
         *       cellStyle: {
         *          font: {
         *             family: 'cuprum'
         *          }
         *       },
         *       headerCellStyle: {
         *          font: {
         *             weight: 'bold'
         *          }
         *       }
         *    }
         * });
         * </pre>
         */
        embeddedFonts?: wijmo.pdf.IPdfFontFile[];
        /**
         * Determines the export mode.
         */
        exportMode?: ExportMode;
        /**
         * An optional callback function called for every exported cell that allows to perform transformations of exported
         * cell value and style, or perform a custom drawing.
         *
         * The function accepts the @see:PdfFormatItemEventArgs class instance as the first argument.
         *
         * In case of custom drawing the @see:PdfFormatItemEventArgs.cancel property should be set to true to cancel the default cell content drawing, and
         * the @see:PdfFormatItemEventArgs.cancelBorders property should be set to true to cancel the default cell borders drawing.
         *
         * <pre>
         * wijmo.grid.pdf.FlexGridPdfConverter.export(flex, fileName, {
         *    formatItem: function(args) {
         *        // Change the background color of the regular cells of "Country" column.
         *        if (args.panel.cellType === wijmo.grid.CellType.Cell && args.panel.columns[args.col].binding === "country") {
         *            args.style.backgroundColor = 'blue';
         *        }
         *    }
         * });</pre>
         */
        formatItem?: Function;
        /**
         * Determines the maximum number of pages to export.
         */
        maxPages?: number;
        /**
         * Indicates whether merged values should be repeated across pages when the merged range
         * is split on multiple pages.
         */
        repeatMergedValuesAcrossPages?: boolean;
        /**
         * Indicates whether star-sized columns widths should be recalculated against the PDF page
         * width instead of using the grid's width.
         */
        recalculateStarWidths?: boolean;
        /**
         * Represents the look and feel of an exported @see:FlexGrid.
         */
        styles?: IFlexGridStyle;
        /**
         * An optional function that gives feedback about the progress of a task.
         * The function accepts a single argument, a number changing from 0.0 to 1.0, where the value of 0.0 indicates that
         * the operation has just begun and the value of 1.0 indicates that the operation has completed.
         *
         * <pre>
         * wijmo.grid.pdf.FlexGridPdfConverter.export(flex, fileName, {
         *    progress: function(value) {
         *        // Handle the progress here.
         *    }
         * });</pre>
         */
        progress?: Function;
        _progressMax?: number;
    }
    /**
     * Represents the settings used by the @see:FlexGridPdfConverter.export method.
     */
    interface IFlexGridExportSettings extends IFlexGridDrawSettings {
        /**
         * Determines the scale mode.
         */
        scaleMode?: ScaleMode;
        /**
         * Represents the options of the underlying @see:PdfDocument.
         */
        documentOptions?: any;
    }
    interface _IFlexGridAdapter {
        columns: _IColumnCollection;
        rows: _IRowCollection;
        bottomLeftCells: _IGridPanel;
        cells: _IGridPanel;
        columnFooters: _IGridPanel;
        columnHeaders: _IGridPanel;
        rowHeaders: _IGridPanel;
        topLeftCells: _IGridPanel;
        treeIndent: number;
        getSelection(): _ICellRange[];
        getComputedStyle(cell: HTMLElement): CSSStyleDeclaration;
        getMergedRange(p: _IGridPanel, r: number, c: number): _ICellRange;
        showColumnHeader: boolean;
        showRowHeader: boolean;
        showColumnFooter: boolean;
        alignMergedTextToTheTopRow(panel: _IGridPanel): boolean;
        getCell(panel: _IGridPanel, row: number, column: number): HTMLElement;
        getCellContent(panel: _IGridPanel, row: _IRow, col: _IColumn, colIdx: number): string;
        getCellStyle(panel: _IGridPanel, row: _IRow, col: _IColumn): ICellStyle;
        getColumn(panel: _IGridPanel, row: number, col: number): _IColumn;
        isAlternatingRow(row: _IRow): boolean;
        isBooleanCell(panel: _IGridPanel, row: _IRow, col: _IColumn): boolean;
        isGroupRow(row: _IRow): boolean;
        isNewRow(row: _IRow): boolean;
        isDetailRow(row: _IRow): boolean;
        isExpandableGroupRow(row: _IRow): boolean;
    }
    interface _IGridPanel {
        columns: _IColumnCollection;
        cellType: number;
        rows: _IRowCollection;
        height: number;
        width: number;
    }
    interface _IColumnCollection {
        [index: number]: _IColumn;
        firstVisibleIndex: number;
        length: number;
    }
    interface _IColumn {
        aggregate: number;
        dataType: number;
        index: number;
        isVisible: boolean;
        renderWidth: number;
        wordWrap: boolean;
        getAlignment(): string;
    }
    interface _IRowCollection {
        [index: number]: _IRow;
        length: number;
        maxGroupLevel: number;
    }
    interface _IRow {
        index: number;
        isVisible: boolean;
        level?: number;
        renderHeight: number;
    }
    enum _CellType {
        None = 0,
        Cell = 1,
        ColumnHeader = 2,
        RowHeader = 3,
        TopLeft = 4,
        ColumnFooter = 5,
        BottomLeft = 6,
    }
    /**
     * Represents arguments of the IFlexGridDrawSettings.formatItem callback.
     */
    class PdfFormatItemEventArgs extends CancelEventArgs {
        private _p;
        private _rng;
        private _data;
        private _canvas;
        private _cell;
        private _clientRect;
        private _contentRect;
        private _textTop;
        private _style;
        private _getFormattedCell;
        /**
         * Initializes a new instance of the @see:PdfFormatItemEventArgs class.
         *
         * @param p @see:GridPanel that contains the range.
         * @param rng Range of cells affected by the event.
         * @param cell Element that represents the grid cell to be rendered.
         * @param canvas Canvas to perform the custom painting on.
         * @param clientRect    Object that represents the client rectangle of the grid cell to be rendered in canvas coordinates.
         * @param contentRect Object that represents the content rectangle of the grid cell to be rendered in canvas coordinates.
         * @param textTop Object that represents the top position of the text in canvas coordinates.
         * @param style Object that represents the style of the grid cell to be rendered.
         * @param getFormattedCell Callback function that should return the grid cell when the getFormattedCell method is called.
         */
        constructor(p: any, rng: any, cell: HTMLElement, canvas: wijmo.pdf.PdfPageArea, clientRect: Rect, contentRect: Rect, textTop: number, style: ICellStyle, getFormattedCell?: Function);
        /**
         * Gets the @see:GridPanel affected by this event.
         */
        readonly panel: GridPanel;
        /**
         * Gets the @see:CellRange affected by this event.
         */
        readonly range: CellRange;
        /**
         * Gets the row affected by this event.
         */
        readonly row: number;
        /**
         * Gets the column affected by this event.
         */
        readonly col: number;
        /**
         * Gets or sets the data associated with the event.
         */
        data: any;
        /**
        * Gets or sets a value that indicates that default cell borders drawing should be canceled.
        */
        cancelBorders: boolean;
        /**
        * Gets the canvas to perform the custom painting on.
        */
        readonly canvas: wijmo.pdf.PdfPageArea;
        /**
         * Gets a reference to the element that represents the grid cell being rendered.
         * If IFlexGridDrawSettings.customCellContent is set to true then contains
         * reference to the element that represents the formatted grid cell; otherwise, a null value.
         */
        readonly cell: HTMLElement;
        /**
         * Gets the client rectangle of the cell being rendered in canvas coordinates.
         */
        readonly clientRect: Rect;
        /**
         * Gets the content rectangle of the cell being rendered in canvas coordinates.
         */
        readonly contentRect: Rect;
        /**
         * Returns a reference to the element that represents the grid cell being rendered.
         * This method is useful when export of custom formatting is disabled, but you need
         * to export custom content for certain cells.
         */
        getFormattedCell(): HTMLElement;
        /**
         * Gets an object that represents the style of the cell being rendered.
         * If IFlexGridDrawSettings.customCellContent is set to true then the style is inferred
         * from the cell style; othwerwise it contains a combination of the IFlexGridDrawSettings.styles export
         * setting, according to the row type of exported cell.
         */
        readonly style: wijmo.grid.pdf.ICellStyle;
        /**
         * Gets the value that represents the top position of the text of the cell being rendered in canvas coordinates.
         */
        readonly textTop: number;
    }
    function _merge(dst: any, src: any, overwrite?: boolean): any;
    /**
     * Provides a functionality to export the @see:FlexGrid to PDF.
     */
    class _FlexGridPdfConverterCore {
        private static BorderWidth;
        private static DefFont;
        static DefaultDrawSettings: IFlexGridDrawSettings;
        /**
         * Draws the @see:FlexGrid to an existing @see:PdfDocument instance at the
         * specified coordinates.
         *
         * If width is not specified, then grid will be rendered in actual size
         * without any page breaks.
         * If height is not specified, then grid will be scaled to fit the width
         * without any page breaks.
         * If both, width and height are determined, then grid will be scaled to fit
         * the specified rectangle without any page breaks.
         *
         * <pre>
         * var doc = new wijmo.pdf.PdfDocument({
         *    ended: function (sender, args) {
         *       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
         *    }
         * });
         *
         * wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition(grid, doc, new wijmo.Point(0, 0), null, null, {
         *    maxPages: 10,
         *    styles: {
         *       cellStyle: {
         *          backgroundColor: '#ffffff',
         *          borderColor: '#c6c6c6'
         *       },
         *       headerCellStyle: {
         *          backgroundColor: '#eaeaea'
         *       }
         *    }
         * });
         * </pre>
         *
         * @param flex The @see:FlexGrid instance to export.
         * @param doc The @see:PdfDocument instance to draw in.
         * @param point The position to draw at, in points.
         * @param width The width of the drawing area in points.
         * @param height The height of the drawing area in points.
         * @param settings The draw settings.
         */
        static draw(flex: _IFlexGridAdapter, doc: wijmo.pdf.PdfDocument, point?: Point, width?: number, height?: number, settings?: IFlexGridExportSettings): void;
        static _applyDefaultDrawSettings(settings: any): IFlexGridDrawSettings;
        private static _drawInternal(flex, doc, point, width, height, settings);
        private static _getCellsCount(flex, settings, pages);
        private static _getRowsToRender(flex, settings);
        private static _getScaleFactor(gr, scaleMode, rect);
        private static _getPages(gr, ranges, rect, settings, isPositionedMode, scaleFactor);
    }
    interface _ICellRange {
        row: number;
        col: number;
        row2: number;
        col2: number;
        bottomRow: number;
        rightCol: number;
        leftCol: number;
        topRow: number;
        isValid: boolean;
        getRenderSize(panel: _IGridPanel): Size;
        clone(): _ICellRange;
    }
    class _CellRange implements _ICellRange {
        private _row;
        private _col;
        private _row2;
        private _col2;
        firstVisibleRow: number;
        visibleRowsCount: number;
        constructor(panel: _IGridPanel, cr: _ICellRange);
        constructor(panel: _IGridPanel, row: number, col: number, row2: number, col2: number);
        row: number;
        col: number;
        row2: number;
        col2: number;
        readonly topRow: number;
        readonly bottomRow: number;
        readonly leftCol: number;
        readonly rightCol: number;
        readonly rowSpan: number;
        readonly isValid: boolean;
        copyFrom(cr: _CellRange): void;
        clone(): _CellRange;
        getRenderSize(p: _IGridPanel): Size;
        setRange(r?: number, c?: number, r2?: number, c2?: number): void;
    }
}
declare module wijmo.grid.pdf {
    function _removeFakeCell(): void;
    /**
    * Provides a functionality to export the @see:FlexGrid to PDF.
    *
    * The example below shows how you can use a @see:FlexGridPdfConverter to
    * export a @see:FlexGrid to PDF:
    *
    * @fiddle:equxqkyt
    */
    class FlexGridPdfConverter {
        static _DefaultExportSettings: IFlexGridExportSettings;
        /**
        * Draws the @see:FlexGrid to an existing @see:PdfDocument at the
        * (0, @wijmo.pdf.PdfDocument.y) coordinates.
        *
        * If width is not specified, then grid will be rendered in actual size,
        * breaking into pages as needed. If height is not specified, then grid will be
        * scaled to fit the width, breaking into pages vertically as needed.
        * If both, width and height are determined, then grid will be scaled to fit
        * the specified rectangle without any page breaks.
        *
        * <pre>
        * var doc = new wijmo.pdf.PdfDocument({
        *    ended: function (sender, args) {
        *       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
        *    }
        * });
        *
        * wijmo.grid.pdf.FlexGridPdfConverter.draw(grid, doc, null, null, {
        *    maxPages: 10,
        *    styles: {
        *       cellStyle: {
        *          backgroundColor: '#ffffff',
        *          borderColor: '#c6c6c6'
        *       },
        *       headerCellStyle: {
        *          backgroundColor: '#eaeaea'
        *       }
        *    }
        * });
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param doc The @see:PdfDocument instance to draw in.
        * @param width The width of the drawing area in points.
        * @param height The height of the drawing area in points.
        * @param settings The draw settings.
        */
        static draw(flex: any, doc: wijmo.pdf.PdfDocument, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
        /**
        * Draws the @see:FlexGrid to an existing @see:PdfDocument instance at the
        * specified coordinates.
        *
        * If width is not specified, then grid will be rendered in actual size
        * without any page breaks.
        * If height is not specified, then grid will be scaled to fit the width
        * without any page breaks.
        * If both, width and height are determined, then grid will be scaled to fit
        * the specified rectangle without any page breaks.
        *
        * <pre>
        * var doc = new wijmo.pdf.PdfDocument({
        *    ended: function (sender, args) {
        *       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
        *    }
        * });
        *
        * wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition(grid, doc, new wijmo.Point(0, 0), null, null, {
        *    maxPages: 10,
        *    styles: {
        *       cellStyle: {
        *          backgroundColor: '#ffffff',
        *          borderColor: '#c6c6c6'
        *       },
        *       headerCellStyle: {
        *          backgroundColor: '#eaeaea'
        *       }
        *    }
        * });
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param doc The @see:PdfDocument instance to draw in.
        * @param point The position to draw at, in points.
        * @param width The width of the drawing area in points.
        * @param height The height of the drawing area in points.
        * @param settings The draw settings.
        */
        static drawToPosition(flex: any, doc: wijmo.pdf.PdfDocument, point: Point, width?: number, height?: number, settings?: IFlexGridDrawSettings): void;
        /**
        * Exports the @see:FlexGrid to PDF.
        *
        * <pre>
        * wijmo.grid.pdf.FlexGridPdfConverter.export(grid, 'FlexGrid.pdf', {
        *    scaleMode: wijmo.grid.pdf.ScaleMode.PageWidth,
        *    maxPages: 10,
        *    styles: {
        *       cellStyle: {
        *          backgroundColor: '#ffffff',
        *          borderColor: '#c6c6c6'
        *       },
        *       headerCellStyle: {
        *          backgroundColor: '#eaeaea'
        *       }
        *    },
        *    documentOptions: {
        *       info: {
        *          title: 'Sample'
        *       }
        *    }
        * });
        * </pre>
        *
        * @param flex The @see:FlexGrid instance to export.
        * @param fileName Name of the file to export.
        * @param settings The export settings.
        */
        static export(flex: FlexGrid, fileName: string, settings?: IFlexGridExportSettings): void;
        static _getFlexGridAdapter(flex: FlexGrid, settings: IFlexGridDrawSettings): _IFlexGridAdapter;
        static _applyDefaultExportSettings(settings: any): IFlexGridExportSettings;
    }
}
declare module wijmo.grid.pdf {
    /**
    * Represents a single item of the @see:IClientData dictionary.
    */
    interface IClientDataItem {
        /**
        * Gets or sets the content for the data item.
        */
        content: any;
        /**
        * Gets or sets the settings for the data item.
        */
        settings: any;
    }
    interface _IFlexGridClientDataItem extends IClientDataItem {
        content: _IFlexGridAdapter;
        settings: IFlexGridExportSettings;
        isGrid?: boolean;
        progressMessaging?: boolean;
    }
    /**
    * Represents a dictionary of {name: value} pairs which contains client data.
    */
    interface IClientData {
        [name: string]: IClientDataItem;
    }
    /**
     * Provides arguments for the callback parameter of the @see:PdfWebWorkerClient.exportGrid and @see:PdfWebWorkerClient.export methods.
     */
    class PdfWebWorkerExportDoneEventArgs extends EventArgs {
        private _blob;
        private _buf;
        /**
        * Initializes a new instance of the @see:PdfWebWorkerExportDoneEventArgs class.
        *
        * @param buffer An ArrayBuffer.
        */
        constructor(buffer: ArrayBuffer);
        /**
        * Gets a Blob object that contains the document data.
        */
        readonly blob: Blob;
        /**
        * Gets an ArrayBuffer that contains the document data.
        */
        readonly buffer: ArrayBuffer;
    }
    /**
     * Represents client-side methods for exporting FlexGrid to PDF/generating PDF, for use with Web Worker.
     */
    class PdfWebWorkerClient {
        /**
         * Exports the @see:FlexGrid to PDF in a background thread.
         *
         * @param worker The Web Worker instance to run the exporting code in.
         * @param grid The @see:FlexGrid instance to export.
         * @param fileName The name of the file to export.
         * @param settings The export settings.
         * @param done An optional callback function to call when exporting is done. The function takes a single parameter, an instance of the @see:PdfWebWorkerExportDoneEventArgs class.
         * @param progress An optional function that gives feedback about the progress of the export. The function takes a single parameter, a number changing from 0.0 to 1.0,
         * where the value of 0.0 indicates that the operation has just begun and the value of 1.0 indicates that the operation has completed.
         */
        static exportGrid(worker: Worker, grid: FlexGrid, fileName: string, settings: IFlexGridExportSettings, done?: Function, progress?: Function): void;
        /**
         * Exports PDF in a background thread.
         *
         * @param worker The Web Worker instance to run the exporting code in.
         * @param settings An object containing @see:PdfDocument's initialization settings.
         * @param done The callback function to call when drawing is done. The function takes a single parameter, an instance of the @see:PdfWebWorkerExportDoneEventArgs class.
         * @param progress An optional function that gives feedback about the progress of the export. The function takes a single parameter, a number changing from 0.0 to 1.0,
         * where the value of 0.0 indicates that the operation has just begun and the value of 1.0 indicates that the operation has completed.
         */
        static export(worker: Worker, settings: any, done: Function, progress?: Function): void;
        /**
         * Adds named FlexGrid with settings, which will be used in a Web Worker to generate a PDF document.
         * This method should be used in conjunction with the @see:PdfWebWorkerClient.export method.
         *
         * @param worker The Web Worker instance to send the data to.
         * @param grid The grid
         * @param name The name associated with the grid.
         * @param settings The draw settings.
         */
        static addGrid(worker: Worker, grid: FlexGrid, name: string, settings: IFlexGridDrawSettings): void;
        /**
         * Adds named image with settings, which will be used in a Web Worker to generate a PDF document.
         * This method should be used in conjunction with the @see:PdfWebWorkerClient.export method.
         *
         * @param worker The Web Worker instance to send the data to.
         * @param image A string containing the URL to get the image from or the data URI containing a base64 encoded image.
         * @param name The name associated with the image.
         * @param settings The image drawing settings.
         */
        static addImage(worker: Worker, image: string, name: string, settings: wijmo.pdf.IPdfImageDrawSettings): void;
        /**
         * Adds named string which will be used in a Web Worker code to generate a PDF document.
         * This method should be used in conjunction with the @see:PdfWebWorkerClient.export method.
         *
         * @param worker The Web Worker instance to send the data to.
         * @param value The value.
         * @param name The name associated with the string.
         */
        static addString(worker: Worker, value: string, name: string): void;
        /**
        * Serializes the @see:FlexGrid to ArrayBuffer. The serialized data can be send to a Web Worker using the postMessage method.
        *
        * @param grid The @see:FlexGrid instance to serialize.
        * @param settings The export settings used to serialize the grid.
        */
        static serializeGrid(grid: FlexGrid, settings?: IFlexGridExportSettings): ArrayBuffer;
        private static _addClientData(worker, value, name, settings, isGrid?);
        private static _clearClientData(worker);
        private static _clientDataToArrayBuffer(worker);
        private static _gridToJson(grid, settings?);
        private static _getJsonConverter(flex, settings);
    }
    /**
     * Represents server-side methods for exporting FlexGrid to PDF/generating PDF, for use with Web Worker.
     */
    class PdfWebWorker {
        /**
         * Performs the export started in a UI thread by calling the @see:PdfWebWorkerClient.exportGrid method.
         */
        static initExportGrid(): void;
        /**
         * Performs the PDF document generation started in a UI thread by calling the @see:PdfWebWorkerClient.export method.
         *
         * @param draw The callback function to draw PDF.
         * The function takes two parameters:
         * <ul>
         *     <li><b>doc</b>: An instance of the @see:wijmo.pdf.PdfDocument class.</li>
         *     <li><b>clientData</b>: A dictionary of {name: value} pairs that contains the data added on the client side.</li>
         * </ul>
         */
        static initExport(draw: Function): void;
        /**
         * Sends the progress value to a client, where it will be handled by the @see:PdfWebWorkerClient.export's progress callback function.
         * Should be used in conjunction with the @see:PdfWebWorkerClient.export method to inform client about the progress of the export.
         *
         * @param value The progress value, in the range of [0.0..1.0].
         */
        static sendExportProgress(value: number): void;
        /**
        * Deserializes the @see:FlexGrid from ArrayBuffer to its internal representation that can be used in a Web Worker and passed to the @see:FlexGridPdfConverter.draw and @see:FlexGridPdfConverter.drawToPosition methods.
        *
        * @param data The data to deserialize.
        * @param settings The draw settings used to deserialize the grid.
        */
        static deserializeGrid(data: ArrayBuffer, settings?: IFlexGridDrawSettings): any;
        private static _deserializeGridFromString(jsonStr, settings?);
        private static _disableUnsupportedFeatures(settings);
        private static _getJsonAdapter(json, settings);
    }
}


/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
/**
 * Defines navigation controls including the #see:TabPanel, @see:TreeView,
 * and associated classes.
 */
declare module wijmo.nav {
    /**
     * The @see:TreeView control displays a hierarchical list of @see:TreeNode
     * objects which may contain text, checkboxes, images, or arbitrary HTML
     * content.
     *
     * A @see:TreeView is typically used to display the headings in a document,
     * the entries in an index, the files and directories on a disk, or any other
     * kind of information that might usefully be displayed as a hierarchy.
     *
     * After creating a @see:TreeView, you will typically set the following
     * properties:
     *
     * <ol>
     *  <li>
     *      @see:itemsSource: an array that contains the data to be displayed on the
     *      tree.</li>
     *  <li>
     *      @see:displayMemberPath: the name of the data item property that contains
     *      the text to display on the nodes (defaults to 'header'), and</li>
     *  <li>
     *      @see:childItemsPath: the name of the data item property that contains the
     *      node's child items (defaults to 'items').</li>
     * </ol>
     *
     * The @see:TreeView control supports the following keyboard commands:
     *
     * <table>
     *   <thead>
     *     <tr><th>Key Combination</th><th>Action</th></tr>
     *   </thead>
     *   <tbody>
     *     <tr><td>Up/Down</td><td>Select the previous/next visible node</td></tr>
     *     <tr><td>Left</td><td>Collapse the selected node if it has child nodes, select the parent node otherwise</td></tr>
     *     <tr><td>Right</td><td>Expand the selected node if it has child nodes</td></tr>
     *     <tr><td>Home/End</td><td>Select the first/last visible nodes</td></tr>
     *     <tr><td>Space</td><td>Toggle the checkbox in the current node (see the @see:showCheckboxes property)</td></tr>
     *     <tr><td>Other characters</td><td>Search for nodes that contain the text typed (multi-character auto-search)</td></tr>
     *   </tbody>
     * </table>
     *
     * The example below builds a simple tree and allows you to see the effect
     * of the TreeView's main properties:
     *
     * @fiddle:egmg93wc
     */
    class TreeView extends Control {
        static _DATAITEM_KEY: string;
        static _AS_DLY: number;
        static _AN_DLY: number;
        static _CND: string;
        static _CNDL: string;
        static _CEMP: string;
        static _CNDT: string;
        static _CNDC: string;
        static _CSEL: string;
        static _CCLD: string;
        static _CCLG: string;
        static _CLDG: string;
        _root: HTMLElement;
        private _items;
        _selNode: TreeNode;
        _itmPath: _BindingArray;
        private _prevSel;
        private _dspPath;
        private _imgPath;
        private _dd;
        private _html;
        private _animated;
        private _xpndOnClick;
        private _autoColl;
        private _showChk;
        private _chkItems;
        private _ldLvl;
        private _srch;
        private _toSrch;
        private _dnIndet;
        private _lazyLoad;
        private _isDirty;
        private _isReadOnly;
        private _edtNode;
        private _toItemsChanged;
        /**
         * Gets or sets the template used to instantiate @see:TreeView controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:TreeView class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         */
        constructor(element: any, options?: any);
        /**
         * Gets or sets the array that contains the @see:TreeView items.
         *
         * @see:TreeView #see:itemsSource arrays usually have a hierarchical
         * structure with items that contain child items. There is no fixed
         * limit to the depth of the items.
         *
         * For example, the array below would generate a tree with three
         * top-level nodes, each with two child nodes:
         *
         * <pre>var tree = new wijmo.input.TreeView('#treeView', {
         *     displayMemberPath: 'header',
         *     childItemsPath: 'items',
         *     itemsSource: [
         *         { header: '1 first', items: [
         *             { header: '1.1 first child' },
         *             { header: '1.2 second child' },
         *         ] },
         *         { header: '2 second', items: [
         *             { header: '3.1 first child' },
         *             { header: '3.2 second child' },
         *         ] },
         *         { header: '3 third', items: [
         *             { header: '3.1 first child' },
         *             { header: '3.2 second child' },
         *         ] }
         *     ]
         * });</pre>
         */
        itemsSource: any[];
        /**
         * Gets or sets the name of the property (or properties) that contains
         * the child items for each node.
         *
         * The default value for this property is the string 'items'.
         *
         * In most cases, the property that contains the child items is the
         * same for all data items on the tree. In these cases, set the
         * @see:childItemsPath to that name.
         *
         * In some cases, however, items at different levels use different
         * properties to store their child items. For example, you could have
         * a tree with categories, products, and orders. In that case, you
         * would set the @see:childItemsPath to an array such as this:
         *
         * <pre>// categories have products, products have orders:
         * tree.childItemsPath = [ 'Products', 'Orders' ];</pre>
         */
        childItemsPath: any;
        /**
         * Gets or sets the name of the property (or properties) to use as
         * the visual representation of the nodes.
         *
         * The default value for this property is the string 'header'.
         *
         * In most cases, the property that contains the node text is the
         * same for all data items on the tree. In these cases, set the
         * @see:displayMemberPath to that name.
         *
         * In some cases, however, items at different levels use different
         * properties to represent them. For example, you could have
         * a tree with categories, products, and orders. In that case, you
         * might set the @see:displayMemberPath to an array such as this:
         *
         * <pre>// categories, products, and orders have different headers:
         * tree.displayMemberPath = [ 'CategoryName', 'ProductName', 'OrderID' ];</pre>
         */
        displayMemberPath: any;
        /**
         * Gets or sets the name of the property (or properties) to use as a
         * source of images for the nodes.
         */
        imageMemberPath: any;
        /**
         * Gets or sets a value indicating whether items are bound to plain text or HTML.
         *
         * The default value for this property is <b>false</b>.
         */
        isContentHtml: boolean;
        /**
         * Gets or sets a value that determines whether the @see:TreeView should
         * add checkboxes to nodes and manage their state.
         *
         * This property can be used only on trees without lazy-loaded nodes
         * (see the @see:lazyLoadFunction property).
         *
         * See also the @see:checkedItems property and @see:checkedItemsChanged
         * event.
         *
         * The default value for this property is <b>false</b>.
         */
        showCheckboxes: boolean;
        /**
         * Gets or sets a value that determines if sibling nodes should be collapsed
         * when a node is expanded.
         *
         * The default value for this property is <b>true</b>, because in most cases
         * collapsing nodes that are not in use helps keep the UI clear.
         */
        autoCollapse: boolean;
        /**
         * Gets or sets a value that indicates whether to use animations when expanding
         * or collapsing nodes.
         *
         * The default value for this property is <b>true</b>.
         */
        isAnimated: boolean;
        /**
         * Gets or sets a value that determines whether users can edit the text in the
         * nodes.
         *
         * When the @see:isReadOnly property is set to false, users may edit the content
         * of the tree nodes by typing directly into the nodes. The F2 key can also
         * be used to enter edit mode with the whole node content selected.
         *
         * You may customize the editing behavior using the following methods and events:
         *
         * Methods: @see:startEditing, @see:finishEditing.
         *
         * Events: @see:nodeEditStarting, @see:nodeEditStarted, @see:nodeEditEnding,
         * @see:nodeEditEnded.
         *
         * The default value for this property is <b>true</b>.
         */
        isReadOnly: boolean;
        /**
         * Starts editing a given @see:TreeNode.
         *
         * @param node @see:TreeNode to edit. If not provided, the currently
         * selected node is used.
         *
         * @return True if the edit operation started successfully.
         */
        startEditing(node?: TreeNode): boolean;
        /**
         * Commits any pending edits and exits edit mode.
         *
         * @param cancel Whether pending edits should be canceled or committed.
         * @return True if the edit operation finished successfully.
         */
        finishEditing(cancel?: boolean): boolean;
        /**
         * Gets or sets a value that determines whether users can drag and drop nodes
         * within the @see:TreeView.
         */
        allowDragging: boolean;
        /**
         * Gets or sets a value that determines whether to expand collapsed nodes when
         * the user clicks the node header.
         */
        expandOnClick: boolean;
        /**
         * Gets or sets the data item that is currently selected.
         */
        selectedItem: any;
        /**
         * Gets or sets the @see:TreeNode that is currently selected.
         */
        selectedNode: TreeNode;
        /**
         * Gets an array containing the text of all nodes from the root
         * to the currently selected node.
         */
        readonly selectedPath: string[];
        /**
         * Gets an array containing the items that are currently checked.
         *
         * The array returned includes only items that have no children.
         * This is because checkboxes in parent items are used to check
         * or uncheck the child items.
         *
         * See also the @see:showCheckboxes property and the
         * @see:checkedItemsChanged property.
         *
         * For example:
         *
         * <pre>var treeViewChk = new wijmo.input.TreeView('#gsTreeViewChk', {
         *    displayMemberPath: 'header',
         *    childItemsPath: 'items',
         *    showCheckboxes: true,
         *    itemsSource: items,
         *    checkedItemsChanged: function (s, e) {
         *        var items = s.checkedItems,
         *            msg = '';
         *        if (items.length) {
         *            msg = '&lt;p&gt;&lt;b&gt;Selected Items:&lt;/b&gt;&lt;/p&gt;&lt;ol&gt;\r\n';
         *            for (var i = 0; i &lt; items.length; i++) {
         *                msg += '&lt;li&gt;' + items[i].header + '&lt;/li&gt;\r\n';
         *            }
         *            msg += '&lt;/ol&gt;';
         *        }
         *        document.getElementById('gsTreeViewChkStatus').innerHTML = msg;
         *    }
         * });</pre>
         */
        checkedItems: any[];
        /**
         * Checks or unchecks all checkboxes on the tree.
         *
         * @param check Whether to check or unckeck all checkboxes.
         */
        checkAllItems(check: boolean): void;
        /**
         * Gets the total number of items in the tree.
         */
        readonly totalItemCount: number;
        /**
         * Gets or sets a function that loads child nodes on demand.
         *
         * The @see:lazyLoadFunction takes two parameters: the node being
         * expanded and a callback to be invoked when the data becomes
         * available.
         *
         * The callback function tells the @see:TreeView that the node
         * loading process has been completed. It should always be called,
         * even if there are errors when loading the data.
         *
         * For example:
         *
         *<pre>var treeViewLazyLoad = new wijmo.input.TreeView('#treeViewLazyLoad', {
         *    displayMemberPath: 'header',
         *    childItemsPath: 'items',
         *    itemsSource: [ // start with three lazy-loaded nodes
         *        { header: 'Lazy Node 1', items: []},
         *        { header: 'Lazy Node 2', items: [] },
         *        { header: 'Lazy Node 3', items: [] }
         *    ],
         *    lazyLoadFunction: function (node, callback) {
         *        setTimeout(function () { // simulate http delay
         *            var result = [ // simulate result
         *                { header: 'Another lazy node...', items: [] },
         *                { header: 'A non-lazy node without children' },
         *                { header: 'A non-lazy node with child nodes', items: [
         *                  { header: 'hello' },
         *                  { header: 'world' }
         *                ]}
         *            ];
         *            callback(result); // return result to control
         *        }, 2500); // simulated 2.5 sec http delay
         *    }
         *});</pre>
         *
         * Trees with lazy-loaded nodes have some restrictions: their nodes
         * may not have checkboxes (see the @see:showCheckboxes property) and
         * the @see:collapseToLevel method will not expand collapsed nodes
         * that have not been loaded yet.
         */
        lazyLoadFunction: Function;
        /**
         * Gets a reference to the first @see:TreeNode in the @see:TreeView.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        getFirstNode(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets a reference to the last @see:TreeNode in the @see:TreeView.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        getLastNode(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets an array of @see:TreeNode objects representing the nodes
         * currently loaded.
         */
        readonly nodes: TreeNode[];
        /**
         * Gets the @see:TreeNode object representing a given data item.
         *
         * @param item The data item to look for.
         */
        getNode(item: any): TreeNode;
        /**
         * Adds a child node at a specific position.
         *
         * @param index Index of the new child node.
         * @param dataItem Data item used to create the new node.
         * @return The @see:TreeNode that was added.
         */
        addChildNode(index: number, dataItem: any): TreeNode;
        /**
         * Collapses all the tree items to a given level.
         *
         * This method will typically expand or collapse multiple nodes
         * at once. But it will not perform lazy-loading on any nodes,
         * so collapsed nodes that must be lazy-loaded will not be
         * expanded.
         *
         * @param level Maximum node level to show.
         */
        collapseToLevel(level: number): void;
        /**
         * Loads the tree using data from the current @see:itemsSource.
         *
         * @param preserveOutlineState Whether to preserve the outline state when loading the
         * tree data. Defaults to false.
         */
        loadTree(preserveOutlineState?: boolean): void;
        /**
         * Occurs when the value of the @see:itemsSource property changes.
         */
        readonly itemsSourceChanged: Event;
        /**
         * Raises the @see:itemsSourceChanged event.
         */
        onItemsSourceChanged(e?: EventArgs): void;
        /**
         * Occurs before the tree items are generated.
         */
        readonly loadingItems: Event;
        /**
         * Raises the @see:loadingItems event.
         * @return True if the event was not canceled.
         */
        onLoadingItems(e?: CancelEventArgs): boolean;
        /**
         * Occurs after the tree items have been generated.
         */
        readonly loadedItems: Event;
        /**
         * Raises the @see:loadedItems event.
         */
        onLoadedItems(e?: EventArgs): void;
        /**
         * Occurs when the user clicks an item or presses the Enter key and an item is selected.
         *
         * This event is typically used in navigation trees. Use the @see:selectedItem property
         * to get the item that was clicked.
         */
        readonly itemClicked: Event;
        /**
         * Raises the @see:itemClicked event.
         */
        onItemClicked(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:selectedItem property changes.
         */
        readonly selectedItemChanged: Event;
        /**
         * Raises the @see:selectedItemChanged event.
         */
        onSelectedItemChanged(e?: EventArgs): void;
        /**
         * Occurs when the value of the @see:checkedItems property changes.
         */
        readonly checkedItemsChanged: Event;
        /**
         * Raises the @see:checkedItemsChanged event.
         */
        onCheckedItemsChanged(e?: EventArgs): void;
        /**
         * Occurs before the value of the @see:TreeNode.isCollapsed property changes.
         */
        readonly isCollapsedChanging: Event;
        /**
         * Raises the @see:isCollapsedChanging event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onIsCollapsedChanging(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after the value of the @see:TreeNode.isCollapsed property changes.
         */
        readonly isCollapsedChanged: Event;
        /**
         * Raises the @see:isCollapsedChanged event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         */
        onIsCollapsedChanged(e: TreeNodeEventArgs): void;
        /**
         * Occurs before the value of the @see:TreeNode.isChecked property changes.
         */
        readonly isCheckedChanging: Event;
        /**
         * Raises the @see:isCheckedChanging event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onIsCheckedChanging(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after the value of the @see:TreeNode.isChecked property changes.
         */
        readonly isCheckedChanged: Event;
        /**
         * Raises the @see:isCheckedChanged event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         */
        onIsCheckedChanged(e: TreeNodeEventArgs): void;
        /**
         * Occurs when an element representing a node has been created.
         *
         * This event can be used to format nodes for display.
         *
         * The example below uses the <b>formatItem</b> event to add a "new" badge to the
         * right of new items on the tree.
         *
         * <pre>var treeViewFmtItem = new wijmo.input.TreeView('#treeViewFmtItem', {
         *     displayMemberPath: 'header',
         *     childItemsPath: 'items',
         *     itemsSource: items,
         *     formatItem: function (s, e) {
         *         if (e.dataItem.newItem) {
         *             e.element.innerHTML +=
         *                 '&lt;img style="margin-left:6px" src="resources/new.png"/&gt;';
         *         }
         *     }
         * });</pre>
         */
        readonly formatItem: Event;
        /**
         * Raises the @see:formatItem event.
         *
         * @param e @see:FormatNodeEventArgs that contains the event data.
         */
        onFormatItem(e: FormatNodeEventArgs): void;
        /**
         * Occurs when the user starts dragging a node.
         *
         * This event only occurs if the @see:allowDragging property is set to true.
         *
         * You may prevent nodes from being dragged by setting the event's
         * <b>cancel</b> parameter to true.
         */
        readonly dragStart: Event;
        /**
         * Raises the @see:dragStart event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDragStart(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs while the user drags a node over other nodes on the @see:TreeView.
         *
         * This event only occurs if the @see:allowDragging property is set to true.
         *
         * You may prevent drop operations over certain nodes and/or positions by
         * setting the event's <b>cancel</b> parameter to true.
         */
        readonly dragOver: Event;
        /**
         * Raises the @see:dragOver event.
         *
         * @param e @see:TreeNodeDragDropEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onDragOver(e: TreeNodeDragDropEventArgs): boolean;
        /**
         * Occurs when the user drops a on the @see:TreeView.
         * @return True if the event was not canceled.
         */
        readonly drop: Event;
        /**
         * Raises the @see:drop event.
         *
         * @param e @see:TreeNodeDragDropEventArgs that contains the event data.
         */
        onDrop(e: TreeNodeDragDropEventArgs): boolean;
        /**
         * Occurs when the user finishes a drag/drop operation, either by dropping
         * a node into a new location or by canceling the operation with the mouse
         * or keyboard.
         */
        readonly dragEnd: Event;
        /**
         * Raises the @see:dragEnd event.
         */
        onDragEnd(e?: EventArgs): void;
        /**
         * Occurs before a @see:TreeNode enters edit mode.
         */
        readonly nodeEditStarting: Event;
        /**
         * Raises the @see:nodeEditStarting event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
        */
        onNodeEditStarting(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after a @see:TreeNode has entered edit mode.
         */
        readonly nodeEditStarted: Event;
        /**
         * Raises the @see:nodeEditStarted event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         */
        onNodeEditStarted(e: TreeNodeEventArgs): void;
        /**
         * Occurs before a @see:TreeNode exits edit mode.
         */
        readonly nodeEditEnding: Event;
        /**
         * Raises the @see:nodeEditEnding event.
         *
         * @param e @see:TreeNodeEventArgs that contains the event data.
         * @return True if the event was not canceled.
         */
        onNodeEditEnding(e: TreeNodeEventArgs): boolean;
        /**
         * Occurs after a @see:TreeNode has exited edit mode.
         */
        readonly nodeEditEnded: Event;
        /**
        * Raises the @see:nodeEditEnded event.
        *
        * @param e @see:TreeNodeEventArgs that contains the event data.
        */
        onNodeEditEnded(e: TreeNodeEventArgs): void;
        /**
         * Overridden to re-populate the tree.
         *
         * @param fullUpdate Indicates whether to update the control layout as well as the content.
         */
        refresh(fullUpdate?: boolean): void;
        _updateFocus(oldNode: TreeNode): void;
        _raiseCheckedItemsChanged(): void;
        _reload(): void;
        _createNode(dataItem: any): TreeNode;
        private _mousedown(e);
        private _click(e);
        private _keydown(e);
        private _keypress(e);
        private _findNext();
        private _loadTree(preserveOutlineState?);
        private _addItem(host, level, item);
        private _collapseToLevel(nodes, maxLevel, currentLevel);
        _lazyLoadNode(node: TreeNode): void;
        private _lazyLoadCallback(result);
        private _lazyLoadNodeDone(node, result);
    }
}

declare module wijmo.nav {
    /**
     * Class that represents a node in a @see:TreeView.
     */
    class TreeNode {
        _t: TreeView;
        _e: HTMLElement;
        /**
         * Initializes a new instance of a @see:TreeNode.
         *
         * @param treeView @see:TreeView that contains the node.
         * @param nodeElement HTML element that represents the node on the @see:TreeView.
         */
        constructor(treeView: TreeView, nodeElement: HTMLElement);
        /**
         * Gets the data item that this node represents.
         */
        readonly dataItem: any;
        /**
         * Gets the HTML element that represents this node on the @see:TreeView.
         */
        readonly element: HTMLElement;
        /**
         * Gets a reference to the @see:TreeView that contains this node.
         */
        readonly treeView: TreeView;
        /**
         * Ensures that a node is visible by expanding any collapsed
         * ancestors and scrolling the element into view.
         */
        ensureVisible(): void;
        /**
         * Checks whether this node refers to the same element as another node.
         *
         * @param node @TreeNode to compare with this one.
         */
        equals(node: TreeNode): boolean;
        /**
         * Selects this node.
         */
        select(): void;
        /**
         * Gets this node's index within the parent's node collection.
         */
        readonly index: number;
        /**
         * Gets this node's parent node.
         *
         * This property returns null for top-level nodes.
         */
        readonly parentNode: TreeNode;
        /**
         * Gets this node's level.
         *
         * Top-level nodes have level zero.
         */
        readonly level: number;
        /**
         * Gets a value that indicates whether this node has child nodes.
         */
        readonly hasChildren: boolean;
        /**
         * Gets a value that indicates whether this node has pending child nodes
         * that will be lazy-loaded when the node is expanded.
         */
        readonly hasPendingChildren: boolean;
        /**
         * Gets an array containing this node's child nodes.
         *
         * This property returns null if the node has no children.
         */
        readonly nodes: TreeNode[];
        /**
         * Gets the HTMLInputElement that represents the checkbox associated
         * with this node.
         */
        readonly checkBox: HTMLInputElement;
        /**
         * Gets or sets a value that determines whether this node is expanded or collapsed.
         */
        isCollapsed: boolean;
        /**
         * Gets or sets a value that determines whether this node is checked.
         *
         * When the value of this property changes, child and ancestor nodes
         * are automatically updated, and the parent @see:TreeView's
         * @see:TreeView.checkedItemsChanged event is raised.
         */
        isChecked: boolean;
        /**
         * Gets or sets a value that determines whether this node is disabled.
         *
         * Disabled nodes cannot get mouse or keyboard events.
         */
        isDisabled: boolean;
        /**
         * Gets a reference to the previous node in the view.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        previous(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets a reference to the next node in the view.
         *
         * @param visible Whether to return only visible nodes (whose ancestors are not collapsed).
         * @param enabled Whether to return only enabled nodes (whose ancestors are not disabled).
         */
        next(visible?: boolean, enabled?: boolean): TreeNode;
        /**
         * Gets a reference to the previous sibling node in the view.
         */
        previousSibling(): TreeNode;
        /**
         * Gets a reference to the next sibling node in the view.
         */
        nextSibling(): TreeNode;
        /**
         * Sets the collapsed state of the node.
         *
         * @param collapsed Whether to collapse or expand the node.
         * @param animate Whether to use animation when applying the new state.
         * @param collapseSiblings Whether to collapse sibling nodes when expanding
         * this node.
         */
        setCollapsed(collapsed: boolean, animate?: boolean, collapseSiblings?: boolean): void;
        /**
         * Sets the checked state of this node and its children.
         *
         * @param checked Whether to check or uncheck the node and its children.
         * @param updateParent Whether to update the checked state of this node's
         * ancestor nodes.
         */
        setChecked(checked: boolean, updateParent?: boolean): void;
        /**
         * Removes this @see:TreeNode from a @see:TreeView.
         */
        remove(): void;
        /**
         * Adds a child node at a specific position.
         *
         * @param index Index of the new child node.
         * @param dataItem Data item used to create the new node.
         * @return The @see:TreeNode that was added.
         */
        addChildNode(index: number, dataItem: any): TreeNode;
        /**
         * Refreshes a node to reflect data changes.
         *
         * @param dataItem New node data. This parameter is optional.
         * If not provided, the node will be refreshed based on its
         * original data item (which presumably has been updated).
         */
        refresh(dataItem?: any): void;
        /**
         * Moves this @see:TreeNode to a new position on the @see:TreeView.
         *
         * @param refNode Reference @see:TreeNode that defines the location
         * where the node will be moved.
         * @param position Whether to move the node before, after, or into
         * the reference node.
         * @return True if the node was moved successfully.
         */
        move(refNode: any, position: DropPosition): boolean;
        /**
         * Gets the array that contains the items for this @see:TreeNode.
         *
         * This property is read-only. It returns an array that is a
         * member of the parent @see:TreeView's @see:TreeView.itemsSource array.
         */
        readonly itemsSource: any[];
        _pse(e: HTMLElement): HTMLElement;
        _contains(node: TreeNode): boolean;
        _getArray(): any[];
        _moveElements(refNode: any, position: DropPosition): void;
        _updateState(): void;
        _updateEmptyState(): void;
        _updateCheckedState(): void;
        static _getChildNodes(treeView: TreeView, nodeList: HTMLElement): TreeNode[];
        static _isNode(e: HTMLElement): boolean;
        static _isNodeList(e: HTMLElement): boolean;
        static _isEmpty(node: HTMLElement): boolean;
        static _isCollapsed(node: HTMLElement): boolean;
        static _assertNode(node: HTMLElement): void;
        static _assertNodeList(nodeList: HTMLElement): void;
    }
}

declare module wijmo.nav {
    /**
     * Provides arguments for the @see:TreeView.formatItem event.
     */
    class FormatNodeEventArgs extends EventArgs {
        _data: any;
        _e: HTMLElement;
        _level: number;
        /**
         * Initializes a new instance of the @see:FormatNodeEventArgs class.
         *
         * @param dataItem Data item represented by the node.
         * @param element Element that represents the node being formatted.
         * @param level The outline level of the node being formatted.
         */
        constructor(dataItem: any, element: HTMLElement, level: number);
        /**
         * Gets the data item being formatted.
         */
        readonly dataItem: any;
        /**
         * Gets a reference to the element that represents the node being formatted.
         */
        readonly element: HTMLElement;
        /**
         * Gets the outline level of the node being formatted.
         */
        readonly level: number;
    }
    /**
     * Provides arguments for @see:TreeNode-related events.
     */
    class TreeNodeEventArgs extends CancelEventArgs {
        _node: TreeNode;
        /**
         * Initializes a new instance of the @see:TreeNodeEventArgs class.
         *
         * @param node @see:TreeNode that this event refers to.
         */
        constructor(node: TreeNode);
        /**
         * Gets the @see:TreeNode that this event refers to.
         */
        readonly node: TreeNode;
    }
    /**
     * Provides arguments for @see:TreeNode drag-drop events.
     */
    class TreeNodeDragDropEventArgs extends CancelEventArgs {
        _src: TreeNode;
        _tgt: TreeNode;
        _pos: DropPosition;
        /**
         * Initializes a new instance of the @see:TreeNodeEventArgs class.
         *
         * @param dragSource @see:TreeNode being dragged.
         * @param dropTarget @see:TreeNode where the source is being dropped.
         * @param position @see:DropPosition that this event refers to.
         */
        constructor(dragSource: TreeNode, dropTarget: TreeNode, position: DropPosition);
        /**
         * Gets a reference to the @see:TreeNode being dragged.
         */
        readonly dragSource: TreeNode;
        /**
         * Gets a reference to the current @see:TreeNode target.
         */
        readonly dropTarget: TreeNode;
        /**
         * Gets or sets the @see:DropPosition value that specifies where
         * the @see:TreeNode will be dropped.
         */
        position: DropPosition;
    }
    /**
     * Specifies the position where a @see:TreeNode is being dropped during
     * a drag and drop operation.
     */
    enum DropPosition {
        /** The node will become the previous sibling of the target node. */
        Before = 0,
        /** The node will become the next sibling of the target node. */
        After = 1,
        /** The node will become the last child of the target node. */
        Into = 2,
    }
}

declare module wijmo.nav {
    /**
     * Class that handles drag/drop operations for a @see:TreeView.
     */
    class _TreeDragDropManager {
        private _tree;
        private _dragstartBnd;
        private _dragoverBnd;
        private _dragendBnd;
        private _dropBnd;
        private static _dMarker;
        private static _drgSrc;
        /**
         * Initializes a new instance of a @see:_TreeViewDragDropManager.
         *
         * @param treeView @see:TreeView managed by this @see:_TreeViewDragDropManager.
         */
        constructor(treeView: TreeView);
        /**
         * Disposes of this @see:_TreeViewDragDropManager
         */
        dispose(): void;
        private _dragstart(e);
        private _dragover(e);
        private _drop(e);
        private _dragend(e);
        private _keydown(e);
        private _handleDragDrop(e, drop);
        private _showDragMarker(rc?, pos?);
    }
}

declare module wijmo.nav {
    /**
     * Class that handles hierarchical (multi-level) bindings.
     */
    class _BindingArray {
        _path: any;
        _bindings: Binding[];
        _maxLevel: number;
        /**
         * Initializes a new instance of a _BindingArray.
         *
         * @param path String or array of strings to create bindings from.
         */
        constructor(path?: any);
        /**
         * Gets or sets the names of the properties used for binding.
         */
        path: any;
        /**
         * Gets the binding value for a given data item at a given level.
         *
         * @param dataItem Object that contains the data.
         * @param level Binding level to use for retrieving the data.
         */
        getValue(dataItem: any, level: number): any;
        /**
         * Sets the binding value on a given data item at a given level.
         *
         * @param dataItem Object that contains the data.
         * @param level Binding level to use for retrieving the data.
         * @param value Value to apply to the data item.
         */
        setValue(dataItem: any, level: number, value: any): void;
    }
}

declare module wijmo.nav {
    /**
     * The @see:TabPanel enables content organization at a high level,
     * such as switching between views, data sets, or functional aspects
     * of an application.
     *
     * Tabs are presented as a single row above their associated content.
     * Tab headers succinctly describe the content within.
     *
     * Tabs can be selected with the mouse or keyboard, and automatically
     * update the content to reflect the current selection.
     *
     * The example below shows how you can use a @see:TabPanel to organize
     * content into pages:
     *
     * @fiddle:17tmuomr
     */
    class TabPanel extends Control {
        private _tabs;
        private _selectedIndex;
        private _toAnim;
        private _animated;
        private _autoSwitch;
        private _dRoot;
        private _dTabHeaders;
        private _dTabPanes;
        /**
         * Gets or sets the template used to instantiate @see:TabPanel controls.
         */
        static controlTemplate: string;
        /**
         * Initializes a new instance of the @see:TabPanel class.
         *
         * @param element The DOM element that hosts the control, or a CSS selector for the host element (e.g. '#theCtrl').
         * @param options The JavaScript object containing initialization data for the control.
         * @param keepChildren Whether to keep child elements. If set to true, the caller becomes responsible for
         * populating the @see:tabs array based on the DOM).
         */
        constructor(element: any, options?: any, keepChildren?: boolean);
        /**
         * Gets an array of @see:Tab objects whose @see:Tab.header and
         * @see:Tab.pane properties determine the content of the
         * @see:TabPanel control.
         */
        readonly tabs: collections.ObservableArray;
        /**
         * Gets or sets the index of the currently selected (active) tab.
         */
        selectedIndex: number;
        /**
         * Gets or sets the @see:Tab object that is currently selected.
         */
        selectedTab: Tab;
        /**
         * Gets or sets a value that determines whether tab changes should be animated
         * with a fade-in effect.
         *
         * The default value for this property is <b>true</b>.
         */
        isAnimated: boolean;
        /**
         * Gets or sets a value that determines whether the control should switch
         * tabs automatically when the user selects a tab using the arrow keys.
         *
         * When @see:autoSwitch is set to true (the default value), pressing the
         * arrow keys automatically switches tabs. Pressing the tab key selects
         * the next element in the tab sequence, which excludes non-selected
         * tab headers.
         *
         * When @see:autoSwitch is set to false, pressing the arrow keys or the
         * tab key moves the focus to the next or previous tab header, but does
         * not switch tabs. Pressing the Enter or Space keys is required to
         * activate the tab that has the focus.
         *
         * In most cases, the default value provides adequate (accessible)
         * behavior, but some users may prefer to set @see:autoSwitch to false.
         * For a more detailed discussion of this topic, please see the
         * <a href="https://www.w3.org/TR/wai-aria-practices/#kbd_selection_follows_focus" target="_blank">W3C ARIA practices</a>
         * and
         * <a href="http://simplyaccessible.com/article/danger-aria-tabs/" target="_blank">SimplyAccessible</a> articles.
         */
        autoSwitch: boolean;
        /**
         * Gets a @see:Tab by id or by header content.
         *
         * @param id Id of the @see:Tab to retrieve.
         */
        getTab(id: string): Tab;
        /**
         * Occurs when the value of the @see:selectedIndex property changes.
         */
        readonly selectedIndexChanged: Event;
        /**
         * Raises the @see:selectedIndexChanged event.
         */
        onSelectedIndexChanged(e?: EventArgs): void;
        _populateControl(): void;
        _validateSelection(): void;
        private _updateContent();
        private _removeChildren(e);
        private _click(e);
        private _keydown(e);
        private _getTabIndex(e);
        private _getNextIndex(index, step);
    }
    /**
     * Represents a tab within a @see:TabPanel control.
     *
     * Tabs have two elements: a header and a pane. The header displays
     * the tab title and the pane represents the tab content.
     */
    class Tab {
        private _hdr;
        private _pane;
        private _p;
        /**
         * Initializes a new instance of the @see:Tab class.
         *
         * @param header Element or CSS selector for the element that contains the Tab header.
         * @param pane Element or CSS selector for the element that contains the Tab content.
         */
        constructor(header: any, pane: any);
        /**
         * Gets a reference to the @see:TabPanel that contains this Tab.
         */
        readonly tabPanel: TabPanel;
        /**
         * Gets the tab's header element.
         */
        readonly header: HTMLElement;
        /**
         * Gets the tab's content element.
         */
        readonly pane: HTMLElement;
        /**
         * Gets or sets a value that determines whether this @see:Tab is disabled.
         */
        isDisabled: boolean;
        /**
         * Gets or sets a value that determines whether this @see:Tab is visible.
         */
        isVisible: boolean;
        _setParts(header: HTMLElement, pane: HTMLElement): void;
        _setPanel(panel: TabPanel): void;
    }
}


/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.d.ts" />
/**
 * Defines the C1 controls, associated functions and classes.
 */
declare module c1 {
    /**
     * Gets the extender with specified owner and id.
     *
     * @param owner The @see:wijmo.Control who has the extender.
     * @param id The extender's id.
     */
    function getExtender(owner: wijmo.Control, id: string): Object;
    /**
     * Gets the extenders with specified owner and type.
     *
     * For example, below code is used for getting all LineMarker extenders
     * from the chart1 which is an instance of FlexChart.
     * <pre>
     * var lineMarkers = c1.getExtenders(chart1, wijmo.chart.LineMarker);
     * </pre>
     *
     * Note: if type is not passed, this returns all extenders under the owner.
     *
     * @param owner The @see:wijmo.Control who has the extender.
     * @param type The extender's type. It is optional.
     */
    function getExtenders(owner: wijmo.Control, type?: any): Object[];
    function _addExtender(owner: wijmo.Control, id: string, extender: Object): void;
    function _addEvent(prop: any, value: any): boolean;
    function _findFunction(name: string): Window;
    /**
     * Specify a function to execute when the DOM is fully loaded.
     *
     * @param callback A function to execute after the DOM is ready.
     */
    function documentReady(callback: Function): void;
    function _getExtension(owner: wijmo.Control, extensionType: any): any;
    class _Initializer {
        private _control;
        constructor(control: Object);
        readonly control: Object;
        _override(): void;
        private static _overrideCopy(control);
    }
    class _ControlWrapper {
        private _control;
        static _DATA_KEY: string;
        constructor(element: any, options?: any);
        _beforeCreateControl(options?: any): void;
        private _createControl(element);
        private _bindControl();
        static setWrapper(control: wijmo.Control, wrapper: _ControlWrapper): void;
        static getWrapper(control: wijmo.Control): _ControlWrapper;
        private _initExtensions();
        initialize(): void;
        _getExtensionTypes(): any[];
        readonly _initializerType: any;
        readonly _controlType: any;
        readonly control: wijmo.Control;
    }
}

declare module c1 {
    function _registerService(key: string, serviceCtor?: any, opts?: any): any;
    function _disposeService(key: string): void;
    /**
     * Gets the service instance according to the specified key.
     * Till now two kinds of services could be returned:
     * @see:c1.mvc.collections.RemoteCollectionView and @see:wijmo.olap.PivotEngine.
     *
     * For example:
     *
     * <pre>// gets the CollectionView object which id is 'collectionview1'.
     * var cv = c1.getService('collectionview1');
     * </pre>
     *
     * @param id The service id.
     * @return A service object with the specified id.
     */
    function getService(id: string): Object;
}

/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.d.ts" />
/**
 * Defines common types in c1.mvc module.
 */
declare module c1.mvc {
    /**
         * Specifies whether a Date object represents a local time, a Coordinated
         * Universal Time (UTC), or is not specified as either local time or UTC.
         */
    enum DateKind {
        /** The time represented is not specified as either local time or Coordinated Universal Time (UTC). */
        Unspecified = 1,
        /** The time represented is local time. */
        Local = 2,
        /** The time represented is UTC. */
        Utc = 3,
    }
    /**
     * Provides arguments for json operation events.
     */
    class JSONOperationEventArgs extends wijmo.CancelEventArgs {
        private _parent;
        private _key;
        private _value;
        private _result;
        /**
         * Casts the specified object to @see:c1.mvc.JSONOperationEventArgs type.
         * @param obj The object to cast.
         * @return The object passed in.
         */
        static cast(obj: any): JSONOperationEventArgs;
        /**
         * Initializes a new instance of the @see:JSONOperationEventArgs class.
         *
         * @param key The name of the item.
         * @param value The value of the item.
         * @param parent The object owns the item.
         */
        constructor(key: string, value: any, parent: any);
        /**
        * Gets the parent object which owns the item.
        */
        readonly parent: string;
        /**
         * Gets the value of the item.
         */
        readonly value: any;
        /**
         * Gets the name of the item.
         */
        readonly key: any;
        /**
         * Gets or sets the operation result for some item.
         */
        result: any;
    }
}

/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.d.ts" />
/**
 * Defines interfaces and classes related to data.
 */
declare module c1.mvc.collections {
    /**
     * Provides arguments for queryData events.
     */
    class QueryEventArgs extends wijmo.EventArgs {
        /**
         * Casts the specified object to @see:c1.mvc.collections.QueryEventArgs type.
         * @param obj The object to cast.
         * @return The object passed in.
         */
        static cast(obj: any): QueryEventArgs;
        /**
         * Gets or sets the extra data for the query.
         */
        extraRequestData: any;
    }
    /**
     * Provides arguments for queryComplete events.
     */
    class QueryCompleteEventArgs extends wijmo.EventArgs {
        private _result;
        /**
         * Casts the specified object to @see:c1.mvc.collections.QueryCompleteEventArgs type.
         * @param obj The object to cast.
         * @return The object passed in.
         */
        static cast(obj: any): QueryCompleteEventArgs;
        /**
         * Initializes a new instance of the @see:QueryCompleteEventArgs class.
         *
         * @param result The operation result of the query.
         */
        constructor(result: IOperationResult);
        /**
        * Gets the operation result of the query.
        */
        readonly result: IOperationResult;
    }
    /**
     * Provides arguments for error events.
     */
    class ErrorEventArgs extends wijmo.CancelEventArgs {
        private _errors;
        /**
         * Casts the specified object to @see:c1.mvc.collections.ErrorEventArgs type.
         * @param obj The object to cast.
         * @return The object passed in.
         */
        static cast(obj: any): ErrorEventArgs;
        /**
         * Initializes a new instance of the @see:ErrorEventArgs class.
         *
         * @param errors The errors from server side.
         */
        constructor(errors: string[]);
        /**
         * Gets or sets the errors from server side.
         */
        readonly errors: string[];
    }
    /**
     * Extends @see:wijmo.collections.CollectionView to support remote data service.
     *
     * You can use the result objects from the data service as data sources for any Wijmo controls,
     * and in addition to full CRUD support and real-time updates you automatically get
     * CollectionView features including sorting, filtering, paging, grouping, and editing.
     */
    class RemoteCollectionView extends wijmo.collections.CollectionView {
        private _totalItemCount;
        private _disableServerRead;
        private _requestParams;
        private _createActionUrl;
        private _readActionUrl;
        private _deleteActionUrl;
        private _updateActionUrl;
        _batchEditActionUrl: string;
        _batchEdit: boolean;
        _queryList: any[];
        private _errors;
        private _initialItemsCount;
        private _skip;
        private _top;
        private _isInitializing;
        private _isFillingData;
        private _query;
        private _isUpdatingItem;
        private _isGrouping;
        private _needMoveCurrentToFirst;
        _dataInfo: any;
        private _nullCount;
        private newItems;
        private _reservedItems;
        /**
         * Casts the specified object to @see:c1.mvc.collections.RemoteCollectionView type.
         * @param obj The object to cast.
         * @return The object passed in.
         */
        static cast(obj: any): RemoteCollectionView;
        /**
         * Raises the @see:sourceCollectionChanged event.
         */
        onSourceCollectionChanged(e?: wijmo.EventArgs): void;
        _ensureDataInfo(data: any[]): void;
        private _updateDataInfoForNull(dataInfo, rowData);
        private _updateDataInfo(dataInfo, key, value);
        private _updateObjectInfo(rowData, dataInfo);
        static _processRequestRowData(rowData: any, dataInfo: any): void;
        /**
         * Initializes a new instance of a @see:RemoteCollectionView.
         *
         * @param options A @see:IRemoteCollectionViewSettings object with query options (such as take, skip, sort, etc).
         */
        constructor(options: IRemoteCollectionViewSettings);
        /**
         * Occurs when the query requests complete.
         */
        queryComplete: wijmo.Event;
        /**
         * Raises the <b>queryComplete</b> event.
         *
         * @param e @see:QueryCompleteEventArgs that contains the event data.
         */
        onQueryComplete(e: QueryCompleteEventArgs): void;
        beginQuery: wijmo.Event;
        onBeginQuery(): void;
        endQuery: wijmo.Event;
        onEndQuery(): void;
        _isQuerying(): boolean;
        /**
         * The event fires when collect the ajax query data.
         */
        queryData: wijmo.Event;
        /**
         * Raises the @see:queryData event.
         *
         * @param e A @see:QueryEventArgs object.
         */
        onQueryData(e: QueryEventArgs): void;
        /**
         * The error event which raises when there are errors from the server side.
         */
        error: wijmo.Event;
        /**
         * Raises the @see:error event.
         *
         * @param e A @see:ErrorEventArgs object.
         */
        onError(e: ErrorEventArgs): boolean;
        /**
         * Occurs when parsing the response text.
         */
        reponseTextParsing: wijmo.Event;
        /**
         * Raises the @see:reponseTextParsing event.
         *
         * @param e A @see:JSONOperationEventArgs object.
         */
        onReponseTextParsing(e: JSONOperationEventArgs): boolean;
        /**
         * Occurs when serializing the request data.
         */
        requestDataStringifying: wijmo.Event;
        /**
         * Raises the @see:requestDataStringifying event.
         *
         * @param e A @see:JSONOperationEventArgs object.
         */
        onRequestDataStringifying(e: JSONOperationEventArgs): boolean;
        requireInitData(options: IRemoteCollectionViewSettings): void;
        private _applySettings(options);
        private _initEventsOpts(options);
        private _initialize(fn);
        /**
         * Force to refresh the view using the current sort, filter and group parameters.
         * When calling this method, an ajax request will be sent to server side to fecth data.
         */
        forceRefresh(): void;
        /**
         * Re-creates the view using the current sort, filter, and group parameters.
         * When the data is not cached in client-side, an ajax request will be sent
         * to server side to fecth data.
         */
        refresh(): void;
        _performRefresh(): void;
        /**
         * Raises the @see:collectionChanged event.
         *
         * @param e Contains a description of the change.
         */
        onCollectionChanged(e?: wijmo.collections.NotifyCollectionChangedEventArgs): void;
        _getPageView(): any[];
        /**
         * Override pageCount to get the total number pages.
         */
        readonly pageCount: number;
        /**
         * Raises the @see:pageChanging event.
         *
         * @param e @see:wijmo.collections.PageChangingEventArgs that contains the event data.
         */
        onPageChanging(e: wijmo.collections.PageChangingEventArgs): boolean;
        /**
         * Override commitNew to add the new item to the data source.
         * When @see:IRemoteCollectionViewSettings.createActionUrl or batch editing is
         * used, an ajax request will be sent to server side to update the data source.
         */
        commitNew(): void;
        /**
         * Override commitEdit to modify the item in the database.
         * When @see:IRemoteCollectionViewSettings.updateActionUrl or batch editing is
         * used, an ajax request will be sent to server side to update the data source.
         */
        commitEdit(): void;
        /**
         * Override remove to remove the item from the database.
         * When @see:IRemoteCollectionViewSettings.deleteActionUrl or batch editing is
         * used, an ajax request will be sent to server side to update the data source.
         *
         * @param item The item used to be removed.
         */
        remove(item: any): void;
        /**
         * Commit all the changes to the database.
         * When the editing url in @see:IRemoteCollectionViewSettings or batch editing is used,
         * an ajax request will be sent to server side to comment the changes to the data source.
         */
        commit(): void;
        private _processErrors(res);
        private _showErrors();
        private _success(res);
        _isPartialDataLoaded(): boolean;
        _isDynamicalLoadingEnabled(): boolean;
        _isDisableServerRead(): boolean;
        _fillData(items: any[], start: number, totalItemCount: number): void;
        _clearReservedItems(): void;
        _addReservedItem(index: number): void;
        private _reset();
        private _fail(xhr, textStatus, errorThrown);
        private _updateAjaxSettings();
        private _upatePageAjaxSettings();
        private _updateSortAjaxSettings();
        private _getSortDesByExpression();
        private _updateQueryAjaxSettings();
        private _collectExtraRequestData(params);
        _ajax(settings: any): void;
        /**
         * Get the whole column data.
         *
         * @param column The column name.
         * @param distinct A boolean value indicates whether to get the distinct data records.
         * @param success A function to be called when the response comes back.
         */
        getColumnData(column: string, distinct: boolean, success: ICollectionViewResponseHandler): void;
        /**
         * Get the whole data.
         *
         * @param success A function to be called when the response comes back.
         */
        getAllData(success: ICollectionViewResponseHandler): void;
        _sendQueryWithoutUpdate(success: ICollectionViewResponseHandler, requestParams: any): void;
        private _sendRequest(url, requestParams?, success?);
        private _sendQuery(updateCollectionView?);
        /**
         * Prepare the items from startRow to endRow.
         *
         * @param startRow The start row index.
         * @param endRow The end row index.
         */
        requestItems(startRow: number, endRow: number): void;
        private _caculateRangeRow(startRow, endRow, count);
        private _requestRead();
        private _getWriteUrl(operationType);
        private _toCamelCase(text);
        private _updateOperatingItems(operatingItems, commandType?, items?);
        private _requestWrite(operationType, items?);
        readonly totalItemCount: number;
        _isRemoteMode(): boolean;
    }
    /**
     * Extends @see:RemoteCollectionView to support data service provided by control callback.
     *
     * You can use the result objects from the data service as data sources for any Wijmo controls,
     * and in addition to full CRUD support and real-time updates you automatically get
     * CollectionView features including sorting, filtering, paging, grouping, and editing.
     */
    class CallbackCollectionView extends RemoteCollectionView {
        private _uniqueId;
        private _cbk;
        /**
         * Casts the specified object to @see:c1.mvc.collections.CallbackCollectionView type.
         * @param obj The object to cast.
         * @return The object passed in.
         */
        static cast(obj: any): CallbackCollectionView;
        constructor(options: ICallBackCollectionViewSettings);
        requireInitData(options: ICallBackCollectionViewSettings): void;
        getCallbackManager(): any;
        _ajax(settings: any): void;
    }
    interface ICallBackCollectionViewSettings extends IRemoteCollectionViewSettings {
        sourceCollection?: any[];
        items?: any[];
        totalItemCount?: number;
        uniqueId: string;
    }
    /**
     * The @see:RemoteCollectionView startup options.
     */
    interface IRemoteCollectionViewSettings {
        /**
         * The page index.
         */
        pageIndex?: number;
        /**
         * The page size.
         */
        pageSize?: number;
        /**
         * An array of @see:ISortDescription for sort setting.
         */
        sortDescriptions?: ISortDescription[];
        /**
         * An array of @see:IGroupDescription for group setting.
         */
        groupDescriptions?: IGroupDescription[];
        /**
         * A boolean value indicates whether to get and cache all server side data.
         * True means to get all server side data and cache them in client side,
         * then not to call server side to fetch data for later.
         */
        disableServerRead?: boolean;
        /**
         * The url for creating item.
         */
        createActionUrl?: string;
        /**
         * The url for reading data.
         */
        readActionUrl?: string;
        /**
         * The url for deleting item.
         */
        deleteActionUrl?: string;
        /**
         * The url for updating item.
         */
        updateActionUrl?: string;
        /**
         * The url for batch editing items.
         */
        batchEditActionUrl?: string;
        /**
         * A boolean value indicates whether to edit items in batch.
         */
        batchEdit?: boolean;
        /**
         * The count of the data which are read from server side at first time.
         */
        initialItemsCount?: number;
        /**
         * The queryData event which raises when collect the ajax query data.
         */
        queryData?: wijmo.IEventHandler;
        /**
        * The queryComplete event which raises when the query requests complete.
        */
        queryComplete?: wijmo.IEventHandler;
        /**
         * The error event which raises when there are errors from the server side.
         */
        error?: wijmo.IEventHandler;
        /**
         * The underlying (unfiltered and unsorted) collection.
         */
        sourceCollection?: any;
        /**
         * Occurs when parsing the response text.
         */
        reponseTextParsing?: wijmo.IEventHandler;
        /**
         * Occurs when serializing the request data.
         */
        requestDataStringifying?: wijmo.IEventHandler;
    }
    interface ICollectionViewRequest {
        pageIndex?: number;
        pageSize?: number;
        sortDescriptions?: ISortDescription[];
        command?: string;
        operatingItems?: any;
        extraRequestData?: any;
        skip?: number;
        top?: number;
    }
    /**
     * The data callback response messages.
     */
    interface ICollectionViewResponse extends IOperationResult {
        /**
         * The requested data items.
         */
        items?: any[];
        /**
         * The page index.
         */
        pageIndex?: number;
        /**
         * The total item count before paging.
         */
        totalItemCount?: number;
        /**
         * The results of the data operations: create, update, delete and batch edit.
         */
        operatedItemResults?: ICollectionViewItemResult[];
        /**
         * The number of items to skip before returning the request items.
         */
        skip?: number;
        /**
         * The request one column data.
         */
        columnData?: any[];
    }
    /**
     * Represents a handler of a @see:RemoteCollectionView response.
     */
    interface ICollectionViewResponseHandler {
        (res: ICollectionViewResponse): void;
    }
    /**
     * The result of operating a CollectionView item.
     */
    interface ICollectionViewItemResult extends IOperationResult {
        /**
         * The operated item.
         */
        item: any;
    }
    /**
     * The result of an operation.
     */
    interface IOperationResult {
        /**
         * A boolean value indicates wheter the operation is success.
         */
        success?: boolean;
        /**
         * The error message.
         */
        error?: string;
    }
    /**
     * Options that describes a sort operation.
     */
    interface ISortDescription {
        /**
         * The field name.
         */
        property: string;
        /**
         * Sort the data by ascending or descending.
         */
        ascending?: boolean;
        /**
         * Gets or sets a value that determines whether null values should appear
         * first or last when the collection is sorted (regardless of sort direction).
         */
        sortNullsFirst?: boolean;
    }
    /**
     * Options that describes a group operation.
     */
    interface IGroupDescription {
        /**
         * The class which is derived from @see:wijmo.collections.GroupDescription.
         */
        clientClass: Function;
    }
    /**
     * Options that describes a group operation by property.
     */
    interface IPropertyGroupDescription extends IGroupDescription {
        /**
         * The property name.
         */
        propertyName: string;
        /**
         * A callback function that takes an item and a property name and returns
         * the group name. If not specified, the group name is the property value
         * for the item.
         */
        converter?: Function;
    }
    interface IRowRange {
        start: number;
        end: number;
    }
    interface _IReservedItem {
        index: number;
        data: any;
    }
    /**
     * The command type of CollectionView's request.
     */
    enum CommandType {
        /** The type of reading data. */
        Read = 0,
        /** The type of creating data. */
        Create = 1,
        /** The type of updating data. */
        Update = 2,
        /** The type of deleting data. */
        Delete = 3,
        /** The type of batch modifying data. */
        BatchEdit = 4,
    }
}

declare module wijmo.Control {
    /**
     * Casts the specified object to @see:wijmo.Control type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Control;
}
declare module wijmo.CancelEventArgs {
    /**
     * Casts the specified object to @see:wijmo.CancelEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): CancelEventArgs;
}
declare module wijmo.EventArgs {
    /**
     * Casts the specified object to @see:wijmo.EventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): EventArgs;
}
declare module wijmo.PropertyChangedEventArgs {
    /**
     * Casts the specified object to @see:wijmo.PropertyChangedEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PropertyChangedEventArgs;
}
declare module wijmo.RequestErrorEventArgs {
    /**
     * Casts the specified object to @see:wijmo.RequestErrorEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): RequestErrorEventArgs;
}
declare module wijmo.Tooltip {
    /**
     * Casts the specified object to @see:wijmo.Tooltip type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Tooltip;
}
declare module wijmo.TooltipEventArgs {
    /**
     * Casts the specified object to @see:wijmo.TooltipEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TooltipEventArgs;
}

declare module wijmo.collections.CollectionView {
    /**
     * Casts the specified object to @see:wijmo.collections.CollectionView type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): CollectionView;
}
declare module wijmo.collections.NotifyCollectionChangedEventArgs {
    /**
     * Casts the specified object to @see:wijmo.collections.NotifyCollectionChangedEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): NotifyCollectionChangedEventArgs;
}
declare module wijmo.collections.PageChangingEventArgs {
    /**
     * Casts the specified object to @see:wijmo.collections.PageChangingEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PageChangingEventArgs;
}
declare module wijmo.collections.PropertyGroupDescription {
    /**
     * Casts the specified object to @see:wijmo.collections.PropertyGroupDescription type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PropertyGroupDescription;
}
declare module wijmo.collections.SortDescription {
    /**
     * Casts the specified object to @see:wijmo.collections.SortDescription type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): SortDescription;
}
declare module wijmo.collections.GroupDescription {
    /**
     * Casts the specified object to @see:wijmo.collections.GroupDescription type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): GroupDescription;
}
declare module wijmo.collections.ICollectionView {
    /**
     * Casts the specified object to @see:wijmo.collections.ICollectionView type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ICollectionView;
}
declare module wijmo.collections.IEditableCollectionView {
    /**
     * Casts the specified object to @see:wijmo.collections.IEditableCollectionView type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): IEditableCollectionView;
}
declare module wijmo.collections.IPagedCollectionView {
    /**
     * Casts the specified object to @see:wijmo.collections.IPagedCollectionView type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): IPagedCollectionView;
}

declare module wijmo.chart.FlexChartCore {
    /**
     * Casts the specified object to @see:wijmo.chart.FlexChartCore type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexChartCore;
}
declare module wijmo.chart.FlexChartBase {
    /**
     * Casts the specified object to @see:wijmo.chart.FlexChartBase type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexChartBase;
}
declare module wijmo.chart.FlexChart {
    /**
     * Casts the specified object to @see:wijmo.chart.FlexChart type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexChart;
}
declare module wijmo.chart.Axis {
    /**
     * Casts the specified object to @see:wijmo.chart.Axis type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Axis;
}
declare module wijmo.chart.DataLabelBase {
    /**
     * Casts the specified object to @see:wijmo.chart.DataLabelBase type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): DataLabelBase;
}
declare module wijmo.chart.DataLabel {
    /**
     * Casts the specified object to @see:wijmo.chart.DataLabel type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): DataLabel;
}
declare module wijmo.chart.PieDataLabel {
    /**
     * Casts the specified object to @see:wijmo.chart.PieDataLabel type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PieDataLabel;
}
declare module wijmo.chart.ChartTooltip {
    /**
     * Casts the specified object to @see:wijmo.chart.ChartTooltip type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ChartTooltip;
}
declare module wijmo.chart.FlexPie {
    /**
     * Casts the specified object to @see:wijmo.chart.FlexPie type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexPie;
}
declare module wijmo.chart.HitTestInfo {
    /**
     * Casts the specified object to @see:wijmo.chart.HitTestInfo type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): HitTestInfo;
}
declare module wijmo.chart.IRenderEngine {
    /**
     * Casts the specified object to @see:wijmo.chart.IRenderEngine type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): IRenderEngine;
}
declare module wijmo.chart.Legend {
    /**
     * Casts the specified object to @see:wijmo.chart.Legend type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Legend;
}
declare module wijmo.chart.LineMarker {
    /**
     * Casts the specified object to @see:wijmo.chart.LineMarker type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): LineMarker;
}
declare module wijmo.chart.PlotArea {
    /**
     * Casts the specified object to @see:wijmo.chart.PlotArea type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PlotArea;
}
declare module wijmo.chart.SeriesBase {
    /**
     * Casts the specified object to @see:wijmo.chart.SeriesBase type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): SeriesBase;
}
declare module wijmo.chart.Series {
    /**
     * Casts the specified object to @see:wijmo.chart.Series type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Series;
}
declare module wijmo.chart.SeriesEventArgs {
    /**
     * Casts the specified object to @see:wijmo.chart.SeriesEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): SeriesEventArgs;
}
declare module wijmo.chart.RenderEventArgs {
    /**
     * Casts the specified object to @see:wijmo.chart.RenderEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): RenderEventArgs;
}
declare module wijmo.chart.SeriesRenderingEventArgs {
    /**
     * Casts the specified object to @see:wijmo.chart.SeriesRenderingEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): SeriesRenderingEventArgs;
}
declare module wijmo.chart.DataLabelRenderEventArgs {
    /**
     * Casts the specified object to @see:wijmo.chart.DataLabelRenderEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): DataLabelRenderEventArgs;
}

declare module wijmo.chart.analytics.BoxWhisker {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.BoxWhisker type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): BoxWhisker;
}
declare module wijmo.chart.analytics.ErrorBar {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.ErrorBar type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ErrorBar;
}
declare module wijmo.chart.analytics.FunctionSeries {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.FunctionSeries type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FunctionSeries;
}
declare module wijmo.chart.analytics.ParametricFunctionSeries {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.ParametricFunctionSeries type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ParametricFunctionSeries;
}
declare module wijmo.chart.analytics.YFunctionSeries {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.YFunctionSeries type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): YFunctionSeries;
}
declare module wijmo.chart.analytics.MovingAverage {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.MovingAverage type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): MovingAverage;
}
declare module wijmo.chart.analytics.TrendLineBase {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.TrendLineBase type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TrendLineBase;
}
declare module wijmo.chart.analytics.TrendLine {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.TrendLine type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TrendLine;
}
declare module wijmo.chart.analytics.Waterfall {
    /**
     * Casts the specified object to @see:wijmo.chart.analytics.Waterfall type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Waterfall;
}

declare module wijmo.chart.animation.ChartAnimation {
    /**
     * Casts the specified object to @see:wijmo.chart.animation.ChartAnimation type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ChartAnimation;
}

declare module wijmo.chart.annotation.AnnotationBase {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.AnnotationBase type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): AnnotationBase;
}
declare module wijmo.chart.annotation.Circle {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Circle type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Circle;
}
declare module wijmo.chart.annotation.Ellipse {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Ellipse type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Ellipse;
}
declare module wijmo.chart.annotation.Image {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Image type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Image;
}
declare module wijmo.chart.annotation.Line {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Line type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Line;
}
declare module wijmo.chart.annotation.Polygon {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Polygon type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Polygon;
}
declare module wijmo.chart.annotation.Rectangle {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Rectangle type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Rectangle;
}
declare module wijmo.chart.annotation.Shape {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Shape type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Shape;
}
declare module wijmo.chart.annotation.Square {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Square type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Square;
}
declare module wijmo.chart.annotation.Text {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.Text type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Text;
}
declare module wijmo.chart.annotation.AnnotationLayer {
    /**
     * Casts the specified object to @see:wijmo.chart.annotation.AnnotationLayer type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): AnnotationLayer;
}

declare module wijmo.chart.hierarchical.Sunburst {
    /**
     * Casts the specified object to @see:wijmo.chart.hierarchical.Sunburst type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Sunburst;
}
declare module wijmo.chart.hierarchical.TreeMap {
    /**
     * Casts the specified object to @see:wijmo.chart.hierarchical.TreeMap type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TreeMap;
}

declare module wijmo.chart.interaction.ChartGestures {
    /**
     * Casts the specified object to @see:wijmo.chart.interaction.ChartGestures type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ChartGestures;
}
declare module wijmo.chart.interaction.RangeSelector {
    /**
     * Casts the specified object to @see:wijmo.chart.interaction.RangeSelector type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): RangeSelector;
}

declare module wijmo.chart.radar.FlexRadar {
    /**
     * Casts the specified object to @see:wijmo.chart.radar.FlexRadar type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexRadar;
}
declare module wijmo.chart.radar.FlexRadarAxis {
    /**
     * Casts the specified object to @see:wijmo.chart.radar.FlexRadarAxis type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexRadarAxis;
}
declare module wijmo.chart.radar.FlexRadarSeries {
    /**
     * Casts the specified object to @see:wijmo.chart.radar.FlexRadarSeries type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexRadarSeries;
}

declare module wijmo.gauge.BulletGraph {
    /**
     * Casts the specified object to @see:wijmo.gauge.BulletGraph type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): BulletGraph;
}
declare module wijmo.gauge.Gauge {
    /**
     * Casts the specified object to @see:wijmo.gauge.Gauge type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Gauge;
}
declare module wijmo.gauge.LinearGauge {
    /**
     * Casts the specified object to @see:wijmo.gauge.LinearGauge type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): LinearGauge;
}
declare module wijmo.gauge.RadialGauge {
    /**
     * Casts the specified object to @see:wijmo.gauge.RadialGauge type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): RadialGauge;
}
declare module wijmo.gauge.Range {
    /**
     * Casts the specified object to @see:wijmo.gauge.Range type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Range;
}

declare module wijmo.grid.CellRange {
    /**
     * Casts the specified object to @see:wijmo.grid.CellRange type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): CellRange;
}
declare module wijmo.grid.DataMap {
    /**
     * Casts the specified object to @see:wijmo.grid.DataMap type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): DataMap;
}
declare module wijmo.grid.FlexGrid {
    /**
     * Casts the specified object to @see:wijmo.grid.FlexGrid type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexGrid;
}
declare module wijmo.grid.GridPanel {
    /**
     * Casts the specified object to @see:wijmo.grid.GridPanel type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): GridPanel;
}
declare module wijmo.grid.HitTestInfo {
    /**
     * Casts the specified object to @see:wijmo.grid.HitTestInfo type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): HitTestInfo;
}
declare module wijmo.grid.MergeManager {
    /**
     * Casts the specified object to @see:wijmo.grid.MergeManager type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): MergeManager;
}
declare module wijmo.grid.Column {
    /**
     * Casts the specified object to @see:wijmo.grid.Column type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Column;
}
declare module wijmo.grid.GroupRow {
    /**
     * Casts the specified object to @see:wijmo.grid.GroupRow type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): GroupRow;
}
declare module wijmo.grid.Row {
    /**
     * Casts the specified object to @see:wijmo.grid.Row type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Row;
}
declare module wijmo.grid.RowCol {
    /**
     * Casts the specified object to @see:wijmo.grid.RowCol type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): RowCol;
}
declare module wijmo.grid.CellEditEndingEventArgs {
    /**
     * Casts the specified object to @see:wijmo.grid.CellEditEndingEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): CellEditEndingEventArgs;
}
declare module wijmo.grid.CellRangeEventArgs {
    /**
     * Casts the specified object to @see:wijmo.grid.CellRangeEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): CellRangeEventArgs;
}
declare module wijmo.grid.FormatItemEventArgs {
    /**
     * Casts the specified object to @see:wijmo.grid.FormatItemEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FormatItemEventArgs;
}

declare module wijmo.grid.detail.DetailMergeManager {
    /**
     * Casts the specified object to @see:wijmo.grid.detail.DetailMergeManager type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): DetailMergeManager;
}
declare module wijmo.grid.detail.DetailRow {
    /**
     * Casts the specified object to @see:wijmo.grid.detail.DetailRow type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): DetailRow;
}
declare module wijmo.grid.detail.FlexGridDetailProvider {
    /**
     * Casts the specified object to @see:wijmo.grid.detail.FlexGridDetailProvider type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexGridDetailProvider;
}

declare module wijmo.grid.filter.ConditionFilter {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.ConditionFilter type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ConditionFilter;
}
declare module wijmo.grid.filter.ValueFilter {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.ValueFilter type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ValueFilter;
}
declare module wijmo.grid.filter.ColumnFilter {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.ColumnFilter type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ColumnFilter;
}
declare module wijmo.grid.filter.FlexGridFilter {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.FlexGridFilter type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FlexGridFilter;
}
declare module wijmo.grid.filter.FilterCondition {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.FilterCondition type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FilterCondition;
}
declare module wijmo.grid.filter.ColumnFilterEditor {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.ColumnFilterEditor type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ColumnFilterEditor;
}
declare module wijmo.grid.filter.ConditionFilterEditor {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.ConditionFilterEditor type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ConditionFilterEditor;
}
declare module wijmo.grid.filter.ValueFilterEditor {
    /**
     * Casts the specified object to @see:wijmo.grid.filter.ValueFilterEditor type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ValueFilterEditor;
}

declare module wijmo.grid.grouppanel.GroupPanel {
    /**
     * Casts the specified object to @see:wijmo.grid.grouppanel.GroupPanel type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): GroupPanel;
}

/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.pdf.d.ts" />
/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.grid.pdf.d.ts" />
declare module wijmo.grid.pdf.PdfFormatItemEventArgs {
    /**
     * Casts the specified object to @see:wijmo.grid.pdf.PdfFormatItemEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PdfFormatItemEventArgs;
}

/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.xlsx.d.ts" />
/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.grid.xlsx.d.ts" />
declare module wijmo.grid.xlsx.XlsxFormatItemEventArgs {
    /**
     * Casts the specified object to @see:wijmo.grid.xlsx.XlsxFormatItemEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): XlsxFormatItemEventArgs;
}

declare module wijmo.input.AutoComplete {
    /**
     * Casts the specified object to @see:wijmo.input.AutoComplete type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): AutoComplete;
}
declare module wijmo.input.Calendar {
    /**
     * Casts the specified object to @see:wijmo.input.Calendar type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Calendar;
}
declare module wijmo.input.ColorPicker {
    /**
     * Casts the specified object to @see:wijmo.input.ColorPicker type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ColorPicker;
}
declare module wijmo.input.ComboBox {
    /**
     * Casts the specified object to @see:wijmo.input.ComboBox type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ComboBox;
}
declare module wijmo.input.DropDown {
    /**
     * Casts the specified object to @see:wijmo.input.DropDown type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): DropDown;
}
declare module wijmo.input.InputColor {
    /**
     * Casts the specified object to @see:wijmo.input.InputColor type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): InputColor;
}
declare module wijmo.input.InputDate {
    /**
     * Casts the specified object to @see:wijmo.input.InputDate type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): InputDate;
}
declare module wijmo.input.InputDateTime {
    /**
     * Casts the specified object to @see:wijmo.input.InputDateTime type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): InputDateTime;
}
declare module wijmo.input.InputMask {
    /**
     * Casts the specified object to @see:wijmo.input.InputMask type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): InputMask;
}
declare module wijmo.input.InputNumber {
    /**
     * Casts the specified object to @see:wijmo.input.InputNumber type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): InputNumber;
}
declare module wijmo.input.InputTime {
    /**
     * Casts the specified object to @see:wijmo.input.InputTime type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): InputTime;
}
declare module wijmo.input.ListBox {
    /**
     * Casts the specified object to @see:wijmo.input.ListBox type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ListBox;
}
declare module wijmo.input.Menu {
    /**
     * Casts the specified object to @see:wijmo.input.Menu type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Menu;
}
declare module wijmo.input.MultiAutoComplete {
    /**
     * Casts the specified object to @see:wijmo.input.MultiAutoComplete type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): MultiAutoComplete;
}
declare module wijmo.input.MultiSelect {
    /**
     * Casts the specified object to @see:wijmo.input.MultiSelect type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): MultiSelect;
}
declare module wijmo.input.Popup {
    /**
     * Casts the specified object to @see:wijmo.input.Popup type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Popup;
}
declare module wijmo.input.FormatItemEventArgs {
    /**
     * Casts the specified object to @see:wijmo.input.FormatItemEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FormatItemEventArgs;
}

declare module wijmo.nav.TreeNode {
    /**
     * Casts the specified object to @see:wijmo.nav.TreeNode type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TreeNode;
}
declare module wijmo.nav.TreeView {
    /**
     * Casts the specified object to @see:wijmo.nav.TreeView type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TreeView;
}
declare module wijmo.nav.FormatNodeEventArgs {
    /**
     * Casts the specified object to @see:wijmo.nav.FormatNodeEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): FormatNodeEventArgs;
}
declare module wijmo.nav.TreeNodeEventArgs {
    /**
     * Casts the specified object to @see:wijmo.nav.TreeNodeEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TreeNodeEventArgs;
}
declare module wijmo.nav.TreeNodeDragDropEventArgs {
    /**
     * Casts the specified object to @see:wijmo.nav.TreeNodeDragDropEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TreeNodeDragDropEventArgs;
}
declare module wijmo.nav.TabPanel {
    /**
     * Casts the specified object to @see:wijmo.nav.TabPanel type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): TabPanel;
}
declare module wijmo.nav.Tab {
    /**
     * Casts the specified object to @see:wijmo.nav.Tab type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): Tab;
}

/// <reference path="../../../../Shared/WijmoNxt/HTML5/Controls/dist/controls/wijmo.pdf.d.ts" />
declare module wijmo.pdf.PdfDocument {
    /**
     * Casts the specified object to @see:wijmo.pdf.PdfDocument type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PdfDocument;
}
declare module wijmo.pdf.PdfPageArea {
    /**
     * Casts the specified object to @see:wijmo.pdf.PdfPageArea type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PdfPageArea;
}
declare module wijmo.pdf.PdfDocumentEndedEventArgs {
    /**
     * Casts the specified object to @see:wijmo.pdf.PdfDocumentEndedEventArgs type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): PdfDocumentEndedEventArgs;
}

declare module wijmo.odata.ODataCollectionView {
    /**
     * Casts the specified object to @see:wijmo.odata.ODataCollectionView type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ODataCollectionView;
}
declare module wijmo.odata.ODataVirtualCollectionView {
    /**
     * Casts the specified object to @see:wijmo.odata.ODataVirtualCollectionView type.
     * @param obj The object to cast.
     * @return The object passed in.
     */
    function cast(obj: any): ODataVirtualCollectionView;
}
