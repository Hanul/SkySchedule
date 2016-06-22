require('./UJS-NODE.js');

RUN(function() {

	var
	//IMPORT: exec
	exec = require('child_process').exec,
	
	// config
	config = JSON.parse(READ_FILE({
		path : 'config.json',
		isSync : true
	})),
	
	// schedule
	schedule = config.schedule;
	
	// 1분에 한번씩 체크
	INTERVAL(60, RAR(function() {
		
		var
		// now cal
		nowCal = CALENDAR();
		
		EACH(schedule, function(scheduleInfo) {
			
			if (nowCal.getHour() === scheduleInfo.hour && nowCal.getMinute() === (scheduleInfo.minute === undefined ? 0 : scheduleInfo.minute)) {
				
				EACH(scheduleInfo.commands, function(commandInfo) {
					
					exec(commandInfo.command, {
						cdw : commandInfo.cwd
					}, function(error) {
						if (error !== TO_DELETE) {
							console.log(CONSOLE_RED('[SkySchedule] ERROR:'), error.toString());
						}
					});
				});
			}
		});
	}));
	
	console.log('[SkySchedule] RUNNING...');
});
