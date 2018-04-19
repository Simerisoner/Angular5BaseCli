import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { GitHubServices } from "./services/git-hub.service";

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    GitHubServices
];
