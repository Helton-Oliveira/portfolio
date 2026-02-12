package com.exampledigisphere.portfolio.auth.DTO;

import com.exampledigisphere.portfolio.config.root.Info;

@Info(
  dev = Info.Dev.heltonOliveira,
  label = Info.Label.doc,
  date = "29/12/2025",
  description = "Resposta de permissões"
)
public record PermissionsResponse(
  Integer id,
  String name
) {
}
