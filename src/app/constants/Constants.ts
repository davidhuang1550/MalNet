import {Citation} from '../model/citation.model';
import {Person} from '../model/person.model';

/**
 * Constant class used to configure the output quotes on the first page of the website.
 */

export class Constant {

    public static readonly FAQ = {
        'Where do the Android APK\'s come from?' : 'The Android APKs were generously provided from the AndrooZoo repository https://androzoo.uni.lu/',
        'Do I have to worry about my computer being infected by downloading these files?' : 'No. The image and graph representations are completely benign.',
        'Where can I download the images and graphs?' : 'They can be downloaded from this page Download'
    };

    public static readonly NAV_ITEMS: Map<string, string> = new Map([
        ['explore' , 'Explore']
    ]);

    public static readonly CITATION_DATA = [
        new Citation('Evaluating Graph Vulnerability and Robustness using TIGER',
            [
                new Person('Scott Freitas', 'https://google.ca'),
                new Person('Duen Horng (Polo) Chau', 'https://google.ca')
            ],
            'arXiv (arXiv). Online, 2020.',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            ''),
        new Citation('Extracting Knowledge For Adversarial Detection and Defense in Deep Learning',
            [
                new Person('Scott Freitas', 'https://google.ca'),
                new Person('Duen Horng (Polo) Chau', 'https://google.ca')
            ],
            'arXiv (arXiv). Online, 2020.',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            ''),
        new Citation('X-Rank: Explainable Ranking in Complex Multi-Layered Networks',
            [
                new Person('Scott Freitas', 'https://google.ca'),
                new Person('Duen Horng (Polo) Chau', 'https://google.ca')
            ],
            'arXiv (arXiv). Online, 2020.',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            ''),
        new Citation('Rapid Analysis of Network Connectivity',
            [
                new Person('Scott Freitas', 'https://google.ca'),
                new Person('Duen Horng (Polo) Chau', 'https://google.ca')
            ],
            'arXiv (arXiv). Online, 2020.',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            'https://google.ca',
            '')
    ];
}
