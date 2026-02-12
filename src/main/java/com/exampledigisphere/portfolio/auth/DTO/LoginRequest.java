package com.exampledigisphere.portfolio.auth.DTO;

import com.exampledigisphere.portfolio.config.root.Info;
import jakarta.validation.constraints.NotBlank;

@Info(
  dev = Info.Dev.heltonOliveira,
  label = Info.Label.doc,
  date = "29/12/2025",
  description = "Requisição de login"
)
public record LoginRequest(
  @NotBlank String email,
  @NotBlank String password
) {
}
