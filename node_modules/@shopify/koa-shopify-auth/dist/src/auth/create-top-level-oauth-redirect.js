"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var create_top_level_redirect_1 = tslib_1.__importDefault(require("./create-top-level-redirect"));
var index_1 = require("./index");
function createTopLevelOAuthRedirect(path) {
    var redirect = create_top_level_redirect_1.default(path);
    return function topLevelOAuthRedirect(ctx) {
        ctx.cookies.set(index_1.TOP_LEVEL_OAUTH_COOKIE_NAME, '1');
        redirect(ctx);
    };
}
exports.default = createTopLevelOAuthRedirect;
