import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';

@Injectable({
    providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {

    constructor(private memberService: MembersService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Member> {
        const username = route.paramMap.get('username');

        if (username !== null) {
            return this.memberService.getMember(username);
        }
        else {
            throw new Error('Username is null');
        }
    }
    //đoạn này sửa theo chatGPT,
}