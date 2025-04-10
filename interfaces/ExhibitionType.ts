export interface ExhibitionType {
    title: string;
    primaryimageurl: string;
    url: string;
    images: {
        baseimageurl: string;
    };
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