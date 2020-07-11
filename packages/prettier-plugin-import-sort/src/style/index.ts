import { IStyleItem, IStyleAPI } from 'import-sort-style'
import { isWorkspaceModule } from './api'

export default function (styleApi: IStyleAPI): IStyleItem[] {
  const { and, hasDefaultMember, hasNamedMembers, hasNamespaceMember, hasNoMember, hasOnlyDefaultMember, hasOnlyNamedMembers, hasOnlyNamespaceMember, isAbsoluteModule, isRelativeModule, member, not, startsWithAlphanumeric, startsWithLowerCase, startsWithUpperCase, moduleName, naturally, unicode, alias, } = styleApi;
  return [
    { match: and(hasNoMember, isAbsoluteModule, not(isWorkspaceModule)) },
    { separator: true },
    { match: and(hasNoMember, isWorkspaceModule) },
    { separator: true },
    { match: and(hasNoMember, isRelativeModule) },
    { separator: true },
    {
      match: and(hasOnlyNamespaceMember, isAbsoluteModule, not(isWorkspaceModule), not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyNamespaceMember, isAbsoluteModule, not(isWorkspaceModule), member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyNamespaceMember, isAbsoluteModule, not(isWorkspaceModule), member(startsWithLowerCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, not(isWorkspaceModule), not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, not(isWorkspaceModule), member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamespaceMember, isAbsoluteModule, not(isWorkspaceModule), member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyDefaultMember, isAbsoluteModule, not(isWorkspaceModule), not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyDefaultMember, isAbsoluteModule, not(isWorkspaceModule), member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyDefaultMember, isAbsoluteModule, not(isWorkspaceModule), member(startsWithLowerCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, not(isWorkspaceModule), not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, not(isWorkspaceModule), member(startsWithUpperCase)),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasDefaultMember, hasNamedMembers, isAbsoluteModule, not(isWorkspaceModule), member(startsWithLowerCase)),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasOnlyNamedMembers, isAbsoluteModule, not(isWorkspaceModule), not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasOnlyNamedMembers, isAbsoluteModule, not(isWorkspaceModule), member(startsWithUpperCase)),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasOnlyNamedMembers, isAbsoluteModule, not(isWorkspaceModule), member(startsWithLowerCase)),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    { separator: true },
    {
      match: and(hasOnlyNamespaceMember, isWorkspaceModule, not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyNamespaceMember, isWorkspaceModule, member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyNamespaceMember, isWorkspaceModule, member(startsWithLowerCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamespaceMember, isWorkspaceModule, not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamespaceMember, isWorkspaceModule, member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamespaceMember, isWorkspaceModule, member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyDefaultMember, isWorkspaceModule, not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyDefaultMember, isWorkspaceModule, member(startsWithUpperCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasOnlyDefaultMember, isWorkspaceModule, member(startsWithLowerCase)),
      sort: moduleName(naturally),
    },
    {
      match: and(hasDefaultMember, hasNamedMembers, isWorkspaceModule, not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasDefaultMember, hasNamedMembers, isWorkspaceModule, member(startsWithUpperCase)),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasDefaultMember, hasNamedMembers, isWorkspaceModule, member(startsWithLowerCase)),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasOnlyNamedMembers, isWorkspaceModule, not(member(startsWithAlphanumeric))),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasOnlyNamedMembers, isWorkspaceModule, member(startsWithUpperCase)),
      sort: moduleName(naturally),
      sortNamedMembers: alias(unicode),
    },
    {
      match: and(hasOnlyNamedMembers, isWorkspaceModule, member(startsWithLowerCase)),
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
