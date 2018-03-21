var count=0;

$(function(){
	//基础地图
	//基础地图
	//基础地图
//	    var map = new AMap.Map('container', {
//	        resizeEnable: true,
//	        //放大程度
//	        zoom:11,
//	        isHotspot: true,
//	        //设置地图样式
//			//mapStyle: 'amap://styles/名字'
//	    });
  	var map, geolocation;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {
        resizeEnable: true,
    });
    //浏览器定位
    //浏览器定位
    //浏览器定位
    geolocationsss();
   	function geolocationsss(){
   		 map.plugin('AMap.Geolocation', function() {
    	
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
        });
        
        map.addControl(geolocation);
        geolocation.getCurrentPosition();

        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
    });
    //解析定位结果
    function onComplete(data) {
//      var str=['定位成功'];
//      str.push('经度：' + data.position.getLng());
//      str.push('纬度：' + data.position.getLat());
//      if(data.accuracy){
//           str.push('精度：' + data.accuracy + ' 米');
//      }//如为IP精确定位结果则没有精度信息
//      str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
//      document.getElementById('tip').innerHTML = str.join('<br>');
    }
    //解析定位错误信息
    function onError(data) {
        alert("定位失败");
    }
   	}
   
		
	    // 设置缩放级别和中心点
//      map.setZoomAndCenter(18);
//         在新中心点添加 marker 
//      var marker = new AMap.Marker({
//          map: map,
//			//position: [116.205467, 39.907761];
//      });
        
	    //为地图添加toolbar插件
	    //为地图添加toolbar插件
	    //为地图添加toolbar插件
	    //为地图添加toolbar插件
	    map.plugin(['AMap.ToolBar'],function(){
	    	 //设置地位标记为自定义标记
       		var toolBar = new AMap.ToolBar();	
        	map.addControl(toolBar);
	    });
		    //切换中英文
		    //切换中英文
		    //切换中英文
		    $("#zh_cn").css({"background-color":"white","color":"black"});
		    ['en', 'zh_en', 'zh_cn'].forEach(function(btn) {
		    var button = document.getElementById(btn);
		    AMap.event.addDomListener(button,'click',clickListener)
	    });
	
	    function clickListener() {
	    	//修改样式
	    	var xmid=this.id;
	    	$("#"+xmid).css({"background-color":"white","color":"black"});
	    	$("#"+xmid).siblings().css({"background-color":"#323232","color":"white"});
	        map.setLang(this.id); 
	    }
	    //------------------------鼠标拉狂扩大城市
	    //------------------------鼠标拉狂扩大城市
	    //------------------------鼠标拉狂扩大城市
//	    shubiaokuangda();
	    function shubiaokuangda(){
	    	 var rectOptions = {
	        strokeStyle: "dashed",
	        strokeColor: "black",
	        fillColor: "#FF99FF",
	        fillOpacity: 0.5,
	        strokeOpacity: 1,
	        strokeWeight: 2
		    };
		    map.plugin(["AMap.MouseTool"], function() {
		        var mouseTool = new AMap.MouseTool(map);
				//通过rectOptions更改拉框放大时鼠标绘制的矩形框样式
		        mouseTool.rectZoomIn(rectOptions);     
		    });
	    }
		     
		//ip定位城市
		//ip定位城市
		//ip定位城市
		$(".xm_ip_2").on("click",function(){
			
			//实例化城市查询类
	        var citysearch = new AMap.CitySearch();
	        //自动获取用户IP，返回当前城市
	        citysearch.getLocalCity(function(status, result) {
	            if (status === 'complete' && result.info === 'OK') {
	                if (result && result.city && result.bounds) {
	                    var cityinfo = result.city;
	                    var citybounds = result.bounds;
						//document.getElementById('container').innerHTML = '您当前所在城市：'+cityinfo;
	                    //地图显示当前城市
	                    map.setBounds(citybounds);
		                }
	            } else {
					// document.getElementById('container').innerHTML = result.info;
	            }
	        });
		});
		
		//精准定位
		//精准定位
		//精准定位
		$(".xm_ip2_2").on("click",function(){
			geolocationsss();
		});
		//图层
		  //实时路况图层
		  //实时路况图层
		  //实时路况图层
   		var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
    	});
    	var isVisible = true;
    	AMap.event.addDomListener(document.getElementById('xm_tc_a1'), 'click', function() {
   		trafficLayer.setMap(map);
    		
        if (isVisible) {
            trafficLayer.show();
            isVisible = false;
	        $(this).css({"background-color":"white","color":"black"});
        } else {
            trafficLayer.hide();
            isVisible = true;
	        $(this).css({"background-color":"#323232","color":"white"});
        }
    	}, false);
    	

    	//3d
    	//3d
    	//3d
	  if (document.createElement('canvas') && document.createElement('canvas').getContext && document.createElement('canvas').getContext('2d')) {
		// 实例化3D楼块图层
		var buildings = new AMap.Buildings();
		
	    } else {
	        document.getElementById('tip').innerHTML = "对不起，运行该示例需要浏览器支持HTML5！";
	    }
	    
    	var isVisible = true;
	    AMap.event.addDomListener(document.getElementById('xm_tc_a2'), 'click', function() {
	    	// 设置缩放级别和中心点
        	map.setZoomAndCenter(18);
	    	// 在map中添加3D楼块图层
	        buildings.setMap(map);
	        if (isVisible) {
	            buildings.show();
	            isVisible = false;
        	map.setZoomAndCenter(18);
	            
	            $(this).css({"background-color":"white","color":"black"});
	        } else {
	            buildings.hide();
	            isVisible = true;            
	            $(this).css({"background-color":"#323232","color":"white"});
	        }
	    	}, false);
	    	
	    	//卫星图
	    	//卫星图
	    	//卫星图
	    	var Satellites=new AMap.TileLayer.Satellite();
	    	var isVisible = true;
	    AMap.event.addDomListener(document.getElementById('xm_tc_a3'), 'click', function() {
	    	// 在map中添加3D楼块图层
	        Satellites.setMap(map);
	        if (isVisible) {
	            Satellites.show();
	            isVisible = false;
	            
	            $(this).css({"background-color":"white","color":"black"});
	        } else {
	            Satellites.hide();
	            isVisible = true;            
	            $(this).css({"background-color":"#323232","color":"white"});
	        }
	    	}, false);
	    	
	    	//测量距离
	    	//测量距离
	    	//测量距离
	    	var ruler1, ruler2;
   		
		    map.plugin(["AMap.RangingTool"], function() {
		        ruler1 = new AMap.RangingTool(map);
		        AMap.event.addListener(ruler1, "end", function(e) {
		            ruler1.turnOff();
		        });
		        var sMarker = {
		            icon: new AMap.Icon({
		                size: new AMap.Size(19, 31),//图标大小
		                image: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png"
		            })
		        };
		        var eMarker = {
		            icon: new AMap.Icon({
		                size: new AMap.Size(19, 31),//图标大小
		                image: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b2.png"
		            }),
		            offset: new AMap.Pixel(-9, -31)
		        };
		        var lOptions = {
		            strokeStyle: "solid",
		            strokeColor: "#FF33FF",
		            strokeOpacity: 1,
		            strokeWeight: 2
		        };
		        var rulerOptions = {startMarkerOptions: sMarker, endMarkerOptions: eMarker, lineOptions: lOptions};
		        ruler2 = new AMap.RangingTool(map, rulerOptions);
		    });
		    //启用默认样式测距
			//		    function startRuler1() {
			//		        ruler2.turnOff();
			//		        ruler1.turnOn();
			//		    }
		    //启用自定义样式测距
		    //启用自定义样式测距
		    //启用自定义样式测距
		    $(".xm_cl .xm_cl_1").on('click',function(){
		    	
		    		ruler1.turnOff();
		        	ruler2.turnOn();
		        
		    })
		    
		    //面积测量
		    //面积测量
		    //面积测量
		    
		     $(".xm_cl .xm_cl_2").on('click',function(){
			    	//在地图中添加MouseTool插件
			   		map.plugin(["AMap.MouseTool"], function() {
			        var mouseTool = new AMap.MouseTool(map);
			        //鼠标工具插件添加draw事件监听
			        AMap.event.addListener(mouseTool, "draw", function callback(e) {
			            var eObject = e.obj;//obj属性就是鼠标事件完成所绘制的覆盖物对象。
			        });
			        mouseTool.measureArea();  //调用鼠标工具的面积量测功能
			    });
		    })
		     
		     //地图右键
		     //地图右键
		     //地图右键   
			    var contextMenu = new AMap.ContextMenu();  //创建右键菜单
			    //右键放大
			    contextMenu.addItem("放大一级", function() {
			        map.zoomIn();
			    }, 0);
			    //右键缩小
			    contextMenu.addItem("缩小一级", function() {
			        map.zoomOut();
			    }, 1);
			    //右键显示全国范围
			    contextMenu.addItem("缩放至全国范围", function(e) {
			        map.setZoomAndCenter(4, [108.946609, 34.262324]);
			    }, 2);
			    //右键添加Marker标记
			    contextMenu.addItem("添加标记", function(e) {
			        var marker = new AMap.Marker({
			            map: map,
			            position: contextMenuPositon //基点位置
			        });
			    }, 3);		 
			    //地图绑定鼠标右击事件——弹出右键菜单
			    map.on('rightclick', function(e) {
			        contextMenu.open(map, e.lnglat);
			        contextMenuPositon = e.lnglat;
			    });
			    
			    //改变背景
			    //改变背景
			    //改变背景
			    $(".xm_bg .xm_a").on('click',function(){
			    	map.setMapStyle('amap://styles/'+$(this).attr("data-bg"));
			    	$(this).css({"background-color":"white","color":"black"});
			    	$(this).siblings().css({"background-color":"#323232","color":"white"});
			    });
			    
			    //热点
			    //热点
			    //热点
//			    redian();
			    function redian(){
			    	var placeSearch = new AMap.PlaceSearch();  //构造地点查询类
				    var infoWindow=new AMap.AdvancedInfoWindow({});
				    map.on('hotspotclick', function(result) {
				        placeSearch.getDetails(result.id, function(status, result) {
				            if (status === 'complete' && result.info === 'OK') {
				                placeSearch_CallBack(result);
				            }
				        });
				    });
				    //回调函数
				    function placeSearch_CallBack(data) { //infoWindow.open(map, result.lnglat);
				        var poiArr = data.poiList.pois;
				        var location = poiArr[0].location;
				        infoWindow.setContent(createContent(poiArr[0]));
				        infoWindow.open(map,location);
				    }
				    function createContent(poi) {  //信息窗体内容
				        var s = [];
				        s.push('<div class="info-title">'+poi.name+'</div><div class="info-content">'+"地址：" + poi.address);
				        s.push("电话：" + poi.tel);
				        s.push("类型：" + poi.type);
				        s.push('<div>');
				        return s.join("<br>");
				    }	    
			    }
			    //输入提示 	
		    	  var auto = new AMap.Autocomplete({
				        input: "xm_search1_input_1"
				    }); var auto2 = new AMap.Autocomplete({
				        input: "xm_lx_input1"
				    }); var auto3 = new AMap.Autocomplete({
				        input: "xm_lx_input2"
				    });
	    
			    //关键词搜索
			    //关键词搜索
			    //关键词搜索
			    $(".xm_search1 .input_2").on("click",function(){
			    	var aa=$(".xm_search1 .input_1").val();
					geocoder(aa);
				});
				 
				//给输入框绑定按键事件
			   $(".xm_search1 .input_1").keydown(function(){
		           if(event.keyCode == "13") {//判断如果按下的是回车键则执行下面的代码
		            var aa=$(".xm_search1 .input_1").val();
					geocoder(aa);
					}
		          })
				
				function geocoder(aa) {  //地理编码返回结果展示
					    AMap.service(["AMap.PlaceSearch"], function() {
				        var placeSearch = new AMap.PlaceSearch({ //构造地点查询类
				            pageSize: 5,
				            pageIndex: 1,
				            city: "010", //城市
				            map: map,
				            panel: "panel"
				        });
				        //关键字查询
				        placeSearch.search(aa);
				    });
				} 
				
				//步行
				$(".xm_lx .input_lx1").on("click",function(){
				    var a1=$('#xm_lx_input1').val();
				    var a2=$('#xm_lx_input2').val();
					var walking = new AMap.Walking({
				        map: map,
				        panel: "panel"
				    }); 
				    walking.search([
				        {keyword:a1,city:''},
				        {keyword:a2,city:''}
				    ]);
				});
				//骑行
				$(".xm_lx .input_lx2").on("click",function(){
				    var a1=$('#xm_lx_input1').val();
				    var a2=$('#xm_lx_input2').val();
					 var riding = new AMap.Riding({
				        map: map,
				        panel: "panel"
				    }); 
				    riding.search([
				         {keyword:a1,city:''},
				        {keyword:a2,city:''}
				    ]);
				});
				//驾车
				$(".xm_lx .input_lx3").on("click",function(){
				    var a1=$('#xm_lx_input1').val();
				    var a2=$('#xm_lx_input2').val();
					    var driving = new AMap.Driving({
				        map: map,
				        panel: "panel"
				    }); 
				    driving.search([
				         {keyword:a1,city:''},
				        {keyword:a2,city:''}
				    ]);
				});
		    	

})


