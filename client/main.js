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

//addition

Template.addNum.onCreated(function addNumOnCreated(){
this.num1 = new ReactiveVar(0);
this.num2 = new ReactiveVar(0);
});

Template.addNum.helpers({
    num1(){
        return Template.instance().num1.get();
    },
    num2(){
        return Template.instance().num2.get();
    },
    ans(){
        return Template.instance().num1.get() + Template.instance().num2.get();
    }
});

Template.addNum.events({
    'click #js-adding'(event, instance) {
        instance.num1.set(parseInt(document.querySelector("#n1a").value));
        instance.num2.set(parseInt(document.querySelector("#n2a").value));
    }
});

//subtraction

Template.subNum.onCreated(function subNumOnCreated(){
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
    });
    
    Template.subNum.helpers({
        num1(){
            return Template.instance().num1.get();
        },
        num2(){
            return Template.instance().num2.get();
        },
        ans(){
            return Template.instance().num1.get() - Template.instance().num2.get();
        }
    });
    
    Template.subNum.events({
        'click #js-subing'(event, instance) {
            instance.num1.set(parseInt(document.querySelector("#n1s").value));
            instance.num2.set(parseInt(document.querySelector("#n2s").value));
        }
    });

//multiplication

Template.multNum.onCreated(function multNumOnCreated(){
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
    });
        
        Template.multNum.helpers({
            num1(){
                return Template.instance().num1.get();
            },
            num2(){
                return Template.instance().num2.get();
            },
            ans(){
                return Template.instance().num1.get() * Template.instance().num2.get();
            }
        });
        
        Template.multNum.events({
            'click #js-multing'(event, instance) {
                instance.num1.set(parseInt(document.querySelector("#n1m").value));
                instance.num2.set(parseInt(document.querySelector("#n2m").value));
            }
        });
//division

Template.divNum.onCreated(function divNumOnCreated(){
    this.num1 = new ReactiveVar(0);
    this.num2 = new ReactiveVar(0);
    });
                
        Template.divNum.helpers({
            num1(){
                return Template.instance().num1.get();
            },
            num2(){
                return Template.instance().num2.get();
            },
            ans(){
                return Template.instance().num1.get() / Template.instance().num2.get();
            }
        });
                
        Template.divNum.events({
            'click #js-diving'(event, instance) {
                instance.num1.set(parseInt(document.querySelector("#n1d").value));
                instance.num2.set(parseInt(document.querySelector("#n2d").value));
            }
        });
        