"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
// Firebase
var firebase_config_service_1 = require('../../core/service/firebase-config.service');
// inject an instance of Firebase
var BugService = (function () {
    // require FireBase in constructor
    function BugService(fire) {
        this.fire = fire;
        // points to our database endpoint
        this.bugsDbRef = this.fire.database.ref('/bugs');
    }
    // listen for child added in DB
    BugService.prototype.getAddedBugs = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            // reference the DB service and every bug added
            _this.bugsDbRef.on('child_added', function (bug) {
                // .val() extracts the structure of the Bug Model and creates a JS object
                var newBug = bug.val();
                // collect id for each bug in the DB
                newBug.id = bug.key;
                obs.next(newBug);
            }, function (err) {
                obs.throw(err);
            });
        });
    }; // end getAddedBugs() 
    // Add new Bug
    BugService.prototype.addBug = function (bug) {
        // create a reference to each new bug Object
        var newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Jack Lyons',
            createdDate: Date.now()
        })
            .catch(function (err) { return console.error('Unable to add bug to firebase', err); });
    }; // end addBug() 
    // Update bug records to DB
    BugService.prototype.updateBug = function (bug) {
        var currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = 'Jack Lyons';
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    }; // end updateBug() 
    BugService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], BugService);
    return BugService;
}());
exports.BugService = BugService;
//# sourceMappingURL=bug.service.js.map