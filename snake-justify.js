$.fn.snakeJustify = function() {
	this.each(function() {
		var height = $(this).height();
		$(this).append("<span class=\"snake\">┌┘</span>");
		var snake = $(this).children(".snake");
		var bodyLength = 1;
		
		if ($(this).height() != height) {
			snake.remove();
		} else {
			while ($(this).height() == height) {
				snake.text("┌");
				for (var i = 0; i < bodyLength; i++) {
					snake.text(snake.text() + "─");
				}
				snake.text(snake.text() + "┘");
				bodyLength++;
			}
			bodyLength -= 2;
			
			snake.text("┌");
			for (var i = 0; i < bodyLength; i++) {
				snake.text(snake.text() + "─");
			}
			snake.text(snake.text() + "┘");
			
		}
	});
};

function getLastLengthDiff(container) {
	lines = findWraps(e);
	simulated = JSON.parse(JSON.stringify(e));
	simulated.innerHtml = "";
	
	simulated.width("unset");
	simulated.append(lines[lines.length - 1]);
	lengthDiff = e.width() - simulated.width();
}

function findWraps(container) {
	var inner = container.innerHTML;
	var words = inner.split("\\s");
	var simulated = JSON.parse(JSON.stringify(container));
	simulated.innerHtml = "";
	
	var lastHeight = simulated.height();
	var lastBr = 0;
	var lines = [];
	
	for (var i = 0; i < words.length; i++) {
		simulated.appendChild(words[i] + " ");
		
		if (lastHeight > simulated.height()) {
			lines.append(array.slice(lastBr, i - 1));
			lastBr = i;
			lastHeight = simulated.height();
		}
	}
	
	return lines;
}
