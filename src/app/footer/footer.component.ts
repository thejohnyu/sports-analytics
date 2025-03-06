import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {}
