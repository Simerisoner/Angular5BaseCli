import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { GitHubServices } from "./services/git-hub.service";
import { ColorService } from "./services/color.service";
import { LoginService } from './services/valida-login.service';

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    GitHubServices,
    ColorService,
    LoginService
];
