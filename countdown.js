class CountdownJS {
    constructor(
        context, 
        { 
            datetime, 
            expires_message 
        }
    ){
        this.date = datetime;
        this.frametime = 1000;
        this.expires_message = expires_message;
        this.context = document.querySelector(context);
    }

    run(){
        setInterval(() => {
            let countdownDateTime = new Date(this.date)
                .getTime();

            let currentDateTime = new Date()
                .getTime();

            let distanceTime = countdownDateTime - currentDateTime;

            let times = {
                days: Math.floor(distanceTime / (1000 * 60 * 60 * 24)),
                seconds: Math.floor((distanceTime % (1000 * 60)) / 1000),
                minutes: Math.floor((distanceTime % (1000 * 60 * 60)) / (1000 * 60)),
                hours: Math.floor((distanceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            };

            let time = `${times.days}d ${times.hours}h ${times.minutes}m ${times.seconds}s`;

            this.context.innerText = time;

            if (distance < 0) {
                this.context.innerHTML = this.expires_message;
            };

        }, this.frametime)
    }
}

export { CountdownJS }