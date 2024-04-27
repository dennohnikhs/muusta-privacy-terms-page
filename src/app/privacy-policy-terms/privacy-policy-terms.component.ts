import { Component } from "@angular/core";
import { CopyrightComponent } from "../copyright/copyright.component";

@Component({
  selector: "app-privacy-policy-terms",
  standalone: true,
  imports: [CopyrightComponent],
  templateUrl: "./privacy-policy-terms.component.html",
  styleUrl: "./privacy-policy-terms.component.scss",
})
export class PrivacyPolicyTermsComponent {}
