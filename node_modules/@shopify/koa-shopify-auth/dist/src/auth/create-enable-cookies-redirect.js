"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var create_top_level_redirect_1 = tslib_1.__importDefault(require("./create-top-level-redirect"));
var index_1 = require("./index");
function createEnableCookiesRedirect(path) {
    var redirect = create_top_level_redirect_1.default(path);
    return function topLevelOAuthRedirect(ctx) {
        // This is to avoid a redirect loop if the app doesn't use verifyRequest or set the test cookie elsewhere.
        ctx.cookies.set(index_1.TEST_COOKIE_NAME, '1');
        redirect(ctx);
    };
}
exports.default = createEnableCookiesRedirect;
