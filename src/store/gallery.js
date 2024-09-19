export default {
    namespaced: true,
    state: {
        galleryImages: [
            {
                name: "Gallery 1",
                sid: "gallery-1",
                images: [
                    "/img/gallery/1.jpeg",
                    "/img/gallery/2.jpeg",
                    "/img/gallery/3.jpeg",
                    "/img/gallery/4.jpeg",
                    "/img/gallery/5.jpeg",
                    "/img/gallery/6.jpeg",
                    "/img/gallery/7.jpeg",
                    "/img/gallery/8.jpeg",
                ],
            },
            {
                name: "Gallery 2",
                sid: "gallery-2",
                images: [
                    "/img/gallery/9.jpeg",
                    "/img/gallery/10.jpeg",
                    "/img/gallery/11.jpeg",
                    "/img/gallery/12.jpeg",
                    "/img/gallery/13.jpeg",
                    "/img/gallery/14.jpeg",
                    "/img/gallery/15.jpeg",
                    "/img/gallery/16.jpeg",
                ],
            },
            {
                name: "Gallery 3",
                sid: "gallery-3",
                images: [
                    "/img/gallery/17.jpeg",
                    "/img/gallery/18.jpeg",
                    "/img/gallery/19.jpeg",
                    "/img/gallery/20.jpeg",
                    "/img/gallery/21.jpeg",
                    "/img/gallery/22.jpeg",
                    "/img/gallery/23.jpeg",
                    "/img/gallery/24.jpeg",
                ],
            },
        ],
    },
    getters: {
        getGalleryImages: state => state.galleryImages,
        getGalleryImage: (state) => (productId) => {
            let index = state.galleryImages.findIndex(product => product.sid == productId);
            return state.galleryImages[index];
        },
    },
    mutations: {},
    actions: {}
}