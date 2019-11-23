"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function redirectionScript(_a) {
    var origin = _a.origin, redirectTo = _a.redirectTo;
    return "\n    <script type=\"text/javascript\">\n      document.addEventListener('DOMContentLoaded', function() {\n        if (window.top === window.self) {\n          // If the current window is the 'parent', change the URL by setting location.href\n          window.location.href = '" + redirectTo + "';\n        } else {\n          // If the current window is the 'child', change the parent's URL with postMessage\n          data = JSON.stringify({\n            message: 'Shopify.API.remoteRedirect',\n            data: { location: '" + redirectTo + "' }\n          });\n\n          window.parent.postMessage(data, '" + origin + "');\n        }\n      });\n    </script>\n  ";
}
exports.default = redirectionScript;
