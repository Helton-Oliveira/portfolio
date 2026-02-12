package com.exampledigisphere.portfolio.admin.file;

import com.exampledigisphere.portfolio.admin.file.domain.File;
import com.exampledigisphere.portfolio.config.root.Association;
import com.exampledigisphere.portfolio.config.root.AssociationFetcher;
import org.hibernate.Hibernate;

import java.util.function.Consumer;

public enum FileAssociations implements AssociationFetcher<File>, Association {
  USER(file -> Hibernate.initialize(file.getUser()));

  private final Consumer<File> initializer;

  FileAssociations(final Consumer<File> initializer) {
    this.initializer = initializer;
  }

  @Override
  public void initialize(File entity) {
    this.initializer.accept(entity);
  }

  @Override
  public String getName() {
    return this.name();
  }
}
