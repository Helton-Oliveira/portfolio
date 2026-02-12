package com.exampledigisphere.portfolio.admin.user.domain;

import com.exampledigisphere.portfolio.config.root.Association;
import com.exampledigisphere.portfolio.config.root.AssociationFetcher;
import org.hibernate.Hibernate;

import java.util.function.Consumer;

public enum UserAssociations implements AssociationFetcher<User>, Association {
  FILES(user -> Hibernate.initialize(user.getFiles()));

  private final Consumer<User> initializer;

  UserAssociations(final Consumer<User> initializer) {
    this.initializer = initializer;
  }

  @Override
  public void initialize(User entity) {
    this.initializer.accept(entity);
  }

  @Override
  public String getName() {
    return this.name();
  }
}
