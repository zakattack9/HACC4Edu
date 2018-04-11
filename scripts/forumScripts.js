$(document).ready(function() {
	function showMoreFunc () {
		$('.threadDesc').map((currVal, index) => {
			if (index.scrollHeight > index.offsetHeight) {
				let parentEl = index.parentElement.parentElement;
				$(parentEl).find('.bottomOpt').find('.showMore').remove();
				$(parentEl).find('.bottomOpt').append(`
					<span class="showMore">
	 					Show More
	 				</span>
				`)
			}
		});

		$('#creditsButton').click(function() {
			$('#creditsPopUp').css("display", "block");
		});

		$('.menuClose').click(function() {
		if(document.getElementById('creditsPopUp').style.display == "block") {
			$('#creditsPopUp').css("display", "none");
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
	}
	showMoreFunc();

	let votedUp = false;
	let votedDown = false;
	$(document).on('click', '.upArrow', function() {
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

	$(document).on('click', '.downArrow', function() {
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

	$(document).on('click', '#addIcon', function() {
		$('#addIcon').toggleClass('exitPop');
		$('#creditsPopUp').css("display", "none");

		if($('#addIcon').hasClass('exitPop')){
			$('#addIcon')[0].style.transform = "rotate(-45deg)";
			$('#addThreadPop')[0].style.display = "block";
		}else {
			$('#addThreadPop')[0].style.display = "none";
			$('#addIcon')[0].style.transform = "rotate(0deg)";
		}
	})

	$(document).on('click', '.threadTitle', function() {
		$('#threadPop')[0].style.display = "block";
		$('#container')[0].style.overflowY = "hidden";
		$('#threadWrapPop').scrollTop(0);

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

	$('#createThread').on('click', function() {
		let threadTitle = $('#formTitle input').val();
		let threadDesc = $('#formDescription textarea').val();
		let threadTags = $('#formTags input').val();

		$('#threadWrap').prepend(`
			<div class="thread">
	 			<div class="threadInfo">
		 			<div class="threadTitle">
						${threadTitle}
		 			</div>

		 			<div class="threadDesc">
		 				${threadDesc}
		 			</div>
				</div>

	 			<div class="vote">
	 				<img class="upArrow" src="../images/arrow.png">
	 				<div class="threadCount">1</div>
	 				<img class="downArrow" src="../images/arrow.png">
	 			</div>

	 			<div class="bottomOpt">
	 				<span class="dateCreated">
	 					1 second ago
	 				</span>
	 			</div>
	 		</div>
		`)

		$('#addIcon').toggleClass('exitPop');
		$('#addThreadPop')[0].style.display = "none";
		$('#addIcon')[0].style.transform = "rotate(0deg)";

		//empty inputs
		$('#formTitle input').val('');
		$('#formDescription textarea').val('');
		$('#formTags input').val('');
		showMoreFunc();
	})


	$('#menuIcon').on('click', function() {
		$('#sideNav')[0].style.width = 300 + "px";
	})

	$('#closeNav').on('click', function() {
		$('#sideNav')[0].style.width = 0 + "px";
	})
});
