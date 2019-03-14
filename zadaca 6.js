var halls

halls = [ 
    {
        id : 1, name : "", reservation : {
            isReserved : false, reservedFrom : null, reservedUntil : null
        }
    },
    { 
        id : 2, name : "", reservation : {
            isReserved : false, reservedFrom : null, reservedUntil : null
        }
    },
    {
        id : 3, name : "", reservation : {
            isReserved : false, reservedFrom : null, reservedUntil : null
        }
    },
    {
        id : 4, name : "",reservation : {
            isReserved : false, reservedFrom : null, reservedUntil : null
        }
    },
    {
        id : 5, name : "",reservation : {
            isReserved : false, reservedFrom : null, reservedUntil : null
        }
    }
];

function add(name) {
    var hall = {
        id : halls.size() + 1, name : name, reservation : {
            isReserved : false, reservedFrom : null, reservedUntil : null
        }
    }
    halls.push(hall);
}

function remove(id) {
    for (let i = 0; i < halls.length; i++)
    { 
        if (halls[i].id == id)
        {
            halls.splice(i, 1);
        }
    }
}

function reservation(id, reservedFrom, reservedUntil) {
    for (let i = 0; i < halls.length; i++) {
        if (halls[i].id == id) {
            halls[i].reservation.isReserved = true; 
            halls[i].reservation.reservedFrom = reservedFrom;
            halls[i].reservation.reservedUntil = reservedUntil;
        }
    }

}
function checkReservation(id) {
    for (let i = 0; i < halls.length; i++) {
        if (halls[i].id == id) {
            if (halls[i].reservation.reservedUntil < Date.now()) {
                halls[i].reservation.isReserved = false;
                halls[i].reservation.reservedFrom = null;
                halls[i].reservation.reservedUntil = null;
            }
        }
    }
}