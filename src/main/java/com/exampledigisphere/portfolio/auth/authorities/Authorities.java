package com.exampledigisphere.portfolio.auth.authorities;

import com.exampledigisphere.portfolio.admin.file.domain.File;
import com.exampledigisphere.portfolio.admin.user.domain.User;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public final class Authorities {

  public static final Set<String> USER_AUTHORITIES = Set.of(
    User.Authority.USER_CREATE,
    User.Authority.USER_EDIT,
    User.Authority.USER_VIEW,
    User.Authority.USER_DELETE,
    User.Authority.USER_VIEW_LIST
  );

  public static final Set<String> FILE_AUTHORITIES = Set.of(
    File.Authority.FILE_CREATE,
    File.Authority.FILE_EDIT,
    File.Authority.FILE_VIEW,
    File.Authority.FILE_DELETE,
    File.Authority.FILE_VIEW_LIST
  );

  public static Set<String> ALL() {
    return Stream.of(
        USER_AUTHORITIES,
        FILE_AUTHORITIES
      ).flatMap(Set::stream)
      .collect(Collectors.toSet());
  }
}
