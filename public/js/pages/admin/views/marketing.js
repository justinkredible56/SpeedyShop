/*global define */

define([
    'backbone',
    'tmpl!pages/admin/templates/marketing'
], function (
    Backbone,
    marketingTmpl
) {
    return Backbone.View.extend({

        initialize: function () {
        },

        events: {
        },

        render: function () {
            this.$el.html(marketingTmpl());
            return this;
        }
    });
});
