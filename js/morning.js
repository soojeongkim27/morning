$(document).ready(function(){
	
	//상단 메인메뉴에 마우스를 갖다댈 때 
	$("header li>a").on( "mouseenter  click" , function(){
		$("header ul").stop().animate({height:"200px"});
		$("header li nav").show();
		$("header li>a").removeClass("active");
		$(this).addClass("active");
	});//상단 메인메뉴. 끝
	
	//상단 메뉴에 마우스를 뗄 때
	$("header ul").mouseleave(function(){
		$("header ul").stop().animate({height:"100px"});
		$("header li nav").hide();
	});//마우스를 뗄 때. 끝	
	
	//상단 서브메뉴에 마우스를 갖대댈때
	$("header li nav a").mouseenter(function(){
		$("header li>a").removeClass("active");
		$(this).parent().prev().addClass("active");
	});//상단 서브메뉴. 끝
	
	//상단 메뉴에서 마지막 서브메뉴에서 탭키를 떠날때
	$(".last").blur(function(){
		$("header ul").stop().animate({height:"100px"});
		$("header li nav").hide();
	}); //탭키를 떠날때. 끝
	
	
	//이미지 슬라이드 (위치가 상/하/좌/우로 이동하려면 반드시 css에 {position:~} 설정이 되어있어야 함.)
	setInterval(morning, 2000);
	const $area = $("#slide div");
	function morning(){
			$area.stop().animate({left:"-1100px"},1500,function(){
				$area.append($area.children().first());
				$area.css("left",0);
			});
	}//이미지 슬라이드. 끝
	
	
	//팝업창 보이기
	$("#notice a").click(function(){
		$("#popup").stop().fadeIn();
	});//팝업창 보이기. 끝	
	
	//팝업창 닫기
	$("#popup button").click(function(){
		$(this).parent().stop().fadeOut();
	});
	
	//[esc]키로 팝업창 닫기
	$(document).keydown(function(e) {
		//enter 키코드 13, esc키코드 27
		if ( e.keyCode == 27 || e.which == 27 ) {
			$("#popup").stop().fadeOut();
		}
	});//esc키. 끝
	
	
	//협력사 콘텐츠 목록 항목 마우스호버시
	$("#partner ul a").hover(
			function(){//마우스 갖다댈때
				$(this).parent().css("color","yellowgreen");
			},
			function(){//마우스 치울때
				$(this).parent().css("color","#666");
			}
	);//협력사.  끝
	
});//////////////////전체 끝
