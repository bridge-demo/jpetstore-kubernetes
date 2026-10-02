# Resource Configuration
resource_group_name      = "petstore-rg-demo"
resource_group_location  = "East US"

# MySQL Server Configuration
server_name              = "petstore-mysql-server"
administrator_login      = "adminazuredb1"
administratorPassword    = "Passw0rd1@123"
mysql_zone               = "1"

# AKS Cluster Configuration
kubernetes_cluster_name  = "petstoreAKSCluster"
#kubernetes_version       = "1.26.6"
workspace_name           = "petstoreAKSWS"

# Tags
application_tag          = "petstore"
project_tag              = "alpha"

# Log Analytics
new_log_analytics_workspace_required = "Yes"
