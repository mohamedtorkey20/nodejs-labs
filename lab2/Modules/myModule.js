class FlightTicket {

    constructor(seatNum, flightNum, departureAirport, arrivalAirport, travellingDate) {
        this._seatNum = seatNum;
        this._flightNum = flightNum;
        this._departureAirport = departureAirport;
        this._arrivalAirport = arrivalAirport;
        this._travellingDate = travellingDate;
    }

    //-------------------------Setter methods------------------------------
    set seatNum(seatNum) {
        this._seatNum = seatNum;
    }

    set flightNum(flightNum) {
        this._flightNum = flightNum;
    }

    set departureAirport(departureAirport) {
        this._departureAirport = departureAirport;
    }

    set arrivalAirport(arrivalAirport) {
        this._arrivalAirport = arrivalAirport;
    }

    set travellingDate(travellingDate) {
        this._travellingDate = travellingDate;
    }


    //-------------------------Getter methods------------------------------
    get seatNum() {
        return this._seatNum;
    }

    get flightNum() {
        return this._flightNum;
    }

    get departureAirport() {
        return this._departureAirport;
    }

    get arrivalAirport() {
        return this._arrivalAirport;
    }

    get travellingDate() {
        return this._travellingDate;
    }


    //----------------------------display information-----------------------
    displayInfo() {
        console.log(`----------Information Ticket---------------`);
        console.log(`Seat Number: ${this._seatNum}`);
        console.log(`Flight Number: ${this._flightNum}`);
        console.log(`Departure Airport: ${this._departureAirport}`);
        console.log(`Arrival Airport: ${this._arrivalAirport}`);
        console.log(`Travelling Date: ${this._travellingDate}`);
    }

    //----------------------------update information-------------------------
    updateInfo(seatNum =this.seatNum, flightNum=this.flightNum ,departureAirport =this.departureAirport, arrivalAirport=this.arrivalAirport, travellingDate=this.travellingDate) {
        this._seatNum = seatNum;
        this._flightNum = flightNum;
        this._departureAirport = departureAirport;
        this._arrivalAirport = arrivalAirport;
        this._travellingDate = travellingDate;
    }
}


module.exports= {FlightTicket};

// // Example usage
// const myTicket = new FlightTicket("A12", "ABC123", "JFK", "LAX", "2024-04-01");
// myTicket.displayInfo();

// // Update ticket information
// myTicket.updateInfo("B34", "XYZ456", "LAX", "JFK", "2024-04-02");
// myTicket.displayInfo();
