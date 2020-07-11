"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
function default_1(styleApi) {
    const { and, hasDefaultMember, hasNamedMembers, hasNamespaceMember, hasNoMember, hasOnlyDefaultMember, hasOnlyNamedMembers, hasOnlyNamespaceMember, isAbsoluteModule, isRelativeModule, member, not, startsWithAlphanumeric, startsWithLowerCase, startsWithUpperCase, moduleName, naturally, unicode, alias, } = styleApi;
    return [
        { match: and(hasNoMember, isAbsoluteModule, not(api_1.isWorkspaceModule)) },
        { separator: true },
        { match: and(hasNoMember, api_1.isWorkspaceModule) },
        { separator: true },
        { match: and(hasNoMember, isRelativeModule) },
        { separator: true },
        {
            match: and(hasOnlyNamespaceMember, isAbsoluteModule, not(api_1.isWorkspaceModule), not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyNamespaceMember, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyNamespaceMember, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithLowerCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, not(api_1.isWorkspaceModule), not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, isAbsoluteModule, not(api_1.isWorkspaceModule), not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithLowerCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, not(api_1.isWorkspaceModule), not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithUpperCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithLowerCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, isAbsoluteModule, not(api_1.isWorkspaceModule), not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithUpperCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, isAbsoluteModule, not(api_1.isWorkspaceModule), member(startsWithLowerCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        {
            match: and(hasOnlyNamespaceMember, api_1.isWorkspaceModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyNamespaceMember, api_1.isWorkspaceModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyNamespaceMember, api_1.isWorkspaceModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, api_1.isWorkspaceModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, api_1.isWorkspaceModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, api_1.isWorkspaceModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, api_1.isWorkspaceModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, api_1.isWorkspaceModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, api_1.isWorkspaceModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, api_1.isWorkspaceModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, api_1.isWorkspaceModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, api_1.isWorkspaceModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, api_1.isWorkspaceModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, api_1.isWorkspaceModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, api_1.isWorkspaceModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
        {
            match: and(hasOnlyNamespaceMember, isRelativeModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyNamespaceMember, isRelativeModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyNamespaceMember, isRelativeModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, isRelativeModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, isRelativeModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamespaceMember, isRelativeModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, isRelativeModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, isRelativeModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasOnlyDefaultMember, isRelativeModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, isRelativeModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, isRelativeModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasDefaultMember, hasNamedMembers, isRelativeModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, isRelativeModule, not(member(startsWithAlphanumeric))),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, isRelativeModule, member(startsWithUpperCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        {
            match: and(hasOnlyNamedMembers, isRelativeModule, member(startsWithLowerCase)),
            sort: moduleName(naturally),
            sortNamedMembers: alias(unicode),
        },
        { separator: true },
    ];
}
exports.default = default_1;
