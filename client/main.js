import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

let gName = "Gordan Ramsey";

Template.allData.helpers({
    guestName(){
        return gName;
    },
    skill(){
        return "Chefing"
    },
    mySkill(){
        if (gName == "Toffy"){
            return true;
        }
            return false;
    }
});

Template.allData.events({
    'mouseout h3'(event, instance){
        console.log("ITS RAWWWWWW");
    },
    'mouseenter h6'(event, instance){
        console.log("Header 6 touched");
    }
})

        