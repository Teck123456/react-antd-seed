"use strict";


module.exports={
	'GET /api/menus': function (req, res) {
    setTimeout(function () {
      res.json({
        success: true,
        data: [{
        	text:"内容管理",
        	icon:"appstore",
        	children:[{
        		text:"菜单管理",
        		icon:"appstore"
        	}]
        }],
      });
    }, 500);
  },

}