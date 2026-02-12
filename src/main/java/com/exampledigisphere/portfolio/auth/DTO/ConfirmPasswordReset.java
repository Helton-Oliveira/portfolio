package com.exampledigisphere.portfolio.auth.DTO;

import jakarta.validation.constraints.NotBlank;

public record ConfirmPasswordReset(
  @NotBlank String newPassword,
  @NotBlank String resetCode
) {
}
