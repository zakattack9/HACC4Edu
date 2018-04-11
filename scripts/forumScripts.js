$(document).ready(function() {
	$('.threadDesc').map((currVal, index) => {
		if (index.scrollHeight > index.offsetHeight) {
			let parentEl = index.parentElement.parentElement;
			$(parentEl).find('.bottomOpt').append(`
				<span class="showMore">
 					Show More
 				</span>
			`)
		}
	});
	
	$('.showMore').on('click', function() {
		let parentEl = this.parentElement.parentElement;
		let descEl = $(parentEl).find('.threadInfo').find('.threadDesc')[0];
		
		let bottomOptEl = $(parentEl).find('.bottomOpt')[0];
		let showMoreTxt = $(bottomOptEl).find('.showMore')[0];

		let heightDiff = descEl.scrollHeight - descEl.offsetHeight;
		let threadHeight = $(parentEl).height();
		$(parentEl)[0].style.height = threadHeight + heightDiff + "px";
		$(descEl)[0].style.height = threadHeight + heightDiff + "px";
		$(bottomOptEl)[0].style.top = heightDiff + "px";

		if(showMoreTxt.innerText === "Show Less") {
			console.log($(parentEl)[0])
			$(parentEl)[0].style.height = "140px";
			$(descEl)[0].style.height = "70px";
			showMoreTxt.innerHTML = "Show More";
		}else {
			showMoreTxt.innerHTML = "Show Less";
		}

	})

	let votedUp = false;
	let votedDown = false;
	$('.upArrow').on('click', function() {
		let parentEl = this.parentElement;
		let currentCount = $(parentEl).find('.threadCount')[0];

		let upCount = +currentCount.innerHTML;
		if (votedDown) {
			currentCount.innerHTML = upCount + 2;
			votedUp = true;
			votedDown = false;
		}else if (votedUp === false) {
			currentCount.innerHTML = upCount + 1;
			votedUp = true;
		}
	})

	$('.downArrow').on('click', function() {
		let parentEl = this.parentElement;
		let currentCount = $(parentEl).find('.threadCount')[0];

		let downCount = +currentCount.innerHTML;
		if (votedUp) {
			currentCount.innerHTML = downCount - 2;
			votedDown = true;
			votedUp = false;
		}else if (votedDown === false) {
			currentCount.innerHTML = downCount - 1;
			votedDown = true;
		}
	})

	$('#addIcon').on('click', function() {
		$('#addIcon').toggleClass('exitPop');

		if($('#addIcon').hasClass('exitPop')){
			$('#addIcon')[0].style.transform = "rotate(-45deg)";
			$('#addThreadPop')[0].style.display = "block";
		}else {
			$('#addThreadPop')[0].style.display = "none";
			$('#addIcon')[0].style.transform = "rotate(0deg)";
		}
	})

	$('.threadTitle').on('click', function() {
		$('#threadPop')[0].style.display = "block";
		$('#container')[0].style.overflowY = "hidden";
		$('#threadWrap').scrollTop(0);

		let threadDesc = $(this.parentElement).find('.threadDesc')[0].innerText;
		$('#popDesc')[0].innerHTML = threadDesc;
		$('#popTitle')[0].innerHTML =  this.innerText;
	})

	$('#closeThreadPop').on('click', function() {
		$('#threadPop')[0].style.display = "none";
		$('#container')[0].style.overflowY = "auto";
	})

	$('#addComment').on('click', function() {

		if($('#addCommentWrap').hasClass('addingComment')) {
			$('#addCommentWrap').removeClass('addingComment');

			$('#addCommentWrap img')[0].style.transform = "rotate(0deg)";

			$('#commentsWrap').find(':first-child').remove();
			$('#commentsWrap').find(':first-child').remove(); //second one removes "add comment" button
			$('#commentsWrap').find(':first-child').remove(); //third one to remove the <hr>

		}else {
			$('#addCommentWrap').addClass('addingComment');

			$('#addCommentWrap img')[0].style.transform = "rotate(-45deg)";

			$('#commentsWrap').prepend(`
				<textarea></textarea>
				<div id="addCommentBtn">Add Comment</div>
				<hr>
			`)		
			
			$('#addCommentBtn').on('click', function() {
				if ($('#commentsWrap textarea').length > 0) {
					let newComment = $('#commentsWrap textarea').val();
					$('#commentsWrap').find(':first-child').remove();
					$('#commentsWrap').find(':first-child').remove();

					$('#commentsWrap').prepend(`
						<div class="comments" style="">${newComment}</div>
						<div class="comBtmInf">
							1 second ago
						</div>
					`)

					$('#addCommentWrap').removeClass('addingComment');
					$('#addCommentWrap img')[0].style.transform = "rotate(0deg)";
				} else {
					$('#commentsWrap textarea').attr("placeholder", "Field is blank, please input your comment in this field")
				}

			})
		}

	})



});




