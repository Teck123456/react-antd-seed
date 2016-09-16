"use strict";


module.exports={
	'GET /api/menus': function (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: [{
        	text:"内容管理",
        	icon:"appstore",
          link:"/home",
          key:"01",
        	children:[{
        		text:"菜单管理",
        		icon:"appstore",
            link:"/menus",
            key:"01-01"
        	}]
        },{
          text:"内容管理",
          icon:"appstore",
          link:"/home",
          key:"02",
          children:[{
            text:"菜单管理",
            icon:"appstore",
            link:"/menus",
            key:"02-01"
          }]
        }],
      });
    }, 500);
  },

}