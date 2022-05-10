function getLeaderboard() {
	let input;
	let path = "data/leaderboard.csv";
	$.ajaxSetup({async: false}); // To make sure that we wait til we got the data
	$.get(path, function(text) {
		input = text;
	},'text');
	
	let d = input.split('\n');
	let header;

	for (let i=0; i<d.length; i++) {
		if (i==0) {
			header = d[i].split(';');
		} else {
			d[i-1] = d[i].split(';');
		}
	}

	let dataDict = [];
	for (let i=0; i<d.length-1; i++) {
		dataDict.push({});
		for (let j=0; j<header.length; j++) {
			dataDict[i][header[j]] = d[i][j];
		}
	}
	return dataDict;
}

function updateLeaderboard() {
	let input;
	let path = "data/leaderboard.csv";
	$.ajaxSetup({async: false}); // To make sure that we wait til we got the data
	$.post(path, function(text) {
		input = "Player;time;mistakes\n1;2;3\n5;9;3";
	},'text');
}