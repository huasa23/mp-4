export interface NarutoType {
    title: string;
    primaryimageurl: string;
    url: string;
    images: {
        baseimageurl: string;
        // jpg: {
        //     image_url: string;
        // }
    };
    // trailer: {
    //     url: string;
    // }
    // score: number;
    id: string;
    createdate: string;
    venues: {
        name: string;
        zipcode: string;
        address1: string;
        city: string;
        state: string;
    }[];
}