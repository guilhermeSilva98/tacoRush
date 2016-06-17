$(document).ready(function(){

	var Game = {
		init : function(){
			Player.animate_run();
		}
	}

	var Player = {

		jumping : false,
		obj : $('#player'),

		jump : function(){
			Player.animate_jump();
			Player.jumping = true;
			Player.obj.animate(
				{
					bottom: '500px'
				},
				{	
					easing : 'easeOutCubic',
					complete: function(){
						Player.obj.animate({
							bottom: '160px'
						},{
							duration : 600,
							easing: 'easeInCubic',
							complete: function(){
							Player.jumping = false;
							Player.obj.css('background', "Url('img/ryco_running.png')");
							Player.animate_run();
						}});
					}
			});

			
		},

		land : function(){
			
		},

		animate_run : function(){
			if(!Player.jumping){
				Player.obj.css('background-position', '-=455px');
				anim = setTimeout(Player.animate_run, 80);
			}else{
				clearTimeout(anim);
			}
		},

		animate_jump : function(){
			verif = parseInt(Player.obj.css('background-position'));
			if(verif >= -4095){
				Player.obj.css('background-position', '-=455px');
				anim2 = setTimeout(Player.animate_jump, 60);
			}
		}



	}
	Player.jumping = false;
	Game.init();

	$(document).on('keydown', function(e){
		if(e.keyCode == 32 && !Player.jumping){
			clearTimeout();
			Player.obj.css('background', "Url('img/ryco_jumping.png')");
			Player.jump();
		}
	});



















});
