// path: crs-frontend/src/api/authEventBus.ts
// purpose: cau noi giua axiosClient (TypeScript thuan) va AuthContext (React).
// Interceptor khong the dung React Hook, nen dung pattern "callback injection":
// AuthContext dang ky ham logout vao day, interceptor goi triggerLogout() khi nhan 401.

let logoutHandler: (() => void) | null = null;

/** AuthContext goi ham nay de dang ky callback logout */
export function setLogoutHandler(fn: () => void) {
    logoutHandler = fn;
}

/** axiosClient goi ham nay khi nhan HTTP 401 */
export function triggerLogout() {
    if (logoutHandler) {
        logoutHandler();
    }
}
