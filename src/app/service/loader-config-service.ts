import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})export class LoaderConfigService {

    citations = 'assets/config/citations.json';
    downloads = 'assets/config/downloads.json';
    faq = 'assets/config/faq.json';
    team = 'assets/config/team.json';
    about = 'assets/config/about.json';
    home = 'assets/config/home.json';
    stats = 'assets/config/stats.json';
    particles = 'assets/config/particles.json'

    constructor(private http: HttpClient) {
    }

    load(fileName: string): Promise<any> {
        return this.http.get(fileName)
            .toPromise()
            .then( result => {
                return result;
            }).catch(err => {
                console.log(err.message);
                return err;
            });
    }

    fetchFAQConfig(): Promise<any> {
        return this.load(this.faq);
    }

    fetchDownloads(): Promise<any> {
        return this.load(this.downloads);
    }

    fetchCitations(): Promise<any> {
        return this.load(this.citations);
    }

    fetchTeam(): Promise<any> {
        return this.load(this.team);
    }

    fetchAbout(): Promise<any> {
        return this.load(this.about);
    }

    fetchHome(): Promise<any> {
        return this.load(this.home);
    }

    fetchStats(): Promise<any> {
        return this.load(this.stats);
    }

    fetchParticles(): Promise<any> {
        return this.load(this.particles);
    }
}
