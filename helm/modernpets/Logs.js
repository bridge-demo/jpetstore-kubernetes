"ingress-nginx" has been added to your repositories
2025-04-29T18:28:41.6408124Z Hang tight while we grab the latest from your chart repositories...
2025-04-29T18:28:41.6935798Z ...Successfully got an update from the "ingress-nginx" chart repository
2025-04-29T18:28:41.6936682Z Update Complete. ⎈Happy Helming!⎈
2025-04-29T18:28:41.7659831Z install.go:225: 2025-04-29 18:28:41.76535804 +0000 UTC m=+0.066671428 [debug] Original chart version: ""
2025-04-29T18:28:42.2403189Z install.go:242: 2025-04-29 18:28:42.239730476 +0000 UTC m=+0.541043764 [debug] CHART PATH: /home/vsts/.cache/helm/repository/ingress-nginx-4.12.1.tgz
2025-04-29T18:28:42.2403923Z 
2025-04-29T18:28:45.0798629Z client.go:142: 2025-04-29 18:28:45.079298951 +0000 UTC m=+3.380612339 [debug] creating 1 resource(s)
2025-04-29T18:28:45.4134185Z client.go:486: 2025-04-29 18:28:45.412928287 +0000 UTC m=+3.714241675 [debug] Starting delete for "ingress-nginx-admission" ServiceAccount
2025-04-29T18:28:45.4851598Z client.go:490: 2025-04-29 18:28:45.484646446 +0000 UTC m=+3.785959834 [debug] Ignoring delete failure for "ingress-nginx-admission" /v1, Kind=ServiceAccount: serviceaccounts "ingress-nginx-admission" not found
2025-04-29T18:28:45.4853453Z wait.go:104: 2025-04-29 18:28:45.484716946 +0000 UTC m=+3.786030234 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:45.9492964Z client.go:142: 2025-04-29 18:28:45.948880917 +0000 UTC m=+4.250194205 [debug] creating 1 resource(s)
2025-04-29T18:28:46.0409029Z client.go:486: 2025-04-29 18:28:46.040555504 +0000 UTC m=+4.341868792 [debug] Starting delete for "ingress-nginx-admission" ClusterRole
2025-04-29T18:28:46.1152202Z client.go:490: 2025-04-29 18:28:46.114667778 +0000 UTC m=+4.415981066 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=ClusterRole: clusterroles.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:28:46.1155955Z wait.go:104: 2025-04-29 18:28:46.114873279 +0000 UTC m=+4.416186667 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:46.4571256Z client.go:142: 2025-04-29 18:28:46.456700398 +0000 UTC m=+4.758013686 [debug] creating 1 resource(s)
2025-04-29T18:28:46.5369315Z client.go:486: 2025-04-29 18:28:46.536556286 +0000 UTC m=+4.837869574 [debug] Starting delete for "ingress-nginx-admission" ClusterRoleBinding
2025-04-29T18:28:46.6112103Z client.go:490: 2025-04-29 18:28:46.61067414 +0000 UTC m=+4.911987528 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=ClusterRoleBinding: clusterrolebindings.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:28:46.6113094Z wait.go:104: 2025-04-29 18:28:46.61078214 +0000 UTC m=+4.912095428 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:46.9395444Z client.go:142: 2025-04-29 18:28:46.938915847 +0000 UTC m=+5.240229235 [debug] creating 1 resource(s)
2025-04-29T18:28:47.0255719Z client.go:486: 2025-04-29 18:28:47.025073174 +0000 UTC m=+5.326386562 [debug] Starting delete for "ingress-nginx-admission" Role
2025-04-29T18:28:47.0988535Z client.go:490: 2025-04-29 18:28:47.098470123 +0000 UTC m=+5.399783411 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=Role: roles.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:28:47.0989599Z wait.go:104: 2025-04-29 18:28:47.098530223 +0000 UTC m=+5.399843511 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:47.5019832Z client.go:142: 2025-04-29 18:28:47.501511488 +0000 UTC m=+5.802824876 [debug] creating 1 resource(s)
2025-04-29T18:28:47.5821653Z client.go:486: 2025-04-29 18:28:47.581725779 +0000 UTC m=+5.883039067 [debug] Starting delete for "ingress-nginx-admission" RoleBinding
2025-04-29T18:28:47.6536372Z client.go:490: 2025-04-29 18:28:47.653199816 +0000 UTC m=+5.954513204 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=RoleBinding: rolebindings.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:28:47.6538183Z wait.go:104: 2025-04-29 18:28:47.653270016 +0000 UTC m=+5.954583404 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:48.0652348Z client.go:142: 2025-04-29 18:28:48.064701832 +0000 UTC m=+6.366015120 [debug] creating 1 resource(s)
2025-04-29T18:28:48.1426040Z client.go:486: 2025-04-29 18:28:48.142224706 +0000 UTC m=+6.443538094 [debug] Starting delete for "ingress-nginx-admission-create" Job
2025-04-29T18:28:48.2147687Z client.go:490: 2025-04-29 18:28:48.214226347 +0000 UTC m=+6.515539735 [debug] Ignoring delete failure for "ingress-nginx-admission-create" batch/v1, Kind=Job: jobs.batch "ingress-nginx-admission-create" not found
2025-04-29T18:28:48.2148646Z wait.go:104: 2025-04-29 18:28:48.214290647 +0000 UTC m=+6.515603935 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:48.7113612Z client.go:142: 2025-04-29 18:28:48.710506982 +0000 UTC m=+7.011820270 [debug] creating 1 resource(s)
2025-04-29T18:28:48.7859153Z client.go:720: 2025-04-29 18:28:48.78534864 +0000 UTC m=+7.086661928 [debug] Watching for changes to Job ingress-nginx-admission-create with timeout of 5m0s
2025-04-29T18:28:48.8631042Z client.go:748: 2025-04-29 18:28:48.862621312 +0000 UTC m=+7.163934700 [debug] Add/Modify event for ingress-nginx-admission-create: ADDED
2025-04-29T18:28:48.8632327Z client.go:787: 2025-04-29 18:28:48.862675113 +0000 UTC m=+7.163988501 [debug] ingress-nginx-admission-create: Jobs active: 1, jobs failed: 0, jobs succeeded: 0
2025-04-29T18:28:52.9451093Z client.go:748: 2025-04-29 18:28:52.944689178 +0000 UTC m=+11.246002666 [debug] Add/Modify event for ingress-nginx-admission-create: MODIFIED
2025-04-29T18:28:52.9452195Z client.go:787: 2025-04-29 18:28:52.944753478 +0000 UTC m=+11.246066866 [debug] ingress-nginx-admission-create: Jobs active: 0, jobs failed: 0, jobs succeeded: 0
2025-04-29T18:28:52.9630193Z client.go:748: 2025-04-29 18:28:52.962391586 +0000 UTC m=+11.263704974 [debug] Add/Modify event for ingress-nginx-admission-create: MODIFIED
2025-04-29T18:28:52.9679025Z client.go:486: 2025-04-29 18:28:52.967532418 +0000 UTC m=+11.268845806 [debug] Starting delete for "ingress-nginx-admission-create" Job
2025-04-29T18:28:53.0522002Z wait.go:104: 2025-04-29 18:28:53.051809733 +0000 UTC m=+11.353123121 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:53.2008157Z client.go:486: 2025-04-29 18:28:53.199903439 +0000 UTC m=+11.501216727 [debug] Starting delete for "ingress-nginx-admission" RoleBinding
2025-04-29T18:28:53.2756451Z wait.go:104: 2025-04-29 18:28:53.274872097 +0000 UTC m=+11.576185385 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:53.4344276Z client.go:486: 2025-04-29 18:28:53.43399727 +0000 UTC m=+11.735310658 [debug] Starting delete for "ingress-nginx-admission" Role
2025-04-29T18:28:53.5096192Z wait.go:104: 2025-04-29 18:28:53.50919013 +0000 UTC m=+11.810503418 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:53.6588311Z client.go:486: 2025-04-29 18:28:53.658449443 +0000 UTC m=+11.959762731 [debug] Starting delete for "ingress-nginx-admission" ClusterRoleBinding
2025-04-29T18:28:53.7374524Z wait.go:104: 2025-04-29 18:28:53.737033824 +0000 UTC m=+12.038347112 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:53.8185428Z client.go:486: 2025-04-29 18:28:53.81812532 +0000 UTC m=+12.119438608 [debug] Starting delete for "ingress-nginx-admission" ClusterRole
2025-04-29T18:28:53.9007224Z wait.go:104: 2025-04-29 18:28:53.900305122 +0000 UTC m=+12.201618410 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:53.9798772Z client.go:486: 2025-04-29 18:28:53.977782696 +0000 UTC m=+12.279095984 [debug] Starting delete for "ingress-nginx-admission" ServiceAccount
2025-04-29T18:28:54.0577221Z wait.go:104: 2025-04-29 18:28:54.057211282 +0000 UTC m=+12.358524670 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:28:54.2087002Z client.go:393: 2025-04-29 18:28:54.208196505 +0000 UTC m=+12.509509893 [debug] checking 11 resources for changes
2025-04-29T18:28:54.3577257Z client.go:414: 2025-04-29 18:28:54.357325878 +0000 UTC m=+12.658639266 [debug] Created a new ServiceAccount called "ingress-nginx" in ingress-nginx
2025-04-29T18:28:54.3578878Z 
2025-04-29T18:28:54.5218399Z client.go:414: 2025-04-29 18:28:54.521357832 +0000 UTC m=+12.822671220 [debug] Created a new ConfigMap called "ingress-nginx-controller" in ingress-nginx
2025-04-29T18:28:54.5219991Z 
2025-04-29T18:28:54.6696670Z client.go:692: 2025-04-29 18:28:54.669251292 +0000 UTC m=+12.970564680 [debug] Looks like there are no changes for ClusterRole "ingress-nginx"
2025-04-29T18:28:54.9016480Z client.go:692: 2025-04-29 18:28:54.901244241 +0000 UTC m=+13.202557729 [debug] Looks like there are no changes for ClusterRoleBinding "ingress-nginx"
2025-04-29T18:28:55.1331905Z client.go:414: 2025-04-29 18:28:55.132559987 +0000 UTC m=+13.433873375 [debug] Created a new Role called "ingress-nginx" in ingress-nginx
2025-04-29T18:28:55.1332242Z 
2025-04-29T18:28:55.2776312Z client.go:414: 2025-04-29 18:28:55.276955526 +0000 UTC m=+13.578268814 [debug] Created a new RoleBinding called "ingress-nginx" in ingress-nginx
2025-04-29T18:28:55.2779463Z 
2025-04-29T18:28:55.4353621Z client.go:414: 2025-04-29 18:28:55.434859245 +0000 UTC m=+13.736172633 [debug] Created a new Service called "ingress-nginx-controller-admission" in ingress-nginx
2025-04-29T18:28:55.4355089Z 
2025-04-29T18:28:55.5999447Z client.go:414: 2025-04-29 18:28:55.599454902 +0000 UTC m=+13.900768290 [debug] Created a new Service called "ingress-nginx-controller" in ingress-nginx
2025-04-29T18:28:55.6000389Z 
2025-04-29T18:28:55.7611122Z client.go:414: 2025-04-29 18:28:55.76071784 +0000 UTC m=+14.062031228 [debug] Created a new Deployment called "ingress-nginx-controller" in ingress-nginx
2025-04-29T18:28:55.7612239Z 
2025-04-29T18:28:55.9055318Z client.go:692: 2025-04-29 18:28:55.904998679 +0000 UTC m=+14.206312067 [debug] Looks like there are no changes for IngressClass "nginx"
2025-04-29T18:28:56.1254266Z client.go:701: 2025-04-29 18:28:56.124978758 +0000 UTC m=+14.426292146 [debug] Patch ValidatingWebhookConfiguration "ingress-nginx-admission" in namespace 
2025-04-29T18:28:56.1991443Z wait.go:50: 2025-04-29 18:28:56.198342185 +0000 UTC m=+14.499655573 [debug] beginning wait for 11 resources with timeout of 5m0s
2025-04-29T18:28:56.4180092Z ready.go:274: 2025-04-29 18:28:56.417524759 +0000 UTC m=+14.718838047 [debug] Service does not have load balancer ingress IP address: ingress-nginx/ingress-nginx-controller
2025-04-29T18:28:58.3470163Z ready.go:274: 2025-04-29 18:28:58.346585978 +0000 UTC m=+16.647899266 [debug] Service does not have load balancer ingress IP address: ingress-nginx/ingress-nginx-controller
2025-04-29T18:29:00.3479504Z ready.go:274: 2025-04-29 18:29:00.347494615 +0000 UTC m=+18.648807903 [debug] Service does not have load balancer ingress IP address: ingress-nginx/ingress-nginx-controller
2025-04-29T18:29:02.3475934Z ready.go:274: 2025-04-29 18:29:02.347223333 +0000 UTC m=+20.648536621 [debug] Service does not have load balancer ingress IP address: ingress-nginx/ingress-nginx-controller
2025-04-29T18:29:04.5150200Z ready.go:303: 2025-04-29 18:29:04.514499619 +0000 UTC m=+22.815812907 [debug] Deployment is not ready: ingress-nginx/ingress-nginx-controller. 0 out of 1 expected pods are ready
2025-04-29T18:29:06.5007060Z client.go:486: 2025-04-29 18:29:06.500345369 +0000 UTC m=+24.801658657 [debug] Starting delete for "ingress-nginx-admission" ServiceAccount
2025-04-29T18:29:06.5745334Z client.go:490: 2025-04-29 18:29:06.57409859 +0000 UTC m=+24.875411978 [debug] Ignoring delete failure for "ingress-nginx-admission" /v1, Kind=ServiceAccount: serviceaccounts "ingress-nginx-admission" not found
2025-04-29T18:29:06.5746944Z wait.go:104: 2025-04-29 18:29:06.574160691 +0000 UTC m=+24.875473979 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:07.2962698Z client.go:142: 2025-04-29 18:29:07.295792415 +0000 UTC m=+25.597105803 [debug] creating 1 resource(s)
2025-04-29T18:29:07.3733503Z client.go:486: 2025-04-29 18:29:07.372869255 +0000 UTC m=+25.674182543 [debug] Starting delete for "ingress-nginx-admission" ClusterRole
2025-04-29T18:29:07.4446076Z client.go:490: 2025-04-29 18:29:07.444226263 +0000 UTC m=+25.745539551 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=ClusterRole: clusterroles.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:29:07.4447250Z wait.go:104: 2025-04-29 18:29:07.444283563 +0000 UTC m=+25.745596851 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:07.7876203Z client.go:142: 2025-04-29 18:29:07.787143923 +0000 UTC m=+26.088457311 [debug] creating 1 resource(s)
2025-04-29T18:29:07.8718728Z client.go:486: 2025-04-29 18:29:07.870876601 +0000 UTC m=+26.172189889 [debug] Starting delete for "ingress-nginx-admission" ClusterRoleBinding
2025-04-29T18:29:07.9502639Z client.go:490: 2025-04-29 18:29:07.94933765 +0000 UTC m=+26.250651038 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=ClusterRoleBinding: clusterrolebindings.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:29:07.9504267Z wait.go:104: 2025-04-29 18:29:07.94942765 +0000 UTC m=+26.250741038 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:08.2948058Z client.go:142: 2025-04-29 18:29:08.294327021 +0000 UTC m=+26.595640309 [debug] creating 1 resource(s)
2025-04-29T18:29:08.3880109Z client.go:486: 2025-04-29 18:29:08.387331453 +0000 UTC m=+26.688644741 [debug] Starting delete for "ingress-nginx-admission" Role
2025-04-29T18:29:08.4597292Z client.go:490: 2025-04-29 18:29:08.459307364 +0000 UTC m=+26.760620752 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=Role: roles.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:29:08.4598495Z wait.go:104: 2025-04-29 18:29:08.459406865 +0000 UTC m=+26.760720153 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:08.8776943Z client.go:142: 2025-04-29 18:29:08.875578143 +0000 UTC m=+27.176891531 [debug] creating 1 resource(s)
2025-04-29T18:29:08.9581968Z client.go:486: 2025-04-29 18:29:08.957672513 +0000 UTC m=+27.258985901 [debug] Starting delete for "ingress-nginx-admission" RoleBinding
2025-04-29T18:29:09.0349053Z client.go:490: 2025-04-29 18:29:09.034428051 +0000 UTC m=+27.335741539 [debug] Ignoring delete failure for "ingress-nginx-admission" rbac.authorization.k8s.io/v1, Kind=RoleBinding: rolebindings.rbac.authorization.k8s.io "ingress-nginx-admission" not found
2025-04-29T18:29:09.0351263Z wait.go:104: 2025-04-29 18:29:09.034495152 +0000 UTC m=+27.335808440 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:09.4576035Z client.go:142: 2025-04-29 18:29:09.457083767 +0000 UTC m=+27.758397155 [debug] creating 1 resource(s)
2025-04-29T18:29:09.5428712Z client.go:486: 2025-04-29 18:29:09.542237153 +0000 UTC m=+27.843550441 [debug] Starting delete for "ingress-nginx-admission-patch" Job
2025-04-29T18:29:09.6170693Z client.go:490: 2025-04-29 18:29:09.616637379 +0000 UTC m=+27.917950767 [debug] Ignoring delete failure for "ingress-nginx-admission-patch" batch/v1, Kind=Job: jobs.batch "ingress-nginx-admission-patch" not found
2025-04-29T18:29:09.6172367Z wait.go:104: 2025-04-29 18:29:09.616698079 +0000 UTC m=+27.918011467 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:10.0305024Z client.go:142: 2025-04-29 18:29:10.030013341 +0000 UTC m=+28.331326729 [debug] creating 1 resource(s)
2025-04-29T18:29:10.1057908Z client.go:720: 2025-04-29 18:29:10.105379872 +0000 UTC m=+28.406693160 [debug] Watching for changes to Job ingress-nginx-admission-patch with timeout of 5m0s
2025-04-29T18:29:10.1758253Z client.go:748: 2025-04-29 18:29:10.175439272 +0000 UTC m=+28.476752660 [debug] Add/Modify event for ingress-nginx-admission-patch: ADDED
2025-04-29T18:29:10.1759809Z client.go:787: 2025-04-29 18:29:10.175482572 +0000 UTC m=+28.476795860 [debug] ingress-nginx-admission-patch: Jobs active: 1, jobs failed: 0, jobs succeeded: 0
2025-04-29T18:29:13.9761871Z client.go:748: 2025-04-29 18:29:13.975844104 +0000 UTC m=+32.277157492 [debug] Add/Modify event for ingress-nginx-admission-patch: MODIFIED
2025-04-29T18:29:13.9762891Z client.go:787: 2025-04-29 18:29:13.975889704 +0000 UTC m=+32.277203092 [debug] ingress-nginx-admission-patch: Jobs active: 0, jobs failed: 0, jobs succeeded: 0
2025-04-29T18:29:14.0012241Z client.go:748: 2025-04-29 18:29:14.000880252 +0000 UTC m=+32.302193640 [debug] Add/Modify event for ingress-nginx-admission-patch: MODIFIED
2025-04-29T18:29:14.0084848Z client.go:486: 2025-04-29 18:29:14.007448291 +0000 UTC m=+32.308761679 [debug] Starting delete for "ingress-nginx-admission-patch" Job
2025-04-29T18:29:14.0924686Z wait.go:104: 2025-04-29 18:29:14.092129694 +0000 UTC m=+32.393443082 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:14.2489914Z client.go:486: 2025-04-29 18:29:14.248565722 +0000 UTC m=+32.549879010 [debug] Starting delete for "ingress-nginx-admission" RoleBinding
2025-04-29T18:29:14.3225686Z wait.go:104: 2025-04-29 18:29:14.322173159 +0000 UTC m=+32.623486547 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:14.4740049Z client.go:486: 2025-04-29 18:29:14.473438056 +0000 UTC m=+32.774751344 [debug] Starting delete for "ingress-nginx-admission" Role
2025-04-29T18:29:14.5487964Z wait.go:104: 2025-04-29 18:29:14.5483121 +0000 UTC m=+32.849625488 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:14.7229792Z client.go:486: 2025-04-29 18:29:14.722535234 +0000 UTC m=+33.023848622 [debug] Starting delete for "ingress-nginx-admission" ClusterRoleBinding
2025-04-29T18:29:14.8020966Z wait.go:104: 2025-04-29 18:29:14.801637003 +0000 UTC m=+33.102950291 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:14.8807246Z client.go:486: 2025-04-29 18:29:14.880406471 +0000 UTC m=+33.181719759 [debug] Starting delete for "ingress-nginx-admission" ClusterRole
2025-04-29T18:29:14.9603547Z wait.go:104: 2025-04-29 18:29:14.959784942 +0000 UTC m=+33.261098230 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:15.0380074Z client.go:486: 2025-04-29 18:29:15.037399802 +0000 UTC m=+33.338713090 [debug] Starting delete for "ingress-nginx-admission" ServiceAccount
2025-04-29T18:29:15.1132333Z wait.go:104: 2025-04-29 18:29:15.112759049 +0000 UTC m=+33.414072437 [debug] beginning wait for 1 resources to be deleted with timeout of 5m0s
2025-04-29T18:29:15.7098840Z NAME: ingress-nginx
2025-04-29T18:29:15.7106855Z LAST DEPLOYED: Tue Apr 29 18:28:42 2025
2025-04-29T18:29:15.7107192Z NAMESPACE: ingress-nginx
2025-04-29T18:29:15.7109071Z STATUS: deployed
2025-04-29T18:29:15.7109543Z REVISION: 1
2025-04-29T18:29:15.7109771Z TEST SUITE: None
2025-04-29T18:29:15.7109981Z USER-SUPPLIED VALUES:
2025-04-29T18:29:15.7110181Z controller:
2025-04-29T18:29:15.7110402Z   service:
2025-04-29T18:29:15.7110609Z     type: LoadBalancer
2025-04-29T18:29:15.7110707Z 
2025-04-29T18:29:15.7114780Z COMPUTED VALUES:
2025-04-29T18:29:15.7154602Z commonLabels: {}
2025-04-29T18:29:15.7155299Z controller:
2025-04-29T18:29:15.7155740Z   addHeaders: {}
2025-04-29T18:29:15.7156162Z   admissionWebhooks:
2025-04-29T18:29:15.7158153Z     annotations: {}
2025-04-29T18:29:15.7158557Z     certManager:
2025-04-29T18:29:15.7158911Z       admissionCert:
2025-04-29T18:29:15.7160258Z         duration: ""
2025-04-29T18:29:15.7160901Z       enabled: false
2025-04-29T18:29:15.7163000Z       rootCert:
2025-04-29T18:29:15.7164347Z         duration: ""
2025-04-29T18:29:15.7164828Z     certificate: /usr/local/certificates/cert
2025-04-29T18:29:15.7165217Z     createSecretJob:
2025-04-29T18:29:15.7166735Z       name: create
2025-04-29T18:29:15.7167140Z       resources: {}
2025-04-29T18:29:15.7167651Z       securityContext:
2025-04-29T18:29:15.7169055Z         allowPrivilegeEscalation: false
2025-04-29T18:29:15.7169532Z         capabilities:
2025-04-29T18:29:15.7170612Z           drop:
2025-04-29T18:29:15.7170948Z           - ALL
2025-04-29T18:29:15.7171313Z         readOnlyRootFilesystem: true
2025-04-29T18:29:15.7178580Z         runAsGroup: 65532
2025-04-29T18:29:15.7179546Z         runAsNonRoot: true
2025-04-29T18:29:15.7180133Z         runAsUser: 65532
2025-04-29T18:29:15.7180387Z         seccompProfile:
2025-04-29T18:29:15.7180607Z           type: RuntimeDefault
2025-04-29T18:29:15.7180856Z     enabled: true
2025-04-29T18:29:15.7181066Z     extraEnvs: []
2025-04-29T18:29:15.7181306Z     failurePolicy: Fail
2025-04-29T18:29:15.7181542Z     key: /usr/local/certificates/key
2025-04-29T18:29:15.7181793Z     labels: {}
2025-04-29T18:29:15.7182004Z     name: admission
2025-04-29T18:29:15.7182227Z     namespaceSelector: {}
2025-04-29T18:29:15.7182476Z     objectSelector: {}
2025-04-29T18:29:15.7182680Z     patch:
2025-04-29T18:29:15.7182910Z       enabled: true
2025-04-29T18:29:15.7183110Z       image:
2025-04-29T18:29:15.7183379Z         digest: sha256:e8825994b7a2c7497375a9b945f386506ca6a3eda80b89b74ef2db743f66a5ea
2025-04-29T18:29:15.7183692Z         image: ingress-nginx/kube-webhook-certgen
2025-04-29T18:29:15.7183936Z         pullPolicy: IfNotPresent
2025-04-29T18:29:15.7184166Z         tag: v1.5.2
2025-04-29T18:29:15.7184365Z       labels: {}
2025-04-29T18:29:15.7184591Z       networkPolicy:
2025-04-29T18:29:15.7184796Z         enabled: false
2025-04-29T18:29:15.7184996Z       nodeSelector:
2025-04-29T18:29:15.7185228Z         kubernetes.io/os: linux
2025-04-29T18:29:15.7185441Z       podAnnotations: {}
2025-04-29T18:29:15.7185670Z       priorityClassName: ""
2025-04-29T18:29:15.7186289Z       rbac:
2025-04-29T18:29:15.7186485Z         create: true
2025-04-29T18:29:15.7186717Z       securityContext: {}
2025-04-29T18:29:15.7186922Z       serviceAccount:
2025-04-29T18:29:15.7187168Z         automountServiceAccountToken: true
2025-04-29T18:29:15.7187563Z         create: true
2025-04-29T18:29:15.7187802Z         name: ""
2025-04-29T18:29:15.7188000Z       tolerations: []
2025-04-29T18:29:15.7188201Z     patchWebhookJob:
2025-04-29T18:29:15.7188428Z       name: patch
2025-04-29T18:29:15.7188791Z       resources: {}
2025-04-29T18:29:15.7189017Z       securityContext:
2025-04-29T18:29:15.7189230Z         allowPrivilegeEscalation: false
2025-04-29T18:29:15.7189473Z         capabilities:
2025-04-29T18:29:15.7190061Z           drop:
2025-04-29T18:29:15.7190254Z           - ALL
2025-04-29T18:29:15.7190485Z         readOnlyRootFilesystem: true
2025-04-29T18:29:15.7190704Z         runAsGroup: 65532
2025-04-29T18:29:15.7190932Z         runAsNonRoot: true
2025-04-29T18:29:15.7191149Z         runAsUser: 65532
2025-04-29T18:29:15.7191354Z         seccompProfile:
2025-04-29T18:29:15.7191585Z           type: RuntimeDefault
2025-04-29T18:29:15.7191788Z     port: 8443
2025-04-29T18:29:15.7192002Z     service:
2025-04-29T18:29:15.7192198Z       annotations: {}
2025-04-29T18:29:15.7192421Z       externalIPs: []
2025-04-29T18:29:15.7192629Z       loadBalancerSourceRanges: []
2025-04-29T18:29:15.7192843Z       servicePort: 443
2025-04-29T18:29:15.7193071Z       type: ClusterIP
2025-04-29T18:29:15.7193279Z   affinity: {}
2025-04-29T18:29:15.7193514Z   allowSnippetAnnotations: false
2025-04-29T18:29:15.7193728Z   annotations: {}
2025-04-29T18:29:15.7193948Z   autoscaling:
2025-04-29T18:29:15.7194150Z     annotations: {}
2025-04-29T18:29:15.7194352Z     behavior: {}
2025-04-29T18:29:15.7194575Z     enabled: false
2025-04-29T18:29:15.7194779Z     maxReplicas: 11
2025-04-29T18:29:15.7195005Z     minReplicas: 1
2025-04-29T18:29:15.7195219Z     targetCPUUtilizationPercentage: 50
2025-04-29T18:29:15.7195461Z     targetMemoryUtilizationPercentage: 50
2025-04-29T18:29:15.7195715Z   autoscalingTemplate: []
2025-04-29T18:29:15.7195914Z   config: {}
2025-04-29T18:29:15.7196142Z   configAnnotations: {}
2025-04-29T18:29:15.7196352Z   configMapNamespace: ""
2025-04-29T18:29:15.7196591Z   containerName: controller
2025-04-29T18:29:15.7196798Z   containerPort:
2025-04-29T18:29:15.7196994Z     http: 80
2025-04-29T18:29:15.7197207Z     https: 443
2025-04-29T18:29:15.7197796Z   containerSecurityContext: {}
2025-04-29T18:29:15.7198071Z   customTemplate:
2025-04-29T18:29:15.7198277Z     configMapKey: ""
2025-04-29T18:29:15.7198479Z     configMapName: ""
2025-04-29T18:29:15.7198718Z   disableLeaderElection: false
2025-04-29T18:29:15.7198931Z   dnsConfig: {}
2025-04-29T18:29:15.7199161Z   dnsPolicy: ClusterFirst
2025-04-29T18:29:15.7199367Z   electionID: ""
2025-04-29T18:29:15.7199568Z   electionTTL: ""
2025-04-29T18:29:15.7199805Z   enableAnnotationValidations: true
2025-04-29T18:29:15.7200031Z   enableMimalloc: true
2025-04-29T18:29:15.7200275Z   enableTopologyAwareRouting: false
2025-04-29T18:29:15.7200661Z   extraArgs: {}
2025-04-29T18:29:15.7200884Z   extraContainers: []
2025-04-29T18:29:15.7201077Z   extraEnvs: []
2025-04-29T18:29:15.7201277Z   extraInitContainers: []
2025-04-29T18:29:15.7201501Z   extraModules: []
2025-04-29T18:29:15.7202208Z   extraVolumeMounts: []
2025-04-29T18:29:15.7203135Z   extraVolumes: []
2025-04-29T18:29:15.7203388Z   healthCheckHost: ""
2025-04-29T18:29:15.7203602Z   healthCheckPath: /healthz
2025-04-29T18:29:15.7203838Z   hostAliases: []
2025-04-29T18:29:15.7204043Z   hostNetwork: false
2025-04-29T18:29:15.7204243Z   hostPort:
2025-04-29T18:29:15.7204461Z     enabled: false
2025-04-29T18:29:15.7204654Z     ports:
2025-04-29T18:29:15.7204864Z       http: 80
2025-04-29T18:29:15.7205058Z       https: 443
2025-04-29T18:29:15.7205269Z   hostname: {}
2025-04-29T18:29:15.7205458Z   image:
2025-04-29T18:29:15.7205815Z     allowPrivilegeEscalation: false
2025-04-29T18:29:15.7206240Z     chroot: false
2025-04-29T18:29:15.7206494Z     digest: sha256:d2fbc4ec70d8aa2050dd91a91506e998765e86c96f32cffb56c503c9c34eed5b
2025-04-29T18:29:15.7206817Z     digestChroot: sha256:90155c86548e0bb95b3abf1971cd687d8f5d43f340cfca0ad3484e2b8351096e
2025-04-29T18:29:15.7207075Z     image: ingress-nginx/controller
2025-04-29T18:29:15.7207307Z     pullPolicy: IfNotPresent
2025-04-29T18:29:15.7207704Z     readOnlyRootFilesystem: false
2025-04-29T18:29:15.7207910Z     runAsGroup: 82
2025-04-29T18:29:15.7208121Z     runAsNonRoot: true
2025-04-29T18:29:15.7208446Z     runAsUser: 101
2025-04-29T18:29:15.7208656Z     seccompProfile:
2025-04-29T18:29:15.7208853Z       type: RuntimeDefault
2025-04-29T18:29:15.7209043Z     tag: v1.12.1
2025-04-29T18:29:15.7209251Z   ingressClass: nginx
2025-04-29T18:29:15.7209450Z   ingressClassByName: false
2025-04-29T18:29:15.7209674Z   ingressClassResource:
2025-04-29T18:29:15.7209863Z     aliases: []
2025-04-29T18:29:15.7210068Z     annotations: {}
2025-04-29T18:29:15.7210281Z     controllerValue: k8s.io/ingress-nginx
2025-04-29T18:29:15.7210490Z     default: false
2025-04-29T18:29:15.7210694Z     enabled: true
2025-04-29T18:29:15.7210883Z     name: nginx
2025-04-29T18:29:15.7211084Z     parameters: {}
2025-04-29T18:29:15.7211263Z   keda:
2025-04-29T18:29:15.7211451Z     apiVersion: keda.sh/v1alpha1
2025-04-29T18:29:15.7211670Z     behavior: {}
2025-04-29T18:29:15.7211862Z     cooldownPeriod: 300
2025-04-29T18:29:15.7212072Z     enabled: false
2025-04-29T18:29:15.7212260Z     maxReplicas: 11
2025-04-29T18:29:15.7212470Z     minReplicas: 1
2025-04-29T18:29:15.7212847Z     pollingInterval: 30
2025-04-29T18:29:15.7213061Z     restoreToOriginalReplicaCount: false
2025-04-29T18:29:15.7213291Z     scaledObject:
2025-04-29T18:29:15.7213485Z       annotations: {}
2025-04-29T18:29:15.7213690Z     triggers: []
2025-04-29T18:29:15.7213886Z   kind: Deployment
2025-04-29T18:29:15.7214073Z   labels: {}
2025-04-29T18:29:15.7214272Z   lifecycle:
2025-04-29T18:29:15.7214457Z     preStop:
2025-04-29T18:29:15.7214655Z       exec:
2025-04-29T18:29:15.7214839Z         command:
2025-04-29T18:29:15.7215032Z         - /wait-shutdown
2025-04-29T18:29:15.7215250Z   livenessProbe:
2025-04-29T18:29:15.7215448Z     failureThreshold: 5
2025-04-29T18:29:15.7215653Z     httpGet:
2025-04-29T18:29:15.7215842Z       path: /healthz
2025-04-29T18:29:15.7216047Z       port: 10254
2025-04-29T18:29:15.7216236Z       scheme: HTTP
2025-04-29T18:29:15.7216437Z     initialDelaySeconds: 10
2025-04-29T18:29:15.7216654Z     periodSeconds: 10
2025-04-29T18:29:15.7216855Z     successThreshold: 1
2025-04-29T18:29:15.7217066Z     timeoutSeconds: 1
2025-04-29T18:29:15.7217264Z   maxmindLicenseKey: ""
2025-04-29T18:29:15.7217566Z   metrics:
2025-04-29T18:29:15.7217941Z     enabled: false
2025-04-29T18:29:15.7218127Z     port: 10254
2025-04-29T18:29:15.7218329Z     portName: metrics
2025-04-29T18:29:15.7218517Z     prometheusRule:
2025-04-29T18:29:15.7218728Z       additionalLabels: {}
2025-04-29T18:29:15.7218920Z       annotations: {}
2025-04-29T18:29:15.7219109Z       enabled: false
2025-04-29T18:29:15.7219306Z       rules: []
2025-04-29T18:29:15.7219484Z     service:
2025-04-29T18:29:15.7219679Z       annotations: {}
2025-04-29T18:29:15.7219863Z       enabled: true
2025-04-29T18:29:15.7220050Z       externalIPs: []
2025-04-29T18:29:15.7220248Z       labels: {}
2025-04-29T18:29:15.7220441Z       loadBalancerSourceRanges: []
2025-04-29T18:29:15.7220657Z       servicePort: 10254
2025-04-29T18:29:15.7220846Z       type: ClusterIP
2025-04-29T18:29:15.7221050Z     serviceMonitor:
2025-04-29T18:29:15.7221247Z       additionalLabels: {}
2025-04-29T18:29:15.7221435Z       annotations: {}
2025-04-29T18:29:15.7221633Z       enabled: false
2025-04-29T18:29:15.7221822Z       metricRelabelings: []
2025-04-29T18:29:15.7222023Z       namespace: ""
2025-04-29T18:29:15.7222212Z       namespaceSelector: {}
2025-04-29T18:29:15.7222768Z       relabelings: []
2025-04-29T18:29:15.7222990Z       scrapeInterval: 30s
2025-04-29T18:29:15.7223198Z       targetLabels: []
2025-04-29T18:29:15.7223560Z   minAvailable: 1
2025-04-29T18:29:15.7223774Z   minReadySeconds: 0
2025-04-29T18:29:15.7224012Z   name: controller
2025-04-29T18:29:15.7224225Z   networkPolicy:
2025-04-29T18:29:15.7224434Z     enabled: false
2025-04-29T18:29:15.7224671Z   nodeSelector:
2025-04-29T18:29:15.7224885Z     kubernetes.io/os: linux
2025-04-29T18:29:15.7225127Z   podAnnotations: {}
2025-04-29T18:29:15.7225331Z   podLabels: {}
2025-04-29T18:29:15.7225542Z   podSecurityContext: {}
2025-04-29T18:29:15.7225784Z   priorityClassName: ""
2025-04-29T18:29:15.7226097Z   progressDeadlineSeconds: 0
2025-04-29T18:29:15.7226343Z   proxySetHeaders: {}
2025-04-29T18:29:15.7226600Z   publishService:
2025-04-29T18:29:15.7226839Z     enabled: true
2025-04-29T18:29:15.7227047Z     pathOverride: ""
2025-04-29T18:29:15.7227258Z   readinessProbe:
2025-04-29T18:29:15.7227602Z     failureThreshold: 3
2025-04-29T18:29:15.7227812Z     httpGet:
2025-04-29T18:29:15.7228042Z       path: /healthz
2025-04-29T18:29:15.7228255Z       port: 10254
2025-04-29T18:29:15.7228459Z       scheme: HTTP
2025-04-29T18:29:15.7228700Z     initialDelaySeconds: 10
2025-04-29T18:29:15.7228925Z     periodSeconds: 10
2025-04-29T18:29:15.7229166Z     successThreshold: 1
2025-04-29T18:29:15.7229377Z     timeoutSeconds: 1
2025-04-29T18:29:15.7229610Z   replicaCount: 1
2025-04-29T18:29:15.7229831Z   reportNodeInternalIp: false
2025-04-29T18:29:15.7230044Z   resources:
2025-04-29T18:29:15.7230268Z     requests:
2025-04-29T18:29:15.7230468Z       cpu: 100m
2025-04-29T18:29:15.7230696Z       memory: 90Mi
2025-04-29T18:29:15.7230897Z   scope:
2025-04-29T18:29:15.7231096Z     enabled: false
2025-04-29T18:29:15.7231328Z     namespace: ""
2025-04-29T18:29:15.7231540Z     namespaceSelector: ""
2025-04-29T18:29:15.7231770Z   service:
2025-04-29T18:29:15.7231976Z     annotations: {}
2025-04-29T18:29:15.7232185Z     appProtocol: true
2025-04-29T18:29:15.7232416Z     clusterIP: ""
2025-04-29T18:29:15.7232624Z     enableHttp: true
2025-04-29T18:29:15.7232859Z     enableHttps: true
2025-04-29T18:29:15.7233075Z     enabled: true
2025-04-29T18:29:15.7233303Z     external:
2025-04-29T18:29:15.7233510Z       enabled: true
2025-04-29T18:29:15.7233715Z     externalIPs: []
2025-04-29T18:29:15.7233949Z     externalTrafficPolicy: ""
2025-04-29T18:29:15.7234322Z     internal:
2025-04-29T18:29:15.7234541Z       annotations: {}
2025-04-29T18:29:15.7234920Z       appProtocol: true
2025-04-29T18:29:15.7235302Z       clusterIP: ""
2025-04-29T18:29:15.7235534Z       enabled: false
2025-04-29T18:29:15.7235742Z       externalIPs: []
2025-04-29T18:29:15.7235981Z       externalTrafficPolicy: ""
2025-04-29T18:29:15.7236197Z       ipFamilies:
2025-04-29T18:29:15.7236586Z       - IPv4
2025-04-29T18:29:15.7236793Z       ipFamilyPolicy: SingleStack
2025-04-29T18:29:15.7237012Z       loadBalancerClass: ""
2025-04-29T18:29:15.7237527Z       loadBalancerIP: ""
2025-04-29T18:29:15.7237757Z       loadBalancerSourceRanges: []
2025-04-29T18:29:15.7238160Z       nodePorts:
2025-04-29T18:29:15.7238359Z         http: ""
2025-04-29T18:29:15.7238552Z         https: ""
2025-04-29T18:29:15.7238768Z         tcp: {}
2025-04-29T18:29:15.7238954Z         udp: {}
2025-04-29T18:29:15.7239164Z       ports: {}
2025-04-29T18:29:15.7239364Z       sessionAffinity: ""
2025-04-29T18:29:15.7239594Z       targetPorts: {}
2025-04-29T18:29:15.7239941Z       type: ""
2025-04-29T18:29:15.7240128Z     ipFamilies:
2025-04-29T18:29:15.7240336Z     - IPv4
2025-04-29T18:29:15.7240535Z     ipFamilyPolicy: SingleStack
2025-04-29T18:29:15.7240757Z     labels: {}
2025-04-29T18:29:15.7240956Z     loadBalancerClass: ""
2025-04-29T18:29:15.7241157Z     loadBalancerIP: ""
2025-04-29T18:29:15.7241386Z     loadBalancerSourceRanges: []
2025-04-29T18:29:15.7241584Z     nodePorts:
2025-04-29T18:29:15.7241789Z       http: ""
2025-04-29T18:29:15.7241974Z       https: ""
2025-04-29T18:29:15.7242177Z       tcp: {}
2025-04-29T18:29:15.7242354Z       udp: {}
2025-04-29T18:29:15.7242533Z     ports:
2025-04-29T18:29:15.7242738Z       http: 80
2025-04-29T18:29:15.7243050Z       https: 443
2025-04-29T18:29:15.7243271Z     sessionAffinity: ""
2025-04-29T18:29:15.7243466Z     targetPorts:
2025-04-29T18:29:15.7243657Z       http: http
2025-04-29T18:29:15.7243873Z       https: https
2025-04-29T18:29:15.7244071Z     type: LoadBalancer
2025-04-29T18:29:15.7244303Z   shareProcessNamespace: false
2025-04-29T18:29:15.7244499Z   sysctls: {}
2025-04-29T18:29:15.7244679Z   tcp:
2025-04-29T18:29:15.7244888Z     annotations: {}
2025-04-29T18:29:15.7245089Z     configMapNamespace: ""
2025-04-29T18:29:15.7245325Z   terminationGracePeriodSeconds: 300
2025-04-29T18:29:15.7245637Z   tolerations: []
2025-04-29T18:29:15.7245868Z   topologySpreadConstraints: []
2025-04-29T18:29:15.7246065Z   udp:
2025-04-29T18:29:15.7246253Z     annotations: {}
2025-04-29T18:29:15.7246479Z     configMapNamespace: ""
2025-04-29T18:29:15.7246687Z   unhealthyPodEvictionPolicy: ""
2025-04-29T18:29:15.7246917Z   updateStrategy: {}
2025-04-29T18:29:15.7247126Z   watchIngressWithoutClass: false
2025-04-29T18:29:15.7247343Z defaultBackend:
2025-04-29T18:29:15.7247904Z   affinity: {}
2025-04-29T18:29:15.7248102Z   autoscaling:
2025-04-29T18:29:15.7248325Z     annotations: {}
2025-04-29T18:29:15.7248526Z     enabled: false
2025-04-29T18:29:15.7248754Z     maxReplicas: 2
2025-04-29T18:29:15.7248955Z     minReplicas: 1
2025-04-29T18:29:15.7249172Z     targetCPUUtilizationPercentage: 50
2025-04-29T18:29:15.7249435Z     targetMemoryUtilizationPercentage: 50
2025-04-29T18:29:15.7249671Z   containerSecurityContext: {}
2025-04-29T18:29:15.7249906Z   enabled: false
2025-04-29T18:29:15.7250113Z   extraArgs: {}
2025-04-29T18:29:15.7250318Z   extraConfigMaps: []
2025-04-29T18:29:15.7250730Z   extraEnvs: []
2025-04-29T18:29:15.7250928Z   extraVolumeMounts: []
2025-04-29T18:29:15.7251148Z   extraVolumes: []
2025-04-29T18:29:15.7251334Z   image:
2025-04-29T18:29:15.7251556Z     allowPrivilegeEscalation: false
2025-04-29T18:29:15.7251774Z     image: defaultbackend-amd64
2025-04-29T18:29:15.7251987Z     pullPolicy: IfNotPresent
2025-04-29T18:29:15.7252231Z     readOnlyRootFilesystem: true
2025-04-29T18:29:15.7252440Z     runAsGroup: 65534
2025-04-29T18:29:15.7252667Z     runAsNonRoot: true
2025-04-29T18:29:15.7252866Z     runAsUser: 65534
2025-04-29T18:29:15.7253063Z     seccompProfile:
2025-04-29T18:29:15.7253289Z       type: RuntimeDefault
2025-04-29T18:29:15.7253484Z     tag: "1.5"
2025-04-29T18:29:15.7253691Z   labels: {}
2025-04-29T18:29:15.7253882Z   livenessProbe:
2025-04-29T18:29:15.7254105Z     failureThreshold: 3
2025-04-29T18:29:15.7254310Z     initialDelaySeconds: 30
2025-04-29T18:29:15.7254518Z     periodSeconds: 10
2025-04-29T18:29:15.7254740Z     successThreshold: 1
2025-04-29T18:29:15.7254938Z     timeoutSeconds: 5
2025-04-29T18:29:15.7255153Z   minAvailable: 1
2025-04-29T18:29:15.7255349Z   minReadySeconds: 0
2025-04-29T18:29:15.7255549Z   name: defaultbackend
2025-04-29T18:29:15.7255767Z   networkPolicy:
2025-04-29T18:29:15.7255961Z     enabled: false
2025-04-29T18:29:15.7256175Z   nodeSelector:
2025-04-29T18:29:15.7256380Z     kubernetes.io/os: linux
2025-04-29T18:29:15.7256601Z   podAnnotations: {}
2025-04-29T18:29:15.7256794Z   podLabels: {}
2025-04-29T18:29:15.7256989Z   podSecurityContext: {}
2025-04-29T18:29:15.7257200Z   port: 8080
2025-04-29T18:29:15.7257496Z   priorityClassName: ""
2025-04-29T18:29:15.7258702Z   readinessProbe:
2025-04-29T18:29:15.7259372Z     failureThreshold: 6
2025-04-29T18:29:15.7259599Z     initialDelaySeconds: 0
2025-04-29T18:29:15.7259840Z     periodSeconds: 5
2025-04-29T18:29:15.7260053Z     successThreshold: 1
2025-04-29T18:29:15.7260295Z     timeoutSeconds: 5
2025-04-29T18:29:15.7260503Z   replicaCount: 1
2025-04-29T18:29:15.7260732Z   resources: {}
2025-04-29T18:29:15.7260930Z   service:
2025-04-29T18:29:15.7261134Z     annotations: {}
2025-04-29T18:29:15.7261365Z     externalIPs: []
2025-04-29T18:29:15.7261581Z     loadBalancerSourceRanges: []
2025-04-29T18:29:15.7261823Z     servicePort: 80
2025-04-29T18:29:15.7262030Z     type: ClusterIP
2025-04-29T18:29:15.7262240Z   serviceAccount:
2025-04-29T18:29:15.7262685Z     automountServiceAccountToken: true
2025-04-29T18:29:15.7263067Z     create: true
2025-04-29T18:29:15.7263477Z     name: ""
2025-04-29T18:29:15.7263663Z   tolerations: []
2025-04-29T18:29:15.7263891Z   topologySpreadConstraints: []
2025-04-29T18:29:15.7264103Z   unhealthyPodEvictionPolicy: ""
2025-04-29T18:29:15.7264310Z   updateStrategy: {}
2025-04-29T18:29:15.7264520Z dhParam: ""
2025-04-29T18:29:15.7264698Z global:
2025-04-29T18:29:15.7264897Z   image:
2025-04-29T18:29:15.7265091Z     registry: registry.k8s.io
2025-04-29T18:29:15.7265399Z imagePullSecrets: []
2025-04-29T18:29:15.7265624Z namespaceOverride: ""
2025-04-29T18:29:15.7265820Z portNamePrefix: ""
2025-04-29T18:29:15.7266038Z rbac:
2025-04-29T18:29:15.7266222Z   create: true
2025-04-29T18:29:15.7266414Z   scope: false
2025-04-29T18:29:15.7266637Z revisionHistoryLimit: 10
2025-04-29T18:29:15.7266840Z serviceAccount:
2025-04-29T18:29:15.7267062Z   annotations: {}
2025-04-29T18:29:15.7267269Z   automountServiceAccountToken: true
2025-04-29T18:29:15.7267730Z   create: true
2025-04-29T18:29:15.7268132Z   name: ""
2025-04-29T18:29:15.7268318Z tcp: {}
2025-04-29T18:29:15.7268522Z udp: {}
2025-04-29T18:29:15.7268584Z 
2025-04-29T18:29:15.7268789Z HOOKS:
2025-04-29T18:29:15.7268972Z ---
2025-04-29T18:29:15.7269243Z # Source: ingress-nginx/templates/admission-webhooks/job-patch/serviceaccount.yaml
2025-04-29T18:29:15.7269497Z apiVersion: v1
2025-04-29T18:29:15.7269701Z kind: ServiceAccount
2025-04-29T18:29:15.7269924Z metadata:
2025-04-29T18:29:15.7270133Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7270386Z   namespace: ingress-nginx
2025-04-29T18:29:15.7270591Z   annotations:
2025-04-29T18:29:15.7270833Z     "helm.sh/hook": pre-install,pre-upgrade,post-install,post-upgrade
2025-04-29T18:29:15.7271145Z     "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
2025-04-29T18:29:15.7271379Z   labels:
2025-04-29T18:29:15.7271613Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7271850Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7272282Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7272879Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7273281Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7273727Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7273979Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7274257Z automountServiceAccountToken: true
2025-04-29T18:29:15.7274472Z ---
2025-04-29T18:29:15.7274750Z # Source: ingress-nginx/templates/admission-webhooks/job-patch/clusterrole.yaml
2025-04-29T18:29:15.7275034Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7275290Z kind: ClusterRole
2025-04-29T18:29:15.7275497Z metadata:
2025-04-29T18:29:15.7275711Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7276002Z   annotations:
2025-04-29T18:29:15.7276254Z     "helm.sh/hook": pre-install,pre-upgrade,post-install,post-upgrade
2025-04-29T18:29:15.7276574Z     "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
2025-04-29T18:29:15.7276822Z   labels:
2025-04-29T18:29:15.7277037Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7277575Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7277814Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7278065Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7278295Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7278549Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7278783Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7278998Z rules:
2025-04-29T18:29:15.7279203Z   - apiGroups:
2025-04-29T18:29:15.7279408Z       - admissionregistration.k8s.io
2025-04-29T18:29:15.7279631Z     resources:
2025-04-29T18:29:15.7279834Z       - validatingwebhookconfigurations
2025-04-29T18:29:15.7280053Z     verbs:
2025-04-29T18:29:15.7280233Z       - get
2025-04-29T18:29:15.7280412Z       - update
2025-04-29T18:29:15.7280614Z ---
2025-04-29T18:29:15.7280981Z # Source: ingress-nginx/templates/admission-webhooks/job-patch/clusterrolebinding.yaml
2025-04-29T18:29:15.7281268Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7281492Z kind: ClusterRoleBinding
2025-04-29T18:29:15.7281714Z metadata:
2025-04-29T18:29:15.7281913Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7282115Z   annotations:
2025-04-29T18:29:15.7282368Z     "helm.sh/hook": pre-install,pre-upgrade,post-install,post-upgrade
2025-04-29T18:29:15.7282639Z     "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
2025-04-29T18:29:15.7282979Z   labels:
2025-04-29T18:29:15.7283179Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7283426Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7283659Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7283887Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7284134Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7284359Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7284622Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7284834Z roleRef:
2025-04-29T18:29:15.7285058Z   apiGroup: rbac.authorization.k8s.io
2025-04-29T18:29:15.7285270Z   kind: ClusterRole
2025-04-29T18:29:15.7285478Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7285697Z subjects:
2025-04-29T18:29:15.7285887Z   - kind: ServiceAccount
2025-04-29T18:29:15.7286120Z     name: ingress-nginx-admission
2025-04-29T18:29:15.7286336Z     namespace: ingress-nginx
2025-04-29T18:29:15.7286529Z ---
2025-04-29T18:29:15.7286785Z # Source: ingress-nginx/templates/admission-webhooks/job-patch/role.yaml
2025-04-29T18:29:15.7287038Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7287265Z kind: Role
2025-04-29T18:29:15.7287584Z metadata:
2025-04-29T18:29:15.7287809Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7288027Z   namespace: ingress-nginx
2025-04-29T18:29:15.7288228Z   annotations:
2025-04-29T18:29:15.7288487Z     "helm.sh/hook": pre-install,pre-upgrade,post-install,post-upgrade
2025-04-29T18:29:15.7288766Z     "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
2025-04-29T18:29:15.7289009Z   labels:
2025-04-29T18:29:15.7289203Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7289439Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7289664Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7289884Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7290126Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7290347Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7290596Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7290800Z rules:
2025-04-29T18:29:15.7290991Z   - apiGroups:
2025-04-29T18:29:15.7291170Z       - ""
2025-04-29T18:29:15.7291347Z     resources:
2025-04-29T18:29:15.7291546Z       - secrets
2025-04-29T18:29:15.7291725Z     verbs:
2025-04-29T18:29:15.7291916Z       - get
2025-04-29T18:29:15.7292090Z       - create
2025-04-29T18:29:15.7292265Z ---
2025-04-29T18:29:15.7292516Z # Source: ingress-nginx/templates/admission-webhooks/job-patch/rolebinding.yaml
2025-04-29T18:29:15.7292771Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7292997Z kind: RoleBinding
2025-04-29T18:29:15.7293182Z metadata:
2025-04-29T18:29:15.7293393Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7293600Z   namespace: ingress-nginx
2025-04-29T18:29:15.7293794Z   annotations:
2025-04-29T18:29:15.7294256Z     "helm.sh/hook": pre-install,pre-upgrade,post-install,post-upgrade
2025-04-29T18:29:15.7294767Z     "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
2025-04-29T18:29:15.7295011Z   labels:
2025-04-29T18:29:15.7295214Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7295455Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7295686Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7295913Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7296159Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7296518Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7296771Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7296986Z roleRef:
2025-04-29T18:29:15.7297201Z   apiGroup: rbac.authorization.k8s.io
2025-04-29T18:29:15.7297697Z   kind: Role
2025-04-29T18:29:15.7297919Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7298140Z subjects:
2025-04-29T18:29:15.7298339Z   - kind: ServiceAccount
2025-04-29T18:29:15.7298573Z     name: ingress-nginx-admission
2025-04-29T18:29:15.7298797Z     namespace: ingress-nginx
2025-04-29T18:29:15.7299111Z ---
2025-04-29T18:29:15.7299377Z # Source: ingress-nginx/templates/admission-webhooks/job-patch/job-createSecret.yaml
2025-04-29T18:29:15.7299639Z apiVersion: batch/v1
2025-04-29T18:29:15.7299849Z kind: Job
2025-04-29T18:29:15.7300032Z metadata:
2025-04-29T18:29:15.7300259Z   name: ingress-nginx-admission-create
2025-04-29T18:29:15.7300486Z   namespace: ingress-nginx
2025-04-29T18:29:15.7300687Z   annotations:
2025-04-29T18:29:15.7301092Z     "helm.sh/hook": pre-install,pre-upgrade
2025-04-29T18:29:15.7301348Z     "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
2025-04-29T18:29:15.7301587Z   labels:
2025-04-29T18:29:15.7301786Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7302025Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7302259Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7302483Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7303195Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7304029Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7304292Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7304509Z spec:
2025-04-29T18:29:15.7304707Z   template:
2025-04-29T18:29:15.7304899Z     metadata:
2025-04-29T18:29:15.7305111Z       name: ingress-nginx-admission-create
2025-04-29T18:29:15.7305336Z       labels:
2025-04-29T18:29:15.7305547Z         helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7305802Z         app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7306045Z         app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7306298Z         app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7306540Z         app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7306778Z         app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7307035Z         app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7307251Z     spec:
2025-04-29T18:29:15.7307610Z       containers:
2025-04-29T18:29:15.7307822Z         - name: create
2025-04-29T18:29:15.7308167Z           image: registry.k8s.io/ingress-nginx/kube-webhook-certgen:v1.5.2@sha256:e8825994b7a2c7497375a9b945f386506ca6a3eda80b89b74ef2db743f66a5ea
2025-04-29T18:29:15.7308490Z           imagePullPolicy: IfNotPresent
2025-04-29T18:29:15.7308865Z           args:
2025-04-29T18:29:15.7309069Z             - create
2025-04-29T18:29:15.7309498Z             - --host=ingress-nginx-controller-admission,ingress-nginx-controller-admission.$(POD_NAMESPACE).svc
2025-04-29T18:29:15.7309789Z             - --namespace=$(POD_NAMESPACE)
2025-04-29T18:29:15.7310010Z             - --secret-name=ingress-nginx-admission
2025-04-29T18:29:15.7310234Z           env:
2025-04-29T18:29:15.7310421Z             - name: POD_NAMESPACE
2025-04-29T18:29:15.7310613Z               valueFrom:
2025-04-29T18:29:15.7310816Z                 fieldRef:
2025-04-29T18:29:15.7311016Z                   fieldPath: metadata.namespace
2025-04-29T18:29:15.7311238Z           securityContext: 
2025-04-29T18:29:15.7311447Z             allowPrivilegeEscalation: false
2025-04-29T18:29:15.7311664Z             capabilities:
2025-04-29T18:29:15.7311843Z               drop:
2025-04-29T18:29:15.7312016Z               - ALL
2025-04-29T18:29:15.7312228Z             readOnlyRootFilesystem: true
2025-04-29T18:29:15.7312432Z             runAsGroup: 65532
2025-04-29T18:29:15.7312638Z             runAsNonRoot: true
2025-04-29T18:29:15.7312828Z             runAsUser: 65532
2025-04-29T18:29:15.7313216Z             seccompProfile:
2025-04-29T18:29:15.7313411Z               type: RuntimeDefault
2025-04-29T18:29:15.7313615Z       restartPolicy: OnFailure
2025-04-29T18:29:15.7313857Z       serviceAccountName: ingress-nginx-admission
2025-04-29T18:29:15.7314071Z       nodeSelector: 
2025-04-29T18:29:15.7314279Z         kubernetes.io/os: linux
2025-04-29T18:29:15.7314640Z ---
2025-04-29T18:29:15.7314880Z # Source: ingress-nginx/templates/admission-webhooks/job-patch/job-patchWebhook.yaml
2025-04-29T18:29:15.7315248Z apiVersion: batch/v1
2025-04-29T18:29:15.7315440Z kind: Job
2025-04-29T18:29:15.7315636Z metadata:
2025-04-29T18:29:15.7315838Z   name: ingress-nginx-admission-patch
2025-04-29T18:29:15.7316073Z   namespace: ingress-nginx
2025-04-29T18:29:15.7316270Z   annotations:
2025-04-29T18:29:15.7316484Z     "helm.sh/hook": post-install,post-upgrade
2025-04-29T18:29:15.7316756Z     "helm.sh/hook-delete-policy": before-hook-creation,hook-succeeded
2025-04-29T18:29:15.7316980Z   labels:
2025-04-29T18:29:15.7317202Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7317566Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7317828Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7318053Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7318283Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7318679Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7318907Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7319126Z spec:
2025-04-29T18:29:15.7319304Z   template:
2025-04-29T18:29:15.7319498Z     metadata:
2025-04-29T18:29:15.7319694Z       name: ingress-nginx-admission-patch
2025-04-29T18:29:15.7319888Z       labels:
2025-04-29T18:29:15.7320103Z         helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7320320Z         app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7320562Z         app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7320787Z         app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7321031Z         app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7321252Z         app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7321477Z         app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7321699Z     spec:
2025-04-29T18:29:15.7321876Z       containers:
2025-04-29T18:29:15.7322077Z         - name: patch
2025-04-29T18:29:15.7322373Z           image: registry.k8s.io/ingress-nginx/kube-webhook-certgen:v1.5.2@sha256:e8825994b7a2c7497375a9b945f386506ca6a3eda80b89b74ef2db743f66a5ea
2025-04-29T18:29:15.7322698Z           imagePullPolicy: IfNotPresent
2025-04-29T18:29:15.7323275Z           args:
2025-04-29T18:29:15.7323459Z             - patch
2025-04-29T18:29:15.7323690Z             - --webhook-name=ingress-nginx-admission
2025-04-29T18:29:15.7323921Z             - --namespace=$(POD_NAMESPACE)
2025-04-29T18:29:15.7324149Z             - --patch-mutating=false
2025-04-29T18:29:15.7324376Z             - --secret-name=ingress-nginx-admission
2025-04-29T18:29:15.7324623Z             - --patch-failure-policy=Fail
2025-04-29T18:29:15.7324821Z           env:
2025-04-29T18:29:15.7325054Z             - name: POD_NAMESPACE
2025-04-29T18:29:15.7325274Z               valueFrom:
2025-04-29T18:29:15.7325646Z                 fieldRef:
2025-04-29T18:29:15.7325877Z                   fieldPath: metadata.namespace
2025-04-29T18:29:15.7326100Z           securityContext: 
2025-04-29T18:29:15.7326334Z             allowPrivilegeEscalation: false
2025-04-29T18:29:15.7326755Z             capabilities:
2025-04-29T18:29:15.7326938Z               drop:
2025-04-29T18:29:15.7327122Z               - ALL
2025-04-29T18:29:15.7327306Z             readOnlyRootFilesystem: true
2025-04-29T18:29:15.7327796Z             runAsGroup: 65532
2025-04-29T18:29:15.7327990Z             runAsNonRoot: true
2025-04-29T18:29:15.7328380Z             runAsUser: 65532
2025-04-29T18:29:15.7328577Z             seccompProfile:
2025-04-29T18:29:15.7328776Z               type: RuntimeDefault
2025-04-29T18:29:15.7329133Z       restartPolicy: OnFailure
2025-04-29T18:29:15.7329545Z       serviceAccountName: ingress-nginx-admission
2025-04-29T18:29:15.7329789Z       nodeSelector: 
2025-04-29T18:29:15.7330001Z         kubernetes.io/os: linux
2025-04-29T18:29:15.7330362Z MANIFEST:
2025-04-29T18:29:15.7330553Z ---
2025-04-29T18:29:15.7330776Z # Source: ingress-nginx/templates/controller-serviceaccount.yaml
2025-04-29T18:29:15.7331024Z apiVersion: v1
2025-04-29T18:29:15.7331218Z kind: ServiceAccount
2025-04-29T18:29:15.7331423Z metadata:
2025-04-29T18:29:15.7331697Z   labels:
2025-04-29T18:29:15.7331896Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7332139Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7332373Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7332617Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7332847Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7333089Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7333326Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7333542Z   name: ingress-nginx
2025-04-29T18:29:15.7333762Z   namespace: ingress-nginx
2025-04-29T18:29:15.7333975Z automountServiceAccountToken: true
2025-04-29T18:29:15.7334188Z ---
2025-04-29T18:29:15.7334565Z # Source: ingress-nginx/templates/controller-configmap.yaml
2025-04-29T18:29:15.7334805Z apiVersion: v1
2025-04-29T18:29:15.7334993Z kind: ConfigMap
2025-04-29T18:29:15.7335174Z metadata:
2025-04-29T18:29:15.7335362Z   labels:
2025-04-29T18:29:15.7335560Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7335794Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7336016Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7336237Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7336477Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7336695Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7336931Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7337153Z   name: ingress-nginx-controller
2025-04-29T18:29:15.7337532Z   namespace: ingress-nginx
2025-04-29T18:29:15.7337740Z data:
2025-04-29T18:29:15.7337906Z ---
2025-04-29T18:29:15.7338131Z # Source: ingress-nginx/templates/clusterrole.yaml
2025-04-29T18:29:15.7338363Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7338586Z kind: ClusterRole
2025-04-29T18:29:15.7338771Z metadata:
2025-04-29T18:29:15.7338960Z   labels:
2025-04-29T18:29:15.7339151Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7339374Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7339612Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7339833Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7340067Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7340285Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7340489Z   name: ingress-nginx
2025-04-29T18:29:15.7340688Z rules:
2025-04-29T18:29:15.7341025Z   - apiGroups:
2025-04-29T18:29:15.7341218Z       - ""
2025-04-29T18:29:15.7341386Z     resources:
2025-04-29T18:29:15.7341582Z       - configmaps
2025-04-29T18:29:15.7341954Z       - endpoints
2025-04-29T18:29:15.7342137Z       - nodes
2025-04-29T18:29:15.7342334Z       - pods
2025-04-29T18:29:15.7342514Z       - secrets
2025-04-29T18:29:15.7342719Z       - namespaces
2025-04-29T18:29:15.7342903Z     verbs:
2025-04-29T18:29:15.7343078Z       - list
2025-04-29T18:29:15.7343271Z       - watch
2025-04-29T18:29:15.7343453Z   - apiGroups:
2025-04-29T18:29:15.7343663Z       - coordination.k8s.io
2025-04-29T18:29:15.7343863Z     resources:
2025-04-29T18:29:15.7344045Z       - leases
2025-04-29T18:29:15.7344242Z     verbs:
2025-04-29T18:29:15.7344424Z       - list
2025-04-29T18:29:15.7344615Z       - watch
2025-04-29T18:29:15.7344797Z   - apiGroups:
2025-04-29T18:29:15.7344993Z       - ""
2025-04-29T18:29:15.7345174Z     resources:
2025-04-29T18:29:15.7345686Z       - nodes
2025-04-29T18:29:15.7345868Z     verbs:
2025-04-29T18:29:15.7346152Z       - get
2025-04-29T18:29:15.7346339Z   - apiGroups:
2025-04-29T18:29:15.7346508Z       - ""
2025-04-29T18:29:15.7346674Z     resources:
2025-04-29T18:29:15.7346863Z       - services
2025-04-29T18:29:15.7347033Z     verbs:
2025-04-29T18:29:15.7347215Z       - get
2025-04-29T18:29:15.7347473Z       - list
2025-04-29T18:29:15.7347656Z       - watch
2025-04-29T18:29:15.7347844Z   - apiGroups:
2025-04-29T18:29:15.7348029Z       - networking.k8s.io
2025-04-29T18:29:15.7348222Z     resources:
2025-04-29T18:29:15.7348397Z       - ingresses
2025-04-29T18:29:15.7348687Z     verbs:
2025-04-29T18:29:15.7348858Z       - get
2025-04-29T18:29:15.7349024Z       - list
2025-04-29T18:29:15.7349206Z       - watch
2025-04-29T18:29:15.7349377Z   - apiGroups:
2025-04-29T18:29:15.7349560Z       - ""
2025-04-29T18:29:15.7349725Z     resources:
2025-04-29T18:29:15.7349896Z       - events
2025-04-29T18:29:15.7350080Z     verbs:
2025-04-29T18:29:15.7350246Z       - create
2025-04-29T18:29:15.7350428Z       - patch
2025-04-29T18:29:15.7350607Z   - apiGroups:
2025-04-29T18:29:15.7350790Z       - networking.k8s.io
2025-04-29T18:29:15.7350986Z     resources:
2025-04-29T18:29:15.7351166Z       - ingresses/status
2025-04-29T18:29:15.7351354Z     verbs:
2025-04-29T18:29:15.7351522Z       - update
2025-04-29T18:29:15.7351708Z   - apiGroups:
2025-04-29T18:29:15.7351892Z       - networking.k8s.io
2025-04-29T18:29:15.7352073Z     resources:
2025-04-29T18:29:15.7352267Z       - ingressclasses
2025-04-29T18:29:15.7352439Z     verbs:
2025-04-29T18:29:15.7352617Z       - get
2025-04-29T18:29:15.7352785Z       - list
2025-04-29T18:29:15.7352953Z       - watch
2025-04-29T18:29:15.7353143Z   - apiGroups:
2025-04-29T18:29:15.7353325Z       - discovery.k8s.io
2025-04-29T18:29:15.7353520Z     resources:
2025-04-29T18:29:15.7353883Z       - endpointslices
2025-04-29T18:29:15.7354064Z     verbs:
2025-04-29T18:29:15.7354254Z       - list
2025-04-29T18:29:15.7354434Z       - watch
2025-04-29T18:29:15.7354621Z       - get
2025-04-29T18:29:15.7354787Z ---
2025-04-29T18:29:15.7355016Z # Source: ingress-nginx/templates/clusterrolebinding.yaml
2025-04-29T18:29:15.7355254Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7355646Z kind: ClusterRoleBinding
2025-04-29T18:29:15.7356075Z metadata:
2025-04-29T18:29:15.7356261Z   labels:
2025-04-29T18:29:15.7356485Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7356873Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7357107Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7357350Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7357698Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7358314Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7358519Z   name: ingress-nginx
2025-04-29T18:29:15.7358714Z roleRef:
2025-04-29T18:29:15.7358902Z   apiGroup: rbac.authorization.k8s.io
2025-04-29T18:29:15.7359104Z   kind: ClusterRole
2025-04-29T18:29:15.7359310Z   name: ingress-nginx
2025-04-29T18:29:15.7359484Z subjects:
2025-04-29T18:29:15.7359685Z   - kind: ServiceAccount
2025-04-29T18:29:15.7359875Z     name: ingress-nginx
2025-04-29T18:29:15.7360083Z     namespace: ingress-nginx
2025-04-29T18:29:15.7360258Z ---
2025-04-29T18:29:15.7360456Z # Source: ingress-nginx/templates/controller-role.yaml
2025-04-29T18:29:15.7360696Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7360888Z kind: Role
2025-04-29T18:29:15.7361076Z metadata:
2025-04-29T18:29:15.7361244Z   labels:
2025-04-29T18:29:15.7361428Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7361658Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7361877Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7362107Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7362319Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7362548Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7362762Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7362963Z   name: ingress-nginx
2025-04-29T18:29:15.7363287Z   namespace: ingress-nginx
2025-04-29T18:29:15.7363468Z rules:
2025-04-29T18:29:15.7363832Z   - apiGroups:
2025-04-29T18:29:15.7364010Z       - ""
2025-04-29T18:29:15.7364199Z     resources:
2025-04-29T18:29:15.7364568Z       - namespaces
2025-04-29T18:29:15.7364738Z     verbs:
2025-04-29T18:29:15.7364919Z       - get
2025-04-29T18:29:15.7365090Z   - apiGroups:
2025-04-29T18:29:15.7365274Z       - ""
2025-04-29T18:29:15.7365440Z     resources:
2025-04-29T18:29:15.7365615Z       - configmaps
2025-04-29T18:29:15.7365979Z       - pods
2025-04-29T18:29:15.7366415Z       - secrets
2025-04-29T18:29:15.7366606Z       - endpoints
2025-04-29T18:29:15.7366781Z     verbs:
2025-04-29T18:29:15.7366948Z       - get
2025-04-29T18:29:15.7367129Z       - list
2025-04-29T18:29:15.7367297Z       - watch
2025-04-29T18:29:15.7367582Z   - apiGroups:
2025-04-29T18:29:15.7367753Z       - ""
2025-04-29T18:29:15.7367936Z     resources:
2025-04-29T18:29:15.7368112Z       - services
2025-04-29T18:29:15.7368283Z     verbs:
2025-04-29T18:29:15.7368472Z       - get
2025-04-29T18:29:15.7368638Z       - list
2025-04-29T18:29:15.7368822Z       - watch
2025-04-29T18:29:15.7368994Z   - apiGroups:
2025-04-29T18:29:15.7369178Z       - networking.k8s.io
2025-04-29T18:29:15.7369373Z     resources:
2025-04-29T18:29:15.7369549Z       - ingresses
2025-04-29T18:29:15.7369737Z     verbs:
2025-04-29T18:29:15.7369903Z       - get
2025-04-29T18:29:15.7370066Z       - list
2025-04-29T18:29:15.7370247Z       - watch
2025-04-29T18:29:15.7370462Z   # Omit Ingress status permissions if `--update-status` is disabled.
2025-04-29T18:29:15.7370699Z   - apiGroups:
2025-04-29T18:29:15.7370882Z       - networking.k8s.io
2025-04-29T18:29:15.7371315Z     resources:
2025-04-29T18:29:15.7371764Z       - ingresses/status
2025-04-29T18:29:15.7371950Z     verbs:
2025-04-29T18:29:15.7372158Z       - update
2025-04-29T18:29:15.7372523Z   - apiGroups:
2025-04-29T18:29:15.7372741Z       - networking.k8s.io
2025-04-29T18:29:15.7372940Z     resources:
2025-04-29T18:29:15.7373145Z       - ingressclasses
2025-04-29T18:29:15.7373356Z     verbs:
2025-04-29T18:29:15.7373542Z       - get
2025-04-29T18:29:15.7373742Z       - list
2025-04-29T18:29:15.7373928Z       - watch
2025-04-29T18:29:15.7374136Z   - apiGroups:
2025-04-29T18:29:15.7374344Z       - coordination.k8s.io
2025-04-29T18:29:15.7374547Z     resources:
2025-04-29T18:29:15.7374756Z       - leases
2025-04-29T18:29:15.7374951Z     resourceNames:
2025-04-29T18:29:15.7375176Z       - ingress-nginx-leader
2025-04-29T18:29:15.7375376Z     verbs:
2025-04-29T18:29:15.7375562Z       - get
2025-04-29T18:29:15.7375765Z       - update
2025-04-29T18:29:15.7375956Z   - apiGroups:
2025-04-29T18:29:15.7376174Z       - coordination.k8s.io
2025-04-29T18:29:15.7376374Z     resources:
2025-04-29T18:29:15.7376564Z       - leases
2025-04-29T18:29:15.7376768Z     verbs:
2025-04-29T18:29:15.7377115Z       - create
2025-04-29T18:29:15.7377587Z   - apiGroups:
2025-04-29T18:29:15.7377778Z       - ""
2025-04-29T18:29:15.7377980Z     resources:
2025-04-29T18:29:15.7378176Z       - events
2025-04-29T18:29:15.7378363Z     verbs:
2025-04-29T18:29:15.7378900Z       - create
2025-04-29T18:29:15.7379087Z       - patch
2025-04-29T18:29:15.7379294Z   - apiGroups:
2025-04-29T18:29:15.7379496Z       - discovery.k8s.io
2025-04-29T18:29:15.7379693Z     resources:
2025-04-29T18:29:15.7379909Z       - endpointslices
2025-04-29T18:29:15.7380102Z     verbs:
2025-04-29T18:29:15.7380305Z       - list
2025-04-29T18:29:15.7380493Z       - watch
2025-04-29T18:29:15.7380677Z       - get
2025-04-29T18:29:15.7380882Z ---
2025-04-29T18:29:15.7381107Z # Source: ingress-nginx/templates/controller-rolebinding.yaml
2025-04-29T18:29:15.7381386Z apiVersion: rbac.authorization.k8s.io/v1
2025-04-29T18:29:15.7381611Z kind: RoleBinding
2025-04-29T18:29:15.7381827Z metadata:
2025-04-29T18:29:15.7382012Z   labels:
2025-04-29T18:29:15.7382381Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7382786Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7383008Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7383540Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7383769Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7384168Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7384560Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7384938Z   name: ingress-nginx
2025-04-29T18:29:15.7385154Z   namespace: ingress-nginx
2025-04-29T18:29:15.7385339Z roleRef:
2025-04-29T18:29:15.7385550Z   apiGroup: rbac.authorization.k8s.io
2025-04-29T18:29:15.7386026Z   kind: Role
2025-04-29T18:29:15.7386217Z   name: ingress-nginx
2025-04-29T18:29:15.7386420Z subjects:
2025-04-29T18:29:15.7386612Z   - kind: ServiceAccount
2025-04-29T18:29:15.7387587Z     name: ingress-nginx
2025-04-29T18:29:15.7387855Z     namespace: ingress-nginx
2025-04-29T18:29:15.7388060Z ---
2025-04-29T18:29:15.7388284Z # Source: ingress-nginx/templates/controller-service-webhook.yaml
2025-04-29T18:29:15.7388676Z apiVersion: v1
2025-04-29T18:29:15.7388890Z kind: Service
2025-04-29T18:29:15.7389072Z metadata:
2025-04-29T18:29:15.7389258Z   labels:
2025-04-29T18:29:15.7389451Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7389669Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7389913Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7390133Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7390369Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7390587Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7390822Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7391424Z   name: ingress-nginx-controller-admission
2025-04-29T18:29:15.7391669Z   namespace: ingress-nginx
2025-04-29T18:29:15.7391870Z spec:
2025-04-29T18:29:15.7392058Z   type: ClusterIP
2025-04-29T18:29:15.7392267Z   ports:
2025-04-29T18:29:15.7392463Z     - name: https-webhook
2025-04-29T18:29:15.7392680Z       port: 443
2025-04-29T18:29:15.7392881Z       targetPort: webhook
2025-04-29T18:29:15.7393258Z       appProtocol: https
2025-04-29T18:29:15.7393464Z   selector:
2025-04-29T18:29:15.7393669Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7393917Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7394151Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7394365Z ---
2025-04-29T18:29:15.7394578Z # Source: ingress-nginx/templates/controller-service.yaml
2025-04-29T18:29:15.7394804Z apiVersion: v1
2025-04-29T18:29:15.7395010Z kind: Service
2025-04-29T18:29:15.7395365Z metadata:
2025-04-29T18:29:15.7395578Z   annotations:
2025-04-29T18:29:15.7395768Z   labels:
2025-04-29T18:29:15.7395974Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7396227Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7396468Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7396721Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7396957Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7397208Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7397543Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7397781Z   name: ingress-nginx-controller
2025-04-29T18:29:15.7398023Z   namespace: ingress-nginx
2025-04-29T18:29:15.7398225Z spec:
2025-04-29T18:29:15.7398436Z   type: LoadBalancer
2025-04-29T18:29:15.7398811Z   ipFamilyPolicy: SingleStack
2025-04-29T18:29:15.7399028Z   ipFamilies: 
2025-04-29T18:29:15.7399216Z     - IPv4
2025-04-29T18:29:15.7399392Z   ports:
2025-04-29T18:29:15.7399595Z     - name: http
2025-04-29T18:29:15.7399783Z       port: 80
2025-04-29T18:29:15.7399993Z       protocol: TCP
2025-04-29T18:29:15.7400190Z       targetPort: http
2025-04-29T18:29:15.7400388Z       appProtocol: http
2025-04-29T18:29:15.7400598Z     - name: https
2025-04-29T18:29:15.7400787Z       port: 443
2025-04-29T18:29:15.7400994Z       protocol: TCP
2025-04-29T18:29:15.7401192Z       targetPort: https
2025-04-29T18:29:15.7401390Z       appProtocol: https
2025-04-29T18:29:15.7401596Z   selector:
2025-04-29T18:29:15.7401952Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7402205Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7402443Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7402660Z ---
2025-04-29T18:29:15.7403067Z # Source: ingress-nginx/templates/controller-deployment.yaml
2025-04-29T18:29:15.7403309Z apiVersion: apps/v1
2025-04-29T18:29:15.7403534Z kind: Deployment
2025-04-29T18:29:15.7404107Z metadata:
2025-04-29T18:29:15.7404732Z   labels:
2025-04-29T18:29:15.7404952Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7405382Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7405624Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7405861Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7406119Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7406354Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7406604Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7406841Z   name: ingress-nginx-controller
2025-04-29T18:29:15.7407080Z   namespace: ingress-nginx
2025-04-29T18:29:15.7407582Z spec:
2025-04-29T18:29:15.7407773Z   selector:
2025-04-29T18:29:15.7407980Z     matchLabels:
2025-04-29T18:29:15.7408191Z       app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7408439Z       app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7408674Z       app.kubernetes.io/component: controller
2025-04-29T18:29:15.7408881Z   replicas: 1
2025-04-29T18:29:15.7409097Z   revisionHistoryLimit: 10
2025-04-29T18:29:15.7409307Z   minReadySeconds: 0
2025-04-29T18:29:15.7409513Z   template:
2025-04-29T18:29:15.7409696Z     metadata:
2025-04-29T18:29:15.7409893Z       labels:
2025-04-29T18:29:15.7410098Z         helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7410325Z         app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7410575Z         app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7410806Z         app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7411053Z         app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7411284Z         app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7411527Z         app.kubernetes.io/component: controller
2025-04-29T18:29:15.7411729Z     spec:
2025-04-29T18:29:15.7411921Z       dnsPolicy: ClusterFirst
2025-04-29T18:29:15.7412319Z       containers:
2025-04-29T18:29:15.7412522Z         - name: controller
2025-04-29T18:29:15.7412859Z           image: registry.k8s.io/ingress-nginx/controller:v1.12.1@sha256:d2fbc4ec70d8aa2050dd91a91506e998765e86c96f32cffb56c503c9c34eed5b
2025-04-29T18:29:15.7413178Z           imagePullPolicy: IfNotPresent
2025-04-29T18:29:15.7413407Z           lifecycle: 
2025-04-29T18:29:15.7413811Z             preStop:
2025-04-29T18:29:15.7413996Z               exec:
2025-04-29T18:29:15.7414199Z                 command:
2025-04-29T18:29:15.7415001Z                 - /wait-shutdown
2025-04-29T18:29:15.7415255Z           args: 
2025-04-29T18:29:15.7415460Z             - /nginx-ingress-controller
2025-04-29T18:29:15.7415737Z             - --publish-service=$(POD_NAMESPACE)/ingress-nginx-controller
2025-04-29T18:29:15.7416000Z             - --election-id=ingress-nginx-leader
2025-04-29T18:29:15.7416250Z             - --controller-class=k8s.io/ingress-nginx
2025-04-29T18:29:15.7416503Z             - --ingress-class=nginx
2025-04-29T18:29:15.7416749Z             - --configmap=$(POD_NAMESPACE)/ingress-nginx-controller
2025-04-29T18:29:15.7417039Z             - --validating-webhook=:8443
2025-04-29T18:29:15.7417304Z             - --validating-webhook-certificate=/usr/local/certificates/cert
2025-04-29T18:29:15.7417756Z             - --validating-webhook-key=/usr/local/certificates/key
2025-04-29T18:29:15.7417999Z           securityContext: 
2025-04-29T18:29:15.7418397Z             runAsNonRoot: true
2025-04-29T18:29:15.7418618Z             runAsUser: 101
2025-04-29T18:29:15.7418813Z             runAsGroup: 82
2025-04-29T18:29:15.7419037Z             allowPrivilegeEscalation: false
2025-04-29T18:29:15.7419431Z             seccompProfile: 
2025-04-29T18:29:15.7419652Z               type: RuntimeDefault
2025-04-29T18:29:15.7419859Z             capabilities:
2025-04-29T18:29:15.7420047Z               drop:
2025-04-29T18:29:15.7420249Z               - ALL
2025-04-29T18:29:15.7420433Z               add:
2025-04-29T18:29:15.7420642Z               - NET_BIND_SERVICE
2025-04-29T18:29:15.7420854Z             readOnlyRootFilesystem: false
2025-04-29T18:29:15.7421070Z           env:
2025-04-29T18:29:15.7421259Z             - name: POD_NAME
2025-04-29T18:29:15.7421550Z               valueFrom:
2025-04-29T18:29:15.7421763Z                 fieldRef:
2025-04-29T18:29:15.7421964Z                   fieldPath: metadata.name
2025-04-29T18:29:15.7422190Z             - name: POD_NAMESPACE
2025-04-29T18:29:15.7422392Z               valueFrom:
2025-04-29T18:29:15.7422583Z                 fieldRef:
2025-04-29T18:29:15.7422808Z                   fieldPath: metadata.namespace
2025-04-29T18:29:15.7423196Z             - name: LD_PRELOAD
2025-04-29T18:29:15.7423447Z               value: /usr/local/lib/libmimalloc.so
2025-04-29T18:29:15.7423672Z           livenessProbe: 
2025-04-29T18:29:15.7423897Z             failureThreshold: 5
2025-04-29T18:29:15.7424098Z             httpGet:
2025-04-29T18:29:15.7424297Z               path: /healthz
2025-04-29T18:29:15.7424514Z               port: 10254
2025-04-29T18:29:15.7424713Z               scheme: HTTP
2025-04-29T18:29:15.7424942Z             initialDelaySeconds: 10
2025-04-29T18:29:15.7425155Z             periodSeconds: 10
2025-04-29T18:29:15.7425382Z             successThreshold: 1
2025-04-29T18:29:15.7425589Z             timeoutSeconds: 1
2025-04-29T18:29:15.7425794Z           readinessProbe: 
2025-04-29T18:29:15.7426017Z             failureThreshold: 3
2025-04-29T18:29:15.7426218Z             httpGet:
2025-04-29T18:29:15.7426434Z               path: /healthz
2025-04-29T18:29:15.7426633Z               port: 10254
2025-04-29T18:29:15.7426850Z               scheme: HTTP
2025-04-29T18:29:15.7427061Z             initialDelaySeconds: 10
2025-04-29T18:29:15.7427273Z             periodSeconds: 10
2025-04-29T18:29:15.7428176Z             successThreshold: 1
2025-04-29T18:29:15.7428409Z             timeoutSeconds: 1
2025-04-29T18:29:15.7428627Z           ports:
2025-04-29T18:29:15.7428823Z             - name: http
2025-04-29T18:29:15.7429025Z               containerPort: 80
2025-04-29T18:29:15.7429245Z               protocol: TCP
2025-04-29T18:29:15.7429445Z             - name: https
2025-04-29T18:29:15.7429663Z               containerPort: 443
2025-04-29T18:29:15.7429878Z               protocol: TCP
2025-04-29T18:29:15.7430093Z             - name: webhook
2025-04-29T18:29:15.7430296Z               containerPort: 8443
2025-04-29T18:29:15.7430660Z               protocol: TCP
2025-04-29T18:29:15.7430866Z           volumeMounts:
2025-04-29T18:29:15.7431062Z             - name: webhook-cert
2025-04-29T18:29:15.7431298Z               mountPath: /usr/local/certificates/
2025-04-29T18:29:15.7431513Z               readOnly: true
2025-04-29T18:29:15.7431728Z           resources: 
2025-04-29T18:29:15.7432092Z             requests:
2025-04-29T18:29:15.7432287Z               cpu: 100m
2025-04-29T18:29:15.7432498Z               memory: 90Mi
2025-04-29T18:29:15.7432696Z       nodeSelector: 
2025-04-29T18:29:15.7432917Z         kubernetes.io/os: linux
2025-04-29T18:29:15.7433140Z       serviceAccountName: ingress-nginx
2025-04-29T18:29:15.7433372Z       terminationGracePeriodSeconds: 300
2025-04-29T18:29:15.7433595Z       volumes:
2025-04-29T18:29:15.7433803Z         - name: webhook-cert
2025-04-29T18:29:15.7434018Z           secret:
2025-04-29T18:29:15.7434241Z             secretName: ingress-nginx-admission
2025-04-29T18:29:15.7434465Z ---
2025-04-29T18:29:15.7434695Z # Source: ingress-nginx/templates/controller-ingressclass.yaml
2025-04-29T18:29:15.7434949Z apiVersion: networking.k8s.io/v1
2025-04-29T18:29:15.7435183Z kind: IngressClass
2025-04-29T18:29:15.7435381Z metadata:
2025-04-29T18:29:15.7435578Z   labels:
2025-04-29T18:29:15.7435945Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7436195Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7436436Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7436673Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7436925Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7437161Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7437810Z     app.kubernetes.io/component: controller
2025-04-29T18:29:15.7438044Z   name: nginx
2025-04-29T18:29:15.7438375Z spec:
2025-04-29T18:29:15.7438578Z   controller: k8s.io/ingress-nginx
2025-04-29T18:29:15.7438781Z ---
2025-04-29T18:29:15.7439030Z # Source: ingress-nginx/templates/controller-poddisruptionbudget.yaml
2025-04-29T18:29:15.7439288Z # PDB is not supported for DaemonSets.
2025-04-29T18:29:15.7439552Z # https://github.com/kubernetes/kubernetes/issues/108124
2025-04-29T18:29:15.7439770Z ---
2025-04-29T18:29:15.7440009Z # Source: ingress-nginx/templates/admission-webhooks/validating-webhook.yaml
2025-04-29T18:29:15.7440325Z # before changing this value, check the required kubernetes version
2025-04-29T18:29:15.7440641Z # https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#prerequisites
2025-04-29T18:29:15.7440957Z apiVersion: admissionregistration.k8s.io/v1
2025-04-29T18:29:15.7441200Z kind: ValidatingWebhookConfiguration
2025-04-29T18:29:15.7441430Z metadata:
2025-04-29T18:29:15.7441622Z   annotations:
2025-04-29T18:29:15.7441832Z   labels:
2025-04-29T18:29:15.7442047Z     helm.sh/chart: ingress-nginx-4.12.1
2025-04-29T18:29:15.7442282Z     app.kubernetes.io/name: ingress-nginx
2025-04-29T18:29:15.7442546Z     app.kubernetes.io/instance: ingress-nginx
2025-04-29T18:29:15.7442958Z     app.kubernetes.io/version: "1.12.1"
2025-04-29T18:29:15.7443204Z     app.kubernetes.io/part-of: ingress-nginx
2025-04-29T18:29:15.7443431Z     app.kubernetes.io/managed-by: Helm
2025-04-29T18:29:15.7443685Z     app.kubernetes.io/component: admission-webhook
2025-04-29T18:29:15.7443924Z   name: ingress-nginx-admission
2025-04-29T18:29:15.7458834Z webhooks:
2025-04-29T18:29:15.7459324Z   - name: validate.nginx.ingress.kubernetes.io
2025-04-29T18:29:15.7459556Z     matchPolicy: Equivalent
2025-04-29T18:29:15.7459765Z     rules:
2025-04-29T18:29:15.7460024Z       - apiGroups:
2025-04-29T18:29:15.7460231Z           - networking.k8s.io
2025-04-29T18:29:15.7460446Z         apiVersions:
2025-04-29T18:29:15.7460631Z           - v1
2025-04-29T18:29:15.7460830Z         operations:
2025-04-29T18:29:15.7461029Z           - CREATE
2025-04-29T18:29:15.7461228Z           - UPDATE
2025-04-29T18:29:15.7461411Z         resources:
2025-04-29T18:29:15.7461604Z           - ingresses
2025-04-29T18:29:15.7461816Z     failurePolicy: Fail
2025-04-29T18:29:15.7462171Z     sideEffects: None
2025-04-29T18:29:15.7462385Z     admissionReviewVersions:
2025-04-29T18:29:15.7462572Z       - v1
2025-04-29T18:29:15.7462753Z     clientConfig:
2025-04-29T18:29:15.7462952Z       service:
2025-04-29T18:29:15.7463166Z         name: ingress-nginx-controller-admission
2025-04-29T18:29:15.7463587Z         namespace: ingress-nginx
2025-04-29T18:29:15.7463789Z         port: 443
2025-04-29T18:29:15.7464008Z         path: /networking/v1/ingresses
2025-04-29T18:29:15.7464095Z 
2025-04-29T18:29:15.7464268Z NOTES:
2025-04-29T18:29:15.7464494Z The ingress-nginx controller has been installed.
2025-04-29T18:29:15.7464757Z It may take a few minutes for the load balancer IP to be available.
2025-04-29T18:29:15.7465099Z You can watch the status by running 'kubectl get service --namespace ingress-nginx ingress-nginx-controller --output wide --watch'
2025-04-29T18:29:15.7465259Z 
2025-04-29T18:29:15.7465487Z An example Ingress that makes use of the controller:
2025-04-29T18:29:15.7465727Z   apiVersion: networking.k8s.io/v1
2025-04-29T18:29:15.7465954Z   kind: Ingress
2025-04-29T18:29:15.7466145Z   metadata:
2025-04-29T18:29:15.7466335Z     name: example
2025-04-29T18:29:15.7466548Z     namespace: foo
2025-04-29T18:29:15.7466987Z   spec:
2025-04-29T18:29:15.7467201Z     ingressClassName: nginx
2025-04-29T18:29:15.7467675Z     rules:
2025-04-29T18:29:15.7467898Z       - host: www.example.com
2025-04-29T18:29:15.7468086Z         http:
2025-04-29T18:29:15.7468264Z           paths:
2025-04-29T18:29:15.7468469Z             - pathType: Prefix
2025-04-29T18:29:15.7468659Z               backend:
2025-04-29T18:29:15.7468858Z                 service:
2025-04-29T18:29:15.7469049Z                   name: exampleService
2025-04-29T18:29:15.7469239Z                   port:
2025-04-29T18:29:15.7469564Z                     number: 80
2025-04-29T18:29:15.7469748Z               path: /
2025-04-29T18:29:15.7469994Z     # This section is only required if TLS is to be enabled for the Ingress
2025-04-29T18:29:15.7470214Z     tls:
2025-04-29T18:29:15.7470407Z       - hosts:
2025-04-29T18:29:15.7470596Z         - www.example.com
2025-04-29T18:29:15.7471032Z         secretName: example-tls
2025-04-29T18:29:15.7471133Z 
2025-04-29T18:29:15.7471398Z If TLS is enabled for the Ingress, a Secret containing the certificate and key must also be provided:
2025-04-29T18:29:15.7471557Z 
2025-04-29T18:29:15.7471745Z   apiVersion: v1
2025-04-29T18:29:15.7471963Z   kind: Secret
2025-04-29T18:29:15.7472159Z   metadata:
2025-04-29T18:29:15.7472576Z     name: example-tls
2025-04-29T18:29:15.7472957Z     namespace: foo
2025-04-29T18:29:15.7473145Z   data:
2025-04-29T18:29:15.7473365Z     tls.crt: <base64 encoded cert>
2025-04-29T18:29:15.7473588Z     tls.key: <base64 encoded key>
2025-04-29T18:29:15.7473832Z   type: kubernetes.io/tls
2025-04-29T18:29:15.7474738Z INFO:Deploy:HELM UPGRADE COMMAND ['helm', 'upgrade', '--install', '--wait', '--set', 'image.repository=mcmpdemo', '--set', 'image.tag=latest', '--set', 'mysql.url=bXlzcWxkYi1jZDE2Yjg3MTYzNWU5YzEzMTFjOGYwMzdkNTdjNjA5OS5teXNxbC5kYXRhYmFzZS5henVyZS5jb20=', '--set', 'mysql.username=ZGJfYWRtaW4=', '--set', 'mysql.password=UGFzc3cwcmQxIQ==', '--set', 'isDBAAS=True', '--set', 'isLB=False', '--set', 'httpHost=akscluster-0k1d2s8p.hcp.eastus.azmk8s.io', '--namespace=jppetstore', '--create-namespace', 'jppetstore', '--kubeconfig', 'tmp_kube_config', '../modernpets/modernpets-0.1.5.tgz', '--debug']
2025-04-29T18:29:16.0134161Z history.go:56: 2025-04-29 18:29:16.012657588 +0000 UTC m=+0.288384912 [debug] getting history for release jppetstore
2025-04-29T18:29:16.2306679Z upgrade.go:164: 2025-04-29 18:29:16.230255679 +0000 UTC m=+0.505983003 [debug] preparing upgrade for jppetstore
2025-04-29T18:29:16.9027715Z upgrade.go:172: 2025-04-29 18:29:16.902356767 +0000 UTC m=+1.178084091 [debug] performing update for jppetstore
2025-04-29T18:29:17.2489494Z upgrade.go:375: 2025-04-29 18:29:17.248496721 +0000 UTC m=+1.524224045 [debug] creating upgraded release for jppetstore
2025-04-29T18:29:17.4817765Z client.go:393: 2025-04-29 18:29:17.4810286 +0000 UTC m=+1.756755824 [debug] checking 6 resources for changes
2025-04-29T18:29:17.6304874Z client.go:692: 2025-04-29 18:29:17.630037884 +0000 UTC m=+1.905765108 [debug] Looks like there are no changes for Secret "mysql-creds"
2025-04-29T18:29:17.8537796Z client.go:692: 2025-04-29 18:29:17.853271509 +0000 UTC m=+2.128998833 [debug] Looks like there are no changes for Service "db"
2025-04-29T18:29:18.0748125Z client.go:692: 2025-04-29 18:29:18.074386721 +0000 UTC m=+2.350114045 [debug] Looks like there are no changes for Service "web"
2025-04-29T18:29:18.3017119Z client.go:692: 2025-04-29 18:29:18.301215986 +0000 UTC m=+2.576943310 [debug] Looks like there are no changes for Deployment "jpetstoreweb"
2025-04-29T18:29:18.5363501Z client.go:414: 2025-04-29 18:29:18.535523502 +0000 UTC m=+2.811250826 [debug] Created a new Job called "jpetstoredb" in jppetstore
2025-04-29T18:29:18.5363956Z 
2025-04-29T18:29:18.6824417Z client.go:701: 2025-04-29 18:29:18.681971587 +0000 UTC m=+2.957698911 [debug] Patch Ingress "jpetstoreweb" in namespace jppetstore
2025-04-29T18:29:18.7959546Z upgrade.go:447: 2025-04-29 18:29:18.795285611 +0000 UTC m=+3.071012935 [debug] waiting for release jppetstore resources (created: 1 updated: 5  deleted: 0)
2025-04-29T18:29:18.7960644Z wait.go:50: 2025-04-29 18:29:18.795332911 +0000 UTC m=+3.071060135 [debug] beginning wait for 6 resources with timeout of 5m0s
2025-04-29T18:29:19.1801467Z upgrade.go:180: 2025-04-29 18:29:19.179428698 +0000 UTC m=+3.455156022 [debug] updating status for upgraded release for jppetstore
2025-04-29T18:29:19.2576762Z Release "jppetstore" has been upgraded. Happy Helming!
2025-04-29T18:29:19.2599402Z NAME: jppetstore
2025-04-29T18:29:19.2599755Z LAST DEPLOYED: Tue Apr 29 18:29:16 2025
2025-04-29T18:29:19.2600449Z NAMESPACE: jppetstore
2025-04-29T18:29:19.2600661Z STATUS: deployed
2025-04-29T18:29:19.2600881Z REVISION: 6
2025-04-29T18:29:19.2601082Z TEST SUITE: None
2025-04-29T18:29:19.2601291Z USER-SUPPLIED VALUES:
2025-04-29T18:29:19.2601548Z httpHost: akscluster-0k1d2s8p.hcp.eastus.azmk8s.io
2025-04-29T18:29:19.2601778Z image:
2025-04-29T18:29:19.2601996Z   repository: mcmpdemo
2025-04-29T18:29:19.2602197Z   tag: latest
2025-04-29T18:29:19.2602412Z isDBAAS: true
2025-04-29T18:29:19.2602626Z isLB: false
2025-04-29T18:29:19.2602818Z mysql:
2025-04-29T18:29:19.2603033Z   password: UGFzc3cwcmQxIQ==
2025-04-29T18:29:19.2603474Z   url: bXlzcWxkYi1jZDE2Yjg3MTYzNWU5YzEzMTFjOGYwMzdkNTdjNjA5OS5teXNxbC5kYXRhYmFzZS5henVyZS5jb20=
2025-04-29T18:29:19.2603758Z   username: ZGJfYWRtaW4=
2025-04-29T18:29:19.2603838Z 
2025-04-29T18:29:19.2604020Z COMPUTED VALUES:
2025-04-29T18:29:19.2606620Z httpHost: akscluster-0k1d2s8p.hcp.eastus.azmk8s.io
2025-04-29T18:29:19.2607163Z image:
2025-04-29T18:29:19.2607646Z   pullPolicy: Always
2025-04-29T18:29:19.2607896Z   pullSecret: ""
2025-04-29T18:29:19.2608101Z   repository: mcmpdemo
2025-04-29T18:29:19.2608313Z   tag: latest
2025-04-29T18:29:19.2608503Z ingress:
2025-04-29T18:29:19.2608711Z   enabled: true
2025-04-29T18:29:19.2608893Z   hosts:
2025-04-29T18:29:19.2609085Z   - jpetstore-web.app
2025-04-29T18:29:19.2609297Z isDBAAS: true
2025-04-29T18:29:19.2609485Z isIKS: false
2025-04-29T18:29:19.2609689Z isLB: false
2025-04-29T18:29:19.2610043Z mysql:
2025-04-29T18:29:19.2610231Z   password: UGFzc3cwcmQxIQ==
2025-04-29T18:29:19.2610516Z   url: bXlzcWxkYi1jZDE2Yjg3MTYzNWU5YzEzMTFjOGYwMzdkNTdjNjA5OS5teXNxbC5kYXRhYmFzZS5henVyZS5jb20=
2025-04-29T18:29:19.2610772Z   username: ZGJfYWRtaW4=
2025-04-29T18:29:19.2610984Z namespace: jpetstore
2025-04-29T18:29:19.2611176Z replicaCount: 2
2025-04-29T18:29:19.2611264Z 
2025-04-29T18:29:19.2611432Z HOOKS:
2025-04-29T18:29:19.2611602Z MANIFEST:
2025-04-29T18:29:19.2611792Z ---
2025-04-29T18:29:19.2611999Z # Source: modernpets/templates/secrets/secrets.yaml
2025-04-29T18:29:19.2612228Z kind: Secret
2025-04-29T18:29:19.2612412Z apiVersion: v1
2025-04-29T18:29:19.2612860Z metadata:
2025-04-29T18:29:19.2613050Z   name: mysql-creds
2025-04-29T18:29:19.2613251Z data:
2025-04-29T18:29:19.2613508Z   mysql.url : bXlzcWxkYi1jZDE2Yjg3MTYzNWU5YzEzMTFjOGYwMzdkNTdjNjA5OS5teXNxbC5kYXRhYmFzZS5henVyZS5jb20=
2025-04-29T18:29:19.2613797Z   mysql.username: ZGJfYWRtaW4=
2025-04-29T18:29:19.2614015Z   mysql.password: UGFzc3cwcmQxIQ==
2025-04-29T18:29:19.2614241Z type: Opaque
2025-04-29T18:29:19.2614423Z ---
2025-04-29T18:29:19.2614623Z # Source: modernpets/templates/service.yaml
2025-04-29T18:29:19.2614854Z apiVersion: v1
2025-04-29T18:29:19.2615044Z kind: Service
2025-04-29T18:29:19.2615243Z metadata:
2025-04-29T18:29:19.2615424Z   name: db
2025-04-29T18:29:19.2615617Z   labels:
2025-04-29T18:29:19.2615805Z     app: jpetstoredb
2025-04-29T18:29:19.2615994Z spec:
2025-04-29T18:29:19.2616187Z   selector:
2025-04-29T18:29:19.2616375Z     app: jpetstoredb
2025-04-29T18:29:19.2616576Z   ports:
2025-04-29T18:29:19.2616755Z   - port: 3306
2025-04-29T18:29:19.2616945Z     targetPort: 3306
2025-04-29T18:29:19.2617141Z ---
2025-04-29T18:29:19.2617341Z # Source: modernpets/templates/service.yaml
2025-04-29T18:29:19.2617692Z apiVersion: v1
2025-04-29T18:29:19.2617883Z kind: Service
2025-04-29T18:29:19.2618067Z metadata:
2025-04-29T18:29:19.2618264Z   name: web
2025-04-29T18:29:19.2618443Z   labels:
2025-04-29T18:29:19.2618648Z     app: jpetstoreweb
2025-04-29T18:29:19.2619149Z spec:
2025-04-29T18:29:19.2619344Z   selector:
2025-04-29T18:29:19.2619535Z     app: jpetstoreweb
2025-04-29T18:29:19.2619722Z   ports:
2025-04-29T18:29:19.2619921Z   - port: 80
2025-04-29T18:29:19.2620113Z     targetPort: 9080
2025-04-29T18:29:19.2620311Z ---
2025-04-29T18:29:19.2620692Z # Source: modernpets/templates/deployment.yaml
2025-04-29T18:29:19.2620920Z kind: Deployment
2025-04-29T18:29:19.2621142Z apiVersion: apps/v1
2025-04-29T18:29:19.2621336Z metadata:
2025-04-29T18:29:19.2621556Z   name: jpetstoreweb
2025-04-29T18:29:19.2621882Z spec:
2025-04-29T18:29:19.2622071Z   replicas: 1
2025-04-29T18:29:19.2622291Z   selector:
2025-04-29T18:29:19.2622490Z       matchLabels:
2025-04-29T18:29:19.2622714Z         app: jpetstoreweb
2025-04-29T18:29:19.2622910Z   template:
2025-04-29T18:29:19.2623115Z     metadata:
2025-04-29T18:29:19.2623306Z       labels:
2025-04-29T18:29:19.2623657Z         app: jpetstoreweb
2025-04-29T18:29:19.2623863Z     spec:
2025-04-29T18:29:19.2624053Z       containers:
2025-04-29T18:29:19.2624266Z       - name: jpetstoreweb
2025-04-29T18:29:19.2624499Z         image: "mcmpdemo/jpetstore-web:latest"
2025-04-29T18:29:19.2624728Z         imagePullPolicy: Always
2025-04-29T18:29:19.2624937Z         env:
2025-04-29T18:29:19.2625306Z           - name: VERSION
2025-04-29T18:29:19.2625520Z             value: "1"
2025-04-29T18:29:19.2625717Z           - name: mysqlUrl
2025-04-29T18:29:19.2625932Z             valueFrom:
2025-04-29T18:29:19.2626129Z               secretKeyRef:
2025-04-29T18:29:19.2626336Z                 name: mysql-creds
2025-04-29T18:29:19.2626561Z                 key: mysql.url
2025-04-29T18:29:19.2626763Z           - name: mysqlUser
2025-04-29T18:29:19.2626978Z             valueFrom:
2025-04-29T18:29:19.2627327Z                 secretKeyRef:
2025-04-29T18:29:19.2627906Z                   name: mysql-creds
2025-04-29T18:29:19.2628296Z                   key: mysql.username
2025-04-29T18:29:19.2628499Z           - name: mysqlPass
2025-04-29T18:29:19.2628717Z             valueFrom:
2025-04-29T18:29:19.2628909Z               secretKeyRef:
2025-04-29T18:29:19.2629120Z                 name: mysql-creds
2025-04-29T18:29:19.2629324Z                 key: mysql.password
2025-04-29T18:29:19.2629515Z         ports:
2025-04-29T18:29:19.2629726Z         - containerPort: 9080
2025-04-29T18:29:19.2629926Z         readinessProbe:
2025-04-29T18:29:19.2630133Z           httpGet:
2025-04-29T18:29:19.2630322Z             path: /
2025-04-29T18:29:19.2630522Z             port: 9080
2025-04-29T18:29:19.2630722Z           initialDelaySeconds: 10
2025-04-29T18:29:19.2631107Z           periodSeconds: 5
2025-04-29T18:29:19.2631321Z         resources:
2025-04-29T18:29:19.2631516Z           requests:
2025-04-29T18:29:19.2631732Z             memory: "128Mi"
2025-04-29T18:29:19.2631928Z             cpu: "250m"
2025-04-29T18:29:19.2632270Z           limits:
2025-04-29T18:29:19.2632475Z             memory: "500Mi"
2025-04-29T18:29:19.2632665Z             cpu: "500m"
2025-04-29T18:29:19.2632861Z ---
2025-04-29T18:29:19.2633064Z # Source: modernpets/templates/mysqlJob.yaml
2025-04-29T18:29:19.2633301Z apiVersion: batch/v1
2025-04-29T18:29:19.2633489Z kind: Job
2025-04-29T18:29:19.2633666Z metadata:
2025-04-29T18:29:19.2634022Z   name: jpetstoredb
2025-04-29T18:29:19.2634200Z spec:
2025-04-29T18:29:19.2634387Z   template:
2025-04-29T18:29:19.2634560Z     spec:
2025-04-29T18:29:19.2634735Z       containers:
2025-04-29T18:29:19.2634938Z       - name: jpetstoredb
2025-04-29T18:29:19.2635153Z         image: "mcmpdemo/jpetstore-db:latest"
2025-04-29T18:29:19.2635398Z         command: ["python",  "/src/create_db.py"]
2025-04-29T18:29:19.2635597Z         env:
2025-04-29T18:29:19.2640861Z           - name: mysqlUrl
2025-04-29T18:29:19.2641171Z             valueFrom:
2025-04-29T18:29:19.2641369Z               secretKeyRef:
2025-04-29T18:29:19.2641583Z                 name: mysql-creds
2025-04-29T18:29:19.2641978Z                 key: mysql.url
2025-04-29T18:29:19.2642183Z           - name: mysqlUser
2025-04-29T18:29:19.2642591Z             valueFrom:
2025-04-29T18:29:19.2642778Z                 secretKeyRef:
2025-04-29T18:29:19.2642990Z                   name: mysql-creds
2025-04-29T18:29:19.2643342Z                   key: mysql.username
2025-04-29T18:29:19.2643545Z           - name: mysqlPass
2025-04-29T18:29:19.2643725Z             valueFrom:
2025-04-29T18:29:19.2643919Z               secretKeyRef:
2025-04-29T18:29:19.2644101Z                 name: mysql-creds
2025-04-29T18:29:19.2644291Z                 key: mysql.password
2025-04-29T18:29:19.2644609Z       restartPolicy: OnFailure
2025-04-29T18:29:19.2644799Z   backoffLimit: 4
2025-04-29T18:29:19.2644990Z ---
2025-04-29T18:29:19.2645181Z # Source: modernpets/templates/ingress.yaml
2025-04-29T18:29:19.2645410Z apiVersion: networking.k8s.io/v1
2025-04-29T18:29:19.2645602Z kind: Ingress
2025-04-29T18:29:19.2645780Z metadata:
2025-04-29T18:29:19.2645974Z   name: jpetstoreweb
2025-04-29T18:29:19.2646162Z   namespace: jppetstore
2025-04-29T18:29:19.2646363Z   annotations:
2025-04-29T18:29:19.2646570Z     nginx.ingress.kubernetes.io/rewrite-target: /
2025-04-29T18:29:19.2646803Z     nginx.ingress.kubernetes.io/ssl-redirect: "true"
2025-04-29T18:29:19.2647046Z     nginx.ingress.kubernetes.io/hsts: "true"
2025-04-29T18:29:19.2647280Z     nginx.ingress.kubernetes.io/hsts-max-age: "31536000"
2025-04-29T18:29:19.2651421Z     nginx.ingress.kubernetes.io/hsts-include-subdomains: "true"
2025-04-29T18:29:19.2651718Z     # Optional: enable gzip for better performance
2025-04-29T18:29:19.2652007Z     nginx.ingress.kubernetes.io/enable-modsecurity: "true"
2025-04-29T18:29:19.2652236Z   labels:
2025-04-29T18:29:19.2652436Z     app: jpetstoreweb
2025-04-29T18:29:19.2652650Z spec:
2025-04-29T18:29:19.2652855Z   ingressClassName: nginx
2025-04-29T18:29:19.2653227Z   rules:
2025-04-29T18:29:19.2653594Z   - host: "akscluster-0k1d2s8p.hcp.eastus.azmk8s.io"
2025-04-29T18:29:19.2653811Z     http:
2025-04-29T18:29:19.2654167Z       paths:
2025-04-29T18:29:19.2654357Z         - path: /
2025-04-29T18:29:19.2654583Z           pathType: ImplementationSpecific
2025-04-29T18:29:19.2654798Z           backend:
2025-04-29T18:29:19.2655002Z             service: 
2025-04-29T18:29:19.2655185Z               name: web
2025-04-29T18:29:19.2655371Z               port:
2025-04-29T18:29:19.2655575Z                 number: 80
2025-04-29T18:29:19.2655647Z 
2025-04-29T18:29:19.2655836Z NOTES:
2025-04-29T18:29:19.2656201Z In a few seconds, your application should be live at:
2025-04-29T18:29:19.2656437Z     http://jpetstore-web.app/
2025-04-29T18:29:19.2656658Z INFO:Deploy:RESULT 0
2025-04-29T18:29:19.2657002Z INFO:Deploy:Your application is available at http://jpetstore-web.akscluster-0k1d2s8p.hcp.eastus.azmk8s.io