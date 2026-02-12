package com.exampledigisphere.portfolio.config.web;

import com.exampledigisphere.portfolio.config.root.Info;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.web.config.EnableSpringDataWebSupport;

@Configuration
@EnableSpringDataWebSupport(
  pageSerializationMode = EnableSpringDataWebSupport.PageSerializationMode.VIA_DTO
)
@Info(
  dev = Info.Dev.heltonOliveira,
  label = Info.Label.doc,
  date = "29/12/2025",
  description = "Configuração web do Spring Data"
)
public class WebConfig {
}
