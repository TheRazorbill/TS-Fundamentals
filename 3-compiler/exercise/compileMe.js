"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEvent = createEvent;
exports.createUser = createUser;
var EVENTS = [];
var USERS = [];
function createNextId(data) {
    var lastItem = data[data.length - 1];
    if (!lastItem) {
        return 1;
    }
    else {
        return lastItem.id + 1;
    }
}
function createUser(username, name, email) {
    var user = {
        id: createNextId(USERS),
        username: username,
        name: name,
    };
    if (email) {
        user.email = email;
    }
    USERS.push(user);
    return user;
}
function createEvent(host, eventDetails) {
    var date = eventDetails.date, title = eventDetails.title, image_url = eventDetails.image_url, description = eventDetails.description;
    var eventDate = new Date(date);
    var event = {
        id: createNextId(EVENTS),
        host_id: host.id,
        date: eventDate,
        title: title,
    };
    if (image_url) {
        event.image_url = image_url;
    }
    if (description) {
        event.description = description;
    }
    EVENTS.push(event);
    return event;
}
