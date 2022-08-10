window.addEventListener('DOMContentLoaded', ()=>{
 
    function getTimeRemaining(endDate){

    
        let t = Date.parse(endDate) - Date.parse(new Date()),
            seconds = Math.floor((t /1000) % 60),
            minutes = Math.floor((t /1000 /60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60))),
            days = Math.floor(hours / 24);

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds,
            'days': days
        };
    };

    function addZero(value){

        if (value < 10){
            return '0'+ value
        }
        else {
            return value
        };
    };

    function createDownload(){

        let a = document.createElement('a')

        a.href= 'http://hello.kitty'
        a.target = '_blank'
        a.download = a.target
        a.click()
    };

    function startTimer(timerTag, endDate, custom=false){

        let timer = document.querySelector(`${timerTag}`);
            
        if (!custom){

            let status = document.querySelector('#status');

            status.textContent = 'До окончания конкурса осталось времени:'
            status.appendChild(timer)

            let updateClock = setInterval(()=>{

                let endTime = getTimeRemaining(endDate);

                timer.textContent = `Дни: ${addZero(endTime.days)} 
                                    Часы: ${addZero(endTime.hours)} 
                                    Минуты: ${addZero(endTime.minutes)} 
                                    Секунды: ${addZero(endTime.seconds)}
                                    `

                if (endTime.t < 0){

                    clearInterval(updateClock)
                    alert('«Вы победили в конкурсе!»')
                    createDownload()
                };
    
            }, 1000);
        }
        else {

            let t = 3600 * custom;
     
            let updateClock = setInterval(()=>{

                let seconds = t % 60,
                    minutes = Math.floor((t / 60 ) % 60),
                    hours = Math.floor(t / (60 * 60));

                t--
                timer.textContent = `Часы: ${addZero(hours)} Минуты: ${addZero(minutes)} Секунды ${addZero(seconds)}`

                if (t < 0){

                    clearInterval(updateClock);
                    alert('«Вы победили в конкурсе!»')
                    createDownload()
                };
                
            }, 1000)
        };
    };

    startTimer('#timer', '2022-08-12', 0.01)
    // startTimer('#timer', '2022-08-12', 0.5) # Вариант с Своим значением в (часах int) 3 аргументом

});