variable resource_group_name {}
variable resource_group_location {}
variable server_name {}
variable server_user {}
variable serverPassword {}
variable mysql_zone {}
variable application_tag {}
variable project_tag {}

locals {
  # size = 10*1024
  # version = "8.0"
  # sku_name = "B_Gen5_2" # Basic
  size_gb = 32
  version = "8.0.21"
  sku_name = "B_Standard_B1ms"
}

#resource "azurerm_mysql_server" "dbdepl" {
resource "azurerm_mysql_flexible_server" "dbdepl" {

    name                = var.server_name
    location            = var.resource_group_location
    resource_group_name = var.resource_group_name

    administrator_login          = var.server_user
    administrator_password = var.serverPassword

    sku_name = local.sku_name
    version  = local.version
    zone     = var.mysql_zone

    storage {
      size_gb = local.size_gb
    }

    # ssl_enforcement_enabled = false
    # ssl_minimal_tls_version_enforced = "TLSEnforcementDisabled"

    tags = {
        application = var.application_tag
        project = var.project_tag
    }

    lifecycle {
      ignore_changes = [
        zone
      ]
    }

}

output "url" {
  #value = azurerm_mysql_server.dbdepl.fqdn
  value = azurerm_mysql_flexible_server.dbdepl.fqdn
}

output "user" {
  #value = azurerm_mysql_server.dbdepl.administrator_login
  value = azurerm_mysql_flexible_server.dbdepl.administrator_login
}

output "password" {
  value = var.serverPassword
  
}
