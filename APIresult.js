async function loadEvents() {
    try {
        var result = await getEvents();
        document.getElementById("Event").innerHTML += result;
    } catch (error) {
    }
}

async function getEvents() {
    try {
        const URL = 'http://api.eventful.com/json/events/search?app_key=w5mW6245TvcNw5Bx&location=San+Diego';
        const Pram = {
            mode: "no-cors",
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        };

        var response = await fetch(URL, Pram);
        console.log(response);
        var res = await response.text();
        console.log(res);
        var events = JSON.parse(res).events.event;
        console.log(events);
        return events;
    } catch (error) {
        return "";
    }
}

loadEvents();