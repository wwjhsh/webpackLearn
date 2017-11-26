import Header from '../page/layout/header.html'

import 'global/plugins/font-awesome/css/font-awesome.min.css'
import 'global/plugins/simple-line-icons/simple-line-icons.min.css'
import 'global/plugins/bootstrap/css/bootstrap.min.css'
// import '../metronic/global/plugins/uniform/css/uniform.default.css'//表单美化插件
// import '../metronic/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css'//开关控件
// import '../metronic/global/css/components.css'
// import '../metronic/global/css/plugins.css'
import 'layout/css/layout.css'
import 'layout/css/custom.css'
import 'layout/css/themes/default.css'

// import '../metronic/global/plugins/jquery.min'
import 'global/plugins/bootstrap/js/bootstrap.min'
// import '../metronic/global/plugins/bootstrap-switch/js/bootstrap-switch.min'
import Metronic from 'Metronic' 
console.log(Metronic)
// import Layout from 'layout/scripts/layout.js'
var Layout =require ('imports-loader?Metronic=Metronic!layout/scripts/layout.js')
console.log(Layout)
// import Metronic from './out';
// var Module =require("Module")
// import Metronic
// var Metronic = require("expose-loader?Metronic!../metronic/global/scripts/metronic.js")
// console.log(Metronic)
// console.log(Module)expose-loader
// require("expose-loader?Metronic!global/scripts/metronic.js")

// require("expose-loader?Layout!layout/scripts/layout.js")
// require("script-loader!layout/scripts/quick-sidebar.js")
// import '../metronic/admin/layout/scripts/layout'
// import '../metronic/admin/layout/scripts/quick-sidebar'
// import '../metronic/admin/layout/scripts/quick-sidebar'

/* <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css"/> */
/* <link href="../../assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/> */
/* <link href="../../assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/> */
/* <link href="../../assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/> */
/* <link href="../../assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/> */
/* <link href="../../assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css"/> */
// console.log(Header)
$(Header).appendTo('body')