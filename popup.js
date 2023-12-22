function convertTime(){
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    // const inputTime = document.getElementByClassName('input-time').value;
    const inputTimezone = document.getElementById('input-timezone').value;
    console.log(select1, typeof(select2));
    const [hours, minutes] = inputTimezone.split(':').map(Number);
    // console.log(hours,  minutes);
    const timeDifferences = {
        'IST':{
            'UTC':{ hours:5, minutes: 30},
            'GMT':{ hours: 5, minutes: 30},
            'IST':{ hours: 0, minutes: 0 }
        },
        'UTC': {
            'IST': { hours: -5, minutes: -30 },
            'GMT': { hours: 0, minutes: 0 },
            'UTC':{ hours: 0, minutes: 0 }
        },
        'GMT': {
            'IST': { hours: -5, minutes: -30 },
            'UTC': { hours: 0, minutes: 0 },
            'GMT': { hours: 0, minutes: 0 }
        }
    };

    const timeDifference = timeDifferences[select1][select2];
    let newHours = Number(hours) + timeDifference.hours;
    let newMinutes = Number(minutes) + timeDifference.minutes;

    if(newMinutes >= 60){
        newHours++;
        newMinutes -= 60;
    }

    const formattedTime = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
    document.getElementById('output-timezone').textContent = `Converted Time: ${formattedTime}`;

}


const btn = document.getElementById('btn');
btn.addEventListener('click', convertTime);