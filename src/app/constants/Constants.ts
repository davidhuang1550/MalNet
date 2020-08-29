/**
 * Constant class used to configure the output quotes on the first page of the website.
 */

export class Constant {

    public static readonly FAQ = {
        "Where do the Android APK's come from?" : "The Android APKs were generously provided from the AndrooZoo repository https://androzoo.uni.lu/",
        "Do I have to worry about my computer being infected by downloading these files?" : "No. The image and graph representations are completely benign.",
        "Where can I download the images and graphs?" : "They can be downloaded from this page Download"
    }

    public static readonly NAV_ITEMS: Map<string, string> = new Map([
        ['explore' , 'Explore']
    ]);
}
