! function(a) {
    function e(a) {
        return new RegExp("^" + a + "$")
    }

    function t(a, e) {
        for (var t = Array.prototype.slice.call(arguments).splice(2), i = a.split("."), n = i.pop(), r = 0; r < i.length; r++) e = e[i[r]];
        return e[n].apply(this, t)
    }
    var i = [],
        n = {
            options: {
                prependExistingHelpBlock: !1,
                sniffHtml: !0,
                preventSubmit: !0,
                submitError: !1,
                submitSuccess: !1,
                semanticallyStrict: !1,
                autoAdd: {
                    helpBlocks: !0
                },
                filter: function() {
                    return !0
                }
            },
            methods: {
                init: function(e) {
                    var t = a.extend(!0, {}, n);
                    t.options = a.extend(!0, t.options, e);
                    var s = this,
                        l = a.unique(s.map(function() {
                            return a(this).parents("form")[0]
                        }).toArray());
                    return a(l).bind("submit", function(e) {
                        var i = a(this),
                            n = 0,
                            r = i.find("input,textarea,select").not("[type=submit],[type=image]").filter(t.options.filter);
                        r.trigger("submit.validation").trigger("validationLostFocus.validation"), r.each(function(e, t) {
                            var i = a(t),
                                r = i.parents(".form-group").first();
                            r.hasClass("warning") && (r.removeClass("warning").addClass("error"), n++)
                        }), r.trigger("validationLostFocus.validation"), n ? (t.options.preventSubmit && e.preventDefault(), i.addClass("error"), a.isFunction(t.options.submitError) && t.options.submitError(i, e, r.jqBootstrapValidation("collectErrors", !0))) : (i.removeClass("error"), a.isFunction(t.options.submitSuccess) && t.options.submitSuccess(i, e))
                    }), this.each(function() {
                        var e = a(this),
                            n = e.parents(".form-group").first(),
                            s = n.find(".help-block").first(),
                            l = e.parents("form").first(),
                            d = [];
                        if (!s.length && t.options.autoAdd && t.options.autoAdd.helpBlocks && (s = a('<div class="help-block" />'), n.find(".controls").append(s), i.push(s[0])), t.options.sniffHtml) {
                            var c = "";
                            if (void 0 !== e.attr("pattern") && (c = "Not in the expected format<!-- data-validation-pattern-message to override -->", e.data("validationPatternMessage") && (c = e.data("validationPatternMessage")), e.data("validationPatternMessage", c), e.data("validationPatternRegex", e.attr("pattern"))), void 0 !== e.attr("max") || void 0 !== e.attr("aria-valuemax")) {
                                var u = void 0 !== e.attr("max") ? e.attr("max") : e.attr("aria-valuemax");
                                c = "Too high: Maximum of '" + u + "'<!-- data-validation-max-message to override -->", e.data("validationMaxMessage") && (c = e.data("validationMaxMessage")), e.data("validationMaxMessage", c), e.data("validationMaxMax", u)
                            }
                            if (void 0 !== e.attr("min") || void 0 !== e.attr("aria-valuemin")) {
                                var m = void 0 !== e.attr("min") ? e.attr("min") : e.attr("aria-valuemin");
                                c = "Too low: Minimum of '" + m + "'<!-- data-validation-min-message to override -->", e.data("validationMinMessage") && (c = e.data("validationMinMessage")), e.data("validationMinMessage", c), e.data("validationMinMin", m)
                            }
                            void 0 !== e.attr("maxlength") && (c = "Too long: Maximum of '" + e.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", e.data("validationMaxlengthMessage") && (c = e.data("validationMaxlengthMessage")), e.data("validationMaxlengthMessage", c), e.data("validationMaxlengthMaxlength", e.attr("maxlength"))), void 0 !== e.attr("minlength") && (c = "Too short: Minimum of '" + e.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", e.data("validationMinlengthMessage") && (c = e.data("validationMinlengthMessage")), e.data("validationMinlengthMessage", c), e.data("validationMinlengthMinlength", e.attr("minlength"))), (void 0 !== e.attr("required") || void 0 !== e.attr("aria-required")) && (c = t.builtInValidators.required.message, e.data("validationRequiredMessage") && (c = e.data("validationRequiredMessage")), e.data("validationRequiredMessage", c)), void 0 !== e.attr("type") && "number" === e.attr("type").toLowerCase() && (c = t.builtInValidators.number.message, e.data("validationNumberMessage") && (c = e.data("validationNumberMessage")), e.data("validationNumberMessage", c)), void 0 !== e.attr("type") && "email" === e.attr("type").toLowerCase() && (c = "Not a valid email address<!-- data-validator-validemail-message to override -->", e.data("validationValidemailMessage") ? c = e.data("validationValidemailMessage") : e.data("validationEmailMessage") && (c = e.data("validationEmailMessage")), e.data("validationValidemailMessage", c)), void 0 !== e.attr("minchecked") && (c = "Not enough options checked; Minimum of '" + e.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", e.data("validationMincheckedMessage") && (c = e.data("validationMincheckedMessage")), e.data("validationMincheckedMessage", c), e.data("validationMincheckedMinchecked", e.attr("minchecked"))), void 0 !== e.attr("maxchecked") && (c = "Too many options checked; Maximum of '" + e.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", e.data("validationMaxcheckedMessage") && (c = e.data("validationMaxcheckedMessage")), e.data("validationMaxcheckedMessage", c), e.data("validationMaxcheckedMaxchecked", e.attr("maxchecked")))
                        }
                        void 0 !== e.data("validation") && (d = e.data("validation").split(",")), a.each(e.data(), function(a, e) {
                            var t = a.replace(/([A-Z])/g, ",$1").split(",");
                            "validation" === t[0] && t[1] && d.push(t[1])
                        });
                        var v = d,
                            g = [];
                        do a.each(d, function(a, e) {
                            d[a] = r(e)
                        }), d = a.unique(d), g = [], a.each(v, function(i, n) {
                            if (void 0 !== e.data("validation" + n + "Shortcut")) a.each(e.data("validation" + n + "Shortcut").split(","), function(a, e) {
                                g.push(e)
                            });
                            else if (t.builtInValidators[n.toLowerCase()]) {
                                var o = t.builtInValidators[n.toLowerCase()];
                                "shortcut" === o.type.toLowerCase() && a.each(o.shortcut.split(","), function(a, e) {
                                    e = r(e), g.push(e), d.push(e)
                                })
                            }
                        }), v = g; while (v.length > 0);
                        var h = {};
                        a.each(d, function(i, n) {
                            var o = e.data("validation" + n + "Message"),
                                s = void 0 !== o,
                                l = !1;
                            if (o = o ? o : "'" + n + "' validation failed <!-- Add attribute 'data-validation-" + n.toLowerCase() + "-message' to input to change this message -->", a.each(t.validatorTypes, function(t, i) {
                                    void 0 === h[t] && (h[t] = []), l || void 0 === e.data("validation" + n + r(i.name)) || (h[t].push(a.extend(!0, {
                                        name: r(i.name),
                                        message: o
                                    }, i.init(e, n))), l = !0)
                                }), !l && t.builtInValidators[n.toLowerCase()]) {
                                var d = a.extend(!0, {}, t.builtInValidators[n.toLowerCase()]);
                                s && (d.message = o);
                                var c = d.type.toLowerCase();
                                "shortcut" === c ? l = !0 : a.each(t.validatorTypes, function(t, i) {
                                    void 0 === h[t] && (h[t] = []), l || c !== t.toLowerCase() || (e.data("validation" + n + r(i.name), d[i.name.toLowerCase()]), h[c].push(a.extend(d, i.init(e, n))), l = !0)
                                })
                            }
                            l || a.error("Cannot find validation info for '" + n + "'")
                        }), s.data("original-contents", s.data("original-contents") ? s.data("original-contents") : s.html()), s.data("original-role", s.data("original-role") ? s.data("original-role") : s.attr("role")), n.data("original-classes", n.data("original-clases") ? n.data("original-classes") : n.attr("class")), e.data("original-aria-invalid", e.data("original-aria-invalid") ? e.data("original-aria-invalid") : e.attr("aria-invalid")), e.bind("validation.validation", function(i, n) {
                            var r = o(e),
                                s = [];
                            return a.each(h, function(i, o) {
                                (r || r.length || n && n.includeEmpty || t.validatorTypes[i].blockSubmit && n && n.submitting) && a.each(o, function(a, n) {
                                    t.validatorTypes[i].validate(e, r, n) && s.push(n.message)
                                })
                            }), s
                        }), e.bind("getValidators.validation", function() {
                            return h
                        }), e.bind("submit.validation", function() {
                            return e.triggerHandler("change.validation", {
                                submitting: !0
                            })
                        }), e.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function(i, r) {
                            var d = o(e),
                                c = [];
                            n.find("input,textarea,select").each(function(t, i) {
                                var n = c.length;
                                if (a.each(a(i).triggerHandler("validation.validation", r), function(a, e) {
                                        c.push(e)
                                    }), c.length > n) a(i).attr("aria-invalid", "true");
                                else {
                                    var o = e.data("original-aria-invalid");
                                    a(i).attr("aria-invalid", void 0 !== o ? o : !1)
                                }
                            }), l.find("input,select,textarea").not(e).not('[name="' + e.attr("name") + '"]').trigger("validationLostFocus.validation"), c = a.unique(c.sort()), c.length ? (n.removeClass("success error").addClass("warning"), t.options.semanticallyStrict && 1 === c.length ? s.html(c[0] + (t.options.prependExistingHelpBlock ? s.data("original-contents") : "")) : s.html('<ul role="alert"><li>' + c.join("</li><li>") + "</li></ul>" + (t.options.prependExistingHelpBlock ? s.data("original-contents") : ""))) : (n.removeClass("warning error success"), d.length > 0 && n.addClass("success"), s.html(s.data("original-contents"))), "blur" === i.type && n.removeClass("success")
                        }), e.bind("validationLostFocus.validation", function() {
                            n.removeClass("success")
                        })
                    })
                },
                destroy: function() {
                    return this.each(function() {
                        var e = a(this),
                            t = e.parents(".form-group").first(),
                            n = t.find(".help-block").first();
                        e.unbind(".validation"), n.html(n.data("original-contents")), t.attr("class", t.data("original-classes")), e.attr("aria-invalid", e.data("original-aria-invalid")), n.attr("role", e.data("original-role")), i.indexOf(n[0]) > -1 && n.remove()
                    })
                },
                collectErrors: function(e) {
                    var t = {};
                    return this.each(function(e, i) {
                        var n = a(i),
                            r = n.attr("name"),
                            o = n.triggerHandler("validation.validation", {
                                includeEmpty: !0
                            });
                        t[r] = a.extend(!0, o, t[r])
                    }), a.each(t, function(a, e) {
                        0 === e.length && delete t[a]
                    }), t
                },
                hasErrors: function() {
                    var e = [];
                    return this.each(function(t, i) {
                        e = e.concat(a(i).triggerHandler("getValidators.validation") ? a(i).triggerHandler("validation.validation", {
                            submitting: !0
                        }) : [])
                    }), e.length > 0
                },
                override: function(e) {
                    n = a.extend(!0, n, e)
                }
            },
            validatorTypes: {
                callback: {
                    name: "callback",
                    init: function(a, e) {
                        return {
                            validatorName: e,
                            callback: a.data("validation" + e + "Callback"),
                            lastValue: a.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function(a, e, i) {
                        if (i.lastValue === e && i.lastFinished) return !i.lastValid;
                        if (i.lastFinished === !0) {
                            i.lastValue = e, i.lastValid = !0, i.lastFinished = !1;
                            var n = i,
                                r = a;
                            t(i.callback, window, a, e, function(a) {
                                n.lastValue === a.value && (n.lastValid = a.valid, a.message && (n.message = a.message), n.lastFinished = !0, r.data("validation" + n.validatorName + "Message", n.message), setTimeout(function() {
                                    r.trigger("change.validation")
                                }, 1))
                            })
                        }
                        return !1
                    }
                },
                ajax: {
                    name: "ajax",
                    init: function(a, e) {
                        return {
                            validatorName: e,
                            url: a.data("validation" + e + "Ajax"),
                            lastValue: a.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function(e, t, i) {
                        return "" + i.lastValue == "" + t && i.lastFinished === !0 ? i.lastValid === !1 : (i.lastFinished === !0 && (i.lastValue = t, i.lastValid = !0, i.lastFinished = !1, a.ajax({
                            url: i.url,
                            data: "value=" + t + "&field=" + e.attr("name"),
                            dataType: "json",
                            success: function(a) {
                                "" + i.lastValue == "" + a.value && (i.lastValid = !!a.valid, a.message && (i.message = a.message), i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                    e.trigger("change.validation")
                                }, 1))
                            },
                            failure: function() {
                                i.lastValid = !0, i.message = "ajax call failed", i.lastFinished = !0, e.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                    e.trigger("change.validation")
                                }, 1)
                            }
                        })), !1)
                    }
                },
                regex: {
                    name: "regex",
                    init: function(a, t) {
                        return {
                            regex: e(a.data("validation" + t + "Regex"))
                        }
                    },
                    validate: function(a, e, t) {
                        return !t.regex.test(e) && !t.negative || t.regex.test(e) && t.negative
                    }
                },
                required: {
                    name: "required",
                    init: function(a, e) {
                        return {}
                    },
                    validate: function(a, e, t) {
                        return !(0 !== e.length || t.negative) || !!(e.length > 0 && t.negative)
                    },
                    blockSubmit: !0
                },
                match: {
                    name: "match",
                    init: function(a, e) {
                        var t = a.parents("form").first().find('[name="' + a.data("validation" + e + "Match") + '"]').first();
                        return t.bind("validation.validation", function() {
                            a.trigger("change.validation", {
                                submitting: !0
                            })
                        }), {
                            element: t
                        }
                    },
                    validate: function(a, e, t) {
                        return e !== t.element.val() && !t.negative || e === t.element.val() && t.negative
                    },
                    blockSubmit: !0
                },
                max: {
                    name: "max",
                    init: function(a, e) {
                        return {
                            max: a.data("validation" + e + "Max")
                        }
                    },
                    validate: function(a, e, t) {
                        return parseFloat(e, 10) > parseFloat(t.max, 10) && !t.negative || parseFloat(e, 10) <= parseFloat(t.max, 10) && t.negative
                    }
                },
                min: {
                    name: "min",
                    init: function(a, e) {
                        return {
                            min: a.data("validation" + e + "Min")
                        }
                    },
                    validate: function(a, e, t) {
                        return parseFloat(e) < parseFloat(t.min) && !t.negative || parseFloat(e) >= parseFloat(t.min) && t.negative
                    }
                },
                maxlength: {
                    name: "maxlength",
                    init: function(a, e) {
                        return {
                            maxlength: a.data("validation" + e + "Maxlength")
                        }
                    },
                    validate: function(a, e, t) {
                        return e.length > t.maxlength && !t.negative || e.length <= t.maxlength && t.negative
                    }
                },
                minlength: {
                    name: "minlength",
                    init: function(a, e) {
                        return {
                            minlength: a.data("validation" + e + "Minlength")
                        }
                    },
                    validate: function(a, e, t) {
                        return e.length < t.minlength && !t.negative || e.length >= t.minlength && t.negative
                    }
                },
                maxchecked: {
                    name: "maxchecked",
                    init: function(a, e) {
                        var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                        return t.bind("click.validation", function() {
                            a.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            maxchecked: a.data("validation" + e + "Maxchecked"),
                            elements: t
                        }
                    },
                    validate: function(a, e, t) {
                        return t.elements.filter(":checked").length > t.maxchecked && !t.negative || t.elements.filter(":checked").length <= t.maxchecked && t.negative
                    },
                    blockSubmit: !0
                },
                minchecked: {
                    name: "minchecked",
                    init: function(a, e) {
                        var t = a.parents("form").first().find('[name="' + a.attr("name") + '"]');
                        return t.bind("click.validation", function() {
                            a.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            minchecked: a.data("validation" + e + "Minchecked"),
                            elements: t
                        }
                    },
                    validate: function(a, e, t) {
                        return t.elements.filter(":checked").length < t.minchecked && !t.negative || t.elements.filter(":checked").length >= t.minchecked && t.negative
                    },
                    blockSubmit: !0
                }
            },
            builtInValidators: {
                email: {
                    name: "Email",
                    type: "shortcut",
                    shortcut: "validemail"
                },
                validemail: {
                    name: "Validemail",
                    type: "regex",
                    regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                    message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
                },
                passwordagain: {
                    name: "Passwordagain",
                    type: "match",
                    match: "password",
                    message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
                },
                positive: {
                    name: "Positive",
                    type: "shortcut",
                    shortcut: "number,positivenumber"
                },
                negative: {
                    name: "Negative",
                    type: "shortcut",
                    shortcut: "number,negativenumber"
                },
                number: {
                    name: "Number",
                    type: "regex",
                    regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                    message: "Must be a number<!-- data-validator-number-message to override -->"
                },
                integer: {
                    name: "Integer",
                    type: "regex",
                    regex: "[+-]?\\d+",
                    message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
                },
                positivenumber: {
                    name: "Positivenumber",
                    type: "min",
                    min: 0,
                    message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
                },
                negativenumber: {
                    name: "Negativenumber",
                    type: "max",
                    max: 0,
                    message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
                },
                required: {
                    name: "Required",
                    type: "required",
                    message: "This is required<!-- data-validator-required-message to override -->"
                },
                checkone: {
                    name: "Checkone",
                    type: "minchecked",
                    minchecked: 1,
                    message: "Check at least one option<!-- data-validation-checkone-message to override -->"
                }
            }
        },
        r = function(a) {
            return a.toLowerCase().replace(/(^|\s)([a-z])/g, function(a, e, t) {
                return e + t.toUpperCase()
            })
        },
        o = function(e) {
            var t = e.val(),
                i = e.attr("type");
            return "checkbox" === i && (t = e.is(":checked") ? t : ""), "radio" === i && (t = a('input[name="' + e.attr("name") + '"]:checked').length > 0 ? t : ""), t
        };
    a.fn.jqBootstrapValidation = function(e) {
        return n.methods[e] ? n.methods[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (a.error("Method " + e + " does not exist on jQuery.jqBootstrapValidation"), null) : n.methods.init.apply(this, arguments)
    }, a.jqBootstrapValidation = function(e) {
        a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
    }
}(jQuery);