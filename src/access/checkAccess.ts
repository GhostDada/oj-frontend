/* eslint-disable prettier/prettier */
import ACCESS_ENUM from "./accessEnum";

/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @returns 有无权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
    // 获取当前登录用户具有权限（如果没有loginUser，则表示未登录）
    const loginUserAccess = loginUser.role ?? ACCESS_ENUM.NOT_LOGIN;

    if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
        return true;
    }

    // 如果需要用户登录才能访问
    if (needAccess === ACCESS_ENUM.USER) {
        // 如果用户没有登录，那么表示无权限
        if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
            return false;
        }
    }

    // 如果需要管理权限
    if (needAccess === ACCESS_ENUM.ADMIN) {
        // 不是管理员，表示无权限
        if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
            return false;
        }
    }

    return true;
};

export default checkAccess;
