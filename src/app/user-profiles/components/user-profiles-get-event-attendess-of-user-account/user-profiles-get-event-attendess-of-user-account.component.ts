import {Component} from '@angular/core';
import {
  EventsGetEventAttendeesOfUserAccountComponent, EventsGetEventAttendeesOfUserAccountScrollingComponent
} from '@events/components/events-get-event-attendees-of-user-account/events-get-event-attendees-of-user-account.component';

@Component({
  selector: 'user-profiles-get-event-attendess-of-user-account',
  templateUrl: './user-profiles-get-event-attendess-of-user-account.component.html',
  styleUrls: ['./user-profiles-get-event-attendess-of-user-account.component.scss']
})
export class UserProfilesGetEventAttendessOfUserAccountComponent extends EventsGetEventAttendeesOfUserAccountComponent {

}

@Component({
  selector: 'user-profiles-get-event-attendess-of-user-account-scrolling',
  templateUrl: './user-profiles-get-event-attendess-of-user-account-scrolling.component.html',
  styleUrls: ['./user-profiles-get-event-attendess-of-user-account.component.scss']
})
export class UserProfilesGetEventAttendessOfUserAccountScrollingComponent extends EventsGetEventAttendeesOfUserAccountScrollingComponent {
  navigateToInstagram(instagram_url?: string) {
    this.router.navigate(['/']).then(() => {window.location.href = 'http://www.cnn.com/'; });
  }
}
